import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TagProps {
  className?: string;
  children: ReactNode;
}

export function Tag({ className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-letmor-sand px-[0.9em] py-[0.45em] font-sans text-action-sm font-medium text-letmor-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}
