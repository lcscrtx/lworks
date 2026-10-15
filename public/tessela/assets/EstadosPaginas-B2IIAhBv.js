import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,sr as i,vi as a}from"./Codigo-Dgz1In5l.js";import{n as o,t as s}from"./lock-CWUAxqKX.js";import{t as c}from"./Input-BBFu0gZj.js";import{n as l,t as u}from"./search-x-2-iMI7t4.js";import{t as d}from"./plus-BCNg58Vj.js";import{t as f}from"./refresh-cw-DF2oHPTV.js";import{s as p}from"./tiptap-jvs8iIPE.js";import{t as m}from"./Avatar-CrcIbTIP.js";import{a as h,s as g}from"./Estrutura-Bg5zrcqs.js";import{t as _}from"./Badge-g4zT1uda.js";import{_ as v,at as y,b,f as x,g as S,h as C,it as w,mn as T,ot as E,p as D,rt as O,y as k}from"./index-3SU4ioj-.js";var A={name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]};A.node;var j=a(A),M=e(t(),1),N=p();function P({itens:e}){return(0,N.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,N.jsx)(`li`,{children:e},t))})}function F({children:e}){return(0,N.jsx)(`p`,{className:`ts:mb-12 ts:text-label-s ts:text-fg-muted`,children:e})}var I=[{id:1042,cliente:`Ana Souza`,total:`R$ 184,90`,status:`Pago`},{id:1041,cliente:`Bruno Lima`,total:`R$ 62,00`,status:`Pendente`},{id:1040,cliente:`Carla Dias`,total:`R$ 309,50`,status:`Pago`}];function L(){let[e,t]=(0,M.useState)(`café gelado`),n=I.filter(t=>`${t.id} ${t.cliente}`.toLowerCase().includes(e.trim().toLowerCase()));return(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-24`,children:[(0,N.jsx)(g,{title:`Pedidos`,actions:(0,N.jsx)(i,{leadingIcon:d,children:`Novo pedido`}),children:(0,N.jsx)(c,{"aria-label":`Buscar pedidos`,leadingIcon:T,placeholder:`Buscar por número ou cliente`,value:e,onChange:e=>t(e.target.value)})}),(0,N.jsx)(h,{flush:!0,children:n.length>0?(0,N.jsx)(`ul`,{className:`ts:flex ts:flex-col ts:text-body-m`,children:n.map(e=>(0,N.jsxs)(`li`,{className:`ts:grid ts:grid-cols-[72px_minmax(0,1fr)_auto_auto] ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0`,children:[(0,N.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.id]}),(0,N.jsx)(`span`,{className:`ts:truncate`,children:e.cliente}),(0,N.jsx)(`span`,{className:`ts:tabular-nums`,children:e.total}),(0,N.jsx)(_,{tone:e.status===`Pago`?`success`:`warning`,children:e.status})]},e.id))}):(0,N.jsx)(O,{size:`sm`,icon:u,title:`Nenhum pedido para “${e.trim()}”`,description:`Confira a grafia ou busque pelo número do pedido.`,actions:(0,N.jsx)(i,{size:`sm`,variant:`secondary`,onClick:()=>t(``),children:`Limpar busca`})})})]})}function R(){return(0,N.jsxs)(`article`,{children:[(0,N.jsx)(x,{etapa:`Componente 21 · aprovado`,titulo:`EmptyState`,descricao:(0,N.jsx)(N.Fragment,{children:`O lugar de um conteúdo que ainda não existe ou que a busca não achou. Diz o que aconteceu e o que fazer a seguir, com a ação ao alcance.`})}),(0,N.jsx)(S,{codigo:`import { Button, Card, EmptyState } from '@tessela/web';
import { CloudOff, FileUp, Inbox, Lock, Plus, RefreshCw, SearchX } from 'lucide-react';

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Card><EmptyState icon={Inbox} title="Nenhum pedido ainda" description="Os pedidos feitos no cardápio aparecem aqui assim que chegarem." actions={<><Button leadingIcon={Plus}>Criar pedido</Button><Button variant="secondary" leadingIcon={FileUp}>Importar planilha</Button></>} /></Card>\r
  <Card><EmptyState icon={SearchX} title="Nenhum resultado para “café gelado”" description="Confira a grafia ou tire alguns filtros." actions={<Button variant="secondary">Limpar filtros</Button>} /></Card>\r
  <Card><EmptyState icon={CloudOff} title="Não foi possível carregar os pedidos" description="A conexão com o servidor caiu. Os dados não foram perdidos." actions={<Button variant="secondary" leadingIcon={RefreshCw}>Tentar de novo</Button>} /></Card>\r
  <Card><EmptyState icon={Lock} title="Você não tem acesso a Relatórios" description="Peça acesso a quem administra a loja." actions={<Button variant="secondary">Pedir acesso</Button>} /></Card>\r
</div>`,id:`situacoes`,titulo:`Situações`,descricao:`Quatro situações comuns no admin. O ícone resume; o título diz o que houve; a descrição, o próximo passo.`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,N.jsx)(h,{children:(0,N.jsx)(O,{icon:l,title:`Nenhum pedido ainda`,description:`Os pedidos feitos no cardápio aparecem aqui assim que chegarem.`,actions:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{leadingIcon:d,children:`Criar pedido`}),(0,N.jsx)(i,{variant:`secondary`,leadingIcon:j,children:`Importar planilha`})]})})}),(0,N.jsx)(h,{children:(0,N.jsx)(O,{icon:u,title:`Nenhum resultado para “café gelado”`,description:`Confira a grafia ou tire alguns filtros.`,actions:(0,N.jsx)(i,{variant:`secondary`,children:`Limpar filtros`})})}),(0,N.jsx)(h,{children:(0,N.jsx)(O,{icon:o,title:`Não foi possível carregar os pedidos`,description:`A conexão com o servidor caiu. Os dados não foram perdidos.`,actions:(0,N.jsx)(i,{variant:`secondary`,leadingIcon:f,children:`Tentar de novo`})})}),(0,N.jsx)(h,{children:(0,N.jsx)(O,{icon:s,title:`Você não tem acesso a Relatórios`,description:`Peça acesso a quem administra a loja.`,actions:(0,N.jsx)(i,{variant:`secondary`,children:`Pedir acesso`})})})]})}),(0,N.jsx)(S,{codigo:`import { Button, Card, EmptyState } from '@tessela/web';
import { Inbox, Plus } from 'lucide-react';
import { type ReactNode } from 'react';

function Rotulo({ children }: { children: ReactNode }) {\r
  return <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">{children}</p>;\r
}

<div className="ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1">\r
  <div><Rotulo>md</Rotulo><Card><EmptyState icon={Inbox} title="Nenhum produto" description="Cadastre o primeiro produto do cardápio." actions={<Button leadingIcon={Plus}>Novo produto</Button>} /></Card></div>\r
  <div className="ts:flex ts:flex-col ts:gap-16">\r
    <div><Rotulo>sm, dentro de um Card com título</Rotulo><Card title="Avaliações" description="Últimos 30 dias"><EmptyState size="sm" headingLevel={3} icon={Inbox} title="Nenhuma avaliação" description="Elas aparecem depois das primeiras entregas." /></Card></div>\r
    <div><Rotulo>sm, sem ícone</Rotulo><Card><EmptyState size="sm" title="Nenhuma nota fiscal" actions={<Button size="sm" variant="secondary">Emitir nota</Button>} /></Card></div>\r
  </div>\r
</div>`,id:`tamanhos`,titulo:`Tamanhos`,descricao:`md ocupa a área principal da página; sm fica dentro de um Card ou de uma tabela. Sem ícone também funciona.`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`md`}),(0,N.jsx)(h,{children:(0,N.jsx)(O,{icon:l,title:`Nenhum produto`,description:`Cadastre o primeiro produto do cardápio.`,actions:(0,N.jsx)(i,{leadingIcon:d,children:`Novo produto`})})})]}),(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`sm, dentro de um Card com título`}),(0,N.jsx)(h,{title:`Avaliações`,description:`Últimos 30 dias`,children:(0,N.jsx)(O,{size:`sm`,headingLevel:3,icon:l,title:`Nenhuma avaliação`,description:`Elas aparecem depois das primeiras entregas.`})})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`sm, sem ícone`}),(0,N.jsx)(h,{children:(0,N.jsx)(O,{size:`sm`,title:`Nenhuma nota fiscal`,actions:(0,N.jsx)(i,{size:`sm`,variant:`secondary`,children:`Emitir nota`})})})]})]})]})}),(0,N.jsx)(S,{id:`temas`,titulo:`Temas e densidades`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,N.jsx)(C,{theme:e,titulo:b[e],children:(0,N.jsx)(h,{children:(0,N.jsx)(O,{size:`sm`,icon:l,title:`Nenhum pedido ainda`,description:`Eles aparecem aqui assim que chegarem.`,actions:(0,N.jsx)(i,{size:`sm`,leadingIcon:d,children:`Criar pedido`})})})},e)),n.map(e=>(0,N.jsx)(C,{density:e,titulo:k[e],children:(0,N.jsx)(h,{children:(0,N.jsx)(O,{size:`sm`,icon:u,title:`Nenhum resultado`,actions:(0,N.jsx)(i,{size:`sm`,variant:`secondary`,children:`Limpar filtros`})})})},e))]})}),(0,N.jsx)(S,{codigo:`import { Badge, Button, Card, EmptyState, Input, PageHeader } from '@tessela/web';
import { Plus, Search, SearchX } from 'lucide-react';
import { useState } from 'react';

const pedidos = [\r
  { id: 1042, cliente: 'Ana Souza', total: 'R$ 184,90', status: 'Pago' },\r
  { id: 1041, cliente: 'Bruno Lima', total: 'R$ 62,00', status: 'Pendente' },\r
  { id: 1040, cliente: 'Carla Dias', total: 'R$ 309,50', status: 'Pago' },\r
];

function BuscaDePedidos() {\r
  const [busca, setBusca] = useState('café gelado');\r
  const achados = pedidos.filter((p) => \`\${p.id} \${p.cliente}\`.toLowerCase().includes(busca.trim().toLowerCase()));\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-24">\r
      <PageHeader title="Pedidos" actions={<Button leadingIcon={Plus}>Novo pedido</Button>}>\r
        <Input aria-label="Buscar pedidos" leadingIcon={Search} placeholder="Buscar por número ou cliente" value={busca} onChange={(e) => setBusca(e.target.value)} />\r
      </PageHeader>\r
      <Card flush>\r
        {achados.length > 0 ? (\r
          <ul className="ts:flex ts:flex-col ts:text-body-m">\r
            {achados.map((p) => (\r
              <li key={p.id} className="ts:grid ts:grid-cols-[72px_minmax(0,1fr)_auto_auto] ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
                <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{p.id}</span>\r
                <span className="ts:truncate">{p.cliente}</span>\r
                <span className="ts:tabular-nums">{p.total}</span>\r
                <Badge tone={p.status === 'Pago' ? 'success' : 'warning'}>{p.status}</Badge>\r
              </li>\r
            ))}\r
          </ul>\r
        ) : (\r
          <EmptyState\r
            size="sm"\r
            icon={SearchX}\r
            title={\`Nenhum pedido para “\${busca.trim()}”\`}\r
            description="Confira a grafia ou busque pelo número do pedido."\r
            actions={<Button size="sm" variant="secondary" onClick={() => setBusca('')}>Limpar busca</Button>}\r
          />\r
        )}\r
      </Card>\r
    </div>\r
  );\r
}

<BuscaDePedidos />`,id:`em-uso`,titulo:`Em uso`,descricao:`Busque um cliente da lista (Ana, Bruno, Carla) ou algo que não existe.`,children:(0,N.jsx)(L,{})}),(0,N.jsx)(S,{semCaixa:!0,id:`escrita`,titulo:`Como escrever`,children:(0,N.jsx)(P,{itens:[(0,N.jsx)(N.Fragment,{children:`Título: o que aconteceu, sem culpar ninguém. “Nenhum pedido ainda”, não “Você não tem pedidos”.`}),(0,N.jsx)(N.Fragment,{children:`Na busca, repita o termo: “Nenhum resultado para ‘café gelado’”.`}),(0,N.jsx)(N.Fragment,{children:`Descrição: o próximo passo possível, numa frase.`}),(0,N.jsx)(N.Fragment,{children:`Ação: o verbo do que resolve (“Criar pedido”, “Limpar filtros”, “Tentar de novo”).`}),(0,N.jsx)(N.Fragment,{children:`Erro que impede a tarefa pede o que a pessoa pode fazer e se algo se perdeu.`})]})}),(0,N.jsx)(S,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,N.jsx)(v,{itens:[{nome:`icon`,tipo:`IconComponent`,descricao:`Ícone que resume a situação. Decorativo.`},{nome:`title`,tipo:`ReactNode`,descricao:`Obrigatório. O que aconteceu.`},{nome:`description`,tipo:`ReactNode`,descricao:`O próximo passo.`},{nome:`actions`,tipo:`ReactNode`,descricao:`Botões; a ação principal primeiro.`},{nome:`size`,tipo:`'sm' | 'md'`,padrao:`'md'`,descricao:`md na página; sm em Card ou tabela.`},{nome:`headingLevel`,tipo:`2 | 3 | 4`,padrao:`2`,descricao:`Nível do título. Dentro de um Card com título, use 3.`}]})}),(0,N.jsx)(S,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,N.jsx)(P,{itens:[(0,N.jsx)(N.Fragment,{children:`O título é um heading de verdade; o ícone fica escondido do leitor de tela.`}),(0,N.jsx)(N.Fragment,{children:`Numa busca, anuncie o número de resultados numa região de status (a Tabela fará isso); o estado vazio sozinho não é anunciado ao aparecer.`}),(0,N.jsx)(N.Fragment,{children:`O texto não depende do ícone: sem ele, a mensagem continua completa.`})]})})]})}function z({p:e}){return(0,N.jsxs)(`li`,{className:`ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0`,children:[(0,N.jsx)(m,{name:e.cliente,size:`md`}),(0,N.jsxs)(`div`,{className:`ts:min-w-0 ts:flex-1`,children:[(0,N.jsx)(`p`,{className:`ts:truncate ts:text-body-m`,children:e.cliente}),(0,N.jsxs)(`p`,{className:`ts:truncate ts:text-body-s ts:text-fg-secondary`,children:[`Pedido #`,e.id,` · `,e.total]})]}),(0,N.jsx)(_,{tone:e.status===`Pago`?`success`:`warning`,children:e.status})]})}function B(){return(0,N.jsxs)(`li`,{className:`ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0`,children:[(0,N.jsx)(y,{shape:`circle`,className:`ts:size-32 ts:shrink-0`}),(0,N.jsxs)(`div`,{className:`ts:min-w-0 ts:flex-1`,children:[(0,N.jsx)(E,{lines:1,className:`ts:w-160`}),(0,N.jsx)(E,{lines:1,size:`body-s`,className:`ts:w-120`})]}),(0,N.jsx)(y,{className:`ts:h-20 ts:w-48 ts:rounded-full`})]})}function V(){let[e,t]=(0,M.useState)(!0);return(0,M.useEffect)(()=>{if(!e)return;let n=setTimeout(()=>t(!1),1800);return()=>clearTimeout(n)},[e]),(0,N.jsx)(h,{title:`Últimos pedidos`,actions:(0,N.jsx)(i,{size:`sm`,variant:`secondary`,leadingIcon:f,disabled:e,onClick:()=>t(!0),children:`Recarregar`}),flush:!0,children:(0,N.jsx)(w,{loading:e,label:`Carregando pedidos`,fallback:(0,N.jsx)(`ul`,{children:I.map(e=>(0,N.jsx)(B,{},e.id))}),children:(0,N.jsx)(`ul`,{children:I.map(e=>(0,N.jsx)(z,{p:e},e.id))})})})}function H(){return(0,N.jsxs)(h,{children:[(0,N.jsx)(E,{lines:1,size:`body-s`,className:`ts:w-96`}),(0,N.jsx)(y,{className:`ts:mt-8 ts:h-28 ts:w-160`}),(0,N.jsx)(E,{lines:1,size:`body-s`,className:`ts:mt-4 ts:w-120`})]})}function U(){return(0,N.jsxs)(`article`,{children:[(0,N.jsx)(x,{etapa:`Componente 22 · aprovado`,titulo:`Skeleton`,descricao:(0,N.jsxs)(N.Fragment,{children:[`Blocos cinza no lugar do conteúdo enquanto ele carrega, com a mesma forma dele: a página não pula quando os dados chegam. O `,(0,N.jsx)(D,{children:`Loading`}),` faz a troca e avisa o leitor de tela.`]})}),(0,N.jsx)(S,{codigo:`import { Skeleton, SkeletonText } from '@tessela/web';
import { type ReactNode } from 'react';

function Rotulo({ children }: { children: ReactNode }) {\r
  return <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">{children}</p>;\r
}

<div className="ts:grid ts:grid-cols-3 ts:items-start ts:gap-24 ts:max-lg:grid-cols-1">\r
  <div><Rotulo>Skeleton (bloco e círculo)</Rotulo><div className="ts:flex ts:items-center ts:gap-12"><Skeleton shape="circle" className="ts:size-32" /><Skeleton className="ts:h-32 ts:w-120" /></div></div>\r
  <div><Rotulo>SkeletonText · body-m, 3 linhas</Rotulo><SkeletonText lines={3} /></div>\r
  <div><Rotulo>SkeletonText · heading-s e body-s</Rotulo><SkeletonText lines={1} size="heading-s" className="ts:w-2/3" /><SkeletonText lines={2} size="body-s" className="ts:mt-4" /></div>\r
</div>`,id:`pecas`,titulo:`Peças`,descricao:`Pulsam devagar (2 s). Com movimento reduzido, ficam paradas. As linhas de texto têm a altura do texto que vão substituir.`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:items-start ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`Skeleton (bloco e círculo)`}),(0,N.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-12`,children:[(0,N.jsx)(y,{shape:`circle`,className:`ts:size-32`}),(0,N.jsx)(y,{className:`ts:h-32 ts:w-120`})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`SkeletonText · body-m, 3 linhas`}),(0,N.jsx)(E,{lines:3})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(F,{children:`SkeletonText · heading-s e body-s`}),(0,N.jsx)(E,{lines:1,size:`heading-s`,className:`ts:w-2/3`}),(0,N.jsx)(E,{lines:2,size:`body-s`,className:`ts:mt-4`})]})]})}),(0,N.jsx)(S,{codigo:`import { Card, Skeleton, SkeletonText } from '@tessela/web';

const pedidos = [\r
  { id: 1042, cliente: 'Ana Souza', total: 'R$ 184,90', status: 'Pago' },\r
  { id: 1041, cliente: 'Bruno Lima', total: 'R$ 62,00', status: 'Pendente' },\r
  { id: 1040, cliente: 'Carla Dias', total: 'R$ 309,50', status: 'Pago' },\r
];

function LinhaCarregando() {\r
  return (\r
    <li className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0">\r
      <Skeleton shape="circle" className="ts:size-32 ts:shrink-0" />\r
      <div className="ts:min-w-0 ts:flex-1">\r
        <SkeletonText lines={1} className="ts:w-160" />\r
        <SkeletonText lines={1} size="body-s" className="ts:w-120" />\r
      </div>\r
      <Skeleton className="ts:h-20 ts:w-48 ts:rounded-full" />\r
    </li>\r
  );\r
}

function IndicadorCarregando() {\r
  return (\r
    <Card>\r
      <SkeletonText lines={1} size="body-s" className="ts:w-96" />\r
      <Skeleton className="ts:mt-8 ts:h-28 ts:w-160" />\r
      <SkeletonText lines={1} size="body-s" className="ts:mt-4 ts:w-120" />\r
    </Card>\r
  );\r
}

<div className="ts:grid ts:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] ts:items-start ts:gap-16 ts:max-lg:grid-cols-1">\r
  <div className="ts:flex ts:flex-col ts:gap-16"><IndicadorCarregando /><IndicadorCarregando /></div>\r
  <Card title="Últimos pedidos" flush><ul>{pedidos.map((p) => <LinhaCarregando key={p.id} />)}</ul></Card>\r
</div>`,id:`composicoes`,titulo:`Composições`,descricao:`Monte o esqueleto com o mesmo layout do conteúdo real: mesmas margens, mesmas alturas.`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] ts:items-start ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,N.jsx)(H,{}),(0,N.jsx)(H,{})]}),(0,N.jsx)(h,{title:`Últimos pedidos`,flush:!0,children:(0,N.jsx)(`ul`,{children:I.map(e=>(0,N.jsx)(B,{},e.id))})})]})}),(0,N.jsx)(S,{id:`temas`,titulo:`Temas e densidades`,children:(0,N.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,N.jsx)(C,{theme:e,titulo:b[e],children:(0,N.jsx)(h,{title:`Últimos pedidos`,flush:!0,children:(0,N.jsx)(`ul`,{children:I.slice(0,2).map(e=>(0,N.jsx)(B,{},e.id))})})},e)),n.map(e=>(0,N.jsx)(C,{density:e,titulo:k[e],children:(0,N.jsx)(H,{})},e))]})}),(0,N.jsx)(S,{codigo:`import { Avatar, Badge, Button, Card, Loading, Skeleton, SkeletonText } from '@tessela/web';
import { RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

const pedidos = [\r
  { id: 1042, cliente: 'Ana Souza', total: 'R$ 184,90', status: 'Pago' },\r
  { id: 1041, cliente: 'Bruno Lima', total: 'R$ 62,00', status: 'Pendente' },\r
  { id: 1040, cliente: 'Carla Dias', total: 'R$ 309,50', status: 'Pago' },\r
];

function LinhaDePedido({ p }: { p: (typeof pedidos)[number] }) {\r
  return (\r
    <li className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0">\r
      <Avatar name={p.cliente} size="md" />\r
      <div className="ts:min-w-0 ts:flex-1">\r
        <p className="ts:truncate ts:text-body-m">{p.cliente}</p>\r
        <p className="ts:truncate ts:text-body-s ts:text-fg-secondary">Pedido #{p.id} · {p.total}</p>\r
      </div>\r
      <Badge tone={p.status === 'Pago' ? 'success' : 'warning'}>{p.status}</Badge>\r
    </li>\r
  );\r
}

function LinhaCarregando() {\r
  return (\r
    <li className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0">\r
      <Skeleton shape="circle" className="ts:size-32 ts:shrink-0" />\r
      <div className="ts:min-w-0 ts:flex-1">\r
        <SkeletonText lines={1} className="ts:w-160" />\r
        <SkeletonText lines={1} size="body-s" className="ts:w-120" />\r
      </div>\r
      <Skeleton className="ts:h-20 ts:w-48 ts:rounded-full" />\r
    </li>\r
  );\r
}

function PedidosCarregando() {\r
  const [carregando, setCarregando] = useState(true);\r
  useEffect(() => {\r
    if (!carregando) return;\r
    const t = setTimeout(() => setCarregando(false), 1800);\r
    return () => clearTimeout(t);\r
  }, [carregando]);\r
  return (\r
    <Card title="Últimos pedidos" actions={<Button size="sm" variant="secondary" leadingIcon={RefreshCw} disabled={carregando} onClick={() => setCarregando(true)}>Recarregar</Button>} flush>\r
      <Loading loading={carregando} label="Carregando pedidos" fallback={<ul>{pedidos.map((p) => <LinhaCarregando key={p.id} />)}</ul>}>\r
        <ul>{pedidos.map((p) => <LinhaDePedido key={p.id} p={p} />)}</ul>\r
      </Loading>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-560"><PedidosCarregando /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Carrega por 1,8 s ao abrir e ao recarregar. Compare as linhas carregando e carregadas: a altura não muda.`,children:(0,N.jsx)(`div`,{className:`ts:max-w-560`,children:(0,N.jsx)(V,{})})}),(0,N.jsx)(S,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,N.jsx)(`p`,{className:`ts:text-label-m`,children:`Skeleton e SkeletonText`}),(0,N.jsx)(v,{rotulo:`Tabela de propriedades de Skeleton e SkeletonText`,itens:[{nome:`Skeleton · shape`,tipo:`'rect' | 'circle'`,padrao:`'rect'`,descricao:`Bloco ou círculo. Tamanho pela className (h-16 w-120, size-32).`},{nome:`SkeletonText · lines`,tipo:`number`,padrao:`3`,descricao:`Linhas; a última é mais curta.`},{nome:`SkeletonText · size`,tipo:`'body-m' | 'body-s' | 'heading-s'`,padrao:`'body-m'`,descricao:`Altura das linhas igual à do texto real.`}]})]}),(0,N.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,N.jsx)(`p`,{className:`ts:text-label-m`,children:`Loading`}),(0,N.jsx)(v,{rotulo:`Tabela de propriedades do Loading`,itens:[{nome:`loading`,tipo:`boolean`,descricao:`Carregando: mostra fallback e marca a área com aria-busy.`},{nome:`fallback`,tipo:`ReactNode`,descricao:`Os Skeletons, com a forma do conteúdo.`},{nome:`label`,tipo:`string`,padrao:`Carregando`,descricao:`O que o leitor de tela ouve (“Carregando pedidos”).`}]})]})]})}),(0,N.jsx)(S,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,N.jsx)(P,{itens:[(0,N.jsxs)(N.Fragment,{children:[`Os blocos ficam escondidos do leitor de tela; quem avisa é o `,(0,N.jsx)(D,{children:`Loading`}),`, com uma região de status que fala “Carregando” e fica vazia quando termina.`]}),(0,N.jsxs)(N.Fragment,{children:[`A área que carrega recebe `,(0,N.jsx)(D,{children:`aria-busy`}),`.`]}),(0,N.jsx)(N.Fragment,{children:`Com movimento reduzido, os blocos não pulsam.`}),(0,N.jsx)(N.Fragment,{children:`Para carregamentos rápidos, espere uns 300 ms antes de mostrar o esqueleto, para não piscar.`})]})})]})}export{R as EmptyStatePagina,U as SkeletonPagina};