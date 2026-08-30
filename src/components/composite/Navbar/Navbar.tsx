"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { ArrowRightIcon, MenuIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { useSectionSpy } from "@/lib/useSectionSpy";
import { navCta, navItems } from "@/components/screens/home/hotwords";

const sectionId = (href: string) => href.replace(/^.*#/, "");

const SPY_IDS = navItems.map((item) => sectionId(item.href));

export function Navbar() {
  const { activeId, theme } = useSectionSpy(SPY_IDS);
  const dark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLabel =
    navItems.find((item) => sectionId(item.href) === activeId)?.label ??
    navItems[0].label;

  const closeMenu = () => setMenuOpen(false);

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
        <Link
          href="/#inicio"
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
            priority
            className={cn(
              "absolute inset-0 h-nav-logo-h w-auto transition-opacity duration-500",
              dark ? "opacity-0" : "opacity-100",
            )}
          />
        </Link>

        <Text
          variant="nav"
          color={dark ? "white" : "default"}
          className="max-w-[9rem] truncate px-1 lg:hidden"
        >
          {activeLabel}
        </Text>

        <ul className="hidden items-center gap-nav-link-gap lg:flex">
          {navItems.map((item) => {
            const active = activeId === sectionId(item.href);
            return (
              <li key={item.href}>
                <Text
                  as={Link}
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

        <div className="hidden lg:contents">
          <Button
            as={Link}
            href={navCta.href}
            variant="primary"
            size="sm"
            icon={<ArrowRightIcon className="size-full" />}
          >
            {navCta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className={cn(
            "flex size-nav-cta-h shrink-0 items-center justify-center rounded-full transition-colors lg:hidden",
            dark
              ? "bg-letmor-cream-light/10 text-letmor-cream-light"
              : "bg-letmor-navy/10 text-letmor-navy",
          )}
        >
          <MenuIcon className="size-5" />
        </button>
      </nav>

      {menuOpen && (
        <Modal label="Menu de navegação" onClose={closeMenu}>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = activeId === sectionId(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 font-subtitle text-lead transition-colors",
                      active
                        ? "bg-letmor-sand text-letmor-gold-deep"
                        : "text-letmor-navy hover:bg-letmor-navy/5",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Button
            as={Link}
            href={navCta.href}
            onClick={closeMenu}
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="size-full" />}
            className="mt-6 w-full"
          >
            {navCta.label}
          </Button>
        </Modal>
      )}
    </header>
  );
}
