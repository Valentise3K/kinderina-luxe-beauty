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
    title: "Оформление бровей",
    services: [
      { title: "Коррекция и окрашивание бровей", price: "1 600 ₽", duration: "1 ч" },
      { title: "Коррекция бровей", price: "900 ₽", duration: "30 мин" },
      { title: "Окрашивание бровей", price: "900 ₽", duration: "30 мин" },
      { title: "Долговременная укладка с коррекцией и окрашиванием бровей", price: "2 200 ₽", duration: "1 ч 30 мин" },
      { title: "Долговременная укладка с коррекцией/окрашиванием", price: "1 800 ₽", duration: "1 ч" },
      { title: "Мужская коррекция бровей", price: "1 300 – 1 500 ₽", duration: "1 ч" },
    ],
  },
  {
    title: "Брови и ламинирование ресниц",
    services: [
      { title: "Коррекция и окрашивание ресниц", price: "1 400 – 1 600 ₽", duration: "1 ч" },
      { title: "Ламинирование и окрашивание ресниц", price: "1 900 ₽", duration: "1 ч" },
      { title: "Окрашивание ресниц", price: "400 – 500 ₽", duration: "30 мин" },
      { title: "Коррекция над верхей губой", price: "300 ₽", duration: "15 мин" },
    ],
  },
  {
    title: "Полный образ",
    services: [
      { title: "Вау-Образ", price: "5 500 ₽", duration: "2 ч" },
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
                    <div className="p-4 md:p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors duration-300">
                      <div className="flex items-start justify-between gap-3 md:items-center">
                        <h4 className="font-medium text-foreground text-sm md:text-base leading-snug flex-1 min-w-0">
                          {service.title}
                        </h4>
                        <span className="text-primary font-semibold tabular-nums text-sm md:text-base shrink-0">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs">{service.duration}</span>
                        </div>
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
