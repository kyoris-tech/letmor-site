import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/icons";
import type { Plan } from "@/components/screens/home/hotwords";

interface PlanCardProps {
  plan: Plan;
  className?: string;
}

export function PlanCard({ plan, className }: PlanCardProps) {
  const highlight = Boolean(plan.highlight);
  const [currency, amount] = plan.price.split(" ");

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[var(--card-radius)] p-[clamp(1.5rem,2.6vw,2.5rem)]",
        highlight
          ? "bg-letmor-gold text-letmor-cream-light shadow-[0_1.75rem_3.5rem_-1rem_rgba(177,131,53,0.5)] lg:-my-5"
          : "bg-letmor-cream-light text-letmor-navy shadow-[0_1.5rem_3rem_-1rem_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <h3 className="font-display text-plan-name">{plan.name}</h3>
      <p
        className={cn(
          "mt-1 font-sans text-action-sm",
          highlight ? "text-letmor-cream-light/85" : "text-letmor-navy/55",
        )}
      >
        {plan.tagline}
      </p>

      {plan.badge && (
        <span className="mt-4 inline-flex w-fit rounded-full bg-letmor-navy px-3 py-1 font-sans text-[0.68rem] font-bold tracking-wide text-letmor-cream-light">
          {plan.badge}
        </span>
      )}

      <div className={cn("flex items-end gap-1.5", plan.badge ? "mt-5" : "mt-5 lg:mt-11")}>
        <span className="mb-2 font-sans text-action-sm font-bold">{currency}</span>
        <span className="font-display text-plan-price">{amount}</span>
        <span
          className={cn(
            "mb-2 font-sans text-action-sm",
            highlight ? "text-letmor-cream-light/80" : "text-letmor-navy/50",
          )}
        >
          {plan.period}
        </span>
      </div>

      <p
        className={cn(
          "mt-4 font-subtitle text-body",
          highlight ? "text-letmor-cream-light/90" : "text-letmor-navy/70",
        )}
      >
        {plan.description}
      </p>

      <span
        className={cn(
          "my-6 block h-px w-full",
          highlight ? "bg-letmor-cream-light/25" : "bg-letmor-navy/15",
        )}
      />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature, index) => (
          <li
            key={`${feature}-${index}`}
            className="flex items-center gap-3 font-subtitle text-body"
          >
            <StarIcon
              className={cn(
                "size-4 shrink-0",
                highlight ? "text-letmor-cream-light" : "text-letmor-gold",
              )}
            />
            <span
              className={highlight ? "text-letmor-cream-light/90" : "text-letmor-navy/80"}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="#contato"
        variant={highlight ? "solid" : "outline-navy"}
        size="lg"
        animated={false}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </article>
  );
}
