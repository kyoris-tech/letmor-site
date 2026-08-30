import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "outline-navy"
  | "solid"
  | "whatsapp";

export type ButtonSize = "lg" | "sm";

export interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  as?: ElementType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  animated?: boolean;
  className?: string;
  children: ReactNode;
}
