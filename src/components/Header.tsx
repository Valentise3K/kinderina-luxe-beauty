import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BookingDialog } from "@/components/BookingDialog";
import { handleAnchorClick } from "@/lib/scroll-to-section";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги", href: "#services" },
  { label: "Курсы", href: "#courses" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
      opacity: { duration: 0.18 },
      staggerChildren: 0.015,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
      opacity: { duration: 0.2, delay: 0.04 },
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 6 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        menuToggleRef.current?.contains(target)
      ) return;
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

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
          ref={menuToggleRef}
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={itemVariants}
                  className="nav-link text-foreground/70 hover:text-foreground py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                onClick={() => { setMenuOpen(false); setBookingOpen(true); }}
                className="nav-link bg-primary text-primary-foreground px-5 py-3 rounded-full text-center mt-2 w-full"
              >
                Записаться
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </header>
  );
};
