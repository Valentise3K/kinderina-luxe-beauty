import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import portfolioBrows from "@/assets/portfolio-brows.jpg";
import portfolioLashes from "@/assets/portfolio-lashes.jpg";
import portfolioHair from "@/assets/portfolio-hair.jpg";
import portfolioFullLook from "@/assets/portfolio-full-look.jpg";
import portfolioBridal from "@/assets/portfolio-bridal.jpg";

const categories = [
  { id: "all", label: "Все работы" },
  { id: "brows", label: "Брови" },
  { id: "lashes", label: "Ресницы" },
  { id: "hair", label: "Волосы" },
  { id: "full", label: "Полный образ" },
  { id: "bridal", label: "Свадебные образы" },
];

const portfolioItems = [
  { id: 1, category: "brows", image: portfolioBrows, title: "Коррекция и окрашивание бровей", span: "col-span-1 row-span-1" },
  { id: 2, category: "hair", image: portfolioHair, title: "Элегантная укладка", span: "col-span-1 row-span-2" },
  { id: 3, category: "full", image: portfolioFullLook, title: "Полный образ", span: "col-span-1 row-span-1" },
  { id: 4, category: "bridal", image: portfolioBridal, title: "Свадебный образ", span: "col-span-1 row-span-2" },
  { id: 5, category: "lashes", image: portfolioLashes, title: "Наращивание ресниц", span: "col-span-1 row-span-1" },
  { id: 6, category: "brows", image: portfolioBrows, title: "Ламинирование бровей", span: "col-span-1 row-span-1" },
  { id: 7, category: "full", image: portfolioFullLook, title: "Вечерний образ", span: "col-span-1 row-span-1" },
  { id: 8, category: "hair", image: portfolioHair, title: "Праздничная укладка", span: "col-span-1 row-span-1" },
];

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

        {/* Category filter */}
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

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              <div
                className="image-hover-zoom cursor-pointer break-inside-avoid"
                onClick={() => setLightboxImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors duration-500 rounded-[16px] flex items-end p-6 opacity-0 hover:opacity-100">
                  <p className="text-primary-foreground font-serif text-lg">{item.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
