import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const branches = [
  { name: "Base Studio", address: "Гродненская 65, Воронеж" },
  { name: "Base Studio", address: "Ленинский Проспект 108А, Воронеж" },
];

const YANDEX_MAP_SRC =
  "https://yandex.ru/map-widget/v1/?um=constructor%3A&ll=39.2,51.67&z=12&pt=39.1893,51.6542,pm2rdl1~39.2070,51.6815,pm2rdl2&lang=ru_RU";

export const Locations = () => {
  return (
    <section id="locations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary-text mb-4">Локации</p>
            <h2 className="section-heading mb-4">Где проходит приём</h2>
            <span className="section-heading-accent" />
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Мастер принимает клиентов в студии Base Studio в двух филиалах
              в&nbsp;Воронеже. При записи можно выбрать удобный адрес.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            {branches.map((b, i) => (
              <div
                key={i}
                className="card-premium bg-card border border-border/50 rounded-2xl px-6 py-5 flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-primary-text mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-base">
                    {b.name}
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5 leading-snug">
                    {b.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Выберите удобную локацию при записи
            </p>
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
              <iframe
                src={YANDEX_MAP_SRC}
                width="100%"
                className="h-[280px] md:h-[380px]"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Карта филиалов Base Studio"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Точный филиал можно выбрать во время онлайн-записи
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Locations;
