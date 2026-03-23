const FALLBACK_HEADER_HEIGHT = 72;
const MAX_RETRIES = 40;
const RETRY_DELAY = 100;
const INITIAL_SCROLL_DELAY = 100;
const PAGE_READY_TIMEOUT = 2500;
const FONTS_READY_TIMEOUT = 1800;
const LAYOUT_STABLE_TIMEOUT = 1400;
const LAYOUT_STABLE_STEP = 80;
const LAYOUT_STABLE_DELTA = 1;
const REQUIRED_STABLE_STEPS = 3;
const BASE_SCROLL_DURATION = 520;
const MAX_SCROLL_DURATION = 900;

let activeFrame: number | null = null;
let activeRequest = 0;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function withTimeout(promise: Promise<unknown>, timeout: number) {
  await Promise.race([promise, wait(timeout)]);
}

function cancelCurrentAnimation() {
  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame);
    activeFrame = null;
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getHeaderOffset() {
  const nav = document.querySelector("header nav");
  if (nav) return Math.round(nav.getBoundingClientRect().height);

  const header = document.querySelector("header");
  if (header) return Math.round(header.getBoundingClientRect().height);

  return FALLBACK_HEADER_HEIGHT;
}

function getTargetTop(element: HTMLElement) {
  return Math.max(0, element.getBoundingClientRect().top + window.scrollY - getHeaderOffset());
}

async function waitForPageReady() {
  const waitForLoad =
    document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });

  const fontSet = (document as Document & { fonts?: FontFaceSet }).fonts;
  const waitForFonts = fontSet?.ready ?? Promise.resolve();

  await Promise.all([
    withTimeout(waitForLoad, PAGE_READY_TIMEOUT),
    withTimeout(waitForFonts, FONTS_READY_TIMEOUT),
    wait(INITIAL_SCROLL_DELAY),
  ]);
}

async function waitForTarget(sectionId: string, requestId: number) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    if (requestId !== activeRequest) return null;

    const el = document.getElementById(sectionId);
    if (el) return el;

    await wait(RETRY_DELAY);
  }

  return null;
}

async function waitForStableLayout(sectionId: string, requestId: number) {
  let stableSteps = 0;
  let previousTop: number | null = null;
  const startTime = performance.now();

  while (performance.now() - startTime < LAYOUT_STABLE_TIMEOUT) {
    if (requestId !== activeRequest) return;

    const el = document.getElementById(sectionId);
    if (!el) {
      stableSteps = 0;
      previousTop = null;
      await wait(RETRY_DELAY);
      continue;
    }

    const top = getTargetTop(el);
    if (previousTop !== null && Math.abs(top - previousTop) <= LAYOUT_STABLE_DELTA) {
      stableSteps += 1;
      if (stableSteps >= REQUIRED_STABLE_STEPS) return;
    } else {
      stableSteps = 0;
    }

    previousTop = top;
    await wait(LAYOUT_STABLE_STEP);
  }
}

function easeInOutCubic(value: number) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function getScrollDuration(distance: number) {
  return Math.min(MAX_SCROLL_DURATION, Math.max(BASE_SCROLL_DURATION, distance * 0.45));
}

function performScroll(sectionId: string, requestId: number) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  if (prefersReducedMotion()) {
    window.scrollTo({ top: getTargetTop(target), behavior: "auto" });
    return;
  }

  cancelCurrentAnimation();

  const startY = window.scrollY;
  const initialTargetY = getTargetTop(target);
  const distance = Math.abs(initialTargetY - startY);
  if (distance < 1) return;

  const duration = getScrollDuration(distance);
  const startedAt = performance.now();

  const step = (now: number) => {
    if (requestId !== activeRequest) {
      activeFrame = null;
      return;
    }

    const el = document.getElementById(sectionId);
    if (!el) {
      activeFrame = null;
      return;
    }

    const progress = Math.min((now - startedAt) / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const currentTargetY = getTargetTop(el);
    const nextY = startY + (currentTargetY - startY) * easedProgress;

    window.scrollTo({ top: nextY, behavior: "auto" });

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
      return;
    }

    const finalTargetY = getTargetTop(el);
    if (Math.abs(finalTargetY - window.scrollY) > 1) {
      window.scrollTo({ top: finalTargetY, behavior: "auto" });
    }

    activeFrame = null;
  };

  activeFrame = requestAnimationFrame(step);
}

/**
 * Scrolls to a section by id with header offset compensation.
 * Retries until lazy-loaded sections are mounted.
 */
export async function scrollToSection(id: string) {
  const sectionId = id.trim();
  if (!sectionId) return;

  const requestId = ++activeRequest;

  await waitForPageReady();
  if (requestId !== activeRequest) return;

  const el = await waitForTarget(sectionId, requestId);
  if (!el || requestId !== activeRequest) return;

  await waitForStableLayout(sectionId, requestId);
  if (requestId !== activeRequest) return;

  requestAnimationFrame(() => {
    if (requestId !== activeRequest) return;
    performScroll(sectionId, requestId);
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
  if (id) {
    cancelCurrentAnimation();
    void scrollToSection(id);
  }
}

/**
 * On initial page load, handle hash in URL after content is ready.
 */
export function scrollToHashOnLoad() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  setTimeout(() => {
    void scrollToSection(hash);
  }, 0);
}
