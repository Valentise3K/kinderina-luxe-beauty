import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Моделина Анастасия",
    service: "Оформление бровей",
    text: "Прекрасный мастер, перед началом обсудили все детали. Карина сделала идеальные бровки, все мои запросы были учтены 🫶",
    stars: 5,
  },
  {
    name: "Анастасия",
    service: "Макияж и укладка",
    text: "Замечательный мастер — и по бровям, и по макияжу, и укладкам. Результат всегда супер 🩷",
    stars: 5,
  },
  {
    name: "Оксана Гладких",
    service: "Коррекция бровей",
    text: "Очень понравился мастер, аккуратно делала коррекцию, всё стерильно, уютный салон. Приду ещё! 😍✨",
    stars: 5,
  },
  {
    name: "Uliks",
    service: "Оформление бровей",
    text: "Понравилась приветливость и аккуратность мастера. Отличные бровки! Советую всем 💫",
    stars: 5,
  },
  {
    name: "Дарья",
    service: "ДУ бровей + окрашивание",
    text: "Долговременная укладка — супер, волоски стали покладистыми. Окрашивание натуральное, как просила ♥️",
    stars: 5,
  },
  {
    name: "Ольга",
    service: "Укладка",
    text: "Огромное спасибо за укладку 💌 Продержалась весь вечер в отличном состоянии ☺️",
    stars: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary mb-4">Отзывы</p>
            <h2 className="section-heading mb-4">Что говорят клиенты</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 80}>
              <div className="card-premium bg-card p-6 md:p-7 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <Star key={j} size={13} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-primary/70 bg-primary/10 px-2.5 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5 flex-1 text-sm">«{review.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground">{review.name[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{review.name}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
