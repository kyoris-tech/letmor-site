import { Section } from "@/components/composite/Section";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { avaliacoes } from "./hotwords";

export function Avaliacoes() {
  return (
    <Section id={avaliacoes.id} eyebrow={avaliacoes.eyebrow} theme="light">
      <SectionHeading lines={avaliacoes.headline} tone="light" />

      <div className="mt-[clamp(2.5rem,5vw,4rem)]">
        <ReviewsCarousel reviews={avaliacoes.testimonials} />
      </div>
    </Section>
  );
}
