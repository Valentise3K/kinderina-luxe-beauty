const DIKIDI_URL = "https://dikidi.ru/1924129?p=0.pi&utm_source=ig&utm_medium=social&utm_content=link_in_bio";

export const MobileBookingCTA = () => {
  return (
    <a
      href={DIKIDI_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-primary text-primary-foreground py-4 rounded-full text-center font-medium shadow-2xl z-40 lg:hidden transition-all duration-300 hover:shadow-primary/30 text-sm tracking-wide"
    >
      Записаться онлайн
    </a>
  );
};
