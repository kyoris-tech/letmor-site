import type { Metadata } from "next";
import {
  ServicosHero,
  ServiceDetail,
  ResetHash,
} from "@/components/screens/servicos";
import { Contato } from "@/components/screens/home";
import { servicosDetalhes } from "@/components/screens/home/hotwords";

const SERVICOS_TITLE = "Serviços | LetMor";
const SERVICOS_DESCRIPTION =
  "Branding, social media, design gráfico, audiovisual e estudo mercadológico: soluções personalizadas para cada fase da sua marca, com valores transparentes.";

export const metadata: Metadata = {
  title: SERVICOS_TITLE,
  description: SERVICOS_DESCRIPTION,
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: SERVICOS_TITLE,
    description: SERVICOS_DESCRIPTION,
    url: "/servicos",
    siteName: "LetMor",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SERVICOS_TITLE,
    description: SERVICOS_DESCRIPTION,
  },
};

export default function ServicosPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ResetHash />
      <ServicosHero />
      {servicosDetalhes.map((detail) => (
        <ServiceDetail key={detail.id} detail={detail} />
      ))}
      <Contato />
    </main>
  );
}
