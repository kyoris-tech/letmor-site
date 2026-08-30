import type { ComponentType } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { SwingCard } from "@/components/ui/SwingCard";
import {
  ChatIcon,
  MegaphoneIcon,
  PaletteIcon,
  PlayIcon,
  TargetIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { Service } from "@/components/screens/home/hotwords";

interface ServiceCardProps {
  service: Service;
  active?: boolean;
  className?: string;
}

const iconById: Record<string, ComponentType<IconProps>> = {
  branding: TargetIcon,
  "identidade-visual": PaletteIcon,
  "social-media": ChatIcon,
  campanhas: MegaphoneIcon,
  audiovisual: PlayIcon,
};

const surface =
  "min-h-[22rem] rounded-[var(--card-radius)] bg-letmor-cream-light shadow-[0_1.5rem_3.25rem_-1rem_rgba(35,49,73,0.3)] md:min-h-[var(--stack-card-min)]";

export function ServiceCard({ service, active = false, className }: ServiceCardProps) {
  const Icon = iconById[service.id] ?? TargetIcon;

  return (
    <div
      className={cn(
        "grid gap-[clamp(1.25rem,3vw,2.75rem)] md:grid-cols-[3fr_2fr] md:items-stretch",
        className,
      )}
    >
      <SwingCard
        tilt={-3}
        active={active}
        className={cn(
          surface,
          "flex flex-col justify-center p-[clamp(1.75rem,3.5vw,3.5rem)]",
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-2xl bg-letmor-sand text-letmor-navy">
          <Icon className="size-6" />
        </span>
        <h3 className="mt-6 font-display text-service text-letmor-navy">
          {service.name}
        </h3>
        <p className="mt-4 max-w-[34rem] font-subtitle text-body text-letmor-navy/80">
          {service.description}
        </p>
      </SwingCard>

      <SwingCard
        tilt={3}
        active={active}
        className={cn(surface, "relative overflow-hidden")}
      >
        <Image
          src={service.image}
          alt={`${service.name} — imagem ilustrativa`}
          fill
          sizes="(min-width:768px) 22rem, 90vw"
          className="object-cover"
        />
      </SwingCard>
    </div>
  );
}
