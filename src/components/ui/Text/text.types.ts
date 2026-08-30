import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TextVariant =
  | "eyebrow"
  | "lead"
  | "nav"
  | "action"
  | "action-sm"
  | "body";

export type TextColor =
  | "default"
  | "muted"
  | "accent"
  | "inverse"
  | "cream"
  | "white";

export interface TextProps
  extends Omit<ComponentPropsWithoutRef<"a">, "color" | "children"> {
  as?: ElementType;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  children: ReactNode;
}
