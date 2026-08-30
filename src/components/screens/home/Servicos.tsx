"use client";

import { Section } from "@/components/composite/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StackCards } from "@/components/ui/StackCards";
import { servicos } from "./hotwords";

export function Servicos() {
  return (
    <Section
      id={servicos.id}
      eyebrow={servicos.eyebrow}
      theme="cream"
      fullHeight={false}
      revealContent={false}
    >
      <Reveal>
        <SectionHeading
          lines={servicos.headline}
          body={servicos.body}
          tone="light"
        />
      </Reveal>

      <StackCards
        className="mt-[clamp(2.5rem,5vw,4.5rem)]"
        items={servicos.services.map((service) => ({
          key: service.id,
          render: (active: boolean) => (
            <ServiceCard service={service} active={active} />
          ),
        }))}
      />
    </Section>
  );
}
