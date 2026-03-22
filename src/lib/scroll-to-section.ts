const HEADER_HEIGHT = 72;
const MAX_RETRIES = 5;
const RETRY_DELAY = 150;

/**
 * Scrolls to a section by id with header offset compensation.
 * Retries if the element isn't in the DOM yet (lazy-loaded sections).
 */
export function scrollToSection(id: string, attempt = 0) {
  const el = document.getElementById(id);

  if (!el) {
    if (attempt < MAX_RETRIES) {
      setTimeout(() => scrollToSection(id, attempt + 1), RETRY_DELAY);
    }
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });

  // Re-check position after scroll + layout settle (images/lazy content)
  if (attempt === 0) {
    setTimeout(() => {
      const corrected = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      if (Math.abs(corrected - window.scrollY) > 10) {
        window.scrollTo({ top: corrected, behavior: "smooth" });
      }
    }, 600);
  }
}

/**
 * Handles click on an anchor link: prevents default, scrolls to section.
 */
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  if (id) scrollToSection(id);
}

/**
 * On initial page load, handle hash in URL after content is ready.
 */
export function scrollToHashOnLoad() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  // Wait for lazy content to mount
  const tryScroll = () => scrollToSection(hash);
  
  if (document.readyState === "complete") {
    setTimeout(tryScroll, 300);
  } else {
    window.addEventListener("load", () => setTimeout(tryScroll, 300), { once: true });
  }
}
