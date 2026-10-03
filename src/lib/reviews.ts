import { avaliacoes, type Testimonial } from "@/components/screens/home/hotwords";

const WIDGET_ID = process.env.FEATURABLE_WIDGET_ID;
const ENDPOINT = "https://featurable.com/api/v1/widgets";
const REVALIDATE_SECONDS = 60 * 60 * 24;
const MAX_REVIEWS = 12;
const MIN_RATING = 4;

const STAR_WORDS: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

interface FeaturableReview {
  reviewId?: string;
  reviewer?: { displayName?: string; profilePhotoUrl?: string };
  starRating?: number | string;
  comment?: string;
  createTime?: string;
}

function parseRating(value: FeaturableReview["starRating"]): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") return STAR_WORDS[value.toUpperCase()] ?? 0;
  return 0;
}

function toTestimonial(review: FeaturableReview): Testimonial | null {
  const quote = review.comment?.trim();
  const name = review.reviewer?.displayName?.trim();
  const rating = parseRating(review.starRating);
  if (!quote || !name || rating < MIN_RATING) return null;
  return { quote, name, role: "Avaliação no Google", rating };
}

export async function getReviews(): Promise<Testimonial[]> {
  if (!WIDGET_ID) return avaliacoes.testimonials;

  try {
    const response = await fetch(`${ENDPOINT}/${WIDGET_ID}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return avaliacoes.testimonials;

    const data = (await response.json()) as {
      reviews?: FeaturableReview[];
      data?: { reviews?: FeaturableReview[] };
    };
    const raw = data.reviews ?? data.data?.reviews ?? [];
    const mapped = raw
      .map(toTestimonial)
      .filter((item): item is Testimonial => item !== null)
      .slice(0, MAX_REVIEWS);

    return mapped.length > 0 ? mapped : avaliacoes.testimonials;
  } catch {
    return avaliacoes.testimonials;
  }
}
