import { FadeIn } from "@/components/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Моделина Анастасия",
    text: "Прекрасный мастер, перед началом обсудили все детали. Карина сделала идеальные бровки, все как обговаривали, все мои запросы были учтены, обязательно еще раз приду на брови и на другие процедуры🫶",
    stars: 5,
  },
  {
    name: "Анастасия",
    text: "Замечательный мастер не только по оформлению бровей, но и макияжа, укладок. К тому же, интересно поболтать во время процедуры и результат всегда супер🩷",
    stars: 5,
  },
  {
    name: "Оксана Гладких",
    text: "Очень понравился мастер, аккуратно делала коррекцию, все стерильно, принимает в уютном салоне, предложили вкусный кофе, приду еще!😍✨",
    stars: 5,
  },
  {
    name: "Uliks",
    text: "Понравилось приветливость, аккуратность мастера. Мне все понравилось. Сделала хорошие бровки!Запишусь на другие процедуры. советую всем, отличный специалист!",
    stars: 5,
  },
  {
    name: "Дарья",
    text: "Делала долговременную укладку бровей, действительно волосы стали более покладистыми, теперь нет с укладкой бровей проблем Окрашивание сделали, как я и просила, натуральное и не яркое Спасибо большое, все понравилось♥️",
    stars: 5,
  },
  {
    name: "Ольга",
    text: "Огромное спасибо за укладку💌 Продержалась весь вечер в отличном состоянии☺️",
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
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">«{review.text}»</p>
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
