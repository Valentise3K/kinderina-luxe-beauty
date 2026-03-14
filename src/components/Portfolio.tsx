import { useState, useCallback } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolioBrows from "@/assets/portfolio-brows.jpg";
import portfolioLashes from "@/assets/portfolio-lashes.jpg";
import portfolioHair from "@/assets/portfolio-hair.jpg";
import portfolioFullLook from "@/assets/portfolio-full-look.jpg";
import portfolioBridal from "@/assets/portfolio-bridal.jpg";
import hair1 from "@/assets/hair-1.jpg";
import hair2 from "@/assets/hair-2.jpg";
import hair3 from "@/assets/hair-3.jpg";

const categories = [
  { id: "all", label: "Все работы" },
  { id: "brows", label: "Брови" },
  { id: "lashes", label: "Ресницы" },
  { id: "hair", label: "Волосы" },
  { id: "full", label: "Полный образ" },
  { id: "bridal", label: "Свадебные образы" },
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
  { id: 1, category: "brows", image: portfolioBrows, title: "Коррекция и окрашивание бровей", span: "col-span-1 row-span-1" },
  { id: 2, category: "hair", carousel: [hair1, hair2, hair3], title: "Элегантная укладка", span: "col-span-1 row-span-1" },
  { id: 3, category: "full", image: portfolioFullLook, title: "Полный образ", span: "col-span-1 row-span-1" },
  { id: 4, category: "bridal", image: portfolioBridal, title: "Свадебный образ", span: "col-span-1 row-span-1" },
  { id: 5, category: "lashes", image: portfolioLashes, title: "Наращивание ресниц", span: "col-span-1 row-span-1" },
  { id: 6, category: "brows", image: portfolioBrows, title: "Ламинирование бровей", span: "col-span-1 row-span-1" },
  { id: 7, category: "full", image: portfolioFullLook, title: "Вечерний образ", span: "col-span-1 row-span-1" },
  { id: 8, category: "hair", image: portfolioHair, title: "Праздничная укладка", span: "col-span-1 row-span-1" },
  { id: 9, category: "brows", video: "/videos/brows-showcase.mp4", title: "Процесс работы — брови", span: "col-span-1 row-span-1" },
  { id: 10, category: "hair", video: "/videos/hair-showcase-1.mp4", title: "Процесс укладки", span: "col-span-1 row-span-1" },
  { id: 11, category: "hair", video: "/videos/hair-showcase-2.mp4", title: "Укладка — результат", span: "col-span-1 row-span-1" },
];

const CarouselCard = ({ images, title, onClick }: { images: string[]; title: string; onClick: (img: string) => void }) => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  return (
    <div className="relative group cursor-pointer break-inside-avoid rounded-[16px] overflow-hidden" onClick={() => onClick(images[current])}>
      <div className="relative overflow-hidden">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === current ? "bg-background w-3" : "bg-background/50"}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors duration-500 flex items-end p-6 opacity-0 hover:opacity-100">
        <p className="text-primary-foreground font-serif text-lg">{title}</p>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
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
                <CarouselCard
                  images={item.carousel}
                  title={item.title}
                  onClick={(img) => setLightboxImage(img)}
                />
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
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
          <img
            src={lightboxImage}
            alt="Просмотр"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};
