import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/** Image with native lazy loading + fade-in on load. */
export const LazyImage = ({ src, alt, className = "" }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
};
