const FALLBACK_HEADER_HEIGHT = 72;
const MAX_RETRIES = 40;
const RETRY_DELAY = 100;

function getHeaderOffset() {
  const header = document.querySelector("header");
  if (!header) return FALLBACK_HEADER_HEIGHT;
  return Math.round(header.getBoundingClientRect().height);
}

function getTargetTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
}

/**
 * Single smooth scroll + one silent correction after layout settles.
 */
function performScroll(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  window.scrollTo({ top: getTargetTop(target), behavior: "smooth" });

  // After the smooth scroll finishes (~800ms), silently correct if layout shifted
  setTimeout(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const diff = Math.abs(getTargetTop(el) - window.scrollY);
    if (diff > 15) {
      // Instant correction — no visible jank
      window.scrollTo({ top: getTargetTop(el), behavior: "instant" as ScrollBehavior });
    }
  }, 900);
}

/**
 * Scrolls to a section by id with header offset compensation.
 * Retries until lazy-loaded sections are mounted.
 */
export function scrollToSection(id: string, attempt = 0) {
  const el = document.getElementById(id);

  if (!el) {
    if (attempt < MAX_RETRIES) {
      setTimeout(() => scrollToSection(id, attempt + 1), RETRY_DELAY);
    }
    return;
  }

  // Small delay to let React finish current render cycle
  requestAnimationFrame(() => {
    performScroll(id);
  });
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

  if (document.readyState === "complete") {
    setTimeout(() => scrollToSection(hash), 300);
  } else {
    window.addEventListener("load", () => setTimeout(() => scrollToSection(hash), 300), { once: true });
  }
}
