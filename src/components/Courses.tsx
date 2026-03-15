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
  const [dialogOpen, setDialogOpen] = useState(false);

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

                  <Button variant="premium" size="lg" className="w-full" onClick={() => setDialogOpen(true)}>
                    Записаться на курс
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-center">Записаться на курс</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground text-center mb-4">Выберите удобный способ связи</p>
          <div className="grid gap-3">
            <a
              href="https://t.me/karishkaa_16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-[hsl(200,80%,50%)] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Telegram</p>
                <p className="text-xs text-muted-foreground">Написать в Telegram</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/karishkaa_16?igsh=MWs2cTNud2hhbzNzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[hsl(37,97%,50%)] via-[hsl(330,70%,50%)] to-[hsl(270,70%,55%)] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Instagram</p>
                <p className="text-xs text-muted-foreground">Написать в Instagram</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
