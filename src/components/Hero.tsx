import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { BookingDialog } from "@/components/BookingDialog";
const heroImage = "/hero-portrait.jpg";

export const Hero = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-svh flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kinderina — визажист и стилист, Воронеж"
          className="w-full h-full object-cover object-[center_10%] md:object-[center_15%]"
          fetchPriority="high"
          width={1080}
          height={1350}
        />
        {/* Reduced overlays for more contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 via-40% to-background/95 to-80%" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent md:from-background/70 md:via-background/30 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 flex flex-col flex-1 justify-end md:justify-center pb-[env(safe-area-inset-bottom)] pt-32 md:py-40">
        <div className="max-w-2xl mb-10 md:mb-0">
          {/* Subtitle */}
          <FadeIn>
            <p className="text-[10px] md:text-[13px] uppercase tracking-[0.15em] font-semibold text-foreground/90 mb-3 md:mb-5">
              Визажист · Бровист · Стилист · Воронеж
            </p>
          </FadeIn>

          {/* Main title */}
          <FadeIn delay={120}>
            <h1 className="font-serif text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.05em] text-foreground leading-[0.9] mb-4 md:mb-5">
              Kinderina
            </h1>
          </FadeIn>

          {/* Description — more specific */}
          <FadeIn delay={240}>
            <p className="text-[15px] md:text-lg text-foreground/85 leading-relaxed max-w-sm md:max-w-md mb-8 md:mb-10">
              Макияж, причёски, оформление бровей
              <br className="hidden sm:inline" /> и&nbsp;ресниц в&nbsp;Воронеже
            </p>
          </FadeIn>

          {/* CTA — clear hierarchy */}
          <FadeIn delay={360}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA */}
              <button
                onClick={() => setBookingOpen(true)}
                className="group relative inline-flex items-center justify-center h-[52px] sm:h-14 px-10 rounded-full bg-primary text-primary-foreground text-[14px] sm:text-[15px] font-semibold tracking-[0.04em] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Записаться онлайн
              </button>

              {/* Secondary — pill buttons */}
              <div className="flex gap-2 sm:gap-2.5">
                {[
                  { href: "#portfolio", label: "Портфолио" },
                  { href: "#services", label: "Услуги" },
                  { href: "#courses", label: "Курсы" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="inline-flex items-center justify-center flex-1 sm:flex-none sm:w-[110px] py-[9px] rounded-full bg-secondary text-muted-foreground text-[12px] sm:text-[13px] font-semibold tracking-[0.04em] transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md active:scale-95"
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
