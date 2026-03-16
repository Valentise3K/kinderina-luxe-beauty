import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Clock, Users, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  tagline: string;
  forWhom: string;
  highlights: string[];
  includes: string[];
  programs: { title: string; items: string[] }[];
  pricing: { label: string; price: string }[];
}

const courses: Course[] = [
  {
    image: courseMakeup,
    title: "Макияж для себя",
    tagline: "Уверенность в себе каждый день",
    forWhom: "Хочу делать красивый макияж сама",
    highlights: ["Индивидуально", "1–2 дня", "от 5 000 ₽"],
    includes: [
      "Разбор косметички и подбор средств",
      "Анализ кожи и подготовка к макияжу",
      "Нюдовый и вечерний макияж на практике",
      "Список рекомендаций и средств",
    ],
    programs: [
      {
        title: "1 день",
        items: ["Разбор косметички", "Повседневный макияж", "Вечерний макияж на выбор"],
      },
      {
        title: "2 дня",
        items: ["Всё из однодневного", "+1 вечерний макияж"],
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
    tagline: "Красивые причёски каждый день",
    forWhom: "Хочу делать укладки самостоятельно",
    highlights: ["Индивидуально", "1–2 дня", "от 5 000 ₽"],
    includes: [
      "Разбор средств для волос",
      "Анализ типа и структуры волос",
      "Создание объёма и прикорневой укладки",
      "Причёска или укладка на выбор",
    ],
    programs: [
      {
        title: "1 день",
        items: ["Анализ волос и средств", "Объём", "1 причёска/укладка"],
      },
      {
        title: "2 дня",
        items: ["Всё из однодневного", "+1 причёска/укладка"],
      },
    ],
    pricing: [
      { label: "1 день", price: "5 000 ₽" },
      { label: "2 дня", price: "7 500 ₽" },
    ],
  },
];

export const Courses = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [detailsCourse, setDetailsCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="nav-link text-primary mb-4">Обучение</p>
            <h2 className="section-heading mb-4">Курсы</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 120}>
              <div className="card-premium bg-card overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.tagline}</p>

                  {/* Quick markers */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {course.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-medium uppercase tracking-wider text-foreground/70 px-3 py-1.5 rounded-full bg-secondary border border-border/40">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Key includes */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.includes.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex gap-2.5 items-start">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2.5">
                    <Button variant="premium-outline" size="lg" className="w-full" onClick={() => setDetailsCourse(course)}>
                      Подробнее
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

      {/* ── Compact details modal ── */}
      <Dialog open={!!detailsCourse} onOpenChange={(open) => !open && setDetailsCourse(null)}>
        <DialogContent className="sm:max-w-md max-h-[85vh] rounded-3xl border-border/50 bg-background/95 backdrop-blur-xl p-0 gap-0 shadow-2xl overflow-hidden flex flex-col">
          {detailsCourse && (
            <div className="flex flex-col overflow-hidden">
              {/* Compact hero image */}
              <div className="aspect-[2/1] overflow-hidden rounded-t-3xl shrink-0">
                <img src={detailsCourse.image} alt={detailsCourse.title} className="w-full h-full object-cover" />
              </div>

              <div className="overflow-y-auto flex-1">
                <div className="px-5 pt-5 pb-2">
                  <DialogHeader className="text-left">
                    <DialogTitle className="font-serif text-xl font-medium tracking-[-0.02em] text-foreground">
                      {detailsCourse.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-1">
                      {detailsCourse.tagline}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Quick markers */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5" /> Индивидуально
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> 1–2 дня
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5 space-y-5">
                  {/* Includes */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Что входит
                    </p>
                    <ul className="space-y-1.5">
                      {detailsCourse.includes.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex gap-2.5 items-start">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {detailsCourse.programs.map((program) => (
                      <div key={program.title} className="bg-secondary rounded-2xl p-4">
                        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">{program.title}</p>
                        <ul className="space-y-1">
                          {program.items.map((item) => (
                            <li key={item} className="text-xs text-muted-foreground flex gap-2 items-start">
                              <span className="w-0.5 h-0.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      Стоимость
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {detailsCourse.pricing.map((option) => (
                        <div key={option.label} className="bg-secondary rounded-2xl p-3 text-center">
                          <p className="text-xs text-muted-foreground mb-0.5">{option.label}</p>
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

      {/* ── Booking popup (Telegram / Instagram) ── */}
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
                <svg className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
