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
        "flex h-[clamp(22rem,30vw,26rem)] flex-col rounded-[var(--card-radius)] bg-letmor-cream p-[clamp(1.5rem,2.4vw,2.25rem)]",
        className,
      )}
    >
      <div className="flex shrink-0 gap-1 text-letmor-gold">
        {Array.from({ length: review.rating }, (_, index) => (
          <StarIcon key={index} className="size-4" />
        ))}
      </div>

      <div
        tabIndex={0}
        className="mt-5 min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-2 [scrollbar-color:rgba(35,49,73,0.3)_transparent] [scrollbar-width:thin]"
      >
        <p className="text-justify font-subtitle text-lead text-letmor-navy/90 hyphens-auto">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <span className="my-6 block h-px w-full shrink-0 bg-letmor-navy/15" />

      <div className="shrink-0">
        <p className="font-subtitle text-body text-letmor-navy">{review.name}</p>
        <p className="font-subtitle text-body text-letmor-navy/55">{review.role}</p>
      </div>
    </article>
  );
}
