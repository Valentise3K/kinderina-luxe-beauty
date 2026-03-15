import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HiddenBirthday = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-6 py-12 max-w-2xl flex-1 flex flex-col justify-center">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm mb-12 self-start"
        >
          <ArrowLeft size={16} />
          Назад
        </button>

        <article className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-foreground text-center">
            С Днём Рождения!
          </h1>
          <span className="block w-12 h-[1px] bg-primary mx-auto" />

          <div className="space-y-5 text-foreground/80 leading-relaxed text-base md:text-lg font-light">
            <p>
              Дорогой человек, сегодня твой особенный день, и я хочу сказать тебе
              несколько слов от всего сердца.
            </p>
            <p>
              Ты — невероятный человек, который вдохновляет всех вокруг своей
              энергией, талантом и добротой. Каждый день рядом с тобой — это
              подарок.
            </p>
            <p>
              Пусть этот новый год жизни принесёт тебе всё, о чём ты мечтаешь:
              яркие моменты, тёплые встречи, новые достижения и бесконечное
              счастье.
            </p>
            <p>
              Желаю тебе здоровья, любви, вдохновения и сил на всё, что ты
              задумаешь. Пусть каждый день будет наполнен радостью и смыслом.
            </p>
            <p className="text-center font-serif text-xl md:text-2xl text-foreground/90 pt-4">
              С любовью и самыми тёплыми пожеланиями 🤍
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HiddenBirthday;
