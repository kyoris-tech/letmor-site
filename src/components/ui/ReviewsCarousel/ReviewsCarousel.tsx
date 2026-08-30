"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ReviewCard } from "@/components/ui/ReviewCard";
import type { Testimonial } from "@/components/screens/home/hotwords";

interface ReviewsCarouselProps {
  reviews: Testimonial[];
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector("li");
    const step = first
      ? first.getBoundingClientRect().width + 24
      : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowButton =
    "absolute top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-letmor-navy/20 bg-letmor-cream-light text-letmor-navy shadow-[0_0.75rem_1.75rem_-0.5rem_rgba(0,0,0,0.25)] transition-colors disabled:opacity-40 enabled:hover:border-letmor-navy enabled:hover:bg-letmor-cream lg:flex";

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, index) => (
          <li
            key={`${review.name}-${index}`}
            className="w-[clamp(16rem,80vw,20rem)] shrink-0 snap-start lg:w-[calc((100%-3rem)/3)]"
          >
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Ver avaliações anteriores"
        onClick={() => scrollByCards(-1)}
        disabled={atStart}
        className={cn(arrowButton, "left-0 -translate-x-1/2")}
      >
        <ArrowRightIcon className="size-5 rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Ver próximas avaliações"
        onClick={() => scrollByCards(1)}
        disabled={atEnd}
        className={cn(arrowButton, "right-0 translate-x-1/2")}
      >
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
  );
}
