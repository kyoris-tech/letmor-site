import { Section } from "@/components/composite/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    </Section>
  );
}
