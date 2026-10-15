import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,sr as i,vi as a}from"./Codigo-Dgz1In5l.js";import{n as o,r as s,t as c}from"./users-e24AnW8x.js";import{t as l}from"./package-D-m41Piz.js";import{t as u}from"./settings-CXCnt7U2.js";import{t as d}from"./user-plus-D6nWujPv.js";import{s as f}from"./tiptap-jvs8iIPE.js";import{A as p,F as m,V as h,_ as g,b as _,dt as v,f as y,g as b,h as x,k as S,mn as C,p as w,q as T,v as E,y as D}from"./index-3SU4ioj-.js";var O={name:`file-plus-corner`,size:24,node:[[`path`,{d:`M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35`,key:`17jvcc`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M14 19h6`,key:`bvotb8`}],[`path`,{d:`M17 16v6`,key:`18yu1i`}]],aliases:[`file-plus-2`]};O.node;var k=a(O),A=e(t(),1),j=f(),M=`Nova na 2.3.0.`;function N({itens:e}){return(0,j.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})}function P(){let e=v(),t=t=>()=>e.show({title:`Abrindo ${t}`});return[{id:`pedidos`,label:`Pedidos`,group:`Páginas`,icon:s,keywords:[`vendas`,`compras`],onSelect:t(`Pedidos`)},{id:`clientes`,label:`Clientes`,group:`Páginas`,icon:c,onSelect:t(`Clientes`)},{id:`produtos`,label:`Produtos`,group:`Páginas`,icon:l,keywords:[`cardápio`,`estoque`],onSelect:t(`Produtos`)},{id:`relatorios`,label:`Relatórios`,group:`Páginas`,icon:o,onSelect:t(`Relatórios`)},{id:`ajustes`,label:`Configurações`,group:`Páginas`,icon:u,keywords:[`preferências`],onSelect:t(`Configurações`)},{id:`novo-pedido`,label:`Novo pedido`,group:`Ações`,icon:k,shortcut:[`N`],onSelect:t(`Novo pedido`)},{id:`convidar`,label:`Convidar pessoa para a equipe`,group:`Ações`,icon:d,onSelect:t(`Convite`)},{id:`p1042`,label:`Pedido #1042`,group:`Recentes`,description:`Ana Souza · R$ 184,90`,icon:s,onSelect:t(`Pedido #1042`)},{id:`p1041`,label:`Pedido #1041`,group:`Recentes`,description:`Bruno Lima · R$ 62,00`,icon:s,onSelect:t(`Pedido #1041`)}]}function F({rotulo:e,...t}){let[n,r]=(0,A.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i,{variant:`secondary`,leadingIcon:C,onClick:()=>r(!0),children:e}),(0,j.jsx)(m,{...t,open:n,onOpenChange:r,shortcut:!1})]})}function I(){let e=P();return(0,j.jsx)(F,{rotulo:`Abrir a busca do admin`,items:e})}var L=e=>e.normalize(`NFD`).replace(/\p{Diacritic}/gu,``).toLocaleLowerCase(),R=[`Ana Souza`,`Bruno Lima`,`Carla Dias`,`Daniel Rocha`,`Eduarda Nunes`,`Fábio Alves`,`Gabriela Souza`,`Heitor Lima`];function z(){let e=v(),[t,n]=(0,A.useState)([]),[r,i]=(0,A.useState)(!1),a=(0,A.useRef)(void 0);return(0,A.useEffect)(()=>()=>clearTimeout(a.current),[]),(0,j.jsx)(F,{rotulo:`Buscar clientes no servidor`,placeholder:`Nome do cliente`,items:t,filter:null,loading:r,onQueryChange:t=>{clearTimeout(a.current);let r=L(t.trim());if(!r){n([]),i(!1);return}i(!0),a.current=setTimeout(()=>{let t=R.filter(e=>L(e).includes(r)).sort((e,t)=>Number(!L(e).startsWith(r))-Number(!L(t).startsWith(r)));n(t.map(t=>({id:t,label:t,group:`Clientes`,icon:c,onSelect:()=>e.show({title:`Abrindo ${t}`})}))),i(!1)},700)}})}function B(){let e=P();return(0,j.jsx)(F,{rotulo:`Buscar pelo começo do nome`,items:e,filter:(e,t)=>L(e.label).startsWith(L(t.trim()))})}function V(){let e=P(),[t,n]=(0,A.useState)([`tudo`]),r=t[0]===`tudo`?e:e.filter(e=>e.group===t[0]);return(0,j.jsx)(F,{rotulo:`Abrir a busca com escopo`,items:r,header:(0,j.jsxs)(S,{"aria-label":`Onde buscar`,size:`sm`,value:t,onValueChange:e=>e.length>0&&n(e),children:[(0,j.jsx)(p,{value:`tudo`,children:`Tudo`}),(0,j.jsx)(p,{value:`Páginas`,children:`Páginas`}),(0,j.jsx)(p,{value:`Ações`,children:`Ações`})]})})}function H(){return(0,j.jsx)(F,{rotulo:`Abrir a busca carregando`,items:[],loading:!0})}function U(){let e=T();return(0,j.jsxs)(`article`,{children:[(0,j.jsx)(y,{etapa:`Componente 32 · no catálogo`,titulo:`CommandPalette`,descricao:(0,j.jsxs)(j.Fragment,{children:[`Busca rápida (⌘K): encontra páginas, ações e registros pelo nome ou por palavras-chave, sem acento e sem diferença de maiúsculas. O `,(0,j.jsx)(w,{children:`SidebarSearch`}),` é o botão que abre a busca na barra lateral.`]})}),(0,j.jsx)(b,{codigo:`import { Button, type CommandItem, CommandPalette, type CommandPaletteProps, Kbd, useToast } from '@tessela/web';
import { BarChart3, Box, FilePlus2, Package, Search, Settings, UserPlus, Users } from 'lucide-react';
import { useState } from 'react';

function useItensDoAdmin(): CommandItem[] {\r
  const toast = useToast();\r
  const ir = (onde: string) => () => toast.show({ title: \`Abrindo \${onde}\` });\r
  return [\r
    { id: 'pedidos', label: 'Pedidos', group: 'Páginas', icon: Box, keywords: ['vendas', 'compras'], onSelect: ir('Pedidos') },\r
    { id: 'clientes', label: 'Clientes', group: 'Páginas', icon: Users, onSelect: ir('Clientes') },\r
    { id: 'produtos', label: 'Produtos', group: 'Páginas', icon: Package, keywords: ['cardápio', 'estoque'], onSelect: ir('Produtos') },\r
    { id: 'relatorios', label: 'Relatórios', group: 'Páginas', icon: BarChart3, onSelect: ir('Relatórios') },\r
    { id: 'ajustes', label: 'Configurações', group: 'Páginas', icon: Settings, keywords: ['preferências'], onSelect: ir('Configurações') },\r
    { id: 'novo-pedido', label: 'Novo pedido', group: 'Ações', icon: FilePlus2, shortcut: ['N'], onSelect: ir('Novo pedido') },\r
    { id: 'convidar', label: 'Convidar pessoa para a equipe', group: 'Ações', icon: UserPlus, onSelect: ir('Convite') },\r
    { id: 'p1042', label: 'Pedido #1042', group: 'Recentes', description: 'Ana Souza · R$ 184,90', icon: Box, onSelect: ir('Pedido #1042') },\r
    { id: 'p1041', label: 'Pedido #1041', group: 'Recentes', description: 'Bruno Lima · R$ 62,00', icon: Box, onSelect: ir('Pedido #1041') },\r
  ];\r
}

function AbrirBusca({ rotulo, ...props }: { rotulo: string } & Omit<CommandPaletteProps, 'open' | 'onOpenChange'>) {\r
  const [aberta, setAberta] = useState(false);\r
  return (\r
    <>\r
      <Button variant="secondary" leadingIcon={Search} onClick={() => setAberta(true)}>{rotulo}</Button>\r
      <CommandPalette {...props} open={aberta} onOpenChange={setAberta} shortcut={false} />\r
    </>\r
  );\r
}

function BuscaDoAdmin() {\r
  const itens = useItensDoAdmin();\r
  return <AbrirBusca rotulo="Abrir a busca do admin" items={itens} />;\r
}

<div className="ts:flex ts:flex-col ts:gap-16">\r
  <p className="ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary">Busca do catálogo: <span className="ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>K</Kbd></span></p>\r
  <div className="ts:flex ts:flex-col ts:gap-8">\r
    <p className="ts:text-body-m ts:text-fg-secondary">Busca de um admin, com grupos, ícones, descrição e atalho. Tente “vendas” ou “cardapio”.</p>\r
    <div><BuscaDoAdmin /></div>\r
  </div>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`O catálogo inteiro usa a busca: aperte ⌘K (Ctrl+K fora do Mac) em qualquer página, ou use o botão no alto da navegação, para ir a um componente ou trocar tema e densidade.`,children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,j.jsxs)(`p`,{className:`ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary`,children:[`Busca do catálogo: `,(0,j.jsxs)(`span`,{className:`ts:inline-flex ts:gap-2`,children:[(0,j.jsx)(h,{children:e}),(0,j.jsx)(h,{children:`K`})]})]}),(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`Busca de um admin, com grupos, ícones, descrição e atalho. Tente “vendas” ou “cardapio”.`}),(0,j.jsx)(`div`,{children:(0,j.jsx)(I,{})})]})]})}),(0,j.jsx)(b,{codigo:`import { Button, type CommandItem, CommandPalette, type CommandPaletteProps, useToast } from '@tessela/web';
import { Search, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AbrirBusca({ rotulo, ...props }: { rotulo: string } & Omit<CommandPaletteProps, 'open' | 'onOpenChange'>) {\r
  const [aberta, setAberta] = useState(false);\r
  return (\r
    <>\r
      <Button variant="secondary" leadingIcon={Search} onClick={() => setAberta(true)}>{rotulo}</Button>\r
      <CommandPalette {...props} open={aberta} onOpenChange={setAberta} shortcut={false} />\r
    </>\r
  );\r
}

const normalizar = (t: string) => t.normalize('NFD').replace(/\\p{Diacritic}/gu, '').toLocaleLowerCase();

const clientesDoServidor = [\r
  'Ana Souza', 'Bruno Lima', 'Carla Dias', 'Daniel Rocha', 'Eduarda Nunes', 'Fábio Alves', 'Gabriela Souza', 'Heitor Lima',\r
];

function BuscaNoServidor() {\r
  const toast = useToast();\r
  const [itens, setItens] = useState<CommandItem[]>([]);\r
  const [carregando, setCarregando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const buscar = (busca: string) => {\r
    clearTimeout(espera.current);\r
    const q = normalizar(busca.trim());\r
    if (!q) { setItens([]); setCarregando(false); return; }\r
    setCarregando(true);\r
    espera.current = setTimeout(() => {\r
      // O servidor devolve primeiro quem começa com o texto, depois quem o contém.\r
      const achados = clientesDoServidor\r
        .filter((nome) => normalizar(nome).includes(q))\r
        .sort((a, b) => Number(!normalizar(a).startsWith(q)) - Number(!normalizar(b).startsWith(q)));\r
      setItens(achados.map((nome) => ({ id: nome, label: nome, group: 'Clientes', icon: Users, onSelect: () => toast.show({ title: \`Abrindo \${nome}\` }) })));\r
      setCarregando(false);\r
    }, 700);\r
  };\r
  return <AbrirBusca rotulo="Buscar clientes no servidor" placeholder="Nome do cliente" items={itens} filter={null} loading={carregando} onQueryChange={buscar} />;\r
}

<div><BuscaNoServidor /></div>`,id:`busca-no-servidor`,titulo:`Busca no servidor`,descricao:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{children:`onQueryChange`}),` recebe o texto a cada tecla; `,(0,j.jsx)(w,{children:`filter={null}`}),` mostra `,(0,j.jsx)(w,{children:`items`}),` como chegaram, sem filtrar de novo, e `,(0,j.jsx)(w,{children:`loading`}),` anuncia a espera. Tente “souza” ou “li”: quem começa com o texto vem primeiro. `,M]}),children:(0,j.jsx)(`div`,{children:(0,j.jsx)(z,{})})}),(0,j.jsx)(b,{codigo:`import { Button, type CommandItem, CommandPalette, type CommandPaletteProps, useToast } from '@tessela/web';
import { BarChart3, Box, FilePlus2, Package, Search, Settings, UserPlus, Users } from 'lucide-react';
import { useState } from 'react';

function useItensDoAdmin(): CommandItem[] {\r
  const toast = useToast();\r
  const ir = (onde: string) => () => toast.show({ title: \`Abrindo \${onde}\` });\r
  return [\r
    { id: 'pedidos', label: 'Pedidos', group: 'Páginas', icon: Box, keywords: ['vendas', 'compras'], onSelect: ir('Pedidos') },\r
    { id: 'clientes', label: 'Clientes', group: 'Páginas', icon: Users, onSelect: ir('Clientes') },\r
    { id: 'produtos', label: 'Produtos', group: 'Páginas', icon: Package, keywords: ['cardápio', 'estoque'], onSelect: ir('Produtos') },\r
    { id: 'relatorios', label: 'Relatórios', group: 'Páginas', icon: BarChart3, onSelect: ir('Relatórios') },\r
    { id: 'ajustes', label: 'Configurações', group: 'Páginas', icon: Settings, keywords: ['preferências'], onSelect: ir('Configurações') },\r
    { id: 'novo-pedido', label: 'Novo pedido', group: 'Ações', icon: FilePlus2, shortcut: ['N'], onSelect: ir('Novo pedido') },\r
    { id: 'convidar', label: 'Convidar pessoa para a equipe', group: 'Ações', icon: UserPlus, onSelect: ir('Convite') },\r
    { id: 'p1042', label: 'Pedido #1042', group: 'Recentes', description: 'Ana Souza · R$ 184,90', icon: Box, onSelect: ir('Pedido #1042') },\r
    { id: 'p1041', label: 'Pedido #1041', group: 'Recentes', description: 'Bruno Lima · R$ 62,00', icon: Box, onSelect: ir('Pedido #1041') },\r
  ];\r
}

function AbrirBusca({ rotulo, ...props }: { rotulo: string } & Omit<CommandPaletteProps, 'open' | 'onOpenChange'>) {\r
  const [aberta, setAberta] = useState(false);\r
  return (\r
    <>\r
      <Button variant="secondary" leadingIcon={Search} onClick={() => setAberta(true)}>{rotulo}</Button>\r
      <CommandPalette {...props} open={aberta} onOpenChange={setAberta} shortcut={false} />\r
    </>\r
  );\r
}

const normalizar = (t: string) => t.normalize('NFD').replace(/\\p{Diacritic}/gu, '').toLocaleLowerCase();

function BuscaSoPeloComeco() {\r
  const itens = useItensDoAdmin();\r
  return (\r
    <AbrirBusca\r
      rotulo="Buscar pelo começo do nome"\r
      items={itens}\r
      filter={(item, busca) => normalizar(item.label).startsWith(normalizar(busca.trim()))}\r
    />\r
  );\r
}

<div><BuscaSoPeloComeco /></div>`,id:`filtro-proprio`,titulo:`Filtro próprio`,descricao:(0,j.jsxs)(j.Fragment,{children:[`Uma função em `,(0,j.jsx)(w,{children:`filter`}),` troca o critério. Aqui só entra quem começa com o texto: “pe” encontra Pedidos, mas “vendas” não encontra nada. `,M]}),children:(0,j.jsx)(`div`,{children:(0,j.jsx)(B,{})})}),(0,j.jsx)(b,{codigo:`import { Button, type CommandItem, CommandPalette, type CommandPaletteProps, ToggleGroup, ToggleGroupItem, useToast } from '@tessela/web';
import { BarChart3, Box, FilePlus2, Package, Search, Settings, UserPlus, Users } from 'lucide-react';
import { useState } from 'react';

function useItensDoAdmin(): CommandItem[] {\r
  const toast = useToast();\r
  const ir = (onde: string) => () => toast.show({ title: \`Abrindo \${onde}\` });\r
  return [\r
    { id: 'pedidos', label: 'Pedidos', group: 'Páginas', icon: Box, keywords: ['vendas', 'compras'], onSelect: ir('Pedidos') },\r
    { id: 'clientes', label: 'Clientes', group: 'Páginas', icon: Users, onSelect: ir('Clientes') },\r
    { id: 'produtos', label: 'Produtos', group: 'Páginas', icon: Package, keywords: ['cardápio', 'estoque'], onSelect: ir('Produtos') },\r
    { id: 'relatorios', label: 'Relatórios', group: 'Páginas', icon: BarChart3, onSelect: ir('Relatórios') },\r
    { id: 'ajustes', label: 'Configurações', group: 'Páginas', icon: Settings, keywords: ['preferências'], onSelect: ir('Configurações') },\r
    { id: 'novo-pedido', label: 'Novo pedido', group: 'Ações', icon: FilePlus2, shortcut: ['N'], onSelect: ir('Novo pedido') },\r
    { id: 'convidar', label: 'Convidar pessoa para a equipe', group: 'Ações', icon: UserPlus, onSelect: ir('Convite') },\r
    { id: 'p1042', label: 'Pedido #1042', group: 'Recentes', description: 'Ana Souza · R$ 184,90', icon: Box, onSelect: ir('Pedido #1042') },\r
    { id: 'p1041', label: 'Pedido #1041', group: 'Recentes', description: 'Bruno Lima · R$ 62,00', icon: Box, onSelect: ir('Pedido #1041') },\r
  ];\r
}

function AbrirBusca({ rotulo, ...props }: { rotulo: string } & Omit<CommandPaletteProps, 'open' | 'onOpenChange'>) {\r
  const [aberta, setAberta] = useState(false);\r
  return (\r
    <>\r
      <Button variant="secondary" leadingIcon={Search} onClick={() => setAberta(true)}>{rotulo}</Button>\r
      <CommandPalette {...props} open={aberta} onOpenChange={setAberta} shortcut={false} />\r
    </>\r
  );\r
}

function BuscaComEscopo() {\r
  const todos = useItensDoAdmin();\r
  const [escopo, setEscopo] = useState(['tudo']);\r
  const itens = escopo[0] === 'tudo' ? todos : todos.filter((item) => item.group === escopo[0]);\r
  return (\r
    <AbrirBusca\r
      rotulo="Abrir a busca com escopo"\r
      items={itens}\r
      header={(\r
        <ToggleGroup aria-label="Onde buscar" size="sm" value={escopo} onValueChange={(v) => v.length > 0 && setEscopo(v)}>\r
          <ToggleGroupItem value="tudo">Tudo</ToggleGroupItem>\r
          <ToggleGroupItem value="Páginas">Páginas</ToggleGroupItem>\r
          <ToggleGroupItem value="Ações">Ações</ToggleGroupItem>\r
        </ToggleGroup>\r
      )}\r
    />\r
  );\r
}

<div><BuscaComEscopo /></div>`,id:`cabecalho`,titulo:`Faixa de escopo`,descricao:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{children:`header`}),` é uma faixa fixa entre o campo e a lista, que não rola com os resultados: escopo, filtros. `,M]}),children:(0,j.jsx)(`div`,{children:(0,j.jsx)(V,{})})}),(0,j.jsx)(b,{codigo:`import { Button, CommandPalette, type CommandPaletteProps } from '@tessela/web';
import { Search } from 'lucide-react';
import { useState } from 'react';

function AbrirBusca({ rotulo, ...props }: { rotulo: string } & Omit<CommandPaletteProps, 'open' | 'onOpenChange'>) {\r
  const [aberta, setAberta] = useState(false);\r
  return (\r
    <>\r
      <Button variant="secondary" leadingIcon={Search} onClick={() => setAberta(true)}>{rotulo}</Button>\r
      <CommandPalette {...props} open={aberta} onOpenChange={setAberta} shortcut={false} />\r
    </>\r
  );\r
}

function BuscaCarregando() {\r
  return <AbrirBusca rotulo="Abrir a busca carregando" items={[]} loading />;\r
}

<div><BuscaCarregando /></div>`,id:`carregando`,titulo:`Carregando`,descricao:(0,j.jsxs)(j.Fragment,{children:[`Com `,(0,j.jsx)(w,{children:`loading`}),`, a lista anuncia o texto `,(0,j.jsx)(w,{children:`loading`}),` do provider e segura “Nenhum resultado” até a resposta chegar. `,M]}),children:(0,j.jsx)(`div`,{children:(0,j.jsx)(H,{})})}),(0,j.jsx)(b,{id:`temas`,titulo:`Temas e densidades`,descricao:`A busca abre no tema e na densidade do trecho do botão.`,children:(0,j.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,j.jsx)(x,{theme:e,titulo:_[e],children:(0,j.jsx)(I,{})},e)),n.map(e=>(0,j.jsx)(x,{density:e,titulo:D[e],children:(0,j.jsx)(I,{})},e))]})}),(0,j.jsx)(b,{id:`opcoes-temas`,titulo:`Opções nos temas e densidades`,descricao:`A faixa de escopo e o aviso de carregando em cada tema e densidade.`,semCaixa:!0,children:(0,j.jsx)(E,{children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-12`,children:[(0,j.jsx)(V,{}),(0,j.jsx)(H,{})]})})}),(0,j.jsx)(b,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-label-m`,children:`CommandPalette`}),(0,j.jsx)(g,{rotulo:`Tabela de propriedades do CommandPalette`,itens:[{nome:`open / onOpenChange`,tipo:`boolean`,descricao:`Aberta ou fechada.`},{nome:`items`,tipo:`CommandItem[]`,descricao:`Itens; os grupos aparecem na ordem em que surgem na lista.`},{nome:`shortcut`,tipo:`boolean`,padrao:`true`,descricao:`Liga ⌘K / Ctrl+K. Use uma busca com atalho por app.`},{nome:`placeholder / emptyMessage`,tipo:`string / ReactNode`,descricao:`Textos do campo e de nada encontrado.`},{nome:`onQueryChange`,tipo:`(query: string) => void`,descricao:`Recebe o texto a cada mudança, para buscar no servidor ou mudar o escopo. ${M}`},{nome:`filter`,tipo:`((item, query) => boolean) | null`,padrao:`sem acento`,descricao:`Decide o que aparece. O padrão busca sem acento no nome, na descrição e nas palavras-chave; uma função troca o critério; null não filtra e mantém a ordem de items. ${M}`},{nome:`header`,tipo:`ReactNode`,descricao:`Faixa fixa entre o campo e a lista: escopo, filtros. ${M}`},{nome:`loading`,tipo:`boolean`,padrao:`false`,descricao:`Anuncia o texto loading do provider e segura “Nenhum resultado” até terminar. ${M}`}]})]}),(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-label-m`,children:`CommandItem`}),(0,j.jsx)(g,{rotulo:`Tabela de propriedades do CommandItem`,itens:[{nome:`id / label / onSelect`,tipo:`—`,descricao:`Identificador, nome e o que acontece ao escolher (a busca fecha antes).`},{nome:`group / icon / description`,tipo:`—`,descricao:`Grupo, ícone e texto secundário à direita.`},{nome:`keywords`,tipo:`string[]`,descricao:`Outras palavras que encontram o item.`},{nome:`shortcut`,tipo:`string[]`,descricao:`Atalho mostrado, tecla por tecla.`}]})]}),(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-label-m`,children:`SidebarSearch e useCommandShortcut`}),(0,j.jsx)(g,{rotulo:`Tabela de propriedades do SidebarSearch e useCommandShortcut`,itens:[{nome:`SidebarSearch · onClick / label`,tipo:`— / string`,padrao:`— / Buscar…`,descricao:`Botão com cara de campo e o atalho; na barra recolhida, só a lupa com dica.`},{nome:`useCommandShortcut(onToggle, enabled)`,tipo:`hook`,descricao:`Liga ⌘K / Ctrl+K a qualquer função.`}]})]})]})}),(0,j.jsx)(b,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,j.jsx)(N,{itens:[(0,j.jsxs)(j.Fragment,{children:[`É um diálogo “Busca rápida” com um campo de busca ligado a uma lista (`,(0,j.jsx)(w,{children:`combobox`}),`). Ao abrir, o foco vai para o campo.`]}),(0,j.jsxs)(j.Fragment,{children:[`O primeiro resultado já vem destacado: Enter abre e as setas trocam. Depois do campo, Tab chega ao botão Fechar, mostrado como `,(0,j.jsx)(w,{children:`Esc`}),`; clique ou Esc fecha e devolve o foco.`]}),(0,j.jsxs)(j.Fragment,{children:[`O botão da barra lateral declara o atalho em `,(0,j.jsx)(w,{children:`aria-keyshortcuts`}),`.`]}),(0,j.jsx)(j.Fragment,{children:`A busca ignora acentos: “relatorio” encontra “Relatórios”.`}),(0,j.jsxs)(j.Fragment,{children:[`A lista tem uma região de status sempre montada; com `,(0,j.jsx)(w,{children:`loading`}),`, ela passa a dizer “Carregando…” e a lista fica com `,(0,j.jsx)(w,{children:`aria-busy`}),`, para o leitor de tela anunciar a espera sem anunciar “Nenhum resultado” antes da hora.`]})]})})]})}export{U as CommandPalettePagina};