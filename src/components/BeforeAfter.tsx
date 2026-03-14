import { useState, useRef, useCallback } from "react";
import { FadeIn } from "@/components/FadeIn";
import beforeAfterImage from "@/assets/before-after-brows.jpg";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSliderItem = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "До",
  afterLabel = "После",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-[24px] cursor-ew-resize select-none card-premium"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => updatePosition(e.clientX)}
    >
      {/* After image (full background) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${containerRef.current?.offsetWidth || 0}px`, maxWidth: 'none' }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-primary z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground border-2 border-primary flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.15em] font-medium text-primary-foreground/80 bg-foreground/30 backdrop-blur-sm px-3 py-1 rounded-full z-20">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 text-[11px] uppercase tracking-[0.15em] font-medium text-primary-foreground/80 bg-foreground/30 backdrop-blur-sm px-3 py-1 rounded-full z-20">
        {afterLabel}
      </span>
    </div>
  );
};

export const BeforeAfter = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary mb-4">Результаты</p>
            <h2 className="section-heading mb-4">До и после</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={100}>
            <BeforeAfterSliderItem
              beforeSrc={beforeAfterImage}
              afterSrc={beforeAfterImage}
              beforeLabel="До"
              afterLabel="После"
            />
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              Перетащите ползунок, чтобы увидеть результат
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
