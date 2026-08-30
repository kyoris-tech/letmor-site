import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  size?: "page" | "hero";
  className?: string;
  children: ReactNode;
}

export function Container({ size = "page", className, children }: ContainerProps) {
  return (
    <div
      className={cn(size === "hero" ? "container-hero" : "container-page", className)}
    >
      {children}
    </div>
  );
}
