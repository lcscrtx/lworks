import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{f as n,g as r,hr as i,i as a,m as o,n as s,p as c,qr as l,u,vi as d}from"./Codigo-Dgz1In5l.js";import{t as f}from"./monitor-C8NX-aGh.js";import{n as p}from"./Upload-BRCho5Cm.js";import{t as m}from"./smartphone-D7Jpjpk8.js";import{s as h}from"./tiptap-jvs8iIPE.js";import{i as g,n as _,t as v}from"./Tabs-C69_giCo.js";import{A as y,c as b,d as x,k as S,l as C,p as w,s as T,u as E,x as D}from"./index-3SU4ioj-.js";import{modelos as O}from"./ModelosPaginas-D34vmB0O.js";import{ComandoDeInstalacao as k}from"./DocsPaginas-51sKbKQl.js";var A={name:`maximize-2`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]};A.node;var j=d(A),M={name:`tablet`,size:24,node:[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,ry:`2`,key:`76otgf`}],[`line`,{x1:`12`,x2:`12.01`,y1:`18`,y2:`18`,key:`1dp563`}]]};M.node;var N=d(M),P=e(t(),1),F={ModeloDashboard:`import { AreaChart, Avatar, Badge, BarChart, Button, Card, type DateRange, DateRangePicker, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, Stat, WorkspaceSwitcher, useTessela } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, Download, House, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; canal: string; criado: Date; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves'];

const canais = ['Site', 'App', 'iFood', 'Balcão'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Pago', 'Cancelado'];

const pedidos: Pedido[] = Array.from({ length: 86 }, (_, i) => ({\r
  id: String(1042 - i),\r
  cliente: clientes[(i * 5) % clientes.length]!,\r
  canal: canais[(i * 3) % canais.length]!,\r
  criado: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - Math.floor(i / 6), 19 - (i % 9), (i * 17) % 60),\r
  total: Math.round(((i * 7919) % 42000) + 1890) / 100,\r
  status: estados[i % estados.length]!,\r
}));

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const diario = Array.from({ length: 30 }, (_, i) => {\r
  const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 29 + i);\r
  const fds = d.getDay() === 5 || d.getDay() === 6 ? 1.3 : 1;\r
  return { dia: \`\${String(d.getDate()).padStart(2, '0')}/\${String(d.getMonth() + 1).padStart(2, '0')}\`, atual: Math.round((3300 + i * 22 + Math.sin(i / 3) * 400) * fds), anterior: Math.round((2950 + i * 12 + Math.cos(i / 4) * 350) * fds) };\r
});

const maisVendidos = [\r
  { produto: 'Café torrado 500 g', vendas: 412 }, { produto: 'Prensa francesa', vendas: 238 }, { produto: 'Filtro de papel 103', vendas: 201 },\r
  { produto: 'Caneca esmaltada', vendas: 164 }, { produto: 'Chocolate quente', vendas: 122 },\r
];

export function ModeloDashboard({ cheio }: { cheio?: boolean }) {\r
  const { locale } = useTessela();\r
  const { real, realCurto } = formatadores(locale);\r
  const [periodo, setPeriodo] = useState<DateRange | null>({ from: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 29), to: hoje });\r
  const total = diario.reduce((t, d) => t + d.atual, 0);\r
  const anterior = diario.reduce((t, d) => t + d.anterior, 0);\r
  return (\r
    <Moldura ativo="modelo-dashboard" cheio={cheio}>\r
      <PageHeader\r
        title="Visão geral"\r
        description="Loja Centro · últimos 30 dias"\r
        actions={<><DateRangePicker aria-label="Período" value={periodo} onValueChange={setPeriodo} max={hoje} className="ts:w-260" /><Button variant="secondary" leadingIcon={Download}>Exportar</Button></>}\r
      />\r
      <div className="ts:grid ts:grid-cols-4 ts:gap-16 ts:max-xl:grid-cols-2 ts:max-md:grid-cols-1">\r
        <Card><Stat label="Vendas" value={realCurto.format(total)} delta={total / anterior - 1} deltaLabel="vs. período anterior" sparkline={diario.map((d) => d.atual)} /></Card>\r
        <Card><Stat label="Pedidos" value="1.286" delta={0.071} deltaLabel="vs. período anterior" /></Card>\r
        <Card><Stat label="Ticket médio" value="R$ 118,40" delta={-0.014} deltaLabel="vs. período anterior" /></Card>\r
        <Card><Stat label="Cancelamentos" value="2,1%" delta={-0.22} positiveIs="bad" deltaLabel="vs. período anterior" /></Card>\r
      </div>\r
      <Card title="Vendas por dia" description="Pagas, sem cancelamentos">\r
        <AreaChart aria-label="Vendas por dia" data={diario} index="dia" series={[{ key: 'atual', label: 'Este período' }, { key: 'anterior', label: 'Período anterior', color: 2, dashed: true }]} valueFormatter={(v) => real.format(v)} height={260} />\r
      </Card>\r
      <div className="ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ts:gap-16 ts:max-xl:grid-cols-1">\r
        <Card title="Mais vendidos">\r
          <BarChart aria-label="Produtos mais vendidos" data={maisVendidos} index="produto" series={[{ key: 'vendas', label: 'Unidades' }]} layout="horizontal" height={220} />\r
        </Card>\r
        <Card title="Últimos pedidos" flush footer={<Button size="sm" variant="ghost" onClick={() => irPara('modelo-lista')}>Ver todos os pedidos</Button>}>\r
          <ul className="ts:flex ts:flex-col">\r
            {pedidos.slice(0, 5).map((p) => (\r
              <li key={p.id} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
                <Avatar name={p.cliente} />\r
                <div className="ts:min-w-0 ts:flex-1"><p className="ts:truncate ts:text-body-m">{p.cliente}</p><p className="ts:text-body-s ts:text-fg-muted">#{p.id} · {p.canal}</p></div>\r
                <span className="ts:text-body-m ts:tabular-nums">{real.format(p.total)}</span>\r
                <Badge tone={tom[p.status]} dot>{p.status}</Badge>\r
              </li>\r
            ))}\r
          </ul>\r
        </Card>\r
      </div>\r
    </Moldura>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;`,ModeloLista:`import { Badge, Button, DataTable, type DateRange, DateRangePicker, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Select, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, Tab, TabList, TabPanel, Tabs, WorkspaceSwitcher, createColumns, useTessela, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, Download, House, LogOut, Plus, Printer, Send, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useMemo, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; canal: string; criado: Date; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves'];

const canais = ['Site', 'App', 'iFood', 'Balcão'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Pago', 'Cancelado'];

const pedidos: Pedido[] = Array.from({ length: 86 }, (_, i) => ({\r
  id: String(1042 - i),\r
  cliente: clientes[(i * 5) % clientes.length]!,\r
  canal: canais[(i * 3) % canais.length]!,\r
  criado: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - Math.floor(i / 6), 19 - (i % 9), (i * 17) % 60),\r
  total: Math.round(((i * 7919) % 42000) + 1890) / 100,\r
  status: estados[i % estados.length]!,\r
}));

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const col = createColumns<Pedido>();

function colunasDoLocale(locale: string) {\r
  const { dataHora, real } = formatadores(locale);\r
  return col.columns([\r
  col.accessor('id', { header: 'Pedido', enableHiding: false, meta: { width: 96 }, cell: (c) => <a href={caminhoDoModelo('modelo-detalhe')} onClick={(e) => { e.preventDefault(); irPara('modelo-detalhe'); }} className="ts:inline-flex ts:min-w-target-min ts:items-baseline ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:font-mono ts:text-code ts:text-fg-primary ts:underline-offset-2 ts:hover:underline">#{c.getValue()}</a> }),\r
  col.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  col.accessor('canal', { header: 'Canal', meta: { width: 100 } }),\r
  col.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 130 }, cell: (c) => dataHora.format(c.getValue()) }),\r
  col.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  col.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
  ]);\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

export function ModeloLista({ cheio }: { cheio?: boolean }) {\r
  const toast = useToast();\r
  const { locale } = useTessela();\r
  const colunas = useMemo(() => colunasDoLocale(locale), [locale]);\r
  const [aba, setAba] = useState('todos');\r
  const [canal, setCanal] = useState('todos');\r
  const [periodo, setPeriodo] = useState<DateRange | null>(null);\r
  const visiveis = useMemo(() => pedidos.filter((p) =>\r
    (aba === 'todos' || (aba === 'abertos' ? p.status === 'Pago' || p.status === 'Pendente' : aba === 'enviados' ? p.status === 'Enviado' : p.status === 'Cancelado'))\r
    && (canal === 'todos' || p.canal === canal)\r
    && (!periodo?.to || (p.criado >= periodo.from && p.criado <= new Date(periodo.to.getFullYear(), periodo.to.getMonth(), periodo.to.getDate() + 1))),\r
  ), [aba, canal, periodo]);\r
  const conta = (f: (p: Pedido) => boolean) => pedidos.filter(f).length;\r
  return (\r
    <Moldura ativo="modelo-lista" cheio={cheio}>\r
      <Tabs value={aba} onValueChange={setAba}>\r
        <PageHeader\r
          title="Pedidos"\r
          description="Todos os pedidos da Loja Centro, do mais novo para o mais antigo."\r
          actions={<><Button variant="secondary" leadingIcon={Download}>Exportar</Button><Button leadingIcon={Plus}>Novo pedido</Button></>}\r
        >\r
          <TabList aria-label="Situação dos pedidos">\r
            <Tab value="todos" count={pedidos.length}>Todos</Tab>\r
            <Tab value="abertos" count={conta((p) => p.status === 'Pago' || p.status === 'Pendente')}>Abertos</Tab>\r
            <Tab value="enviados" count={conta((p) => p.status === 'Enviado')}>Enviados</Tab>\r
            <Tab value="cancelados" count={conta((p) => p.status === 'Cancelado')}>Cancelados</Tab>\r
          </TabList>\r
        </PageHeader>\r
        {/* Um painel só: as abas filtram a mesma tabela. */}\r
        <TabPanel value={aba}>\r
          <DataTable\r
            aria-label="Pedidos"\r
            data={visiveis}\r
            columns={colunas}\r
            getRowId={(p) => p.id}\r
            rowLabel={(p) => \`pedido #\${p.id}\`}\r
            search\r
            searchPlaceholder="Buscar por cliente ou número"\r
            filters={(\r
              <>\r
                <Select aria-label="Canal" className="ts:w-160" options={[{ value: 'todos', label: 'Todos os canais' }, ...canais.map((c) => ({ value: c, label: c }))]} value={canal} onValueChange={(v) => setCanal(v ?? 'todos')} />\r
                <DateRangePicker aria-label="Período" value={periodo} onValueChange={setPeriodo} max={hoje} className="ts:w-260" />\r
              </>\r
            )}\r
            columnToggle\r
            selectable\r
            bulkActions={({ ids, clear }) => (\r
              <>\r
                <Button size="sm" variant="secondary" leadingIcon={Send} onClick={() => { clear(); toast.success(\`\${ids.length} pedidos marcados como enviados\`); }}>Marcar como enviados</Button>\r
                <Button size="sm" variant="secondary" leadingIcon={Printer}>Imprimir etiquetas</Button>\r
              </>\r
            )}\r
          />\r
        </TabPanel>\r
      </Tabs>\r
    </Moldura>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;`,ModeloListaManual:`import { Badge, Button, DataTable, EmptyState, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, type PaginationState, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, WorkspaceSwitcher, createColumns, useTessela } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CloudOff, CreditCard, House, LogOut, RefreshCw, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useEffect, useMemo, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; canal: string; criado: Date; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves'];

const canais = ['Site', 'App', 'iFood', 'Balcão'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Pago', 'Cancelado'];

const pedidos: Pedido[] = Array.from({ length: 86 }, (_, i) => ({\r
  id: String(1042 - i),\r
  cliente: clientes[(i * 5) % clientes.length]!,\r
  canal: canais[(i * 3) % canais.length]!,\r
  criado: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - Math.floor(i / 6), 19 - (i % 9), (i * 17) % 60),\r
  total: Math.round(((i * 7919) % 42000) + 1890) / 100,\r
  status: estados[i % estados.length]!,\r
}));

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const col = createColumns<Pedido>();

function colunasDoLocale(locale: string) {\r
  const { dataHora, real } = formatadores(locale);\r
  return col.columns([\r
  col.accessor('id', { header: 'Pedido', enableHiding: false, meta: { width: 96 }, cell: (c) => <a href={caminhoDoModelo('modelo-detalhe')} onClick={(e) => { e.preventDefault(); irPara('modelo-detalhe'); }} className="ts:inline-flex ts:min-w-target-min ts:items-baseline ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:font-mono ts:text-code ts:text-fg-primary ts:underline-offset-2 ts:hover:underline">#{c.getValue()}</a> }),\r
  col.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  col.accessor('canal', { header: 'Canal', meta: { width: 100 } }),\r
  col.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 130 }, cell: (c) => dataHora.format(c.getValue()) }),\r
  col.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  col.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
  ]);\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const totalDePedidosManuais = 1286;

export function ModeloListaManual({ cheio }: { cheio?: boolean }) {\r
  const { locale } = useTessela();\r
  const colunas = useMemo(() => colunasDoLocale(locale), [locale]);\r
  const [paginacao, setPaginacao] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });\r
  const [carregando, setCarregando] = useState(false);\r
  const [erro, setErro] = useState(false);\r
  const [requisicao, setRequisicao] = useState(0);\r
  const dadosDaPagina = useMemo(() => Array.from({ length: paginacao.pageSize }, (_, indice) => {\r
    const base = pedidos[(paginacao.pageIndex * paginacao.pageSize + indice) % pedidos.length]!;\r
    return { ...base, id: String(1042 - paginacao.pageIndex * paginacao.pageSize - indice) };\r
  }), [paginacao]);\r
\r
  useEffect(() => {\r
    setCarregando(true);\r
    const espera = window.setTimeout(() => setCarregando(false), 650);\r
    return () => window.clearTimeout(espera);\r
  }, [paginacao, requisicao]);\r
\r
  function tentarDeNovo() {\r
    setErro(false);\r
    setRequisicao((atual) => atual + 1);\r
  }\r
\r
  return (\r
    <Moldura ativo="modelo-lista" cheio={cheio}>\r
      <PageHeader\r
        title="Pedidos por página"\r
        description="A API entrega apenas a página atual. A tabela recebe o total para manter a paginação correta."\r
        actions={(\r
          <>\r
            <Button variant="secondary" loading={carregando} onClick={tentarDeNovo} leadingIcon={RefreshCw}>Atualizar</Button>\r
            <Button variant="ghost" onClick={() => { setCarregando(false); setErro(true); }}>Simular erro</Button>\r
          </>\r
        )}\r
      />\r
      <DataTable\r
        aria-label="Pedidos por página"\r
        data={erro ? [] : dadosDaPagina}\r
        columns={colunas}\r
        getRowId={(pedido) => pedido.id}\r
        rowLabel={(pedido) => \`pedido #\${pedido.id}\`}\r
        manual\r
        rowCount={totalDePedidosManuais}\r
        loading={carregando}\r
        pagination={paginacao}\r
        onPaginationChange={setPaginacao}\r
        pageSizeOptions={[10, 25, 50]}\r
        emptyState={erro ? (\r
          <EmptyState\r
            size="sm"\r
            headingLevel={3}\r
            icon={CloudOff}\r
            title="Não foi possível carregar os pedidos"\r
            description="A conexão com o servidor falhou. Seus filtros continuam prontos para tentar de novo."\r
            actions={<Button size="sm" variant="secondary" leadingIcon={RefreshCw} onClick={tentarDeNovo}>Tentar de novo</Button>}\r
          />\r
        ) : undefined}\r
      />\r
    </Moldura>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;`,ModeloPaginaNaoEncontrada:`import { Button, Card, EmptyState, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, WorkspaceSwitcher } from '@tessela/web';
import { ArrowLeft, BarChart3, Box, CircleHelp, Compass, CreditCard, House, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

export function ModeloPaginaNaoEncontrada({ cheio }: { cheio?: boolean }) {\r
  return (\r
    <Moldura ativo="" cheio={cheio}>\r
      <Card>\r
        <EmptyState\r
          icon={Compass}\r
          title="Página não encontrada"\r
          description="O endereço que você abriu não existe ou foi removido. Volte para os pedidos para continuar o trabalho."\r
          actions={<Button leadingIcon={ArrowLeft} onClick={() => irPara('modelo-lista')}>Voltar para pedidos</Button>}\r
        />\r
      </Card>\r
    </Moldura>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;`,ModeloDetalhe:`import { Alert, Avatar, Badge, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Card, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, Tab, TabList, TabPanel, Tabs, Timeline, type TimelineItem, WorkspaceSwitcher, useTessela, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, Download, Ellipsis, House, LogOut, Package, Printer, Settings, ShoppingBag, Store, Trash2, TriangleAlert, Truck, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

const historico: TimelineItem[] = [\r
  { id: 'criado', title: 'Pedido criado pelo site', actor: 'Ana Souza', date: new Date(2026, 8, 25, 14, 32), icon: ShoppingBag },\r
  { id: 'pago', title: 'Pagamento aprovado (Pix)', actor: 'Sistema', date: new Date(2026, 8, 25, 14, 33), icon: CreditCard, tone: 'success' },\r
  { id: 'separacao', title: 'Separação iniciada', actor: 'Bruno Lima', date: new Date(2026, 8, 25, 15, 10), icon: Package },\r
  { id: 'agendada', title: 'Entrega agendada para 26/09, 13:00–18:00', actor: 'Bruno Lima', date: new Date(2026, 8, 25, 15, 12), icon: Truck },\r
];

export function ModeloDetalhe({ cheio }: { cheio?: boolean }) {\r
  const { locale } = useTessela();\r
  const { real } = formatadores(locale);\r
  const toast = useToast();\r
  const [enviado, setEnviado] = useState(false);\r
  const subtotal = itens.reduce((t, [, q, v]) => t + q * v, 0);\r
  return (\r
    <Moldura ativo="modelo-detalhe" cheio={cheio}>\r
      <Tabs>\r
        <PageHeader\r
          breadcrumb={(\r
            <Breadcrumb>\r
              <BreadcrumbLink href={caminhoDoModelo('modelo-lista')} onClick={(e) => { e.preventDefault(); irPara('modelo-lista'); }}>Pedidos</BreadcrumbLink>\r
              <BreadcrumbPage>Pedido #1042</BreadcrumbPage>\r
            </Breadcrumb>\r
          )}\r
          title="Pedido #1042"\r
          status={<Badge tone={enviado ? 'info' : 'success'} dot>{enviado ? 'Enviado' : 'Pago'}</Badge>}\r
          description="Ana Souza · 25/09, 14:32 · pelo site"\r
          actions={(\r
            <>\r
              <Menu>\r
                <MenuTrigger><IconButton icon={Ellipsis} label="Mais ações" variant="secondary" /></MenuTrigger>\r
                <MenuContent align="end">\r
                  <MenuItem icon={Printer}>Imprimir</MenuItem>\r
                  <MenuItem icon={Download}>Baixar nota fiscal</MenuItem>\r
                  <MenuSeparator />\r
                  <MenuItem icon={Trash2} destructive>Cancelar pedido</MenuItem>\r
                </MenuContent>\r
              </Menu>\r
              <Button disabled={enviado} onClick={() => { setEnviado(true); toast.success('Pedido marcado como enviado'); }}>{enviado ? 'Enviado' : 'Marcar como enviado'}</Button>\r
            </>\r
          )}\r
        >\r
          <TabList aria-label="Seções do pedido">\r
            <Tab value="resumo">Resumo</Tab>\r
            <Tab value="historico" count={historico.length}>Histórico</Tab>\r
          </TabList>\r
        </PageHeader>\r
        <TabPanel value="resumo" className="ts:flex ts:flex-col ts:gap-16">\r
          <Alert tone="info" title="Entrega agendada">Amanhã, entre 13:00 e 18:00, pelo entregador da loja.</Alert>\r
          <div className="ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] ts:items-start ts:gap-16 ts:max-xl:grid-cols-1">\r
            <Card title="Itens" description={\`\${itens.length} produtos\`} flush footer={<div className="ts:flex ts:w-full ts:items-center ts:justify-between ts:text-body-m"><span className="ts:text-fg-secondary">Total (com entrega de R$ 9,90)</span><span className="ts:text-label-m ts:tabular-nums">{real.format(subtotal + 9.9)}</span></div>}>\r
              <ul>\r
                {itens.map(([nome, q, v]) => (\r
                  <li key={nome} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0">\r
                    <span className="ts:flex ts:size-40 ts:items-center ts:justify-center ts:rounded-md ts:bg-bg-subtle ts:text-fg-muted"><Box aria-hidden className="ts:size-icon-md" /></span>\r
                    <div className="ts:min-w-0 ts:flex-1"><p className="ts:truncate ts:text-body-m">{nome}</p><p className="ts:text-body-s ts:text-fg-muted">{q} × {real.format(v)}</p></div>\r
                    <span className="ts:tabular-nums">{real.format(q * v)}</span>\r
                  </li>\r
                ))}\r
              </ul>\r
            </Card>\r
            <div className="ts:flex ts:flex-col ts:gap-16">\r
              <Card title="Cliente" actions={<Button size="sm" variant="ghost">Ver perfil</Button>}>\r
                <div className="ts:flex ts:items-center ts:gap-12"><Avatar name="Ana Souza" /><div><p>Ana Souza</p><p className="ts:text-body-s ts:text-fg-secondary">ana@exemplo.com.br</p></div></div>\r
              </Card>\r
              <Card title="Entrega"><p>Rua das Flores, 120, ap. 302</p><p className="ts:text-fg-secondary">Porto Alegre, RS · 90000-000</p></Card>\r
              <Card title="Pagamento"><p>Pix · aprovado</p><p className="ts:text-fg-secondary">25/09, 14:33</p></Card>\r
            </div>\r
          </div>\r
        </TabPanel>\r
        <TabPanel value="historico">\r
          <Card>\r
            <Timeline items={historico} />\r
          </Card>\r
        </TabPanel>\r
      </Tabs>\r
    </Moldura>\r
  );\r
}`,ModeloFormulario:`import { ActionBar, Alert, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Checkbox, CurrencyField, DateRangePicker, FileUpload, FormSection, Input, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, NumberField, PageHeader, RichTextEditor, Select, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, Switch, type UploadFn, WorkspaceSwitcher, useTessela, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, House, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useRef, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

const canais = ['Site', 'App', 'iFood', 'Balcão'];

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

const enviarSimulado: UploadFn = (_file, { onProgress, signal }) => new Promise((resolver) => {\r
  let p = 0;\r
  const t = setInterval(() => { p += 20; onProgress(p); if (p >= 100) { clearInterval(t); resolver(); } }, 200);\r
  signal.addEventListener('abort', () => clearInterval(t));\r
});

export function ModeloFormulario({ cheio }: { cheio?: boolean }) {\r
  const toast = useToast();\r
  const { locale } = useTessela();\r
  const nome = useRef<HTMLInputElement>(null);\r
  const [valores, setValores] = useState({ nome: '', preco: '', estoque: '12' });\r
  const [mudou, setMudou] = useState(false);\r
  const [erros, setErros] = useState<string[]>([]);\r
  const [salvo, setSalvo] = useState<string | null>(null);\r
  const mudar = (campo: keyof typeof valores) => (e: { target: { value: string } }) => { setValores((v) => ({ ...v, [campo]: e.target.value })); setMudou(true); setSalvo(null); };\r
  function salvar() {\r
    const faltando = [!valores.nome.trim() && 'nome', !valores.preco.trim() && 'preco'].filter(Boolean) as string[];\r
    setErros(faltando);\r
    if (faltando.length) { nome.current?.focus(); return; }\r
    setMudou(false);\r
    setSalvo(\`Salvo às \${new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(new Date())}\`);\r
    toast.success('Produto salvo', { description: valores.nome });\r
  }\r
  return (\r
    <Moldura ativo="modelo-formulario" cheio={cheio}>\r
      <PageHeader\r
        breadcrumb={<Breadcrumb><BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Produtos</BreadcrumbLink><BreadcrumbPage>Novo produto</BreadcrumbPage></Breadcrumb>}\r
        title="Novo produto"\r
        description="Aparece no cardápio assim que for publicado."\r
      />\r
      {erros.length > 0 && <Alert tone="error" title={\`Revise \${erros.length === 1 ? '1 campo' : \`\${erros.length} campos\`} antes de salvar\`}>Os campos marcados em vermelho são obrigatórios.</Alert>}\r
      <form onSubmit={(e) => { e.preventDefault(); salvar(); }} onChange={() => { setMudou(true); setSalvo(null); }} className="ts:flex ts:flex-col">\r
        <FormSection title="Informações básicas" description="Nome, categoria e a descrição que o cliente lê no cardápio.">\r
          <Input ref={nome} label="Nome" value={valores.nome} onChange={mudar('nome')} placeholder="Prensa francesa 600 ml" error={erros.includes('nome') ? 'Dê um nome ao produto.' : undefined} />\r
          <Select label="Categoria" options={[{ value: 'utilidades', label: 'Utilidades' }, { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }]} defaultValue="utilidades" />\r
          <RichTextEditor label="Descrição" optional placeholder="Conte o que o cliente precisa saber…" maxLength={1200} minHeight={100} onChange={() => { setMudou(true); setSalvo(null); }} />\r
        </FormSection>\r
        <FormSection title="Preço e estoque" description="O preço promocional aparece riscando o preço cheio.">\r
          <div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-md:grid-cols-1">\r
            <CurrencyField label="Preço" value={valores.preco === '' ? null : Number(valores.preco)} onValueChange={(valor) => mudar('preco')({ target: { value: valor?.toString() ?? '' } })} error={erros.includes('preco') ? 'Informe o preço.' : undefined} />\r
            <CurrencyField label="Preço promocional" optional />\r
            <NumberField label="Estoque" value={valores.estoque === '' ? null : Number(valores.estoque)} onValueChange={(valor) => mudar('estoque')({ target: { value: valor?.toString() ?? '' } })} suffix="unidades" />\r
          </div>\r
          <Switch label="Vender sem estoque" description="O produto continua no cardápio quando o estoque zerar." />\r
        </FormSection>\r
        <FormSection title="Fotos" description="A primeira foto é a capa. Até 6 fotos, PNG ou JPG, até 5 MB.">\r
          <FileUpload label="Fotos do produto" accept="image/png,image/jpeg" maxSize={5 * 1024 * 1024} maxFiles={6} upload={enviarSimulado} onValueChange={() => { setMudou(true); setSalvo(null); }} />\r
        </FormSection>\r
        <FormSection title="Disponibilidade" description="Onde e quando o produto aparece.">\r
          <fieldset className="ts:flex ts:flex-col ts:gap-8">\r
            <legend className="ts:mb-8 ts:text-label-m">Canais</legend>\r
            {canais.map((c) => <Checkbox key={c} label={c} defaultChecked={c !== 'Balcão'} />)}\r
          </fieldset>\r
          <DateRangePicker label="Período de venda" optional description="Sem período, o produto fica sempre à venda." />\r
        </FormSection>\r
        <ActionBar status={mudou ? 'Alterações não salvas' : salvo ?? ''} className="ts:mt-24 ts:-mx-32 ts:max-md:-mx-16">\r
          <Button variant="ghost" type="button" onClick={() => irPara('modelo-lista')}>Cancelar</Button>\r
          <Button type="submit">Salvar produto</Button>\r
        </ActionBar>\r
      </form>\r
    </Moldura>\r
  );\r
}`,ModeloSairSemSalvar:`import { ActionBar, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, ConfirmDialog, FormSection, Input, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, RichTextEditor, Select, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, WorkspaceSwitcher, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, House, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

export function ModeloSairSemSalvar({ cheio }: { cheio?: boolean }) {\r
  const toast = useToast();\r
  const [mudou, setMudou] = useState(false);\r
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);\r
\r
  function pedirSaida() {\r
    if (mudou) setConfirmacaoAberta(true);\r
    else irPara('modelo-lista');\r
  }\r
\r
  return (\r
    <Moldura ativo="modelo-formulario" cheio={cheio}>\r
      <PageHeader\r
        breadcrumb={<Breadcrumb><BreadcrumbLink href={caminhoDoModelo('modelo-lista')} onClick={(evento) => { evento.preventDefault(); pedirSaida(); }}>Produtos</BreadcrumbLink><BreadcrumbPage>Novo produto</BreadcrumbPage></Breadcrumb>}\r
        title="Novo produto"\r
        description="Preencha um campo e tente sair para ver a confirmação antes de descartar alterações."\r
      />\r
      <form onSubmit={(evento) => { evento.preventDefault(); setMudou(false); toast.success('Produto salvo'); }} onChange={() => setMudou(true)} className="ts:flex ts:flex-col">\r
        <FormSection title="Informações básicas" description="Os dados permanecem como rascunho até você salvar.">\r
          <Input label="Nome" placeholder="Prensa francesa 600 ml" />\r
          <Select label="Categoria" options={[{ value: 'utilidades', label: 'Utilidades' }, { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }]} defaultValue="utilidades" />\r
          <RichTextEditor label="Descrição" optional placeholder="Conte o que o cliente precisa saber…" maxLength={1200} minHeight={100} />\r
        </FormSection>\r
        <ActionBar status={mudou ? 'Alterações não salvas' : 'Todas as alterações foram salvas'} className="ts:mt-24 ts:-mx-32 ts:max-md:-mx-16">\r
          <Button variant="ghost" type="button" onClick={pedirSaida}>Cancelar</Button>\r
          <Button type="submit">Salvar produto</Button>\r
        </ActionBar>\r
      </form>\r
      <ConfirmDialog\r
        open={confirmacaoAberta}\r
        onOpenChange={setConfirmacaoAberta}\r
        title="Sair sem salvar?"\r
        description="As alterações deste produto serão perdidas e não poderão ser recuperadas."\r
        confirmLabel="Sair sem salvar"\r
        destructive\r
        onConfirm={() => irPara('modelo-lista')}\r
      />\r
    </Moldura>\r
  );\r
}`,ModeloConfiguracoes:`import { Avatar, Button, Card, ConfirmDialog, Dialog, DialogClose, DialogContent, DialogTrigger, FormSection, IconButton, Input, MaskedInput, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Radio, RadioGroup, Select, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, Switch, Tab, TabList, TabPanel, Tabs, WorkspaceSwitcher, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, Ellipsis, House, LogOut, Settings, ShoppingBag, Store, Trash2, TriangleAlert, User, UserPlus, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

const equipe = [\r
  { nome: 'Ana Souza', email: 'ana@lojacentro.com.br', papel: 'dona' },\r
  { nome: 'Bruno Lima', email: 'bruno@lojacentro.com.br', papel: 'gerente' },\r
  { nome: 'Carla Dias', email: 'carla@lojacentro.com.br', papel: 'atendimento' },\r
];

const papeis = [{ value: 'dona', label: 'Dona' }, { value: 'gerente', label: 'Gerente' }, { value: 'atendimento', label: 'Atendimento' }];

export function ModeloConfiguracoes({ cheio }: { cheio?: boolean }) {\r
  const toast = useToast();\r
  return (\r
    <Moldura ativo="modelo-configuracoes" cheio={cheio}>\r
      <Tabs defaultValue="geral">\r
        <PageHeader title="Configurações" description="Loja Centro">\r
          <TabList aria-label="Seções das configurações">\r
            <Tab value="geral">Geral</Tab>\r
            <Tab value="equipe" count={equipe.length}>Equipe</Tab>\r
            <Tab value="notificacoes">Notificações</Tab>\r
          </TabList>\r
        </PageHeader>\r
        <TabPanel value="geral">\r
          <FormSection title="Loja" description="Dados que aparecem para os clientes.">\r
            <Input label="Nome da loja" defaultValue="Loja Centro" />\r
            <MaskedInput label="Telefone" mask="telefone" defaultValue="5133330000" />\r
            <Input label="Endereço" defaultValue="Rua dos Andradas, 1000 · Porto Alegre, RS" />\r
            <div><Button onClick={() => toast.success('Dados da loja salvos')}>Salvar</Button></div>\r
          </FormSection>\r
          <FormSection title="Aparência" description="Como o painel aparece para você.">\r
            <RadioGroup label="Tema" defaultValue="system">\r
              <Radio value="light" label="Claro" />\r
              <Radio value="dark" label="Escuro" />\r
              <Radio value="system" label="Igual ao sistema" />\r
            </RadioGroup>\r
          </FormSection>\r
          <FormSection title="Excluir a loja" description="Apaga pedidos, produtos e clientes. Não dá para desfazer.">\r
            <div>\r
              <ConfirmDialog\r
                trigger={<Button variant="destructive" leadingIcon={Trash2}>Excluir a loja</Button>}\r
                title="Excluir a Loja Centro?"\r
                description="Todos os pedidos, produtos e clientes serão apagados para sempre."\r
                confirmLabel="Excluir a loja"\r
                destructive\r
                onConfirm={() => { toast.show({ title: 'Nada foi excluído: é só um exemplo' }); }}\r
              />\r
            </div>\r
          </FormSection>\r
        </TabPanel>\r
        <TabPanel value="equipe">\r
          <Card\r
            title="Equipe"\r
            description="Quem acessa o painel da loja."\r
            flush\r
            actions={(\r
              <Dialog>\r
                <DialogTrigger><Button size="sm" leadingIcon={UserPlus}>Convidar</Button></DialogTrigger>\r
                <DialogContent size="sm" title="Convidar para a equipe" description="A pessoa recebe um e-mail para criar a senha." footer={<><DialogClose><Button variant="secondary">Cancelar</Button></DialogClose><DialogClose><Button onClick={() => toast.success('Convite enviado')}>Enviar convite</Button></DialogClose></>}>\r
                  <div className="ts:flex ts:flex-col ts:gap-16"><Input label="E-mail" type="email" placeholder="nome@lojacentro.com.br" /><Select label="Papel" options={papeis} defaultValue="atendimento" /></div>\r
                </DialogContent>\r
              </Dialog>\r
            )}\r
          >\r
            <ul>\r
              {equipe.map((p) => (\r
                <li key={p.email} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-12 ts:last:border-b-0">\r
                  <Avatar name={p.nome} />\r
                  <div className="ts:min-w-0 ts:flex-1"><p className="ts:truncate">{p.nome}</p><p className="ts:truncate ts:text-body-s ts:text-fg-muted">{p.email}</p></div>\r
                  <Select aria-label={\`Papel de \${p.nome}\`} size="sm" className="ts:w-140" options={papeis} defaultValue={p.papel} disabled={p.papel === 'dona'} />\r
                  <Menu>\r
                    <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações de \${p.nome}\`} size="sm" /></MenuTrigger>\r
                    <MenuContent align="end"><MenuItem icon={Trash2} destructive disabled={p.papel === 'dona'}>Remover da equipe</MenuItem></MenuContent>\r
                  </Menu>\r
                </li>\r
              ))}\r
            </ul>\r
          </Card>\r
        </TabPanel>\r
        <TabPanel value="notificacoes">\r
          <FormSection title="Pedidos" description="Avisos por e-mail e no painel.">\r
            <Switch label="Pedido novo" description="Assim que o pagamento é aprovado." defaultChecked />\r
            <Switch label="Pedido cancelado" defaultChecked />\r
            <Switch label="Resumo do dia" description="Às 20h, com vendas e pedidos do dia." />\r
          </FormSection>\r
          <FormSection title="Estoque">\r
            <Switch label="Estoque baixo" description="Quando um produto fica com menos de 5 unidades." defaultChecked />\r
          </FormSection>\r
        </TabPanel>\r
      </Tabs>\r
    </Moldura>\r
  );\r
}`,ModeloLogin:`import { Alert, Button, Card, Checkbox, Input } from '@tessela/web';
import { type FormEvent, useState } from 'react';

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

export function ModeloLogin({ cheio }: { cheio?: boolean }) {\r
  const [erro, setErro] = useState(false);\r
  const [entrando, setEntrando] = useState(false);\r
  function entrar(e: React.FormEvent<HTMLFormElement>) {\r
    e.preventDefault();\r
    const senha = new FormData(e.currentTarget).get('senha');\r
    setEntrando(true);\r
    setTimeout(() => {\r
      setEntrando(false);\r
      if (senha === 'tessela') { setErro(false); irPara('modelo-dashboard'); } else setErro(true);\r
    }, 700);\r
  }\r
  return (\r
    <div className={cheio ? 'ts:flex ts:min-h-dvh ts:items-center ts:justify-center ts:bg-bg-subtle ts:p-16' : 'ts:flex ts:h-[760px] ts:items-center ts:justify-center ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-subtle ts:p-16'}>\r
      <div className="ts:flex ts:w-400 ts:max-w-full ts:flex-col ts:gap-24">\r
        <div className="ts:flex ts:flex-col ts:items-center ts:gap-12 ts:text-center">\r
          <Simbolo className="ts:h-32 ts:w-auto ts:text-fg-primary" />\r
          <div>\r
            <h1 className="ts:text-heading-l">Entrar no painel</h1>\r
            <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">Use o e-mail da sua loja.</p>\r
          </div>\r
        </div>\r
        <Card>\r
          <form onSubmit={entrar} className="ts:flex ts:flex-col ts:gap-16">\r
            {erro && <Alert tone="error" title="E-mail ou senha incorretos">Confira os dados ou redefina a senha. (Neste exemplo, a senha é “tessela”.)</Alert>}\r
            <Input label="E-mail" name="email" type="email" autoComplete="email" defaultValue="ana@lojacentro.com.br" required />\r
            <Input label="Senha" name="senha" type="password" autoComplete="current-password" required />\r
            <div className="ts:flex ts:items-center ts:justify-between ts:gap-12">\r
              <Checkbox label="Manter conectado" defaultChecked />\r
              <a href={caminhoDoModelo('modelo-recuperar-senha')} onClick={(e) => { e.preventDefault(); irPara('modelo-recuperar-senha'); }} className="ts:inline-flex ts:items-baseline ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:-mx-[max(0px,calc((var(--ts-target-min)-var(--ts-space-24))/2))] ts:px-[max(0px,calc((var(--ts-target-min)-var(--ts-space-24))/2))] ts:text-body-s ts:text-fg-primary ts:underline ts:underline-offset-2">Esqueci a senha</a>\r
            </div>\r
            <Button type="submit" size="lg" loading={entrando} className="ts:w-full">Entrar</Button>\r
            <div className="ts:flex ts:items-center ts:gap-12 ts:text-body-s ts:text-fg-muted"><span className="ts:h-px ts:flex-1 ts:bg-border-default" />ou<span className="ts:h-px ts:flex-1 ts:bg-border-default" /></div>\r
            <Button type="button" variant="secondary" size="lg" className="ts:w-full">Entrar com Google</Button>\r
          </form>\r
        </Card>\r
        <p className="ts:text-center ts:text-body-s ts:text-fg-secondary">Ainda não tem acesso? <a href="#" onClick={(e) => e.preventDefault()} className="ts:inline-flex ts:items-baseline ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:py-[max(0px,calc((var(--ts-target-min)-1lh)/2))] ts:-mx-[max(0px,calc((var(--ts-target-min)-var(--ts-space-24))/2))] ts:px-[max(0px,calc((var(--ts-target-min)-var(--ts-space-24))/2))] ts:text-fg-primary ts:underline ts:underline-offset-2">Fale com a gente</a></p>\r
      </div>\r
    </div>\r
  );\r
}

// Logo: troque pelo do produto.
function Simbolo({ className }: { className?: string }) {\r
  return (\r
    <svg viewBox="0 0 142.2 142" fill="currentColor" aria-hidden className={className}>\r
      <path d="M20.2775 0.028336L0 20.3059L20.3282 40.5326L40.6058 20.2551L20.2775 0.028336Z" />\r
      <path d="M71.0261 1.39609e-05L50.7485 20.2776L71.0768 40.5043L91.3543 20.2268L71.0261 1.39609e-05Z" />\r
      <path d="M121.775 0.0389866L101.497 20.3165L121.825 40.5433L142.103 20.2657L121.775 0.0389866Z" />\r
      <path d="M34.6792 56.6867H5.96661V85.3276H34.6792V56.6867Z" fillOpacity={0.3} />\r
      <path d="M71.0282 50.7156L50.7507 70.9931L71.0789 91.2198L91.3564 70.9423L71.0282 50.7156Z" />\r
      <path d="M136.14 56.6867H107.428V85.3276H136.14V56.6867Z" fillOpacity={0.3} />\r
      <path d="M34.6792 107.345H5.96661V135.986H34.6792V107.345Z" fillOpacity={0.3} />\r
      <path d="M71.0282 101.414L50.7507 121.691L71.0789 141.918L91.3564 121.641L71.0282 101.414Z" />\r
      <path d="M136.14 107.345H107.428V135.986H136.14V107.345Z" fillOpacity={0.3} />\r
    </svg>\r
  );\r
}`,ModeloRecuperarSenha:`import { Alert, Button, Card, Input } from '@tessela/web';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

export function ModeloRecuperarSenha({ cheio }: { cheio?: boolean }) {\r
  const [enviado, setEnviado] = useState(false);\r
  return (\r
    <div className={cheio ? 'ts:flex ts:min-h-dvh ts:items-center ts:justify-center ts:bg-bg-subtle ts:p-16' : 'ts:flex ts:h-[760px] ts:items-center ts:justify-center ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-subtle ts:p-16'}>\r
      <div className="ts:flex ts:w-400 ts:max-w-full ts:flex-col ts:gap-24">\r
        <div className="ts:flex ts:flex-col ts:items-center ts:gap-12 ts:text-center">\r
          <Simbolo className="ts:h-32 ts:w-auto ts:text-fg-primary" />\r
          <div>\r
            <h1 className="ts:text-heading-l">Recuperar a senha</h1>\r
            <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">Enviaremos um link seguro para o e-mail da sua loja.</p>\r
          </div>\r
        </div>\r
        <Card>\r
          {enviado ? (\r
            <div className="ts:flex ts:flex-col ts:gap-16">\r
              <Alert tone="success" title="Confira seu e-mail">Se houver uma conta para este endereço, o link para redefinir a senha chega em alguns minutos.</Alert>\r
              <Button variant="secondary" onClick={() => setEnviado(false)}>Usar outro e-mail</Button>\r
            </div>\r
          ) : (\r
            <form onSubmit={(evento) => { evento.preventDefault(); setEnviado(true); }} className="ts:flex ts:flex-col ts:gap-16">\r
              <Input label="E-mail" name="email" type="email" autoComplete="email" defaultValue="ana@lojacentro.com.br" description="Usaremos o endereço associado à sua loja." required />\r
              <Button type="submit" size="lg" className="ts:w-full">Enviar link de recuperação</Button>\r
            </form>\r
          )}\r
        </Card>\r
        <a href={caminhoDoModelo('modelo-login')} onClick={(evento) => { evento.preventDefault(); irPara('modelo-login'); }} className="ts:inline-flex ts:items-center ts:justify-center ts:gap-8 ts:text-body-s ts:text-fg-secondary">\r
          <ArrowLeft aria-hidden className="ts:size-icon-sm" />Voltar para entrar\r
        </a>\r
      </div>\r
    </div>\r
  );\r
}

// Logo: troque pelo do produto.
function Simbolo({ className }: { className?: string }) {\r
  return (\r
    <svg viewBox="0 0 142.2 142" fill="currentColor" aria-hidden className={className}>\r
      <path d="M20.2775 0.028336L0 20.3059L20.3282 40.5326L40.6058 20.2551L20.2775 0.028336Z" />\r
      <path d="M71.0261 1.39609e-05L50.7485 20.2776L71.0768 40.5043L91.3543 20.2268L71.0261 1.39609e-05Z" />\r
      <path d="M121.775 0.0389866L101.497 20.3165L121.825 40.5433L142.103 20.2657L121.775 0.0389866Z" />\r
      <path d="M34.6792 56.6867H5.96661V85.3276H34.6792V56.6867Z" fillOpacity={0.3} />\r
      <path d="M71.0282 50.7156L50.7507 70.9931L71.0789 91.2198L91.3564 70.9423L71.0282 50.7156Z" />\r
      <path d="M136.14 56.6867H107.428V85.3276H136.14V56.6867Z" fillOpacity={0.3} />\r
      <path d="M34.6792 107.345H5.96661V135.986H34.6792V107.345Z" fillOpacity={0.3} />\r
      <path d="M71.0282 101.414L50.7507 121.691L71.0789 141.918L91.3564 121.641L71.0282 101.414Z" />\r
      <path d="M136.14 107.345H107.428V135.986H136.14V107.345Z" fillOpacity={0.3} />\r
    </svg>\r
  );\r
}`,ModeloFaixasDeAviso:`import { Alert, Button, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, WorkspaceSwitcher, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, House, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

export function ModeloFaixasDeAviso({ cheio }: { cheio?: boolean }) {\r
  const toast = useToast();\r
  const [cobrancaVisivel, setCobrancaVisivel] = useState(true);\r
  return (\r
    <Moldura ativo="" cheio={cheio}>\r
      <PageHeader title="Faixas de aviso" description="Avisos ficam junto da decisão que pedem, com o próximo passo sempre visível." />\r
      <div className="ts:flex ts:flex-col ts:gap-16">\r
        {cobrancaVisivel ? (\r
          <Alert\r
            tone="warning"\r
            title="A assinatura vence em 3 dias"\r
            onDismiss={() => setCobrancaVisivel(false)}\r
            actions={<Button size="sm" onClick={() => toast.show({ title: 'Cobrança aberta: exemplo do catálogo' })}>Ver cobrança</Button>}\r
          >Atualize a forma de pagamento para manter os relatórios e a equipe sem interrupção.</Alert>\r
        ) : (\r
          <Button variant="secondary" className="ts:self-start" onClick={() => setCobrancaVisivel(true)}>Reexibir aviso de cobrança</Button>\r
        )}\r
        <Alert tone="info" title="Manutenção programada">Na terça-feira, das 2h às 3h, os relatórios podem atualizar mais devagar.</Alert>\r
        <Alert\r
          tone="error"\r
          title="Não foi possível publicar o cardápio"\r
          actions={<Button size="sm" variant="secondary" onClick={() => toast.show({ title: 'Nova tentativa iniciada: exemplo do catálogo' })}>Tentar novamente</Button>}\r
        >A última alteração continua como rascunho até a conexão voltar.</Alert>\r
      </div>\r
    </Moldura>\r
  );\r
}`,ModeloPreviaTravadaPorPlano:`import { Alert, AreaChart, Button, Card, MenuItem, MenuSeparator, NavItem, NavSection, NotificationCenter, type NotificationItem, PageHeader, Sidebar, SidebarAccount, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarSearch, SidebarTrigger, WorkspaceSwitcher, useTessela, useToast } from '@tessela/web';
import { BarChart3, Box, CircleHelp, CreditCard, House, Lock, LogOut, Settings, ShoppingBag, Store, TriangleAlert, User, Users } from 'lucide-react';
import { type MouseEvent, type ReactNode, useState } from 'react';

const avisosDaLoja: NotificationItem[] = [\r
  { id: 'n1', title: 'Novo pedido #1042', description: 'Ana Souza · R$ 184,90 · entrega', date: new Date(Date.now() - 3 * 60000), icon: ShoppingBag },\r
  { id: 'n2', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades.', date: new Date(Date.now() - 50 * 60000), icon: TriangleAlert, tone: 'warning' },\r
  { id: 'n3', title: 'Repasse de R$ 3.210,00 enviado', date: new Date(Date.now() - 26 * 3600000), icon: CreditCard, tone: 'success', read: true },\r
];

function Avisos() {\r
  const [itens, setItens] = useState(avisosDaLoja);\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => {\r
        setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x)));\r
        if (n.id === 'n1') irPara('modelo-detalhe');\r
      }}\r
      onMarkAllRead={() => setItens((l) => l.map((x) => ({ ...x, read: true })))}\r
    />\r
  );\r
}

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const lojas = [{ id: 'centro', name: 'Loja Centro', description: 'Plano Pro' }, { id: 'moinhos', name: 'Moinhos', description: 'Plano Pro' }];

function Moldura({ ativo, cheio, children }: { ativo: string; cheio?: boolean; children: ReactNode }) {\r
  const [loja, setLoja] = useState('centro');\r
  const item = (id: string) => ({ href: caminhoDoModelo(id), active: ativo === id, onClick: (e: MouseEvent) => { e.preventDefault(); irPara(id); } });\r
  return (\r
    <div className={cheio ? '' : 'ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default'}>\r
      <SidebarProvider className={cheio ? 'ts:h-dvh' : 'ts:h-[860px]'}>\r
        <Sidebar>\r
          <SidebarHeader>\r
            <WorkspaceSwitcher workspaces={lojas} value={loja} onValueChange={setLoja} label="Lojas" />\r
            <SidebarSearch onClick={() => {}} />\r
          </SidebarHeader>\r
          <SidebarContent>\r
            <nav aria-label="Principal" className="ts:flex ts:flex-col ts:gap-20">\r
              <NavSection>\r
                <NavItem icon={House} {...item('modelo-dashboard')}>Visão geral</NavItem>\r
                <NavItem icon={Box} badge={12} {...item('modelo-lista')} active={ativo === 'modelo-lista' || ativo === 'modelo-detalhe'}>Pedidos</NavItem>\r
                <NavItem icon={Store} {...item('modelo-formulario')}>Produtos</NavItem>\r
                <NavItem icon={Users} href="#" onClick={(e) => e.preventDefault()}>Clientes</NavItem>\r
                <NavItem icon={BarChart3} href="#" onClick={(e) => e.preventDefault()}>Relatórios</NavItem>\r
              </NavSection>\r
            </nav>\r
          </SidebarContent>\r
          <SidebarFooter>\r
            <NavSection>\r
              <NavItem icon={CircleHelp} href="#" onClick={(e) => e.preventDefault()}>Ajuda</NavItem>\r
              <NavItem icon={Settings} {...item('modelo-configuracoes')}>Configurações</NavItem>\r
            </NavSection>\r
            <SidebarAccount name="Ana Souza" email="ana@lojacentro.com.br">\r
              <MenuItem icon={User}>Meu perfil</MenuItem>\r
              <MenuSeparator />\r
              <MenuItem icon={LogOut} destructive onClick={() => irPara('modelo-login')}>Sair</MenuItem>\r
            </SidebarAccount>\r
          </SidebarFooter>\r
        </Sidebar>\r
        <SidebarInset>\r
          <header className="ts:flex ts:h-48 ts:shrink-0 ts:items-center ts:gap-8 ts:border-b ts:border-border-default ts:px-16">\r
            <SidebarTrigger />\r
            <span className="ts:flex-1" />\r
            <Avisos />\r
          </header>\r
          <div className="ts:min-h-0 ts:flex-1 ts:overflow-y-auto">\r
            <div className="ts:mx-auto ts:flex ts:max-w-1200 ts:flex-col ts:gap-24 ts:px-32 ts:py-32 ts:max-md:px-16 ts:max-md:py-24">{children}</div>\r
          </div>\r
        </SidebarInset>\r
      </SidebarProvider>\r
    </div>\r
  );\r
}

const diario = Array.from({ length: 30 }, (_, i) => {\r
  const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 29 + i);\r
  const fds = d.getDay() === 5 || d.getDay() === 6 ? 1.3 : 1;\r
  return { dia: \`\${String(d.getDate()).padStart(2, '0')}/\${String(d.getMonth() + 1).padStart(2, '0')}\`, atual: Math.round((3300 + i * 22 + Math.sin(i / 3) * 400) * fds), anterior: Math.round((2950 + i * 12 + Math.cos(i / 4) * 350) * fds) };\r
});

const itens = [['Café torrado 500 g', 2, 42], ['Filtro de papel 103', 1, 12.9], ['Caneca esmaltada', 1, 88]] as const;

export function ModeloPreviaTravadaPorPlano({ cheio }: { cheio?: boolean }) {\r
  const { locale } = useTessela();\r
  const { real } = formatadores(locale);\r
  const toast = useToast();\r
  return (\r
    <Moldura ativo="" cheio={cheio}>\r
      <PageHeader title="Relatório de vendas" description="A prévia mostra o valor do relatório antes de liberar os dados do plano." />\r
      <Alert\r
        tone="warning"\r
        title="Disponível no Plano Pro"\r
        actions={<Button size="sm" onClick={() => toast.show({ title: 'Planos disponíveis: exemplo do catálogo' })}>Ver planos</Button>}\r
      >Faça upgrade para acompanhar vendas por dia, canal e período.</Alert>\r
      <Card title="Vendas por dia" description="Prévia do relatório avançado">\r
        <div className="ts:relative">\r
          <div aria-hidden className="ts:pointer-events-none ts:select-none ts:opacity-40 ts:blur-sm">\r
            <AreaChart aria-label="Prévia das vendas por dia" data={diario} index="dia" series={[{ key: 'atual', label: 'Este período' }, { key: 'anterior', label: 'Período anterior', color: 2, dashed: true }]} valueFormatter={(valor) => real.format(valor)} height={240} />\r
          </div>\r
          <div className="ts:absolute ts:inset-0 ts:flex ts:items-center ts:justify-center ts:p-24">\r
            <div className="ts:flex ts:max-w-320 ts:flex-col ts:items-center ts:gap-12 ts:bg-bg-base/90 ts:p-16 ts:text-center">\r
              <Lock aria-hidden className="ts:size-icon-lg ts:text-fg-secondary" />\r
              <p className="ts:text-label-m ts:text-fg-primary">Prévia bloqueada pelo plano</p>\r
              <p className="ts:text-body-s ts:text-fg-secondary">O Plano Pro libera filtros, comparação de períodos e exportação.</p>\r
            </div>\r
          </div>\r
        </div>\r
      </Card>\r
    </Moldura>\r
  );\r
}`,ModeloCheckout:`import { Accordion, AccordionItem, Alert, Button, DescriptionList, IconButton, Input, Link, MaskedInput, NumberField, Radio, RadioGroup, Select, Spinner, Tag, cx, formatMask, isValidCnpj, isValidCpf, useTessela, useToast } from '@tessela/web';
import { ArrowLeft, Barcode, CircleCheck, Copy, CreditCard, Download, Lock, QrCode, Ticket } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react';

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

type FormaDePagamento = 'cartao' | 'pix' | 'boleto';

const planos = [\r
  { id: 'essencial', nome: 'Essencial', preco: 89, descricao: 'Pedidos, produtos e até 3 pessoas na equipe.' },\r
  { id: 'pro', nome: 'Pro', preco: 189, descricao: 'Tudo do Essencial, relatórios e equipe sem limite.', destaque: true },\r
  { id: 'rede', nome: 'Rede', preco: 389, descricao: 'Tudo do Pro, várias marcas e suporte dedicado.' },\r
];

const LOJA_ADICIONAL = 49;

const cupons: Record<string, { desconto: number; meses: number }> = { TESSELA10: { desconto: 0.1, meses: 3 } };

const ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const enderecosPorCep: Record<string, { rua: string; bairro: string; cidade: string; uf: string }> = {\r
  '90020000': { rua: 'Rua dos Andradas', bairro: 'Centro Histórico', cidade: 'Porto Alegre', uf: 'RS' },\r
  '01310100': { rua: 'Avenida Paulista', bairro: 'Bela Vista', cidade: 'São Paulo', uf: 'SP' },\r
};

const codigoPix = '00020126580014br.gov.bcb.pix0136a1b2c3d4-0000-4000-8000-assinatura5204000053039865406214205802BR5911LOJA CENTRO6012PORTO ALEGRE6304B7C1';

const linhaDoBoleto = '34191.79001 01043.510047 91020.150008 1 99990000021420';

const dadosIniciais = {\r
  documento: '11222333000181', razao: 'Loja Centro Cafés Ltda.', email: 'financeiro@lojacentro.com.br',\r
  cep: '90020000', rua: 'Rua dos Andradas', numero: '1000', complemento: '', bairro: 'Centro Histórico', cidade: 'Porto Alegre', uf: 'RS',\r
};

type DadosDoCheckout = typeof dadosIniciais;

type CampoDoCheckout = keyof DadosDoCheckout;

const centavos = (v: number) => Math.round(v * 100) / 100;

function errosDoCheckout(d: DadosDoCheckout) {\r
  const e: Partial<Record<CampoDoCheckout, string>> = {};\r
  const documentoOk = d.documento.length === 11 ? isValidCpf(d.documento) : d.documento.length === 14 && isValidCnpj(d.documento);\r
  if (!documentoOk) e.documento = d.documento ? 'CNPJ ou CPF inválido. Confira os números.' : 'Informe o CNPJ ou o CPF para a nota fiscal.';\r
  if (!d.razao.trim()) e.razao = 'Informe a razão social ou o nome.';\r
  if (!/^\\S+@\\S+\\.\\S+$/.test(d.email)) e.email = 'Informe um e-mail válido.';\r
  if (d.cep.length < 8) e.cep = 'Informe o CEP.';\r
  if (!d.rua.trim()) e.rua = 'Informe a rua.';\r
  if (!d.numero.trim()) e.numero = 'Informe o número ou “s/n”.';\r
  if (!d.bairro.trim()) e.bairro = 'Informe o bairro.';\r
  if (!d.cidade.trim()) e.cidade = 'Informe a cidade.';\r
  return e;\r
}

function diasUteisDepois(n: number) {\r
  const d = new Date(hoje);\r
  for (let faltam = n; faltam > 0;) {\r
    d.setDate(d.getDate() + 1);\r
    if (d.getDay() !== 0 && d.getDay() !== 6) faltam--;\r
  }\r
  return d;\r
}

function LinhaDoTotal({ termo, valor }: { termo: ReactNode; valor: ReactNode }) {\r
  return <div className="ts:flex ts:items-baseline ts:justify-between ts:gap-12"><dt className="ts:text-fg-secondary">{termo}</dt><dd className="ts:tabular-nums ts:text-fg-primary">{valor}</dd></div>;\r
}

function useAssinatura() {\r
  const [idDoPlano, setIdDoPlano] = useState('pro');\r
  const [adicionais, setAdicionais] = useState<number | null>(1);\r
  const [cupom, setCupom] = useState<string | null>(null);\r
  const plano = planos.find((p) => p.id === idDoPlano)!;\r
  const lojasAMais = adicionais ?? 0;\r
  const semDesconto = plano.preco + lojasAMais * LOJA_ADICIONAL;\r
  const oferta = cupom ? cupons[cupom]! : null;\r
  const desconto = oferta ? centavos(semDesconto * oferta.desconto) : 0;\r
  return { idDoPlano, setIdDoPlano, plano, adicionais, setAdicionais, lojasAMais, cupom, setCupom, oferta, semDesconto, desconto, mensal: semDesconto - desconto };\r
}

type Assinatura = ReturnType<typeof useAssinatura>;

function CupomDaAssinatura({ assinatura: a }: { assinatura: Assinatura }) {\r
  const area = useRef<HTMLDivElement>(null);\r
  const [aberto, setAberto] = useState(false);\r
  const [texto, setTexto] = useState('');\r
  const [erro, setErro] = useState<string>();\r
  const [focar, setFocar] = useState(false);\r
\r
  // Quando o campo some, o foco vai para o que ficou no lugar: o botão de remover ou o de adicionar.\r
  useEffect(() => {\r
    if (!focar) return;\r
    area.current?.querySelector('button')?.focus();\r
    setFocar(false);\r
  }, [focar]);\r
\r
  function aplicar() {\r
    const codigo = texto.trim().toUpperCase();\r
    if (!codigo) return;\r
    if (!cupons[codigo]) { setErro('Cupom não encontrado. Confira as letras e os números.'); return; }\r
    a.setCupom(codigo);\r
    setTexto('');\r
    setAberto(false);\r
    setFocar(true);\r
  }\r
\r
  function fechar() {\r
    setAberto(false);\r
    setTexto('');\r
    setErro(undefined);\r
    setFocar(true);\r
  }\r
\r
  return (\r
    <div ref={area} className="ts:flex ts:flex-col">\r
      <div aria-live="polite">\r
        {a.cupom && a.oferta && (\r
          <Tag icon={Ticket} removeLabel={\`Remover o cupom \${a.cupom}\`} onRemove={() => { a.setCupom(null); setAberto(true); }}>\r
            {a.cupom} · {a.oferta.desconto * 100}% por {a.oferta.meses} meses\r
          </Tag>\r
        )}\r
      </div>\r
      {a.cupom ? null : aberto ? (\r
        <div className="ts:flex ts:items-start ts:gap-8">\r
          <Input\r
            aria-label="Cupom de desconto"\r
            placeholder="Código do cupom"\r
            autoCapitalize="characters"\r
            autoFocus\r
            className="ts:flex-1"\r
            value={texto}\r
            error={erro}\r
            onChange={(e) => { setTexto(e.target.value); setErro(undefined); }}\r
            onKeyDown={(e) => {\r
              if (e.key === 'Enter') { e.preventDefault(); aplicar(); }\r
              if (e.key === 'Escape') fechar();\r
            }}\r
          />\r
          <Button type="button" variant="secondary" onClick={aplicar}>Aplicar</Button>\r
        </div>\r
      ) : (\r
        <div><Button type="button" size="sm" variant="secondary" leadingIcon={Ticket} onClick={() => setAberto(true)}>Adicionar cupom</Button></div>\r
      )}\r
    </div>\r
  );\r
}

function EscolhaDoPlano({ assinatura: a }: { assinatura: Assinatura }) {\r
  const { locale } = useTessela();\r
  const { realCurto } = formatadores(locale);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-20">\r
      <RadioGroup aria-label="Plano" variant="list" value={a.idDoPlano} onValueChange={a.setIdDoPlano}>\r
        {planos.map((p) => (\r
          <Radio\r
            key={p.id}\r
            value={p.id}\r
            label={<span className="ts:flex ts:items-baseline ts:justify-between ts:gap-12"><span>{p.nome}</span>{' '}<span className="ts:tabular-nums ts:text-fg-secondary">{realCurto.format(p.preco)}/mês</span></span>}\r
            description={p.descricao}\r
          />\r
        ))}\r
      </RadioGroup>\r
      <NumberField\r
        label="Lojas adicionais"\r
        description={\`A primeira loja vem no plano; cada outra custa \${realCurto.format(LOJA_ADICIONAL)}/mês.\`}\r
        min={0}\r
        max={19}\r
        value={a.adicionais}\r
        onValueChange={a.setAdicionais}\r
      />\r
      <CupomDaAssinatura assinatura={a} />\r
    </div>\r
  );\r
}

type ResumoDaAssinaturaProps = {\r
  assinatura: Assinatura;\r
  /** O título da página (h1): “Assinar o plano Pro”. */\r
  titulo: string;\r
  /** A linha grande: o valor por mês ou os dias grátis. */\r
  destaque: ReactNode;\r
  detalhe?: ReactNode;\r
  /** Linhas entre o cupom e o total de hoje, como o desconto do teste grátis. */\r
  linhas?: { termo: ReactNode; valor: ReactNode }[];\r
  totalHoje: number;\r
  nota: ReactNode;\r
  /** Para onde a seta leva. Sem ela, só o símbolo. */\r
  voltar?: { modelo: string; rotulo: string };\r
  /** Leva às escolhas do plano no formulário. Sem ela, o link não aparece. */\r
  trocarPlano?: () => void;\r
  /** Depois de assinar: sem voltar nem trocar o plano. */\r
  travado?: boolean;\r
};

function ResumoDaAssinatura({ assinatura: a, titulo, destaque, detalhe, linhas = [], totalHoje, nota, voltar, trocarPlano, travado = false }: ResumoDaAssinaturaProps) {\r
  const { locale } = useTessela();\r
  const { real } = formatadores(locale);\r
  const detalhes = (\r
    <>\r
      <ul className="ts:flex ts:flex-col ts:gap-16">\r
        <li className="ts:flex ts:items-start ts:justify-between ts:gap-16">\r
          <div className="ts:min-w-0">\r
            <p className="ts:text-label-m ts:text-fg-primary">Plano {a.plano.nome}</p>\r
            <p className="ts:mt-2 ts:text-body-s ts:text-fg-muted">{a.plano.descricao}</p>\r
          </div>\r
          <span className="ts:tabular-nums ts:text-fg-primary">{real.format(a.plano.preco)}</span>\r
        </li>\r
        {a.lojasAMais > 0 && (\r
          <li className="ts:flex ts:items-start ts:justify-between ts:gap-16">\r
            <div className="ts:min-w-0">\r
              <p className="ts:text-label-m ts:text-fg-primary">Lojas adicionais</p>\r
              <p className="ts:mt-2 ts:text-body-s ts:text-fg-muted">{a.lojasAMais} × {real.format(LOJA_ADICIONAL)}</p>\r
            </div>\r
            <span className="ts:tabular-nums ts:text-fg-primary">{real.format(a.lojasAMais * LOJA_ADICIONAL)}</span>\r
          </li>\r
        )}\r
      </ul>\r
      {trocarPlano && !travado && (\r
        <p className="ts:mt-12 ts:text-body-s"><Link href="#plano" onClick={(e) => { e.preventDefault(); trocarPlano(); }}>Trocar plano</Link></p>\r
      )}\r
      <dl className="ts:mt-24 ts:flex ts:flex-col ts:gap-8 ts:border-t ts:border-border-default ts:pt-16 ts:text-body-m">\r
        <LinhaDoTotal termo="Subtotal" valor={real.format(a.semDesconto)} />\r
        {a.oferta && <LinhaDoTotal termo={\`Cupom \${a.cupom}\`} valor={\`−\${real.format(a.desconto)}\`} />}\r
        {linhas.map((l, i) => <LinhaDoTotal key={i} termo={l.termo} valor={l.valor} />)}\r
        <div className="ts:mt-8 ts:flex ts:items-baseline ts:justify-between ts:gap-12 ts:border-t ts:border-border-default ts:pt-16">\r
          <dt className="ts:text-label-m ts:text-fg-primary">Total hoje</dt>\r
          <dd className="ts:text-heading-s ts:tabular-nums ts:text-fg-primary">{real.format(totalHoje)}</dd>\r
        </div>\r
      </dl>\r
      <p className="ts:mt-8 ts:text-body-s ts:text-fg-muted">{nota}</p>\r
    </>\r
  );\r
\r
  return (\r
    <div className="ts:flex ts:justify-end ts:border-r ts:border-border-default ts:bg-bg-subtle ts:px-64 ts:py-64 ts:max-lg:justify-center ts:max-lg:border-r-0 ts:max-lg:border-b ts:max-lg:px-16 ts:max-lg:py-24">\r
      <div className="ts:flex ts:w-full ts:max-w-440 ts:flex-col ts:lg:sticky ts:lg:top-64 ts:lg:self-start">\r
        {voltar && !travado ? (\r
          <a\r
            href={caminhoDoModelo(voltar.modelo)}\r
            onClick={(e) => { e.preventDefault(); irPara(voltar.modelo); }}\r
            className="ts:flex ts:min-h-target-min ts:min-w-target-min ts:w-fit ts:items-center ts:gap-12 ts:-my-[max(0px,calc((var(--ts-target-min)-var(--ts-space-20))/2))] ts:rounded-md ts:text-fg-secondary ts:transition-colors ts:duration-(--ts-duration-fast) ts:hover:text-fg-primary"\r
          >\r
            <ArrowLeft aria-hidden className="ts:size-icon-md" />\r
            <Simbolo className="ts:h-20 ts:w-auto ts:text-fg-primary" />\r
            <span className="ts:sr-only">{voltar.rotulo}</span>\r
          </a>\r
        ) : (\r
          <Simbolo className="ts:h-20 ts:w-auto ts:self-start ts:text-fg-primary" />\r
        )}\r
\r
        <div className="ts:mt-40 ts:flex ts:flex-col ts:gap-4 ts:max-lg:mt-20">\r
          <h1 className="ts:text-body-l ts:text-fg-secondary">{titulo}</h1>\r
          <p className="ts:flex ts:flex-wrap ts:items-baseline ts:gap-x-8">{destaque}</p>\r
          {detalhe && <p className="ts:text-body-s ts:text-fg-muted">{detalhe}</p>}\r
        </div>\r
\r
        <div className="ts:mt-40 ts:max-lg:hidden">{detalhes}</div>\r
        <Accordion className="ts:mt-12 ts:lg:hidden">\r
          <AccordionItem value="detalhes" title={\`Ver detalhes · \${real.format(totalHoje)} hoje\`}>{detalhes}</AccordionItem>\r
        </Accordion>\r
\r
        <p className="ts:mt-48 ts:flex ts:flex-wrap ts:items-center ts:gap-x-12 ts:gap-y-4 ts:text-body-s ts:text-fg-muted ts:max-lg:mt-16">\r
          <span className="ts:flex ts:items-center ts:gap-6"><Lock aria-hidden className="ts:size-icon-sm" />Pagamento seguro</span>\r
          <Link href="#" tone="muted" onClick={(e) => e.preventDefault()}>Termos</Link>\r
          <Link href="#" tone="muted" onClick={(e) => e.preventDefault()}>Privacidade</Link>\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}

function MolduraDoCheckout({ cheio, resumo, children }: { cheio?: boolean; resumo: ReactNode; children: ReactNode }) {\r
  return (\r
    <div className={cx('ts:grid ts:grid-cols-2 ts:bg-bg-base ts:max-lg:grid-cols-1', cheio ? 'ts:min-h-dvh' : 'ts:h-[860px] ts:overflow-y-auto ts:rounded-lg ts:border ts:border-border-default')}>\r
      {resumo}\r
      <div className="ts:flex ts:justify-start ts:px-64 ts:py-64 ts:max-lg:justify-center ts:max-lg:px-16 ts:max-lg:py-32">\r
        <div className="ts:w-full ts:max-w-440">{children}</div>\r
      </div>\r
    </div>\r
  );\r
}

type PropsDoCheckout = { cheio?: boolean; campoDoCartao?: ReactNode };

export function ModeloCheckout({ cheio, campoDoCartao = <CampoDoCartaoDeExemplo /> }: PropsDoCheckout) {\r
  const toast = useToast();\r
  const { locale } = useTessela();\r
  const { real, dataCurta } = formatadores(locale);\r
  const assinatura = useAssinatura();\r
  const formulario = useRef<HTMLFormElement>(null);\r
  const secaoDoPlano = useRef<HTMLElement>(null);\r
  const campoNumero = useRef<HTMLInputElement>(null);\r
  const tituloDaConfirmacao = useRef<HTMLHeadingElement>(null);\r
  const cepBuscado = useRef('');\r
  const [dados, setDados] = useState(dadosIniciais);\r
  const [erros, setErros] = useState<Partial<Record<CampoDoCheckout, string>>>({});\r
  const [pagamento, setPagamento] = useState<FormaDePagamento>('cartao');\r
  const [buscandoCep, setBuscandoCep] = useState(false);\r
  const [cepDesconhecido, setCepDesconhecido] = useState(false);\r
  const [tentativasComErro, setTentativasComErro] = useState(0);\r
  const [enviando, setEnviando] = useState(false);\r
  const [assinado, setAssinado] = useState(false);\r
\r
  const { plano, mensal, semDesconto, oferta } = assinatura;\r
  const diaDaCobranca = hoje.getDate();\r
  const proximaCobranca = new Date(hoje.getFullYear(), hoje.getMonth() + 1, diaDaCobranca);\r
  const quantosErros = Object.keys(erros).length;\r
\r
  // Na confirmação, o leitor de tela começa pelo título (e o foco leva a página até ele).\r
  useEffect(() => {\r
    if (assinado) tituloDaConfirmacao.current?.focus();\r
  }, [assinado]);\r
\r
  // A cada tentativa com erro, o foco vai para o primeiro campo inválido.\r
  useEffect(() => {\r
    if (tentativasComErro) formulario.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();\r
  }, [tentativasComErro]);\r
\r
  function mudar(campo: CampoDoCheckout, valor: string) {\r
    setDados((d) => ({ ...d, [campo]: valor }));\r
    setErros((e) => {\r
      if (!e[campo]) return e;\r
      const resto = { ...e };\r
      delete resto[campo];\r
      return resto;\r
    });\r
  }\r
  const texto = (campo: CampoDoCheckout) => ({ value: dados[campo], onChange: (e: { target: { value: string } }) => mudar(campo, e.target.value), error: erros[campo] });\r
  const mascara = (campo: CampoDoCheckout) => ({ value: dados[campo], onValueChange: (digitos: string) => mudar(campo, digitos), error: erros[campo] });\r
\r
  function mudarCep(digitos: string) {\r
    mudar('cep', digitos);\r
    setCepDesconhecido(false);\r
    cepBuscado.current = digitos;\r
    if (digitos.length !== 8) { setBuscandoCep(false); return; }\r
    setBuscandoCep(true);\r
    window.setTimeout(() => {\r
      if (cepBuscado.current !== digitos) return;\r
      setBuscandoCep(false);\r
      const endereco = enderecosPorCep[digitos];\r
      if (!endereco) { setCepDesconhecido(true); return; }\r
      setDados((d) => ({ ...d, ...endereco, numero: '', complemento: '' }));\r
      setErros((e) => {\r
        const resto = { ...e };\r
        delete resto.rua; delete resto.bairro; delete resto.cidade;\r
        return resto;\r
      });\r
      campoNumero.current?.focus();\r
    }, 600);\r
  }\r
\r
  function mudarPagamento(forma: FormaDePagamento) {\r
    setPagamento(forma);\r
  }\r
\r
  function assinar(e: FormEvent<HTMLFormElement>) {\r
    e.preventDefault();\r
    const novos = errosDoCheckout(dados);\r
    setErros(novos);\r
    if (Object.keys(novos).length) { setTentativasComErro((n) => n + 1); return; }\r
    setEnviando(true);\r
    window.setTimeout(() => { setEnviando(false); setAssinado(true); }, 900);\r
  }\r
\r
  // O navegador pode negar a área de transferência (num quadro, por exemplo); aí a pessoa copia à mão.\r
  function copiar(valor: string, aviso: string) {\r
    void copiarTexto(valor).then((copiou) => {\r
      if (copiou) toast.success(aviso);\r
      else toast.error('Não deu para copiar', { description: 'Selecione o texto.' });\r
    });\r
  }\r
\r
  const resumoDoPagamento = { cartao: 'Cartão processado pelo provedor', pix: 'Pix Automático', boleto: 'Boleto por e-mail' }[pagamento];\r
\r
  return (\r
    <MolduraDoCheckout\r
      cheio={cheio}\r
      resumo={(\r
        <ResumoDaAssinatura\r
          assinatura={assinatura}\r
          titulo={assinado ? \`Assinatura do plano \${plano.nome}\` : \`Assinar o plano \${plano.nome}\`}\r
          destaque={<><span className="ts:text-display ts:tabular-nums">{real.format(mensal)}</span><span className="ts:text-body-m ts:text-fg-secondary">por mês</span></>}\r
          detalhe={oferta && \`Nos \${oferta.meses} primeiros meses; depois, \${real.format(semDesconto)}.\`}\r
          totalHoje={mensal}\r
          nota={\`Depois, todo dia \${diaDaCobranca}. Próxima cobrança em \${dataCurta.format(proximaCobranca)}.\`}\r
          voltar={{ modelo: 'modelo-configuracoes', rotulo: 'Voltar às configurações' }}\r
          trocarPlano={() => secaoDoPlano.current?.querySelector<HTMLElement>('[role="radio"][aria-checked="true"]')?.focus()}\r
          travado={assinado}\r
        />\r
      )}\r
    >\r
      {assinado ? (\r
        <div className="ts:flex ts:flex-col ts:gap-24">\r
          <span className="ts:flex ts:size-48 ts:items-center ts:justify-center ts:rounded-full ts:bg-feedback-success-bg ts:text-feedback-success-icon">\r
            <CircleCheck aria-hidden className="ts:size-icon-lg" />\r
          </span>\r
          <div className="ts:flex ts:flex-col ts:gap-4">\r
            <h2 ref={tituloDaConfirmacao} tabIndex={-1} className="ts:text-heading-l ts:outline-none">\r
              {pagamento === 'cartao' ? \`Plano \${plano.nome} ativado\` : 'Assinatura criada'}\r
            </h2>\r
            <p className="ts:text-body-m ts:text-fg-secondary">\r
              {pagamento === 'cartao' && \`A Loja Centro já tem tudo do plano \${plano.nome}. \`}\r
              {pagamento === 'pix' && 'Autorize o Pix Automático no app do banco em até 30 minutos para ativar o plano. '}\r
              {pagamento === 'boleto' && \`Pague o primeiro boleto até \${new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit' }).format(diasUteisDepois(3))} para ativar o plano. \`}\r
              O recibo e a nota fiscal vão para {dados.email}.\r
            </p>\r
          </div>\r
          {pagamento === 'pix' && (\r
            <Input label="Código do Pix Automático" description="No app do banco, escolha Pix copia e cola. A autorização vale para todas as mensalidades." readOnly value={codigoPix} trailing={<IconButton icon={Copy} label="Copiar código Pix" size="sm" onClick={() => copiar(codigoPix, 'Código Pix copiado')} />} />\r
          )}\r
          {pagamento === 'boleto' && (\r
            <div className="ts:flex ts:flex-col ts:gap-12">\r
              <Input label="Linha digitável" description="Pague no app do banco ou numa lotérica. A confirmação leva até 2 dias úteis." readOnly value={linhaDoBoleto} trailing={<IconButton icon={Copy} label="Copiar linha digitável" size="sm" onClick={() => copiar(linhaDoBoleto, 'Linha digitável copiada')} />} />\r
              <div><Button variant="secondary" leadingIcon={Download} onClick={() => toast.show({ title: 'Nada foi baixado: é só um exemplo' })}>Baixar boleto</Button></div>\r
            </div>\r
          )}\r
          <DescriptionList items={[\r
            { term: 'Pagamento', description: \`\${resumoDoPagamento}, todo dia \${diaDaCobranca}\` },\r
            { term: 'Próxima cobrança', description: dataCurta.format(proximaCobranca) },\r
            { term: 'Nota fiscal', description: \`\${dados.razao} · \${formatMask('cpfCnpj', dados.documento)}\` },\r
          ]} />\r
          <div><Button onClick={() => irPara('modelo-dashboard')}>Ir para o painel</Button></div>\r
        </div>\r
      ) : (\r
        <form ref={formulario} onSubmit={assinar} noValidate className="ts:flex ts:flex-col ts:gap-32">\r
          {quantosErros > 0 && (\r
            <Alert tone="error" title={\`Revise \${quantosErros === 1 ? '1 campo' : \`\${quantosErros} campos\`} antes de assinar\`}>Os campos marcados em vermelho estão vazios ou incompletos.</Alert>\r
          )}\r
\r
          <section ref={secaoDoPlano} id="plano" className="ts:flex ts:flex-col ts:gap-16">\r
            <h2 className="ts:text-heading-s">Plano</h2>\r
            <EscolhaDoPlano assinatura={assinatura} />\r
          </section>\r
\r
          <section className="ts:flex ts:flex-col ts:gap-16">\r
            <h2 className="ts:text-heading-s">Dados para a nota fiscal</h2>\r
            <Input label="E-mail de cobrança" type="email" autoComplete="email" description="Recebe o recibo, a nota fiscal e os avisos de cobrança." {...texto('email')} />\r
            <div className="ts:grid ts:grid-cols-6 ts:gap-16">\r
              <MaskedInput label="CNPJ ou CPF" mask="cpfCnpj" className="ts:col-span-3 ts:max-md:col-span-full" {...mascara('documento')} />\r
              <Input label="Razão social ou nome" autoComplete="organization" className="ts:col-span-3 ts:max-md:col-span-full" {...texto('razao')} />\r
              <MaskedInput\r
                label="CEP"\r
                mask="cep"\r
                className="ts:col-span-2 ts:max-md:col-span-full"\r
                value={dados.cep}\r
                onValueChange={mudarCep}\r
                error={erros.cep}\r
                trailing={buscandoCep ? <Spinner size="sm" label="Buscando o endereço" /> : undefined}\r
                description={cepDesconhecido ? 'CEP não encontrado. Preencha o endereço.' : <Link href="https://buscacepinter.correios.com.br/" external tone="muted">Não sei o CEP</Link>}\r
              />\r
              <Input label="Rua" autoComplete="address-line1" className="ts:col-span-4 ts:max-md:col-span-full" {...texto('rua')} />\r
              <Input ref={campoNumero} label="Número" className="ts:col-span-2 ts:max-md:col-span-full" {...texto('numero')} />\r
              <Input label="Complemento" optional autoComplete="address-line2" className="ts:col-span-4 ts:max-md:col-span-full" {...texto('complemento')} />\r
              <Input label="Bairro" className="ts:col-span-2 ts:max-md:col-span-full" {...texto('bairro')} />\r
              <Input label="Cidade" autoComplete="address-level2" className="ts:col-span-2 ts:max-md:col-span-full" {...texto('cidade')} />\r
              <Select label="Estado" className="ts:col-span-2 ts:max-md:col-span-full" options={ufs.map((uf) => ({ value: uf, label: uf }))} value={dados.uf} onValueChange={(v) => mudar('uf', v ?? '')} />\r
            </div>\r
          </section>\r
\r
          <section className="ts:flex ts:flex-col ts:gap-16">\r
            <h2 className="ts:text-heading-s">Forma de pagamento</h2>\r
            <RadioGroup aria-label="Forma de pagamento" variant="list" value={pagamento} onValueChange={(v) => mudarPagamento(v as FormaDePagamento)}>\r
              <Radio value="cartao" icon={CreditCard} label="Cartão de crédito" description={\`Cobrado hoje e depois todo dia \${diaDaCobranca}.\`} />\r
              <Radio value="pix" icon={QrCode} label="Pix Automático" description="Você autoriza uma vez no app do banco e a mensalidade sai sozinha." />\r
              <Radio value="boleto" icon={Barcode} label="Boleto" description="Chega por e-mail 10 dias antes de cada vencimento." />\r
            </RadioGroup>\r
            {pagamento === 'cartao' && (\r
              campoDoCartao\r
            )}\r
          </section>\r
\r
          <div className="ts:flex ts:flex-col ts:gap-12">\r
            <Button type="submit" size="lg" fullWidth loading={enviando}>Assinar</Button>\r
            <p className="ts:text-body-s ts:text-fg-muted">\r
              Ao assinar, você autoriza a cobrança de {real.format(mensal)} hoje e todo dia {diaDaCobranca}, até cancelar. Cancele quando quiser, sem multa, em Configurações.\r
            </p>\r
          </div>\r
        </form>\r
      )}\r
    </MolduraDoCheckout>\r
  );\r
}

function CampoDoCartaoDeExemplo() {\r
  return (\r
    <div role="group" aria-label="Campo de cartão do provedor, exemplo" className="ts:rounded-lg ts:border ts:border-dashed ts:border-border-default ts:px-16 ts:py-14">\r
      <p className="ts:text-label-s ts:text-fg-primary">Campo de cartão do provedor</p>\r
      <p className="ts:mt-4 ts:text-caption ts:text-fg-muted">Exemplo do catálogo. No seu projeto, encaixe aqui o elemento do provedor de pagamentos.</p>\r
    </div>\r
  );\r
}

// Logo: troque pelo do produto.
function Simbolo({ className }: { className?: string }) {\r
  return (\r
    <svg viewBox="0 0 142.2 142" fill="currentColor" aria-hidden className={className}>\r
      <path d="M20.2775 0.028336L0 20.3059L20.3282 40.5326L40.6058 20.2551L20.2775 0.028336Z" />\r
      <path d="M71.0261 1.39609e-05L50.7485 20.2776L71.0768 40.5043L91.3543 20.2268L71.0261 1.39609e-05Z" />\r
      <path d="M121.775 0.0389866L101.497 20.3165L121.825 40.5433L142.103 20.2657L121.775 0.0389866Z" />\r
      <path d="M34.6792 56.6867H5.96661V85.3276H34.6792V56.6867Z" fillOpacity={0.3} />\r
      <path d="M71.0282 50.7156L50.7507 70.9931L71.0789 91.2198L91.3564 70.9423L71.0282 50.7156Z" />\r
      <path d="M136.14 56.6867H107.428V85.3276H136.14V56.6867Z" fillOpacity={0.3} />\r
      <path d="M34.6792 107.345H5.96661V135.986H34.6792V107.345Z" fillOpacity={0.3} />\r
      <path d="M71.0282 101.414L50.7507 121.691L71.0789 141.918L91.3564 121.641L71.0282 101.414Z" />\r
      <path d="M136.14 107.345H107.428V135.986H136.14V107.345Z" fillOpacity={0.3} />\r
    </svg>\r
  );\r
}`,ModeloCheckoutEmEtapas:`import { Accordion, AccordionItem, Button, Checkbox, DescriptionList, Input, Link, MaskedInput, Meter, NumberField, Radio, RadioGroup, Separator, Stepper, Tag, cx, formatMask, isValidCnpj, useTessela } from '@tessela/web';
import { ArrowLeft, CircleCheck, Lock, Ticket } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react';

function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }),\r
    realCurto: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataHora: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
    dataPorExtenso: new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }),\r
    lista: new Intl.ListFormat(locale, { type: 'conjunction' }),\r
  };\r
}

const hoje = new Date();

const caminhoDoModelo = (id: string) => \`/\${id.replace('modelo-', '')}\`;

// Troque pela navegação do app (roteador ou link).
function irPara(id: string) {\r
  window.location.assign(caminhoDoModelo(id));\r
}

const planos = [\r
  { id: 'essencial', nome: 'Essencial', preco: 89, descricao: 'Pedidos, produtos e até 3 pessoas na equipe.' },\r
  { id: 'pro', nome: 'Pro', preco: 189, descricao: 'Tudo do Essencial, relatórios e equipe sem limite.', destaque: true },\r
  { id: 'rede', nome: 'Rede', preco: 389, descricao: 'Tudo do Pro, várias marcas e suporte dedicado.' },\r
];

const LOJA_ADICIONAL = 49;

const cupons: Record<string, { desconto: number; meses: number }> = { TESSELA10: { desconto: 0.1, meses: 3 } };

const centavos = (v: number) => Math.round(v * 100) / 100;

function LinhaDoTotal({ termo, valor }: { termo: ReactNode; valor: ReactNode }) {\r
  return <div className="ts:flex ts:items-baseline ts:justify-between ts:gap-12"><dt className="ts:text-fg-secondary">{termo}</dt><dd className="ts:tabular-nums ts:text-fg-primary">{valor}</dd></div>;\r
}

function useAssinatura() {\r
  const [idDoPlano, setIdDoPlano] = useState('pro');\r
  const [adicionais, setAdicionais] = useState<number | null>(1);\r
  const [cupom, setCupom] = useState<string | null>(null);\r
  const plano = planos.find((p) => p.id === idDoPlano)!;\r
  const lojasAMais = adicionais ?? 0;\r
  const semDesconto = plano.preco + lojasAMais * LOJA_ADICIONAL;\r
  const oferta = cupom ? cupons[cupom]! : null;\r
  const desconto = oferta ? centavos(semDesconto * oferta.desconto) : 0;\r
  return { idDoPlano, setIdDoPlano, plano, adicionais, setAdicionais, lojasAMais, cupom, setCupom, oferta, semDesconto, desconto, mensal: semDesconto - desconto };\r
}

type Assinatura = ReturnType<typeof useAssinatura>;

function CupomDaAssinatura({ assinatura: a }: { assinatura: Assinatura }) {\r
  const area = useRef<HTMLDivElement>(null);\r
  const [aberto, setAberto] = useState(false);\r
  const [texto, setTexto] = useState('');\r
  const [erro, setErro] = useState<string>();\r
  const [focar, setFocar] = useState(false);\r
\r
  // Quando o campo some, o foco vai para o que ficou no lugar: o botão de remover ou o de adicionar.\r
  useEffect(() => {\r
    if (!focar) return;\r
    area.current?.querySelector('button')?.focus();\r
    setFocar(false);\r
  }, [focar]);\r
\r
  function aplicar() {\r
    const codigo = texto.trim().toUpperCase();\r
    if (!codigo) return;\r
    if (!cupons[codigo]) { setErro('Cupom não encontrado. Confira as letras e os números.'); return; }\r
    a.setCupom(codigo);\r
    setTexto('');\r
    setAberto(false);\r
    setFocar(true);\r
  }\r
\r
  function fechar() {\r
    setAberto(false);\r
    setTexto('');\r
    setErro(undefined);\r
    setFocar(true);\r
  }\r
\r
  return (\r
    <div ref={area} className="ts:flex ts:flex-col">\r
      <div aria-live="polite">\r
        {a.cupom && a.oferta && (\r
          <Tag icon={Ticket} removeLabel={\`Remover o cupom \${a.cupom}\`} onRemove={() => { a.setCupom(null); setAberto(true); }}>\r
            {a.cupom} · {a.oferta.desconto * 100}% por {a.oferta.meses} meses\r
          </Tag>\r
        )}\r
      </div>\r
      {a.cupom ? null : aberto ? (\r
        <div className="ts:flex ts:items-start ts:gap-8">\r
          <Input\r
            aria-label="Cupom de desconto"\r
            placeholder="Código do cupom"\r
            autoCapitalize="characters"\r
            autoFocus\r
            className="ts:flex-1"\r
            value={texto}\r
            error={erro}\r
            onChange={(e) => { setTexto(e.target.value); setErro(undefined); }}\r
            onKeyDown={(e) => {\r
              if (e.key === 'Enter') { e.preventDefault(); aplicar(); }\r
              if (e.key === 'Escape') fechar();\r
            }}\r
          />\r
          <Button type="button" variant="secondary" onClick={aplicar}>Aplicar</Button>\r
        </div>\r
      ) : (\r
        <div><Button type="button" size="sm" variant="secondary" leadingIcon={Ticket} onClick={() => setAberto(true)}>Adicionar cupom</Button></div>\r
      )}\r
    </div>\r
  );\r
}

function EscolhaDoPlano({ assinatura: a }: { assinatura: Assinatura }) {\r
  const { locale } = useTessela();\r
  const { realCurto } = formatadores(locale);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-20">\r
      <RadioGroup aria-label="Plano" variant="list" value={a.idDoPlano} onValueChange={a.setIdDoPlano}>\r
        {planos.map((p) => (\r
          <Radio\r
            key={p.id}\r
            value={p.id}\r
            label={<span className="ts:flex ts:items-baseline ts:justify-between ts:gap-12"><span>{p.nome}</span>{' '}<span className="ts:tabular-nums ts:text-fg-secondary">{realCurto.format(p.preco)}/mês</span></span>}\r
            description={p.descricao}\r
          />\r
        ))}\r
      </RadioGroup>\r
      <NumberField\r
        label="Lojas adicionais"\r
        description={\`A primeira loja vem no plano; cada outra custa \${realCurto.format(LOJA_ADICIONAL)}/mês.\`}\r
        min={0}\r
        max={19}\r
        value={a.adicionais}\r
        onValueChange={a.setAdicionais}\r
      />\r
      <CupomDaAssinatura assinatura={a} />\r
    </div>\r
  );\r
}

type ResumoDaAssinaturaProps = {\r
  assinatura: Assinatura;\r
  /** O título da página (h1): “Assinar o plano Pro”. */\r
  titulo: string;\r
  /** A linha grande: o valor por mês ou os dias grátis. */\r
  destaque: ReactNode;\r
  detalhe?: ReactNode;\r
  /** Linhas entre o cupom e o total de hoje, como o desconto do teste grátis. */\r
  linhas?: { termo: ReactNode; valor: ReactNode }[];\r
  totalHoje: number;\r
  nota: ReactNode;\r
  /** Para onde a seta leva. Sem ela, só o símbolo. */\r
  voltar?: { modelo: string; rotulo: string };\r
  /** Leva às escolhas do plano no formulário. Sem ela, o link não aparece. */\r
  trocarPlano?: () => void;\r
  /** Depois de assinar: sem voltar nem trocar o plano. */\r
  travado?: boolean;\r
};

function ResumoDaAssinatura({ assinatura: a, titulo, destaque, detalhe, linhas = [], totalHoje, nota, voltar, trocarPlano, travado = false }: ResumoDaAssinaturaProps) {\r
  const { locale } = useTessela();\r
  const { real } = formatadores(locale);\r
  const detalhes = (\r
    <>\r
      <ul className="ts:flex ts:flex-col ts:gap-16">\r
        <li className="ts:flex ts:items-start ts:justify-between ts:gap-16">\r
          <div className="ts:min-w-0">\r
            <p className="ts:text-label-m ts:text-fg-primary">Plano {a.plano.nome}</p>\r
            <p className="ts:mt-2 ts:text-body-s ts:text-fg-muted">{a.plano.descricao}</p>\r
          </div>\r
          <span className="ts:tabular-nums ts:text-fg-primary">{real.format(a.plano.preco)}</span>\r
        </li>\r
        {a.lojasAMais > 0 && (\r
          <li className="ts:flex ts:items-start ts:justify-between ts:gap-16">\r
            <div className="ts:min-w-0">\r
              <p className="ts:text-label-m ts:text-fg-primary">Lojas adicionais</p>\r
              <p className="ts:mt-2 ts:text-body-s ts:text-fg-muted">{a.lojasAMais} × {real.format(LOJA_ADICIONAL)}</p>\r
            </div>\r
            <span className="ts:tabular-nums ts:text-fg-primary">{real.format(a.lojasAMais * LOJA_ADICIONAL)}</span>\r
          </li>\r
        )}\r
      </ul>\r
      {trocarPlano && !travado && (\r
        <p className="ts:mt-12 ts:text-body-s"><Link href="#plano" onClick={(e) => { e.preventDefault(); trocarPlano(); }}>Trocar plano</Link></p>\r
      )}\r
      <dl className="ts:mt-24 ts:flex ts:flex-col ts:gap-8 ts:border-t ts:border-border-default ts:pt-16 ts:text-body-m">\r
        <LinhaDoTotal termo="Subtotal" valor={real.format(a.semDesconto)} />\r
        {a.oferta && <LinhaDoTotal termo={\`Cupom \${a.cupom}\`} valor={\`−\${real.format(a.desconto)}\`} />}\r
        {linhas.map((l, i) => <LinhaDoTotal key={i} termo={l.termo} valor={l.valor} />)}\r
        <div className="ts:mt-8 ts:flex ts:items-baseline ts:justify-between ts:gap-12 ts:border-t ts:border-border-default ts:pt-16">\r
          <dt className="ts:text-label-m ts:text-fg-primary">Total hoje</dt>\r
          <dd className="ts:text-heading-s ts:tabular-nums ts:text-fg-primary">{real.format(totalHoje)}</dd>\r
        </div>\r
      </dl>\r
      <p className="ts:mt-8 ts:text-body-s ts:text-fg-muted">{nota}</p>\r
    </>\r
  );\r
\r
  return (\r
    <div className="ts:flex ts:justify-end ts:border-r ts:border-border-default ts:bg-bg-subtle ts:px-64 ts:py-64 ts:max-lg:justify-center ts:max-lg:border-r-0 ts:max-lg:border-b ts:max-lg:px-16 ts:max-lg:py-24">\r
      <div className="ts:flex ts:w-full ts:max-w-440 ts:flex-col ts:lg:sticky ts:lg:top-64 ts:lg:self-start">\r
        {voltar && !travado ? (\r
          <a\r
            href={caminhoDoModelo(voltar.modelo)}\r
            onClick={(e) => { e.preventDefault(); irPara(voltar.modelo); }}\r
            className="ts:flex ts:min-h-target-min ts:min-w-target-min ts:w-fit ts:items-center ts:gap-12 ts:-my-[max(0px,calc((var(--ts-target-min)-var(--ts-space-20))/2))] ts:rounded-md ts:text-fg-secondary ts:transition-colors ts:duration-(--ts-duration-fast) ts:hover:text-fg-primary"\r
          >\r
            <ArrowLeft aria-hidden className="ts:size-icon-md" />\r
            <Simbolo className="ts:h-20 ts:w-auto ts:text-fg-primary" />\r
            <span className="ts:sr-only">{voltar.rotulo}</span>\r
          </a>\r
        ) : (\r
          <Simbolo className="ts:h-20 ts:w-auto ts:self-start ts:text-fg-primary" />\r
        )}\r
\r
        <div className="ts:mt-40 ts:flex ts:flex-col ts:gap-4 ts:max-lg:mt-20">\r
          <h1 className="ts:text-body-l ts:text-fg-secondary">{titulo}</h1>\r
          <p className="ts:flex ts:flex-wrap ts:items-baseline ts:gap-x-8">{destaque}</p>\r
          {detalhe && <p className="ts:text-body-s ts:text-fg-muted">{detalhe}</p>}\r
        </div>\r
\r
        <div className="ts:mt-40 ts:max-lg:hidden">{detalhes}</div>\r
        <Accordion className="ts:mt-12 ts:lg:hidden">\r
          <AccordionItem value="detalhes" title={\`Ver detalhes · \${real.format(totalHoje)} hoje\`}>{detalhes}</AccordionItem>\r
        </Accordion>\r
\r
        <p className="ts:mt-48 ts:flex ts:flex-wrap ts:items-center ts:gap-x-12 ts:gap-y-4 ts:text-body-s ts:text-fg-muted ts:max-lg:mt-16">\r
          <span className="ts:flex ts:items-center ts:gap-6"><Lock aria-hidden className="ts:size-icon-sm" />Pagamento seguro</span>\r
          <Link href="#" tone="muted" onClick={(e) => e.preventDefault()}>Termos</Link>\r
          <Link href="#" tone="muted" onClick={(e) => e.preventDefault()}>Privacidade</Link>\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}

function MolduraDoCheckout({ cheio, resumo, children }: { cheio?: boolean; resumo: ReactNode; children: ReactNode }) {\r
  return (\r
    <div className={cx('ts:grid ts:grid-cols-2 ts:bg-bg-base ts:max-lg:grid-cols-1', cheio ? 'ts:min-h-dvh' : 'ts:h-[860px] ts:overflow-y-auto ts:rounded-lg ts:border ts:border-border-default')}>\r
      {resumo}\r
      <div className="ts:flex ts:justify-start ts:px-64 ts:py-64 ts:max-lg:justify-center ts:max-lg:px-16 ts:max-lg:py-32">\r
        <div className="ts:w-full ts:max-w-440">{children}</div>\r
      </div>\r
    </div>\r
  );\r
}

type PropsDoCheckout = { cheio?: boolean; campoDoCartao?: ReactNode };

const DIAS_DE_TESTE = 7;

const fimDoTeste = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + DIAS_DE_TESTE);

const etapasDoCadastro = [{ id: 'empresa', label: 'Empresa' }, { id: 'conta', label: 'Conta' }, { id: 'plano', label: 'Plano' }, { id: 'pagamento', label: 'Pagamento' }];

const regrasDaSenha = [\r
  { id: 'tamanho', falta: 'pelo menos 8 caracteres', cumpre: (s: string) => s.length >= 8 },\r
  { id: 'maiuscula', falta: 'uma letra maiúscula', cumpre: (s: string) => /\\p{Lu}/u.test(s) },\r
  { id: 'minuscula', falta: 'uma letra minúscula', cumpre: (s: string) => /\\p{Ll}/u.test(s) },\r
  { id: 'numero', falta: 'um número', cumpre: (s: string) => /\\d/.test(s) },\r
  { id: 'simbolo', falta: 'um símbolo', cumpre: (s: string) => /[^\\p{L}\\d\\s]/u.test(s) },\r
];

const forcaDaSenha = ['Muito fraca', 'Muito fraca', 'Fraca', 'Razoável', 'Boa', 'Forte'];

const cadastroVazio = {\r
  cnpj: '', razao: '', nome: '', email: '', whatsapp: '', senha: '', termos: false, anexo: false,\r
};

type Cadastro = typeof cadastroVazio;

type ErrosDoCadastro = Partial<Record<keyof Cadastro, string>>;

function errosDaEtapa(etapa: number, d: Cadastro, locale: string): ErrosDoCadastro {\r
  const e: ErrosDoCadastro = {};\r
  if (etapa === 0) {\r
    if (!isValidCnpj(d.cnpj)) e.cnpj = d.cnpj ? 'CNPJ inválido. Confira os números.' : 'Informe o CNPJ da loja.';\r
    if (!d.razao.trim()) e.razao = 'Informe a razão social.';\r
  }\r
  if (etapa === 1) {\r
    if (!d.nome.trim()) e.nome = 'Informe o seu nome.';\r
    if (!/^\\S+@\\S+\\.\\S+$/.test(d.email)) e.email = 'Informe um e-mail válido.';\r
    if (d.whatsapp.length < 10) e.whatsapp = 'Informe o WhatsApp com DDD.';\r
    const faltam = regrasDaSenha.filter((r) => !r.cumpre(d.senha)).map((r) => r.falta);\r
    if (faltam.length) e.senha = \`A senha precisa de \${formatadores(locale).lista.format(faltam)}.\`;\r
  }\r
  if (etapa === 2) {\r
    if (!d.termos) e.termos = 'Aceite os termos de uso para continuar.';\r
    if (!d.anexo) e.anexo = 'Aceite as condições e o anexo comercial para continuar.';\r
  }\r
  return e;\r
}

export function ModeloCheckoutEmEtapas({ cheio, campoDoCartao = <CampoDoCartaoDeExemplo /> }: PropsDoCheckout) {\r
  const assinatura = useAssinatura();\r
  const { locale } = useTessela();\r
  const { real, dataCurta, dataPorExtenso } = formatadores(locale);\r
  // 0 Empresa, 1 Conta, 2 Plano, 3 Pagamento, 4 teste iniciado.\r
  const [etapa, setEtapa] = useState(0);\r
  const [dados, setDados] = useState(cadastroVazio);\r
  const [erros, setErros] = useState<ErrosDoCadastro>({});\r
  const [tentativasComErro, setTentativasComErro] = useState(0);\r
  const [enviando, setEnviando] = useState(false);\r
  const formulario = useRef<HTMLFormElement>(null);\r
  const tituloDaEtapa = useRef<HTMLHeadingElement>(null);\r
  const primeiraVez = useRef(true);\r
\r
  const { plano, mensal, semDesconto, oferta } = assinatura;\r
  const iniciado = etapa === 4;\r
  const cumpridas = regrasDaSenha.filter((r) => r.cumpre(dados.senha)).length;\r
\r
  // A cada troca de etapa, o leitor de tela começa pelo título novo (e o foco leva a página até ele).\r
  useEffect(() => {\r
    if (primeiraVez.current) { primeiraVez.current = false; return; }\r
    tituloDaEtapa.current?.focus();\r
  }, [etapa]);\r
\r
  useEffect(() => {\r
    if (tentativasComErro) formulario.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();\r
  }, [tentativasComErro]);\r
\r
  function mudar<K extends keyof Cadastro>(campo: K, valor: Cadastro[K]) {\r
    setDados((d) => ({ ...d, [campo]: valor }));\r
    setErros((e) => {\r
      if (!e[campo]) return e;\r
      const resto = { ...e };\r
      delete resto[campo];\r
      return resto;\r
    });\r
  }\r
  const texto = (campo: 'razao' | 'nome' | 'email' | 'senha') => ({ value: dados[campo], onChange: (e: { target: { value: string } }) => mudar(campo, e.target.value), error: erros[campo] });\r
  const mascara = (campo: 'cnpj' | 'whatsapp') => ({ value: dados[campo], onValueChange: (digitos: string) => mudar(campo, digitos), error: erros[campo] });\r
\r
  function avancar(e: FormEvent<HTMLFormElement>) {\r
    e.preventDefault();\r
    const novos = errosDaEtapa(etapa, dados, locale);\r
    setErros(novos);\r
    if (Object.keys(novos).length) { setTentativasComErro((n) => n + 1); return; }\r
    if (etapa < 3) { setEtapa(etapa + 1); return; }\r
    setEnviando(true);\r
    window.setTimeout(() => { setEnviando(false); setEtapa(4); }, 900);\r
  }\r
\r
  function voltarPara(anterior: number) {\r
    setErros({});\r
    setEtapa(anterior);\r
  }\r
\r
  const textosDasEtapas = [\r
    { titulo: 'Dados da empresa', descricao: 'O CNPJ identifica a loja e vai na nota fiscal.' },\r
    { titulo: 'Sua conta', descricao: 'Com estes dados você entra no painel. Endereço e horários ficam para depois.' },\r
    { titulo: 'Plano', descricao: \`O teste de \${DIAS_DE_TESTE} dias vale para qualquer plano. O resumo ao lado mostra o valor depois do teste.\` },\r
    { titulo: 'Cartão de crédito', descricao: \`Nada é cobrado hoje. A primeira cobrança é em \${dataCurta.format(fimDoTeste)}.\` },\r
  ];\r
  const textos = textosDasEtapas[Math.min(etapa, 3)]!;\r
\r
  return (\r
    <MolduraDoCheckout\r
      cheio={cheio}\r
      resumo={(\r
        <ResumoDaAssinatura\r
          assinatura={assinatura}\r
          titulo={iniciado ? \`Teste do plano \${plano.nome}\` : \`Testar o plano \${plano.nome}\`}\r
          destaque={<span className="ts:text-display">{DIAS_DE_TESTE} dias grátis</span>}\r
          detalhe={<>Depois, <span className="ts:text-fg-primary ts:tabular-nums">{real.format(mensal)}</span> por mês, a partir de {dataPorExtenso.format(fimDoTeste)}{oferta ? \`; \${real.format(semDesconto)} depois de \${oferta.meses} meses\` : ''}.</>}\r
          linhas={[{ termo: \`Teste de \${DIAS_DE_TESTE} dias\`, valor: \`−\${real.format(mensal)}\` }]}\r
          totalHoje={0}\r
          nota={\`Primeira cobrança em \${dataCurta.format(fimDoTeste)}; depois, todo dia \${fimDoTeste.getDate()}.\`}\r
          voltar={{ modelo: 'modelo-login', rotulo: 'Sair do cadastro e voltar ao login' }}\r
          trocarPlano={etapa === 3 ? () => voltarPara(2) : undefined}\r
          travado={iniciado}\r
        />\r
      )}\r
    >\r
      {iniciado ? (\r
        <div className="ts:flex ts:flex-col ts:gap-24">\r
          <span className="ts:flex ts:size-48 ts:items-center ts:justify-center ts:rounded-full ts:bg-feedback-success-bg ts:text-feedback-success-icon">\r
            <CircleCheck aria-hidden className="ts:size-icon-lg" />\r
          </span>\r
          <div className="ts:flex ts:flex-col ts:gap-4">\r
            <h2 ref={tituloDaEtapa} tabIndex={-1} className="ts:text-heading-l ts:outline-none">Teste iniciado</h2>\r
            <p className="ts:text-body-m ts:text-fg-secondary">Até {dataCurta.format(fimDoTeste)}, nada é cobrado. O acesso ao painel foi para {dados.email}.</p>\r
          </div>\r
          <DescriptionList items={[\r
            { term: 'Loja', description: \`\${dados.razao} · \${formatMask('cnpj', dados.cnpj)}\` },\r
            { term: 'Conta', description: \`\${dados.nome} · \${formatMask('telefone', dados.whatsapp)}\` },\r
            { term: 'Primeira cobrança', description: \`\${dataCurta.format(fimDoTeste)}, \${real.format(mensal)}\` },\r
            { term: 'Cartão', description: 'Confirmado pelo provedor de pagamentos' },\r
          ]} />\r
          <div><Button onClick={() => irPara('modelo-dashboard')}>Ir para o painel</Button></div>\r
        </div>\r
      ) : (\r
        <div className="ts:flex ts:flex-col ts:gap-32">\r
          <Stepper steps={etapasDoCadastro} current={etapa} onStepChange={voltarPara} />\r
\r
          <form ref={formulario} onSubmit={avancar} noValidate className="ts:flex ts:flex-col ts:gap-24">\r
            <section className="ts:flex ts:flex-col ts:gap-16">\r
              <div>\r
                <h2 ref={tituloDaEtapa} tabIndex={-1} className="ts:text-heading-s ts:outline-none">{textos.titulo}</h2>\r
                <p className="ts:mt-2 ts:text-body-s ts:text-fg-secondary">{textos.descricao}</p>\r
              </div>\r
\r
              {etapa === 0 && (\r
                <div className="ts:grid ts:grid-cols-6 ts:gap-16">\r
                  <MaskedInput label="CNPJ" mask="cnpj" className="ts:col-span-3 ts:max-md:col-span-full" {...mascara('cnpj')} />\r
                  <Input label="Razão social" autoComplete="organization" className="ts:col-span-3 ts:max-md:col-span-full" {...texto('razao')} />\r
                </div>\r
              )}\r
\r
              {etapa === 1 && (\r
                <div className="ts:flex ts:flex-col ts:gap-16">\r
                  <Input label="Nome" autoComplete="name" {...texto('nome')} />\r
                  <MaskedInput label="WhatsApp" mask="telefone" {...mascara('whatsapp')} />\r
                  <Input label="E-mail" type="email" autoComplete="username" {...texto('email')} />\r
                  <div className="ts:flex ts:flex-col ts:gap-12">\r
                    <Input label="Senha" type="password" autoComplete="new-password" description="Pelo menos 8 caracteres, com letra maiúscula, minúscula, número e símbolo." {...texto('senha')} />\r
                    {dados.senha && <Meter label="Força da senha" value={cumpridas} max={regrasDaSenha.length} valueLabel={forcaDaSenha[cumpridas]} warningAt={2} dangerAt={2} size="sm" />}\r
                  </div>\r
                </div>\r
              )}\r
\r
              {etapa === 2 && (\r
                <>\r
                  <EscolhaDoPlano assinatura={assinatura} />\r
                  <Separator />\r
                  <div className="ts:flex ts:flex-col ts:gap-12">\r
                    <p className="ts:text-body-s ts:text-fg-secondary">Renova todo mês. Cancele quando quiser no painel; o acesso vale até o fim do mês pago.</p>\r
                    <Checkbox\r
                      checked={dados.termos}\r
                      onCheckedChange={(v) => mudar('termos', v)}\r
                      error={erros.termos}\r
                      label={<>Li e aceito os <Link href="#" onClick={(e) => e.preventDefault()}>termos de uso</Link>.</>}\r
                    />\r
                    <Checkbox\r
                      checked={dados.anexo}\r
                      onCheckedChange={(v) => mudar('anexo', v)}\r
                      error={erros.anexo}\r
                      label={<>Li e aceito as condições do resumo e o <Link href="#" onClick={(e) => e.preventDefault()}>anexo comercial</Link>.</>}\r
                    />\r
                  </div>\r
                </>\r
              )}\r
\r
              {etapa === 3 && (\r
                campoDoCartao\r
              )}\r
            </section>\r
\r
            <div className="ts:flex ts:justify-between ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
              <Button type="button" variant="ghost" disabled={etapa === 0} onClick={() => voltarPara(etapa - 1)}>Voltar</Button>\r
              <Button type="submit" loading={enviando}>{etapa === 3 ? 'Iniciar teste' : 'Continuar'}</Button>\r
            </div>\r
            {etapa === 3 && (\r
              <p className="ts:text-body-s ts:text-fg-muted">Ao iniciar, você autoriza a cobrança de {real.format(mensal)} por mês a partir de {dataCurta.format(fimDoTeste)}, até cancelar.</p>\r
            )}\r
          </form>\r
\r
          {etapa === 0 && (\r
            <p className="ts:text-center ts:text-body-s ts:text-fg-secondary">\r
              Já tem conta? <Link href={caminhoDoModelo('modelo-login')} onClick={(e) => { e.preventDefault(); irPara('modelo-login'); }}>Entrar</Link>\r
            </p>\r
          )}\r
        </div>\r
      )}\r
    </MolduraDoCheckout>\r
  );\r
}

function CampoDoCartaoDeExemplo() {\r
  return (\r
    <div role="group" aria-label="Campo de cartão do provedor, exemplo" className="ts:rounded-lg ts:border ts:border-dashed ts:border-border-default ts:px-16 ts:py-14">\r
      <p className="ts:text-label-s ts:text-fg-primary">Campo de cartão do provedor</p>\r
      <p className="ts:mt-4 ts:text-caption ts:text-fg-muted">Exemplo do catálogo. No seu projeto, encaixe aqui o elemento do provedor de pagamentos.</p>\r
    </div>\r
  );\r
}

// Logo: troque pelo do produto.
function Simbolo({ className }: { className?: string }) {\r
  return (\r
    <svg viewBox="0 0 142.2 142" fill="currentColor" aria-hidden className={className}>\r
      <path d="M20.2775 0.028336L0 20.3059L20.3282 40.5326L40.6058 20.2551L20.2775 0.028336Z" />\r
      <path d="M71.0261 1.39609e-05L50.7485 20.2776L71.0768 40.5043L91.3543 20.2268L71.0261 1.39609e-05Z" />\r
      <path d="M121.775 0.0389866L101.497 20.3165L121.825 40.5433L142.103 20.2657L121.775 0.0389866Z" />\r
      <path d="M34.6792 56.6867H5.96661V85.3276H34.6792V56.6867Z" fillOpacity={0.3} />\r
      <path d="M71.0282 50.7156L50.7507 70.9931L71.0789 91.2198L91.3564 70.9423L71.0282 50.7156Z" />\r
      <path d="M136.14 56.6867H107.428V85.3276H136.14V56.6867Z" fillOpacity={0.3} />\r
      <path d="M34.6792 107.345H5.96661V135.986H34.6792V107.345Z" fillOpacity={0.3} />\r
      <path d="M71.0282 101.414L50.7507 121.691L71.0789 141.918L91.3564 121.641L71.0282 101.414Z" />\r
      <path d="M136.14 107.345H107.428V135.986H136.14V107.345Z" fillOpacity={0.3} />\r
    </svg>\r
  );\r
}`,ModeloCheckoutMenux:`import { useEffect, useRef, useState, type FormEvent, type ReactNode, type SVGProps } from 'react';\r
import { ArrowLeft, ArrowRight, CalendarClock, CircleCheck, Crown, Info, Lock, LockKeyhole, QrCode, ShieldCheck, Sparkles, Star, Utensils, type LucideIcon } from 'lucide-react';\r
import {\r
  Alert, Badge, Button, Card, Checkbox, DescriptionList, Input, Link, MaskedInput, Meter, Spinner, Stepper, ToastProvider,\r
  buttonClassName, cx, formatMask, isValidCnpj, useTessela, useToast,\r
} from '@tessela/menux';\r
import { LogoMenux } from './LogoMenux';\r
\r
/*\r
 * Cadastro do Plano Light pelo site, com 7 dias grátis: CNPJ → conta → plano → cartão (RN-009-B).\r
 * Regras: \`Plano Light - Definição\` §7 e §13.6 e \`Pricing Book - Interno\`, no Drive do Menux.\r
 * A tela não fala com o servidor nem com o Stripe: o app liga as funções das props.\r
 *\r
 * Os textos são os do cadastro do backoffice do Menux,\r
 * aprovados nos ciclos do Plano Light; mudar um texto aqui só junto com o de lá. As regras também são as de lá\r
 * (\`apps/backoffice/src/pages/auth/register/\`): razão social editável desde o começo (AC-009-B.2), etapas como grupo,\r
 * sem clique (T-018), cada condição de preço uma vez (T-025), cartão no campo embutido da Stripe, que o Menux não\r
 * recebe (D9; ADR 0006 da API do Menux) e, na senha, letra só de A a Z. A tela de teste iniciado é deste modelo: no\r
 * backoffice, a confirmação é a página para onde a Stripe leva depois do cartão.\r
 */\r
\r
/** \`Pricing Book - Interno\`: R$ 97 por mês, sem taxa de implantação e sem fidelidade. */\r
const PRECO_DO_LIGHT = 97;\r
/** Os dias grátis contam do aceite, não da confirmação do cartão (D-C706-01). */\r
const DIAS_DE_TESTE = 7;\r
/** Planos que só a equipe comercial contrata. Pedidos pelo link, abrem o aviso da entrada (D-C706-02). */\r
const planosDaEquipe: Record<string, string> = { assist: 'ASSIST', sales: 'SALES', control: 'CONTROL' };\r
/** O que o Light entrega, como no painel público do backoffice (\`pages.auth.publicPanel.*\`). */\r
const recursosDoLight = [\r
  { simbolo: QrCode, titulo: 'Cardápio digital no QR do restaurante', texto: 'Um QR só para o salão, no mesmo link público do cardápio, e sem limite de itens. O cliente escaneia e vê o cardápio de hoje.' },\r
  { simbolo: Sparkles, titulo: 'Maestro atende junto com você', texto: 'Explica pratos, compara opções, responde sobre alergias e sugere o vinho — a mesma inteligência dos planos maiores.' },\r
  { simbolo: Utensils, titulo: 'O cliente escolhe e fala com o garçom', texto: 'Sem pedido pelo aplicativo: a mesa decide melhor informada, e quem fecha a experiência é a sua equipe.' },\r
];\r
/** No celular e no tablet, o depoimento da etapa vira aviso: chega um pouco depois de a etapa abrir e aparece uma vez. */\r
const DEPOIMENTO_EM_AVISO = { espera: 3000, duracao: 6000 };\r
/** Tempo de cada depoimento na tela quando eles passam sozinhos. */\r
const INTERVALO_DOS_DEPOIMENTOS = 6000;\r
\r
/** Os documentos aceitos na etapa do plano, com a versão que vale no aceite (informadas em 28/09/2026). */\r
const TERMOS_DE_USO = 'Termos de Uso B2B (v1.1)';\r
const ANEXO_DO_LIGHT = 'Anexo Comercial - Light (v1.4)';\r
\r
/** Sem centavos, como o \`formatBRL\` do backoffice: R$ 97, R$ 0. */\r
function formatadores(locale: string) {\r
  return {\r
    real: new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),\r
    dataCurta: new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }),\r
  };\r
}\r
const icone = 'ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]';\r
\r
/** O WhatsApp no traço dos ícones do lucide, que não traz marcas. Desenho do \`brand-whatsapp\` do Tabler Icons. Copyright (c) 2020-2026 Paweł Kuna. Licença MIT: https://github.com/tabler/tabler-icons/blob/main/LICENSE */\r
function IconeWhatsApp(props: SVGProps<SVGSVGElement>) {\r
  return (\r
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>\r
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />\r
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />\r
    </svg>\r
  );\r
}\r
\r
function cobrancaSeConcluirHoje() {\r
  const d = new Date();\r
  d.setDate(d.getDate() + DIAS_DE_TESTE);\r
  return d;\r
}\r
\r
const etapas = [{ id: 'cnpj', label: 'CNPJ' }, { id: 'conta', label: 'Conta' }, { id: 'plano', label: 'Plano' }, { id: 'cartao', label: 'Cartão' }];\r
\r
// As do \`passwordSchema\` do backoffice: letra é só de A a Z; letra acentuada, espaço e o resto contam como caractere especial.\r
const regrasDaSenha = [\r
  { id: 'tamanho', cumpre: (s: string) => s.length >= 8 },\r
  { id: 'maiuscula', cumpre: (s: string) => /[A-Z]/.test(s) },\r
  { id: 'minuscula', cumpre: (s: string) => /[a-z]/.test(s) },\r
  { id: 'numero', cumpre: (s: string) => /[0-9]/.test(s) },\r
  { id: 'simbolo', cumpre: (s: string) => /[^A-Za-z0-9]/.test(s) },\r
];\r
const regraDaSenha = 'Use ao menos 8 caracteres com maiúscula, minúscula, número e caractere especial.';\r
const forcaDaSenha = ['Muito fraca', 'Muito fraca', 'Fraca', 'Razoável', 'Boa', 'Forte'];\r
\r
/** O que a consulta do CNPJ devolve. */\r
export type ConsultaDoCnpj =\r
  /** Pode seguir: a razão social vem da consulta pública. */\r
  | { situacao: 'livre'; razaoSocial: string }\r
  /** A consulta não achou o CNPJ ou está fora do ar: a pessoa digita a razão social. */\r
  | { situacao: 'nao-encontrado' }\r
  /** O CNPJ já tem conta: a pessoa entra. */\r
  | { situacao: 'ja-tem-conta' }\r
  /** O CNPJ está com a equipe comercial (RN-DEDUP-01). A tela não revela isso (D-C706-03). */\r
  | { situacao: 'em-atendimento' };\r
\r
export type DadosDoCadastro = {\r
  /** Só os 14 dígitos. */\r
  cnpj: string;\r
  razaoSocial: string;\r
  nome: string;\r
  email: string;\r
  /** Só os dígitos, com DDD. */\r
  whatsapp: string;\r
  senha: string;\r
  /** O instante do aceite: os dias grátis contam dele (D-C706-01). */\r
  aceiteEm: Date;\r
};\r
\r
export type EtapaDoCadastro = 'cnpj' | 'conta' | 'plano' | 'cartao';\r
\r
/** Depoimento de quem usa o Menux. Só entra com autorização por escrito de quem falou. */\r
export type Depoimento = {\r
  texto: string;\r
  nome: string;\r
  /** Cargo, restaurante e cidade, como a pessoa autorizou. */\r
  descricao: string;\r
  /** De 1 a 5. */\r
  nota: number;\r
  /**\r
   * A etapa em que ele aparece, porque fala do que a pessoa está fazendo ali (o cartão, por exemplo, com um cliente\r
   * contando que o pagamento é prático). Sem etapa, aparece nas etapas que não têm um depoimento próprio.\r
   */\r
  etapa?: EtapaDoCadastro;\r
};\r
\r
/** Os depoimentos da etapa; se ela não tiver nenhum, os sem etapa; se não houver, todos. */\r
function depoimentosDaEtapa(todos: Depoimento[], etapa: EtapaDoCadastro | null) {\r
  const daEtapa = todos.filter((d) => d.etapa === etapa);\r
  if (daEtapa.length) return daEtapa;\r
  const semEtapa = todos.filter((d) => !d.etapa);\r
  return semEtapa.length ? semEtapa : todos;\r
}\r
\r
export type CheckoutMenuxProps = {\r
  /** Plano pedido no link, como \`?plano=sales\`. Só o Light tem cadastro pelo site; ASSIST, SALES e CONTROL abrem o aviso da entrada. */\r
  planoPedido?: string | null;\r
  consultarCnpj: (cnpj: string) => Promise<ConsultaDoCnpj>;\r
  /**\r
   * Cria a conta e o teste, no aceite do plano. Devolve a data da primeira cobrança, que é a mesma\r
   * do billing e do aviso antes da cobrança, ou o erro para mostrar.\r
   */\r
  criarConta: (dados: DadosDoCadastro) => Promise<{ primeiraCobranca: Date } | { erro: string }>;\r
  /** O campo do cartão da Stripe (\`<PaymentElement />\`, ADR 0006 do Menux). Número, validade e código nunca passam pelo Menux. */\r
  campoDoCartao: ReactNode;\r
  /** Confirma o cartão na Stripe (\`checkout.confirm()\` da sessão de Checkout). Devolve o erro para mostrar, ou nada. */\r
  confirmarCartao: () => Promise<{ erro: string } | void>;\r
  /** Monta o link do WhatsApp comercial com a mensagem pronta. */\r
  linkDoWhatsApp: (mensagem: string) => string;\r
  links: { site: string; entrar: string; termos: string; anexo: string; privacidade: string; backoffice: string };\r
  /**\r
   * Depoimentos reais e autorizados. Sem eles, a seção não aparece: o Menux não usa prova social\r
   * sem depoimento real (\`Social Media\` §11.4) nem dado inventado (Anti-Manifesto §10.2).\r
   */\r
  depoimentos?: Depoimento[];\r
  /** Selos oficiais de terceiros que o Menux tiver, como o do Reclame Aqui, com o código que cada um fornece. */\r
  selos?: ReactNode;\r
};\r
\r
const cadastroVazio = { cnpj: '', razaoSocial: '', nome: '', email: '', whatsapp: '', senha: '', termos: false, anexo: false };\r
type Cadastro = typeof cadastroVazio;\r
type Erros = Partial<Record<keyof Cadastro, string>>;\r
\r
const erroAoCriarConta = 'Não foi possível criar sua conta agora. Tente novamente.';\r
const erroNoCartao = 'Não foi possível salvar o cartão. Confira os dados e tente novamente.';\r
const cnpjInvalido = 'CNPJ inválido. Verifique o número e tente novamente.';\r
\r
function LinhaDoTotal({ termo, valor }: { termo: ReactNode; valor: ReactNode }) {\r
  return <div className="ts:flex ts:items-baseline ts:justify-between ts:gap-12"><dt className="ts:text-fg-secondary">{termo}</dt><dd className="ts:tabular-nums ts:text-fg-primary">{valor}</dd></div>;\r
}\r
\r
function Estrelas({ nota }: { nota: number }) {\r
  return (\r
    <span role="img" aria-label={\`Nota \${nota} de 5\`} className="ts:flex ts:items-center ts:gap-2 ts:text-fg-primary">\r
      {Array.from({ length: 5 }, (_, i) => (\r
        <Star key={i} aria-hidden fill={i < nota ? 'currentColor' : 'none'} className={cx(icone, 'ts:size-icon-sm', i >= nota && 'ts:text-fg-muted')} />\r
      ))}\r
    </span>\r
  );\r
}\r
\r
/**\r
 * No celular e no tablet, onde o resumo não aparece, o depoimento da etapa chega como aviso (toast), um pouco depois\r
 * de a etapa abrir. Cada depoimento aparece uma vez. O aviso some sozinho, para enquanto o mouse ou o foco está nele\r
 * e tem o X para fechar. Com movimento reduzido no sistema, não aparece.\r
 */\r
function useDepoimentoDaEtapaEmAviso(itens: Depoimento[], etapa: EtapaDoCadastro | null) {\r
  const toast = useToast();\r
  const mostrados = useRef(new Set<Depoimento['texto']>());\r
  // A lista e os avisos mais recentes, lidos na hora: só a troca de etapa reinicia a espera, não cada tecla ou aviso.\r
  const lista = useRef(itens);\r
  const avisos = useRef(toast);\r
  useEffect(() => { lista.current = itens; avisos.current = toast; });\r
\r
  useEffect(() => {\r
    if (!etapa) return;\r
    const semResumo = window.matchMedia('(max-width: 1023.98px)').matches;\r
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
    if (!semResumo || menosMovimento) return;\r
    const relogio = window.setTimeout(() => {\r
      const d = lista.current.find((x) => !mostrados.current.has(x.texto));\r
      if (!d) return;\r
      mostrados.current.add(d.texto);\r
      avisos.current.show({\r
        title: <Estrelas nota={d.nota} />,\r
        description: (\r
          <>\r
            “{d.texto}”\r
            <span className="ts:mt-4 ts:block ts:text-caption ts:text-fg-muted"><span className="ts:text-label-s ts:text-fg-primary">{d.nome}</span> · {d.descricao}</span>\r
          </>\r
        ),\r
        timeout: DEPOIMENTO_EM_AVISO.duracao,\r
      });\r
    }, DEPOIMENTO_EM_AVISO.espera);\r
    return () => window.clearTimeout(relogio);\r
  }, [etapa]);\r
}\r
\r
/**\r
 * Quem já usa o Menux: um depoimento por vez, num card enxuto, passando sozinho. Para parar (WCAG 2.2.2), sem botão\r
 * de pausa: escolher um ponto para a troca de vez; o mouse ou o foco sobre o card pausam; com movimento reduzido no\r
 * sistema, não passa sozinho. Sem depoimento, nada aparece.\r
 */\r
function Depoimentos({ itens, className }: { itens: Depoimento[]; className?: string }) {\r
  const [atual, setAtual] = useState(0);\r
  const [parado, setParado] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);\r
  const [mouseSobre, setMouseSobre] = useState(false);\r
  const [focoDentro, setFocoDentro] = useState(false);\r
  const varios = itens.length > 1;\r
  const passando = varios && !parado && !mouseSobre && !focoDentro;\r
\r
  useEffect(() => {\r
    if (!passando) return;\r
    const relogio = window.setInterval(() => setAtual((i) => (i + 1) % itens.length), INTERVALO_DOS_DEPOIMENTOS);\r
    return () => window.clearInterval(relogio);\r
  }, [passando, itens.length]);\r
\r
  if (!itens.length) return null;\r
\r
  // Cada parte que muda fica numa pilha: todos os depoimentos no mesmo lugar, só o atual à vista.\r
  // A altura é a do maior, e a troca não mexe no card.\r
  const pilha = (parte: (d: Depoimento) => ReactNode, classe?: string) => (\r
    <div className={cx('ts:grid', classe)}>\r
      {itens.map((d, i) => (\r
        <div\r
          key={d.nome}\r
          aria-hidden={i !== atual}\r
          className={cx(\r
            'ts:col-start-1 ts:row-start-1 ts:transition-[opacity,visibility] ts:duration-(--ts-duration-slower) ts:ease-out ts:motion-reduce:transition-none',\r
            i === atual ? 'ts:opacity-100' : 'ts:invisible ts:opacity-0',\r
          )}\r
        >\r
          {parte(d)}\r
        </div>\r
      ))}\r
    </div>\r
  );\r
\r
  return (\r
    <section\r
      aria-roledescription="carrossel"\r
      aria-label="Quem já usa o Menux"\r
      className={className}\r
      onMouseEnter={() => setMouseSobre(true)}\r
      onMouseLeave={() => setMouseSobre(false)}\r
      onFocus={() => setFocoDentro(true)}\r
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocoDentro(false); }}\r
    >\r
      <Card>\r
        <div className="ts:flex ts:flex-col ts:gap-10">\r
          {pilha((d) => <Estrelas nota={d.nota} />)}\r
          {pilha((d) => <blockquote className="ts:text-body-m ts:text-fg-primary">“{d.texto}”</blockquote>)}\r
          <div className="ts:flex ts:items-center ts:justify-between ts:gap-12">\r
            {pilha((d) => (\r
              <p className="ts:text-caption ts:text-fg-muted"><span className="ts:text-label-s ts:text-fg-primary">{d.nome}</span> · {d.descricao}</p>\r
            ), 'ts:min-w-0')}\r
            {varios && (\r
              <>\r
                {/* Anunciado só com os depoimentos parados, para o leitor de tela não falar a cada troca. */}\r
                <span aria-live={passando ? 'off' : 'polite'} className="ts:sr-only">Depoimento {atual + 1} de {itens.length}</span>\r
                <div role="group" aria-label="Escolher o depoimento" className="ts:-mr-8 ts:flex ts:shrink-0 ts:items-center">\r
                  {itens.map((d, i) => (\r
                    <button\r
                      key={d.nome}\r
                      type="button"\r
                      aria-label={\`Depoimento \${i + 1} de \${itens.length}\`}\r
                      aria-current={i === atual}\r
                      onClick={() => { setAtual(i); setParado(true); }}\r
                      className="ts:flex ts:size-24 ts:items-center ts:justify-center ts:rounded-full"\r
                    >\r
                      <span className={cx(\r
                        'ts:h-6 ts:rounded-full ts:transition-[width,background-color] ts:duration-(--ts-duration-base) ts:ease-out ts:motion-reduce:transition-none',\r
                        i === atual ? 'ts:w-16 ts:bg-fg-primary' : 'ts:w-6 ts:bg-fg-muted',\r
                      )} />\r
                    </button>\r
                  ))}\r
                </div>\r
              </>\r
            )}\r
          </div>\r
        </div>\r
      </Card>\r
    </section>\r
  );\r
}\r
\r
/** No pé da página: o que a própria tela garante, numa linha, e os selos oficiais que o Menux tiver. */\r
function CompraSegura({ selos, className }: { selos?: ReactNode; className?: string }) {\r
  return (\r
    <section aria-label="Compra segura" className={cx('ts:flex ts:flex-col ts:gap-8', className)}>\r
      <p className="ts:flex ts:flex-wrap ts:items-center ts:gap-x-16 ts:gap-y-4 ts:text-caption ts:text-fg-muted">\r
        <span className="ts:flex ts:items-center ts:gap-6 ts:text-label-s ts:text-fg-secondary"><ShieldCheck aria-hidden className={cx(icone, 'ts:size-icon-sm')} />Compra segura</span>\r
        <span className="ts:flex ts:items-center ts:gap-6"><Lock aria-hidden className={cx(icone, 'ts:size-icon-xs')} />Pagamento pelo Stripe</span>\r
        <span className="ts:flex ts:items-center ts:gap-6"><LockKeyhole aria-hidden className={cx(icone, 'ts:size-icon-xs')} />Conexão criptografada</span>\r
      </p>\r
      {selos && <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">{selos}</div>}\r
    </section>\r
  );\r
}\r
\r
/** O logo com a seta de voltar ao site; no toque, o link mede 44 px de altura (\`target-min\`). Depois do teste iniciado, só o logo. */\r
function MarcaComVolta({ iniciado, site, className }: { iniciado: boolean; site: string; className?: string }) {\r
  if (iniciado) return <LogoMenux className="ts:h-20 ts:w-auto ts:self-start ts:text-fg-primary" />;\r
  return (\r
    <a href={site} className={cx('ts:flex ts:min-h-target-min ts:w-fit ts:items-center ts:gap-12 ts:rounded-md ts:text-fg-secondary ts:transition-colors ts:duration-(--ts-duration-fast) ts:hover:text-fg-primary', className)}>\r
      <ArrowLeft aria-hidden className={cx(icone, 'ts:size-icon-md')} />\r
      <LogoMenux aria-hidden className="ts:h-20 ts:w-auto ts:text-fg-primary" />\r
      <span className="ts:sr-only">Voltar ao site do Menux</span>\r
    </a>\r
  );\r
}\r
\r
/** O resultado da consulta do CNPJ embaixo da razão social: ícone e texto, em legenda, como no cadastro do backoffice. */\r
function NotaDaConsulta({ icone: Icone, corDoIcone, children }: { icone: LucideIcon; corDoIcone?: string; children: ReactNode }) {\r
  return (\r
    <span role="status" className="ts:flex ts:items-start ts:gap-6 ts:text-caption">\r
      <Icone aria-hidden className={cx(icone, 'ts:mt-2 ts:size-icon-xs', corDoIcone)} />\r
      <span>{children}</span>\r
    </span>\r
  );\r
}\r
\r
/**\r
 * Metade do resumo, só para ler: o que é o Light, o preço e os depoimentos. No celular, não aparece. Na etapa Plano,\r
 * o preço sai daqui: o resumo financeiro do formulário é o texto que o aceite cobre, e cada condição aparece uma vez (T-025).\r
 */\r
function Resumo({ cobranca, links, depoimentos, iniciado, aceito, mostrarPreco }: { iniciado: boolean; aceito: boolean; mostrarPreco: boolean; cobranca: Date; links: CheckoutMenuxProps['links']; depoimentos: Depoimento[] }) {\r
  const { locale } = useTessela();\r
  const { real, dataCurta } = formatadores(locale);\r
  const recursos = (\r
    <ul className="ts:flex ts:flex-col ts:gap-12">\r
      {recursosDoLight.map(({ simbolo: Simbolo, titulo, texto }) => (\r
        <li key={titulo} className="ts:flex ts:items-start ts:gap-12">\r
          <span className="ts:flex ts:size-32 ts:shrink-0 ts:items-center ts:justify-center ts:rounded-full ts:border ts:border-border-default ts:bg-bg-surface ts:text-fg-primary">\r
            <Simbolo aria-hidden className={cx(icone, 'ts:size-icon-sm')} />\r
          </span>\r
          <div className="ts:min-w-0">\r
            <p className="ts:text-label-m ts:text-fg-primary">{titulo}</p>\r
            <p className="ts:text-caption ts:text-fg-muted">{texto}</p>\r
          </div>\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
\r
  const preco = (\r
    <>\r
      <dl className="ts:flex ts:flex-col ts:gap-8 ts:text-body-m">\r
        <div className="ts:flex ts:items-baseline ts:justify-between ts:gap-12">\r
          <dt className="ts:flex ts:items-center ts:gap-6 ts:text-label-m ts:text-fg-primary"><Crown aria-hidden className={cx(icone, 'ts:size-icon-sm')} />Plano Light</dt>\r
          <dd className="ts:tabular-nums ts:text-fg-primary">{real.format(PRECO_DO_LIGHT)}/mês</dd>\r
        </div>\r
        {/* O teste é grátis, e não desconto da mensalidade: sete dias não são um mês abatido. */}\r
        <LinhaDoTotal termo={\`Teste de \${DIAS_DE_TESTE} dias\`} valor="Grátis" />\r
        <div className="ts:mt-4 ts:flex ts:items-baseline ts:justify-between ts:gap-12 ts:border-t ts:border-border-default ts:pt-12">\r
          <dt className="ts:text-label-m ts:text-fg-primary">Total hoje</dt>\r
          <dd className="ts:text-heading-s ts:tabular-nums ts:text-fg-primary">{real.format(0)}</dd>\r
        </div>\r
      </dl>\r
      <p className="ts:mt-4 ts:text-caption ts:text-fg-muted">\r
        {aceito ? 'A primeira cobrança é em' : 'Se concluir hoje, a primeira cobrança é em'} {dataCurta.format(cobranca)}; depois, uma por mês, até cancelar.\r
      </p>\r
    </>\r
  );\r
\r
  return (\r
    <div className="ts:flex ts:justify-end ts:border-r ts:border-border-default ts:bg-bg-subtle ts:px-64 ts:py-32 ts:max-lg:hidden">\r
      <div className="ts:flex ts:w-full ts:max-w-440 ts:flex-col">\r
        <MarcaComVolta iniciado={iniciado} site={links.site} />\r
\r
        <div className="ts:mt-24 ts:flex ts:flex-col ts:items-start ts:gap-8">\r
          <Badge>{DIAS_DE_TESTE} dias grátis</Badge>\r
          <h1 className="ts:text-heading-l ts:text-fg-primary">Seu cardápio na mesa, com um assistente que atende junto.</h1>\r
          <p className="ts:text-body-s ts:text-fg-secondary">\r
            O Plano Light coloca o seu cardápio no QR Code do restaurante e o Maestro ao lado do cliente. Sete dias grátis para ver\r
            funcionando no seu salão.\r
          </p>\r
        </div>\r
\r
        <div className="ts:mt-24">{recursos}</div>\r
        {mostrarPreco && <div className="ts:mt-24 ts:border-t ts:border-border-default ts:pt-20">{preco}</div>}\r
\r
        <Depoimentos key={depoimentos.map((d) => d.texto).join()} itens={depoimentos} className="ts:mt-24" />\r
\r
        <p className="ts:mt-auto ts:flex ts:flex-wrap ts:items-center ts:gap-x-12 ts:gap-y-4 ts:pt-24 ts:text-body-s ts:text-fg-muted">\r
          <Link href={links.termos} tone="muted" external>Termos</Link>\r
          <Link href={links.privacidade} tone="muted" external>Privacidade</Link>\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}\r
\r
/** Quem chega pelo link de um plano que não é autosserviço: o WhatsApp comercial, sem pedir nenhum campo. */\r
function AvisoDePlanoDaEquipe({ plano, linkDoWhatsApp, links, testarOLight }: { plano: string; linkDoWhatsApp: CheckoutMenuxProps['linkDoWhatsApp']; links: CheckoutMenuxProps['links']; testarOLight: () => void }) {\r
  return (\r
    <main className="ts:flex ts:min-h-dvh ts:items-center ts:justify-center ts:bg-bg-base ts:px-16 ts:py-64 ts:font-sans ts:text-body-m ts:text-fg-primary">\r
      <div className="ts:flex ts:w-full ts:max-w-440 ts:flex-col ts:gap-32">\r
        <a href={links.site} className="ts:w-fit ts:rounded-md">\r
          <LogoMenux aria-hidden className="ts:h-20 ts:w-auto ts:text-fg-primary" />\r
          <span className="ts:sr-only">Voltar ao site do Menux</span>\r
        </a>\r
        <div className="ts:flex ts:flex-col ts:gap-8">\r
          <h1 className="ts:text-heading-l">Esse plano é contratado com o time comercial</h1>\r
          <p className="ts:text-body-m ts:text-fg-secondary">O plano {plano} não é de autosserviço. Fale com o nosso time comercial para contratar.</p>\r
        </div>\r
        <div>\r
          <a href={linkDoWhatsApp(\`Oi, quero contratar o plano \${plano} do Menux. Pode me ajudar?\`)} target="_blank" rel="noreferrer" className={buttonClassName()}>\r
            <IconeWhatsApp aria-hidden className={cx(icone, 'ts:size-icon-md')} />\r
            Falar com o time comercial\r
            <span className="ts:sr-only">(abre em nova aba)</span>\r
          </a>\r
        </div>\r
        <p className="ts:text-body-s ts:text-fg-secondary">\r
          Prefere começar sozinho? <Link href="#cadastro" onClick={(e) => { e.preventDefault(); testarOLight(); }}>Começar com o Plano Light</Link>\r
        </p>\r
      </div>\r
    </main>\r
  );\r
}\r
\r
/**\r
 * A tela traz o próprio ToastProvider: no celular e no tablet, os depoimentos em aviso saem embaixo. No topo, cobririam\r
 * o cabeçalho e o stepper. Os demais avisos do app seguem no ToastProvider da raiz.\r
 */\r
export function CheckoutMenux(props: CheckoutMenuxProps) {\r
  return (\r
    <ToastProvider position="bottom-right">\r
      <Cadastro {...props} />\r
    </ToastProvider>\r
  );\r
}\r
\r
function Cadastro({ planoPedido, consultarCnpj, criarConta, campoDoCartao, confirmarCartao, linkDoWhatsApp, links, depoimentos = [], selos }: CheckoutMenuxProps) {\r
  const { locale } = useTessela();\r
  const { real, dataCurta } = formatadores(locale);\r
  const planoDaEquipe = planoPedido ? planosDaEquipe[planoPedido.toLowerCase()] : undefined;\r
  const [testarOLight, setTestarOLight] = useState(false);\r
  // 0 CNPJ, 1 Conta, 2 Plano, 3 Cartão, 4 teste iniciado.\r
  const [etapa, setEtapa] = useState(0);\r
  const [dados, setDados] = useState(cadastroVazio);\r
  const [erros, setErros] = useState<Erros>({});\r
  const [tentativasComErro, setTentativasComErro] = useState(0);\r
  const [consulta, setConsulta] = useState<ConsultaDoCnpj | 'buscando' | null>(null);\r
  const [primeiraCobranca, setPrimeiraCobranca] = useState<Date | null>(null);\r
  const [erroDoEnvio, setErroDoEnvio] = useState<string | null>(null);\r
  const [enviando, setEnviando] = useState(false);\r
  const cnpjConsultado = useRef('');\r
  // A razão social que a consulta preencheu, com o CNPJ que a trouxe: com outro CNPJ, ela sai do campo; a digitada fica.\r
  const razaoDaConsulta = useRef<{ cnpj: string; valor: string } | null>(null);\r
  const dadosAtuais = useRef(dados);\r
  useEffect(() => { dadosAtuais.current = dados; });\r
  const formulario = useRef<HTMLFormElement>(null);\r
  const tituloDaEtapa = useRef<HTMLHeadingElement>(null);\r
  const primeiraVez = useRef(true);\r
\r
  const situacao = consulta && consulta !== 'buscando' ? consulta.situacao : null;\r
  const contaCriada = primeiraCobranca !== null;\r
  const iniciado = etapa === 4;\r
  // Antes do aceite, a data de quem concluir hoje; depois, a que o servidor gravou.\r
  const cobranca = primeiraCobranca ?? cobrancaSeConcluirHoje();\r
  const cumpridas = regrasDaSenha.filter((r) => r.cumpre(dados.senha)).length;\r
  const bloqueado = etapa === 0 && situacao === 'ja-tem-conta';\r
  // O depoimento acompanha a etapa: no desktop, no card do resumo; no celular, como aviso.\r
  const etapaAtual = etapa < etapas.length ? (etapas[etapa]!.id as EtapaDoCadastro) : null;\r
  const depoimentosAgora = depoimentosDaEtapa(depoimentos, etapaAtual);\r
  useDepoimentoDaEtapaEmAviso(depoimentosAgora, planoDaEquipe && !testarOLight ? null : etapaAtual);\r
\r
  // A cada troca de etapa, e ao sair do aviso de plano da equipe, o leitor de tela começa pelo título novo.\r
  useEffect(() => {\r
    if (primeiraVez.current) { primeiraVez.current = false; return; }\r
    tituloDaEtapa.current?.focus();\r
  }, [etapa, testarOLight]);\r
\r
  // A cada tentativa com erro, o foco vai para o primeiro campo inválido.\r
  useEffect(() => {\r
    if (tentativasComErro) formulario.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();\r
  }, [tentativasComErro]);\r
\r
  if (planoDaEquipe && !testarOLight) {\r
    return <AvisoDePlanoDaEquipe plano={planoDaEquipe} linkDoWhatsApp={linkDoWhatsApp} links={links} testarOLight={() => setTestarOLight(true)} />;\r
  }\r
\r
  function mudar<K extends keyof Cadastro>(campo: K, valor: Cadastro[K]) {\r
    setDados((d) => ({ ...d, [campo]: valor }));\r
    setErros((e) => {\r
      if (!e[campo]) return e;\r
      const resto = { ...e };\r
      delete resto[campo];\r
      return resto;\r
    });\r
  }\r
  const texto = (campo: 'razaoSocial' | 'nome' | 'email' | 'senha') => ({ value: dados[campo], onChange: (e: { target: { value: string } }) => mudar(campo, e.target.value), error: erros[campo] });\r
\r
  // Com os 14 dígitos válidos, consulta o CNPJ. Uma resposta que chega depois de outro CNPJ é ignorada.\r
  // A razão social fica aberta o tempo todo: a consulta sugere, nunca passa por cima do que a pessoa digitou (AC-009-B.2).\r
  function mudarCnpj(digitos: string) {\r
    mudar('cnpj', digitos);\r
    cnpjConsultado.current = digitos;\r
    if (consulta) setConsulta(null);\r
    const preenchida = razaoDaConsulta.current;\r
    if (preenchida && preenchida.cnpj !== digitos) {\r
      razaoDaConsulta.current = null;\r
      if (dadosAtuais.current.razaoSocial === preenchida.valor) mudar('razaoSocial', '');\r
    }\r
    if (digitos.length < 14) return;\r
    if (!isValidCnpj(digitos)) { setErros((e) => ({ ...e, cnpj: cnpjInvalido })); return; }\r
    setConsulta('buscando');\r
    consultarCnpj(digitos)\r
      .catch((): ConsultaDoCnpj => ({ situacao: 'nao-encontrado' }))\r
      .then((resposta) => {\r
        if (cnpjConsultado.current !== digitos) return;\r
        setConsulta(resposta);\r
        if (resposta.situacao === 'livre' && !dadosAtuais.current.razaoSocial.trim()) {\r
          razaoDaConsulta.current = { cnpj: digitos, valor: resposta.razaoSocial };\r
          mudar('razaoSocial', resposta.razaoSocial);\r
        }\r
      });\r
  }\r
\r
  function errosDaEtapa(): Erros {\r
    const e: Erros = {};\r
    if (etapa === 0) {\r
      if (!isValidCnpj(dados.cnpj)) e.cnpj = dados.cnpj ? cnpjInvalido : 'Informe o CNPJ do estabelecimento.';\r
      else if (!dados.razaoSocial.trim()) e.razaoSocial = 'Informe a razão social.';\r
    }\r
    if (etapa === 1) {\r
      if (!dados.nome.trim()) e.nome = 'Informe o nome da pessoa responsável.';\r
      if (!dados.email.trim()) e.email = 'Preencha este campo para continuar.';\r
      else if (!/^\\S+@\\S+\\.\\S+$/.test(dados.email)) e.email = 'Use um e-mail válido no formato nome@dominio.com.';\r
      if (dados.whatsapp.length < 10) e.whatsapp = 'Informe um WhatsApp com DDD válido.';\r
      if (!regrasDaSenha.every((r) => r.cumpre(dados.senha))) e.senha = regraDaSenha;\r
    }\r
    if (etapa === 2) {\r
      if (!dados.termos) e.termos = 'Leia e aceite os termos aplicáveis ao Plano Light.';\r
      if (!dados.anexo) e.anexo = 'Confirme o resumo financeiro para seguir ao Checkout seguro.';\r
    }\r
    return e;\r
  }\r
\r
  async function avancar(e: FormEvent<HTMLFormElement>) {\r
    e.preventDefault();\r
    if (bloqueado || consulta === 'buscando') return;\r
    setErroDoEnvio(null);\r
    const novos = errosDaEtapa();\r
    setErros(novos);\r
    if (Object.keys(novos).length) { setTentativasComErro((n) => n + 1); return; }\r
    if (etapa < 2) { setEtapa(etapa + 1); return; }\r
    setEnviando(true);\r
    try {\r
      if (etapa === 2) {\r
        const { cnpj, razaoSocial, nome, email, whatsapp, senha } = dados;\r
        const resposta = await criarConta({ cnpj, razaoSocial: razaoSocial.trim(), nome: nome.trim(), email: email.trim(), whatsapp, senha, aceiteEm: new Date() });\r
        if ('erro' in resposta) { setErroDoEnvio(resposta.erro); return; }\r
        setPrimeiraCobranca(resposta.primeiraCobranca);\r
        setEtapa(3);\r
        return;\r
      }\r
      const resposta = await confirmarCartao();\r
      if (resposta) { setErroDoEnvio(resposta.erro); return; }\r
      setEtapa(4);\r
    } catch {\r
      setErroDoEnvio(etapa === 2 ? erroAoCriarConta : erroNoCartao);\r
    } finally {\r
      setEnviando(false);\r
    }\r
  }\r
\r
  function voltarPara(anterior: number) {\r
    setErros({});\r
    setErroDoEnvio(null);\r
    setEtapa(anterior);\r
  }\r
\r
  const textosDasEtapas = [\r
    { titulo: 'Comece pelo CNPJ do restaurante', descricao: 'Ele identifica sua empresa, prepara a nota fiscal e o contrato e evita cadastro duplicado.' },\r
    { titulo: 'Crie o acesso da sua conta', descricao: 'Só o essencial para entrar. Endereço e segmento você preenche depois, no onboarding.' },\r
    { titulo: 'Confirme o plano e o teste grátis', descricao: 'Você contrata o plano de autosserviço do Menux. Sem fidelidade e sem taxa de setup.' },\r
    { titulo: 'Adicione o cartão para começar', descricao: 'Nada é cobrado hoje. O cartão vai direto para a Stripe; o Menux não recebe nem guarda o número.' },\r
  ];\r
  const textos = textosDasEtapas[Math.min(etapa, 3)]!;\r
  const rotuloDoEnvio = ['Continuar', 'Continuar', 'Confirmar e adicionar cartão', 'Iniciar teste grátis'][Math.min(etapa, 3)];\r
  const linkDaEquipe = (mensagem: string) => (\r
    <a href={linkDoWhatsApp(mensagem)} target="_blank" rel="noreferrer" className={buttonClassName({ variant: 'secondary', size: 'sm' })}>\r
      <IconeWhatsApp aria-hidden className={cx(icone, 'ts:size-icon-sm')} />\r
      Abrir o WhatsApp\r
      <span className="ts:sr-only">(abre em nova aba)</span>\r
    </a>\r
  );\r
\r
  return (\r
    <div className="ts:grid ts:min-h-dvh ts:grid-cols-2 ts:bg-bg-base ts:font-sans ts:text-body-m ts:text-fg-primary ts:max-lg:grid-cols-1 ts:max-lg:grid-rows-[auto_1fr]">\r
      {/* No celular e no tablet o resumo some: o cabeçalho traz a marca, a volta ao site e a oferta. */}\r
      <header className="ts:sticky ts:top-0 ts:z-(--ts-z-index-sticky) ts:col-span-full ts:flex ts:items-center ts:justify-between ts:gap-12 ts:border-b ts:border-border-default ts:bg-bg-base ts:px-16 ts:py-12 ts:lg:hidden">\r
        {/* No toque, a margem negativa deixa o alvo de 44 px dentro do respiro, sem esticar o cabeçalho. */}\r
        <MarcaComVolta iniciado={iniciado} site={links.site} className="ts:-my-[max(0px,calc((var(--ts-target-min)-var(--ts-space-20))/2))]" />\r
        <Badge>{DIAS_DE_TESTE} dias grátis</Badge>\r
      </header>\r
      <Resumo iniciado={iniciado} aceito={contaCriada} mostrarPreco={etapa !== 2} cobranca={cobranca} links={links} depoimentos={depoimentosAgora} />\r
\r
      <main id="cadastro" className="ts:flex ts:justify-start ts:px-64 ts:py-32 ts:max-lg:justify-center ts:max-lg:p-16">\r
        <div className="ts:flex ts:w-full ts:max-w-440 ts:flex-col">\r
          {/* No celular o resumo, que tem o título da página, não aparece. */}\r
          <h1 className="ts:sr-only ts:lg:hidden">Cadastro no Plano Light do Menux</h1>\r
          {iniciado ? (\r
            <div className="ts:flex ts:flex-col ts:gap-24">\r
              <span className="ts:flex ts:size-48 ts:items-center ts:justify-center ts:rounded-full ts:bg-feedback-success-bg ts:text-feedback-success-icon">\r
                <CircleCheck aria-hidden className={cx(icone, 'ts:size-icon-lg')} />\r
              </span>\r
              <div className="ts:flex ts:flex-col ts:gap-4">\r
                <h2 ref={tituloDaEtapa} tabIndex={-1} className="ts:text-heading-l ts:outline-none">Teste iniciado</h2>\r
                <p className="ts:text-body-m ts:text-fg-secondary">\r
                  A primeira cobrança é em {dataCurta.format(cobranca)}. Agora é montar o cardápio e gerar os QR Codes das mesas.\r
                </p>\r
              </div>\r
              <DescriptionList items={[\r
                { term: 'Restaurante', description: <>{dados.razaoSocial} · <span className="ts:whitespace-nowrap ts:tabular-nums">{formatMask('cnpj', dados.cnpj)}</span></> },\r
                { term: 'Conta', description: \`\${dados.nome} · \${dados.email}\` },\r
                { term: 'Plano', description: \`Light, \${real.format(PRECO_DO_LIGHT)}/mês\` },\r
                { term: 'Primeira cobrança', description: dataCurta.format(cobranca) },\r
              ]} />\r
              <div><a href={links.backoffice} className={buttonClassName()}>Ir para o Backoffice</a></div>\r
            </div>\r
          ) : (\r
            <div className="ts:flex ts:flex-1 ts:flex-col ts:gap-20">\r
              {/* Um grupo, não navegação (T-018): nenhuma etapa é clicável, e o Voltar do formulário é o caminho de volta. */}\r
              <Stepper steps={etapas} current={etapa} mobileLayout="row" />\r
\r
              <form ref={formulario} onSubmit={avancar} noValidate className="ts:flex ts:flex-col ts:gap-24">\r
                <section className="ts:flex ts:flex-col ts:gap-16">\r
                  <div>\r
                    <h2 ref={tituloDaEtapa} tabIndex={-1} className="ts:text-heading-s ts:outline-none">{textos.titulo}</h2>\r
                    <p className="ts:mt-2 ts:text-body-s ts:text-fg-secondary">{textos.descricao}</p>\r
                  </div>\r
\r
                  {etapa === 0 && (\r
                    <>\r
                      <MaskedInput\r
                        label="CNPJ"\r
                        mask="cnpj"\r
                        value={dados.cnpj}\r
                        onValueChange={mudarCnpj}\r
                        error={erros.cnpj}\r
                        trailing={consulta === 'buscando' ? <Spinner size="sm" label="Consultando os dados públicos da empresa…" /> : undefined}\r
                      />\r
                      <Input\r
                        label="Razão social"\r
                        autoComplete="organization"\r
                        placeholder="Razão social da empresa"\r
                        description={\r
                          situacao === 'livre' ? <NotaDaConsulta icone={CircleCheck} corDoIcone="ts:text-fg-primary">Preenchemos com os dados públicos da empresa.</NotaDaConsulta>\r
                            : situacao === 'nao-encontrado' ? <NotaDaConsulta icone={Info}>Não foi possível consultar agora. Preencha os dados abaixo e o cadastro segue normalmente.</NotaDaConsulta>\r
                              : undefined\r
                        }\r
                        {...texto('razaoSocial')}\r
                      />\r
                      {situacao === 'ja-tem-conta' && (\r
                        <Alert tone="info" title="Este CNPJ já tem conta no Menux" actions={<a href={links.entrar} className={buttonClassName({ variant: 'secondary', size: 'sm' })}>Ir para o acesso</a>}>\r
                          Este CNPJ já tem conta ativa no Menux. Faça login para acessar.\r
                        </Alert>\r
                      )}\r
                      {situacao === 'em-atendimento' && (\r
                        <Alert tone="info" title="Vamos vincular seu cadastro ao nosso atendimento." actions={linkDaEquipe('Oi, comecei o cadastro do Plano Light no Menux e preciso de ajuda para concluir.')}>\r
                          Fale com a gente pelo WhatsApp.\r
                        </Alert>\r
                      )}\r
                    </>\r
                  )}\r
\r
                  {etapa === 1 && (\r
                    <div className="ts:flex ts:flex-col ts:gap-16">\r
                      <Input label="Nome" autoComplete="name" placeholder="Digite o seu nome completo" {...texto('nome')} />\r
                      <MaskedInput label="WhatsApp" mask="telefone" placeholder="(85) 99999-0000" leadingIcon={IconeWhatsApp} value={dados.whatsapp} onValueChange={(v) => mudar('whatsapp', v)} error={erros.whatsapp} />\r
                      {/* O e-mail é o login do Backoffice: fica junto da senha, como \`username\`, para o gerenciador de senhas não tomar o WhatsApp por login. */}\r
                      <Input label="E-mail" type="email" autoComplete="username" placeholder="seu@email.com" {...texto('email')} />\r
                      <div className="ts:flex ts:flex-col ts:gap-12">\r
                        <Input label="Senha" type="password" autoComplete="new-password" placeholder="Crie uma senha segura" description={regraDaSenha} {...texto('senha')} />\r
                        {dados.senha && <Meter label="Força da senha" value={cumpridas} max={regrasDaSenha.length} valueLabel={forcaDaSenha[cumpridas]} warningAt={2} dangerAt={2} size="sm" />}\r
                      </div>\r
                    </div>\r
                  )}\r
\r
                  {etapa === 2 && (\r
                    <>\r
                      <Card\r
                        headingLevel={3}\r
                        title={<span className="ts:flex ts:items-center ts:gap-8"><Crown aria-hidden className={cx(icone, 'ts:size-icon-md')} />Plano Light</span>}\r
                        description="Resumo financeiro: tudo o que você vai pagar, antes de pagar."\r
                      >\r
                        <DescriptionList items={[\r
                          { term: 'Mensalidade', description: \`\${real.format(PRECO_DO_LIGHT)}/mês por restaurante\` },\r
                          { term: 'Teste grátis', description: \`\${DIAS_DE_TESTE} dias grátis para você testar\` },\r
                          { term: 'Primeira cobrança', description: \`\${DIAS_DE_TESTE} dias contados do aceite (se concluir hoje, em \${dataCurta.format(cobranca)})\` },\r
                          { term: 'Renovação e cancelamento', description: 'Renova todo mês. Cancele quando quiser, direto no painel — vale até o fim do mês já pago.' },\r
                        ]} />\r
                      </Card>\r
                      <div className="ts:flex ts:flex-col ts:gap-12">\r
                        <Checkbox\r
                          checked={dados.termos}\r
                          onCheckedChange={(v) => mudar('termos', v)}\r
                          error={erros.termos}\r
                          label={<>Li e aceito os <Link href={links.termos} external>{TERMOS_DE_USO}</Link>.</>}\r
                        />\r
                        <Checkbox\r
                          checked={dados.anexo}\r
                          onCheckedChange={(v) => mudar('anexo', v)}\r
                          error={erros.anexo}\r
                          label={<>Li e aceito o resumo financeiro acima e o <Link href={links.anexo} external>{ANEXO_DO_LIGHT}</Link>.</>}\r
                        />\r
                      </div>\r
                    </>\r
                  )}\r
\r
                  {etapa === 3 && (\r
                    <>\r
                      {campoDoCartao}\r
                      {/* A data da primeira cobrança fica junto do cartão, nunca só no rodapé (RN-009-B). */}\r
                      <Alert icon={CalendarClock} title={\`Primeira cobrança em \${dataCurta.format(cobranca)}\`}>\r
                        {real.format(PRECO_DO_LIGHT)}. Antes dela, avisamos você com o valor, a data e como cancelar.\r
                      </Alert>\r
                    </>\r
                  )}\r
                </section>\r
\r
                {erroDoEnvio && <Alert tone="error" title={erroDoEnvio} />}\r
\r
                <div className="ts:flex ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
                  {!contaCriada && <Button type="button" variant="ghost" disabled={etapa === 0} onClick={() => voltarPara(etapa - 1)}>Voltar</Button>}\r
                  <Button type="submit" className="ts:ml-auto" trailingIcon={etapa === 2 ? ArrowRight : undefined} loading={enviando || consulta === 'buscando'} disabled={bloqueado}>{rotuloDoEnvio}</Button>\r
                </div>\r
                {etapa === 3 && (\r
                  <p className="ts:text-body-s ts:text-fg-muted">\r
                    Ao iniciar, você autoriza a cobrança de {real.format(PRECO_DO_LIGHT)} por mês a partir de {dataCurta.format(cobranca)}, até cancelar.\r
                  </p>\r
                )}\r
              </form>\r
\r
              {etapa === 0 && (\r
                <p className="ts:text-center ts:text-body-s ts:text-fg-secondary">\r
                  Já tem conta? <Link href={links.entrar}>Fazer login</Link>\r
                </p>\r
              )}\r
\r
              <CompraSegura selos={selos} className="ts:mt-auto ts:border-t ts:border-border-subtle ts:pt-16" />\r
            </div>\r
          )}\r
        </div>\r
      </main>\r
    </div>\r
  );\r
}\r
`},I=h(),L={computador:`100%`,tablet:`768px`,celular:`390px`};function R({pecas:e}){let t=e.split(`,`).map(e=>e.trim().replace(/\s*\(.*\)$/,``));return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-6`,children:[(0,I.jsx)(`span`,{className:`ts:mr-4 ts:text-body-s ts:text-fg-muted`,children:`Peças usadas`}),t.map(e=>{let t=b.find(t=>t.nome===e||t.nome.startsWith(`${e} `)),n=`ts:rounded-full ts:border ts:border-border-default ts:px-8 ts:py-2 ts:text-caption ts:text-fg-secondary`;return t?(0,I.jsx)(`a`,{href:t.caminho,className:i(n,`ts:transition-colors ts:hover:bg-bg-hover ts:hover:text-fg-primary`),children:e},e):(0,I.jsx)(`span`,{className:n,children:e},e)})]})}var z=`https://tessela-registro.vercel.app`;function B({slug:e,marca:t,pacote:n}){let r=`${z}/r/${t}/${e}.json`;return(0,I.jsxs)(`div`,{className:`ts:mt-12 ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(k,{realce:!1,comandos:{pnpm:`pnpm dlx shadcn@latest add ${r}`,npm:`npx shadcn@latest add ${r}`,yarn:`yarn dlx shadcn@latest add ${r}`,bun:`bunx --bun shadcn@latest add ${r}`}}),(0,I.jsxs)(`p`,{className:`ts:text-body-s ts:text-fg-secondary`,children:[`Copia a tela para `,(0,I.jsx)(w,{children:`src/tessela/${e}`}),` e instala o `,(0,I.jsx)(w,{children:n}),`. A tela passa a ser do projeto: edite à vontade.`]})]})}function V(){let e=x().split(`/`)[2],t=e?T.find(t=>t.slug===e):T[0];return t?(0,I.jsx)(U,{atual:t}):(0,I.jsx)(H,{})}function H(){return(0,P.useEffect)(()=>{E(`/modelos`,{substituir:!0})},[]),null}function U({atual:e}){let t=O[e.id],[d,h]=(0,P.useState)(`visualizar`),[b,x]=(0,P.useState)(`computador`),[w,k]=(0,P.useState)(0),A=`/modelos/${e.slug}/tela-cheia`,{ambiente:M}=n(),z=`marca`in e?e.marca:M.brand,V=l[z]?.name??`@tessela/web`,H=(F[e.funcao]??``).replaceAll(`from '@tessela/web'`,`from '${V}'`);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{rotulo:`Modelos · ${T.length} telas`,titulo:`Telas prontas do admin`,descricao:`Montadas só com peças do Tessela. Navegue entre elas, veja em outras larguras e copie o código como ponto de partida.`,acoes:[{rotulo:`Abrir em tela cheia`,caminho:A},{rotulo:`Ver componentes`,caminho:`/docs/componentes`}]}),(0,I.jsxs)(`section`,{id:`visualizador`,className:`ts:mx-auto ts:max-w-[var(--ts-site-layout-max-width)] ts:scroll-mt-72 ts:px-24 ts:pb-64 ts:pt-32 ts:max-md:px-16`,children:[(0,I.jsx)(g,{value:e.slug,onValueChange:e=>E(`/modelos/${e}`,{manterRolagem:!0}),children:(0,I.jsx)(_,{"aria-label":`Modelos`,children:T.map(e=>(0,I.jsx)(v,{value:e.slug,children:e.nome},e.slug))})}),(0,I.jsxs)(`div`,{className:`ts:mt-16 ts:flex ts:flex-wrap ts:items-center ts:gap-12`,children:[(0,I.jsxs)(S,{"aria-label":`Mostrar`,size:`sm`,value:[d],onValueChange:e=>e[0]&&h(e[0]),children:[(0,I.jsx)(y,{value:`visualizar`,children:`Visualizar`}),(0,I.jsx)(y,{value:`codigo`,children:`Código`})]}),(0,I.jsx)(`p`,{className:`ts:min-w-0 ts:flex-1 ts:text-body-s ts:text-fg-secondary ts:max-md:basis-full ts:max-md:order-last`,children:t.descricao}),(0,I.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-4 ts:max-md:ml-auto`,children:[d===`visualizar`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(S,{"aria-label":`Largura`,size:`sm`,value:[b],onValueChange:e=>e[0]&&x(e[0]),children:[(0,I.jsx)(y,{value:`computador`,icon:f,"aria-label":`Computador`}),(0,I.jsx)(y,{value:`tablet`,icon:N,"aria-label":`Tablet (768 px)`}),(0,I.jsx)(y,{value:`celular`,icon:m,"aria-label":`Celular (390 px)`})]}),(0,I.jsx)(c,{icon:p,label:`Recarregar o modelo`,size:`sm`,onClick:()=>k(e=>e+1)})]}),d===`codigo`&&H&&(0,I.jsx)(s,{texto:H}),(0,I.jsx)(r,{content:`Abrir em tela cheia`,children:(0,I.jsx)(`a`,{href:A,target:`_blank`,rel:`noreferrer`,"aria-label":`Abrir em tela cheia, em nova aba`,className:o({variant:`ghost`,size:`sm`}),children:(0,I.jsx)(j,{"aria-hidden":!0,className:i(u,`ts:size-icon-sm`)})})})]})]}),(0,I.jsx)(B,{slug:e.slug,marca:z,pacote:V}),(0,I.jsx)(`div`,{className:`ts:mt-12 ts:overflow-hidden ts:rounded-xl ts:border ts:border-border-default ts:bg-bg-subtle`,children:d===`visualizar`?(0,I.jsx)(`div`,{className:`ts:flex ts:justify-center`,children:(0,I.jsx)(`iframe`,{src:C(A),title:`Modelo ${e.nome}`,className:`ts:h-[var(--ts-site-preview-frame-height)] ts:max-w-full ts:border-0 ts:bg-bg-base ts:transition-[width] ts:duration-(--ts-duration-slow) ts:ease-out ts:motion-reduce:transition-none`,style:{width:L[b]}},`${e.slug}-${w}`)}):(0,I.jsx)(a,{codigo:H,className:`ts:h-[var(--ts-site-preview-frame-height)] ts:overflow-auto ts:bg-bg-base ts:px-16 ts:py-14`})}),(0,I.jsx)(`div`,{className:`ts:mt-16`,children:(0,I.jsx)(R,{pecas:t.pecas})})]})]})}export{V as ModelosGaleria};