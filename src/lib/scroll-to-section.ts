const FALLBACK_HEADER_HEIGHT = 72;
const MAX_RETRIES = 40;
const RETRY_DELAY = 100;
const SCROLL_DELAY = 100;
const CORRECTION_DELAYS = [500, 1100, 1800];

function getHeaderOffset() {
  const header = document.querySelector("header");
  if (!header) return FALLBACK_HEADER_HEIGHT;
  return Math.round(header.getBoundingClientRect().height);
}

function getTargetTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
}

function smoothScrollWithOffset(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  setTimeout(() => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    window.scrollTo({ top: getTargetTop(target), behavior: "smooth" });
  }, SCROLL_DELAY);

  return true;
}

function scheduleCorrections(sectionId: string) {
  CORRECTION_DELAYS.forEach((delay) => {
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const correctedTop = getTargetTop(target);
      if (Math.abs(correctedTop - window.scrollY) > 8) {
        window.scrollTo({ top: correctedTop, behavior: "smooth" });
      }
    }, delay);
  });
}

/**
 * Scrolls to a section by id with header offset compensation.
 * Retries until lazy-loaded sections are mounted.
 */
export function scrollToSection(id: string, attempt = 0) {
  const hasTarget = smoothScrollWithOffset(id);

  if (!hasTarget) {
    if (attempt < MAX_RETRIES) {
      setTimeout(() => scrollToSection(id, attempt + 1), RETRY_DELAY);
    }
    return;
  }

  if (attempt === 0) {
    scheduleCorrections(id);
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

  const tryScroll = () => {
    scrollToSection(hash);
    setTimeout(() => scrollToSection(hash), 700);
  };

  if (document.readyState === "complete") {
    setTimeout(tryScroll, 300);
  } else {
    window.addEventListener("load", () => setTimeout(tryScroll, 300), { once: true });
  }
}
