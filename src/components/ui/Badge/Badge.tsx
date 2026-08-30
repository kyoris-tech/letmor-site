import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "gold" | "navy";

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

const toneClassMap: Record<BadgeTone, string> = {
  gold: "bg-letmor-sand text-letmor-gold-deep",
  navy: "bg-letmor-navy text-letmor-cream-light",
};

export function Badge({ tone = "gold", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit rounded-full px-3 py-1.5 font-sans text-[0.72rem] font-bold tracking-wide",
        toneClassMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
