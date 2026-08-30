"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { useSectionSpy } from "@/lib/useSectionSpy";
import { navCta, navItems } from "@/components/screens/home/hotwords";

const SPY_IDS = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const { activeId, theme } = useSectionSpy(SPY_IDS);
  const dark = theme === "dark";

  return (
    <header className="fixed inset-x-0 top-nav-top z-50 flex justify-center px-5">
      <nav
        className={cn(
          "flex h-nav-h max-w-full items-center gap-nav-gap rounded-full pl-nav-pl pr-nav-pr backdrop-blur-xl backdrop-saturate-150 inset-ring-[1.5px] transition-[background-color,box-shadow,color] duration-500 ease-out",
          dark
            ? "bg-letmor-navy/55 inset-ring-letmor-cream-light/25 shadow-[0_0.5rem_2rem_-0.5rem_rgba(10,14,22,0.55)] supports-[backdrop-filter]:bg-letmor-navy/45"
            : "bg-letmor-cream-light/70 inset-ring-letmor-navy/15 shadow-[0_0.5rem_2rem_-0.5rem_rgba(35,49,73,0.18)] supports-[backdrop-filter]:bg-letmor-cream-light/60",
        )}
      >
        <a
          href="#inicio"
          aria-label="LetMor — página inicial"
          className="relative block shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="LetMor"
            width={1063}
            height={512}
            priority
            className={cn(
              "h-nav-logo-h w-auto transition-opacity duration-500",
              dark ? "opacity-100" : "opacity-0",
            )}
          />
          <Image
            src="/images/logo-navy.png"
            alt=""
            aria-hidden
            width={1063}
            height={512}
            className={cn(
              "absolute inset-0 h-nav-logo-h w-auto transition-opacity duration-500",
              dark ? "opacity-0" : "opacity-100",
            )}
          />
        </a>

        <ul className="hidden items-center gap-nav-link-gap lg:flex">
          {navItems.map((item) => {
            const active = activeId === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <Text
                  as="a"
                  variant="nav"
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                  color={active ? "accent" : dark ? "white" : "default"}
                  className={cn(
                    "transition-colors",
                    dark ? "hover:text-letmor-gold-soft" : "hover:text-letmor-gold",
                  )}
                >
                  {item.label}
                </Text>
              </li>
            );
          })}
        </ul>

        <Button
          href={navCta.href}
          variant="primary"
          size="sm"
          icon={<ArrowRightIcon className="size-full" />}
        >
          {navCta.label}
        </Button>
      </nav>
    </header>
  );
}
