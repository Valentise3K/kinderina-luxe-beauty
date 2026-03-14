import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceBrows from "@/assets/service-brows.jpg";
import portfolioHair from "@/assets/portfolio-hair.jpg";
import portfolioLashes from "@/assets/portfolio-lashes.jpg";
import portfolioBridal from "@/assets/portfolio-bridal.jpg";

const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

interface ServiceGroup {
  title: string;
  services: {
    image: string;
    title: string;
    description: string;
    price: string;
  }[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Брови и ресницы",
    services: [
      { image: serviceBrows, title: "Коррекция бровей", description: "Идеальная форма с учётом типа лица", price: "от 1 500 ₽" },
      { image: serviceBrows, title: "Ламинирование бровей", description: "Ухоженные и аккуратные брови", price: "от 2 500 ₽" },
      { image: serviceBrows, title: "Окрашивание бровей", description: "Подбор идеального оттенка", price: "от 1 200 ₽" },
      { image: portfolioLashes, title: "Наращивание ресниц", description: "Естественный или яркий объём", price: "от 3 000 ₽" },
      { image: portfolioLashes, title: "Ламинирование ресниц", description: "Выразительный взгляд без наращивания", price: "от 2 500 ₽" },
    ],
  },
  {
    title: "Макияж",
    services: [
      { image: serviceMakeup, title: "Дневной макияж", description: "Лёгкий и естественный образ", price: "от 3 000 ₽" },
      { image: serviceMakeup, title: "Вечерний макияж", description: "Яркий и стойкий мейкап", price: "от 4 000 ₽" },
    ],
  },
  {
    title: "Укладки и волосы",
    services: [
      { image: portfolioHair, title: "Укладка", description: "Объём, локоны или гладкость", price: "от 2 500 ₽" },
      { image: portfolioHair, title: "Причёска", description: "Сложные причёски для торжеств", price: "от 4 000 ₽" },
    ],
  },
  {
    title: "Свадебные услуги",
    services: [
      { image: portfolioBridal, title: "Свадебный образ", description: "Макияж и причёска для невесты", price: "от 8 000 ₽" },
      { image: portfolioBridal, title: "Пробный образ", description: "Подбор идеального свадебного стиля", price: "от 5 000 ₽" },
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary mb-4">Услуги</p>
            <h2 className="section-heading mb-4">Услуги и цены</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="space-y-20">
          {serviceGroups.map((group, gi) => (
            <div key={group.title}>
              <FadeIn delay={gi * 60}>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
                  {group.title}
                </h3>
              </FadeIn>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((service, si) => (
                  <FadeIn key={service.title} delay={gi * 60 + si * 80}>
                    <div className="card-premium bg-card overflow-hidden group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-serif text-xl font-medium text-foreground mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm tabular-nums text-primary font-medium">
                            {service.price}
                          </span>
                          <Button variant="link" size="sm" asChild className="text-foreground">
                            <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer">
                              Записаться
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
