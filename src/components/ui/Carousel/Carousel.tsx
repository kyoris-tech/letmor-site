"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  interval?: number;
  className?: string;
}

export function Carousel({ images, interval = 3200, className }: CarouselProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const stopAutoplay = useCallback(() => setAutoplay(false), []);

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % count),
      interval,
    );
    return () => window.clearInterval(id);
  }, [autoplay, count, interval]);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      stopAutoplay();
      goTo(index + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={cn(
        "relative aspect-[3/2] max-h-[42vh] w-full overflow-hidden rounded-[clamp(0.75rem,1.8vw,1.25rem)] bg-letmor-navy/10",
        className,
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image, i) => (
          <div key={image.src + i} className="relative h-full w-full shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width:768px) 42rem, 92vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => {
              stopAutoplay();
              goTo(index - 1);
            }}
            className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-letmor-cream-light/85 text-letmor-navy backdrop-blur-sm transition-colors hover:bg-letmor-cream-light"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => {
              stopAutoplay();
              goTo(index + 1);
            }}
            className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-letmor-cream-light/85 text-letmor-navy backdrop-blur-sm transition-colors hover:bg-letmor-cream-light"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {images.map((image, i) => (
              <button
                key={`dot-${image.src}${i}`}
                type="button"
                aria-label={`Ir para a foto ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  stopAutoplay();
                  setIndex(i);
                }}
                className={cn(
                  "size-2 cursor-pointer rounded-full transition-colors",
                  i === index
                    ? "bg-letmor-cream-light"
                    : "bg-letmor-cream-light/40 hover:bg-letmor-cream-light/70",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
