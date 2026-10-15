/*
  Projetos por categoria.

  Categoria:
    id       → endereço da página (/projects/brandings)
    label    → título da página e item do menu Projects
    singular → legenda cinza acima do nome de cada projeto
    layout   → 'clients' agrupa por cliente (Social Media); sem layout = grade masonry

  Projeto (item):
    title    → nome do projeto
    slug     → endereço da página do projeto (/projects/brandings/toaqui)
    src      → imagem de capa (a proporção é lida automaticamente)
    ratio    → só para o placeholder cinza, quando ainda não há imagem
    client, year, tools → ficha técnica
    credits  → créditos: [{ role, name }] → aparece como "Direção de Arte, Lucas Cartaxo"
    link     → link externo: { label, url } (ex.: Behance, site no ar)
    intro    → texto do topo (array de parágrafos; '\n' quebra a linha)
    blocks   → conteúdo, na ordem:
               { type: 'images', items: [{ src }, { src }] }  (galeria de 2 colunas)
               { src, full: true } → imagem ocupando a largura inteira
               { video: '/x.mp4', src: '/poster.jpg' } → vídeo em loop no lugar da imagem
               { type: 'text', body: ['parágrafo', 'parágrafo'] }
*/

// Conteúdo de exemplo (Figma) — substitua pelos projetos reais
const placeholderImages = (n) => ({ type: 'images', items: Array.from({ length: n }, () => ({ ratio: 466 / 582 })) });

const SAMPLE_CASE = {
  client: 'TôAqui',
  year: '2025',
  tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects'],
  link: { label: 'Ver no Behance', url: 'https://www.behance.net/' },
  intro: [
    'Nosso novo trabalho para o TôAqui parte de uma ideia simples: estar presente. Mas presença, aqui, não é geográfica. É emocional, social e digital.',
    'O símbolo nasceu de um ícone de localização — o mesmo que todos nós aprendemos a reconhecer como “estou aqui”. Mas esse ponto foi recortado, moldado e transformado até se tornar um balão de conversa. Porque o TôAqui não quer apenas mostrar onde você está — quer abrir espaço para interações, respostas, movimentos.',
    'Criamos uma identidade que dissolve a fronteira entre mapa e mensagem, entre o que é estático e o que é vivo. Um sistema visual leve, flexível e direto, que acompanha o ritmo de quem usa — e se adapta sem ruídos ao digital.',
    'No fim, o design só precisava fazer uma coisa: sair do caminho. Porque quando a marca entende seu papel, tudo flui.\nE o TôAqui está exatamente onde precisa estar.'
  ],
  blocks: [
    placeholderImages(4),
    {
      type: 'text',
      body: [
        'Nosso novo trabalho para o TôAqui parte de uma ideia simples: estar presente. Mas presença, aqui, não é geográfica. É emocional, social e digital.',
        'O símbolo nasceu de um ícone de localização — o mesmo que todos nós aprendemos a reconhecer como “estou aqui”. Mas esse ponto foi recortado, moldado e transformado até se tornar um balão de conversa. Porque o TôAqui não quer apenas mostrar onde você está — quer abrir espaço para interações, respostas, movimentos.'
      ]
    },
    placeholderImages(4)
  ]
};

// Exemplo de site (Figma: Development) — uma imagem/vídeo grande em largura total.
// Para vídeo: { video: '/works/site/demo.mp4', src: '/works/site/poster.jpg', full: true }
const SAMPLE_SITE = {
  client: 'TôAqui',
  year: '2025',
  tools: ['Linguagem', 'Claude'],
  link: { label: 'Ver site', url: 'https://example.com/' },
  intro: SAMPLE_CASE.intro,
  blocks: [{ type: 'images', items: [{ ratio: 952 / 615, full: true }] }]
};

// Exemplo de UI/UX (Figma: UI/UX Design) — telas empilhadas em largura total
const SAMPLE_UI = {
  ...SAMPLE_SITE,
  blocks: [{ type: 'images', items: Array.from({ length: 4 }, () => ({ ratio: 952 / 536, full: true })) }]
};

export const categories = [
  {
    id: 'brandings',
    label: 'Brandings',
    singular: 'Branding',
    items: [
      { title: 'Nome do Branding 01', slug: 'branding-01', ratio: 304 / 380, ...SAMPLE_CASE },
      { title: 'Nome do Branding 02', slug: 'branding-02', ratio: 304 / 214, ...SAMPLE_CASE },
      { title: 'Nome do Branding 03', slug: 'branding-03', ratio: 1, ...SAMPLE_CASE },
      { title: 'Nome do Branding 04', slug: 'branding-04', ratio: 304 / 380, ...SAMPLE_CASE },
      { title: 'Nome do Branding 05', slug: 'branding-05', ratio: 304 / 380, ...SAMPLE_CASE },
      { title: 'Nome do Branding 06', slug: 'branding-06', ratio: 1, ...SAMPLE_CASE },
      { title: 'Nome do Branding 07', slug: 'branding-07', ratio: 304 / 214, ...SAMPLE_CASE }
    ]
  },
  {
    id: 'development',
    label: 'Development',
    singular: 'Development',
    items: [
      { title: 'Cliente do Site 01', slug: 'site-01', ratio: 304 / 214, ...SAMPLE_SITE },
      { title: 'Cliente do Site 02', slug: 'site-02', ratio: 304 / 214, ...SAMPLE_SITE },
      { title: 'Cliente do Site 03', slug: 'site-03', ratio: 304 / 214, ...SAMPLE_SITE }
    ]
  },
  {
    id: 'social-media',
    label: 'Social Media',
    singular: 'Social Media',
    // Layout por cliente: cada item é um cliente com seus posts (grade 2×2)
    // Post: { src: '/works/social/cliente/post-1.jpg' } ou { video, src } — proporção lida da imagem
    layout: 'clients',
    caption: 'Cliente',
    items: Array.from({ length: 7 }, (_, i) => ({
      title: `Nome do Cliente ${String(i + 1).padStart(2, '0')}`,
      ratio: 4 / 5,
      posts: Array.from({ length: 4 }, () => ({ ratio: 223 / 278 }))
    }))
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    singular: 'UI/UX Design',
    items: [
      { title: 'Cliente do Projeto 01', slug: 'projeto-01', ratio: 304 / 214, ...SAMPLE_UI },
      { title: 'Cliente do Projeto 02', slug: 'projeto-02', ratio: 304 / 214, ...SAMPLE_UI },
      { title: 'Cliente do Projeto 03', slug: 'projeto-03', ratio: 304 / 214, ...SAMPLE_UI }
    ]
  },
  {
    // Trabalhos em andamento, sem página interna: o card abre as imagens em tela cheia.
    // Item: { title, types: ['Branding', 'UI/UX Design'], posts: [{ src } | { video }] }
    id: 'wip',
    label: 'WIP',
    title: 'Work in Progress',
    singular: 'WIP',
    tagged: true,
    layout: 'gallery',
    items: []
  }
];

// Tipos que um WIP pode ter (checkboxes no painel)
export const WIP_TYPES = ['Branding', 'Development', 'Social Media', 'UI/UX Design'];

// Legenda cinza de um item: "WIP · Branding, UI/UX Design" ou o nome da categoria
export const captionOf = (category, item) =>
  category.tagged && item.types?.length ? `${category.singular} · ${item.types.join(', ')}` : category.singular;
