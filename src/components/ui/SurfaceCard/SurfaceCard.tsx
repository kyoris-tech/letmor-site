import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SurfaceCardProps extends ComponentPropsWithoutRef<"div"> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function SurfaceCard({
  as: Component = "div",
  className,
  children,
  ...rest
}: SurfaceCardProps) {
  return (
    <Component
      className={cn(
        "flex flex-col rounded-[var(--card-radius)] bg-letmor-cream-light shadow-[0_1.5rem_3rem_-1rem_rgba(35,49,73,0.22)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
