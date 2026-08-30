"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface SwingCardProps {
  tilt: number;
  active: boolean;
  className?: string;
  children: ReactNode;
}

export function SwingCard({ tilt, active, className, children }: SwingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const wasActive = useRef(false);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (el && active && !wasActive.current) {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const onScreen = el.getBoundingClientRect().top < window.innerHeight;

      if (!reduced && onScreen) {
        animationRef.current?.cancel();
        animationRef.current = el.animate(
          [
            { transform: `rotate(${tilt}deg)` },
            { transform: `rotate(${tilt + 4}deg)`, offset: 0.3 },
            { transform: `rotate(${tilt - 2.5}deg)`, offset: 0.58 },
            { transform: `rotate(${tilt + 1}deg)`, offset: 0.82 },
            { transform: `rotate(${tilt}deg)` },
          ],
          { duration: 900, easing: "cubic-bezier(0.33, 1, 0.68, 1)" },
        );
      }
    }

    wasActive.current = active;
  }, [active, tilt]);

  return (
    <div ref={ref} className={className} style={{ transform: `rotate(${tilt}deg)` }}>
      {children}
    </div>
  );
}
