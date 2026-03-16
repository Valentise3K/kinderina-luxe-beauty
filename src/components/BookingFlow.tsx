import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "Выберите услугу",
    description: "Посмотрите каталог услуг или курсов и выберите подходящий вариант",
  },
  {
    number: "02",
    title: "Напишите мне",
    description: "Свяжитесь через DIKIDI, Telegram или Instagram — как удобнее",
  },
  {
    number: "03",
    title: "Согласуем детали",
    description: "Обсудим дату, время и пожелания к образу",
  },
  {
    number: "04",
    title: "Встреча",
    description: "Приходите на процедуру и наслаждайтесь результатом",
  },
];

export const BookingFlow = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary mb-4">Как записаться</p>
            <h2 className="section-heading mb-4">4 простых шага</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className="text-center">
                <span className="font-serif text-3xl font-light text-primary/40">{step.number}</span>
                <h3 className="font-serif text-lg font-medium text-foreground mt-2 mb-1.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
