import { Section } from "@/components/composite/Section";
import { Headline } from "@/components/ui/Headline";
import { StepList } from "@/components/ui/StepList";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { sobre } from "./hotwords";

export function Sobre() {
  return (
    <Section id={sobre.id} eyebrow={sobre.eyebrow} theme="light">
      <div className="grid gap-x-[clamp(2rem,5vw,4.5rem)] gap-y-10 lg:grid-cols-2 lg:items-start">
        <Headline as="h2" lines={sobre.headline} color="default" />

        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            {sobre.body?.map((paragraph) => (
              <Text key={paragraph} variant="body" color="default">
                {paragraph}
              </Text>
            ))}
          </div>

          {sobre.steps && <StepList steps={sobre.steps} />}

          {sobre.link && (
            <TextLink href={sobre.link.href}>{sobre.link.label}</TextLink>
          )}
        </div>
      </div>
    </Section>
  );
}
