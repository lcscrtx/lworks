/*
  Stories: artigos sobre projetos.

  Artigo:
    slug, title, kicker (legenda acima do título), date, readTime
    cover    → imagem do card na lista de Stories
    lead     → abertura do artigo (parágrafos)
    facts    → ficha técnica: [{ label, value }]
    blocks   → conteúdo, na ordem:
               { type: 'text', heading?, body: ['parágrafo'] }
               { type: 'desktop', src, alt, caption? }        → tela do painel
               { type: 'phones', items: [{ src, alt }], caption? } → telas do celular
               { type: 'screens', items: [{ src, alt, label? }], caption? } → telas do painel em grade de 2
               { type: 'quote', text }
    hero     → { desktop, desktopAlt, phone?, phoneAlt? }
    demo     → banner do fim: { label, title, text: [linhas], preview: { desktop, phone? } }
               com senha: { password, links: [{ label, hint, href }] }
               sem senha: { href, cta, note? }
*/

const M = '/stories/menux';
const T = '/stories/tessela';
const DESKTOP = 1440 / 900;
const PHONE = 390 / 844; // capturas na tela do iPhone 14 (3x)

export const articles = [
  {
    slug: 'menux',
    kicker: 'Produto digital',
    title: 'Menux: um cardápio que conversa, sem tirar o garçom da mesa',
    date: 'Outubro de 2026',
    readTime: '6 min de leitura',
    cover: `${M}/dash-categorias.webp`,
    // Versão navegável, atrás de uma senha simples (verificada no navegador, sem cadastro)
    demo: {
      label: 'Versão navegável',
      title: 'Abra o Menux e navegue você mesmo',
      text: ['Painel e cardápio funcionando,', 'com um restaurante fictício.'],
      password: '1234',
      preview: { desktop: `${M}/dash-produtos.webp`, phone: `${M}/app-prato.webp` },
      links: [
        { label: 'Painel do restaurante', hint: 'Melhor no computador', href: `${M}/demo/painel.html` },
        { label: 'Cardápio no celular', hint: 'Melhor no celular ou com a janela estreita', href: `${M}/demo/cardapio.html` }
      ]
    },
    hero: {
      desktop: `${M}/dash-categorias.webp`, desktopAlt: 'Painel do restaurante',
      phone: `${M}/app-inicio.webp`, phoneAlt: 'Cardápio no celular'
    },
    lead: [
      'O Menux é um cardápio digital com um assistente de IA, o Maestro. O cliente escaneia o QR Code da mesa, conversa sobre o que tem vontade de comer e recebe sugestões a partir do que a cozinha realmente serve. O dono do restaurante cuida de tudo isso por um painel feito para quem não tem tempo sobrando.',
      'Desenhei as duas pontas do produto: o painel do restaurante e a experiência no celular de quem está sentado à mesa. Este texto conta as decisões por trás delas.'
    ],
    facts: [
      { label: 'Produto', value: 'Menux · ShiftLabs' },
      { label: 'Ano', value: '2026' },
      { label: 'Papel', value: 'Product design, UI e front-end' },
      { label: 'Ferramentas', value: 'Figma e Claude' }
    ],
    blocks: [
      {
        type: 'text',
        heading: 'O ponto de partida',
        body: [
          'O Menux já tinha telas. O que faltava era um produto que parecesse um só, do primeiro clique do dono ao último prato escolhido pelo cliente.',
          'Redesenhei tudo do zero no Figma e levei cada tela para o código com o Claude, componente por componente. Nada foi reaproveitado de kit pronto: tipografia, ícones, estados vazios, mensagens de erro e o ritmo de cada tela foram pensados para este produto.'
        ]
      },
      {
        type: 'quote',
        text: 'A IA prepara o terreno. Quem fecha a experiência é o garçom.'
      },
      {
        type: 'text',
        heading: 'Um princípio antes de qualquer tela',
        body: [
          'Restaurante é feito de gente. Por isso o Maestro nunca promete substituir o garçom. Ele ajuda o cliente a decidir, explica um prato, sugere um vinho, e a escolha final vira um resumo para mostrar a quem atende a mesa.',
          'Esse princípio guiou decisões pequenas e grandes. O botão se chama “Escolhi este”, não “Comprar”. A tela de pedidos lembra que o pedido segue sendo feito com o garçom. Em dúvida sobre alergia, o Maestro manda falar com a equipe.'
        ]
      },
      {
        type: 'phones',
        items: [
          { src: `${M}/app-inicio.webp`, alt: 'Abertura do cardápio no celular, com capa, logo e prato em destaque' },
          { src: `${M}/app-maestro.webp`, alt: 'Conversa com o Maestro sugerindo vinhos' },
          { src: `${M}/app-pedido.webp`, alt: 'Resumo das escolhas para mostrar ao garçom' }
        ],
        caption: 'Abertura do cardápio, conversa com o Maestro e o resumo que o cliente mostra ao garçom.'
      },
      {
        type: 'text',
        heading: 'Dois públicos, duas cabeças',
        body: [
          'O mesmo cardápio é lido por duas pessoas muito diferentes. O dono abre o painel entre um fornecedor e outro, no computador do caixa. O cliente abre o cardápio com fome, com o celular numa mão e o copo na outra.',
          'Para o dono, a pergunta é sempre “o que eu preciso fazer agora?”. Cada área do painel abre com poucos números, cada um com uma explicação curta, e uma fila chamada “Precisa de você” reúne o que está incompleto: prato sem foto, alergênico não informado, item que ainda não foi publicado.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-produtos.webp`,
        alt: 'Painel de produtos com indicadores e lista de pratos',
        caption: 'Produtos: indicadores no topo, o que precisa de atenção logo abaixo, a lista completa depois.'
      },
      {
        type: 'text',
        body: [
          'Editar um prato não tira o dono da lista. O formulário abre numa gaveta lateral, mostra a foto como o cliente vai ver e organiza o resto em blocos: como aparece no cardápio, destaques, opções e alergênicos.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-produto.webp`,
        alt: 'Gaveta de edição de um prato com foto, preço e alergênicos',
        caption: 'Edição de prato em gaveta lateral, sem perder o contexto da lista.'
      },
      {
        type: 'text',
        heading: 'Vinho e pizza não cabem num formulário comum',
        body: [
          'Os dois itens mais difíceis de um cardápio italiano ganharam fluxos próprios. Um vinho tem taça e garrafa com preços diferentes, uvas, safra, região, perfil sensorial e harmonização. Uma pizza tem tamanho, massa, borda, adicionais e meio a meio, e cada combinação muda o preço.',
          'No painel, o vinho tem uma ficha dedicada e a pizza tem uma configuração geral da casa, que vale para todos os sabores. No celular, a pizza é montada passo a passo, com o Maestro acompanhando, e a ficha do vinho mostra o perfil em escalas simples de ler: corpo, tanino, doçura e acidez.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-vinho.webp`,
        alt: 'Ficha do vinho no painel com uvas, safra e perfil sensorial',
        caption: 'Ficha do vinho no painel.'
      },
      {
        type: 'phones',
        items: [
          { src: `${M}/app-vinhos.webp`, alt: 'Carta de vinhos no celular com filtros por tipo' },
          { src: `${M}/app-vinho.webp`, alt: 'Ficha de um vinho com preço de taça e garrafa' },
          { src: `${M}/app-pizza.webp`, alt: 'Montagem de pizza por tamanho e meio a meio' }
        ],
        caption: 'Carta de vinhos, ficha do rótulo e montagem da pizza no celular.'
      },
      {
        type: 'desktop',
        src: `${M}/dash-pizzas-config.webp`,
        alt: 'Configuração geral de pizzas com tamanhos, massas e bordas',
        caption: 'Tamanhos, massas, bordas e meio a meio configurados uma vez para todas as pizzas.'
      },
      {
        type: 'text',
        heading: 'Honestidade nos dados',
        body: [
          'Um detalhe que parece pequeno mudou bastante coisa: um prato sem alergênico marcado não significa que ele não tem alergênico. Pode só significar que ninguém informou. O produto trata “não contém” e “não informado” como coisas diferentes, do formulário do dono até o filtro de restrições do cliente.',
          'O mesmo cuidado aparece na lista de clientes. Quando a base ainda é pequena, o painel avisa que a leitura é indicativa, em vez de apresentar um padrão que os números não sustentam.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-cliente.webp`,
        alt: 'Raio-X de uma cliente com próxima melhor ação e restrições',
        caption: 'Raio-X da cliente: histórico, próxima melhor ação e o que evitar à mesa.'
      },
      {
        type: 'text',
        heading: 'Um cardápio que respira',
        body: [
          'No celular, o cardápio abre com a cara da casa: capa, logo, uma frase sobre o restaurante e os pratos em destaque. Depois vêm as categorias e, dentro delas, subcategorias com ícones próprios, para que uma carta grande continue fácil de percorrer com o polegar.',
          'Cada prato tem uma ficha com foto grande, descrição, preço e um aviso de restrição alimentar logo abaixo. O coração salva o prato nos favoritos; “Escolhi este” leva para o resumo da mesa.'
        ]
      },
      {
        type: 'phones',
        items: [
          { src: `${M}/app-lista.webp`, alt: 'Lista de massas frescas com subcategorias' },
          { src: `${M}/app-prato.webp`, alt: 'Ficha de um prato com foto, descrição e preço' },
          { src: `${M}/app-perfil.webp`, alt: 'Perfil do cliente com preferências e restrições' }
        ],
        caption: 'Lista com subcategorias, ficha do prato e o perfil de quem está à mesa.'
      },
      {
        type: 'text',
        heading: 'Uma direção de arte para as fotos',
        body: [
          'Foto de cardápio costuma ser o ponto mais irregular de um restaurante: cada prato com uma luz, um fundo e um ângulo. Para a demonstração do produto, criei um guia único de direção de arte (a mesma mesa de carvalho, a mesma luz lateral, a mesma louça e o mesmo enquadramento) e gerei todas as fotos com IA a partir dele.',
          'O resultado é um cardápio que parece fotografado no mesmo dia, pelo mesmo fotógrafo. E mostra ao restaurante o quanto a consistência visual pesa na hora de escolher.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-categorias.webp`,
        alt: 'Categorias do cardápio com subcategorias e fotos padronizadas',
        caption: 'Categorias e subcategorias no painel, com as fotos seguindo o mesmo guia visual.'
      },
      {
        type: 'text',
        heading: 'Do Figma ao código',
        body: [
          'Projetar e construir na mesma cabeça encurta o caminho. Cada decisão tomada no Figma foi testada em código de verdade com o Claude, em telas que funcionam, navegam e respondem como o produto final.',
          'Isso permitiu validar fluxos inteiros (cadastro de um vinho, montagem de uma pizza, uma conversa com o Maestro) antes de qualquer discussão sobre detalhe visual. E fez do design uma parte da construção, não uma etapa anterior a ela.'
        ]
      }
    ]
  },
  {
    slug: 'tessela',
    kicker: 'Design system',
    title: 'Tessela: peça por peça, o painel inteiro',
    date: 'Outubro de 2026',
    readTime: '5 min de leitura',
    cover: `${T}/ts-dashboard-menux.webp`,
    demo: {
      label: 'Catálogo ao vivo',
      title: 'Explore o Tessela por dentro',
      text: ['Componentes, modelos de tela e marcas,', 'com o código de verdade rodando.'],
      href: '/tessela',
      cta: 'Abrir o catálogo',
      note: 'Abre em outra aba',
      preview: { desktop: `${T}/ts-modelos.webp` }
    },
    hero: { desktop: `${T}/ts-inicio.webp`, desktopAlt: 'Página inicial do catálogo do Tessela' },
    lead: [
      'O Tessela Web é o design system dos painéis e backoffices da ShiftLabs. São mais de 50 componentes React, acessíveis e em português, com tokens que viram a marca de cada produto: o mesmo código veste o Menux, o Contto e o Cortex.',
      'Construí do zero, da escala de cinza à publicação no npm. Este texto conta as decisões que fazem ele funcionar em produtos tão diferentes.'
    ],
    facts: [
      { label: 'Produto', value: 'Tessela Web · ShiftLabs' },
      { label: 'Ano', value: '2026' },
      { label: 'Papel', value: 'Design system, UI e front-end' },
      { label: 'Ferramentas', value: 'Figma e Claude' }
    ],
    blocks: [
      {
        type: 'text',
        heading: 'Por que um design system',
        body: [
          'A ShiftLabs tem vários produtos, e quase todos têm um painel por trás: cardápio, atendimento, finanças. Sem uma base comum, cada painel reinventaria a mesma tabela, o mesmo seletor de datas e a mesma barra lateral, com pequenas diferenças que quem usa sente e ninguém documenta.',
          'O Tessela nasceu com uma regra simples. Quando uma tela precisa de algo que não existe, a peça nasce no design system, com teste e página no catálogo, e só depois chega ao produto.'
        ]
      },
      { type: 'quote', text: 'Os produtos se adaptam ao Tessela, nunca o contrário.' },
      {
        type: 'text',
        heading: 'Uma estrutura, várias marcas',
        body: [
          'A estrutura dos componentes é fixa. O que muda de um produto para outro são os tokens de marca: cor, família tipográfica, pesos, raio e borda. Cada produto ganha o seu pacote, como o @tessela/menux, e trocar a marca troca o painel inteiro sem tocar em um componente.',
          'Isso permite que um produto novo comece com um painel completo no primeiro dia, já com a cara dele.'
        ]
      },
      {
        type: 'screens',
        items: [
          { src: `${T}/ts-dashboard.webp`, alt: 'Modelo de painel na marca Padrão', label: 'Padrão' },
          { src: `${T}/ts-dashboard-menux.webp`, alt: 'Modelo de painel na marca Menux', label: 'Menux' },
          { src: `${T}/ts-dashboard-contto.webp`, alt: 'Modelo de painel na marca Contto', label: 'Contto' },
          { src: `${T}/ts-dashboard-cortex.webp`, alt: 'Modelo de painel na marca Cortex', label: 'Cortex' }
        ],
        caption: 'O mesmo modelo de painel em quatro marcas. Só os tokens mudam.'
      },
      {
        type: 'text',
        heading: 'Neutro por padrão',
        body: [
          'O tema padrão é monocromático: preto no claro, branco no escuro. A cor aparece só para dizer alguma coisa, como erro, sucesso, aviso ou informação. Assim a marca de cada produto entra por cima de uma base que não compete com ela.',
          'Claro e escuro existem desde o primeiro componente, assim como duas densidades, confortável e compacta. Deixar isso para depois custaria refazer tudo.'
        ]
      },
      {
        type: 'desktop',
        src: `${T}/ts-dashboard-escuro.webp`,
        alt: 'Modelo de painel no tema escuro',
        caption: 'O mesmo painel no tema escuro, sem nenhuma cor escrita à mão.'
      },
      {
        type: 'text',
        heading: 'Só tokens',
        body: [
          'Toda cor, raio, borda, espaço e texto vem de um token. Nenhum componente tem cor literal ou número fora da escala: um valor novo entra primeiro no arquivo de tokens e só então vai para o código. Os pares de cor passam por uma verificação de contraste automática.',
          'Quando uma decisão fugiu da regra, como a borda mais clara dos campos em repouso, ela ficou escrita com o motivo e com o caminho para voltar atrás.'
        ]
      },
      {
        type: 'screens',
        items: [
          { src: `${T}/ts-fundacao.webp`, alt: 'Página de fundação com escalas e tokens', label: 'Fundação' },
          { src: `${T}/ts-cores.webp`, alt: 'Página de cores com as escalas de cada tom', label: 'Cores' }
        ],
        caption: 'Fundação e cores: as escalas de onde sai todo valor do sistema.'
      },
      {
        type: 'text',
        heading: 'Acessível e em português',
        body: [
          'Por baixo, o Base UI cuida da mecânica de interação: teclado, foco, ARIA e posicionamento. O visual, a anatomia e a API são do Tessela, e o produto nunca importa o Base UI direto.',
          'Os textos já vêm em português e podem ser trocados; inglês e espanhol estão no dicionário. Datas, números e moeda seguem a localidade. Com ponteiro grosso, todo alvo de toque chega a 44 px.'
        ]
      },
      {
        type: 'desktop',
        src: `${T}/ts-button.webp`,
        alt: 'Página do componente Button com variações e estados',
        caption: 'Cada componente tem a sua página, com variações, estados e o código.'
      },
      {
        type: 'text',
        heading: 'O catálogo é o código',
        body: [
          'O catálogo não é uma recriação dos componentes: ele renderiza o código real. Cada peça só era dada como pronta depois de revisada ali, no navegador, nos dois temas e nas duas densidades.',
          'Além dos componentes, o catálogo traz 15 modelos de tela de admin, como lista, detalhe, formulário e configurações. Cada um pode ser copiado para o projeto com um comando e vira ponto de partida.'
        ]
      },
      {
        type: 'screens',
        items: [
          { src: `${T}/ts-lista.webp`, alt: 'Modelo de lista de pedidos', label: 'Lista' },
          { src: `${T}/ts-detalhe.webp`, alt: 'Modelo de detalhe de pedido', label: 'Detalhe' },
          { src: `${T}/ts-formulario.webp`, alt: 'Modelo de formulário de produto', label: 'Formulário' },
          { src: `${T}/ts-configuracoes.webp`, alt: 'Modelo de configurações', label: 'Configurações' }
        ],
        caption: 'Alguns dos 15 modelos de tela, montados só com peças do Tessela.'
      },
      {
        type: 'desktop',
        src: `${T}/ts-graficos.webp`,
        alt: 'Página de gráficos do catálogo',
        caption: 'Gráficos com a mesma linguagem do resto, e os dados também em tabela para quem não enxerga a curva.'
      },
      {
        type: 'text',
        heading: 'Do código ao npm',
        body: [
          'A primeira versão foi publicada no npm em 25 de setembro. Em cinco dias o sistema chegou à 2.3.0, puxado pelo uso real: o painel do Menux migrou para o Tessela, e cada lacuna encontrada nessa migração virou uma peça nova ou uma propriedade nova aqui, nunca um ajuste local no produto.',
          'Construí com o Claude, e durante a construção os tokens do repositório viraram a fonte da verdade: a aprovação acontecia no catálogo, com o componente funcionando, e não numa imagem estática. O Figma passa a ser reconstruído a partir deles.'
        ]
      },
      {
        type: 'desktop',
        src: `${M}/dash-produtos.webp`,
        alt: 'Painel de produtos do Menux construído com o Tessela',
        caption: 'O painel do Menux, construído com o Tessela na marca Menux.'
      }
    ]
  }
];

export const RATIOS = { DESKTOP, PHONE };
