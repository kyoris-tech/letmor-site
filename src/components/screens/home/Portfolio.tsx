import { Section } from "@/components/composite/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { PortfolioGallery } from "./PortfolioGallery";
import { portfolio } from "./hotwords";

export function Portfolio() {
  return (
    <Section
      id={portfolio.id}
      eyebrow={portfolio.eyebrow}
      theme="dark"
      fullHeight={false}
    >
      <SectionHeading lines={portfolio.headline} tone="dark" />

      <PortfolioGallery />

      {portfolio.link && (
        <div className="mt-[clamp(2.5rem,5vw,4rem)]">
          <TextLink href={portfolio.link.href} tone="dark">
            {portfolio.link.label}
          </TextLink>
        </div>
      )}
    </Section>
  );
}
