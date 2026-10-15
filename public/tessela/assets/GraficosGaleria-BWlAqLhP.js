import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{hr as n,i as r,n as i,sr as a,u as o,vi as s}from"./Codigo-Dgz1In5l.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Graficos-R7SVMNYj.js";import{s as m}from"./tiptap-jvs8iIPE.js";import{a as h}from"./Estrutura-Bg5zrcqs.js";import{N as g,j as _,x as v}from"./index-3SU4ioj-.js";var y={name:`chart-area`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z`,key:`q0gr47`}]],aliases:[`area-chart`]};y.node;var b=s(y),x={name:`chart-bar`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M7 16h8`,key:`srdodz`}],[`path`,{d:`M7 11h12`,key:`127s9w`}],[`path`,{d:`M7 6h3`,key:`w9rmul`}]],aliases:[`bar-chart-horizontal`]};x.node;var S=s(x),C={name:`chart-line`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]],aliases:[`line-chart`]};C.node;var w=s(C),T={name:`chart-pie`,size:24,node:[[`path`,{d:`M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z`,key:`pzmjnu`}],[`path`,{d:`M21.21 15.89A10 10 0 1 1 8 2.83`,key:`k2fpak`}]],aliases:[`pie-chart`]};T.node;var E=s(T),D={name:`code`,size:24,node:[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]};D.node;var O=s(D),k={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]};k.node;var A=s(k),j=e(t(),1),M=m();function N({nome:e,icone:t,codigo:s,className:c,children:l}){let[u,d]=(0,j.useState)(!1);return(0,M.jsxs)(`div`,{className:n(`ts:flex ts:min-w-0 ts:flex-col ts:gap-8`,c),children:[(0,M.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8`,children:[(0,M.jsx)(t,{"aria-hidden":!0,className:n(o,`ts:size-icon-sm ts:text-fg-muted`)}),(0,M.jsx)(`h3`,{className:`ts:min-w-0 ts:flex-1 ts:truncate ts:text-label-s ts:text-fg-secondary`,children:e}),s&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i,{texto:s}),(0,M.jsx)(a,{size:`sm`,variant:`secondary`,leadingIcon:O,onClick:()=>d(!0),children:`Ver código`}),(0,M.jsx)(_,{open:u,onOpenChange:d,children:(0,M.jsx)(g,{title:e,description:`Copie e troque os dados pelos do seu app.`,size:`lg`,footer:(0,M.jsx)(i,{texto:s}),children:(0,M.jsx)(r,{codigo:s,className:`ts:-mx-24 ts:-my-20 ts:px-24 ts:py-20`})})})]})]}),l]})}var P=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`,maximumFractionDigits:0}),F=e=>P.format(e),I=Array.from({length:30},(e,t)=>{let n=t%7==5||t%7==6?1.35:1,r=3600+t*22+Math.sin(t/3)*420;return{dia:`${String(t+1).padStart(2,`0`)}/09`,atual:Math.round(r*n),anterior:Math.round((r*.86+Math.cos(t/4)*300)*n)}}),L=[`jan`,`fev`,`mar`,`abr`,`mai`,`jun`,`jul`,`ago`,`set`].map((e,t)=>({mes:e,site:18e3+t*2100+t%3*900,app:9e3+t*2600,balcao:12e3-t*300})),R=[{loja:`Moinhos de Vento`,vendas:98400},{loja:`Centro Histórico`,vendas:84100},{loja:`Cidade Baixa`,vendas:61900},{loja:`Petrópolis`,vendas:47300}],z=[{canal:`Site`,pedidos:1240},{canal:`App`,pedidos:860},{canal:`iFood`,pedidos:610},{canal:`Balcão`,pedidos:290}];function B({id:e,titulo:t,children:n}){return(0,M.jsxs)(`section`,{id:e,className:`ts:scroll-mt-72`,children:[(0,M.jsx)(`h2`,{className:`ts:text-heading-m ts:text-fg-primary`,children:t}),(0,M.jsx)(`div`,{className:`ts:mt-16 ts:grid ts:grid-cols-3 ts:gap-24 ts:max-xl:grid-cols-2 ts:max-md:grid-cols-1`,children:n})]})}var V=[[`area`,`Área`],[`barras`,`Barras`],[`linhas`,`Linhas`],[`rosca`,`Rosca`],[`indicadores`,`Indicadores`]];function H(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(v,{rotulo:`Gráficos · Recharts`,titulo:`Números que todo mundo lê`,descricao:`Área, barras, linhas, rosca e indicadores, com as cores da marca, os valores em reais e uma tabela para o leitor de tela. Escolha um, veja o código e copie.`,acoes:[{rotulo:`Documentação`,caminho:`/docs/componentes/graficos`}]}),(0,M.jsxs)(`div`,{className:`ts:mx-auto ts:max-w-[var(--ts-site-layout-max-width)] ts:px-24 ts:pb-64 ts:pt-32 ts:max-md:px-16`,children:[(0,M.jsx)(`nav`,{"aria-label":`Tipos de gráfico`,className:`ts:mb-40 ts:flex ts:flex-wrap ts:gap-4`,children:V.map(([e,t])=>(0,M.jsx)(`a`,{href:`#${e}`,className:`ts:rounded-full ts:px-12 ts:py-6 ts:text-label-m ts:text-fg-secondary ts:transition-colors ts:hover:bg-bg-hover ts:hover:text-fg-primary`,children:t},e))}),(0,M.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-64`,children:[(0,M.jsxs)(B,{id:`area`,titulo:`Área`,children:[(0,M.jsx)(N,{codigo:`import { AreaChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorDia = Array.from({ length: 30 }, (_, i) => {\r
  const fds = i % 7 === 5 || i % 7 === 6 ? 1.35 : 1;\r
  const base = 3600 + i * 22 + Math.sin(i / 3) * 420;\r
  return { dia: \`\${String(i + 1).padStart(2, '0')}/09\`, atual: Math.round(base * fds), anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds) };\r
});

<Card title="Vendas por dia" description="Setembro, contra agosto">\r
  <AreaChart aria-label="Vendas por dia em setembro e agosto" data={vendasPorDia} index="dia" series={[{ key: 'atual', label: 'Setembro' }, { key: 'anterior', label: 'Agosto', color: 2, dashed: true }]} valueFormatter={reais} height={220} />\r
</Card>`,nome:`Área · comparação`,icone:b,children:(0,M.jsx)(h,{title:`Vendas por dia`,description:`Setembro, contra agosto`,children:(0,M.jsx)(p,{"aria-label":`Vendas por dia em setembro e agosto`,data:I,index:`dia`,series:[{key:`atual`,label:`Setembro`},{key:`anterior`,label:`Agosto`,color:2,dashed:!0}],valueFormatter:F,height:220})})}),(0,M.jsx)(N,{codigo:`import { AreaChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorCanal = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes, site: 18000 + i * 2100 + (i % 3) * 900, app: 9000 + i * 2600, balcao: 12000 - i * 300,\r
}));

<Card title="Vendas por canal" description="Janeiro a setembro">\r
  <AreaChart aria-label="Vendas por canal e mês" data={vendasPorCanal} index="mes" series={[{ key: 'site', label: 'Site', color: 1 }, { key: 'app', label: 'App', color: 3 }, { key: 'balcao', label: 'Balcão', color: 2 }]} stacked valueFormatter={reais} height={220} />\r
</Card>`,nome:`Área · empilhada`,icone:b,children:(0,M.jsx)(h,{title:`Vendas por canal`,description:`Janeiro a setembro`,children:(0,M.jsx)(p,{"aria-label":`Vendas por canal e mês`,data:L,index:`mes`,series:[{key:`site`,label:`Site`,color:1},{key:`app`,label:`App`,color:3},{key:`balcao`,label:`Balcão`,color:2}],stacked:!0,valueFormatter:F,height:220})})}),(0,M.jsx)(N,{codigo:`import { AreaChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorCanal = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes, site: 18000 + i * 2100 + (i % 3) * 900, app: 9000 + i * 2600, balcao: 12000 - i * 300,\r
}));

<Card title="Vendas do site" description="Janeiro a setembro">\r
  <AreaChart aria-label="Vendas do site por mês" data={vendasPorCanal} index="mes" series={[{ key: 'site', label: 'Site' }]} valueFormatter={reais} height={220} />\r
</Card>`,nome:`Área · uma série`,icone:b,children:(0,M.jsx)(h,{title:`Vendas do site`,description:`Janeiro a setembro`,children:(0,M.jsx)(p,{"aria-label":`Vendas do site por mês`,data:L,index:`mes`,series:[{key:`site`,label:`Site`}],valueFormatter:F,height:220})})})]}),(0,M.jsxs)(B,{id:`barras`,titulo:`Barras`,children:[(0,M.jsx)(N,{codigo:`import { BarChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorCanal = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes, site: 18000 + i * 2100 + (i % 3) * 900, app: 9000 + i * 2600, balcao: 12000 - i * 300,\r
}));

<Card title="Vendas do app" description="Janeiro a setembro">\r
  <BarChart aria-label="Vendas do app por mês" data={vendasPorCanal} index="mes" series={[{ key: 'app', label: 'App', color: 3 }]} valueFormatter={reais} height={220} />\r
</Card>`,nome:`Barras · vertical`,icone:S,children:(0,M.jsx)(h,{title:`Vendas do app`,description:`Janeiro a setembro`,children:(0,M.jsx)(u,{"aria-label":`Vendas do app por mês`,data:L,index:`mes`,series:[{key:`app`,label:`App`,color:3}],valueFormatter:F,height:220})})}),(0,M.jsx)(N,{codigo:`import { BarChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorCanal = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes, site: 18000 + i * 2100 + (i % 3) * 900, app: 9000 + i * 2600, balcao: 12000 - i * 300,\r
}));

<Card title="Vendas por canal" description="Janeiro a setembro">\r
  <BarChart aria-label="Vendas por canal e mês, empilhadas" data={vendasPorCanal} index="mes" series={[{ key: 'site', label: 'Site', color: 1 }, { key: 'app', label: 'App', color: 3 }, { key: 'balcao', label: 'Balcão', color: 2 }]} stacked valueFormatter={reais} height={220} />\r
</Card>`,nome:`Barras · empilhadas`,icone:S,children:(0,M.jsx)(h,{title:`Vendas por canal`,description:`Janeiro a setembro`,children:(0,M.jsx)(u,{"aria-label":`Vendas por canal e mês, empilhadas`,data:L,index:`mes`,series:[{key:`site`,label:`Site`,color:1},{key:`app`,label:`App`,color:3},{key:`balcao`,label:`Balcão`,color:2}],stacked:!0,valueFormatter:F,height:220})})}),(0,M.jsx)(N,{codigo:`import { BarChart, Card } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorLoja = [\r
  { loja: 'Moinhos de Vento', vendas: 98400 },\r
  { loja: 'Centro Histórico', vendas: 84100 },\r
  { loja: 'Cidade Baixa', vendas: 61900 },\r
  { loja: 'Petrópolis', vendas: 47300 },\r
];

<Card title="Vendas por loja" description="Últimos 30 dias">\r
  <BarChart aria-label="Vendas por loja" data={vendasPorLoja} index="loja" series={[{ key: 'vendas', label: 'Vendas' }]} layout="horizontal" valueFormatter={reais} height={220} />\r
</Card>`,nome:`Barras · horizontal`,icone:S,children:(0,M.jsx)(h,{title:`Vendas por loja`,description:`Últimos 30 dias`,children:(0,M.jsx)(u,{"aria-label":`Vendas por loja`,data:R,index:`loja`,series:[{key:`vendas`,label:`Vendas`}],layout:`horizontal`,valueFormatter:F,height:220})})})]}),(0,M.jsxs)(B,{id:`linhas`,titulo:`Linhas`,children:[(0,M.jsx)(N,{codigo:`import { Card, LineChart } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorCanal = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'].map((mes, i) => ({\r
  mes, site: 18000 + i * 2100 + (i % 3) * 900, app: 9000 + i * 2600, balcao: 12000 - i * 300,\r
}));

<Card title="Vendas por canal" description="Janeiro a setembro">\r
  <LineChart aria-label="Vendas por canal, em linhas" data={vendasPorCanal} index="mes" series={[{ key: 'site', label: 'Site', color: 1 }, { key: 'app', label: 'App', color: 3 }, { key: 'balcao', label: 'Balcão', color: 5 }]} valueFormatter={reais} height={220} />\r
</Card>`,nome:`Linhas · três séries`,icone:w,children:(0,M.jsx)(h,{title:`Vendas por canal`,description:`Janeiro a setembro`,children:(0,M.jsx)(l,{"aria-label":`Vendas por canal, em linhas`,data:L,index:`mes`,series:[{key:`site`,label:`Site`,color:1},{key:`app`,label:`App`,color:3},{key:`balcao`,label:`Balcão`,color:5}],valueFormatter:F,height:220})})}),(0,M.jsx)(N,{codigo:`import { Card, LineChart } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorDia = Array.from({ length: 30 }, (_, i) => {\r
  const fds = i % 7 === 5 || i % 7 === 6 ? 1.35 : 1;\r
  const base = 3600 + i * 22 + Math.sin(i / 3) * 420;\r
  return { dia: \`\${String(i + 1).padStart(2, '0')}/09\`, atual: Math.round(base * fds), anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds) };\r
});

<Card title="Vendas por dia" description="Setembro, contra agosto">\r
  <LineChart aria-label="Vendas por dia, em linhas" data={vendasPorDia} index="dia" series={[{ key: 'atual', label: 'Setembro' }, { key: 'anterior', label: 'Agosto', color: 2, dashed: true }]} valueFormatter={reais} height={220} />\r
</Card>`,nome:`Linhas · comparação`,icone:w,children:(0,M.jsx)(h,{title:`Vendas por dia`,description:`Setembro, contra agosto`,children:(0,M.jsx)(l,{"aria-label":`Vendas por dia, em linhas`,data:I,index:`dia`,series:[{key:`atual`,label:`Setembro`},{key:`anterior`,label:`Agosto`,color:2,dashed:!0}],valueFormatter:F,height:220})})})]}),(0,M.jsxs)(B,{id:`rosca`,titulo:`Rosca`,children:[(0,M.jsx)(N,{codigo:`import { Card, DonutChart } from '@tessela/web';

const pedidosPorCanal = [\r
  { canal: 'Site', pedidos: 1240 },\r
  { canal: 'App', pedidos: 860 },\r
  { canal: 'iFood', pedidos: 610 },\r
  { canal: 'Balcão', pedidos: 290 },\r
];

<Card title="Pedidos por canal" description="Últimos 30 dias">\r
  <DonutChart aria-label="Pedidos por canal" data={pedidosPorCanal} category="canal" value="pedidos" centerValue="3.000" centerLabel="pedidos" colors={[1, 3, 5, 2]} />\r
</Card>`,nome:`Rosca · participação`,icone:E,children:(0,M.jsx)(h,{title:`Pedidos por canal`,description:`Últimos 30 dias`,children:(0,M.jsx)(f,{"aria-label":`Pedidos por canal`,data:z,category:`canal`,value:`pedidos`,centerValue:`3.000`,centerLabel:`pedidos`,colors:[1,3,5,2]})})}),(0,M.jsx)(N,{codigo:`import { Card, DonutChart } from '@tessela/web';

const pedidosPorCanal = [\r
  { canal: 'Site', pedidos: 1240 },\r
  { canal: 'App', pedidos: 860 },\r
  { canal: 'iFood', pedidos: 610 },\r
  { canal: 'Balcão', pedidos: 290 },\r
];

<Card title="Canais" description="Participação no mês">\r
  <DonutChart aria-label="Pedidos por canal, compacta" data={pedidosPorCanal} category="canal" value="pedidos" size={120} colors={[1, 3, 5, 2]} />\r
</Card>`,nome:`Rosca · compacta`,icone:E,children:(0,M.jsx)(h,{title:`Canais`,description:`Participação no mês`,children:(0,M.jsx)(f,{"aria-label":`Pedidos por canal, compacta`,data:z,category:`canal`,value:`pedidos`,size:120,colors:[1,3,5,2]})})})]}),(0,M.jsxs)(B,{id:`indicadores`,titulo:`Indicadores`,children:[(0,M.jsx)(N,{codigo:`import { Card, Stat } from '@tessela/web';

const vendasPorDia = Array.from({ length: 30 }, (_, i) => {\r
  const fds = i % 7 === 5 || i % 7 === 6 ? 1.35 : 1;\r
  const base = 3600 + i * 22 + Math.sin(i / 3) * 420;\r
  return { dia: \`\${String(i + 1).padStart(2, '0')}/09\`, atual: Math.round(base * fds), anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds) };\r
});

<Card><Stat label="Vendas" value="R$ 48.200" delta={0.124} deltaLabel="vs. mês passado" sparkline={vendasPorDia.slice(-20).map((d) => d.atual)} /></Card>`,nome:`Indicador com tendência`,icone:A,children:(0,M.jsx)(h,{children:(0,M.jsx)(d,{label:`Vendas`,value:`R$ 48.200`,delta:.124,deltaLabel:`vs. mês passado`,sparkline:I.slice(-20).map(e=>e.atual)})})}),(0,M.jsx)(N,{codigo:`import { Card, Stat } from '@tessela/web';

<Card><Stat label="Cancelamentos" value="2,1%" delta={0.08} positiveIs="bad" deltaLabel="vs. mês passado" sparkline={[3, 4, 3, 5, 6, 5, 7]} /></Card>`,nome:`Indicador em que subir é ruim`,icone:A,children:(0,M.jsx)(h,{children:(0,M.jsx)(d,{label:`Cancelamentos`,value:`2,1%`,delta:.08,positiveIs:`bad`,deltaLabel:`vs. mês passado`,sparkline:[3,4,3,5,6,5,7]})})}),(0,M.jsx)(N,{codigo:`import { Card, Sparkline } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const reais = (v: number) => real.format(v);

const vendasPorDia = Array.from({ length: 30 }, (_, i) => {\r
  const fds = i % 7 === 5 || i % 7 === 6 ? 1.35 : 1;\r
  const base = 3600 + i * 22 + Math.sin(i / 3) * 420;\r
  return { dia: \`\${String(i + 1).padStart(2, '0')}/09\`, atual: Math.round(base * fds), anterior: Math.round((base * 0.86 + Math.cos(i / 4) * 300) * fds) };\r
});

const vendasPorLoja = [\r
  { loja: 'Moinhos de Vento', vendas: 98400 },\r
  { loja: 'Centro Histórico', vendas: 84100 },\r
  { loja: 'Cidade Baixa', vendas: 61900 },\r
  { loja: 'Petrópolis', vendas: 47300 },\r
];

<Card title="Lojas" flush>\r
  <ul className="ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle">\r
    {vendasPorLoja.map((l, i) => (\r
      <li key={l.loja} className="ts:flex ts:items-center ts:gap-16 ts:px-card-padding ts:py-10">\r
        <span className="ts:min-w-0 ts:flex-1 ts:truncate ts:text-body-m">{l.loja}</span>\r
        <Sparkline data={vendasPorDia.slice(i * 4, i * 4 + 14).map((d) => d.atual)} width={96} height={24} />\r
        <span className="ts:w-[var(--ts-site-metric-column-width)] ts:text-right ts:text-body-m ts:tabular-nums">{reais(l.vendas)}</span>\r
      </li>\r
    ))}\r
  </ul>\r
</Card>`,nome:`Tendência numa lista`,icone:A,children:(0,M.jsx)(h,{title:`Lojas`,flush:!0,children:(0,M.jsx)(`ul`,{className:`ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle`,children:R.map((e,t)=>(0,M.jsxs)(`li`,{className:`ts:flex ts:items-center ts:gap-16 ts:px-card-padding ts:py-10`,children:[(0,M.jsx)(`span`,{className:`ts:min-w-0 ts:flex-1 ts:truncate ts:text-body-m`,children:e.loja}),(0,M.jsx)(c,{data:I.slice(t*4,t*4+14).map(e=>e.atual),width:96,height:24}),(0,M.jsx)(`span`,{className:`ts:w-[var(--ts-site-metric-column-width)] ts:text-right ts:text-body-m ts:tabular-nums`,children:F(e.vendas)})]},e.loja))})})})]})]})]})]})}export{H as GraficosGaleria};