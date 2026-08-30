import { cn } from "@/lib/cn";
import { Headline } from "@/components/ui/Headline";
import { Text } from "@/components/ui/Text";
import type { HeadlineLine } from "@/components/screens/home/hotwords";

type HeadingTone = "dark" | "light";

interface SectionHeadingProps {
  lines: HeadlineLine[];
  body?: readonly string[];
  tone?: HeadingTone;
  bodyVariant?: "lead" | "body";
  className?: string;
}

export function SectionHeading({
  lines,
  body,
  tone = "dark",
  bodyVariant = "body",
  className,
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <div className={className}>
      <Headline as="h2" lines={lines} color={light ? "default" : "inverse"} />

      {body && body.length > 0 && (
        <div className="mt-title flex max-w-[42rem] flex-col gap-4">
          {body.map((paragraph) => (
            <Text
              key={paragraph}
              variant={bodyVariant}
              color={light ? "default" : "cream"}
              className={cn(light && "text-letmor-navy/75")}
            >
              {paragraph}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}
