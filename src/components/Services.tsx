import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

interface Service {
  title: string;
  price: string;
  duration: string;
}

interface ServiceGroup {
  title: string;
  services: Service[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Брови",
    services: [
      { title: "Долговременная укладка и коррекция с окрашиванием бровей", price: "1 600 ₽", duration: "1 ч" },
      { title: "Долговременная укладка и коррекция/окрашивание бровей", price: "1 400 ₽", duration: "1 ч" },
      { title: "Коррекция и окрашивание бровей", price: "1 200 ₽", duration: "1 ч" },
      { title: "Коррекция бровей", price: "800 ₽", duration: "30 мин" },
      { title: "Окрашивание бровей", price: "800 ₽", duration: "30 мин" },
    ],
  },
  {
    title: "Ресницы",
    services: [
      { title: "Ламинирование ресниц", price: "1 500 ₽", duration: "1 ч" },
    ],
  },
  {
    title: "Комплексы",
    services: [
      { title: "Комплекс №1 — ламинирование ресниц и коррекция с окрашиванием бровей", price: "2 300 ₽", duration: "2 ч" },
      { title: "Комплекс №2 — ламинирование ресниц, ламинирование бровей с коррекцией и окрашиванием", price: "2 600 ₽", duration: "2 ч" },
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

        <div className="max-w-3xl mx-auto space-y-16">
          {serviceGroups.map((group, gi) => (
            <div key={group.title}>
              <FadeIn delay={gi * 60}>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-6 text-center">
                  {group.title}
                </h3>
              </FadeIn>

              <div className="space-y-3">
                {group.services.map((service, si) => (
                  <FadeIn key={si} delay={gi * 60 + si * 80}>
                    <div className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors duration-300">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm md:text-base leading-snug">
                          {service.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs">{service.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-primary font-semibold tabular-nums text-sm md:text-base">
                          {service.price}
                        </span>
                        <Button size="sm" variant="outline" asChild className="rounded-full text-xs px-4">
                          <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer">
                            Записаться
                          </a>
                        </Button>
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
