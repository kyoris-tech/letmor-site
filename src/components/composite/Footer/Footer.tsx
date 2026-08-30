import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footer } from "@/components/screens/home/hotwords";

export function Footer() {
  return (
    <footer className="bg-letmor-navy py-[clamp(3rem,6vw,5rem)]">
      <Container>
        <div className="h-px w-full bg-letmor-cream-light/15" />

        <div className="mt-[clamp(2rem,4vw,3.5rem)] flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-subtitle text-body text-letmor-cream-light/70">
              {footer.credit.prefix}{" "}
              <a
                href={footer.credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-letmor-cream-light underline underline-offset-4 transition-colors hover:text-letmor-gold-soft"
              >
                {footer.credit.name}
              </a>
            </p>
            <p className="mt-1 font-subtitle text-body text-letmor-cream-light/45">
              {footer.tagline}
            </p>
            <p className="mt-6 font-subtitle text-body text-letmor-cream-light/45">
              {footer.builtWith}
            </p>
          </div>

          <nav className="flex gap-12 sm:gap-16">
            {footer.columns.map((column) => (
              <ul key={column[0].href} className="flex flex-col gap-3">
                {column.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-subtitle text-body text-letmor-cream-light/70 transition-colors hover:text-letmor-cream-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
