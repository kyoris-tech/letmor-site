import type { IconProps } from "./icon.types";

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2c.4 4.5 3.5 7.6 8 8-4.5.4-7.6 3.5-8 8-.4-4.5-3.5-7.6-8-8 4.5-.4 7.6-3.5 8-8Z" />
    </svg>
  );
}
