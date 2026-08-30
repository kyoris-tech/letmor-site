import {
  Avaliacoes,
  Hero,
  Planos,
  Portfolio,
  Servicos,
  Sobre,
} from "@/components/screens/home";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Sobre />
      <Portfolio />
      <Servicos />
      <Planos />
      <Avaliacoes />
    </main>
  );
}
