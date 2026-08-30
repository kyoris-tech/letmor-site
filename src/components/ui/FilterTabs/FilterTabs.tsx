"use client";

import { cn } from "@/lib/cn";

export interface FilterItem {
  key: string;
  label: string;
}

interface FilterTabsProps {
  items: readonly FilterItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

export function FilterTabs({
  items,
  activeKey,
  onChange,
  className,
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filtro de projetos"
      className={cn(
        "-mx-5 flex snap-x gap-2.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
        className,
      )}
    >
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            className={cn(
              "shrink-0 cursor-pointer snap-start rounded-full border px-[1.35em] py-[0.7em] font-sans text-action-sm font-bold whitespace-nowrap transition-colors duration-200",
              active
                ? "border-letmor-gold bg-letmor-gold text-letmor-cream-light"
                : "border-letmor-cream-light/40 text-letmor-cream-light hover:border-letmor-cream-light hover:bg-letmor-cream-light/10",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
