import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

interface OfferCard {
  title: string;
  description: string;
  note: string;
  buttonText: string;
  buttonHref: string;
  visible?: boolean;
  badge?: string;
}

const offers: OfferCard[] = [
  {
    title: "Клиентский день",
    description:
      "Иногда я открываю несколько мест на услуги в особом формате записи — для новых клиенток, знакомства с мастером и красивых образов в спокойной атмосфере.",
    note: "Количество мест ограничено. Актуальные условия публикуются заранее.",
    buttonText: "Узнать о ближайшей дате",
    buttonHref: "https://t.me/kinderina_vrn",
    visible: true,
  },
  {
    title: "Поиск моделей",
    description:
      "Периодически приглашаю моделей на отдельные услуги для съёмки контента, отработки новых идей и пополнения портфолио.",
    note: "Условия, даты и подходящие типажи указываются отдельно для каждого набора.",
    buttonText: "Смотреть актуальные наборы",
    buttonHref: "https://t.me/kinderina_vrn",
    visible: true,
  },
];

export const SpecialOffers = () => {
  const visibleOffers = offers.filter((o) => o.visible !== false);
  if (visibleOffers.length === 0) return null;

  return (
    <section id="special" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary-text mb-4">
              Специальные предложения
            </p>
            <h2 className="section-heading mb-4">
              Клиентские дни и поиск моделей
            </h2>
            <span className="section-heading-accent" />
            <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed text-base md:text-lg">
              Иногда я открываю специальные даты для записи на услуги в особом
              формате, а&nbsp;также приглашаю моделей для отработки образов,
              новых идей и пополнения портфолио.
            </p>
          </div>
        </FadeIn>

        <div
          className={`grid gap-5 max-w-4xl mx-auto ${
            visibleOffers.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-lg"
          }`}
        >
          {visibleOffers.map((card, i) => (
            <FadeIn key={card.title} delay={i * 100}>
              <div className="card-premium bg-card p-7 md:p-9 h-full flex flex-col">
                {card.badge && (
                  <span className="self-start text-[10px] font-medium uppercase tracking-wider text-primary-text bg-primary/10 px-2.5 py-1 rounded-full mb-4">
                    {card.badge}
                  </span>
                )}

                <h3 className="font-serif text-2xl md:text-[1.7rem] font-light tracking-tight text-foreground mb-4">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-[15px] mb-5 flex-1">
                  {card.description}
                </p>

                <p className="text-xs text-muted-foreground/70 leading-relaxed mb-7">
                  {card.note}
                </p>

                <Button
                  variant="premium-outline"
                  size="default"
                  className="self-start"
                  asChild
                >
                  <a
                    href={card.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.buttonText}
                  </a>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
