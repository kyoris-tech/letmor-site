import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/ui/icons";

type TextLinkTone = "light" | "dark";

interface TextLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  tone?: TextLinkTone;
  children: ReactNode;
}

const toneClassMap: Record<TextLinkTone, string> = {
  light: "text-letmor-navy hover:text-letmor-gold",
  dark: "text-letmor-cream-light hover:text-letmor-gold-soft",
};

export function TextLink({
  href,
  tone = "light",
  className,
  children,
  ...rest
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex w-fit items-center gap-x-[0.6em] font-subtitle text-nav underline decoration-1 underline-offset-[0.45em] transition-colors",
        toneClassMap[tone],
        className,
      )}
      {...rest}
    >
      {children}
      <ArrowRightIcon className="size-[1.15em] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
