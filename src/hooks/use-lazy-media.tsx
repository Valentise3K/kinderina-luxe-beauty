import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean indicating whether the element is
 * (or has been) visible in the viewport.  Once triggered it stays true
 * so media is loaded only once.
 */
export function useLazyMedia(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}
