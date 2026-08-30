import type { IconProps } from "./icon.types";

export function PaletteIcon({ className }: IconProps) {
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
      <path d="M12 3a9 9 0 0 0 0 18c1.7 0 2.5-1.3 2-2.7-.4-1.2.4-2.3 1.7-2.3H18a3 3 0 0 0 3-3c0-4.5-4-8-9-8Z" />
      <circle cx="8" cy="11" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="11" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
