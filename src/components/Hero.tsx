import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { BookingDialog } from "@/components/BookingDialog";
const heroImage = "/hero-portrait.jpg";

export const Hero = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-svh flex flex-col overflow-hidden">
      {/* Background image — editorial framing */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kinderina — визажист и стилист"
          className="w-full h-full object-cover object-[center_10%] md:object-[center_15%]"
          fetchPriority="high"
          decoding="async"
        />
        {/* Multi-layer premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 via-40% to-background/98 to-80%" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-background/50 md:from-background/85 md:via-background/40 md:to-transparent" />
        {/* Warm glow layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_transparent_40%,_hsl(var(--primary)/0.06)_100%)]" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-8 md:px-6 flex flex-col flex-1 justify-end md:justify-center pb-[env(safe-area-inset-bottom)] pt-32 md:py-40">
        <div className="max-w-2xl mb-12 md:mb-0">
          {/* Subtitle */}
          <FadeIn>
            <p className="text-[9px] sm:text-[10px] md:text-[13px] uppercase tracking-[0.15em] md:tracking-[0.15em] font-semibold text-foreground/85 mb-4 md:mb-6 whitespace-nowrap">
              Makeup&ensp;·&ensp;Hair&ensp;·&ensp;Brows&ensp;·&ensp;Voronezh
            </p>
          </FadeIn>

          {/* Main title */}
          <FadeIn delay={120}>
            <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.05em] text-foreground leading-[0.9] mb-5 md:mb-6">
              Kinderina
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={240}>
            <p className="text-[15px] md:text-lg text-foreground/80 leading-relaxed max-w-sm md:max-w-lg mb-10 md:mb-12 font-normal">
              Макияж, укладкиб брови и&nbsp;ресницы с&nbsp;акцентом
              <br className="hidden sm:inline" /> на&nbsp;естественную красоту
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={360}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-center">
              {/* Primary CTA */}
              <button
                onClick={() => setBookingOpen(true)}
                className="group relative inline-flex items-center justify-center h-[52px] sm:h-14 px-10 rounded-full bg-primary text-primary-foreground text-[14px] sm:text-[15px] font-medium tracking-[0.04em] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Записаться
              </button>

              {/* Secondary CTAs */}
              <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-3">
                {[
                  { href: "#portfolio", label: "Портфолио" },
                  { href: "#services", label: "Услуги" },
                  { href: "#courses", label: "Курсы" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center justify-center h-11 sm:h-12 px-4 sm:px-7 rounded-full border border-foreground/12 bg-background/70 backdrop-blur-md text-foreground text-[13px] sm:text-[14px] font-medium tracking-[0.02em] transition-all duration-400 hover:border-primary/40 hover:bg-background/90 active:scale-[0.97]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};
