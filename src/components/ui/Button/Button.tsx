import { cn } from "@/lib/cn";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

const variantBaseClassMap: Record<ButtonVariant, string> = {
  primary: "bg-letmor-gold text-letmor-cream-light shadow-letmor-gold/25",
  outline: "border-[1.5px] border-letmor-cream-light/55 text-letmor-cream-light",
  "outline-navy": "border-[1.5px] border-letmor-navy/35 text-letmor-navy",
  solid: "bg-letmor-navy text-letmor-cream-light shadow-letmor-navy/25",
  whatsapp: "bg-[#25D366] text-white shadow-[#25D366]/25",
};

const variantHoverClassMap: Record<ButtonVariant, string> = {
  primary: "hover:bg-letmor-gold-soft hover:shadow-letmor-gold/40",
  outline: "hover:border-letmor-cream-light hover:bg-letmor-cream-light/10",
  "outline-navy": "hover:border-letmor-navy hover:bg-letmor-navy/5",
  solid: "hover:bg-letmor-navy-light hover:shadow-letmor-navy/40",
  whatsapp: "hover:bg-[#1FBE5C] hover:shadow-[#25D366]/40",
};

const sizeClassMap: Record<ButtonSize, string> = {
  lg: "h-btn-h gap-btn-gap text-action",
  sm: "h-nav-cta-h gap-[0.3em] text-action-sm",
};

const paddingClassMap: Record<ButtonSize, Record<"filled" | "outline", string>> = {
  lg: { filled: "px-btn-px", outline: "px-[var(--btn-px-outline)]" },
  sm: { filled: "px-nav-cta-px", outline: "px-nav-cta-px" },
};

const iconSizeClassMap: Record<ButtonSize, string> = {
  lg: "size-btn-icon",
  sm: "size-nav-cta-icon",
};

export function Button({
  as: Component = "a",
  variant = "primary",
  size = "lg",
  icon,
  animated = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "group relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full font-sans font-bold whitespace-nowrap",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-letmor-gold focus-visible:ring-offset-2 focus-visible:ring-offset-letmor-navy",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        animated &&
          "transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variantBaseClassMap[variant],
        animated && variantHoverClassMap[variant],
        sizeClassMap[size],
        paddingClassMap[size][
          variant === "outline" || variant === "outline-navy" ? "outline" : "filled"
        ],
        className,
      )}
      {...rest}
    >
      {animated && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <span
          className={cn(
            "relative flex shrink-0 items-center justify-center",
            iconSizeClassMap[size],
          )}
        >
          {icon}
        </span>
      )}
    </Component>
  );
}
