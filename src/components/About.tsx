import { FadeIn } from "@/components/FadeIn";
import aboutImage from "@/assets/about-portrait.jpg";

const stats = [
  { value: "100+", label: "Довольных клиентов" },
  { value: "2 года", label: "Опыт работы" },
  { value: "Премиум", label: "Косметика" },
];

const trustPoints = [
  {
    title: "Индивидуальный подход",
    description: "Подбираю технику и оттенки с учётом типа внешности, формы лица и личных предпочтений",
  },
  {
    title: "Премиальные материалы",
    description: "Работаю только с профессиональной косметикой: SHIK, CATRICE, INFLUENCE BEAUTY",
  },
  {
    title: "Стойкий результат",
    description: "Макияж и укладка держатся весь день — от утренних сборов до поздней вечеринки",
  },
  {
    title: "Комфорт и забота",
    description: "Спокойная атмосфера, внимание к деталям и бережное отношение к каждому клиенту",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
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
              <p className="nav-link text-primary-text mb-4">О мастере</p>
              <h2 className="section-heading mb-6 text-balance">Карина — ваш мастер красоты</h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-foreground/80 leading-relaxed mb-8 text-[15px] md:text-base">
                Создаю образы, которые подчёркивают индивидуальность. В каждой услуге ценю аккуратность, эстетику
                и&nbsp;комфорт клиента. Работаю в&nbsp;Воронеже — в&nbsp;салоне и&nbsp;с&nbsp;выездом.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={150}>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-background">
                    <p className="font-serif text-xl md:text-2xl font-medium text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-5">
              {trustPoints.map((point, i) => (
                <FadeIn key={point.title} delay={200 + i * 80}>
                  <div className="group">
                    <div className="w-8 h-[1px] bg-primary mb-3 transition-all duration-500 group-hover:w-12" />
                    <h3 className="font-serif text-lg font-medium text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
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
