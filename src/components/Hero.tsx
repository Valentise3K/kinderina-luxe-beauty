import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import heroImage from "@/assets/hero-portrait.jpg";

const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-svh flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kinderina — визажист и стилист"
          className="w-full h-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="nav-link text-muted-foreground mb-6">
              Визажист · Стилист · Brow-мастер
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.04em] text-foreground mb-6 text-balance">
              Kinderina
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
              Макияж, укладки и брови с&nbsp;акцентом на&nbsp;естественную красоту
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" asChild>
                <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer">
                  Записаться
                </a>
              </Button>
              <Button variant="premium-outline" size="xl" asChild>
                <a href="#portfolio">Посмотреть портфолио</a>
              </Button>
              <Button variant="ghost" size="xl" asChild>
                <a href="#courses">Курсы</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
