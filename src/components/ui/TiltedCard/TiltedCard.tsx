import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface TiltedCardProps {
  className?: string;
  photo?: { src: string; alt: string };
  children?: ReactNode;
}

export function TiltedCard({ className, photo, children }: TiltedCardProps) {
  return (
    <div className={cn("w-[var(--card-w)]", className)}>
      <div
        className={cn(
          "card-swing relative w-full overflow-hidden rounded-[var(--card-radius)] bg-letmor-cream-light shadow-[0_1.25rem_2.75rem_-0.75rem_rgba(253,249,242,0.28)]",
          photo && "border-2 border-white",
        )}
        style={{ aspectRatio: "var(--card-ratio)" }}
      >
        {photo && (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1024px) 24rem, 16rem"
            className="polaroid-photo object-cover"
          />
        )}
        {children}
      </div>
    </div>
  );
}
