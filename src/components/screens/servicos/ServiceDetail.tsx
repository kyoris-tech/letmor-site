import type { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Headline } from "@/components/ui/Headline";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type {
  ServiceDetail as ServiceDetailData,
  ServiceOffer,
} from "@/components/screens/home/hotwords";

interface ServiceDetailProps {
  detail: ServiceDetailData;
}

type OfferTone = ServiceDetailData["offerTone"];

const offerToneMap: Record<
  OfferTone,
  { card: string; name: string; label: string; price: string }
> = {
  light: {
    card: "bg-letmor-cream-light",
    name: "text-letmor-navy",
    label: "text-letmor-navy/55",
    price: "text-letmor-gold-deep",
  },
  sand: {
    card: "bg-letmor-sand",
    name: "text-letmor-navy",
    label: "text-letmor-navy/55",
    price: "text-letmor-gold-deep",
  },
  navy: {
    card: "bg-letmor-navy",
    name: "text-letmor-cream-light",
    label: "text-letmor-cream-light/55",
    price: "text-letmor-gold-soft",
  },
};

const cardToneMap: Record<ServiceDetailData["cardTone"], string> = {
  cream: "border-2 border-white bg-letmor-cream-light",
  navy: "bg-letmor-navy",
  gold: "bg-letmor-gold",
};

function OfferCard({ offer, tone }: { offer: ServiceOffer; tone: OfferTone }) {
  const styles = offerToneMap[tone];

  return (
    <div className={cn("w-fit min-w-[11rem] rounded-2xl px-6 py-4", styles.card)}>
      {offer.name && (
        <p className={cn("font-sans text-body font-bold", styles.name)}>
          {offer.name}
        </p>
      )}
      {offer.priceLabel && (
        <p className={cn("mt-1 font-subtitle text-body", styles.label)}>
          {offer.priceLabel}
        </p>
      )}
      <p
        className={cn(
          "mt-2 font-sans text-[clamp(1.25rem,1.6vw,1.5rem)] font-bold",
          styles.price,
        )}
      >
        {offer.price}
      </p>
    </div>
  );
}

function Deliverables({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Text
        variant="eyebrow"
        color="accent"
        className="uppercase tracking-[0.16em]"
      >
        {label}
      </Text>
      <ul className="mt-6 flex flex-col gap-y-3.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-x-3 font-subtitle text-body leading-[1.6] text-letmor-navy/80"
          >
            <span
              aria-hidden
              className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-letmor-gold"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetail({ detail }: ServiceDetailProps) {
  const atEnd = detail.cardPosition === "end";
  const onLight = detail.background === "light";
  const flatOffers = detail.offers ?? [];
  const groups =
    detail.offerGroups ??
    (flatOffers.length > 0 ? [{ title: "", offers: flatOffers }] : []);
  const titleLines = detail.nameLines ?? [[{ text: detail.name }]];
  const asideOffer =
    !detail.platforms && !detail.offerGroups && flatOffers.length === 1;

  return (
    <section
      id={detail.id}
      data-nav-theme="light"
      className={cn(
        "py-section lg:overflow-hidden",
        onLight ? "bg-[#fdf9f3]" : "bg-letmor-cream",
      )}
    >
      <Container size="page">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-[clamp(1.5rem,4vw,3.5rem)]">
          <Reveal className="flex items-center gap-x-5 lg:flex-col lg:items-start lg:gap-y-4">
            <span className="font-display text-[clamp(3rem,5.5vw,4.75rem)] leading-none text-letmor-gold">
              {detail.index}
            </span>
            <span className="font-sans text-eyebrow font-bold uppercase tracking-[0.3em] text-letmor-navy/55 lg:[writing-mode:vertical-rl] lg:rotate-180">
              {detail.rail}
            </span>
          </Reveal>

          <Reveal
            delay={120}
            className={cn(
              "shrink-0 self-center lg:self-start lg:pt-1",
              atEnd && "order-last",
            )}
          >
            <div
              className={cn(
                "card-swing relative aspect-[300/430] overflow-hidden rounded-[var(--card-radius)] shadow-[0_2rem_3.5rem_-1rem_rgba(35,49,73,0.22)]",
                atEnd
                  ? "w-[clamp(16rem,32vw,23rem)]"
                  : "w-[clamp(15rem,30vw,21rem)]",
                cardToneMap[detail.cardTone],
              )}
              style={
                { "--card-tilt": atEnd ? "4deg" : "-4deg" } as CSSProperties
              }
            >
              {detail.photo && (
                <Image
                  src={detail.photo.src}
                  alt={detail.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 23rem, 16rem"
                  className="object-cover"
                />
              )}
            </div>
          </Reveal>

          <div className="flex-1">
            <Reveal>
              <Headline as="h2" lines={titleLines} color="default" />
            </Reveal>

            <div className="mt-title flex max-w-[40rem] flex-col gap-y-5">
              {detail.body.map((paragraph) => (
                <Reveal key={paragraph} delay={120}>
                  <Text
                    variant="lead"
                    color="default"
                    className="leading-[1.8] text-letmor-navy/75"
                  >
                    {paragraph}
                  </Text>
                </Reveal>
              ))}
            </div>

            {detail.platforms ? (
              <div className="mt-lead grid gap-x-[clamp(2rem,4vw,3.5rem)] gap-y-10 sm:grid-cols-[minmax(0,1fr)_auto]">
                <Reveal delay={120}>
                  <Deliverables
                    label={detail.deliverablesLabel}
                    items={detail.deliverables}
                  />
                </Reveal>

                <Reveal delay={200} className="sm:w-[15rem]">
                  <Text
                    variant="eyebrow"
                    color="accent"
                    className="uppercase tracking-[0.16em]"
                  >
                    {detail.platformsLabel}
                  </Text>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {detail.platforms.map((platform) => (
                      <Badge key={platform} tone="navy">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3">
                    {flatOffers.map((offer, index) => (
                      <OfferCard
                        key={`${offer.name ?? "offer"}-${index}`}
                        offer={offer}
                        tone={detail.offerTone}
                      />
                    ))}
                  </div>
                </Reveal>
              </div>
            ) : asideOffer ? (
              <div className="mt-lead grid gap-x-[clamp(2rem,4vw,3.5rem)] gap-y-8 sm:grid-cols-[minmax(0,1fr)_auto]">
                <Reveal delay={120}>
                  <Deliverables
                    label={detail.deliverablesLabel}
                    items={detail.deliverables}
                  />
                </Reveal>
                <Reveal delay={200} className="sm:justify-self-end sm:self-start">
                  <OfferCard offer={flatOffers[0]} tone={detail.offerTone} />
                </Reveal>
              </div>
            ) : (
              <div className="mt-lead">
                <Reveal delay={120}>
                  <Deliverables
                    label={detail.deliverablesLabel}
                    items={detail.deliverables}
                  />
                </Reveal>

                <div className="mt-10 flex flex-col gap-y-9">
                  {groups.map((group, groupIndex) => {
                    const grid =
                      !group.title && group.offers.length >= 4
                        ? "sm:max-w-[34rem] sm:grid-cols-2"
                        : "sm:grid-flow-col sm:auto-cols-max";
                    return (
                      <Reveal
                        key={group.title || `group-${groupIndex}`}
                        delay={200}
                      >
                        {group.title && (
                          <h3 className="mb-5 font-display text-[clamp(1.5rem,2vw,1.875rem)] text-letmor-gold">
                            {group.title}
                          </h3>
                        )}
                        <div className={cn("grid gap-4", grid)}>
                          {group.offers.map((offer, index) => (
                            <OfferCard
                              key={`${offer.name ?? "offer"}-${index}`}
                              offer={offer}
                              tone={detail.offerTone}
                            />
                          ))}
                        </div>
                      </Reveal>
                    );
                  })}
                </div>

                {detail.note && (
                  <Reveal delay={200}>
                    <Text
                      variant="body"
                      className="mt-12 max-w-[46rem] text-letmor-navy/50"
                    >
                      {detail.note}
                    </Text>
                  </Reveal>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
