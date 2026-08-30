import type { IconProps } from "./icon.types";

export function CircleCheckIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21.8 10.9A10 10 0 1 1 15.9 3.2" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
