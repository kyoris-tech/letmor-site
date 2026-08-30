"use client";

import { Section } from "@/components/composite/Section";
import { PlanCard } from "@/components/ui/PlanCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { useInView } from "@/lib/useInView";
import { planos } from "./hotwords";

export function Planos() {
  const [ref, inView] = useInView<HTMLDivElement>({
    rootMargin: "0px 0px -22% 0px",
  });

  return (
    <Section
      id={planos.id}
      eyebrow={planos.eyebrow}
      theme="dark"
      fullHeight={false}
      revealContent={false}
    >
      <Reveal>
        <SectionHeading lines={planos.headline} tone="dark" />
      </Reveal>

      <div
        ref={ref}
        data-open={inView ? "" : undefined}
        className="plans-grid mt-[clamp(2.75rem,5vw,4.5rem)] grid gap-[clamp(1.25rem,2.5vw,2rem)] lg:grid-cols-3 lg:items-center"
      >
        {planos.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      {planos.link && (
        <div className="mt-[clamp(2.75rem,5vw,4.5rem)]">
          <TextLink href={planos.link.href} tone="dark">
            {planos.link.label}
          </TextLink>
        </div>
      )}
    </Section>
  );
}
