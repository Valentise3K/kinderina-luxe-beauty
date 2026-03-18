import React, { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import courseMakeup from "@/assets/course-makeup.jpg";
import courseHair from "@/assets/course-hair.jpg";

const TELEGRAM_URL = "https://t.me/karishkaa_16";
const INSTAGRAM_URL = "https://www.instagram.com/karishkaa_16?igsh=MWs2cTNud2hhbzNzcg==";

const contactOptions = [
  {
    label: "Telegram",
    description: "Написать в Telegram",
    href: TELEGRAM_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    description: "Написать в Direct",
    href: INSTAGRAM_URL,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

interface Course {
  image: string;
  title: string;
  shortDescription: string;
  description: string;
  forWhom: string;
  highlights: string[];
  includes: string[];
  programs: { title: string; items: string[]; note?: string }[];
  pricing: { label: string; price: string }[];
  skills: string[];
}

const courses: Course[] = [
  {
    image: courseMakeup,
    title: "Макияж для себя",
    shortDescription: "Это про уверенность в себе каждый день",
    description:
      "Идеальный нюд на каждый день, вечерний макияж на свидание, яркий макияж на вечеринку — всё это вы сможете делать самостоятельно после прохождения курса.",
    forWhom: "Для тех, кто хочет научиться подчёркивать свою красоту каждый день",
    highlights: ["Индивидуально", "1–2 дня", "от 5 000 ₽"],
    includes: [
      "Обсуждение макияжа, с которым комфортно и чему хочется научиться",
      "Разбор личной косметички — решаем, какую косметику оставляем, а с какой придётся попрощаться",
      "Анализ кожи, чтобы понимать как лучше подготовить кожу перед макияжем и какие тональные крема подойдут",
      "Учимся делать лёгкий нюдовый макияж на каждый день, а далее делаем его более ярким",
      "Собираем новую косметичку — решаем, чего не хватает и нужно докупить",
    ],
    skills: [
      "Подготовка и уход за кожей",
      "Подбор тона и текстур",
      "Дневной и вечерний макияж",
      "Коррекция бровей",
      "Работа с тенями",
    ],
    programs: [
      {
        title: "Однодневный курс",
        items: [
          "Разбор косметички",
          "Лёгкий повседневный макияж",
          "Любой вечерний макияж: графичная стрелка / растушёванная стрелка / смоки",
        ],
      },
      {
        title: "Двухдневный курс",
        items: ["Всё, что в однодневном курсе", "Ещё один вечерний макияж"],
        note: "Например, в первый день делаем смоки, а во второй день учимся рисовать стрелочку",
      },
    ],
    pricing: [
      { label: "1 день", price: "5 000 ₽" },
      { label: "2 дня", price: "7 000 ₽" },
    ],
  },
  {
    image: courseHair,
    title: "Укладки для себя",
    shortDescription: "Научитесь создавать красивые причёски и укладки самостоятельно",
    description:
      "Красивые локоны на свидание, объёмная укладка на каждый день, эффектная причёска на мероприятие — всё это вы сможете делать самостоятельно после прохождения курса.",
    forWhom: "Для тех, кто хочет делать красивые укладки и причёски каждый день",
    highlights: ["Индивидуально", "1–2 дня", "от 5 000 ₽"],
    includes: [
      "Разбор уже существующих средств для волос — решаем, что оставить и что докупить",
      "Анализ волос — определяем тип, структуру и подбираем подходящий уход",
      "Создание объёма — учимся делать укладку с красивым прикорневым объёмом",
      "Подробная инструкция и создание желаемой причёски / укладки",
    ],
    skills: ["Разбор средств для волос", "Анализ структуры волос", "Создание объёма", "Укладки и причёски"],
    programs: [
      {
        title: "Однодневный курс",
        items: ["Разбор средств для волос", "Анализ волос", "Создание объёма", "1 причёска / укладка на выбор"],
      },
      {
        title: "Двухдневный курс",
        items: ["Всё, что в однодневном курсе", "+1 причёска / укладка на выбор"],
        note: "Например, в первый день делаем локоны, а во второй — собранную причёску",
      },
    ],
    pricing: [
      { label: "1 день (1 причёска/укладка)", price: "5 000 ₽" },
      { label: "2 дня (+1 причёска/укладка)", price: "7 500 ₽" },
    ],
  },
];

export const Courses = React.forwardRef<HTMLElement>((_, _ref) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [detailsCourse, setDetailsCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary-text mb-4">Обучение</p>
            <h2 className="section-heading mb-4">Курсы</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 120}>
              <div className="card-premium bg-card overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{course.description}</p>

                  {/* Вы научитесь */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">Вас ждёт</p>
                    <ul className="space-y-2">
                      {course.skills.map((skill) => (
                        <li key={skill} className="text-[13px] text-muted-foreground flex gap-2.5 items-start">
                          <span className="text-primary-text mt-0.5 shrink-0">›</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons — stacked full-width like in screenshot */}
                  <div className="flex flex-col gap-2.5 mt-auto">
                    <Button
                      variant="premium-outline"
                      size="lg"
                      className="w-full"
                      onClick={() => setDetailsCourse(course)}
                    >
                      Подробнее о курсе
                    </Button>
                    <Button variant="premium" size="lg" className="w-full" onClick={() => setBookingOpen(true)}>
                      Записаться на курс
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Details modal ── */}
      <Dialog open={!!detailsCourse} onOpenChange={(open) => !open && setDetailsCourse(null)}>
        <DialogContent className="sm:max-w-[440px] max-h-[85vh] rounded-3xl border-border/50 bg-background backdrop-blur-xl p-0 gap-0 shadow-2xl overflow-hidden flex flex-col">
          {detailsCourse && (
            <div className="flex flex-col overflow-hidden">
              {/* Image with gradient overlay */}
              <div className="relative aspect-[2.4/1] overflow-hidden shrink-0">
                <img src={detailsCourse.image} alt={detailsCourse.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              <div className="overflow-y-auto flex-1">
                <div className="px-6 pt-5 pb-3">
                  <DialogHeader className="text-left">
                    <DialogTitle className="font-serif text-2xl font-medium tracking-[-0.02em] text-foreground">
                      {detailsCourse.title}
                    </DialogTitle>
                    <DialogDescription className="text-[13px] text-muted-foreground mt-2 leading-relaxed">
                      {detailsCourse.description}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Для кого */}
                  <div className="bg-secondary/80 rounded-2xl p-4 mt-4">
                    <p className="text-sm font-medium text-foreground mb-1">Для кого</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{detailsCourse.forWhom}</p>
                  </div>

                  {/* Quick markers as pills */}
                  <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary rounded-full px-3 py-1.5">
                      <Users className="w-3 h-3" /> Индивидуально
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary rounded-full px-3 py-1.5">
                      <Clock className="w-3 h-3" /> 1–2 дня
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  {/* Divider */}
                  <div className="h-px bg-border/40 mb-5" />

                  {/* What's included — numbered list for cleaner look */}
                  <div className="mb-6">
                    <p className="text-[13px] font-medium text-foreground/80 uppercase tracking-widest mb-3">
                      Из чего состоит
                    </p>
                    <div className="space-y-3">
                      {detailsCourse.includes.map((item, idx) => (
                        <div key={item} className="flex gap-3 items-start">
                          <span className="w-5 h-5 rounded-full bg-secondary text-[10px] font-medium text-foreground/50 flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Programs — cleaner cards */}
                  <div className="mb-6">
                    <p className="text-[13px] font-medium text-foreground/80 uppercase tracking-widest mb-3">
                      Программа
                    </p>
                    <div className="space-y-2.5">
                      {detailsCourse.programs.map((program) => (
                        <div key={program.title} className="border border-border/40 rounded-2xl p-4">
                          <p className="text-sm font-medium text-foreground mb-2">{program.title}</p>
                          <ul className="space-y-1">
                            {program.items.map((item) => (
                              <li key={item} className="text-[13px] text-muted-foreground flex gap-2 items-start">
                                <ChevronRight className="w-3 h-3 text-primary-text mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          {program.note && (
                            <p className="text-xs text-muted-foreground/60 italic mt-2 leading-relaxed">
                              {program.note}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing — horizontal layout */}
                  <div className="mb-6">
                    <p className="text-[13px] font-medium text-foreground/80 uppercase tracking-widest mb-3">
                      Стоимость
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {detailsCourse.pricing.map((option) => (
                        <div key={option.label} className="border border-border/40 rounded-2xl p-3.5 text-center">
                          <p className="text-xs text-muted-foreground mb-1">{option.label}</p>
                          <p className="text-lg font-serif font-medium text-foreground">{option.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setDetailsCourse(null);
                      setTimeout(() => setBookingOpen(true), 200);
                    }}
                  >
                    Записаться на курс
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Booking popup ── */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-sm rounded-3xl border-border/50 bg-background/95 backdrop-blur-xl p-0 gap-0 shadow-2xl">
          <DialogHeader className="px-6 pt-7 pb-2 text-center">
            <DialogTitle className="font-serif text-2xl font-light tracking-[-0.02em] text-foreground">
              Записаться на курс
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground tracking-wide mt-1">
              Выберите удобный способ связи
            </DialogDescription>
          </DialogHeader>
          <div className="px-5 pb-6 pt-3 space-y-2">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-border/40 bg-card/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 active:scale-[0.98]"
                onClick={() => setBookingOpen(false)}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground/70 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  {option.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{option.label}</p>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                </div>
                <svg
                  className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary/60 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
});
Courses.displayName = "Courses";

export default Courses;
