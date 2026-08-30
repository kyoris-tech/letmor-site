"use client";

import { useCallback, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
}

export function Carousel({ images, className }: CarouselProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(index + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className={cn(
        "relative aspect-[4/3] max-h-[54vh] w-full overflow-hidden rounded-[clamp(0.75rem,1.8vw,1.25rem)] bg-letmor-navy/15",
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
          <div
            key={image.src + i}
            className="relative flex h-full w-full shrink-0 items-center justify-center"
          >
            <Image
              src={image.src}
              alt=""
              aria-hidden
              fill
              unoptimized
              sizes="(min-width:768px) 42rem, 92vw"
              className="scale-110 object-cover blur-2xl brightness-[0.7] saturate-150"
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes="(min-width:768px) 42rem, 92vw"
              className="object-contain"
              {...(i === 0
                ? { priority: true }
                : { loading: i === 1 ? "eager" : "lazy" })}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-letmor-cream-light/85 text-letmor-navy backdrop-blur-sm transition-colors hover:bg-letmor-cream-light"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-letmor-cream-light/85 text-letmor-navy backdrop-blur-sm transition-colors hover:bg-letmor-cream-light"
          >
            <ChevronRightIcon className="size-5" />
          </button>

          {count <= 7 ? (
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
              {images.map((image, i) => (
                <button
                  key={`dot-${image.src}${i}`}
                  type="button"
                  aria-label={`Ir para a foto ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "size-2 cursor-pointer rounded-full transition-colors",
                    i === index
                      ? "bg-letmor-cream-light"
                      : "bg-letmor-cream-light/40 hover:bg-letmor-cream-light/70",
                  )}
                />
              ))}
            </div>
          ) : (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-letmor-navy/55 px-3 py-1 font-sans text-action-sm font-medium text-letmor-cream-light backdrop-blur-sm">
              {index + 1} / {count}
            </div>
          )}
        </>
      )}
    </div>
  );
}
