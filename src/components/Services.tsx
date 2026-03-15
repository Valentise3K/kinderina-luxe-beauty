import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { Clock } from "lucide-react";

interface Service {
  title: string;
  description?: string;
  price: string;
  duration: string;
}

interface ServiceGroup {
  title: string;
  subtitle?: string;
  services: Service[];
  notes?: string[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Макияж и причёски",
    services: [
      { title: "Макияж", description: "Свадебный, вечерний, лёгкий, на фотосессию", price: "3 000 ₽", duration: "1 ч" },
      { title: "Причёска / укладка", description: "Свадебная, лёгкая укладка, на фотосессию", price: "3 000 ₽", duration: "1 ч" },
      { title: "Полный образ", description: "Макияж + причёска", price: "5 500 ₽", duration: "2 ч" },
    ],
    notes: [
      "Выезд в пределах города — 1 500 ₽",
      "Выезд за пределы города — индивидуально",
      "Сборы до 8:00 — +500 ₽ · до 6:00 — +1 000 ₽",
    ],
  },
  {
    title: "Брови",
    services: [
      { title: "Окрашивание бровей", price: "800 ₽", duration: "30 мин" },
      { title: "Коррекция бровей", price: "800 ₽", duration: "30 мин" },
      { title: "Коррекция и окрашивание бровей", price: "1 200 ₽", duration: "45 мин" },
      { title: "Долговременная укладка и коррекция бровей", price: "1 400 ₽", duration: "1 ч" },
      { title: "Долговременная укладка, коррекция и окрашивание бровей", price: "1 600 ₽", duration: "1 ч 15 мин" },
      { title: "Удаление пушка над губой", price: "200 ₽", duration: "10 мин" },
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
    subtitle: "Выгоднее, чем по отдельности",
    services: [
      { title: "Комплекс №1", description: "Ламинирование ресниц + коррекция с окрашиванием бровей", price: "2 300 ₽", duration: "1 ч 30 мин" },
      { title: "Комплекс №2", description: "Ламинирование ресниц + долговременная укладка и коррекция с окрашиванием бровей", price: "2 600 ₽", duration: "1 ч 45 мин" },
    ],
  },
];

export const Services = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

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

        <div className="max-w-3xl mx-auto space-y-14">
          {serviceGroups.map((group, gi) => (
            <div key={group.title}>
              <FadeIn delay={gi * 60}>
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground">
                    {group.title}
                  </h3>
                  {group.subtitle && (
                    <p className="text-xs text-muted-foreground mt-1.5 tracking-wide">{group.subtitle}</p>
                  )}
                </div>
              </FadeIn>

              <div className="space-y-2.5">
                {group.services.map((service, si) => (
                  <FadeIn key={si} delay={gi * 60 + si * 60}>
                    <div
                      className="group p-4 md:p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors duration-300 cursor-pointer"
                      onClick={() => setBookingOpen(true)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm md:text-base leading-snug">
                            {service.title}
                          </h4>
                          {service.description && (
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {service.description}
                            </p>
                          )}
                        </div>
                        <span className="text-primary font-semibold tabular-nums text-sm md:text-base shrink-0 pt-0.5">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs">{service.duration}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full text-xs px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            setBookingOpen(true);
                          }}
                        >
                          Записаться
                        </Button>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {group.notes && group.notes.length > 0 && (
                <FadeIn delay={gi * 60 + group.services.length * 60}>
                  <div className="mt-4 p-4 rounded-2xl bg-secondary/50 border border-border/30">
                    <div className="space-y-1.5">
                      {group.notes.map((note, ni) => (
                        <p key={ni} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center mt-14">
            <Button variant="premium" size="lg" onClick={() => setBookingOpen(true)}>
              Записаться
            </Button>
          </div>
        </FadeIn>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};
