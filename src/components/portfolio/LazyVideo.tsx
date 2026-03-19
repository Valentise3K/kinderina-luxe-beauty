import { useLazyMedia } from "@/hooks/use-lazy-media";

interface LazyVideoProps {
  src: string;
  title: string;
  className?: string;
}

/** Renders a video only once it's near the viewport. */
export const LazyVideo = ({ src, title, className }: LazyVideoProps) => {
  const { ref, visible } = useLazyMedia("300px");

  return (
    <div ref={ref} className={className}>
      {visible ? (
        <video
          src={src}
          className="w-full h-auto object-cover rounded-[16px]"
          autoPlay
          muted
          loop
          playsInline
          aria-label={title}
        />
      ) : (
        /* placeholder keeps layout stable before video loads */
        <div className="w-full aspect-[9/16] rounded-[16px] bg-muted animate-pulse" />
      )}
    </div>
  );
};
