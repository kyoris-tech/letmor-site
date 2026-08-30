import { cn } from "@/lib/cn";
import { StarIcon } from "@/components/ui/icons";
import type { Testimonial } from "@/components/screens/home/hotwords";

interface ReviewCardProps {
  review: Testimonial;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[var(--card-radius)] bg-letmor-cream p-[clamp(1.5rem,2.4vw,2.25rem)]",
        className,
      )}
    >
      <div className="flex gap-1 text-letmor-gold">
        {Array.from({ length: review.rating }, (_, index) => (
          <StarIcon key={index} className="size-4" />
        ))}
      </div>

      <p className="mt-5 font-subtitle text-lead text-letmor-navy/90">
        &ldquo;{review.quote}&rdquo;
      </p>

      <span className="my-6 block h-px w-full bg-letmor-navy/15" />

      <div className="mt-auto">
        <p className="font-subtitle text-body text-letmor-navy">{review.name}</p>
        <p className="font-subtitle text-body text-letmor-navy/55">{review.role}</p>
      </div>
    </article>
  );
}
