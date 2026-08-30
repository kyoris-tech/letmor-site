"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

interface RevealProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal=""
      data-in-view={inView ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
