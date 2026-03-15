import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import courseMakeup from "@/assets/course-makeup.jpg";
import courseHair from "@/assets/course-hair.jpg";

const courses = [
  {
    image: courseMakeup,
    title: "Макияж для себя",
    description: "Научитесь создавать безупречный макияж в домашних условиях",
    forWhom: "Для тех, кто хочет научиться подчёркивать свою красоту каждый день",
    topics: [
      "Подготовка и уход за кожей перед макияжем",
      "Подбор тона и текстур под тип кожи",
      "Техники дневного и вечернего макияжа",
      "Коррекция формы бровей",
      "Работа с тенями и растушёвка",
    ],
  },
  {
    image: courseHair,
    title: "Укладки для себя",
    description: "Освойте профессиональные техники укладки волос",
    forWhom: "Для тех, кто хочет делать красивые укладки самостоятельно",
    topics: [
      "Подготовка волос и термозащита",
      "Локоны и волны разными инструментами",
      "Объёмные укладки на каждый день",
      "Простые причёски на средние и длинные волосы",
      "Закрепление и стойкость укладки",
    ],
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary mb-4">Обучение</p>
            <h2 className="section-heading mb-4">Курсы</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 120}>
              <div className="card-premium bg-card overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>

                  <div className="bg-secondary rounded-[16px] p-4 mb-6">
                    <p className="text-sm font-medium text-foreground mb-1">Для кого</p>
                    <p className="text-sm text-muted-foreground">{course.forWhom}</p>
                  </div>

                  <div className="mb-8 flex-1">
                    <p className="text-sm font-medium text-foreground mb-3">Вы научитесь</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="text-sm text-muted-foreground flex gap-3 items-start">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="premium" size="lg" asChild className="w-full">
                    <a href={DIKIDI_URL} target="_blank" rel="noopener noreferrer">
                      Записаться на курс
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
