import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl bg-letmor-sand px-4 py-3.5 transition-colors hover:bg-letmor-cream"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-letmor-navy text-letmor-cream-light">
        {icon}
      </span>
      <span className="font-subtitle text-body font-medium text-letmor-navy">
        {label}
      </span>
      <span className="ml-auto flex items-center gap-1.5 font-sans text-action-sm text-letmor-navy/60 transition-colors group-hover:text-letmor-navy">
        Abrir
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
