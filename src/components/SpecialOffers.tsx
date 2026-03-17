import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronRight, Calendar, MapPin, Clock, Camera } from "lucide-react";

const TELEGRAM_URL = "https://t.me/kinderina_beauty";

/* ─── Photo-day offer detail cards (carousel if multiple) ─── */
interface PhotoDayOffer {
  visible: boolean;
  date: string;
  title: string;
  price: string;
  studio: string;
  halls: string[];
  includes: string[];
  bonus: string[];
}

const photoDayOffers: PhotoDayOffer[] = [
  {
    visible: true,
    date: "21.03",
    title: "Фотодень «Все включено»",
    price: "14 000 ₽",
    studio: "@my_place_studio",
    halls: ["vintage", "apart 90", "циклорама"],
    includes: [
      "Макияж",
      "Причёска",
      "Сборы в фотостудии",
      "Гримерное место",
      "Аренда зала",
      "Съёмка 30 минут",
      "Образ от стилиста (одежда, обувь, украшения)",
    ],
    bonus: [
      "Все кадры с камеры в виде ссылки для скачивания в течение 2 суток",
      "8 кадров в авторской обработке, которые вы можете выбрать сами",
    ],
  },
];

/* ─── Client-day offer detail cards ─── */
interface ClientDayOffer {
  visible: boolean;
  title: string;
  concept: string;
  howItWorks: string[];
  note: string;
}

const clientDayOffers: ClientDayOffer[] = [
  {
    visible: true,
    title: "Клиентский день",
    concept:
      "Вы записываетесь абсолютно на любую мою услугу. По окончании процедуры вы платите столько, сколько считаете нужным.",
    howItWorks: [
      "Выбираете любую услугу из списка",
      "Приходите в назначенное время",
      "Получаете полноценную процедуру",
      "Оплачиваете столько, сколько считаете нужным",
    ],
    note: "Отличный вариант для тех, кто не был у меня и думал: идти или не идти. Также можно попробовать сделать какую-то новую процедуру.",
  },
];

/* ─── Top-level offer cards ─── */
interface OfferCard {
  visible: boolean;
  title: string;
  description: string;
  note: string;
  buttonText: string;
  type: "client-day" | "photo-day";
  statusBadge?: string;
}

const offers: OfferCard[] = [
  {
    visible: true,
    title: "Клиентский день",
    description:
      "В выбранные даты открываю ограниченное количество мест на услуги в специальном формате записи. Это возможность познакомиться со мной, попробовать услугу и получить красивый результат в комфортной атмосфере.",
    note: "Количество мест ограничено. Актуальные условия публикуются заранее.",
    buttonText: "Узнать подробнее",
    type: "client-day",
    // statusBadge: "актуально сейчас",
  },
  {
    visible: true,
    title: "Фотодень «Все включено»",
    description:
      "Полноценная съёмка с макияжем, причёской и образом от стилиста — всё в одной стоимости. Вы получаете готовые фотографии и удовольствие от процесса без лишних забот.",
    note: "Даты, залы и условия указываются отдельно для каждого набора.",
    buttonText: "Смотреть актуальные наборы",
    type: "photo-day",
    // statusBadge: "открыт набор",
  },
];

export const SpecialOffers = () => {
  const visibleOffers = offers.filter((o) => o.visible);
  const [dialogType, setDialogType] = useState<"client-day" | "photo-day" | null>(null);

  if (visibleOffers.length === 0) return null;

  const visiblePhotoDays = photoDayOffers.filter((o) => o.visible);
  const visibleClientDays = clientDayOffers.filter((o) => o.visible);

  return (
    <section id="special" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary-text mb-4">
              Специальные предложения
            </p>
            <h2 className="section-heading mb-4">
              Клиентские дни и фотодни
            </h2>
            <span className="section-heading-accent" />
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground leading-relaxed text-[15px]">
              Иногда я открываю специальные даты для записи на услуги в особом
              формате, а также организую фотодни с полным образом и съёмкой.
            </p>
          </div>
        </FadeIn>

        <div
          className={`grid gap-5 max-w-4xl mx-auto ${
            visibleOffers.length > 1
              ? "md:grid-cols-2"
              : "md:grid-cols-1 max-w-lg"
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
                  className="w-full"
                  onClick={() => setDialogType(offer.type)}
                >
                  {offer.buttonText}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Photo Day Dialog ── */}
      <Dialog
        open={dialogType === "photo-day"}
        onOpenChange={(open) => !open && setDialogType(null)}
      >
        <DialogContent className="sm:max-w-[440px] max-h-[85vh] rounded-3xl border-border/50 bg-background backdrop-blur-xl p-0 gap-0 shadow-2xl overflow-hidden flex flex-col">
          <div className="flex flex-col overflow-hidden">
            <div className="overflow-y-auto flex-1">
              <div className="px-6 pt-7 pb-3">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground">
                    Фотодень «Все включено»
                  </DialogTitle>
                  <DialogDescription className="text-[13px] text-muted-foreground mt-2 leading-relaxed">
                    Полноценная съёмка с макияжем, причёской и стилизованным
                    образом — всё включено в одну стоимость.
                  </DialogDescription>
                </DialogHeader>
              </div>

              {visiblePhotoDays.length > 1 ? (
                <div className="px-6 pb-6">
                  <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                      {visiblePhotoDays.map((pd, idx) => (
                        <CarouselItem key={idx}>
                          <PhotoDayCard offer={pd} onBook={() => setDialogType(null)} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static translate-y-0 h-8 w-8" />
                      <CarouselNext className="static translate-y-0 h-8 w-8" />
                    </div>
                  </Carousel>
                </div>
              ) : visiblePhotoDays.length === 1 ? (
                <div className="px-6 pb-6">
                  <PhotoDayCard offer={visiblePhotoDays[0]} onBook={() => setDialogType(null)} />
                </div>
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Client Day Dialog ── */}
      <Dialog
        open={dialogType === "client-day"}
        onOpenChange={(open) => !open && setDialogType(null)}
      >
        <DialogContent className="sm:max-w-[440px] max-h-[85vh] rounded-3xl border-border/50 bg-background backdrop-blur-xl p-0 gap-0 shadow-2xl overflow-hidden flex flex-col">
          <div className="flex flex-col overflow-hidden">
            <div className="overflow-y-auto flex-1">
              <div className="px-6 pt-7 pb-3">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground">
                    Клиентский день
                  </DialogTitle>
                  <DialogDescription className="text-[13px] text-muted-foreground mt-2 leading-relaxed">
                    Специальный формат записи, где вы сами решаете, сколько
                    стоит услуга.
                  </DialogDescription>
                </DialogHeader>
              </div>

              {visibleClientDays.length > 1 ? (
                <div className="px-6 pb-6">
                  <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                      {visibleClientDays.map((cd, idx) => (
                        <CarouselItem key={idx}>
                          <ClientDayCard offer={cd} onBook={() => setDialogType(null)} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static translate-y-0 h-8 w-8" />
                      <CarouselNext className="static translate-y-0 h-8 w-8" />
                    </div>
                  </Carousel>
                </div>
              ) : visibleClientDays.length === 1 ? (
                <div className="px-6 pb-6">
                  <ClientDayCard offer={visibleClientDays[0]} onBook={() => setDialogType(null)} />
                </div>
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

/* ─── Photo Day Detail Card ─── */
function PhotoDayCard({
  offer,
  onBook,
}: {
  offer: PhotoDayOffer;
  onBook: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Date & Price */}
      <div className="bg-secondary/80 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground">
            <Calendar className="w-4 h-4 text-primary-text" />
            <span className="text-sm font-medium">{offer.date}</span>
          </div>
          <span className="font-serif text-xl font-medium text-foreground">
            {offer.price}
          </span>
        </div>
      </div>

      {/* Studio & Halls */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary rounded-full px-3 py-1.5">
          <MapPin className="w-3 h-3" />
          Фотостудия {offer.studio}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary rounded-full px-3 py-1.5">
          <Camera className="w-3 h-3" />
          {offer.halls.length} зала на выбор
        </span>
      </div>

      {/* Halls list */}
      <div className="flex gap-2">
        {offer.halls.map((hall) => (
          <span
            key={hall}
            className="text-[11px] text-muted-foreground border border-border/40 rounded-full px-3 py-1"
          >
            {hall}
          </span>
        ))}
      </div>

      <div className="h-px bg-border/40" />

      {/* What's included */}
      <div>
        <p className="text-[13px] font-medium text-foreground/80 uppercase tracking-widest mb-3">
          Что входит в стоимость
        </p>
        <div className="space-y-2">
          {offer.includes.map((item) => (
            <div key={item} className="flex gap-2.5 items-start">
              <ChevronRight className="w-3 h-3 text-primary-text mt-0.5 shrink-0" />
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus */}
      {offer.bonus.length > 0 && (
        <div className="bg-secondary/80 rounded-2xl p-4">
          <p className="text-[13px] font-medium text-foreground/80 mb-2">
            Бонус
          </p>
          <div className="space-y-2">
            {offer.bonus.map((item) => (
              <p
                key={item}
                className="text-[13px] text-muted-foreground leading-relaxed"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      <Button
        variant="premium"
        size="lg"
        className="w-full"
        asChild
        onClick={onBook}
      >
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          Записаться
        </a>
      </Button>
    </div>
  );
}

/* ─── Client Day Detail Card ─── */
function ClientDayCard({
  offer,
  onBook,
}: {
  offer: ClientDayOffer;
  onBook: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Concept */}
      <div className="bg-secondary/80 rounded-2xl p-4">
        <p className="text-sm font-medium text-foreground mb-1.5">Как это работает?</p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {offer.concept}
        </p>
      </div>

      <div className="h-px bg-border/40" />

      {/* Steps */}
      <div>
        <p className="text-[13px] font-medium text-foreground/80 uppercase tracking-widest mb-3">
          Формат
        </p>
        <div className="space-y-3">
          {offer.howItWorks.map((step, idx) => (
            <div key={step} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-secondary text-[10px] font-medium text-foreground/50 flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="bg-secondary/80 rounded-2xl p-4">
        <p className="text-[13px] text-muted-foreground leading-relaxed italic">
          {offer.note}
        </p>
      </div>

      <Button
        variant="premium"
        size="lg"
        className="w-full"
        asChild
        onClick={onBook}
      >
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          Узнать о ближайшей дате
        </a>
      </Button>
    </div>
  );
}
