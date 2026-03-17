import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

interface OfferCard {
  visible: boolean;
  title: string;
  description: string;
  note: string;
  buttonText: string;
  buttonHref: string;
  /** Optional small badge like "актуально сейчас" */
  statusBadge?: string;
}

const offers: OfferCard[] = [
  {
    visible: true,
    title: "Клиентский день",
    description:
      "В выбранные даты открываю ограниченное количество мест на услуги в специальном формате записи. Это возможность познакомиться со мной, попробовать услугу и получить красивый результат в комфортной атмосфере.",
    note: "Количество мест ограничено. Актуальные условия публикуются заранее.",
    buttonText: "Узнать о ближайшей дате",
    buttonHref: "https://t.me/kinderina_beauty",
    // statusBadge: "актуально сейчас",
  },
  {
    visible: true,
    title: "Поиск моделей",
    description:
      "Периодически я приглашаю моделей на определённые услуги для создания контента, отработки образов и обновления портфолио. Это отличный вариант для тех, кто давно хотел записаться и готов к выбранному формату.",
    note: "Условия, даты и подходящие типажи указываются отдельно для каждого набора.",
    buttonText: "Смотреть актуальные наборы",
    buttonHref: "https://t.me/kinderina_beauty",
    // statusBadge: "открыт набор",
  },
];

export const SpecialOffers = () => {
  const visibleOffers = offers.filter((o) => o.visible);
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
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed text-[15px]">
              Иногда я открываю специальные даты для записи на услуги в особом
              формате, а также приглашаю моделей для отработки образов, новых
              идей и пополнения портфолио.
            </p>
          </div>
        </FadeIn>

        <div
          className={`grid gap-5 max-w-4xl mx-auto ${
            visibleOffers.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-lg"
          }`}
        >
          {visibleOffers.map((offer, i) => (
            <FadeIn key={offer.title} delay={i * 100}>
              <div className="card-premium bg-card p-7 md:p-9 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl md:text-[26px] font-light tracking-tight text-foreground">
                    {offer.title}
                  </h3>
                  {offer.statusBadge && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-primary-text bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap ml-3 mt-1">
                      {offer.statusBadge}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed text-[14px] mb-5 flex-1">
                  {offer.description}
                </p>

                <p className="text-[12px] text-muted-foreground/70 leading-relaxed mb-6 italic">
                  {offer.note}
                </p>

                <Button
                  variant="premium-outline"
                  size="default"
                  asChild
                  className="w-full"
                >
                  <a
                    href={offer.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {offer.buttonText}
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
