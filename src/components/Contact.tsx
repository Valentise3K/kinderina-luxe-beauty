import React from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

const contactLinks = [
  {
    title: "Онлайн-запись",
    subtitle: "Записаться через DIKIDI",
    href: DIKIDI_URL,
    primary: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Telegram",
    subtitle: "Написать в Telegram",
    href: "https://t.me/karishkaa_16",
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    subtitle: "Написать в Instagram",
    href: "https://www.instagram.com/karishkaa_16?igsh=MWs2cTNud2hhbzNzcg==",
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export const Contact = React.forwardRef<HTMLElement>((_, _ref) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="nav-link text-primary-text mb-4">Контакты</p>
            <h2 className="section-heading mb-4">Свяжитесь со мной</h2>
            <span className="section-heading-accent" />
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {contactLinks.map((link, i) => (
              <FadeIn key={link.title} delay={i * 100}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card-premium flex items-center gap-5 p-6 transition-all duration-400 group ${
                    link.primary ? "bg-primary/5" : "bg-card"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      link.primary
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.subtitle}</p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";

export default Contact;
