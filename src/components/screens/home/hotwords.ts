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

const projectImages = (name: string, folder: string, count: number) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/images/portfolio/${folder}/${String(index + 1).padStart(2, "0")}.jpg`,
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
    { key: "identidade-visual", label: "Identidade Visual" },
    { key: "design", label: "Design" },
    { key: "social-media", label: "Social Media" },
    { key: "fotografia", label: "Fotografia" },
    { key: "storymaker", label: "Storymaker" },
  ],
  projects: [
    {
      id: "honeybee-identidade",
      name: "Honeybee",
      categories: ["identidade-visual"],
      type: "Identidade Visual",
      subtype: "Eventos e recreação",
      description:
        "Identidade visual da Honeybee, empresa de eventos e recreação: logotipo, paleta e aplicações como a papelaria.",
      tags: ["Logotipo", "Identidade visual", "Papelaria"],
      images: projectImages("Honeybee", "identidade-visual/honeybee", 5),
    },
    {
      id: "psicogame",
      name: "Psicogame",
      categories: ["identidade-visual"],
      type: "Identidade Visual",
      subtype: "Psicologia",
      description:
        "Identidade visual do Psicogame, projeto do psicólogo André Whitaker, com logotipo em variações de cor e aplicações.",
      tags: ["Logotipo", "Identidade visual", "Aplicações"],
      images: projectImages("Psicogame", "identidade-visual/psicogame", 5),
    },
    {
      id: "vertco",
      name: "Vertco",
      categories: ["identidade-visual"],
      type: "Identidade Visual",
      subtype: "Sustentabilidade",
      description:
        "Identidade visual da Vertco, marca de sustentabilidade: logomarca, ícone e aplicações em papelaria e digital.",
      tags: ["Logomarca", "Identidade visual", "Papelaria"],
      images: projectImages("Vertco", "identidade-visual/vertco", 4),
    },
    {
      id: "clube-das-multis",
      name: "Clube das Multis",
      categories: ["design"],
      type: "Design",
      subtype: "Design digital",
      description:
        "Peças de design digital para o Clube das Multis, com linha visual própria para as redes sociais.",
      tags: ["Design digital", "Direção de arte"],
      images: projectImages("Clube das Multis", "design/clube-das-multis", 3),
    },
    {
      id: "psicologa-amanda-lemos",
      name: "Psicóloga Amanda Lemos",
      categories: ["design"],
      type: "Design",
      subtype: "Carrosséis",
      description:
        "Carrosséis e posts para a psicóloga Amanda Lemos, com conteúdo educativo e identidade própria.",
      tags: ["Carrossel", "Design de conteúdo"],
      images: projectImages("Psicóloga Amanda Lemos", "design/psicologa-amanda-lemos", 11),
    },
    {
      id: "psicologo-andre",
      name: "Psicólogo André",
      categories: ["design"],
      type: "Design",
      subtype: "Stories",
      description:
        "Modelos de stories para o psicólogo André Whitaker, em linguagem de jogo de cartas.",
      tags: ["Stories", "Design digital"],
      images: projectImages("Psicólogo André", "design/psicologo-andre", 3),
    },
    {
      id: "workshop-comunicacao-influente",
      name: "Workshop Comunicação Influente",
      categories: ["design"],
      type: "Design",
      subtype: "Posts",
      description:
        "Posts de divulgação do workshop Comunicação Influente.",
      tags: ["Posts", "Divulgação"],
      images: projectImages("Workshop Comunicação Influente", "design/workshop-comunicacao-influente", 2),
    },
    {
      id: "papelaria",
      name: "Papelaria",
      categories: ["design"],
      type: "Design",
      subtype: "Impressos",
      description:
        "Cartões de visita e folhetos personalizados, prontos para impressão.",
      tags: ["Cartão de visita", "Folheto", "Impressão"],
      images: projectImages("Papelaria", "design/papelaria", 5),
    },
    {
      id: "glauber-clinica",
      name: "Glauber Clínica",
      categories: ["social-media"],
      type: "Social Media",
      subtype: "Redes sociais",
      description:
        "Gestão de redes sociais da Glauber Clínica: linha visual e apresentação dos resultados do perfil.",
      tags: ["Social media", "Resultados"],
      images: projectImages("Glauber Clínica", "social-media/glauber-clinica", 3),
    },
    {
      id: "honeybee-social",
      name: "Honeybee",
      categories: ["social-media"],
      type: "Social Media",
      subtype: "Redes sociais",
      description:
        "Gestão de redes sociais da Honeybee: linha visual, engajamento e crescimento do perfil.",
      tags: ["Social media", "Engajamento"],
      images: projectImages("Honeybee", "social-media/honeybee", 2),
    },
    {
      id: "studio-jessica",
      name: "Studio Jéssica",
      categories: ["social-media"],
      type: "Social Media",
      subtype: "Redes sociais",
      description:
        "Gestão de redes sociais do Studio Jéssica: linha visual e crescimento de visitas ao perfil.",
      tags: ["Social media", "Crescimento"],
      images: projectImages("Studio Jéssica", "social-media/studio-jessica", 2),
    },
    {
      id: "blase",
      name: "Blasé",
      categories: ["fotografia"],
      type: "Fotografia",
      subtype: "Ensaio",
      description:
        "Ensaio fotográfico para a Blasé, com fotos editadas e prontas para publicação.",
      tags: ["Fotografia", "Ensaio", "Edição"],
      images: projectImages("Blasé", "fotografia/blase", 15),
    },
    {
      id: "honeybee-fotografia",
      name: "Honeybee",
      categories: ["fotografia"],
      type: "Fotografia",
      subtype: "Cobertura",
      description:
        "Registro fotográfico da Honeybee: bastidores e momentos da operação em imagens.",
      tags: ["Fotografia", "Cobertura", "Edição"],
      images: projectImages("Honeybee", "fotografia/honeybee", 10),
    },
    {
      id: "aniversario-amanda",
      name: "Aniversário Amanda",
      categories: ["storymaker"],
      type: "Storymaker",
      subtype: "Aniversário",
      description:
        "Storymaker do aniversário da Amanda: cobertura completa do evento, com material editado e pronto para publicar.",
      tags: ["Storymaker", "Cobertura de evento", "Edição"],
      images: projectImages("Aniversário Amanda", "storymaker/aniversario-amanda", 15),
    },
    {
      id: "aniversario-bruna",
      name: "Aniversário Bruna",
      categories: ["storymaker"],
      type: "Storymaker",
      subtype: "Aniversário",
      description:
        "Storymaker do aniversário da Bruna: cobertura do evento, com material editado e pronto para publicar.",
      tags: ["Storymaker", "Cobertura de evento", "Edição"],
      images: projectImages("Aniversário Bruna", "storymaker/aniversario-bruna", 10),
    },
    {
      id: "honeybee-storymaker",
      name: "Honeybee",
      categories: ["storymaker"],
      type: "Storymaker",
      subtype: "Eventos",
      description:
        "Storymaker dos eventos da Honeybee: captação, edição e entrega de conteúdo pronto para as redes.",
      tags: ["Storymaker", "Captação", "Edição"],
      images: projectImages("Honeybee", "storymaker/honeybee", 14),
    },
    {
      id: "nosco",
      name: "Nosco",
      categories: ["storymaker"],
      type: "Storymaker",
      subtype: "Restaurante",
      description:
        "Storymaker no restaurante Nosco: pratos, ambiente e pessoas em uma cobertura editada.",
      tags: ["Storymaker", "Gastronomia", "Edição"],
      images: projectImages("Nosco", "storymaker/nosco", 10),
    },
    {
      id: "panqueca-e-cia",
      name: "Panqueca e Cia",
      categories: ["storymaker"],
      type: "Storymaker",
      subtype: "Restaurante",
      description:
        "Storymaker na Panqueca e Cia: pratos, ambiente e clima do restaurante em uma cobertura editada.",
      tags: ["Storymaker", "Gastronomia", "Edição"],
      images: projectImages("Panqueca e Cia", "storymaker/panqueca-e-cia", 14),
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
      src: "/images/portfolio/social-media/glauber-clinica/01.jpg",
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
      src: "/images/portfolio/identidade-visual/psicogame/01.jpg",
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
      src: "/images/portfolio/design/psicologa-amanda-lemos/01.jpg",
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
      src: "/images/portfolio/storymaker/honeybee/01.jpg",
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
      src: "/images/portfolio/design/workshop-comunicacao-influente/01.jpg",
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
      image: "/images/portfolio/identidade-visual/vertco/01.jpg",
    },
    {
      id: "identidade-visual",
      name: "Identidade visual",
      description:
        "Sistema visual completo: logo, paleta, tipografia e aplicações prontas para escalar em qualquer canal.",
      image: "/images/portfolio/identidade-visual/honeybee/01.jpg",
    },
    {
      id: "social-media",
      name: "Social media",
      description:
        "Estratégia de conteúdo e linha visual para redes, do planejamento à produção dos posts.",
      image: "/images/portfolio/social-media/studio-jessica/01.jpg",
    },
    {
      id: "campanhas",
      name: "Campanhas",
      description:
        "Conceito criativo e key visual desdobrados em peças on e offline para lançar sua marca no momento certo.",
      image: "/images/portfolio/design/clube-das-multis/01.jpg",
    },
    {
      id: "audiovisual",
      name: "Audiovisual",
      description:
        "Roteiro, direção e edição de vídeos que apresentam a marca ao público certo com ritmo e intenção.",
      image: "/images/portfolio/storymaker/nosco/01.jpg",
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
        "Tivemos uma experiência realmente excelente com a equipe da LetMor. Desde o primeiro contato, fomos atendidos com muita atenção, profissionalismo e cuidado em entender exatamente o que nós buscávamos para a identidade da nossa empresa. O processo de criação da logo foi muito bem conduzido, e a Ingrid teve muita sensibilidade para captar a essência da marca e transformar isso em um design elegante, moderno e bem pensado. Além da parte criativa, o atendimento foi sempre muito próximo e disponível, e em todas as etapas sentimos um cuidado genuíno com o resultado final e com a nossa satisfação como cliente. Sem dúvida, foi uma experiência muito positiva, com muita qualidade no trabalho entregue e, por isso, recomendamos o trabalho da LetMor para quem procura um serviço criativo, profissional e feito com muita dedicação.",
      name: "Felipe Sartório",
      role: "VertCo",
      rating: 5,
    },
    {
      quote:
        "Estou extremamente satisfeita com o trabalho da agência LETMOR! Desde o primeiro contato, fui atendida com profissionalismo, atenção e muito cuidado com os detalhes. A equipe é criativa, ágil e sempre disposta a entender exatamente o que eu precisava. Elas conseguiram traduzir minhas ideias em estratégias eficazes, com resultados visíveis em pouco tempo. A LETMOR realmente se importa com o sucesso dos clientes e entrega um serviço de altíssimo nível. Recomendo de olhos fechados para quem busca uma parceria de confiança e resultados reais no marketing. Parabéns pelo excelente trabalho!",
      name: "Talita Rocha",
      role: "Honeybee Eventos e Recreação",
      rating: 5,
    },
    {
      quote:
        "Sou muito grata à equipe da Letmor, que com qualidade e profissionalismo elevaram a criação de conteúdo da minha clínica, trazendo a sofisticação e qualidade dos nossos serviços para o digital, além da campanha que realizaram conosco do workshop comunicação influente que nos posicionaram e performaram muito bem nas redes sociais. Indico de olhos fechados ❤️",
      name: "Edna Glauber",
      role: "Glauber Clínica",
      rating: 5,
    },
    {
      quote:
        "Alta qualidade em nossos brainstormings, entederam muito bem minha marca e personalidade.",
      name: "Herick Sena",
      role: "Chef de cozinha",
      rating: 5,
    },
    {
      quote:
        "Super recomendo a LetMor! Equipe criativa, atenciosa e comprometida com resultados. Meu negócio cresceu visivelmente com as estratégias deles!",
      name: "Naiara Pereira de Sousa",
      role: "Ótica Bline",
      rating: 5,
    },
  ],
  link: {
    label: "veja todas as avaliações no Google",
    href: "https://www.google.com/maps/place/LetMor+-+Ag%C3%AAncia+de+Marketing+e+Publicidade/@-23.6824124,-46.5952992,17z/data=!4m8!3m7!1s0x8cf11dd655b6650d:0xc5bb255bb9e9be96!8m2!3d-23.6824124!4d-46.5952992!9m1!1b1!16s%2Fg%2F11mdh0ct9k?hl=pt-BR",
  },
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
