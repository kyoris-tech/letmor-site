import { cn } from "@/lib/cn";

export interface Step {
  number: string;
  label: string;
}

interface StepListProps {
  steps: readonly Step[];
  className?: string;
}

export function StepList({ steps, className }: StepListProps) {
  return (
    <ul className={cn("flex flex-col gap-y-3", className)}>
      {steps.map((step) => (
        <li
          key={step.number}
          className="flex items-center gap-x-[1.1em] rounded-2xl bg-letmor-sand px-[1.4em] py-[1em]"
        >
          <span className="font-display text-step text-letmor-gold">
            {step.number}
          </span>
          <span className="font-subtitle text-body text-letmor-navy">
            {step.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
