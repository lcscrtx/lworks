/*
  Conteúdo da página About.
  Experiências vindas do LinkedIn. `logo` é opcional (sem logo, aparece um quadrado cinza).
  Clientes: { name, logo } — sem `logo`, aparece um retângulo cinza.
*/
export const about = {
  photo: '/assets/lucas.png',
  caption: 'Lucas Cartaxo, 26 anos.',
  bio: [
    'Sou designer e Chief Design Officer na ShiftLabs, com mais de 8 anos de experiência entre branding e produtos digitais.',
    'Ao longo da minha trajetória, liderei projetos de design, participei da estruturação de áreas e atuei diretamente na concepção e evolução de produtos digitais — sempre conectando experiência, consistência e impacto real no negócio.',
    'Transito entre marca e produto: crio identidades visuais, desenho interfaces em UI/UX, cuido de social media e construo design systems, incluindo um que criei do zero. Também desenvolvo o front-end das minhas próprias interfaces, reduzindo a distância entre ideia e entrega.'
  ]
};

export const experience = [
  {
    company: 'ShiftLabs',
    role: 'Chief Design Officer',
    period: '2026 — atual',
    description: [
      'Lidero estratégia de design, produto e experiência com foco em resultado de negócio.',
      'Atuo conectando UX, dados e tecnologia para criar produtos escaláveis, claros e orientados à decisão — e, quando necessário, levo as ideias ao front-end para acelerar prototipação, validação e execução.'
    ]
  },
  {
    company: 'ShiftLabs',
    role: 'Head of Product Design',
    period: '2025 — 2026',
    description: [
      'Liderei a visão de design de ponta a ponta, garantindo que a experiência do usuário estivesse ligada aos objetivos de negócio e à viabilidade técnica.'
    ]
  },
  {
    company: 'WFBD — Wayne Formiga Brand Design',
    role: 'Diretor de arte sênior',
    period: '2024 — 2026',
    description: [
      'Branding e criação de identidades visuais que ajudam marcas a se conectar de forma única com seu público.',
      'Também atuei em projetos publicitários, desenvolvendo campanhas criativas e estratégias visuais.'
    ]
  },
  {
    company: 'Supbrokers',
    role: 'Cofundador',
    period: '2023 — 2025',
    description: [
      'Startup voltada para corretores e imobiliárias, com o propósito de facilitar e otimizar o trabalho dos profissionais do setor.',
      'Participamos de programas intensivos do Sebrae, que contribuíram significativamente para o avanço do projeto.'
    ]
  },
  {
    company: 'Cubo Tecnologia',
    role: 'Designer de produtos pleno',
    period: '2022 — 2024',
    description: [
      'Criei do zero o aplicativo Cidade Conectada, que aproxima prefeituras, órgãos municipais e cidadãos.',
      'Desenvolvi todo o design do produto, incluindo fluxos e interfaces, com foco em facilitar o acesso a serviços públicos.'
    ]
  },
  {
    company: 'hiselly — Inteligência Imobiliária',
    role: 'Diretor de arte pleno',
    period: '2021 — 2022',
    description: [
      'Branding de empreendimentos e lançamentos imobiliários, peças para redes sociais e tráfego pago, além de colaborações em projetos de UI e UX.'
    ]
  },
  {
    company: 'Obo Studio',
    role: 'Diretor de arte júnior',
    period: '2021',
    description: ['Campanhas publicitárias com foco em social media e estratégias online.']
  },
  {
    company: 'Zona Mídia e Marketing',
    role: 'Diretor de arte júnior',
    period: '2019 — 2020',
    description: ['Criação e execução de campanhas em uma agência especializada em marketing offline.']
  },
  {
    company: 'BRZ Digital',
    role: 'UI Designer (estágio)',
    period: '2018 — 2019',
    description: [
      'Início da trajetória no design: interfaces para sites e aplicativos, fluxos de navegação e design responsivo.'
    ]
  }
];

// Substitua pelos clientes reais: { name: 'Cliente', logo: '/clients/cliente.svg' }
export const clients = Array.from({ length: 12 }, (_, i) => ({ name: `Cliente ${i + 1}` }));
