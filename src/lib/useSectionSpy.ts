"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavTheme = "dark" | "light";

interface SectionSpyState {
  activeId: string | null;
  theme: NavTheme;
}

export function useSectionSpy(navIds: readonly string[]): SectionSpyState {
  const pathname = usePathname();
  const [state, setState] = useState<SectionSpyState>({
    activeId: navIds[0] ?? null,
    theme: "dark",
  });

  useEffect(() => {
    const navSet = new Set(navIds);
    const navHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      ) || 60;
    const line = navHeight + 32;

    let themed: HTMLElement[] = [];
    let frame = 0;
    let retry = 0;

    const update = () => {
      frame = 0;
      let theme: NavTheme = "dark";
      let activeId: string | null = navIds[0] ?? null;

      for (const section of themed) {
        if (section.getBoundingClientRect().top <= line) {
          theme = section.dataset.navTheme === "light" ? "light" : "dark";
          if (section.id && navSet.has(section.id)) activeId = section.id;
        }
      }

      setState((prev) =>
        prev.activeId === activeId && prev.theme === theme
          ? prev
          : { activeId, theme },
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const collect = () => {
      themed = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
      );
      if (themed.length === 0 && retry < 10) {
        retry += 1;
        frame = requestAnimationFrame(collect);
        return;
      }
      update();
    };

    collect();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [navIds, pathname]);

  return state;
}
