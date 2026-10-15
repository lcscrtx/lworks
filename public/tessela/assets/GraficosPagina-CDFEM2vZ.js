import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r}from"./Codigo-Dgz1In5l.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./Graficos-R7SVMNYj.js";import{s as u}from"./tiptap-jvs8iIPE.js";import{i as d,n as f,t as p}from"./Tabs-C69_giCo.js";import{a as m}from"./Estrutura-Bg5zrcqs.js";import{_ as h,b as g,f as _,g as v,h as y,p as b,y as x}from"./index-3SU4ioj-.js";var S=e(t(),1),C=u();function w({itens:e}){return(0,C.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,C.jsx)(`li`,{children:e},t))})}var T=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`,maximumFractionDigits:0}),E=e=>T.format(e),D=new Date,O=Array.from({length:90},(e,t)=>{let n=new Date(D.getFullYear(),D.getMonth(),D.getDate()-89+t),r=n.getDay()===5||n.getDay()===6?1.35:1,i=3200+t*18+Math.sin(t/3)*420;return{dia:`${String(n.getDate()).padStart(2,`0`)}/${String(n.getMonth()+1).padStart(2,`0`)}`,atual:Math.round(i*r),anterior:Math.round((i*.86+Math.cos(t/4)*300)*r),pedidos:Math.round(i*r/118)}}),k=[`jan`,`fev`,`mar`,`abr`,`mai`,`jun`,`jul`,`ago`,`set`].map((e,t)=>({mes:e,site:18e3+t*2100+t%3*900,app:9e3+t*2600,balcao:12e3-t*300})),A=[{loja:`Moinhos de Vento`,vendas:98400},{loja:`Centro Histórico`,vendas:84100},{loja:`Cidade Baixa`,vendas:61900},{loja:`Petrópolis`,vendas:47300},{loja:`Menino Deus`,vendas:39800}],j=[{canal:`Site`,pedidos:1240},{canal:`App`,pedidos:860},{canal:`iFood`,pedidos:610},{canal:`Balcão`,pedidos:290}];function M(){let[e,t]=(0,S.useState)(`30`),n=(0,S.useMemo)(()=>O.slice(-Number(e)),[e]),r=n.reduce((e,t)=>e+t.atual,0),i=n.reduce((e,t)=>e+t.anterior,0),a=n.reduce((e,t)=>e+t.pedidos,0);return(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-4 ts:gap-16 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Vendas`,value:E(r),delta:r/i-1,deltaLabel:`vs. período anterior`,sparkline:n.map(e=>e.atual)})}),(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Pedidos`,value:new Intl.NumberFormat(`pt-BR`).format(a),delta:.064,deltaLabel:`vs. período anterior`})}),(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Ticket médio`,value:E(r/a),delta:-.012,deltaLabel:`vs. período anterior`})}),(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Cancelamentos`,value:`2,1%`,delta:-.18,positiveIs:`bad`,deltaLabel:`vs. período anterior`})})]}),(0,C.jsx)(d,{variant:`segmented`,size:`sm`,value:e,onValueChange:t,children:(0,C.jsx)(m,{title:`Vendas por dia`,description:`Pagas, sem cancelamentos`,actions:(0,C.jsxs)(f,{"aria-label":`Período`,activateOnFocus:!0,children:[(0,C.jsx)(p,{value:`7`,children:`7 dias`}),(0,C.jsx)(p,{value:`30`,children:`30 dias`}),(0,C.jsx)(p,{value:`90`,children:`90 dias`})]}),children:(0,C.jsx)(l,{"aria-label":`Vendas por dia, últimos ${e} dias`,data:n,index:`dia`,series:[{key:`atual`,label:`Este período`},{key:`anterior`,label:`Período anterior`,color:2,dashed:!0}],valueFormatter:E,height:260})})}),(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,C.jsx)(m,{title:`Vendas por loja`,description:`Últimos 30 dias`,children:(0,C.jsx)(o,{"aria-label":`Vendas por loja`,data:A,index:`loja`,series:[{key:`vendas`,label:`Vendas`}],layout:`horizontal`,valueFormatter:E,height:220})}),(0,C.jsx)(m,{title:`Pedidos por canal`,description:`Últimos 30 dias`,children:(0,C.jsx)(c,{"aria-label":`Pedidos por canal`,data:j,category:`canal`,value:`pedidos`,centerValue:`3.000`,centerLabel:`pedidos`,size:160,colors:[1,3,5,2]})})]})]})}function N(){return(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,C.jsx)(s,{label:`Vendas`,value:`R$ 48.200`,delta:.124,deltaLabel:`vs. mês passado`,sparkline:O.slice(-20).map(e=>e.atual)}),(0,C.jsx)(l,{"aria-label":`Vendas (tema)`,data:O.slice(-30),index:`dia`,series:[{key:`atual`,label:`Este mês`},{key:`anterior`,label:`Mês passado`,color:2,dashed:!0}],valueFormatter:E,height:180})]})}function P(){return(0,C.jsxs)(`article`,{children:[(0,C.jsx)(_,{etapa:`Componente 31 · no catálogo`,titulo:`Gráficos`,descricao:(0,C.jsxs)(C.Fragment,{children:[`Área, linha, barra e rosca sobre o Recharts, com tooltip, legenda, eixos e grade do Tessela. O desenho é visual; o leitor de tela lê uma tabela com os mesmos dados. O `,(0,C.jsx)(b,{children:`Stat`}),` mostra um indicador com a variação e a tendência.`]})}),(0,C.jsx)(v,{codigo:`import { AreaChart, Card, LineChart } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const hoje = new Date();

const diario = Array.from({ length: 90 }, (_, i) => {\r
  const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 89 + i);\r
  const fds = d.getDay() === 5 || d.getDay() === 6 ? 1.35 : 1;\r
  const base = 3200 + i * 18 + Math.sin(i / 3) * 420;\r
  return {\r
    dia: \`\${String(d.getDate()).padStart(2, '0')}/\${String(d.getMonth() + 1).padStart(2, '0')}\`,\r
    atual: Math.round(base * fds),\r
    anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds),\r
    pedidos: Math.round((base * fds) / 118),\r
  };\r
});

const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes,\r
  site: 18000 + i * 2100 + (i % 3) * 900,\r
  app: 9000 + i * 2600,\r
  balcao: 12000 - i * 300,\r
}));

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Card title="Área"><AreaChart aria-label="Vendas por dia" data={diario.slice(-30)} index="dia" series={[{ key: 'atual', label: 'Este mês' }, { key: 'anterior', label: 'Mês passado', color: 2, dashed: true }]} valueFormatter={reais} /></Card>\r
  <Card title="Linha"><LineChart aria-label="Vendas por canal" data={meses} index="mes" series={[{ key: 'site', label: 'Site', color: 1 }, { key: 'app', label: 'App', color: 3 }, { key: 'balcao', label: 'Balcão', color: 5 }]} valueFormatter={reais} /></Card>\r
</div>`,id:`area`,titulo:`Área e linha`,descricao:`Área para um valor no tempo; linha para comparar tendências. O período anterior entra tracejado, em cinza. Passe o mouse para ver o tooltip ou use Ver dados para abrir a tabela pelo teclado.`,children:(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,C.jsx)(m,{title:`Área`,children:(0,C.jsx)(l,{"aria-label":`Vendas por dia`,data:O.slice(-30),index:`dia`,series:[{key:`atual`,label:`Este mês`},{key:`anterior`,label:`Mês passado`,color:2,dashed:!0}],valueFormatter:E})}),(0,C.jsx)(m,{title:`Linha`,children:(0,C.jsx)(a,{"aria-label":`Vendas por canal`,data:k,index:`mes`,series:[{key:`site`,label:`Site`,color:1},{key:`app`,label:`App`,color:3},{key:`balcao`,label:`Balcão`,color:5}],valueFormatter:E})})]})}),(0,C.jsx)(v,{codigo:`import { BarChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes,\r
  site: 18000 + i * 2100 + (i % 3) * 900,\r
  app: 9000 + i * 2600,\r
  balcao: 12000 - i * 300,\r
}));

const lojas = [\r
  { loja: 'Moinhos de Vento', vendas: 98400 },\r
  { loja: 'Centro Histórico', vendas: 84100 },\r
  { loja: 'Cidade Baixa', vendas: 61900 },\r
  { loja: 'Petrópolis', vendas: 47300 },\r
  { loja: 'Menino Deus', vendas: 39800 },\r
];

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Card title="Vertical"><BarChart aria-label="Vendas do site por mês" data={meses} index="mes" series={[{ key: 'site', label: 'Site' }]} valueFormatter={reais} /></Card>\r
  <Card title="Empilhada"><BarChart aria-label="Vendas por canal e mês" data={meses} index="mes" series={[{ key: 'site', label: 'Site', color: 1 }, { key: 'app', label: 'App', color: 3 }, { key: 'balcao', label: 'Balcão', color: 2 }]} stacked valueFormatter={reais} /></Card>\r
  <Card title="Horizontal" className="ts:col-span-2 ts:max-lg:col-span-1"><BarChart aria-label="Vendas por loja" data={lojas} index="loja" series={[{ key: 'vendas', label: 'Vendas' }]} layout="horizontal" valueFormatter={reais} height={220} /></Card>\r
</div>`,id:`barra`,titulo:`Barra`,descricao:`Vertical para categorias curtas (meses); horizontal para rankings com nomes longos; empilhada para partes de cada total.`,children:(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,C.jsx)(m,{title:`Vertical`,children:(0,C.jsx)(o,{"aria-label":`Vendas do site por mês`,data:k,index:`mes`,series:[{key:`site`,label:`Site`}],valueFormatter:E})}),(0,C.jsx)(m,{title:`Empilhada`,children:(0,C.jsx)(o,{"aria-label":`Vendas por canal e mês`,data:k,index:`mes`,series:[{key:`site`,label:`Site`,color:1},{key:`app`,label:`App`,color:3},{key:`balcao`,label:`Balcão`,color:2}],stacked:!0,valueFormatter:E})}),(0,C.jsx)(m,{title:`Horizontal`,className:`ts:col-span-2 ts:max-lg:col-span-1`,children:(0,C.jsx)(o,{"aria-label":`Vendas por loja`,data:A,index:`loja`,series:[{key:`vendas`,label:`Vendas`}],layout:`horizontal`,valueFormatter:E,height:220})})]})}),(0,C.jsx)(v,{codigo:`import { Card, DonutChart } from '@tessela/web';

const canais = [\r
  { canal: 'Site', pedidos: 1240 },\r
  { canal: 'App', pedidos: 860 },\r
  { canal: 'iFood', pedidos: 610 },\r
  { canal: 'Balcão', pedidos: 290 },\r
];

<Card><DonutChart aria-label="Pedidos por canal" data={canais} category="canal" value="pedidos" centerValue="3.000" centerLabel="pedidos" colors={[1, 3, 5, 2]} /></Card>`,id:`rosca`,titulo:`Rosca`,descricao:`Partes de um todo, com até 6 fatias; a lista ao lado traz valor e porcentagem, sem depender da cor.`,children:(0,C.jsx)(m,{children:(0,C.jsx)(c,{"aria-label":`Pedidos por canal`,data:j,category:`canal`,value:`pedidos`,centerValue:`3.000`,centerLabel:`pedidos`,colors:[1,3,5,2]})})}),(0,C.jsx)(v,{codigo:`import { Card, Sparkline, Stat } from '@tessela/web';

const hoje = new Date();

const diario = Array.from({ length: 90 }, (_, i) => {\r
  const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 89 + i);\r
  const fds = d.getDay() === 5 || d.getDay() === 6 ? 1.35 : 1;\r
  const base = 3200 + i * 18 + Math.sin(i / 3) * 420;\r
  return {\r
    dia: \`\${String(d.getDate()).padStart(2, '0')}/\${String(d.getMonth() + 1).padStart(2, '0')}\`,\r
    atual: Math.round(base * fds),\r
    anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds),\r
    pedidos: Math.round((base * fds) / 118),\r
  };\r
});

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Card><Stat label="Vendas" value="R$ 48.200" delta={0.124} deltaLabel="vs. mês passado" sparkline={diario.slice(-20).map((d) => d.atual)} /></Card>\r
  <Card><Stat label="Cancelamentos" value="2,1%" delta={0.08} positiveIs="bad" deltaLabel="vs. mês passado" sparkline={[3, 4, 3, 5, 6, 5, 7]} /></Card>\r
  <Card><Stat label="Ticket médio" value="R$ 118,40" delta={0} deltaLabel="vs. mês passado" /></Card>\r
  <Card className="ts:col-span-3 ts:max-lg:col-span-1"><div className="ts:flex ts:items-center ts:gap-16"><span className="ts:text-body-m ts:text-fg-secondary">Sparkline sozinha</span><Sparkline data={diario.slice(-40).map((d) => d.atual)} width={160} /></div></Card>\r
</div>`,id:`stat`,titulo:`Stat e Sparkline`,descricao:`A variação sobe em verde quando subir é bom; em indicadores como cancelamentos, positiveIs="bad" inverte as cores.`,children:(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Vendas`,value:`R$ 48.200`,delta:.124,deltaLabel:`vs. mês passado`,sparkline:O.slice(-20).map(e=>e.atual)})}),(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Cancelamentos`,value:`2,1%`,delta:.08,positiveIs:`bad`,deltaLabel:`vs. mês passado`,sparkline:[3,4,3,5,6,5,7]})}),(0,C.jsx)(m,{children:(0,C.jsx)(s,{label:`Ticket médio`,value:`R$ 118,40`,delta:0,deltaLabel:`vs. mês passado`})}),(0,C.jsx)(m,{className:`ts:col-span-3 ts:max-lg:col-span-1`,children:(0,C.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-16`,children:[(0,C.jsx)(`span`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`Sparkline sozinha`}),(0,C.jsx)(i,{data:O.slice(-40).map(e=>e.atual),width:160})]})})]})}),(0,C.jsx)(v,{id:`cores`,titulo:`Cores`,descricao:`Tokens chart/series-1 a 6. As duas primeiras são cinzas (tema monocromático: uma série, ou atual contra anterior); as outras só entram com mais categorias. Todas passam 3:1 contra o fundo nos dois temas.`,children:(0,C.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1`,children:r.map(e=>(0,C.jsx)(y,{theme:e,titulo:g[e],children:(0,C.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-12`,children:[1,2,3,4,5,6].map(e=>(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-center ts:gap-6`,children:[(0,C.jsx)(`span`,{className:`ts:size-40 ts:rounded-md`,style:{backgroundColor:`var(--ts-chart-series-${e})`}}),(0,C.jsx)(`span`,{className:`ts:text-caption ts:text-fg-muted`,children:e})]},e))})},e))})}),(0,C.jsx)(v,{id:`temas`,titulo:`Temas e densidades`,children:(0,C.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,C.jsx)(y,{theme:e,titulo:g[e],children:(0,C.jsx)(N,{})},e)),n.map(e=>(0,C.jsx)(y,{density:e,titulo:x[e],children:(0,C.jsx)(N,{})},e))]})}),(0,C.jsx)(v,{codigo:`import { AreaChart, BarChart, Card, DonutChart, Stat, Tab, TabList, Tabs } from '@tessela/web';
import { useMemo, useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const hoje = new Date();

const diario = Array.from({ length: 90 }, (_, i) => {\r
  const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 89 + i);\r
  const fds = d.getDay() === 5 || d.getDay() === 6 ? 1.35 : 1;\r
  const base = 3200 + i * 18 + Math.sin(i / 3) * 420;\r
  return {\r
    dia: \`\${String(d.getDate()).padStart(2, '0')}/\${String(d.getMonth() + 1).padStart(2, '0')}\`,\r
    atual: Math.round(base * fds),\r
    anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds),\r
    pedidos: Math.round((base * fds) / 118),\r
  };\r
});

const lojas = [\r
  { loja: 'Moinhos de Vento', vendas: 98400 },\r
  { loja: 'Centro Histórico', vendas: 84100 },\r
  { loja: 'Cidade Baixa', vendas: 61900 },\r
  { loja: 'Petrópolis', vendas: 47300 },\r
  { loja: 'Menino Deus', vendas: 39800 },\r
];

const canais = [\r
  { canal: 'Site', pedidos: 1240 },\r
  { canal: 'App', pedidos: 860 },\r
  { canal: 'iFood', pedidos: 610 },\r
  { canal: 'Balcão', pedidos: 290 },\r
];

function PainelDeVendas() {\r
  const [periodo, setPeriodo] = useState('30');\r
  const dados = useMemo(() => diario.slice(-Number(periodo)), [periodo]);\r
  const total = dados.reduce((t, d) => t + d.atual, 0);\r
  const anterior = dados.reduce((t, d) => t + d.anterior, 0);\r
  const pedidos = dados.reduce((t, d) => t + d.pedidos, 0);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-16">\r
      <div className="ts:grid ts:grid-cols-4 ts:gap-16 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
        <Card><Stat label="Vendas" value={reais(total)} delta={total / anterior - 1} deltaLabel="vs. período anterior" sparkline={dados.map((d) => d.atual)} /></Card>\r
        <Card><Stat label="Pedidos" value={new Intl.NumberFormat('pt-BR').format(pedidos)} delta={0.064} deltaLabel="vs. período anterior" /></Card>\r
        <Card><Stat label="Ticket médio" value={reais(total / pedidos)} delta={-0.012} deltaLabel="vs. período anterior" /></Card>\r
        <Card><Stat label="Cancelamentos" value="2,1%" delta={-0.18} positiveIs="bad" deltaLabel="vs. período anterior" /></Card>\r
      </div>\r
      <Tabs variant="segmented" size="sm" value={periodo} onValueChange={setPeriodo}>\r
        <Card\r
          title="Vendas por dia"\r
          description="Pagas, sem cancelamentos"\r
          actions={(\r
            <TabList aria-label="Período" activateOnFocus>\r
              <Tab value="7">7 dias</Tab>\r
              <Tab value="30">30 dias</Tab>\r
              <Tab value="90">90 dias</Tab>\r
            </TabList>\r
          )}\r
        >\r
          <AreaChart\r
            aria-label={\`Vendas por dia, últimos \${periodo} dias\`}\r
            data={dados}\r
            index="dia"\r
            series={[{ key: 'atual', label: 'Este período' }, { key: 'anterior', label: 'Período anterior', color: 2, dashed: true }]}\r
            valueFormatter={reais}\r
            height={260}\r
          />\r
        </Card>\r
      </Tabs>\r
      <div className="ts:grid ts:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] ts:gap-16 ts:max-lg:grid-cols-1">\r
        <Card title="Vendas por loja" description="Últimos 30 dias">\r
          <BarChart aria-label="Vendas por loja" data={lojas} index="loja" series={[{ key: 'vendas', label: 'Vendas' }]} layout="horizontal" valueFormatter={reais} height={220} />\r
        </Card>\r
        <Card title="Pedidos por canal" description="Últimos 30 dias">\r
          <DonutChart aria-label="Pedidos por canal" data={canais} category="canal" value="pedidos" centerValue="3.000" centerLabel="pedidos" size={160} colors={[1, 3, 5, 2]} />\r
        </Card>\r
      </div>\r
    </div>\r
  );\r
}

<PainelDeVendas />`,id:`em-uso`,titulo:`Em uso`,descricao:`Painel de vendas: indicadores, vendas por dia com o período nas abas, ranking de lojas e canais.`,children:(0,C.jsx)(M,{})}),(0,C.jsx)(v,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,C.jsx)(`p`,{className:`ts:text-label-m`,children:`AreaChart, LineChart e BarChart`}),(0,C.jsx)(h,{rotulo:`Tabela de propriedades de AreaChart, LineChart e BarChart`,itens:[{nome:`data / index / indexLabel`,tipo:`T[] / chave / string`,descricao:`Linhas, o campo das categorias do eixo X e o rótulo da coluna na tabela de dados. indexLabel usa Categoria por padrão.`},{nome:`series`,tipo:`{ key, label, color?, dashed? }[]`,descricao:`Séries; color de 1 a 6 (tokens) ou CSS; dashed para comparação.`},{nome:`aria-label`,tipo:`string`,descricao:`Obrigatório. Título da tabela de dados do leitor de tela.`},{nome:`valueFormatter / axisFormatter / indexFormatter`,tipo:`(v) => string`,descricao:`Valores (tooltip e tabela), eixo Y (padrão compacto: 12 mil) e categorias.`},{nome:`height / legend`,tipo:`number / boolean`,padrao:`240 / com 2+ séries`,descricao:`Altura e legenda.`},{nome:`stacked (área e barra) / layout (barra)`,tipo:`boolean / 'vertical' | 'horizontal'`,descricao:`Empilhar; barras deitadas para rankings.`}]})]}),(0,C.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,C.jsx)(`p`,{className:`ts:text-label-m`,children:`DonutChart, Stat e Sparkline`}),(0,C.jsx)(h,{rotulo:`Tabela de propriedades de DonutChart, Stat e Sparkline`,itens:[{nome:`DonutChart · category / value / colors`,tipo:`—`,descricao:`Campos do nome e do valor de cada fatia; cores na ordem.`},{nome:`DonutChart · centerValue / centerLabel`,tipo:`ReactNode`,descricao:`Texto no meio.`},{nome:`Stat · label / value / delta / deltaLabel`,tipo:`—`,descricao:`delta é fração (0,124 = +12,4%).`},{nome:`Stat · positiveIs`,tipo:`'good' | 'bad'`,padrao:`'good'`,descricao:`Se subir é bom ou ruim (inverte as cores).`},{nome:`Sparkline · data / color`,tipo:`number[] / 1–6`,descricao:`Tendência decorativa, sem eixos.`}]})]})]})}),(0,C.jsx)(v,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,C.jsx)(w,{itens:[(0,C.jsxs)(C.Fragment,{children:[`O desenho fica escondido do leitor de tela; no lugar, uma tabela com os mesmos dados, com o `,(0,C.jsx)(b,{children:`aria-label`}),` como título e os valores formatados.`]}),(0,C.jsxs)(C.Fragment,{children:[`O botão `,(0,C.jsx)(b,{children:`Ver dados`}),` fica no foco do teclado e mostra essa tabela na página.`]}),(0,C.jsx)(C.Fragment,{children:`A cor não é a única pista: a série de comparação é tracejada, a rosca tem lista com nome e porcentagem, a variação do Stat tem sinal e seta.`}),(0,C.jsx)(C.Fragment,{children:`As cores das séries passam 3:1 contra o fundo nos dois temas (verificado no portão de contraste).`})]})})]})}export{P as GraficosPagina};