import type { IconProps } from "./icon.types";

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 10v4a2 2 0 0 0 2 2h1l2.5 4 2-1-2-3h1.5L19 20V4l-8 4H6a2 2 0 0 0-2 2Z" />
      <path d="M19 9a3 3 0 0 1 0 6" />
    </svg>
  );
}
