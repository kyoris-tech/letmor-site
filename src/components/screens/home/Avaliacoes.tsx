import { Section } from "@/components/composite/Section";
import { Headline } from "@/components/ui/Headline";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { avaliacoes } from "./hotwords";

export function Avaliacoes() {
  return (
    <Section id={avaliacoes.id} eyebrow={avaliacoes.eyebrow} theme="light">
      <Headline as="h2" lines={avaliacoes.headline} color="default" />

      <div className="mt-[clamp(2.5rem,5vw,4rem)]">
        <ReviewsCarousel reviews={avaliacoes.testimonials} />
      </div>
    </Section>
  );
}
