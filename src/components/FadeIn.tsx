import { useEffect, useRef, ReactNode, forwardRef } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, className = "", delay = 0 }, _ref) => {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div
        ref={innerRef}
        className={className}
        style={{
          opacity: 0,
          transform: "translateY(12px)",
          transition: `opacity 0.6s cubic-bezier(0.2, 0, 0, 1) ${delay}ms, transform 0.6s cubic-bezier(0.2, 0, 0, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
);

FadeIn.displayName = "FadeIn";
