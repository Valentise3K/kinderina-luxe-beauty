import { SecretInput } from "./SecretInput";
import { SITE } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="font-serif text-2xl font-light text-foreground">
            {SITE.brand}
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.brand}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a
              href={SITE.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Telegram
            </a>
            <a
              href={SITE.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Instagram
            </a>
            <a
              href={SITE.links.dikidi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              DIKIDI
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <SecretInput />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
