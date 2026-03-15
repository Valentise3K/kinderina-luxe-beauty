import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Курсы", href: "#courses" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 md:py-5">
        <a href="#hero" className="font-serif text-2xl md:text-3xl font-light tracking-tight text-foreground">
          Kinderina
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-foreground/70 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setBookingOpen(true)}
            className="nav-link bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Записаться
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-foreground/70 hover:text-foreground py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setBookingOpen(true); }}
              className="nav-link bg-primary text-primary-foreground px-5 py-3 rounded-full text-center mt-2 w-full"
            >
              Записаться
            </button>
          </div>
        </div>
      )}
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </header>
  );
};
