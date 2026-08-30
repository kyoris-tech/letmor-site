import type { Metadata } from "next";
import { Inter, Italiana, Scope_One } from "next/font/google";
import { Footer } from "@/components/composite/Footer";
import { Navbar } from "@/components/composite/Navbar";
import { WhatsAppButton } from "@/components/composite/WhatsAppButton";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const scopeOne = Scope_One({
  variable: "--font-scope-one",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agencialetmor.com";

const SITE_TITLE = "LetMor | Agência de branding e design que conecta";
const SITE_DESCRIPTION =
  "A LetMor é uma agência de branding e design. Transformamos negócios com estratégia inteligente, direção criativa e soluções pensadas para gerar conexão, relevância e crescimento.";

const SITE_KEYWORDS = [
  "agência letmor",
  "LetMor",
  "agência de branding",
  "agência de design",
  "branding",
  "identidade visual",
  "naming",
  "manual de marca",
  "direção criativa",
  "estratégia de marca",
  "posicionamento de marca",
  "design que conecta",
  "gestão de redes sociais",
  "social media estratégico",
  "rebranding",
  "agência criativa Brasil",
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Kyoris Tech" }],
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: "LetMor",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${italiana.variable} ${scopeOne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
