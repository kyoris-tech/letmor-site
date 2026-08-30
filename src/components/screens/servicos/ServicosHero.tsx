import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { ArrowRightIcon, CircleCheckIcon } from "@/components/ui/icons";
import { servicosHero } from "@/components/screens/home/hotwords";

const actionIcons = [
  <ArrowRightIcon key="arrow" className="size-full" />,
  <CircleCheckIcon key="check" className="size-full" />,
];

function HeroActions() {
  return (
    <div className="flex flex-col gap-actions sm:flex-row">
      {servicosHero.actions.map((action, index) => (
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
  );
}

export function ServicosHero() {
  return (
    <section
      id={servicosHero.id}
      data-nav-theme="dark"
      className="relative flex min-h-svh items-center bg-letmor-navy pt-[var(--hero-nav-clear)] pb-12 lg:overflow-hidden"
    >
      <Container size="hero" className="relative">
        <Glow className="left-[var(--glow-left)] top-[var(--glow-top)] hidden lg:block" />

        <div className="grid gap-x-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="lg:col-start-1 lg:row-start-1">
            <Reveal>
              <Text
                variant="eyebrow"
                color="inverse"
                className="text-letmor-cream-light/55"
              >
                início
                <span className="mx-[0.6em] text-letmor-cream-light/35">/</span>
                <span className="text-letmor-cream-light">serviços</span>
              </Text>
            </Reveal>

            <Reveal delay={140} className="mt-eyebrow">
              <Headline
                as="h1"
                lines={servicosHero.headline}
                className="text-[clamp(2.125rem,4.6vw,4.625rem)] leading-[1.06]"
              />
            </Reveal>
          </div>

          <div className="mt-title lg:col-start-2 lg:row-start-1 lg:mt-[clamp(0.25rem,1.5vw,1.75rem)]">
            {servicosHero.body?.map((paragraph) => (
              <Reveal key={paragraph} delay={280}>
                <Text variant="lead" color="cream" className="leading-[1.8]">
                  {paragraph}
                </Text>
              </Reveal>
            ))}

            <Reveal
              delay={360}
              className="mt-lead"
            >
              <ul className="flex flex-col gap-y-[clamp(0.75rem,1.6vw,1.25rem)]">
                {servicosHero.fronts.map((front) => (
                  <li
                    key={front.number}
                    className="flex items-baseline gap-x-[0.85em]"
                  >
                    <span className="w-[1.5em] shrink-0 font-display text-step text-letmor-cream-light/45">
                      {front.number}
                    </span>
                    <span className="font-subtitle text-lead text-letmor-cream-light">
                      {front.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={420}
            className="mt-lead lg:col-start-1 lg:row-start-2"
          >
            <HeroActions />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
