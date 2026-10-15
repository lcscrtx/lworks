import{$r as e,Jr as t,Kr as n,Xr as r,Yr as i,Zr as a,ai as o,ci as s,di as c,ei as l,ii as u,li as d,ni as f,oi as p,ri as m,si as h,ti as g,ui as _}from"./Codigo-Dgz1In5l.js";import{s as v}from"./tiptap-jvs8iIPE.js";import{b as y,f as b,g as x,h as S,p as C,y as w}from"./index-3SU4ioj-.js";import{t as T}from"./contraste-B9i5Ic9K.js";var E=v(),D={display:`ts:text-display`,"heading-xl":`ts:text-heading-xl`,"heading-l":`ts:text-heading-l`,"heading-m":`ts:text-heading-m`,"heading-s":`ts:text-heading-s`,"body-l":`ts:text-body-l`,"body-m":`ts:text-body-m`,"body-m-strong":`ts:text-body-m-strong`,"body-s":`ts:text-body-s`,"label-m":`ts:text-label-m`,"label-s":`ts:text-label-s`,caption:`ts:text-caption`,code:`ts:text-code ts:font-mono`},O={xs:`ts:shadow-xs`,sm:`ts:shadow-sm`,md:`ts:shadow-md`,lg:`ts:shadow-lg`},k={display:`Visão geral`,"heading-xl":`Pedidos da semana`,"heading-l":`Configurações da conta`,"heading-m":`Métodos de pagamento`,"heading-s":`Endereço de cobrança`,"body-l":`O repasse de setembro foi processado e já aparece no extrato.`,"body-m":`O repasse de setembro foi processado e já aparece no extrato da conta principal.`,"body-m-strong":`Repasse processado em 25 de setembro`,"body-s":`Última sincronização às 14:32 · 1.284 registros`,"label-m":`Salvar alterações`,"label-s":`Status do pedido`,caption:`Atualizado há 3 minutos`,code:`ord_7Hk29QpLm3 · 2026-09-25T14:32:08Z`},A=[`gray`,`accent`,`red`,`green`,`amber`,`blue`],j={gray:`Cinza (neutro)`,accent:`Acento (ação principal e foco, por tema)`,red:`Vermelho (erro)`,green:`Verde (sucesso)`,amber:`Âmbar (aviso)`,blue:`Azul (informação)`};function M(e,t){return e in t}function N({ambiente:t}){let r=n[t.brand];return(0,E.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:A.map(t=>(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-label-m`,children:j[t]}),(0,E.jsx)(`div`,{className:`ts:mt-12 ts:grid ts:grid-cols-[repeat(auto-fill,minmax(72px,1fr))] ts:gap-8`,children:Object.entries(r).filter(([e])=>e.startsWith(t+`/`)).map(([t,n])=>(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`div`,{className:`ts:h-48 ts:rounded-md ts:border ts:border-border-subtle`,style:{background:e(t)}}),(0,E.jsx)(`p`,{className:`ts:mt-6 ts:text-label-s`,children:t.split(`/`).slice(1).join(` `)}),(0,E.jsx)(`p`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:n})]},t))})]},t))})}var P={bg:`Fundos`,fg:`Texto`,border:`Bordas`,action:`Ações`,field:`Campos`,feedback:`Feedback`,focus:`Foco`,progress:`Progresso`,chart:`Gráficos`};function F({ambiente:t}){let n=Object.keys(p[t.brand][t.theme]),r=[...new Set(n.map(e=>e.split(`/`)[0]))].map(e=>({prefixo:`${e}/`,nome:P[e]??e}));return(0,E.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-40`,children:r.map(({prefixo:r,nome:i})=>(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-heading-s`,children:i}),(0,E.jsxs)(`div`,{className:`ts:mt-12 ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:[(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted`,children:[(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Token`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Claro`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Escuro`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Alto contraste`})]}),n.filter(e=>e.startsWith(r)).map(n=>(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-subtle ts:last:border-b-0`,children:[(0,E.jsx)(`span`,{className:`ts:flex ts:items-center ts:px-12 ts:py-8`,children:(0,E.jsx)(C,{children:n})}),[...d.map(e=>({theme:e,contrast:`standard`,alias:o[e][n],cor:p[t.brand][e][n]})),{theme:void 0,contrast:`high`,alias:f[n],cor:m[t.brand][n]}].map(t=>(0,E.jsxs)(c,{scope:`element`,theme:t.theme,contrast:t.contrast,className:`ts:flex ts:items-center ts:gap-10 ts:bg-bg-base ts:px-12 ts:py-8 ts:text-fg-primary`,children:[(0,E.jsx)(`span`,{className:`ts:size-24 ts:shrink-0 ts:rounded-sm ts:border ts:border-border-default`,style:{background:e(n)}}),(0,E.jsxs)(`span`,{className:`ts:min-w-0`,children:[(0,E.jsx)(`span`,{className:`ts:block ts:truncate ts:font-mono ts:text-caption`,children:t.alias}),(0,E.jsx)(`span`,{className:`ts:block ts:font-mono ts:text-caption ts:text-fg-muted`,children:t.cor})]})]},t.theme??t.contrast))]},n))]})]},r))})}function I({ambiente:e}){let t=i[e.brand];return(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col`,children:[s.map(e=>(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[220px_minmax(0,1fr)] ts:items-baseline ts:gap-24 ts:border-b ts:border-border-subtle ts:py-16 ts:last:border-b-0 ts:max-md:grid-cols-1 ts:max-md:gap-6`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-label-m`,children:e.name}),(0,E.jsxs)(`p`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[e.size,`/`,e.lineHeight,` · `,String(M(e.weightToken,t)?t[e.weightToken]:e.weight),` · `,e.tracking,`%`,e.family===`mono`?` · mono`:``]})]}),(0,E.jsx)(`p`,{className:D[e.slug],children:k[e.slug]})]},e.slug)),(0,E.jsx)(`div`,{className:`ts:mt-24 ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1`,children:[{titulo:`Algarismos tabulares (tabelas e indicadores)`,classe:`ts:tabular-nums`},{titulo:`Algarismos proporcionais (texto corrido)`,classe:`ts:proportional-nums`}].map(({titulo:e,classe:t})=>(0,E.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:p-16`,children:[(0,E.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:e}),(0,E.jsxs)(`div`,{className:`ts:mt-12 ts:flex ts:flex-col ts:items-end ts:text-body-m ${t}`,children:[(0,E.jsx)(`span`,{children:`R$ 1.111,11`}),(0,E.jsx)(`span`,{children:`R$ 18.480,00`}),(0,E.jsx)(`span`,{children:`R$ 7,90`}),(0,E.jsx)(`span`,{children:`R$ 204.019,57`})]})]},t))})]})}var L=e=>Object.entries(u).filter(([t])=>t.startsWith(e));function R(){return(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ts:gap-48 ts:max-md:grid-cols-1`,children:[(0,E.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:L(`space/`).map(([t,n])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-12`,children:[(0,E.jsx)(`span`,{className:`ts:w-80 ts:font-mono ts:text-caption ts:text-fg-muted`,children:t}),(0,E.jsx)(`span`,{className:`ts:h-12 ts:rounded-xs ts:bg-fg-primary`,style:{width:e(t)}}),(0,E.jsx)(`span`,{className:`ts:text-caption ts:text-fg-secondary`,children:n})]},t))}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-label-m`,children:`Ícones`}),(0,E.jsx)(`div`,{className:`ts:mt-12 ts:flex ts:items-end ts:gap-24`,children:L(`size/icon/`).map(([t,n])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-center ts:gap-8`,children:[(0,E.jsx)(`span`,{className:`ts:rounded-xs ts:bg-fg-primary`,style:{width:e(t),height:e(t)}}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[t.split(`/`)[2],` · `,n]})]},t))})]})]})}function z({ambiente:t}){let n=i[t.brand],r=n[`radius/xl`],a=n[`radius/control`];return(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:[(0,E.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-24`,children:Object.entries(n).filter(([e])=>e.startsWith(`radius/`)).map(([t,n])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-center ts:gap-8`,children:[(0,E.jsx)(`div`,{className:`ts:size-72 ts:border ts:border-border-strong ts:bg-bg-subtle`,style:{borderRadius:e(t)}}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[t.split(`/`)[1],` · `,n===9999?`pílula`:n]})]},t))}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-label-m`,children:`Suavização de cantos`}),(0,E.jsxs)(`p`,{className:`ts:mt-4 ts:max-w-720 ts:text-body-m ts:text-fg-secondary`,children:[`Token `,(0,E.jsx)(C,{children:`corner/shape`}),` = `,(0,E.jsx)(C,{children:String(n[`corner/shape`])}),`: desligada na marca Padrão. Uma marca pode ligá-la com `,(0,E.jsx)(C,{children:`squircle`}),`, que faz a curva entrar no canto de forma contínua, como a suavização do Figma. Abaixo, a comparação.`]}),(0,E.jsxs)(`div`,{className:`ts:mt-16 ts:flex ts:flex-wrap ts:gap-24`,children:[[[`Redondo`,``],[`Suavizado`,`ts:[corner-shape:squircle]`]].map(([e,t])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-center ts:gap-8`,children:[(0,E.jsx)(`div`,{className:`ts:size-120 ts:rounded-xl ts:bg-fg-primary ${t}`}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[e,` · xl `,String(r)]})]},e)),[[`Redondo`,``],[`Suavizado`,`ts:[corner-shape:squircle]`]].map(([e,t])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-center ts:justify-end ts:gap-8`,children:[(0,E.jsx)(`div`,{className:`ts:flex ts:h-control-height-lg ts:w-120 ts:items-center ts:justify-center ts:rounded-control ts:bg-fg-primary ts:text-label-m ts:text-fg-inverse ${t}`,children:`Salvar`}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[e,` · control `,String(a)]})]},`c`+e))]})]}),(0,E.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-24`,children:Object.entries(n).filter(([e])=>e.startsWith(`border-width/`)).map(([t,n])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:w-200 ts:flex-col ts:gap-8`,children:[(0,E.jsx)(`div`,{className:`ts:border-border-strong`,style:{borderTopWidth:e(t),borderTopStyle:`solid`}}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[t,` · `,n]})]},t))})]})}function B(){return(0,E.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1`,children:d.map(e=>(0,E.jsx)(S,{theme:e,titulo:y[e],children:(0,E.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:bg-bg-subtle ts:p-24`,children:h.map(e=>(0,E.jsxs)(`div`,{className:`ts:flex ts:h-80 ts:flex-col ts:justify-center ts:rounded-lg ts:border ts:border-border-subtle ts:bg-bg-raised ts:px-16 ${O[e.name]}`,children:[(0,E.jsx)(`span`,{className:`ts:text-label-m`,children:e.name}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[e.x,` `,e.y,` `,e.blur,` · `,Math.round(e.opacity*100),`%`]})]},e.name))})},e))})}var V=[{pedido:`#10482`,cliente:`Mercado Bom Preço`,valor:`R$ 1.284,90`,status:`Pago`},{pedido:`#10481`,cliente:`Padaria Estrela`,valor:`R$ 312,00`,status:`Pendente`},{pedido:`#10480`,cliente:`Farmácia Central`,valor:`R$ 18.004,15`,status:`Pago`},{pedido:`#10479`,cliente:`Livraria Página 12`,valor:`R$ 94,50`,status:`Cancelado`}];function H(){return(0,E.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:l.map(e=>{let t=g[e];return(0,E.jsxs)(S,{density:e,titulo:w[e],children:[(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-end ts:gap-12`,children:[(0,E.jsxs)(`span`,{className:`ts:inline-flex ts:h-control-height-sm ts:items-center ts:rounded-sm ts:border ts:border-field-border ts:bg-field-bg ts:px-control-padding-x-sm ts:text-label-s`,children:[`Pequeno · `,t[`control/height/sm`]]}),(0,E.jsxs)(`span`,{className:`ts:inline-flex ts:h-control-height-md ts:items-center ts:rounded-sm ts:border ts:border-field-border ts:bg-field-bg ts:px-control-padding-x-md ts:text-label-m`,children:[`Médio · `,t[`control/height/md`]]}),(0,E.jsxs)(`span`,{className:`ts:inline-flex ts:h-control-height-lg ts:items-center ts:rounded-sm ts:border ts:border-field-border ts:bg-field-bg ts:px-control-padding-x-lg ts:text-label-m`,children:[`Grande · `,t[`control/height/lg`]]})]}),(0,E.jsxs)(`div`,{className:`ts:mt-20 ts:overflow-hidden ts:rounded-md ts:border ts:border-border-default`,children:[(0,E.jsxs)(`div`,{className:`ts:grid ts:h-table-header-height ts:grid-cols-[80px_minmax(0,1fr)_120px_96px] ts:items-center ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted`,children:[(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x`,children:`Pedido`}),(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x`,children:`Cliente`}),(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-right`,children:`Valor`}),(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x`,children:`Status`})]}),V.map(e=>(0,E.jsxs)(`div`,{className:`ts:grid ts:h-table-row-height ts:grid-cols-[80px_minmax(0,1fr)_120px_96px] ts:items-center ts:border-b ts:border-border-subtle ts:text-body-m ts:last:border-b-0 ts:hover:bg-bg-hover`,children:[(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:font-mono ts:text-code ts:text-fg-secondary`,children:e.pedido}),(0,E.jsx)(`span`,{className:`ts:truncate ts:px-table-cell-padding-x`,children:e.cliente}),(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-right ts:tabular-nums`,children:e.valor}),(0,E.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-fg-secondary`,children:e.status})]},e.pedido))]}),(0,E.jsxs)(`p`,{className:`ts:mt-12 ts:font-mono ts:text-caption ts:text-fg-muted`,children:[`linha `,t[`table/row-height`],` · cabeçalho `,t[`table/header-height`],` · célula `,t[`table/cell-padding-x`],` · item `,t[`item/height`]]})]},e)})})}function U(){return(0,E.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:[(0,E.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1`,children:[{titulo:`Duração`,prefixo:`duration/`,unidade:`ms`},{titulo:`Curvas`,prefixo:`easing/`,unidade:``},{titulo:`Camadas (z-index)`,prefixo:`z-index/`,unidade:``},{titulo:`Larguras de tela`,prefixo:`breakpoint/`,unidade:`px`},{titulo:`Desfoque do fundo`,prefixo:`blur/`,unidade:`px`},{titulo:`Escala de pressão`,prefixo:`scale/`,unidade:``},{titulo:`Traço`,prefixo:`stroke/`,unidade:`px`},{titulo:`Foco`,prefixo:`focus/`,unidade:`px`}].map(e=>(0,E.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default`,children:[(0,E.jsx)(`p`,{className:`ts:border-b ts:border-border-default ts:bg-bg-subtle ts:px-12 ts:py-8 ts:text-label-s ts:text-fg-muted`,children:e.titulo}),L(e.prefixo).map(([t,n])=>(0,E.jsxs)(`div`,{className:`ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-12 ts:py-8 ts:last:border-b-0`,children:[(0,E.jsx)(C,{children:t}),(0,E.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-secondary`,children:[n,e.unidade]})]},t))]},e.prefixo))}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`p`,{className:`ts:text-label-m`,children:`Anel de foco`}),(0,E.jsxs)(`p`,{className:`ts:mt-4 ts:text-body-m ts:text-fg-secondary`,children:[`Pressione Tab para ver o anel: `,String(u[`focus/ring-width`]),` px, afastado `,String(u[`focus/ring-offset`]),` px, na cor `,(0,E.jsx)(C,{children:`focus/ring`}),`.`]}),(0,E.jsxs)(`div`,{className:`ts:mt-12 ts:flex ts:gap-12`,children:[(0,E.jsx)(`button`,{type:`button`,className:`ts:h-control-height-md ts:rounded-sm ts:bg-action-primary-bg ts:px-control-padding-x-md ts:text-label-m ts:text-action-primary-fg ts:hover:bg-action-primary-bg-hover ts:active:bg-action-primary-bg-active`,children:`Ação principal`}),(0,E.jsx)(`button`,{type:`button`,className:`ts:h-control-height-md ts:rounded-sm ts:border ts:border-action-secondary-border ts:bg-action-secondary-bg ts:px-control-padding-x-md ts:text-label-m ts:text-action-secondary-fg ts:hover:bg-action-secondary-bg-hover`,children:`Ação secundária`})]})]})]})}function W({ambiente:t}){let n=[{tipo:`Texto`,...a.text,minAlto:a.high.text},{tipo:`Borda ou ícone de controle`,...a.nonText,minAlto:a.high.nonText}];return(0,E.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:n.map(n=>(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`p`,{className:`ts:text-heading-s`,children:[n.tipo,` · mínimo `,String(n.min).replace(`.`,`,`),`:1 (no alto contraste, `,String(n.minAlto).replace(`.`,`,`),`:1)`]}),(0,E.jsxs)(`div`,{className:`ts:mt-12 ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:[(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted`,children:[(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Par`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Claro`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Escuro`}),(0,E.jsx)(`span`,{className:`ts:px-12 ts:py-8`,children:`Alto contraste`})]}),n.pairs.map(([r,i])=>(0,E.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-subtle ts:last:border-b-0`,children:[(0,E.jsxs)(`span`,{className:`ts:flex ts:flex-col ts:justify-center ts:px-12 ts:py-8`,children:[(0,E.jsx)(C,{children:r}),(0,E.jsxs)(C,{children:[`sobre `,i]})]}),[...d.map(e=>({theme:e,contrast:`standard`,cores:p[t.brand][e],min:n.min})),{theme:void 0,contrast:`high`,cores:m[t.brand],min:n.minAlto}].map(({theme:t,contrast:a,cores:o,min:s})=>{let l=T(o[r],o[i]);return(0,E.jsx)(c,{scope:`element`,theme:t,contrast:a,className:`ts:flex`,children:(0,E.jsxs)(`span`,{className:`ts:flex ts:flex-1 ts:items-center ts:gap-12 ts:px-12 ts:py-8`,style:{background:e(i)},children:[n.tipo===`Texto`?(0,E.jsx)(`span`,{className:`ts:text-body-m-strong`,style:{color:e(r)},children:`Aa texto`}):(0,E.jsx)(`span`,{className:`ts:size-20 ts:rounded-xs ts:border-2`,style:{borderColor:e(r)}}),(0,E.jsxs)(`span`,{className:`ts:rounded-xs ts:bg-bg-base ts:px-6 ts:font-mono ts:text-caption ts:tabular-nums ts:text-fg-primary`,children:[l.toFixed(2).replace(`.`,`,`),l>=s?``:` ✕`]})]})},t??a)})]},r+i))]})]},n.tipo))})}function G({ambiente:e}){let n=a.text.pairs.length+a.nonText.pairs.length,o=i[e.brand],s=t[e.brand]?.fonte,c=r[e.brand];return(0,E.jsxs)(`article`,{children:[(0,E.jsx)(b,{etapa:`Etapa 1 · aprovada por hora`,titulo:`Fundação`,descricao:(0,E.jsxs)(E.Fragment,{children:[`Os tokens que todos os componentes usam. Tudo nesta página vem de `,(0,E.jsx)(C,{children:`tessela-web.tokens.json`}),` e do CSS gerado a partir dele. Troque marca, tema e densidade em Aparência, no cabeçalho.`]})}),(0,E.jsx)(x,{codigo:`import { brandColors, cssVar } from '@tessela/web-tokens';

const escalas = ['gray', 'accent', 'red', 'green', 'amber', 'blue'] as const;

const nomeEscala: Record<(typeof escalas)[number], string> = {\r
  gray: 'Cinza (neutro)', accent: 'Acento (ação principal e foco, por tema)', red: 'Vermelho (erro)', green: 'Verde (sucesso)', amber: 'Âmbar (aviso)', blue: 'Azul (informação)',\r
};

function CoresDeMarca({ ambiente }: { ambiente: Ambiente }) {\r
  const cores = brandColors[ambiente.brand];\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-32">\r
      {escalas.map((escala) => (\r
        <div key={escala}>\r
          <p className="ts:text-label-m">{nomeEscala[escala]}</p>\r
          <div className="ts:mt-12 ts:grid ts:grid-cols-[repeat(auto-fill,minmax(72px,1fr))] ts:gap-8">\r
            {Object.entries(cores).filter(([p]) => p.startsWith(escala + '/')).map(([path, hex]) => (\r
              <div key={path}>\r
                <div className="ts:h-48 ts:rounded-md ts:border ts:border-border-subtle" style={{ background: cssVar(path) }} />\r
                <p className="ts:mt-6 ts:text-label-s">{path.split('/').slice(1).join(' ')}</p>\r
                <p className="ts:font-mono ts:text-caption ts:text-fg-muted">{hex}</p>\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
}

<CoresDeMarca ambiente={ambiente} />`,id:`cores`,titulo:`Cores de marca`,descricao:`Escalas da marca ${c}: um cinza neutro e quatro escalas de estado. Componentes não usam estas cores direto; usam os semânticos.${s?` Fonte: ${s}.`:``}`,children:(0,E.jsx)(N,{ambiente:e})}),(0,E.jsx)(x,{codigo:`import { TesselaProvider } from '@tessela/web';
import { cssVar, highContrastAliases, highContrastColors, semanticAliases, semanticColors, themes } from '@tessela/web-tokens';

const nomesDeGrupos: Record<string, string> = {\r
  bg: 'Fundos', fg: 'Texto', border: 'Bordas', action: 'Ações', field: 'Campos', feedback: 'Feedback', focus: 'Foco', progress: 'Progresso', chart: 'Gráficos',\r
};

function Semanticos({ ambiente }: { ambiente: Ambiente }) {\r
  const caminhos = Object.keys(semanticColors[ambiente.brand][ambiente.theme]);\r
  const grupos = [...new Set(caminhos.map((path) => path.split('/')[0]))].map((grupo) => ({ prefixo: \`\${grupo}/\`, nome: nomesDeGrupos[grupo] ?? grupo }));\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-40">\r
      {grupos.map(({ prefixo, nome }) => (\r
        <div key={prefixo}>\r
          <p className="ts:text-heading-s">{nome}</p>\r
          <div className="ts:mt-12 ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
            <div className="ts:grid ts:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted">\r
              <span className="ts:px-12 ts:py-8">Token</span>\r
              <span className="ts:px-12 ts:py-8">Claro</span>\r
              <span className="ts:px-12 ts:py-8">Escuro</span>\r
              <span className="ts:px-12 ts:py-8">Alto contraste</span>\r
            </div>\r
            {caminhos.filter((p) => p.startsWith(prefixo)).map((path) => (\r
              <div key={path} className="ts:grid ts:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-subtle ts:last:border-b-0">\r
                <span className="ts:flex ts:items-center ts:px-12 ts:py-8"><Codigo>{path}</Codigo></span>\r
                {[...themes.map((theme) => ({ theme, contrast: 'standard' as const, alias: semanticAliases[theme][path], cor: semanticColors[ambiente.brand][theme][path] })),\r
                  { theme: undefined, contrast: 'high' as const, alias: highContrastAliases[path], cor: highContrastColors[ambiente.brand][path] }].map((c) => (\r
                  <TesselaProvider key={c.theme ?? c.contrast} scope="element" theme={c.theme} contrast={c.contrast} className="ts:flex ts:items-center ts:gap-10 ts:bg-bg-base ts:px-12 ts:py-8 ts:text-fg-primary">\r
                    <span className="ts:size-24 ts:shrink-0 ts:rounded-sm ts:border ts:border-border-default" style={{ background: cssVar(path) }} />\r
                    <span className="ts:min-w-0">\r
                      <span className="ts:block ts:truncate ts:font-mono ts:text-caption">{c.alias}</span>\r
                      <span className="ts:block ts:font-mono ts:text-caption ts:text-fg-muted">{c.cor}</span>\r
                    </span>\r
                  </TesselaProvider>\r
                ))}\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
}

<Semanticos ambiente={ambiente} />`,id:`semanticos`,titulo:`Semânticos`,descricao:`O papel de cada cor, com o valor no tema claro, no escuro e no alto contraste. O tema padrão é monocromático: preto no claro, branco no escuro; cor só nos estados. O alto contraste (contrast="high" no provider, data-contrast no elemento do tema) vale por cima dos dois temas: superfície clara, texto e bordas pretos, foco e estados em tons escuros.`,children:(0,E.jsx)(F,{ambiente:e})}),(0,E.jsx)(x,{codigo:`import { type BrandValues, brandValues, textStyles } from '@tessela/web-tokens';

const classeTexto: Record<string, string> = {\r
  display: 'ts:text-display',\r
  'heading-xl': 'ts:text-heading-xl',\r
  'heading-l': 'ts:text-heading-l',\r
  'heading-m': 'ts:text-heading-m',\r
  'heading-s': 'ts:text-heading-s',\r
  'body-l': 'ts:text-body-l',\r
  'body-m': 'ts:text-body-m',\r
  'body-m-strong': 'ts:text-body-m-strong',\r
  'body-s': 'ts:text-body-s',\r
  'label-m': 'ts:text-label-m',\r
  'label-s': 'ts:text-label-s',\r
  caption: 'ts:text-caption',\r
  code: 'ts:text-code ts:font-mono',\r
};

const amostraTexto: Record<string, string> = {\r
  display: 'Visão geral',\r
  'heading-xl': 'Pedidos da semana',\r
  'heading-l': 'Configurações da conta',\r
  'heading-m': 'Métodos de pagamento',\r
  'heading-s': 'Endereço de cobrança',\r
  'body-l': 'O repasse de setembro foi processado e já aparece no extrato.',\r
  'body-m': 'O repasse de setembro foi processado e já aparece no extrato da conta principal.',\r
  'body-m-strong': 'Repasse processado em 25 de setembro',\r
  'body-s': 'Última sincronização às 14:32 · 1.284 registros',\r
  'label-m': 'Salvar alterações',\r
  'label-s': 'Status do pedido',\r
  caption: 'Atualizado há 3 minutos',\r
  code: 'ord_7Hk29QpLm3 · 2026-09-25T14:32:08Z',\r
};

function temValorDaMarca(chave: string, valores: BrandValues): chave is keyof BrandValues {\r
  return chave in valores;\r
}

function Tipografia({ ambiente }: { ambiente: Ambiente }) {\r
  const valoresDaMarca = brandValues[ambiente.brand];\r
  return (\r
    <div className="ts:flex ts:flex-col">\r
      {textStyles.map((estilo) => (\r
        <div key={estilo.slug} className="ts:grid ts:grid-cols-[220px_minmax(0,1fr)] ts:items-baseline ts:gap-24 ts:border-b ts:border-border-subtle ts:py-16 ts:last:border-b-0 ts:max-md:grid-cols-1 ts:max-md:gap-6">\r
          <div>\r
            <p className="ts:text-label-m">{estilo.name}</p>\r
            <p className="ts:font-mono ts:text-caption ts:text-fg-muted">\r
              {estilo.size}/{estilo.lineHeight} · {String(temValorDaMarca(estilo.weightToken, valoresDaMarca) ? valoresDaMarca[estilo.weightToken] : estilo.weight)} · {estilo.tracking}%{estilo.family === 'mono' ? ' · mono' : ''}\r
            </p>\r
          </div>\r
          <p className={classeTexto[estilo.slug]}>{amostraTexto[estilo.slug]}</p>\r
        </div>\r
      ))}\r
      <div className="ts:mt-24 ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1">\r
        {[\r
          { titulo: 'Algarismos tabulares (tabelas e indicadores)', classe: 'ts:tabular-nums' },\r
          { titulo: 'Algarismos proporcionais (texto corrido)', classe: 'ts:proportional-nums' },\r
        ].map(({ titulo, classe }) => (\r
          <div key={classe} className="ts:rounded-lg ts:border ts:border-border-default ts:p-16">\r
            <p className="ts:text-label-s ts:text-fg-muted">{titulo}</p>\r
            <div className={\`ts:mt-12 ts:flex ts:flex-col ts:items-end ts:text-body-m \${classe}\`}>\r
              <span>R$ 1.111,11</span>\r
              <span>R$ 18.480,00</span>\r
              <span>R$ 7,90</span>\r
              <span>R$ 204.019,57</span>\r
            </div>\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}

<Tipografia ambiente={ambiente} />`,id:`tipografia`,titulo:`Tipografia`,descricao:`${String(o[`font/family/sans`])} para interface e ${String(o[`font/family/mono`])} para IDs e código. Pesos, tamanho, altura de linha e espaçamento entre letras seguem a marca escolhida.`,children:(0,E.jsx)(I,{ambiente:e})}),(0,E.jsx)(x,{codigo:`import { cssVar, primitives } from '@tessela/web-tokens';

const porPrefixo = (prefixo: string) => Object.entries(primitives).filter(([p]) => p.startsWith(prefixo));

function Espaco() {\r
  return (\r
    <div className="ts:grid ts:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ts:gap-48 ts:max-md:grid-cols-1">\r
      <div className="ts:flex ts:flex-col ts:gap-8">\r
        {porPrefixo('space/').map(([path, valor]) => (\r
          <div key={path} className="ts:flex ts:items-center ts:gap-12">\r
            <span className="ts:w-80 ts:font-mono ts:text-caption ts:text-fg-muted">{path}</span>\r
            <span className="ts:h-12 ts:rounded-xs ts:bg-fg-primary" style={{ width: cssVar(path) }} />\r
            <span className="ts:text-caption ts:text-fg-secondary">{valor}</span>\r
          </div>\r
        ))}\r
      </div>\r
      <div>\r
        <p className="ts:text-label-m">Ícones</p>\r
        <div className="ts:mt-12 ts:flex ts:items-end ts:gap-24">\r
          {porPrefixo('size/icon/').map(([path, valor]) => (\r
            <div key={path} className="ts:flex ts:flex-col ts:items-center ts:gap-8">\r
              <span className="ts:rounded-xs ts:bg-fg-primary" style={{ width: cssVar(path), height: cssVar(path) }} />\r
              <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{path.split('/')[2]} · {valor}</span>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}

<Espaco />`,id:`espaco`,titulo:`Espaço e ícones`,descricao:`Escala de espaço em px. No Tailwind, o número da classe é o valor em px (p-12 = 12 px).`,children:(0,E.jsx)(R,{})}),(0,E.jsx)(x,{codigo:`import { brandValues, cssVar } from '@tessela/web-tokens';

function RaioEBorda({ ambiente }: { ambiente: Ambiente }) {\r
  const valores = brandValues[ambiente.brand];\r
  const xl = valores['radius/xl'];\r
  const control = valores['radius/control'];\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-32">\r
      <div className="ts:flex ts:flex-wrap ts:gap-24">\r
        {Object.entries(valores).filter(([p]) => p.startsWith('radius/')).map(([path, valor]) => (\r
          <div key={path} className="ts:flex ts:flex-col ts:items-center ts:gap-8">\r
            <div className="ts:size-72 ts:border ts:border-border-strong ts:bg-bg-subtle" style={{ borderRadius: cssVar(path) }} />\r
            <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{path.split('/')[1]} · {valor === 9999 ? 'pílula' : valor}</span>\r
          </div>\r
        ))}\r
      </div>\r
      <div>\r
        <p className="ts:text-label-m">Suavização de cantos</p>\r
        <p className="ts:mt-4 ts:max-w-720 ts:text-body-m ts:text-fg-secondary">\r
          Token <Codigo>corner/shape</Codigo> = <Codigo>{String(valores['corner/shape'])}</Codigo>: desligada na marca Padrão. Uma marca pode ligá-la\r
          com <Codigo>squircle</Codigo>, que faz a curva entrar no canto de forma contínua, como a suavização do Figma. Abaixo, a comparação.\r
        </p>\r
        <div className="ts:mt-16 ts:flex ts:flex-wrap ts:gap-24">\r
          {[['Redondo', ''], ['Suavizado', 'ts:[corner-shape:squircle]']].map(([nome, classe]) => (\r
            <div key={nome} className="ts:flex ts:flex-col ts:items-center ts:gap-8">\r
              <div className={\`ts:size-120 ts:rounded-xl ts:bg-fg-primary \${classe}\`} />\r
              <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{nome} · xl {String(xl)}</span>\r
            </div>\r
          ))}\r
          {[['Redondo', ''], ['Suavizado', 'ts:[corner-shape:squircle]']].map(([nome, classe]) => (\r
            <div key={'c' + nome} className="ts:flex ts:flex-col ts:items-center ts:justify-end ts:gap-8">\r
              <div className={\`ts:flex ts:h-control-height-lg ts:w-120 ts:items-center ts:justify-center ts:rounded-control ts:bg-fg-primary ts:text-label-m ts:text-fg-inverse \${classe}\`}>Salvar</div>\r
              <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{nome} · control {String(control)}</span>\r
            </div>\r
          ))}\r
        </div>\r
      </div>\r
      <div className="ts:flex ts:flex-wrap ts:gap-24">\r
        {Object.entries(valores).filter(([p]) => p.startsWith('border-width/')).map(([path, valor]) => (\r
          <div key={path} className="ts:flex ts:w-200 ts:flex-col ts:gap-8">\r
            <div className="ts:border-border-strong" style={{ borderTopWidth: cssVar(path), borderTopStyle: 'solid' }} />\r
            <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{path} · {valor}</span>\r
          </div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}

<RaioEBorda ambiente={ambiente} />`,id:`raio`,titulo:`Raio e borda`,descricao:`Controles (botões e campos) usam control (${String(o[`radius/control`])}). Cartões usam card (${String(o[`radius/card`])}); sobreposições, lg (${String(o[`radius/lg`])}).`,children:(0,E.jsx)(z,{ambiente:e})}),(0,E.jsx)(x,{id:`sombras`,titulo:`Sombras`,descricao:`No escuro a sombra quase não aparece: a borda separa as camadas.`,children:(0,E.jsx)(B,{})}),(0,E.jsx)(x,{id:`densidade`,titulo:`Densidade`,descricao:`Mesmos componentes, respiros diferentes. A compacta serve para telas cheias de dados. No toque (${_.media}), controles, itens e alvos sobem a ${_.min} px em qualquer densidade; com mouse, nada muda.`,children:(0,E.jsx)(H,{})}),(0,E.jsx)(x,{codigo:`import { primitives } from '@tessela/web-tokens';

const porPrefixo = (prefixo: string) => Object.entries(primitives).filter(([p]) => p.startsWith(prefixo));

function SoCodigo() {\r
  const tabelas: { titulo: string; prefixo: string; unidade: string }[] = [\r
    { titulo: 'Duração', prefixo: 'duration/', unidade: 'ms' },\r
    { titulo: 'Curvas', prefixo: 'easing/', unidade: '' },\r
    { titulo: 'Camadas (z-index)', prefixo: 'z-index/', unidade: '' },\r
    { titulo: 'Larguras de tela', prefixo: 'breakpoint/', unidade: 'px' },\r
    { titulo: 'Desfoque do fundo', prefixo: 'blur/', unidade: 'px' },\r
    { titulo: 'Escala de pressão', prefixo: 'scale/', unidade: '' },\r
    { titulo: 'Traço', prefixo: 'stroke/', unidade: 'px' },\r
    { titulo: 'Foco', prefixo: 'focus/', unidade: 'px' },\r
  ];\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-32">\r
      <div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1">\r
        {tabelas.map((t) => (\r
          <div key={t.prefixo} className="ts:rounded-lg ts:border ts:border-border-default">\r
            <p className="ts:border-b ts:border-border-default ts:bg-bg-subtle ts:px-12 ts:py-8 ts:text-label-s ts:text-fg-muted">{t.titulo}</p>\r
            {porPrefixo(t.prefixo).map(([path, valor]) => (\r
              <div key={path} className="ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-12 ts:py-8 ts:last:border-b-0">\r
                <Codigo>{path}</Codigo>\r
                <span className="ts:font-mono ts:text-caption ts:text-fg-secondary">{valor}{t.unidade}</span>\r
              </div>\r
            ))}\r
          </div>\r
        ))}\r
      </div>\r
      <div>\r
        <p className="ts:text-label-m">Anel de foco</p>\r
        <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">\r
          Pressione Tab para ver o anel: {String(primitives['focus/ring-width'])} px, afastado {String(primitives['focus/ring-offset'])} px, na cor <Codigo>focus/ring</Codigo>.\r
        </p>\r
        <div className="ts:mt-12 ts:flex ts:gap-12">\r
          <button type="button" className="ts:h-control-height-md ts:rounded-sm ts:bg-action-primary-bg ts:px-control-padding-x-md ts:text-label-m ts:text-action-primary-fg ts:hover:bg-action-primary-bg-hover ts:active:bg-action-primary-bg-active">Ação principal</button>\r
          <button type="button" className="ts:h-control-height-md ts:rounded-sm ts:border ts:border-action-secondary-border ts:bg-action-secondary-bg ts:px-control-padding-x-md ts:text-label-m ts:text-action-secondary-fg ts:hover:bg-action-secondary-bg-hover">Ação secundária</button>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}

<SoCodigo />`,id:`codigo`,titulo:`Movimento, camadas e foco`,descricao:`Tokens que existem só no código.`,children:(0,E.jsx)(U,{})}),(0,E.jsx)(x,{codigo:`import { TesselaProvider } from '@tessela/web';
import { contrastRules, cssVar, highContrastColors, semanticColors, themes } from '@tessela/web-tokens';

function Contraste({ ambiente }: { ambiente: Ambiente }) {\r
  const regras = [\r
    { tipo: 'Texto', ...contrastRules.text, minAlto: contrastRules.high.text },\r
    { tipo: 'Borda ou ícone de controle', ...contrastRules.nonText, minAlto: contrastRules.high.nonText },\r
  ];\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-32">\r
      {regras.map((regra) => (\r
        <div key={regra.tipo}>\r
          <p className="ts:text-heading-s">{regra.tipo} · mínimo {String(regra.min).replace('.', ',')}:1 (no alto contraste, {String(regra.minAlto).replace('.', ',')}:1)</p>\r
          <div className="ts:mt-12 ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
            <div className="ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted">\r
              <span className="ts:px-12 ts:py-8">Par</span>\r
              <span className="ts:px-12 ts:py-8">Claro</span>\r
              <span className="ts:px-12 ts:py-8">Escuro</span>\r
              <span className="ts:px-12 ts:py-8">Alto contraste</span>\r
            </div>\r
            {regra.pairs.map(([fg, bg]) => (\r
              <div key={fg + bg} className="ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] ts:border-b ts:border-border-subtle ts:last:border-b-0">\r
                <span className="ts:flex ts:flex-col ts:justify-center ts:px-12 ts:py-8"><Codigo>{fg}</Codigo><Codigo>sobre {bg}</Codigo></span>\r
                {[...themes.map((theme) => ({ theme, contrast: 'standard' as const, cores: semanticColors[ambiente.brand][theme], min: regra.min })),\r
                  { theme: undefined, contrast: 'high' as const, cores: highContrastColors[ambiente.brand], min: regra.minAlto }].map(({ theme, contrast, cores, min }) => {\r
                  const r = razao(cores[fg]!, cores[bg]!);\r
                  return (\r
                    <TesselaProvider key={theme ?? contrast} scope="element" theme={theme} contrast={contrast} className="ts:flex">\r
                      <span className="ts:flex ts:flex-1 ts:items-center ts:gap-12 ts:px-12 ts:py-8" style={{ background: cssVar(bg) }}>\r
                        {regra.tipo === 'Texto'\r
                          ? <span className="ts:text-body-m-strong" style={{ color: cssVar(fg) }}>Aa texto</span>\r
                          : <span className="ts:size-20 ts:rounded-xs ts:border-2" style={{ borderColor: cssVar(fg) }} />}\r
                        <span className="ts:rounded-xs ts:bg-bg-base ts:px-6 ts:font-mono ts:text-caption ts:tabular-nums ts:text-fg-primary">\r
                          {r.toFixed(2).replace('.', ',')}{r >= min ? '' : ' ✕'}\r
                        </span>\r
                      </span>\r
                    </TesselaProvider>\r
                  );\r
                })}\r
              </div>\r
            ))}\r
          </div>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
}

<Contraste ambiente={ambiente} />`,id:`contraste`,titulo:`Contraste`,descricao:`${n} pares por tema e no alto contraste, verificados pelo pnpm verify em todas as marcas. Abaixo do mínimo, a verificação falha.`,children:(0,E.jsx)(W,{ambiente:e})})]})}export{G as Fundacao};