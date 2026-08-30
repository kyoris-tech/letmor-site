import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

type SectionTheme = "dark" | "light" | "cream";

interface SectionProps {
  id: string;
  eyebrow: string;
  theme?: SectionTheme;
  container?: "page" | "hero";
  fullHeight?: boolean;
  revealContent?: boolean;
  className?: string;
  children: ReactNode;
}

const backgroundClassMap: Record<SectionTheme, string> = {
  dark: "bg-letmor-navy",
  light: "bg-letmor-cream-light",
  cream: "bg-letmor-cream",
};

const navThemeMap: Record<SectionTheme, "dark" | "light"> = {
  dark: "dark",
  light: "light",
  cream: "light",
};

export function Section({
  id,
  eyebrow,
  theme = "dark",
  container = "page",
  fullHeight = true,
  revealContent = true,
  className,
  children,
}: SectionProps) {
  const content = <div className="mt-eyebrow">{children}</div>;

  return (
    <section
      id={id}
      data-nav-theme={navThemeMap[theme]}
      className={cn(
        "flex flex-col justify-center py-section",
        fullHeight && "lg:min-h-svh",
        backgroundClassMap[theme],
        className,
      )}
    >
      <Container size={container}>
        {revealContent ? (
          <Reveal>
            <Text variant="eyebrow" color="accent">
              {eyebrow}
            </Text>
            {content}
          </Reveal>
        ) : (
          <>
            <Reveal>
              <Text variant="eyebrow" color="accent">
                {eyebrow}
              </Text>
            </Reveal>
            {content}
          </>
        )}
      </Container>
    </section>
  );
}
