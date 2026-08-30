import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TiltedCardProps {
  className?: string;
  children?: ReactNode;
}

export function TiltedCard({ className, children }: TiltedCardProps) {
  return (
    <div className={cn("w-[var(--card-w)]", className)}>
      <div
        className="card-swing w-full overflow-hidden rounded-[var(--card-radius)] bg-letmor-cream-light shadow-[0_1.25rem_2.75rem_-0.75rem_rgba(253,249,242,0.28)]"
        style={{ aspectRatio: "var(--card-ratio)" }}
      >
        {children}
      </div>
    </div>
  );
}
