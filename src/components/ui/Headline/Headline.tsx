import type { ElementType } from "react";
import { cn } from "@/lib/cn";
import type { HeadlineLine } from "@/components/screens/home/hotwords";

interface HeadlineProps {
  as?: ElementType;
  lines: HeadlineLine[];
  color?: "inverse" | "default";
  className?: string;
}

const colorClassMap = {
  inverse: "text-[var(--text-color-inverse)]",
  default: "text-[var(--text-color-default)]",
} as const;

export function Headline({
  as: Component = "h2",
  lines,
  color = "inverse",
  className,
}: HeadlineProps) {
  return (
    <Component
      className={cn(
        "font-display text-display tracking-[0.014em]",
        colorClassMap[color],
        className,
      )}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((segment, segmentIndex) => (
            <span
              key={segmentIndex}
              className={segment.accent ? "text-letmor-gold" : undefined}
            >
              {segmentIndex > 0 ? " " : null}
              {segment.text}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
