"use client";

import { Section } from "@/components/composite/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StackCards } from "@/components/ui/StackCards";
import { Text } from "@/components/ui/Text";
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
        <Headline as="h2" lines={servicos.headline} color="default" />
        {servicos.body?.map((paragraph) => (
          <Text
            key={paragraph}
            variant="body"
            color="default"
            className="mt-4 max-w-[40rem] text-letmor-navy/75"
          >
            {paragraph}
          </Text>
        ))}
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
