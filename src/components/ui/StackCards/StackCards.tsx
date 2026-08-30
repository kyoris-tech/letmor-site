"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface StackItem {
  key: string;
  render: (active: boolean) => ReactNode;
}

interface StackCardsProps {
  items: StackItem[];
  className?: string;
}

export function StackCards({ items, className }: StackCardsProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      let next = -1;
      for (let i = 0; i < cards.length; i += 1) {
        const target = parseFloat(getComputedStyle(cards[i]).top) || 0;
        if (cards[i].getBoundingClientRect().top <= target + 2) next = i;
      }
      setActiveIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <ul
      ref={listRef}
      className={cn("flex flex-col gap-[var(--stack-gap)]", className)}
    >
      {items.map((item, index) => (
        <li
          key={item.key}
          className="sticky"
          style={{
            top: `calc(var(--stack-top) + ${index} * var(--stack-step))`,
          }}
        >
          {item.render(index === activeIndex)}
        </li>
      ))}
    </ul>
  );
}
