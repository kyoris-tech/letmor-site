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
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Avaliações", href: "/#avaliacoes" },
] as const;

export const navCta = { label: "Fale Conosco", href: "/#contato" } as const;

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
  link: { label: "conheça nossos serviços", href: "/#servicos" },
};

export interface PortfolioFilter {
  key: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  categories: string[];
  type: string;
  subtype: string;
  description: string;
  tags: string[];
  images: { src: string; alt: string }[];
}

const projectImages = (name: string, files: string[]) =>
  files.map((file, index) => ({
    src: `/images/portfolio/${file}`,
    alt: `${name} — imagem ${index + 1}`,
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
    { key: "design", label: "Design" },
    { key: "audiovisual", label: "Audiovisual" },
  ],
  projects: [
    {
      id: "honeybee",
      name: "Honeybee",
      categories: ["branding", "design"],
      type: "Branding",
      subtype: "Design",
      description:
        "Identidade e desdobramentos de marca para a Honeybee, do conceito às aplicações digitais.",
      tags: ["Identidade visual", "Design de conteúdo"],
      images: projectImages("Honeybee", [
        "branding/honeybee-1.jpg",
        "branding/honeybee-2.jpg",
        "branding/honeybee-3.jpg",
        "branding/honeybee-4.jpg",
        "design/honeybee-1.jpg",
      ]),
    },
    {
      id: "honeybee-audiovisual",
      name: "Honeybee Audiovisual",
      categories: ["audiovisual"],
      type: "Audiovisual",
      subtype: "Cobertura",
      description:
        "Registro audiovisual da Honeybee: cobertura de produção e bastidores em imagens.",
      tags: ["Cobertura", "Fotografia", "Edição"],
      images: projectImages("Honeybee Audiovisual", [
        ...Array.from(
          { length: 10 },
          (_, i) => `audiovisual/honeybee-${i + 1}.jpg`,
        ),
        ...Array.from(
          { length: 7 },
          (_, i) => `audiovisual/honeybee-projeto-${i + 1}.jpg`,
        ),
      ]),
    },
    {
      id: "letmor",
      name: "LetMor",
      categories: ["branding"],
      type: "Branding",
      subtype: "Identidade",
      description:
        "Construção da identidade da própria LetMor: marca, sistema visual e diretrizes verbais.",
      tags: ["Naming", "Identidade visual", "Diretrizes verbais"],
      images: projectImages("LetMor", [
        "branding/letmor-1.jpg",
        "branding/letmor-2.jpg",
      ]),
    },
    {
      id: "glauber",
      name: "Glauber Psicologia",
      categories: ["branding"],
      type: "Branding",
      subtype: "Clínica",
      description:
        "Identidade e materiais para a clínica de psicologia Glauber, unindo acolhimento e clareza.",
      tags: ["Identidade visual", "Material impresso"],
      images: projectImages("Glauber Psicologia", ["branding/glauber-1.jpg"]),
    },
    {
      id: "vertco",
      name: "Vertco",
      categories: ["branding"],
      type: "Branding",
      subtype: "Identidade",
      description:
        "Identidade visual e sistema de marca para a Vertco, com foco em consistência e escala.",
      tags: ["Identidade visual", "Sistema de marca"],
      images: projectImages("Vertco", [
        "branding/vertco-1.jpg",
        "branding/vertco-2.jpg",
        "branding/vertco-3.jpg",
      ]),
    },
    {
      id: "psi-amanda-lemos",
      name: "Psi Amanda Lemos",
      categories: ["design"],
      type: "Design",
      subtype: "Social",
      description:
        "Presença visual e conteúdo para a psicóloga Amanda Lemos nas redes sociais.",
      tags: ["Social media", "Design de conteúdo"],
      images: projectImages("Psi Amanda Lemos", [
        "design/psi-amanda-lemos-1.jpg",
        "design/psi-amanda-lemos-2.jpg",
      ]),
    },
    {
      id: "clube-das-multis",
      name: "Clube das Multis",
      categories: ["design"],
      type: "Design",
      subtype: "Social",
      description:
        "Linha visual e design de conteúdo para a comunidade Clube das Multis.",
      tags: ["Social media", "Direção de arte"],
      images: projectImages("Clube das Multis", [
        "design/clube-das-multis-1.jpg",
      ]),
    },
    {
      id: "clube-vinho",
      name: "Clube Vinho",
      categories: ["design"],
      type: "Design",
      subtype: "Rótulo",
      description:
        "Identidade e peças para o Clube Vinho, do conceito visual à comunicação.",
      tags: ["Identidade visual", "Design de conteúdo"],
      images: projectImages("Clube Vinho", ["design/clube-vinho-1.jpg"]),
    },
    {
      id: "psicogames",
      name: "Psicogames",
      categories: ["design"],
      type: "Design",
      subtype: "Campanha",
      description:
        "Campanha e peças de divulgação do Psicogames para alcançar o público certo.",
      tags: ["Campanha", "Design de conteúdo", "Direção de arte"],
      images: projectImages("Psicogames", [
        "design/psicogames-1.jpg",
        "design/psicogames-2.jpg",
        "design/psicogames-3.jpg",
      ]),
    },
    {
      id: "aniversario-amanda",
      name: "Aniversário Amanda",
      categories: ["audiovisual"],
      type: "Audiovisual",
      subtype: "Evento",
      description:
        "Registro audiovisual do aniversário da Amanda: cobertura completa do evento em imagens.",
      tags: ["Cobertura de evento", "Fotografia", "Edição"],
      images: projectImages(
        "Aniversário Amanda",
        Array.from({ length: 14 }, (_, i) => `audiovisual/aniversario-amanda-${i + 1}.jpg`),
      ),
    },
  ],
};

export const servicosHero: SectionCopy & {
  actions: { label: string; href: string }[];
  fronts: { number: string; label: string }[];
} = {
  id: "servicos-hero",
  eyebrow: "serviços",
  headline: [
    [{ text: "Três frentes," }],
    [{ text: "um mesmo" }],
    [{ text: "compromisso:", accent: true }],
    [{ text: "fazer sua" }],
    [{ text: "marca" }, { text: "crescer.", accent: true }],
  ],
  body: [
    "Soluções personalizadas para cada fase da sua empresa. Você escolhe o que precisa hoje e conta com a gente para apoiar os seus próximos passos.",
  ],
  actions: [
    { label: "Ver Portfólio", href: "/#portfolio" },
    { label: "Fale Conosco", href: "/#contato" },
  ],
  fronts: [
    { number: "01", label: "Branding" },
    { number: "02", label: "Social Media" },
    { number: "03", label: "Audiovisual" },
  ],
};

export interface ServiceOffer {
  name?: string;
  priceLabel?: string;
  price: string;
}

export interface ServiceOfferGroup {
  title: string;
  offers: ServiceOffer[];
}

export interface ServiceDetail {
  id: string;
  index: string;
  rail: string;
  name: string;
  nameLines?: HeadlineLine[];
  body: string[];
  deliverablesLabel: string;
  deliverables: string[];
  offers?: ServiceOffer[];
  offerGroups?: ServiceOfferGroup[];
  note?: string;
  platformsLabel?: string;
  platforms?: string[];
  background: "cream" | "light";
  cardTone: "cream" | "navy" | "gold";
  cardPosition: "middle" | "end";
  offerTone: "light" | "sand" | "navy";
  photo?: { src: string; alt: string };
}

export const servicosDetalhes: ServiceDetail[] = [
  {
    id: "social-media",
    index: "01",
    rail: "Conteúdo",
    name: "Social Media",
    photo: {
      src: "/images/portfolio/design/psi-amanda-lemos-1.jpg",
      alt: "Social media — LetMor",
    },
    body: [
      "Cuidamos da presença digital da sua marca de forma estratégica, transformando suas redes sociais em canais de relacionamento, posicionamento e geração de resultados.",
      "Planejamos, criamos, publicamos e acompanhamos cada etapa para garantir um crescimento consistente e alinhado aos seus objetivos.",
    ],
    deliverablesLabel: "O que entregamos",
    deliverables: [
      "Estratégia e posicionamento de marca",
      "Planejamento e calendário editorial",
      "Criação de artes e conteúdos",
      "Gerenciamento das redes sociais",
      "Monitoramento de métricas e otimização de performance",
      "Relatórios de desempenho",
      "Reuniões mensais com análise de resultados e definição de novas estratégias",
    ],
    platformsLabel: "Plataformas",
    platforms: ["LinkedIn", "Instagram", "Facebook", "TikTok", "Threads"],
    offers: [{ priceLabel: "A partir de", price: "R$ 1.900,00" }],
    background: "cream",
    cardTone: "cream",
    cardPosition: "middle",
    offerTone: "light",
  },
  {
    id: "branding",
    index: "02",
    rail: "Marca",
    name: "Branding",
    photo: {
      src: "/images/portfolio/branding/vertco-1.jpg",
      alt: "Branding — LetMor",
    },
    body: [
      "Construímos identidades visuais que traduzem a essência da sua marca, fortalecem seu posicionamento e criam uma comunicação consistente em todos os pontos de contato com o público.",
      "Do conceito à aplicação, desenvolvemos uma identidade profissional que transmite credibilidade, diferencia sua empresa no mercado e gera reconhecimento.",
    ],
    deliverablesLabel: "O que entregamos",
    deliverables: [
      "Logotipo com duas variações de cores",
      "Identidade visual completa",
      "Paleta de cores e tipografia",
      "Aplicações da marca",
      "Manual de identidade visual",
      "Análise estratégica de perfil para redes sociais",
      "Bio otimizada e sugestões de melhorias",
      "Organização de destaques e capas",
    ],
    offers: [
      { name: "Logotipo", priceLabel: "A partir de", price: "R$ 1.200,00" },
      { name: "Identidade Visual", priceLabel: "A partir de", price: "R$ 2.000,00" },
      { name: "Análise de Perfil", priceLabel: "A partir de", price: "R$ 450,00" },
    ],
    background: "light",
    cardTone: "navy",
    cardPosition: "end",
    offerTone: "sand",
  },
  {
    id: "design",
    index: "03",
    rail: "Gráfico",
    name: "Design",
    photo: {
      src: "/images/portfolio/design/psicogames-1.jpg",
      alt: "Design gráfico — LetMor",
    },
    body: [
      "Criamos materiais gráficos que fortalecem a identidade da sua marca e garantem uma comunicação profissional, tanto no ambiente digital quanto no impresso.",
      "Desenvolvemos peças personalizadas com foco em qualidade, impacto visual e alinhamento à identidade da sua empresa.",
    ],
    deliverablesLabel: "O que entregamos",
    deliverables: [
      "Cartões de visita personalizados",
      "Folhetos e materiais promocionais",
      "Artes para redes sociais e campanhas",
      "Artes avulsas para impressão ou digital",
      "Peças animadas para divulgação",
      "Arquivos prontos para impressão e publicação",
    ],
    offerGroups: [
      {
        title: "Papelaria",
        offers: [
          { name: "Cartão de visita", priceLabel: "A partir de", price: "R$ 300,00" },
          { name: "Folheto simples", priceLabel: "A partir de", price: "R$ 400,00" },
        ],
      },
      {
        title: "Design avulso",
        offers: [
          { name: "Arte avulsa", priceLabel: "A partir de", price: "R$ 80,00" },
          { name: "Arte avulsa animada", priceLabel: "A partir de", price: "R$ 100,00" },
        ],
      },
    ],
    note: "Cartão de visita: 1000 unidades. Folheto simples: 100 unidades. Frete por conta do cliente.",
    background: "cream",
    cardTone: "cream",
    cardPosition: "middle",
    offerTone: "navy",
  },
  {
    id: "audiovisual",
    index: "04",
    rail: "Vídeo",
    name: "Audiovisual",
    photo: {
      src: "/images/portfolio/audiovisual/honeybee-projeto-2.jpg",
      alt: "Audiovisual — LetMor",
    },
    body: [
      "Transformamos momentos e ideias em conteúdos que aproximam sua marca do público. Produzimos vídeos dinâmicos e autênticos para fortalecer sua presença digital, destacar seus eventos e gerar mais engajamento nas redes sociais.",
      "Da captação à edição, entregamos materiais prontos para publicação, permitindo que você foque no crescimento do seu negócio.",
    ],
    deliverablesLabel: "O que entregamos",
    deliverables: [
      "Cobertura de eventos",
      "Captação de conteúdo para redes sociais",
      "Produção de vídeos institucionais e promocionais",
      "Edição profissional com trilha sonora, filtros e identidade visual",
      "Vídeos de melhores momentos (highlights)",
      "Conteúdo otimizado para Instagram, TikTok, LinkedIn e outras plataformas",
    ],
    offerGroups: [
      {
        title: "Storymaker",
        offers: [
          { name: "4 horas", priceLabel: "A partir de", price: "R$ 800,00" },
          { name: "6 horas", priceLabel: "A partir de", price: "R$ 1.800,00" },
          { name: "8 horas", priceLabel: "A partir de", price: "R$ 2.800,00" },
        ],
      },
      {
        title: "Captação de conteúdo",
        offers: [
          { name: "Até 3 horas", priceLabel: "A partir de", price: "R$ 600,00" },
          { name: "Hora adicional", price: "R$ 100,00/hora" },
        ],
      },
    ],
    note: "Todo o material é entregue editado, com música, tratamento de imagem e identidade visual, pronto para publicação.",
    background: "light",
    cardTone: "gold",
    cardPosition: "end",
    offerTone: "sand",
  },
  {
    id: "estudo-mercadologico",
    index: "05",
    rail: "Mercado",
    name: "Estudo Mercadológico",
    nameLines: [[{ text: "Estudo" }], [{ text: "Mercadológico" }]],
    photo: {
      src: "/images/portfolio/design/clube-das-multis-1.jpg",
      alt: "Estudo mercadológico — LetMor",
    },
    body: [
      "Tomamos decisões com base em dados, não em suposições. Realizamos uma análise completa do mercado, da concorrência e do comportamento do público para identificar oportunidades e definir estratégias que impulsionem o crescimento da sua marca.",
      "Ao final do estudo, entregamos um relatório estratégico com insights práticos para orientar o posicionamento e as ações do seu negócio.",
    ],
    deliverablesLabel: "O que entregamos",
    deliverables: [
      "Análise de mercado",
      "Estudo da concorrência",
      "Identificação do público-alvo",
      "Mapeamento de tendências e oportunidades",
      "Estratégias de posicionamento",
      "Relatório completo com insights e recomendações",
    ],
    offers: [{ priceLabel: "A partir de", price: "R$ 2.000,00" }],
    background: "cream",
    cardTone: "cream",
    cardPosition: "middle",
    offerTone: "light",
  },
];

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
      image: "/images/portfolio/branding/vertco-2.jpg",
    },
    {
      id: "identidade-visual",
      name: "Identidade visual",
      description:
        "Sistema visual completo: logo, paleta, tipografia e aplicações prontas para escalar em qualquer canal.",
      image: "/images/portfolio/branding/honeybee-1.jpg",
    },
    {
      id: "social-media",
      name: "Social media",
      description:
        "Estratégia de conteúdo e linha visual para redes, do planejamento à produção dos posts.",
      image: "/images/portfolio/design/clube-vinho-1.jpg",
    },
    {
      id: "campanhas",
      name: "Campanhas",
      description:
        "Conceito criativo e key visual desdobrados em peças on e offline para lançar sua marca no momento certo.",
      image: "/images/portfolio/design/psicogames-3.jpg",
    },
    {
      id: "audiovisual",
      name: "Audiovisual",
      description:
        "Roteiro, direção e edição de vídeos que apresentam a marca ao público certo com ritmo e intenção.",
      image: "/images/portfolio/audiovisual/honeybee-3.jpg",
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
      { label: "Início", href: "/#inicio" },
      { label: "Portfólio", href: "/#portfolio" },
      { label: "Planos", href: "/#planos" },
      { label: "Contato", href: "/#contato" },
    ],
    [
      { label: "Sobre", href: "/#sobre" },
      { label: "Serviços", href: "/#servicos" },
      { label: "Avaliações", href: "/#avaliacoes" },
    ],
  ],
} as const;
