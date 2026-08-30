export interface HeadlineSegment {
  text: string;
  accent?: boolean;
}

export type HeadlineLine = HeadlineSegment[];

export interface SectionCopy {
  id: string;
  eyebrow: string;
  headline: HeadlineLine[];
  body?: string[];
  link?: { label: string; href: string };
}

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
] as const;

export const navCta = { label: "Fale Conosco", href: "#contato" } as const;

export const hero: SectionCopy & {
  actions: { label: string; href: string }[];
} = {
  id: "inicio",
  eyebrow: "/início",
  headline: [
    [{ text: "A marca memorável" }],
    [{ text: "que você quer" }, { text: "ser", accent: true }],
    [{ text: "começa" }, { text: "aqui", accent: true }],
  ],
  body: [
    "Somos a LetMor, transformamos negócios com estratégias inteligentes e design que conecta.",
  ],
  actions: [
    { label: "Ver Portfólio", href: "#portfolio" },
    { label: "Fale Conosco", href: "#contato" },
  ],
};

export const sobre: SectionCopy & { steps: { number: string; label: string }[] } = {
  id: "sobre",
  eyebrow: "/sobre",
  headline: [
    [{ text: "Uma agência" }],
    [{ text: "feita por" }],
    [{ text: "gente que" }],
    [{ text: "ama", accent: true }, { text: "o que faz" }],
  ],
  body: [
    "A LetMor nasceu da crença de que cada negócio é único e que é exatamente essa personalidade que transforma marcas em referência.",
    "Sem fórmula pronta, sem mais do mesmo. Do briefing à entrega, com escuta estratégica, direção criativa e soluções pensadas para gerar conexão, relevância e crescimento.",
  ],
  steps: [
    { number: "01", label: "Escuta estratégica" },
    { number: "02", label: "Construção de Branding" },
    { number: "03", label: "Análise e evolução contínua" },
  ],
  link: { label: "conheça nossos serviços", href: "#servicos" },
};

export interface PortfolioFilter {
  key: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  subtype: string;
  description: string;
  tags: string[];
  images: { src: string; alt: string }[];
}

const projectImages = (name: string, order: number[]) =>
  order.map((n, i) => ({
    src: `/images/portfolio/ph-${n}.jpg`,
    alt: `${name} — imagem ${i + 1}`,
  }));

export const portfolio: SectionCopy & {
  filters: PortfolioFilter[];
  projects: Project[];
} = {
  id: "portfolio",
  eyebrow: "/portfólio",
  headline: [
    [{ text: "Trabalhos que" }],
    [{ text: "conversam", accent: true }],
    [{ text: "com o público certo." }],
  ],
  filters: [
    { key: "todos", label: "Todos" },
    { key: "branding", label: "Branding" },
    { key: "digital", label: "Digital" },
    { key: "campanha", label: "Campanha" },
    { key: "audiovisual", label: "Audiovisual" },
  ],
  projects: [
    {
      id: "projeto-1",
      name: "Nome do projeto",
      category: "branding",
      type: "Branding",
      subtype: "Identidade",
      description:
        "Texto descritivo do projeto: contexto da marca, desafio de posicionamento e como a LetMor conduziu do briefing à entrega.",
      tags: ["Naming", "Identidade visual", "Manual de marca"],
      images: projectImages("Nome do projeto", [1, 2, 3, 4]),
    },
    {
      id: "projeto-2",
      name: "Nome do projeto",
      category: "branding",
      type: "Branding",
      subtype: "Identidade",
      description:
        "Texto descritivo do projeto: contexto da marca, desafio de posicionamento e como a LetMor conduziu do briefing à entrega.",
      tags: ["Rebranding", "Direção de arte", "Diretrizes verbais"],
      images: projectImages("Nome do projeto", [2, 3, 1]),
    },
    {
      id: "projeto-3",
      name: "Nome do projeto",
      category: "digital",
      type: "Digital",
      subtype: "Social",
      description:
        "Texto descritivo do projeto: estratégia de conteúdo, linha visual para redes e evolução dos indicadores ao longo da parceria.",
      tags: ["Social media", "Conteúdo", "Design de posts"],
      images: projectImages("Nome do projeto", [3, 4, 2]),
    },
    {
      id: "projeto-4",
      name: "Nome do projeto",
      category: "campanha",
      type: "Campanha",
      subtype: "Lançamento",
      description:
        "Texto descritivo do projeto: conceito criativo, desdobramento em peças on e offline e resultados da campanha de lançamento.",
      tags: ["Conceito", "Key visual", "Mídia"],
      images: projectImages("Nome do projeto", [4, 1, 3, 2]),
    },
    {
      id: "projeto-5",
      name: "Nome do projeto",
      category: "audiovisual",
      type: "Audiovisual",
      subtype: "Vídeo",
      description:
        "Texto descritivo do projeto: roteiro, direção e edição de peças audiovisuais para apresentar a marca ao público certo.",
      tags: ["Roteiro", "Direção", "Edição"],
      images: projectImages("Nome do projeto", [1, 4, 3]),
    },
    {
      id: "projeto-6",
      name: "Nome do projeto",
      category: "branding",
      type: "Branding",
      subtype: "Identidade",
      description:
        "Texto descritivo do projeto: contexto da marca, desafio de posicionamento e como a LetMor conduziu do briefing à entrega.",
      tags: ["Naming", "Identidade visual", "Aplicações"],
      images: projectImages("Nome do projeto", [2, 1, 4]),
    },
  ],
  link: { label: "explore o portfólio completo", href: "/portfolio" },
};

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const servicos: SectionCopy & { services: Service[] } = {
  id: "servicos",
  eyebrow: "/serviços",
  headline: [[{ text: "O que" }, { text: "fazemos", accent: true }, { text: "por aqui" }]],
  body: [
    "Já temos o plano ideal para você. Conheça nossos serviços e encontre a solução certa para o momento da sua marca.",
  ],
  services: [
    {
      id: "branding",
      name: "Branding",
      description:
        "Naming, identidade visual, manual de marca e diretrizes verbais que ficam de pé.",
      image: "/images/services/sv-1.jpg",
    },
    {
      id: "identidade-visual",
      name: "Identidade visual",
      description:
        "Sistema visual completo: logo, paleta, tipografia e aplicações prontas para escalar em qualquer canal.",
      image: "/images/services/sv-2.jpg",
    },
    {
      id: "social-media",
      name: "Social media",
      description:
        "Estratégia de conteúdo e linha visual para redes, do planejamento à produção dos posts.",
      image: "/images/services/sv-3.jpg",
    },
    {
      id: "campanhas",
      name: "Campanhas",
      description:
        "Conceito criativo e key visual desdobrados em peças on e offline para lançar sua marca no momento certo.",
      image: "/images/services/sv-4.jpg",
    },
    {
      id: "audiovisual",
      name: "Audiovisual",
      description:
        "Roteiro, direção e edição de vídeos que apresentam a marca ao público certo com ritmo e intenção.",
      image: "/images/services/sv-5.jpg",
    },
  ],
};

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

export const planos: SectionCopy & { plans: Plan[] } = {
  id: "planos",
  eyebrow: "/planos",
  headline: [
    [{ text: "Três jeitos" }],
    [{ text: "de começar" }, { text: "juntos.", accent: true }],
  ],
  plans: [
    {
      name: "Social Start",
      tagline: "Para marcas começando",
      price: "R$ 1.000",
      period: "/mês",
      description:
        "Gestão completa de redes sociais com direção estratégica: posicionamento, calendário de conteúdo e peças no tom da marca, com otimização contínua por métricas.",
      features: [
        "Gestão de redes sociais",
        "Posicionamento da marca",
        "Criação de conteúdo",
        "Análise de métricas",
        "Relatório mensal no WhatsApp",
      ],
      cta: "Começar agora",
    },
    {
      name: "Social Estratégico",
      tagline: "Para marcas em crescimento",
      price: "R$ 1.900",
      period: "/mês",
      description:
        "Tudo do Start com uma camada de inteligência de mercado: estudo do setor, estratégia de conteúdo e reunião mensal para ler os dados e definir os próximos movimentos.",
      features: [
        "Tudo do Social Start",
        "Estudo de mercado",
        "Estratégia de conteúdo",
        "Reunião mensal de análise e direção",
      ],
      cta: "Começar agora",
      highlight: true,
      badge: "PLANO MAIS ESCOLHIDO",
    },
    {
      name: "Social Pro",
      tagline: "Para marcas escalando presença",
      price: "R$ 3.200",
      period: "/mês",
      description:
        "Tudo do Estratégico com captação de conteúdo inclusa e gestão de duas redes sociais, cada uma com estratégia própria.",
      features: [
        "Tudo do Social Estratégico",
        "Captação de conteúdo",
        "2 redes sociais com estratégias próprias",
      ],
      cta: "Começar agora",
    },
  ],
  link: { label: "explore nossos serviços e planos", href: "/servicos" },
};

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export const avaliacoes: SectionCopy & { testimonials: Testimonial[] } = {
  id: "avaliacoes",
  eyebrow: "/avaliações",
  headline: [
    [{ text: "Quem trabalha" }],
    [{ text: "com a gente," }, { text: "volta", accent: true }],
  ],
  testimonials: [
    {
      quote:
        "A LetMor não entrega arte — entrega visão. Em 6 meses dobramos o engajamento e mudamos o posicionamento.",
      name: "Mariana Cortês",
      role: "CEO · Empresa Fictícia",
      rating: 5,
    },
    {
      quote:
        "Apaixonei pela forma de pensar marca. É raro encontrar gente que une estratégia e estética sem perder a piada.",
      name: "Beatriz Hara",
      role: "Founder · Empresa Fictícia",
      rating: 5,
    },
    {
      quote:
        "Chegaram com perguntas melhores que as nossas respostas. O rebranding destravou o time comercial em poucas semanas.",
      name: "Rafael Nunes",
      role: "Head de Marketing · Empresa Fictícia",
      rating: 5,
    },
    {
      quote:
        "Processo redondo do começo ao fim. Entregas no prazo e uma marca que finalmente parece a gente.",
      name: "Carla Meireles",
      role: "Sócia · Empresa Fictícia",
      rating: 5,
    },
    {
      quote:
        "Investimento que se pagou rápido. A consistência visual elevou a percepção de valor do nosso produto.",
      name: "Tiago Prado",
      role: "Diretor de Produto · Empresa Fictícia",
      rating: 5,
    },
  ],
};

export const contato: SectionCopy & {
  direct: { label: string; title: string; cta: string };
  social: { label: string; title: string; links: { label: string; href: string }[] };
} = {
  id: "contato",
  eyebrow: "/contato",
  headline: [
    [{ text: "Pronto para" }],
    [{ text: "transformar a sua" }, { text: "marca", accent: true }, { text: "?" }],
  ],
  body: ["Entre em contato e nossa equipe responderá em breve."],
  direct: {
    label: "Contato direto",
    title: "Abertos para novos projetos, parcerias e oportunidades.",
    cta: "Falar no WhatsApp",
  },
  social: {
    label: "Redes Sociais",
    title:
      "Você também pode acompanhar nosso trabalho através das nossas redes sociais.",
    links: [
      { label: "Instagram", href: "https://instagram.com/agencialetmor" },
      { label: "LinkedIn", href: "https://linkedin.com/company/agencialetmor" },
    ],
  },
};

export const footer = {
  tagline: "Construindo experiências digitais com propósito.",
  credit: {
    prefix: "@2026 feito por",
    name: "Kyoris Tech",
    href: "https://kyoristech.com",
  },
  builtWith: "Desenvolvido com Next.js",
  columns: [
    [
      { label: "Início", href: "#inicio" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Planos", href: "#planos" },
      { label: "Contato", href: "#contato" },
    ],
    [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Avaliações", href: "#avaliacoes" },
    ],
  ],
} as const;
