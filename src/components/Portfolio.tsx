import React, { useState, useCallback } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

import brows1 from "@/assets/brows-1.jpg";
import brows2 from "@/assets/brows-2.jpg";
import brows3 from "@/assets/brows-3.jpg";
import browsLashes1 from "@/assets/brows-lashes-1.jpg";
import browsLashes2 from "@/assets/brows-lashes-2.jpg";
import lashes1 from "@/assets/lashes-1.jpg";
import hair1 from "@/assets/hair-1.jpg";
import hair2 from "@/assets/hair-2.jpg";
import hair3 from "@/assets/hair-3.jpg";
import fullLook1 from "@/assets/full-look-1.jpg";
import fullLook2 from "@/assets/full-look-2.jpg";
import fullLook3 from "@/assets/full-look-3.jpg";
import fullLook4 from "@/assets/full-look-4.jpg";
import fullLook5 from "@/assets/full-look-5.jpg";
import fullLook6 from "@/assets/full-look-6.jpg";
import fullLook7 from "@/assets/full-look-7.jpg";
import fullLook8 from "@/assets/full-look-8.jpg";
import fullLook9 from "@/assets/full-look-9.jpg";
import fullLook10 from "@/assets/full-look-10.jpg";

const categories = [
  { id: "all", label: "Все работы" },
  { id: "brows-lashes", label: "Брови и ресницы" },
  { id: "hair", label: "Волосы" },
  { id: "full", label: "Полный образ" },
  { id: "before-after", label: "До-После" },
];

type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  span: string;
  image?: string;
  video?: string;
  carousel?: string[];
};

const portfolioItems: PortfolioItem[] = [
  { id: 2, category: "hair", carousel: [hair1, hair2, hair3], title: "Просто и нежно", span: "col-span-1 row-span-1" },
  { id: 3, category: "full", carousel: [fullLook1, fullLook2], title: "Полный образ", span: "col-span-1 row-span-1" },

  {
    id: 7,
    category: "full",
    carousel: [fullLook3, fullLook4, fullLook5],
    title: "Вечерний образ",
    span: "col-span-1 row-span-1",
  },
  {
    id: 13,
    category: "full",
    carousel: [fullLook6, fullLook7, fullLook8],
    title: "Нежный образ",
    span: "col-span-1 row-span-1",
  },
  { id: 17, category: "full", carousel: [fullLook9, fullLook10], title: "Вау-образ", span: "col-span-1 row-span-1" },
  {
    id: 15,
    category: "brows-lashes",
    carousel: [brows1, brows2],
    title: "Оформление бровей",
    span: "col-span-1 row-span-1",
  },
  { id: 16, category: "brows-lashes", image: brows3, title: "Коррекция бровей", span: "col-span-1 row-span-1" },
  {
    id: 14,
    category: "before-after",
    video: "/videos/full-look-3.mp4",
    title: "Макияж — процесс",
    span: "col-span-1 row-span-1",
  },
  {
    id: 9,
    category: "before-after",
    video: "/videos/brows-showcase.mp4",
    title: "Процесс работы — брови",
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    category: "before-after",
    video: "/videos/hair-showcase-1.mp4",
    title: "Процесс укладки",
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    category: "before-after",
    video: "/videos/hair-showcase-2.mp4",
    title: "Укладка — результат",
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    category: "before-after",
    video: "/videos/full-look-2.mp4",
    title: "Макияж и укладка",
    span: "col-span-1 row-span-1",
  },
];

const CarouselCard = ({
  images,
  title,
  onClick,
}: {
  images: string[];
  title: string;
  onClick: (img: string) => void;
}) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const touchDeltaX = React.useRef(0);
  const swiped = React.useRef(false);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    },
    [images.length],
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    },
    [images.length],
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    swiped.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const threshold = 40;
    if (Math.abs(touchDeltaX.current) > threshold) {
      swiped.current = true;
      if (touchDeltaX.current < 0) {
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
      } else {
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  }, [images.length]);

  const handleClick = useCallback(() => {
    if (!swiped.current) {
      onClick(images[current]);
    }
    swiped.current = false;
  }, [onClick, images, current]);

  return (
    <div
      className="relative group cursor-pointer break-inside-avoid rounded-[16px] overflow-hidden touch-pan-y"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[current]}
        alt={title}
        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Hover overlay - pointer-events-none so it doesn't block buttons */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100 pointer-events-none">
        <p className="text-primary-foreground font-serif text-lg">{title}</p>
      </div>
      {/* Nav arrows - z-10 to stay above overlay */}
      <button
        onClick={prev}
        aria-label="Предыдущее фото"
        className="absolute z-10 left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground shadow-sm"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        aria-label="Следующее фото"
        className="absolute z-10 right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground shadow-sm"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      {/* Dots */}
      <div className="absolute z-10 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Фото ${idx + 1} из ${images.length}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? "bg-background w-4" : "bg-background/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems.filter((item) => item.category !== "before-after")
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary mb-4">Портфолио</p>
            <h2 className="section-heading mb-4">Мои работы</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`nav-link px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              {item.carousel ? (
                <CarouselCard images={item.carousel} title={item.title} onClick={(img) => setLightboxImage(img)} />
              ) : (
                <div
                  className="image-hover-zoom cursor-pointer break-inside-avoid"
                  onClick={() => item.image && setLightboxImage(item.image)}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      className="w-full h-auto object-cover rounded-[16px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors duration-500 rounded-[16px] flex items-end p-6 opacity-0 hover:opacity-100">
                    <p className="text-primary-foreground font-serif text-lg">{item.title}</p>
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Просмотр" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
};
