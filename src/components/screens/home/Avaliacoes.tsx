import { Section } from "@/components/composite/Section";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { getReviews } from "@/lib/reviews";
import { avaliacoes } from "./hotwords";

export async function Avaliacoes() {
  const testimonials = await getReviews();

  return (
    <Section id={avaliacoes.id} eyebrow={avaliacoes.eyebrow} theme="light">
      <SectionHeading lines={avaliacoes.headline} tone="light" />

      <div className="mt-[clamp(2.5rem,5vw,4rem)]">
        <ReviewsCarousel reviews={testimonials} />
      </div>

      {avaliacoes.link && (
        <div className="mt-[clamp(2.75rem,5vw,4.5rem)]">
          <TextLink
            href={avaliacoes.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {avaliacoes.link.label}
          </TextLink>
        </div>
      )}
    </Section>
  );
}
