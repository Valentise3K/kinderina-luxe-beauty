import { FadeIn } from "@/components/FadeIn";
import aboutImage from "@/assets/about-portrait.jpg";

const trustPoints = [
  {
    title: "Индивидуальный подход",
    description: "Каждый образ создаётся с учётом ваших особенностей",
  },
  {
    title: "Современные техники",
    description: "Актуальные тренды и проверенные методики",
  },
  {
    title: "Профессиональные материалы",
    description: "Только премиальная косметика ведущих брендов",
  },
  {
    title: "Забота о деталях",
    description: "Аккуратность и внимание к каждой мелочи",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn>
            <div className="image-hover-zoom aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src={aboutImage}
                alt="Kinderina — профессиональный визажист"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <p className="nav-link text-primary mb-4">О мастере</p>
              <h2 className="section-heading mb-8 text-balance">Искусство подчеркивать вашу уникальность</h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-12">
                <p>Меня зовут Карина🤍.</p>
                <p>
                  Каждая из моих услуг подчеркнет индивидуальность и сделает взгляд более открытым и выразительным🫶🏻
                </p>
                <p>В работе я ценю аккуратность, эстетику, комфорт клиента и&nbsp;внимание к деталям.</p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustPoints.map((point, i) => (
                <FadeIn key={point.title} delay={150 + i * 80}>
                  <div className="group">
                    <div className="w-8 h-[1px] bg-primary mb-4 transition-all duration-500 group-hover:w-12" />
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
