import { cn } from "@/lib/cn";
import type { TextColor, TextProps, TextVariant } from "./text.types";

const variantClassMap: Record<TextVariant, string> = {
  eyebrow: "font-sans text-eyebrow font-bold tracking-[0.067em]",
  lead: "font-subtitle text-lead tracking-[0.059em]",
  nav: "font-subtitle text-nav",
  action: "font-sans text-action font-bold",
  "action-sm": "font-sans text-action-sm font-bold",
  body: "font-subtitle text-body",
};

const colorClassMap: Record<TextColor, string> = {
  default: "text-[var(--text-color-default)]",
  muted: "text-[var(--text-color-muted)]",
  accent: "text-[var(--text-color-accent)]",
  inverse: "text-[var(--text-color-inverse)]",
  cream: "text-[var(--text-color-cream)]",
  white: "text-[var(--text-color-white)]",
};

export function Text({
  as: Component = "p",
  variant = "body",
  color = "default",
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <Component
      className={cn(variantClassMap[variant], colorClassMap[color], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
