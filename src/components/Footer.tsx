import { SecretInput } from "./SecretInput";

const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="font-serif text-2xl font-light text-foreground">
            Kinderina
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kinderina. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a
              href="https://t.me/karishkaa_16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/karishkaa_16?igsh=MWs2cTNud2hhbzNzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Instagram
            </a>
            <a
              href={DIKIDI_URL}
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
;

export default Footer;
