import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{g as n,gi as r,p as i,sr as a,vi as o}from"./Codigo-Dgz1In5l.js";import{n as s,r as c,t as l}from"./underline-om7W9CRI.js";import{t as u}from"./columns-3-DPCbj4Yo.js";import{t as d}from"./download-Bz44KTCP.js";import{t as f}from"./ellipsis-CzhPUSUO.js";import{t as p}from"./funnel-ER9ATl0z.js";import{t as ee}from"./link-2-sQdJdtqw.js";import{t as m}from"./pencil-DEQjmgeG.js";import{t as h}from"./refresh-cw-DF2oHPTV.js";import{t as g}from"./settings-CXCnt7U2.js";import{t as _}from"./share-2-qmupMPiV.js";import{t as v}from"./trash-BZfsE4TV.js";import{s as y}from"./tiptap-jvs8iIPE.js";import{t as b}from"./Avatar-CrcIbTIP.js";import{a as x}from"./Estrutura-Bg5zrcqs.js";import{Bt as S,Ft as C,Ht as w,It as T,Lt as E,Nt as D,Pt as O,Rt as k,Vt as A,_ as j,bn as te,dn as M,f as N,g as P,p as F,v as I,zt as L}from"./index-3SU4ioj-.js";var R={name:`archive`,size:24,node:[[`rect`,{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`,key:`1wp1u1`}],[`path`,{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`,key:`1s80jp`}],[`path`,{d:`M10 12h4`,key:`a56b0p`}]]};R.node;var z=o(R),B={name:`arrow-down-up`,size:24,node:[[`path`,{d:`m3 16 4 4 4-4`,key:`1co6wj`}],[`path`,{d:`M7 20V4`,key:`1yoxec`}],[`path`,{d:`m21 8-4-4-4 4`,key:`1c9v7m`}],[`path`,{d:`M17 4v16`,key:`7dpous`}]]};B.node;var V=o(B),H=e(t(),1),U=y();function W({itens:e}){return(0,U.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,U.jsx)(`li`,{children:e},t))})}function G({titulo:e,children:t}){return(0,U.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,U.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:e}),(0,U.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:t})]})}function K(){return(0,U.jsxs)(D,{children:[(0,U.jsx)(w,{children:(0,U.jsx)(a,{variant:`secondary`,trailingIcon:te,children:`Ações`})}),(0,U.jsxs)(C,{children:[(0,U.jsx)(E,{icon:m,hint:`E`,children:`Editar`}),(0,U.jsx)(E,{icon:r,hint:`⌘D`,children:`Duplicar`}),(0,U.jsx)(E,{icon:_,children:`Compartilhar`}),(0,U.jsx)(E,{icon:z,disabled:!0,children:`Arquivar`}),(0,U.jsx)(A,{}),(0,U.jsx)(k,{href:`#menu`,icon:ee,children:`Abrir detalhes`}),(0,U.jsx)(A,{}),(0,U.jsx)(E,{icon:v,destructive:!0,children:`Excluir`})]})]})}function q(){let[e,t]=(0,H.useState)(`recentes`);return(0,U.jsxs)(D,{children:[(0,U.jsx)(w,{children:(0,U.jsx)(a,{variant:`secondary`,leadingIcon:V,children:`Ordenar`})}),(0,U.jsx)(C,{children:(0,U.jsxs)(L,{label:`Ordenar por`,value:e,onValueChange:t,children:[(0,U.jsx)(S,{value:`recentes`,children:`Mais recentes`}),(0,U.jsx)(S,{value:`antigos`,children:`Mais antigos`}),(0,U.jsx)(S,{value:`valor`,children:`Maior valor`})]})})]})}function J(){let[e,t]=(0,H.useState)({cliente:!0,valor:!0,status:!0,data:!1}),n={cliente:`Cliente`,valor:`Valor`,status:`Status`,data:`Data do pedido`};return(0,U.jsxs)(D,{children:[(0,U.jsx)(w,{children:(0,U.jsx)(a,{variant:`secondary`,leadingIcon:u,children:`Colunas`})}),(0,U.jsx)(C,{children:(0,U.jsx)(T,{label:`Colunas visíveis`,children:Object.keys(n).map(r=>(0,U.jsx)(O,{checked:e[r],onCheckedChange:n=>t({...e,[r]:n}),children:n[r]},r))})})]})}function Y({nome:e}){return(0,U.jsxs)(D,{children:[(0,U.jsx)(w,{children:(0,U.jsx)(i,{icon:f,label:`Ações de ${e}`,tooltip:!1,size:`sm`})}),(0,U.jsxs)(C,{align:`end`,children:[(0,U.jsx)(E,{icon:m,children:`Editar`}),(0,U.jsx)(E,{icon:r,children:`Duplicar`}),(0,U.jsx)(A,{}),(0,U.jsx)(E,{icon:v,destructive:!0,children:`Excluir`})]})]})}var X=[`Mercado Bom Preço`,`Padaria Estrela`,`Farmácia Central`,`Livraria Página 12`];function Z(){return(0,U.jsxs)(`article`,{children:[(0,U.jsx)(N,{etapa:`Componente 4 · aprovado`,titulo:`Menu`,descricao:(0,U.jsxs)(U.Fragment,{children:[`Lista de ações ou escolhas que abre a partir de um botão. Já usado no seletor de loja e na conta da Sidebar. Montado com `,(0,U.jsx)(F,{children:`Menu`}),`, `,(0,U.jsx)(F,{children:`MenuTrigger`}),` e `,(0,U.jsx)(F,{children:`MenuContent`}),`.`]})}),(0,U.jsxs)(P,{codigo:`import { Button, Menu, MenuCheckboxItem, MenuContent, MenuGroup, MenuItem, MenuLinkItem, MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuTrigger } from '@tessela/web';
import { Archive, ArrowDownUp, ChevronDown, Columns3, Copy, Link2, Pencil, Share2, Trash2 } from 'lucide-react';
import { type ReactNode, useState } from 'react';

function Caixa({ titulo, children }: { titulo: string; children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">{titulo}</p>\r
      <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">{children}</div>\r
    </div>\r
  );\r
}

function MenuAcoes() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><Button variant="secondary" trailingIcon={ChevronDown}>Ações</Button></MenuTrigger>\r
      <MenuContent>\r
        <MenuItem icon={Pencil} hint="E">Editar</MenuItem>\r
        <MenuItem icon={Copy} hint="⌘D">Duplicar</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuItem icon={Archive} disabled>Arquivar</MenuItem>\r
        <MenuSeparator />\r
        <MenuLinkItem href="#menu" icon={Link2}>Abrir detalhes</MenuLinkItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Excluir</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

function MenuOrdenar() {\r
  const [ordem, setOrdem] = useState('recentes');\r
  return (\r
    <Menu>\r
      <MenuTrigger><Button variant="secondary" leadingIcon={ArrowDownUp}>Ordenar</Button></MenuTrigger>\r
      <MenuContent>\r
        <MenuRadioGroup label="Ordenar por" value={ordem} onValueChange={setOrdem}>\r
          <MenuRadioItem value="recentes">Mais recentes</MenuRadioItem>\r
          <MenuRadioItem value="antigos">Mais antigos</MenuRadioItem>\r
          <MenuRadioItem value="valor">Maior valor</MenuRadioItem>\r
        </MenuRadioGroup>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

function MenuColunas() {\r
  const [colunas, setColunas] = useState({ cliente: true, valor: true, status: true, data: false });\r
  const nomes = { cliente: 'Cliente', valor: 'Valor', status: 'Status', data: 'Data do pedido' } as const;\r
  return (\r
    <Menu>\r
      <MenuTrigger><Button variant="secondary" leadingIcon={Columns3}>Colunas</Button></MenuTrigger>\r
      <MenuContent>\r
        <MenuGroup label="Colunas visíveis">\r
          {(Object.keys(nomes) as (keyof typeof nomes)[]).map((k) => (\r
            <MenuCheckboxItem key={k} checked={colunas[k]} onCheckedChange={(v) => setColunas({ ...colunas, [k]: v })}>{nomes[k]}</MenuCheckboxItem>\r
          ))}\r
        </MenuGroup>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Caixa titulo="Ações"><MenuAcoes /></Caixa>\r
  <Caixa titulo="Escolha única"><MenuOrdenar /></Caixa>\r
  <Caixa titulo="Marcação (fica aberto)"><MenuColunas /></Caixa>\r
</div>\r
<p className="ts:mt-16 ts:max-w-720 ts:text-body-m ts:text-fg-secondary">\r
  Caixa: <Codigo>bg/raised</Codigo>, borda <Codigo>border/default</Codigo>, raio 12, sombra md, respiro 4. Item: 32 px de altura, raio 8 (o da caixa menos o respiro), hover <Codigo>bg/hover</Codigo>. Abre com escala de 0,98 e opacidade em 100 ms; com movimento reduzido, só a opacidade.\r
</p>`,id:`tipos`,titulo:`Tipos de item`,descricao:`Ação com ícone e atalho, desativado, link, destrutivo; escolha única; marcação que liga e desliga sem fechar o menu.`,children:[(0,U.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,U.jsx)(G,{titulo:`Ações`,children:(0,U.jsx)(K,{})}),(0,U.jsx)(G,{titulo:`Escolha única`,children:(0,U.jsx)(q,{})}),(0,U.jsx)(G,{titulo:`Marcação (fica aberto)`,children:(0,U.jsx)(J,{})})]}),(0,U.jsxs)(`p`,{className:`ts:mt-16 ts:max-w-720 ts:text-body-m ts:text-fg-secondary`,children:[`Caixa: `,(0,U.jsx)(F,{children:`bg/raised`}),`, borda `,(0,U.jsx)(F,{children:`border/default`}),`, raio 12, sombra md, respiro 4. Item: 32 px de altura, raio 8 (o da caixa menos o respiro), hover `,(0,U.jsx)(F,{children:`bg/hover`}),`. Abre com escala de 0,98 e opacidade em 100 ms; com movimento reduzido, só a opacidade.`]})]}),(0,U.jsx)(P,{codigo:`import { Button, Menu, MenuContent, MenuItem, MenuLinkItem, MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuTrigger } from '@tessela/web';
import { Archive, ArrowDownUp, ChevronDown, Copy, Link2, Pencil, Share2, Trash2 } from 'lucide-react';
import { useState } from 'react';

function MenuAcoes() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><Button variant="secondary" trailingIcon={ChevronDown}>Ações</Button></MenuTrigger>\r
      <MenuContent>\r
        <MenuItem icon={Pencil} hint="E">Editar</MenuItem>\r
        <MenuItem icon={Copy} hint="⌘D">Duplicar</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuItem icon={Archive} disabled>Arquivar</MenuItem>\r
        <MenuSeparator />\r
        <MenuLinkItem href="#menu" icon={Link2}>Abrir detalhes</MenuLinkItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Excluir</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

function MenuOrdenar() {\r
  const [ordem, setOrdem] = useState('recentes');\r
  return (\r
    <Menu>\r
      <MenuTrigger><Button variant="secondary" leadingIcon={ArrowDownUp}>Ordenar</Button></MenuTrigger>\r
      <MenuContent>\r
        <MenuRadioGroup label="Ordenar por" value={ordem} onValueChange={setOrdem}>\r
          <MenuRadioItem value="recentes">Mais recentes</MenuRadioItem>\r
          <MenuRadioItem value="antigos">Mais antigos</MenuRadioItem>\r
          <MenuRadioItem value="valor">Maior valor</MenuRadioItem>\r
        </MenuRadioGroup>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

<div className="ts:flex ts:flex-wrap ts:gap-8"><MenuAcoes /><MenuOrdenar /></div>`,id:`temas`,titulo:`Temas e densidades`,descricao:`O menu abre dentro do trecho com tema próprio e segue o tema dele.`,children:(0,U.jsx)(I,{children:(0,U.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,U.jsx)(K,{}),(0,U.jsx)(q,{})]})})}),(0,U.jsx)(P,{codigo:`import { IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from '@tessela/web';
import { Copy, Ellipsis, Pencil, Trash2 } from 'lucide-react';

function MenuDaLinha({ nome }: { nome: string }) {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações de \${nome}\`} tooltip={false} size="sm" /></MenuTrigger>\r
      <MenuContent align="end">\r
        <MenuItem icon={Pencil}>Editar</MenuItem>\r
        <MenuItem icon={Copy}>Duplicar</MenuItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Excluir</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

const clientes = ['Mercado Bom Preço', 'Padaria Estrela', 'Farmácia Central', 'Livraria Página 12'];

<div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
  {clientes.map((c) => (\r
    <div key={c} className="ts:flex ts:h-table-row-height ts:items-center ts:justify-between ts:border-b ts:border-border-subtle ts:px-table-cell-padding-x ts:text-body-m ts:last:border-b-0">\r
      <span>{c}</span>\r
      <MenuDaLinha nome={c} />\r
    </div>\r
  ))}\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Ações por linha, no fim de cada uma, com um IconButton.`,children:(0,U.jsx)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:X.map(e=>(0,U.jsxs)(`div`,{className:`ts:flex ts:h-table-row-height ts:items-center ts:justify-between ts:border-b ts:border-border-subtle ts:px-table-cell-padding-x ts:text-body-m ts:last:border-b-0`,children:[(0,U.jsx)(`span`,{children:e}),(0,U.jsx)(Y,{nome:e})]},e))})}),(0,U.jsx)(P,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,U.jsx)(j,{itens:[{nome:`Menu`,tipo:`open, defaultOpen, onOpenChange`,descricao:`Raiz: controla abrir e fechar.`},{nome:`MenuTrigger`,tipo:`children (um Button ou IconButton), disabled`,descricao:`O elemento que abre o menu.`},{nome:`MenuContent`,tipo:`side, align, sideOffset, matchTriggerWidth, className`,padrao:`'bottom', 'start', 4`,descricao:`A caixa do menu.`},{nome:`MenuItem`,tipo:`icon, hint, destructive, disabled, onClick`,descricao:`Ação. hint mostra um atalho à direita.`},{nome:`MenuLinkItem`,tipo:`href, icon, render, active`,descricao:`Link; render troca pelo link do roteador.`},{nome:`MenuRadioGroup / MenuRadioItem`,tipo:`label, value, onValueChange / value, icon, leading`,descricao:`Escolha única.`},{nome:`MenuCheckboxItem`,tipo:`checked, onCheckedChange, icon, disabled`,descricao:`Liga e desliga; o menu continua aberto.`},{nome:`MenuGroup / MenuSeparator`,tipo:`label`,descricao:`Grupo com título e divisória.`}]})}),(0,U.jsx)(P,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,U.jsx)(W,{itens:[(0,U.jsx)(U.Fragment,{children:`Enter, Espaço ou seta para baixo abrem o menu no primeiro item; setas andam; Home e End vão às pontas; digitar uma letra pula para o item.`}),(0,U.jsx)(U.Fragment,{children:`Esc fecha e devolve o foco ao gatilho. Clicar fora também fecha.`}),(0,U.jsx)(U.Fragment,{children:`Item desativado recebe foco, para ser descoberto, mas não age (padrão WAI-ARIA).`}),(0,U.jsxs)(U.Fragment,{children:[`Escolha única e marcação anunciam o estado (`,(0,U.jsx)(F,{children:`aria-checked`}),`).`]}),(0,U.jsxs)(U.Fragment,{children:[`Gatilho só com ícone precisa de rótulo: o IconButton exige `,(0,U.jsx)(F,{children:`label`}),`.`]})]})})]})}var Q=[`ghost`,`secondary`,`primary`,`destructive`],ne=[`sm`,`md`,`lg`];function re(){let[e,t]=(0,H.useState)([`bold`]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,U.jsxs)(`article`,{children:[(0,U.jsx)(N,{etapa:`Componente 5 · aprovado`,titulo:`IconButton`,descricao:(0,U.jsx)(U.Fragment,{children:`Botão só com ícone, para ações de linha, fechar e barras de ferramentas. Mesmas cores, alturas e raio do Button; quadrado. O rótulo é obrigatório e aparece numa dica.`})}),(0,U.jsxs)(P,{codigo:`import { type ButtonSize, type ButtonVariant, IconButton } from '@tessela/web';
import { RefreshCw, Settings, Trash2 } from 'lucide-react';

const variantes: ButtonVariant[] = ['ghost', 'secondary', 'primary', 'destructive'];

const tamanhos: ButtonSize[] = ['sm', 'md', 'lg'];

<div className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
  <div className="ts:min-w-max">\r
    <div className="ts:grid ts:grid-cols-[160px_repeat(4,minmax(96px,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted">\r
      <span className="ts:px-16 ts:py-8">Tamanho</span>\r
      {variantes.map((v) => <span key={v} className="ts:px-16 ts:py-8">{v}</span>)}\r
    </div>\r
    {tamanhos.map((size) => (\r
      <div key={size} className="ts:grid ts:grid-cols-[160px_repeat(4,minmax(96px,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0">\r
        <span className="ts:px-16 ts:py-16 ts:text-label-m">{size}</span>\r
        {variantes.map((variant) => (\r
          <div key={variant} className="ts:px-16 ts:py-16"><IconButton icon={variant === 'destructive' ? Trash2 : Settings} label={variant === 'destructive' ? 'Excluir' : 'Configurações'} variant={variant} size={size} /></div>\r
        ))}\r
      </div>\r
    ))}\r
  </div>\r
</div>\r
<div className="ts:mt-16 ts:flex ts:items-center ts:gap-8">\r
  <IconButton icon={RefreshCw} label="Atualizar" disabled />\r
  <IconButton icon={RefreshCw} label="Atualizar" variant="secondary" disabled />\r
  <span className="ts:text-body-m ts:text-fg-secondary">Desativados</span>\r
</div>`,id:`variantes`,titulo:`Variantes e tamanhos`,descricao:`Ghost é o padrão. Passe o mouse ou use Tab para ver a dica.`,children:[(0,U.jsx)(`div`,{className:`ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default`,children:(0,U.jsxs)(`div`,{className:`ts:min-w-max`,children:[(0,U.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[160px_repeat(4,minmax(96px,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted`,children:[(0,U.jsx)(`span`,{className:`ts:px-16 ts:py-8`,children:`Tamanho`}),Q.map(e=>(0,U.jsx)(`span`,{className:`ts:px-16 ts:py-8`,children:e},e))]}),ne.map(e=>(0,U.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[160px_repeat(4,minmax(96px,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0`,children:[(0,U.jsx)(`span`,{className:`ts:px-16 ts:py-16 ts:text-label-m`,children:e}),Q.map(t=>(0,U.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,U.jsx)(i,{icon:t===`destructive`?v:g,label:t===`destructive`?`Excluir`:`Configurações`,variant:t,size:e})},t))]},e))]})}),(0,U.jsxs)(`div`,{className:`ts:mt-16 ts:flex ts:items-center ts:gap-8`,children:[(0,U.jsx)(i,{icon:h,label:`Atualizar`,disabled:!0}),(0,U.jsx)(i,{icon:h,label:`Atualizar`,variant:`secondary`,disabled:!0}),(0,U.jsx)(`span`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`Desativados`})]})]}),(0,U.jsx)(P,{codigo:`import { Button, IconButton } from '@tessela/web';
import { Bold, Download, Filter, Italic, Underline, X } from 'lucide-react';
import { type ReactNode } from 'react';

function Caixa({ titulo, children }: { titulo: string; children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">{titulo}</p>\r
      <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Caixa titulo="Cabeçalho de lista">\r
    <span className="ts:flex-1 ts:text-heading-s">Pedidos</span>\r
    <IconButton icon={Filter} label="Filtrar" variant="secondary" />\r
    <IconButton icon={Download} label="Exportar" variant="secondary" />\r
    <Button>Novo pedido</Button>\r
  </Caixa>\r
  <Caixa titulo="Barra de ferramentas (alterna)">\r
    {([['bold', Bold, 'Negrito'], ['italic', Italic, 'Itálico'], ['underline', Underline, 'Sublinhado']] as const).map(([v, Icone, rotulo]) => (\r
      <IconButton key={v} icon={Icone} label={rotulo} aria-pressed={formato.includes(v)} onClick={() => alternar(v)}\r
        className={formato.includes(v) ? 'ts:bg-bg-selected ts:text-fg-primary' : undefined} />\r
    ))}\r
  </Caixa>\r
  <Caixa titulo="Fechar">\r
    <span className="ts:flex-1 ts:text-body-m">Filtro "Pagos" aplicado</span>\r
    <IconButton icon={X} label="Remover filtro" size="sm" />\r
  </Caixa>\r
</div>`,id:`em-uso`,titulo:`Em uso`,children:(0,U.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,U.jsxs)(G,{titulo:`Cabeçalho de lista`,children:[(0,U.jsx)(`span`,{className:`ts:flex-1 ts:text-heading-s`,children:`Pedidos`}),(0,U.jsx)(i,{icon:p,label:`Filtrar`,variant:`secondary`}),(0,U.jsx)(i,{icon:d,label:`Exportar`,variant:`secondary`}),(0,U.jsx)(a,{children:`Novo pedido`})]}),(0,U.jsx)(G,{titulo:`Barra de ferramentas (alterna)`,children:[[`bold`,c,`Negrito`],[`italic`,s,`Itálico`],[`underline`,l,`Sublinhado`]].map(([t,r,a])=>(0,U.jsx)(i,{icon:r,label:a,"aria-pressed":e.includes(t),onClick:()=>n(t),className:e.includes(t)?`ts:bg-bg-selected ts:text-fg-primary`:void 0},t))}),(0,U.jsxs)(G,{titulo:`Fechar`,children:[(0,U.jsx)(`span`,{className:`ts:flex-1 ts:text-body-m`,children:`Filtro "Pagos" aplicado`}),(0,U.jsx)(i,{icon:M,label:`Remover filtro`,size:`sm`})]})]})}),(0,U.jsx)(P,{codigo:`import { IconButton } from '@tessela/web';
import { Download, Settings } from 'lucide-react';

<div className="ts:flex ts:gap-8"><IconButton icon={Settings} label="Configurações" variant="secondary" /><IconButton icon={Download} label="Exportar" variant="secondary" /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,U.jsx)(I,{children:(0,U.jsxs)(`div`,{className:`ts:flex ts:gap-8`,children:[(0,U.jsx)(i,{icon:g,label:`Configurações`,variant:`secondary`}),(0,U.jsx)(i,{icon:d,label:`Exportar`,variant:`secondary`})]})})}),(0,U.jsx)(P,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,U.jsx)(j,{itens:[{nome:`icon`,tipo:`IconComponent`,descricao:`O ícone (lucide-react).`},{nome:`label`,tipo:`string`,descricao:`Obrigatório. Nome acessível e texto da dica.`},{nome:`variant`,tipo:`'ghost' | 'secondary' | 'primary' | 'destructive'`,padrao:`'ghost'`,descricao:`As mesmas do Button.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Quadrado de 28, 32 ou 40 px na densidade confortável.`},{nome:`tooltip / tooltipSide`,tipo:`boolean / 'top' | 'bottom' | 'left' | 'right'`,padrao:`true / 'top'`,descricao:`Desligue a dica quando o botão abre um menu.`},{nome:`iconButtonClassName()`,tipo:`(opções) => string`,descricao:`Mesmo visual para outro elemento.`}]})}),(0,U.jsx)(P,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,U.jsx)(W,{itens:[(0,U.jsx)(U.Fragment,{children:`O rótulo é o nome acessível; o ícone fica escondido do leitor de tela.`}),(0,U.jsx)(U.Fragment,{children:`A dica aparece no hover e no foco, mas é só reforço: o nome já está no botão.`}),(0,U.jsxs)(U.Fragment,{children:[`Para alternar (negrito, filtro ligado), passe `,(0,U.jsx)(F,{children:`aria-pressed`}),`.`]}),(0,U.jsx)(U.Fragment,{children:`Com mouse, o menor tamanho tem 28 px, acima do alvo mínimo de 24 px da WCAG 2.2. Com toque, o botão sobe a 44 × 44 px.`})]})})]})}function ie(){return(0,U.jsxs)(`article`,{children:[(0,U.jsx)(N,{etapa:`Componente 6 · aprovado`,titulo:`Tooltip`,descricao:(0,U.jsx)(U.Fragment,{children:`Dica curta que aparece ao passar o mouse ou focar um elemento. Complementar: nada essencial pode depender dela, porque não existe em tela de toque.`})}),(0,U.jsx)(P,{codigo:`import { Button, Tooltip } from '@tessela/web';

<div className="ts:flex ts:flex-wrap ts:items-center ts:gap-16">\r
  {(['top', 'right', 'bottom', 'left'] as const).map((side) => (\r
    <Tooltip key={side} content={\`Dica \${side === 'top' ? 'em cima' : side === 'bottom' ? 'embaixo' : side === 'left' ? 'à esquerda' : 'à direita'}\`} side={side}>\r
      <Button variant="secondary">{side}</Button>\r
    </Tooltip>\r
  ))}\r
  <Tooltip content="Atualizado há 3 minutos">\r
    <span tabIndex={0} className="ts:inline-block ts:-mx-[max(0px,calc(var(--ts-target-min)/2-var(--ts-space-16)))] ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:px-[max(0px,calc(var(--ts-target-min)/2-var(--ts-space-16)))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:rounded-sm ts:text-body-m ts:text-fg-secondary ts:underline ts:decoration-dotted ts:underline-offset-4">14:32</span>\r
  </Tooltip>\r
</div>`,id:`exemplos`,titulo:`Exemplos`,descricao:`Fundo invertido, texto 12 peso 500, raio 8, a 8 px do alvo. Abre com 200 ms de espera; as vizinhas abrem sem espera.`,children:(0,U.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-16`,children:[[`top`,`right`,`bottom`,`left`].map(e=>(0,U.jsx)(n,{content:`Dica ${e===`top`?`em cima`:e===`bottom`?`embaixo`:e===`left`?`à esquerda`:`à direita`}`,side:e,children:(0,U.jsx)(a,{variant:`secondary`,children:e})},e)),(0,U.jsx)(n,{content:`Atualizado há 3 minutos`,children:(0,U.jsx)(`span`,{tabIndex:0,className:`ts:inline-block ts:-mx-[max(0px,calc(var(--ts-target-min)/2-var(--ts-space-16)))] ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:px-[max(0px,calc(var(--ts-target-min)/2-var(--ts-space-16)))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:rounded-sm ts:text-body-m ts:text-fg-secondary ts:underline ts:decoration-dotted ts:underline-offset-4`,children:`14:32`})})]})}),(0,U.jsx)(P,{codigo:`import { IconButton } from '@tessela/web';
import { Download, Settings } from 'lucide-react';

<div className="ts:flex ts:gap-8"><IconButton icon={Settings} label="Configurações" variant="secondary" /><IconButton icon={Download} label="Exportar" variant="secondary" /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,U.jsx)(I,{children:(0,U.jsxs)(`div`,{className:`ts:flex ts:gap-8`,children:[(0,U.jsx)(i,{icon:g,label:`Configurações`,variant:`secondary`}),(0,U.jsx)(i,{icon:d,label:`Exportar`,variant:`secondary`})]})})}),(0,U.jsx)(P,{semCaixa:!0,id:`quando`,titulo:`Quando usar`,children:(0,U.jsx)(W,{itens:[(0,U.jsx)(U.Fragment,{children:`Nome de um botão só com ícone (o IconButton já faz).`}),(0,U.jsx)(U.Fragment,{children:`Detalhe opcional, como a hora exata de "há 3 minutos".`}),(0,U.jsx)(U.Fragment,{children:`Não use para instrução, erro ou informação que a pessoa precisa: escreva na tela.`}),(0,U.jsxs)(U.Fragment,{children:[`O elemento precisa receber foco (botão, link, ou `,(0,U.jsx)(F,{children:`tabIndex=0`}),`), senão o teclado nunca vê a dica.`]})]})}),(0,U.jsx)(P,{codigo:`import { Card, IconButton, Tooltip } from '@tessela/web';
import { Download, Settings } from 'lucide-react';

<Card title="Pedido #1042" actions={<><Tooltip content="Imprimir pedido"><IconButton icon={Download} label="Imprimir pedido" variant="secondary" /></Tooltip><Tooltip content="Configurações do pedido"><IconButton icon={Settings} label="Configurações do pedido" variant="secondary" /></Tooltip></>}><p className="ts:text-body-m ts:text-fg-secondary">Ana Souza · entrega hoje.</p></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Ações só com ícone na barra de um pedido.`,children:(0,U.jsx)(x,{title:`Pedido #1042`,actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n,{content:`Imprimir pedido`,children:(0,U.jsx)(i,{icon:d,label:`Imprimir pedido`,variant:`secondary`})}),(0,U.jsx)(n,{content:`Configurações do pedido`,children:(0,U.jsx)(i,{icon:g,label:`Configurações do pedido`,variant:`secondary`})})]}),children:(0,U.jsx)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`Ana Souza · entrega hoje.`})})}),(0,U.jsx)(P,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,U.jsx)(j,{itens:[{nome:`content`,tipo:`ReactNode`,descricao:`Texto da dica.`},{nome:`side`,tipo:`'top' | 'right' | 'bottom' | 'left'`,padrao:`'top'`,descricao:`Lado preferido; troca sozinho se não couber.`},{nome:`disabled`,tipo:`boolean`,padrao:`false`,descricao:`Desliga a dica sem mudar a estrutura.`},{nome:`children`,tipo:`ReactElement`,descricao:`O elemento alvo (precisa aceitar ref e eventos).`},{nome:`TooltipProvider`,tipo:`delay, closeDelay`,descricao:`Agrupa dicas vizinhas. A Sidebar já tem um.`}]})}),(0,U.jsx)(P,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,U.jsx)(W,{itens:[(0,U.jsxs)(U.Fragment,{children:[`A dica abre ao passar o mouse e ao receber foco; `,(0,U.jsx)(F,{children:`Esc`}),` a fecha sem tirar o foco do elemento alvo.`]}),(0,U.jsx)(U.Fragment,{children:`O alvo precisa receber foco para que o teclado possa abrir a dica. A dica não contém informação essencial para concluir a tarefa.`})]})})]})}var $=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23a3a3a3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23404040%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2226%22%20r%3D%2211%22%20fill%3D%22%23e5e5e5%22%2F%3E%3Cpath%20d%3D%22M12%2060c2-12%2010-18%2020-18s18%206%2020%2018z%22%20fill%3D%22%23e5e5e5%22%2F%3E%3C%2Fsvg%3E`,ae=[{nome:`Ana Souza`,email:`ana@lojacentro.com.br`,foto:$,papel:`Administradora`},{nome:`Bruno Lima`,email:`bruno@lojacentro.com.br`,papel:`Financeiro`},{nome:`Carla Menezes`,email:`carla@lojacentro.com.br`,papel:`Atendimento`}];function oe(){return(0,U.jsxs)(`article`,{children:[(0,U.jsx)(N,{etapa:`Componente 7 · aprovado`,titulo:`Avatar`,descricao:(0,U.jsx)(U.Fragment,{children:`Foto ou iniciais de uma pessoa ou loja. Decorativo: o nome sempre aparece escrito ao lado.`})}),(0,U.jsx)(P,{codigo:`import { Avatar } from '@tessela/web';

const fotoExemplo = \`data:image/svg+xml;utf8,\${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a3a3a3"/><stop offset="1" stop-color="#404040"/></linearGradient></defs><rect width="64" height="64" fill="url(#g)"/><circle cx="32" cy="26" r="11" fill="#e5e5e5"/><path d="M12 60c2-12 10-18 20-18s18 6 20 18z" fill="#e5e5e5"/></svg>')}\`;

<div className="ts:flex ts:flex-wrap ts:items-center ts:gap-24">\r
  {sizes.map((size) => (\r
    <div key={size} className="ts:flex ts:items-center ts:gap-8">\r
      <Avatar name="Ana Souza" src={fotoExemplo} size={size} />\r
      <Avatar name="Bruno Lima" size={size} />\r
      <Avatar name="Loja Centro" shape="square" size={size} />\r
      <span className="ts:font-mono ts:text-caption ts:text-fg-muted">{size} · {size === 'sm' ? 24 : 32}</span>\r
    </div>\r
  ))}\r
</div>`,id:`formas`,titulo:`Formas e tamanhos`,descricao:`Círculo para pessoas, quadrado (raio 8) para lojas e organizações. 24 e 32 px. Sem foto, as iniciais do primeiro e do último nome.`,children:(0,U.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-24`,children:[`sm`,`md`].map(e=>(0,U.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8`,children:[(0,U.jsx)(b,{name:`Ana Souza`,src:$,size:e}),(0,U.jsx)(b,{name:`Bruno Lima`,size:e}),(0,U.jsx)(b,{name:`Loja Centro`,shape:`square`,size:e}),(0,U.jsxs)(`span`,{className:`ts:font-mono ts:text-caption ts:text-fg-muted`,children:[e,` · `,e===`sm`?24:32]})]},e))})}),(0,U.jsx)(P,{codigo:`import { Avatar } from '@tessela/web';

const fotoExemplo = \`data:image/svg+xml;utf8,\${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a3a3a3"/><stop offset="1" stop-color="#404040"/></linearGradient></defs><rect width="64" height="64" fill="url(#g)"/><circle cx="32" cy="26" r="11" fill="#e5e5e5"/><path d="M12 60c2-12 10-18 20-18s18 6 20 18z" fill="#e5e5e5"/></svg>')}\`;

const pessoas = [\r
  { nome: 'Ana Souza', email: 'ana@lojacentro.com.br', foto: fotoExemplo, papel: 'Administradora' },\r
  { nome: 'Bruno Lima', email: 'bruno@lojacentro.com.br', papel: 'Financeiro' },\r
  { nome: 'Carla Menezes', email: 'carla@lojacentro.com.br', papel: 'Atendimento' },\r
];

<div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
  {pessoas.map((p) => (\r
    <div key={p.nome} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-16 ts:py-12 ts:last:border-b-0">\r
      <Avatar name={p.nome} src={p.foto} />\r
      <div className="ts:min-w-0 ts:flex-1">\r
        <p className="ts:truncate ts:text-label-m">{p.nome}</p>\r
        <p className="ts:truncate ts:text-caption ts:text-fg-muted">{p.email}</p>\r
      </div>\r
      <span className="ts:text-body-m ts:text-fg-secondary ts:max-md:hidden">{p.papel}</span>\r
    </div>\r
  ))}\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Equipe da loja.`,children:(0,U.jsx)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:ae.map(e=>(0,U.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-16 ts:py-12 ts:last:border-b-0`,children:[(0,U.jsx)(b,{name:e.nome,src:e.foto}),(0,U.jsxs)(`div`,{className:`ts:min-w-0 ts:flex-1`,children:[(0,U.jsx)(`p`,{className:`ts:truncate ts:text-label-m`,children:e.nome}),(0,U.jsx)(`p`,{className:`ts:truncate ts:text-caption ts:text-fg-muted`,children:e.email})]}),(0,U.jsx)(`span`,{className:`ts:text-body-m ts:text-fg-secondary ts:max-md:hidden`,children:e.papel})]},e.nome))})}),(0,U.jsx)(P,{codigo:`import { Avatar } from '@tessela/web';

const fotoExemplo = \`data:image/svg+xml;utf8,\${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a3a3a3"/><stop offset="1" stop-color="#404040"/></linearGradient></defs><rect width="64" height="64" fill="url(#g)"/><circle cx="32" cy="26" r="11" fill="#e5e5e5"/><path d="M12 60c2-12 10-18 20-18s18 6 20 18z" fill="#e5e5e5"/></svg>')}\`;

<div className="ts:flex ts:items-center ts:gap-8"><Avatar name="Ana Souza" src={fotoExemplo} /><span className="ts:text-body-m">Ana Souza</span></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,U.jsx)(I,{children:(0,U.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8`,children:[(0,U.jsx)(b,{name:`Ana Souza`,src:$}),(0,U.jsx)(`span`,{className:`ts:text-body-m`,children:`Ana Souza`})]})})}),(0,U.jsx)(P,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,U.jsx)(j,{itens:[{nome:`name`,tipo:`string`,descricao:`Vira as iniciais quando não há foto.`},{nome:`src`,tipo:`string`,descricao:`Foto. Enquanto carrega ou se falhar, ficam as iniciais.`},{nome:`size`,tipo:`'sm' | 'md'`,padrao:`'md'`,descricao:`24 ou 32 px.`},{nome:`shape`,tipo:`'circle' | 'square'`,padrao:`'circle'`,descricao:`Pessoa ou loja.`}]})}),(0,U.jsx)(P,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,U.jsx)(W,{itens:[(0,U.jsxs)(U.Fragment,{children:[`Como o nome da pessoa já aparece ao lado, este Avatar é decorativo e usa `,(0,U.jsx)(F,{children:`aria-hidden`}),`.`]}),(0,U.jsx)(U.Fragment,{children:`Quando o Avatar for a única identificação, mostre o nome em texto ou forneça um nome acessível no controle que o contém.`})]})})]})}export{oe as AvatarPagina,re as IconButtonPagina,Z as MenuPagina,ie as TooltipPagina};