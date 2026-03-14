import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Алина",
    text: "Kinderina — настоящий профессионал! Мой свадебный образ был идеальным, все гости были в восторге.",
    stars: 5,
  },
  {
    name: "Мария",
    text: "Обожаю результат по бровям! Наконец-то нашла мастера, который понимает, что значит естественность.",
    stars: 5,
  },
  {
    name: "Екатерина",
    text: "Прошла курс «Макияж для себя» и теперь каждый день выгляжу потрясающе. Спасибо за терпение и индивидуальный подход!",
    stars: 5,
  },
  {
    name: "Дарья",
    text: "Лучшая укладка, которую мне делали. Держалась весь день и вечер. Обязательно вернусь снова!",
    stars: 5,
  },
  {
    name: "Анна",
    text: "Очень нежный и аккуратный макияж. Именно то, что я хотела — лёгкость и естественность.",
    stars: 5,
  },
  {
    name: "Ольга",
    text: "Ламинирование ресниц — просто чудо! Взгляд стал выразительнее, а процедура была комфортной.",
    stars: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary mb-4">Отзывы</p>
            <h2 className="section-heading mb-4">Что говорят клиенты</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 80}>
              <div className="card-premium bg-card p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">
                  «{review.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground">
                      {review.name[0]}
                    </span>
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
