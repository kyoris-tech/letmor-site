"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/components/screens/home/hotwords";

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
  className?: string;
}

export function ProjectCard({ project, onSelect, className }: ProjectCardProps) {
  const cover = project.images[0];
  const preloaded = useRef(false);

  const preload = useCallback(() => {
    if (preloaded.current || typeof window === "undefined") return;
    preloaded.current = true;
    for (const image of project.images) {
      const loader = new window.Image();
      loader.decoding = "async";
      loader.src = image.src;
    }
  }, [project.images]);

  return (
    <button
      type="button"
      onClick={onSelect}
      onPointerEnter={preload}
      onTouchStart={preload}
      onFocus={preload}
      aria-label={`Abrir projeto ${project.name}`}
      className={cn(
        "group flex w-full cursor-pointer flex-col text-left",
        className,
      )}
    >
      <span className="relative block aspect-square w-full overflow-hidden rounded-[clamp(1rem,1.6vw,1.5rem)] bg-letmor-cream-light shadow-[0_1.25rem_2.5rem_-1rem_rgba(0,0,0,0.5)]">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        )}
      </span>

      <span className="mt-[1.1em] font-display text-project text-letmor-cream-light">
        {project.name}
      </span>
      <span className="mt-[0.35em] font-subtitle text-body text-letmor-cream/60">
        {project.type} <span className="text-letmor-gold">-</span> {project.subtype}
      </span>
    </button>
  );
}
