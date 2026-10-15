import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{di as n,sr as r,t as i,vi as a}from"./Codigo-Dgz1In5l.js";import{n as o,r as s,t as c}from"./users-e24AnW8x.js";import{t as l}from"./credit-card-CATjEuH8.js";import{t as u}from"./Input-BBFu0gZj.js";import{a as d,c as f,d as p,f as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T}from"./Sidebar-DGTq6XxD.js";import{t as E}from"./monitor-C8NX-aGh.js";import{t as D}from"./plus-BCNg58Vj.js";import{t as O}from"./settings-CXCnt7U2.js";import{t as k}from"./store-iOLWVzAk.js";import{s as A}from"./tiptap-jvs8iIPE.js";import{Bt as j,F as M,I as N,Lt as P,Vt as F,_ as I,f as L,g as R,hn as z,mn as B,p as V,pn as H,zt as U}from"./index-3SU4ioj-.js";var W={name:`life-buoy`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m4.93 4.93 4.24 4.24`,key:`1ymg45`}],[`path`,{d:`m14.83 9.17 4.24-4.24`,key:`1cb5xl`}],[`path`,{d:`m14.83 14.83 4.24 4.24`,key:`q42g0n`}],[`path`,{d:`m9.17 14.83-4.24 4.24`,key:`bqpfvv`}],[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}]]};W.node;var G=a(W),K={name:`wallet`,size:24,node:[[`path`,{d:`M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,key:`18etb6`}],[`path`,{d:`M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`,key:`xoc0q4`}]]};K.node;var q=a(K),J=e(t(),1),Y=A(),X=[{id:`centro`,name:`Loja Centro`,description:`Plano Pro`},{id:`norte`,name:`Loja Norte`,description:`Plano Básico`},{id:`online`,name:`Mercado Online`,description:`Plano Pro`}],Z={inicio:`Visão geral`,abertos:`Pedidos abertos`,entregues:`Pedidos entregues`,devolucoes:`Devoluções`,clientes:`Clientes`,produtos:`Produtos`,repasses:`Repasses`,cobrancas:`Cobranças`,relatorios:`Relatórios`,ajuda:`Ajuda`,configuracoes:`Configurações`};function Q({ativo:e,setAtivo:t,rotuloNavegacao:n,tema:r,setTema:i,appearance:a,activeItem:u,avatarSize:f}){let[b,C]=(0,J.useState)(`centro`),[A,I]=(0,J.useState)(!1),L=n=>({href:`#${n}`,active:e===n,onClick:e=>{e.preventDefault(),t(n)}}),R=[`abertos`,`entregues`,`devolucoes`].includes(e);return(0,Y.jsxs)(w,{as:`div`,appearance:a,activeItem:u,children:[(0,Y.jsxs)(d,{children:[(0,Y.jsx)(_,{workspaces:X,value:b,onValueChange:C,label:`Lojas`,action:{label:`Adicionar loja`,icon:D,onClick:()=>{}},avatarSize:f}),(0,Y.jsx)(N,{onClick:()=>I(!0)}),(0,Y.jsx)(M,{open:A,onOpenChange:I,shortcut:!1,items:Object.entries(Z).map(([e,n])=>({id:e,label:n,group:`Páginas`,onSelect:()=>t(e)}))})]}),(0,Y.jsx)(S,{children:(0,Y.jsxs)(`nav`,{"aria-label":n,className:`ts:flex ts:flex-col ts:gap-20`,children:[(0,Y.jsxs)(m,{children:[(0,Y.jsx)(p,{icon:h,...L(`inicio`),children:`Visão geral`}),(0,Y.jsxs)(T,{label:`Pedidos`,icon:s,active:R,children:[(0,Y.jsx)(p,{badge:12,...L(`abertos`),children:`Abertos`}),(0,Y.jsx)(p,{...L(`entregues`),children:`Entregues`}),(0,Y.jsx)(p,{...L(`devolucoes`),children:`Devoluções`})]}),(0,Y.jsx)(p,{icon:c,...L(`clientes`),children:`Clientes`}),(0,Y.jsx)(p,{icon:k,...L(`produtos`),children:`Produtos`})]}),(0,Y.jsxs)(m,{title:`Financeiro`,children:[(0,Y.jsx)(p,{icon:q,badge:3,...L(`repasses`),children:`Repasses`}),(0,Y.jsx)(p,{icon:l,...L(`cobrancas`),children:`Cobranças`}),(0,Y.jsx)(p,{icon:o,...L(`relatorios`),children:`Relatórios`})]})]})}),(0,Y.jsxs)(g,{children:[(0,Y.jsxs)(m,{children:[(0,Y.jsx)(p,{icon:G,...L(`ajuda`),children:`Ajuda`}),(0,Y.jsx)(p,{icon:O,...L(`configuracoes`),children:`Configurações`})]}),(0,Y.jsxs)(y,{name:`Ana Souza`,email:`ana@lojacentro.com.br`,children:[(0,Y.jsx)(P,{icon:x,children:`Meu perfil`}),r&&i&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(F,{}),(0,Y.jsxs)(U,{label:`Tema`,value:r,onValueChange:e=>i(e),children:[(0,Y.jsx)(j,{value:`light`,icon:H,children:`Claro`}),(0,Y.jsx)(j,{value:`dark`,icon:z,children:`Escuro`}),(0,Y.jsx)(j,{value:`system`,icon:E,children:`Sistema`})]})]}),(0,Y.jsx)(F,{}),(0,Y.jsx)(P,{icon:v,destructive:!0,children:`Sair`})]})]})]})}var $=[{id:`#10482`,cliente:`Mercado Bom Preço`,valor:`R$ 1.284,90`,status:`Pago`},{id:`#10481`,cliente:`Padaria Estrela`,valor:`R$ 312,00`,status:`Pendente`},{id:`#10480`,cliente:`Farmácia Central`,valor:`R$ 18.004,15`,status:`Pago`},{id:`#10479`,cliente:`Livraria Página 12`,valor:`R$ 94,50`,status:`Cancelado`},{id:`#10478`,cliente:`Açougue Boi Gordo`,valor:`R$ 2.450,00`,status:`Pago`}];function ee(){let[e,t]=(0,J.useState)(`desktop`),[i,a]=(0,J.useState)(`light`),[o,s]=(0,J.useState)(`abertos`);return(0,Y.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,Y.jsx)(`div`,{role:`group`,"aria-label":`Largura simulada`,className:`ts:inline-flex ts:w-fit ts:gap-2 ts:rounded-md ts:border ts:border-border-default ts:bg-bg-subtle ts:p-2`,children:[`desktop`,`tablet`].map(n=>(0,Y.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`ts:h-control-height-sm ts:rounded-sm ts:px-control-padding-x-sm ts:text-label-s ts:text-fg-secondary ts:hover:bg-bg-hover ts:aria-pressed:bg-bg-selected ts:aria-pressed:text-fg-primary`,children:n===`desktop`?`Desktop`:`Tablet (gaveta)`},n))}),(0,Y.jsx)(n,{scope:`element`,theme:i,className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:text-fg-primary`,children:(0,Y.jsxs)(C,{drawerBelow:e===`desktop`?0:1/0,className:`ts:h-640`,children:[(0,Y.jsx)(Q,{ativo:o,setAtivo:s,rotuloNavegacao:`Navegação do exemplo completo`,tema:i,setTema:a}),(0,Y.jsxs)(b,{as:`div`,children:[(0,Y.jsxs)(`header`,{className:`ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16 ts:py-12`,children:[(0,Y.jsx)(f,{}),(0,Y.jsx)(`h3`,{className:`ts:min-w-0 ts:flex-1 ts:truncate ts:text-heading-s`,children:Z[o]}),(0,Y.jsx)(u,{"aria-label":`Buscar`,leadingIcon:B,placeholder:`Buscar`,className:`ts:w-200 ts:max-lg:hidden`}),(0,Y.jsx)(r,{leadingIcon:D,children:`Novo pedido`})]}),(0,Y.jsxs)(`div`,{className:`ts:flex ts:min-h-0 ts:flex-1 ts:flex-col ts:gap-16 ts:overflow-y-auto ts:p-24`,children:[(0,Y.jsx)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-12 ts:max-lg:grid-cols-1`,children:[[`Pedidos hoje`,`48`],[`Faturamento`,`R$ 12.480,00`],[`Ticket médio`,`R$ 260,00`]].map(([e,t])=>(0,Y.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-16`,children:[(0,Y.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:e}),(0,Y.jsx)(`p`,{className:`ts:mt-4 ts:text-heading-m ts:tabular-nums`,children:t})]},e))}),(0,Y.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":`Tabela de pedidos do exemplo completo`,className:`ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default`,children:(0,Y.jsx)(`div`,{className:`ts:min-w-480`,children:$.map(e=>(0,Y.jsxs)(`div`,{className:`ts:grid ts:h-table-row-height ts:grid-cols-[80px_minmax(0,1fr)_120px_88px] ts:items-center ts:border-b ts:border-border-subtle ts:text-body-m ts:last:border-b-0`,children:[(0,Y.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:font-mono ts:text-code ts:text-fg-secondary`,children:e.id}),(0,Y.jsx)(`span`,{className:`ts:truncate ts:px-table-cell-padding-x`,children:e.cliente}),(0,Y.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-right ts:tabular-nums`,children:e.valor}),(0,Y.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-fg-secondary`,children:e.status})]},e.id))})})]})]})]},e)})]})}function te(){let[e,t]=(0,J.useState)(`clientes`);return(0,Y.jsx)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:(0,Y.jsxs)(C,{drawerBelow:0,className:`ts:h-520`,children:[(0,Y.jsx)(Q,{ativo:e,setAtivo:t,rotuloNavegacao:`Navegação do exemplo de barra branca`,appearance:`surface`,activeItem:`solid`,avatarSize:`md`}),(0,Y.jsxs)(b,{as:`div`,className:`ts:bg-bg-subtle`,children:[(0,Y.jsxs)(`header`,{className:`ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:bg-bg-surface ts:px-16 ts:py-12`,children:[(0,Y.jsx)(f,{}),(0,Y.jsx)(`h3`,{className:`ts:text-heading-s`,children:Z[e]})]}),(0,Y.jsx)(`div`,{className:`ts:p-24`,children:(0,Y.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-16 ts:text-body-m ts:text-fg-secondary`,children:`Os cartões brancos se destacam sobre o fundo do conteúdo. Recolha a barra: o grupo com o item atual também fica sólido.`})})]})]})})}function ne(){let[e,t]=(0,J.useState)(`abertos`);return(0,Y.jsx)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:(0,Y.jsxs)(C,{drawerBelow:0,defaultCollapsed:!0,className:`ts:h-520`,children:[(0,Y.jsx)(Q,{ativo:e,setAtivo:t,rotuloNavegacao:`Navegação do exemplo recolhido`}),(0,Y.jsxs)(b,{as:`div`,children:[(0,Y.jsxs)(`header`,{className:`ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16 ts:py-12`,children:[(0,Y.jsx)(f,{}),(0,Y.jsx)(`h3`,{className:`ts:text-heading-s`,children:Z[e]})]}),(0,Y.jsx)(`p`,{className:`ts:p-24 ts:text-body-m ts:text-fg-secondary`,children:`Passe o mouse nos ícones para ver o nome. O ícone de Pedidos abre os subitens num menu ao lado. O botão ao lado do título expande a barra.`})]})]})})}var re=[{nome:`SidebarProvider`,tipo:`defaultCollapsed, collapsed, onCollapsedChange, drawerBelow, className`,descricao:`Junta barra e conteúdo e guarda o estado. Defina a altura aqui (h-dvh no app).`},{nome:`Sidebar`,tipo:`as, appearance, activeItem, className, children`,descricao:`A barra: fixa em tela larga, gaveta abaixo de drawerBelow (1024 por padrão). appearance troca o fundo (subtle, padrão, ou surface); activeItem troca o destaque do item atual (soft, padrão, ou solid). Em produção, renderiza aside; use as="div" somente dentro de uma demonstração que já esteja num main.`},{nome:`SidebarHeader / SidebarContent / SidebarFooter`,tipo:`className, children`,descricao:`Topo (seletor de loja), miolo rolável (navegação) e rodapé (ajuda e conta).`},{nome:`SidebarInset`,tipo:`as, className, children`,descricao:`Área do conteúdo principal, ao lado da barra; recebe o foco do link de pular. Em produção, renderiza main; use as="div" somente dentro de uma demonstração.`},{nome:`SidebarTrigger`,tipo:`className`,descricao:`Recolhe e expande (tela larga) ou abre a gaveta (tela estreita). Fica no cabeçalho do conteúdo.`},{nome:`WorkspaceSwitcher`,tipo:`workspaces, value, onValueChange, label, action, avatarSize`,descricao:`Seletor de loja ou organização, com logotipo ou iniciais. avatarSize: sm (padrão, 24 px) ou md (32 px); recolhida, sempre sm. O fundo do hover tem o raio lg, concêntrico ao logotipo quadrado.`},{nome:`SidebarAccount`,tipo:`name, email, avatar, children`,descricao:`Conta no rodapé; os filhos são os itens do menu (MenuItem, MenuRadioGroup…).`},{nome:`NavSection`,tipo:`title, className, children`,descricao:`Grupo de itens, com título opcional.`},{nome:`NavItem`,tipo:`href, icon, active, badge, render, children`,descricao:`Link. render troca o <a> pelo link do roteador.`},{nome:`NavGroup`,tipo:`label, icon, active, defaultOpen, children`,descricao:`Item que abre subitens. Recolhida, abre um menu ao lado.`},{nome:`useSidebar()`,tipo:`() => { collapsed, setCollapsed, drawer, drawerOpen, setDrawerOpen }`,descricao:`Estado da barra, para salvar a preferência ou reagir a ela.`}];function ie(){return(0,Y.jsxs)(`article`,{children:[(0,Y.jsx)(L,{etapa:`Componente 3 · aprovado`,titulo:`Sidebar`,descricao:(0,Y.jsxs)(Y.Fragment,{children:[`Barra lateral do admin: seletor de loja, navegação com grupos e subitens, conta no rodapé, recolher em ícones e gaveta em tela estreita. Montada com `,(0,Y.jsx)(V,{children:`NavSection`}),`, `,(0,Y.jsx)(V,{children:`NavItem`}),` e `,(0,Y.jsx)(V,{children:`NavGroup`}),`.`]})}),(0,Y.jsx)(R,{codigo:`import { Button, CommandPalette, Input, MenuItem, MenuRadioGroup, MenuRadioItem, MenuSeparator, NavGroup, NavItem, NavSection, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, TesselaProvider, type ThemePreference, WorkspaceSwitcher } from '@tessela/web';
import { BarChart3, Box, CreditCard, House, LifeBuoy, LogOut, Monitor, Moon, Plus, Search, Settings, Store, Sun, User, Users, Wallet } from 'lucide-react';
import { type MouseEvent, useState } from 'react';

const lojas = [\r
  { id: 'centro', name: 'Loja Centro', description: 'Plano Pro' },\r
  { id: 'norte', name: 'Loja Norte', description: 'Plano Básico' },\r
  { id: 'online', name: 'Mercado Online', description: 'Plano Pro' },\r
];

const titulos: Record<string, string> = {\r
  inicio: 'Visão geral', abertos: 'Pedidos abertos', entregues: 'Pedidos entregues', devolucoes: 'Devoluções',\r
  clientes: 'Clientes', produtos: 'Produtos', repasses: 'Repasses', cobrancas: 'Cobranças', relatorios: 'Relatórios',\r
  ajuda: 'Ajuda', configuracoes: 'Configurações',\r
};

function BarraDeExemplo({ ativo, setAtivo, rotuloNavegacao, tema, setTema, appearance, activeItem, avatarSize }: {\r
  ativo: string; setAtivo: (id: string) => void; rotuloNavegacao: string; tema?: ThemePreference; setTema?: (t: ThemePreference) => void;\r
  appearance?: 'subtle' | 'surface'; activeItem?: 'soft' | 'solid'; avatarSize?: 'sm' | 'md';\r
}) {\r
  const [loja, setLoja] = useState('centro');\r
  const [busca, setBusca] = useState(false);\r
  const item = (id: string) => ({\r
    href: \`#\${id}\`,\r
    active: ativo === id,\r
    onClick: (e: MouseEvent) => { e.preventDefault(); setAtivo(id); },\r
  });\r
  const pedidosAtivo = ['abertos', 'entregues', 'devolucoes'].includes(ativo);\r
  return (\r
    <Sidebar as="div" appearance={appearance} activeItem={activeItem}>\r
      <SidebarHeader>\r
        <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" action={{ label: 'Adicionar loja', icon: Plus, onClick: () => {} }} avatarSize={avatarSize} />\r
        <SidebarSearch onClick={() => setBusca(true)} />\r
        {/* O ⌘K do catálogo já abre a busca do catálogo; esta abre pelo botão. */}\r
        <CommandPalette\r
          open={busca}\r
          onOpenChange={setBusca}\r
          shortcut={false}\r
          items={Object.entries(titulos).map(([id, label]) => ({ id, label, group: 'Páginas', onSelect: () => setAtivo(id) }))}\r
        />\r
      </SidebarHeader>\r
      <SidebarContent>\r
        <nav aria-label={rotuloNavegacao} className="ts:flex ts:flex-col ts:gap-20">\r
          <NavSection>\r
            <NavItem icon={House} {...item('inicio')}>Visão geral</NavItem>\r
            <NavGroup label="Pedidos" icon={Box} active={pedidosAtivo}>\r
              <NavItem badge={12} {...item('abertos')}>Abertos</NavItem>\r
              <NavItem {...item('entregues')}>Entregues</NavItem>\r
              <NavItem {...item('devolucoes')}>Devoluções</NavItem>\r
            </NavGroup>\r
            <NavItem icon={Users} {...item('clientes')}>Clientes</NavItem>\r
            <NavItem icon={Store} {...item('produtos')}>Produtos</NavItem>\r
          </NavSection>\r
          <NavSection title="Financeiro">\r
            <NavItem icon={Wallet} badge={3} {...item('repasses')}>Repasses</NavItem>\r
            <NavItem icon={CreditCard} {...item('cobrancas')}>Cobranças</NavItem>\r
            <NavItem icon={BarChart3} {...item('relatorios')}>Relatórios</NavItem>\r
          </NavSection>\r
        </nav>\r
      </SidebarContent>\r
      <SidebarFooter>\r
        <NavSection>\r
          <NavItem icon={LifeBuoy} {...item('ajuda')}>Ajuda</NavItem>\r
          <NavItem icon={Settings} {...item('configuracoes')}>Configurações</NavItem>\r
        </NavSection>\r
        <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
          <MenuItem icon={User}>Meu perfil</MenuItem>\r
          {tema && setTema && (\r
            <>\r
              <MenuSeparator />\r
              <MenuRadioGroup label="Tema" value={tema} onValueChange={(v) => setTema(v as ThemePreference)}>\r
                <MenuRadioItem value="light" icon={Sun}>Claro</MenuRadioItem>\r
                <MenuRadioItem value="dark" icon={Moon}>Escuro</MenuRadioItem>\r
                <MenuRadioItem value="system" icon={Monitor}>Sistema</MenuRadioItem>\r
              </MenuRadioGroup>\r
            </>\r
          )}\r
          <MenuSeparator />\r
          <MenuItem icon={LogOut} destructive>Sair</MenuItem>\r
        </SidebarAccount>\r
      </SidebarFooter>\r
    </Sidebar>\r
  );\r
}

const pedidos = [\r
  { id: '#10482', cliente: 'Mercado Bom Preço', valor: 'R$ 1.284,90', status: 'Pago' },\r
  { id: '#10481', cliente: 'Padaria Estrela', valor: 'R$ 312,00', status: 'Pendente' },\r
  { id: '#10480', cliente: 'Farmácia Central', valor: 'R$ 18.004,15', status: 'Pago' },\r
  { id: '#10479', cliente: 'Livraria Página 12', valor: 'R$ 94,50', status: 'Cancelado' },\r
  { id: '#10478', cliente: 'Açougue Boi Gordo', valor: 'R$ 2.450,00', status: 'Pago' },\r
];

function AdminCompleto() {\r
  const [largura, setLargura] = useState<'desktop' | 'tablet'>('desktop');\r
  const [tema, setTema] = useState<ThemePreference>('light');\r
  const [ativo, setAtivo] = useState('abertos');\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12">\r
      <div role="group" aria-label="Largura simulada" className="ts:inline-flex ts:w-fit ts:gap-2 ts:rounded-md ts:border ts:border-border-default ts:bg-bg-subtle ts:p-2">\r
        {(['desktop', 'tablet'] as const).map((l) => (\r
          <button key={l} type="button" aria-pressed={largura === l} onClick={() => setLargura(l)}\r
            className="ts:h-control-height-sm ts:rounded-sm ts:px-control-padding-x-sm ts:text-label-s ts:text-fg-secondary ts:hover:bg-bg-hover ts:aria-pressed:bg-bg-selected ts:aria-pressed:text-fg-primary">\r
            {l === 'desktop' ? 'Desktop' : 'Tablet (gaveta)'}\r
          </button>\r
        ))}\r
      </div>\r
      <TesselaProvider scope="element" theme={tema} className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:text-fg-primary">\r
        <SidebarProvider key={largura} drawerBelow={largura === 'desktop' ? 0 : Infinity} className="ts:h-640">\r
          <BarraDeExemplo ativo={ativo} setAtivo={setAtivo} rotuloNavegacao="Navegação do exemplo completo" tema={tema} setTema={setTema} />\r
          <SidebarInset as="div">\r
            <header className="ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16 ts:py-12">\r
              <SidebarTrigger />\r
              <h3 className="ts:min-w-0 ts:flex-1 ts:truncate ts:text-heading-s">{titulos[ativo]}</h3>\r
              <Input aria-label="Buscar" leadingIcon={Search} placeholder="Buscar" className="ts:w-200 ts:max-lg:hidden" />\r
              <Button leadingIcon={Plus}>Novo pedido</Button>\r
            </header>\r
            <div className="ts:flex ts:min-h-0 ts:flex-1 ts:flex-col ts:gap-16 ts:overflow-y-auto ts:p-24">\r
              <div className="ts:grid ts:grid-cols-3 ts:gap-12 ts:max-lg:grid-cols-1">\r
                {[['Pedidos hoje', '48'], ['Faturamento', 'R$ 12.480,00'], ['Ticket médio', 'R$ 260,00']].map(([rotulo, valor]) => (\r
                  <div key={rotulo} className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-16">\r
                    <p className="ts:text-label-s ts:text-fg-muted">{rotulo}</p>\r
                    <p className="ts:mt-4 ts:text-heading-m ts:tabular-nums">{valor}</p>\r
                  </div>\r
                ))}\r
              </div>\r
              <div tabIndex={0} role="region" aria-label="Tabela de pedidos do exemplo completo" className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
                <div className="ts:min-w-480">\r
                {pedidos.map((p) => (\r
                  <div key={p.id} className="ts:grid ts:h-table-row-height ts:grid-cols-[80px_minmax(0,1fr)_120px_88px] ts:items-center ts:border-b ts:border-border-subtle ts:text-body-m ts:last:border-b-0">\r
                    <span className="ts:px-table-cell-padding-x ts:font-mono ts:text-code ts:text-fg-secondary">{p.id}</span>\r
                    <span className="ts:truncate ts:px-table-cell-padding-x">{p.cliente}</span>\r
                    <span className="ts:px-table-cell-padding-x ts:text-right ts:tabular-nums">{p.valor}</span>\r
                    <span className="ts:px-table-cell-padding-x ts:text-fg-secondary">{p.status}</span>\r
                  </div>\r
                ))}\r
                </div>\r
              </div>\r
            </div>\r
          </SidebarInset>\r
        </SidebarProvider>\r
      </TesselaProvider>\r
    </div>\r
  );\r
}

<AdminCompleto />`,id:`em-uso`,titulo:`Em uso`,descricao:`Admin completo. Troque a loja no topo, abra Pedidos, use o botão ao lado do título para recolher e o menu da conta para trocar o tema. Em Tablet, a barra vira gaveta. As demonstrações usam as='div' porque já ficam dentro do conteúdo principal desta página; no app, Sidebar e SidebarInset continuam aside e main.`,children:(0,Y.jsx)(ee,{})}),(0,Y.jsx)(R,{codigo:`import { CommandPalette, MenuItem, MenuRadioGroup, MenuRadioItem, MenuSeparator, NavGroup, NavItem, NavSection, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, type ThemePreference, WorkspaceSwitcher } from '@tessela/web';
import { BarChart3, Box, CreditCard, House, LifeBuoy, LogOut, Monitor, Moon, Plus, Settings, Store, Sun, User, Users, Wallet } from 'lucide-react';
import { type MouseEvent, useState } from 'react';

const lojas = [\r
  { id: 'centro', name: 'Loja Centro', description: 'Plano Pro' },\r
  { id: 'norte', name: 'Loja Norte', description: 'Plano Básico' },\r
  { id: 'online', name: 'Mercado Online', description: 'Plano Pro' },\r
];

const titulos: Record<string, string> = {\r
  inicio: 'Visão geral', abertos: 'Pedidos abertos', entregues: 'Pedidos entregues', devolucoes: 'Devoluções',\r
  clientes: 'Clientes', produtos: 'Produtos', repasses: 'Repasses', cobrancas: 'Cobranças', relatorios: 'Relatórios',\r
  ajuda: 'Ajuda', configuracoes: 'Configurações',\r
};

function BarraDeExemplo({ ativo, setAtivo, rotuloNavegacao, tema, setTema, appearance, activeItem, avatarSize }: {\r
  ativo: string; setAtivo: (id: string) => void; rotuloNavegacao: string; tema?: ThemePreference; setTema?: (t: ThemePreference) => void;\r
  appearance?: 'subtle' | 'surface'; activeItem?: 'soft' | 'solid'; avatarSize?: 'sm' | 'md';\r
}) {\r
  const [loja, setLoja] = useState('centro');\r
  const [busca, setBusca] = useState(false);\r
  const item = (id: string) => ({\r
    href: \`#\${id}\`,\r
    active: ativo === id,\r
    onClick: (e: MouseEvent) => { e.preventDefault(); setAtivo(id); },\r
  });\r
  const pedidosAtivo = ['abertos', 'entregues', 'devolucoes'].includes(ativo);\r
  return (\r
    <Sidebar as="div" appearance={appearance} activeItem={activeItem}>\r
      <SidebarHeader>\r
        <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" action={{ label: 'Adicionar loja', icon: Plus, onClick: () => {} }} avatarSize={avatarSize} />\r
        <SidebarSearch onClick={() => setBusca(true)} />\r
        {/* O ⌘K do catálogo já abre a busca do catálogo; esta abre pelo botão. */}\r
        <CommandPalette\r
          open={busca}\r
          onOpenChange={setBusca}\r
          shortcut={false}\r
          items={Object.entries(titulos).map(([id, label]) => ({ id, label, group: 'Páginas', onSelect: () => setAtivo(id) }))}\r
        />\r
      </SidebarHeader>\r
      <SidebarContent>\r
        <nav aria-label={rotuloNavegacao} className="ts:flex ts:flex-col ts:gap-20">\r
          <NavSection>\r
            <NavItem icon={House} {...item('inicio')}>Visão geral</NavItem>\r
            <NavGroup label="Pedidos" icon={Box} active={pedidosAtivo}>\r
              <NavItem badge={12} {...item('abertos')}>Abertos</NavItem>\r
              <NavItem {...item('entregues')}>Entregues</NavItem>\r
              <NavItem {...item('devolucoes')}>Devoluções</NavItem>\r
            </NavGroup>\r
            <NavItem icon={Users} {...item('clientes')}>Clientes</NavItem>\r
            <NavItem icon={Store} {...item('produtos')}>Produtos</NavItem>\r
          </NavSection>\r
          <NavSection title="Financeiro">\r
            <NavItem icon={Wallet} badge={3} {...item('repasses')}>Repasses</NavItem>\r
            <NavItem icon={CreditCard} {...item('cobrancas')}>Cobranças</NavItem>\r
            <NavItem icon={BarChart3} {...item('relatorios')}>Relatórios</NavItem>\r
          </NavSection>\r
        </nav>\r
      </SidebarContent>\r
      <SidebarFooter>\r
        <NavSection>\r
          <NavItem icon={LifeBuoy} {...item('ajuda')}>Ajuda</NavItem>\r
          <NavItem icon={Settings} {...item('configuracoes')}>Configurações</NavItem>\r
        </NavSection>\r
        <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
          <MenuItem icon={User}>Meu perfil</MenuItem>\r
          {tema && setTema && (\r
            <>\r
              <MenuSeparator />\r
              <MenuRadioGroup label="Tema" value={tema} onValueChange={(v) => setTema(v as ThemePreference)}>\r
                <MenuRadioItem value="light" icon={Sun}>Claro</MenuRadioItem>\r
                <MenuRadioItem value="dark" icon={Moon}>Escuro</MenuRadioItem>\r
                <MenuRadioItem value="system" icon={Monitor}>Sistema</MenuRadioItem>\r
              </MenuRadioGroup>\r
            </>\r
          )}\r
          <MenuSeparator />\r
          <MenuItem icon={LogOut} destructive>Sair</MenuItem>\r
        </SidebarAccount>\r
      </SidebarFooter>\r
    </Sidebar>\r
  );\r
}

function BarraBranca() {\r
  const [ativo, setAtivo] = useState('clientes');\r
  return (\r
    <div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
      <SidebarProvider drawerBelow={0} className="ts:h-520">\r
        <BarraDeExemplo ativo={ativo} setAtivo={setAtivo} rotuloNavegacao="Navegação do exemplo de barra branca" appearance="surface" activeItem="solid" avatarSize="md" />\r
        <SidebarInset as="div" className="ts:bg-bg-subtle">\r
          <header className="ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:bg-bg-surface ts:px-16 ts:py-12">\r
            <SidebarTrigger />\r
            <h3 className="ts:text-heading-s">{titulos[ativo]}</h3>\r
          </header>\r
          <div className="ts:p-24">\r
            <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-16 ts:text-body-m ts:text-fg-secondary">\r
              Os cartões brancos se destacam sobre o fundo do conteúdo. Recolha a barra: o grupo com o item atual também fica sólido.\r
            </div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

<BarraBranca />`,id:`barra-branca`,titulo:`Barra branca e item atual sólido`,descricao:`appearance='surface' deixa a barra branca ao lado de um conteúdo em bg-subtle; activeItem='solid' pinta o item atual com o fundo da ação principal; avatarSize='md' aumenta o logotipo da loja. As três vêm desligadas; o backoffice do Menux usa as três.`,children:(0,Y.jsx)(te,{})}),(0,Y.jsx)(R,{codigo:`import { CommandPalette, MenuItem, MenuRadioGroup, MenuRadioItem, MenuSeparator, NavGroup, NavItem, NavSection, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, type ThemePreference, WorkspaceSwitcher } from '@tessela/web';
import { BarChart3, Box, CreditCard, House, LifeBuoy, LogOut, Monitor, Moon, Plus, Settings, Store, Sun, User, Users, Wallet } from 'lucide-react';
import { type MouseEvent, useState } from 'react';

const lojas = [\r
  { id: 'centro', name: 'Loja Centro', description: 'Plano Pro' },\r
  { id: 'norte', name: 'Loja Norte', description: 'Plano Básico' },\r
  { id: 'online', name: 'Mercado Online', description: 'Plano Pro' },\r
];

const titulos: Record<string, string> = {\r
  inicio: 'Visão geral', abertos: 'Pedidos abertos', entregues: 'Pedidos entregues', devolucoes: 'Devoluções',\r
  clientes: 'Clientes', produtos: 'Produtos', repasses: 'Repasses', cobrancas: 'Cobranças', relatorios: 'Relatórios',\r
  ajuda: 'Ajuda', configuracoes: 'Configurações',\r
};

function BarraDeExemplo({ ativo, setAtivo, rotuloNavegacao, tema, setTema, appearance, activeItem, avatarSize }: {\r
  ativo: string; setAtivo: (id: string) => void; rotuloNavegacao: string; tema?: ThemePreference; setTema?: (t: ThemePreference) => void;\r
  appearance?: 'subtle' | 'surface'; activeItem?: 'soft' | 'solid'; avatarSize?: 'sm' | 'md';\r
}) {\r
  const [loja, setLoja] = useState('centro');\r
  const [busca, setBusca] = useState(false);\r
  const item = (id: string) => ({\r
    href: \`#\${id}\`,\r
    active: ativo === id,\r
    onClick: (e: MouseEvent) => { e.preventDefault(); setAtivo(id); },\r
  });\r
  const pedidosAtivo = ['abertos', 'entregues', 'devolucoes'].includes(ativo);\r
  return (\r
    <Sidebar as="div" appearance={appearance} activeItem={activeItem}>\r
      <SidebarHeader>\r
        <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" action={{ label: 'Adicionar loja', icon: Plus, onClick: () => {} }} avatarSize={avatarSize} />\r
        <SidebarSearch onClick={() => setBusca(true)} />\r
        {/* O ⌘K do catálogo já abre a busca do catálogo; esta abre pelo botão. */}\r
        <CommandPalette\r
          open={busca}\r
          onOpenChange={setBusca}\r
          shortcut={false}\r
          items={Object.entries(titulos).map(([id, label]) => ({ id, label, group: 'Páginas', onSelect: () => setAtivo(id) }))}\r
        />\r
      </SidebarHeader>\r
      <SidebarContent>\r
        <nav aria-label={rotuloNavegacao} className="ts:flex ts:flex-col ts:gap-20">\r
          <NavSection>\r
            <NavItem icon={House} {...item('inicio')}>Visão geral</NavItem>\r
            <NavGroup label="Pedidos" icon={Box} active={pedidosAtivo}>\r
              <NavItem badge={12} {...item('abertos')}>Abertos</NavItem>\r
              <NavItem {...item('entregues')}>Entregues</NavItem>\r
              <NavItem {...item('devolucoes')}>Devoluções</NavItem>\r
            </NavGroup>\r
            <NavItem icon={Users} {...item('clientes')}>Clientes</NavItem>\r
            <NavItem icon={Store} {...item('produtos')}>Produtos</NavItem>\r
          </NavSection>\r
          <NavSection title="Financeiro">\r
            <NavItem icon={Wallet} badge={3} {...item('repasses')}>Repasses</NavItem>\r
            <NavItem icon={CreditCard} {...item('cobrancas')}>Cobranças</NavItem>\r
            <NavItem icon={BarChart3} {...item('relatorios')}>Relatórios</NavItem>\r
          </NavSection>\r
        </nav>\r
      </SidebarContent>\r
      <SidebarFooter>\r
        <NavSection>\r
          <NavItem icon={LifeBuoy} {...item('ajuda')}>Ajuda</NavItem>\r
          <NavItem icon={Settings} {...item('configuracoes')}>Configurações</NavItem>\r
        </NavSection>\r
        <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
          <MenuItem icon={User}>Meu perfil</MenuItem>\r
          {tema && setTema && (\r
            <>\r
              <MenuSeparator />\r
              <MenuRadioGroup label="Tema" value={tema} onValueChange={(v) => setTema(v as ThemePreference)}>\r
                <MenuRadioItem value="light" icon={Sun}>Claro</MenuRadioItem>\r
                <MenuRadioItem value="dark" icon={Moon}>Escuro</MenuRadioItem>\r
                <MenuRadioItem value="system" icon={Monitor}>Sistema</MenuRadioItem>\r
              </MenuRadioGroup>\r
            </>\r
          )}\r
          <MenuSeparator />\r
          <MenuItem icon={LogOut} destructive>Sair</MenuItem>\r
        </SidebarAccount>\r
      </SidebarFooter>\r
    </Sidebar>\r
  );\r
}

function Recolhida() {\r
  const [ativo, setAtivo] = useState('abertos');\r
  return (\r
    <div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
      <SidebarProvider drawerBelow={0} defaultCollapsed className="ts:h-520">\r
        <BarraDeExemplo ativo={ativo} setAtivo={setAtivo} rotuloNavegacao="Navegação do exemplo recolhido" />\r
        <SidebarInset as="div">\r
          <header className="ts:flex ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16 ts:py-12">\r
            <SidebarTrigger />\r
            <h3 className="ts:text-heading-s">{titulos[ativo]}</h3>\r
          </header>\r
          <p className="ts:p-24 ts:text-body-m ts:text-fg-secondary">\r
            Passe o mouse nos ícones para ver o nome. O ícone de Pedidos abre os subitens num menu ao lado. O botão ao lado do título expande a barra.\r
          </p>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

<Recolhida />`,id:`recolhida`,titulo:`Recolhida`,descricao:`Só ícones, com 56 px. O nome aparece numa dica ao passar o mouse; contadores viram um ponto; grupos abrem num menu ao lado.`,children:(0,Y.jsx)(ne,{})}),(0,Y.jsx)(R,{semCaixa:!0,id:`estrutura`,titulo:`Estrutura`,descricao:`Medidas e tokens.`,children:(0,Y.jsxs)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:[(0,Y.jsxs)(`li`,{children:[`Largura `,(0,Y.jsx)(V,{children:`sidebar/width`}),` (240) e `,(0,Y.jsx)(V,{children:`sidebar/width-collapsed`}),` (56); fundo `,(0,Y.jsx)(V,{children:`bg/subtle`}),` (ou `,(0,Y.jsx)(V,{children:`bg/surface`}),` com `,(0,Y.jsx)(V,{children:`appearance='surface'`}),`) e borda `,(0,Y.jsx)(V,{children:`border/default`}),`.`]}),(0,Y.jsxs)(`li`,{children:[`Item atual: `,(0,Y.jsx)(V,{children:`bg/selected`}),`; com `,(0,Y.jsx)(V,{children:`activeItem='solid'`}),`, `,(0,Y.jsx)(V,{children:`action/primary`}),` no fundo e no texto, e o anel de foco na cor do texto.`]}),(0,Y.jsx)(`li`,{children:`Respiro de 12 px nas bordas; seções separadas por 20 px; itens por 2 px.`}),(0,Y.jsx)(`li`,{children:`Itens com as medidas do Button médio: 32 px de altura, raio de 10, texto 14/20 peso 500.`}),(0,Y.jsx)(`li`,{children:`Subitens alinham com o rótulo do grupo e têm uma linha à esquerda.`}),(0,Y.jsx)(`li`,{children:`Recolher anima a largura em 200 ms; abrir o grupo, a altura em 150 ms. Com movimento reduzido, sem animação.`}),(0,Y.jsxs)(`li`,{children:[`Abaixo de 1024 px (`,(0,Y.jsx)(V,{children:`breakpoint/lg`}),`), a barra vira gaveta com fundo escurecido; arrastar para a esquerda fecha.`]})]})}),(0,Y.jsx)(R,{semCaixa:!0,id:`roteador`,titulo:`Com o roteador`,descricao:`Exemplo com TanStack Router, o padrão do Framework.`,children:(0,Y.jsx)(i,{titulo:`Layout com TanStack Router`,codigo:`import { Link, useLocation } from '@tanstack/react-router';

function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <SidebarProvider className="ts:h-dvh">
      <Sidebar>
        <SidebarHeader><WorkspaceSwitcher … /></SidebarHeader>
        <SidebarContent>
          <nav aria-label="Principal">
            <NavSection>
              <NavItem render={<Link to="/" />} icon={House} active={pathname === '/'}>Visão geral</NavItem>
              <NavGroup label="Pedidos" icon={Box} active={pathname.startsWith('/pedidos')}>
                <NavItem render={<Link to="/pedidos/abertos" />} active={pathname === '/pedidos/abertos'}>Abertos</NavItem>
              </NavGroup>
            </NavSection>
          </nav>
        </SidebarContent>
        <SidebarFooter><SidebarAccount name="Ana Souza" email="…">…</SidebarAccount></SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header><SidebarTrigger /> …</header>
        <div className="ts:overflow-y-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}`})}),(0,Y.jsx)(R,{semCaixa:!0,id:`persistencia-ssr`,titulo:`Persistência com SSR`,descricao:`Leia a preferência no servidor e entregue-a como estado inicial. O efeito do cliente só grava depois da hidratação, sem acessar localStorage ou window durante o render.`,children:(0,Y.jsx)(i,{titulo:`Persistência de sidebar com SSR`,codigo:`async function LayoutDoServidor({ children }) {
  const cookie = await cookies();
  const defaultCollapsed = cookie.get('sidebar-collapsed')?.value === '1';
  return <Layout defaultCollapsed={defaultCollapsed}>{children}</Layout>;
}

function Layout({ defaultCollapsed, children }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  useEffect(() => {
    document.cookie = \`sidebar-collapsed=\${collapsed ? '1' : '0'}; Path=/; SameSite=Lax\`;
  }, [collapsed]);

  return <SidebarProvider collapsed={collapsed} onCollapsedChange={setCollapsed} className="ts:h-dvh">{children}</SidebarProvider>;
}`})}),(0,Y.jsx)(R,{semCaixa:!0,id:`pecas`,titulo:`Peças e propriedades`,children:(0,Y.jsx)(I,{itens:re})}),(0,Y.jsx)(R,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,Y.jsxs)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:[(0,Y.jsxs)(`li`,{children:[`A navegação fica num `,(0,Y.jsx)(V,{children:`<nav aria-label="Principal">`}),`; cada seção é uma lista nomeada pelo título, inclusive recolhida.`]}),(0,Y.jsxs)(`li`,{children:[`O item da página atual tem `,(0,Y.jsx)(V,{children:`aria-current="page"`}),`. Grupos são botões com `,(0,Y.jsx)(V,{children:`aria-expanded`}),`.`]}),(0,Y.jsx)(`li`,{children:`Recolhida, cada item mantém o nome para o leitor de tela; a dica é só um reforço visual.`}),(0,Y.jsx)(`li`,{children:`Seletor de loja e conta são menus: setas navegam, Enter escolhe, Esc fecha e o foco volta ao gatilho.`}),(0,Y.jsx)(`li`,{children:`O botão da barra muda de nome com o estado ("Recolher navegação", "Expandir navegação", "Abrir navegação").`}),(0,Y.jsx)(`li`,{children:`O primeiro foco é “Pular para o conteúdo”, que leva ao conteúdo principal da composição.`}),(0,Y.jsx)(`li`,{children:`Com toque, os gatilhos da loja e da conta têm alvo de 44 px de altura; com a barra recolhida, também de largura. O texto e o layout não se movem.`}),(0,Y.jsx)(`li`,{children:`A gaveta é um diálogo: prende o foco, fecha com Esc, com o botão de fechar ou tocando fora, e devolve o foco a quem a abriu. Escolher um destino também fecha.`})]})})]})}export{ie as SidebarPagina};