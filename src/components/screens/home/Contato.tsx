import Image from "next/image";
import { Section } from "@/components/composite/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLink } from "@/components/ui/SocialLink";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/contact";
import { contato } from "./hotwords";

const cardPadding = "p-[clamp(1.75rem,3vw,2.75rem)]";

const socialIcons: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
};

export function Contato() {
  return (
    <Section id={contato.id} eyebrow={contato.eyebrow} theme="dark">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <SectionHeading
          lines={contato.headline}
          body={contato.body}
          tone="dark"
          bodyVariant="lead"
        />
        <Image
          src="/images/logo.png"
          alt="LetMor"
          width={1063}
          height={512}
          className="h-12 w-auto shrink-0 md:-mt-2 md:h-24 lg:h-32"
        />
      </div>

      <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-[clamp(1.25rem,2.5vw,2rem)] md:grid-cols-2">
        <SurfaceCard className={cardPadding}>
          <Badge tone="gold">{contato.direct.label}</Badge>
          <p className="mt-5 font-subtitle text-lead text-letmor-navy">
            {contato.direct.title}
          </p>
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="size-full" />}
            className="mt-6 w-full sm:w-fit"
          >
            {contato.direct.cta}
          </Button>
        </SurfaceCard>

        <SurfaceCard className={cardPadding}>
          <Badge tone="gold">{contato.social.label}</Badge>
          <p className="mt-5 font-subtitle text-lead text-letmor-navy">
            {contato.social.title}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {contato.social.links.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={Icon ? <Icon className="size-5" /> : null}
                />
              );
            })}
          </div>
        </SurfaceCard>
      </div>
    </Section>
  );
}
