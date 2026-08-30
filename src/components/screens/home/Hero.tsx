import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { TiltedCard } from "@/components/ui/TiltedCard";
import { Text } from "@/components/ui/Text";
import { ArrowRightIcon, CircleCheckIcon } from "@/components/ui/icons";
import { hero } from "./hotwords";

const actionIcons = [
  <ArrowRightIcon key="arrow" className="size-full" />,
  <CircleCheckIcon key="check" className="size-full" />,
];

export function Hero() {
  return (
    <section
      id={hero.id}
      data-nav-theme="dark"
      className="relative flex h-svh min-h-[36rem] items-center overflow-hidden bg-letmor-navy pt-[var(--hero-nav-clear)] pb-8"
    >
      <Container size="hero" className="relative">
        <Glow className="left-[var(--glow-left)] top-[var(--glow-top)]" />

        <TiltedCard className="absolute left-[var(--card-left)] top-1/2 hidden -translate-y-1/2 -mt-[var(--card-lift)] lg:block" />

        <div className="relative lg:max-w-[42rem]">
          <Reveal>
            <Text variant="eyebrow" color="inverse">
              {hero.eyebrow}
            </Text>
          </Reveal>

          <Reveal delay={140} className="mt-eyebrow">
            <Headline as="h1" lines={hero.headline} />
          </Reveal>

          {hero.body?.map((paragraph) => (
            <Reveal key={paragraph} delay={280} className="mt-title">
              <Text
                variant="lead"
                color="cream"
                className="max-w-[var(--lead-max)]"
              >
                {paragraph}
              </Text>
            </Reveal>
          ))}

          <Reveal delay={420} className="mt-lead">
            <div className="flex flex-col gap-actions sm:flex-row">
              {hero.actions.map((action, index) => (
                <Button
                  key={action.href}
                  href={action.href}
                  variant={index === 0 ? "primary" : "outline"}
                  size="lg"
                  icon={actionIcons[index]}
                  className="w-full sm:w-auto"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
