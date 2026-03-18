import React from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как подготовиться к макияжу?",
    answer: "Приходите с чистым увлажнённым лицом без макияжа. Если есть предпочтения по образу — сохраните референсы, обсудим перед началом.",
  },
  {
    question: "Сколько держится макияж и укладка?",
    answer: "Макияж держится 8–12 часов, укладка — весь день. Использую профессиональные стойкие средства и закрепляющие спреи.",
  },
  {
    question: "Возможен ли выезд?",
    answer: "Да, выезд в пределах Воронежа — 1 500 ₽. За пределы города — стоимость обсуждается индивидуально.",
  },
  {
    question: "Как выбрать услугу, если не уверена?",
    answer: "Напишите мне в Telegram или Instagram — помогу подобрать услугу под ваш запрос, повод и бюджет.",
  },
  {
    question: "Нужно ли брать что-то с собой на курс?",
    answer: "Нет, всё необходимое предоставляю я. После курса вы получите список рекомендуемых средств для самостоятельной практики.",
  },
  {
    question: "Как происходит запись?",
    answer: "Выберите удобный способ: онлайн через DIKIDI, напишите в Telegram или Instagram. Согласуем дату, время и детали.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary-text mb-4">Вопросы</p>
            <h2 className="section-heading mb-4">Частые вопросы</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn delay={100}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-2xl border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-medium text-foreground py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
