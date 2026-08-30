import { cn } from "@/lib/cn";

interface GlowProps {
  className?: string;
}

export function Glow({ className }: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-[var(--glow-size)] -translate-1/2 rounded-full blur-[2.5rem]",
        className,
      )}
      style={{
        background:
          "radial-gradient(closest-side, rgba(253,249,242,0.42), rgba(253,249,242,0.16) 48%, rgba(253,249,242,0) 74%)",
      }}
    />
  );
}
