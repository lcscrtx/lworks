import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,p as i,sr as a}from"./Codigo-Dgz1In5l.js";import{t as o}from"./download-Bz44KTCP.js";import{t as s}from"./ellipsis-CzhPUSUO.js";import{t as c}from"./Input-BBFu0gZj.js";import{t as l}from"./pencil-DEQjmgeG.js";import{t as u}from"./plus-BCNg58Vj.js";import{t as d}from"./share-2-qmupMPiV.js";import{t as f}from"./trash-BZfsE4TV.js";import{s as p}from"./tiptap-jvs8iIPE.js";import{t as m}from"./Select-DFPozajq.js";import{i as h,n as g,r as _,t as v}from"./Tabs-C69_giCo.js";import{a as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./Estrutura-Bg5zrcqs.js";import{t as E}from"./Badge-g4zT1uda.js";import{Ft as D,Ht as O,Lt as k,Nt as A,Vt as j,_ as M,b as N,f as P,g as F,h as I,mn as L,p as R,y as z}from"./index-3SU4ioj-.js";var B=e(t(),1),V=p();function H({itens:e}){return(0,V.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,V.jsx)(`li`,{children:e},t))})}function U({children:e}){return(0,V.jsx)(`p`,{className:`ts:mb-12 ts:text-label-s ts:text-fg-muted`,children:e})}var W={onClick:e=>e.preventDefault()};function G({rotulo:e=`Trilha do pedido`}){return(0,V.jsxs)(x,{"aria-label":e,children:[(0,V.jsx)(C,{href:`#`,...W,children:`Loja Centro`}),(0,V.jsx)(C,{href:`#`,...W,children:`Pedidos`}),(0,V.jsx)(b,{children:`Pedido #1042`})]})}function K(){return(0,V.jsxs)(A,{children:[(0,V.jsx)(O,{children:(0,V.jsx)(i,{icon:s,label:`Ações do card`,size:`sm`})}),(0,V.jsxs)(D,{align:`end`,children:[(0,V.jsx)(k,{icon:o,children:`Exportar CSV`}),(0,V.jsx)(k,{icon:d,children:`Compartilhar`}),(0,V.jsx)(j,{}),(0,V.jsx)(k,{icon:f,destructive:!0,children:`Remover do painel`})]})]})}var q=[[`Café torrado 500 g`,`2 × R$ 42,00`],[`Filtro de papel 103`,`1 × R$ 12,90`],[`Caneca esmaltada`,`1 × R$ 88,00`]];function J(){return(0,V.jsx)(`ul`,{className:`ts:flex ts:flex-col ts:text-body-m`,children:q.map(([e,t])=>(0,V.jsxs)(`li`,{className:`ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0`,children:[(0,V.jsx)(`span`,{className:`ts:truncate`,children:e}),(0,V.jsx)(`span`,{className:`ts:shrink-0 ts:tabular-nums ts:text-fg-secondary`,children:t})]},e))})}function Y({rotuloDaTrilha:e=`Trilha do detalhe do pedido`}){return(0,V.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-32 ts:max-md:p-20`,children:(0,V.jsxs)(h,{children:[(0,V.jsx)(w,{breadcrumb:(0,V.jsx)(G,{rotulo:e}),title:`Pedido #1042`,status:(0,V.jsx)(E,{tone:`success`,dot:!0,children:`Pago`}),description:`Ana Souza · 25/09, 14:32 · R$ 184,90`,actions:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(a,{variant:`secondary`,leadingIcon:l,children:`Editar`}),(0,V.jsx)(a,{children:`Marcar como enviado`})]}),children:(0,V.jsxs)(g,{"aria-label":`Seções do pedido`,children:[(0,V.jsx)(v,{value:`resumo`,children:`Resumo`}),(0,V.jsx)(v,{value:`itens`,count:3,children:`Itens`}),(0,V.jsx)(v,{value:`historico`,children:`Histórico`})]})}),(0,V.jsx)(_,{value:`resumo`,children:(0,V.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,V.jsx)(y,{title:`Itens`,description:`3 produtos`,actions:(0,V.jsx)(K,{}),footer:(0,V.jsx)(a,{size:`sm`,variant:`ghost`,children:`Ver todos os itens`}),flush:!0,children:(0,V.jsx)(J,{})}),(0,V.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,V.jsxs)(y,{title:`Cliente`,children:[(0,V.jsx)(`p`,{children:`Ana Souza`}),(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`ana@exemplo.com.br · (51) 99999-0000`})]}),(0,V.jsxs)(y,{title:`Entrega`,actions:(0,V.jsx)(a,{size:`sm`,variant:`secondary`,children:`Alterar`}),children:[(0,V.jsx)(`p`,{children:`Rua das Flores, 120`}),(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`Porto Alegre, RS · 90000-000`})]})]})]})}),(0,V.jsx)(_,{value:`itens`,children:(0,V.jsx)(y,{title:`Itens`,flush:!0,children:(0,V.jsx)(J,{})})}),(0,V.jsx)(_,{value:`historico`,children:(0,V.jsx)(y,{children:`Criado por Ana Souza às 14:32 · pago às 14:33.`})})]})})}function X(){let[e,t]=(0,B.useState)(`hoje`);return(0,V.jsx)(h,{variant:`segmented`,size:`sm`,value:e,onValueChange:t,children:(0,V.jsx)(y,{title:`Vendas`,description:`Pagas, sem cancelamentos`,actions:(0,V.jsxs)(g,{"aria-label":`Período`,activateOnFocus:!0,children:[(0,V.jsx)(v,{value:`hoje`,children:`Hoje`}),(0,V.jsx)(v,{value:`semana`,children:`7 dias`}),(0,V.jsx)(v,{value:`mes`,children:`30 dias`})]}),children:(0,V.jsx)(`p`,{className:`ts:text-heading-xl ts:tabular-nums`,children:{hoje:`R$ 4.820,00`,semana:`R$ 31.450,00`,mes:`R$ 128.900,00`}[e]})})})}function Z(){return(0,V.jsxs)(`article`,{children:[(0,V.jsx)(P,{etapa:`Componente 18 · aprovado`,titulo:`Card`,descricao:(0,V.jsxs)(V.Fragment,{children:[`Superfície que agrupa um assunto: um resumo, uma lista curta, um gráfico. Título, descrição, ações e rodapé são opcionais. Com `,(0,V.jsx)(R,{children:`flush`}),`, o corpo vai de borda a borda para uma lista ou tabela.`]})}),(0,V.jsx)(F,{codigo:`import { Button, Card, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, Tab, TabList, Tabs } from '@tessela/web';
import { Download, Ellipsis, Share2, Trash2 } from 'lucide-react';
import { type ReactNode, useState } from 'react';

function Rotulo({ children }: { children: ReactNode }) {\r
  return <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">{children}</p>;\r
}

function AcoesDoCard() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label="Ações do card" size="sm" /></MenuTrigger>\r
      <MenuContent align="end">\r
        <MenuItem icon={Download}>Exportar CSV</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Remover do painel</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

const itensDoPedido = [['Café torrado 500 g', '2 × R$ 42,00'], ['Filtro de papel 103', '1 × R$ 12,90'], ['Caneca esmaltada', '1 × R$ 88,00']];

function ListaDeItens() {\r
  return (\r
    <ul className="ts:flex ts:flex-col ts:text-body-m">\r
      {itensDoPedido.map(([nome, valor]) => (\r
        <li key={nome} className="ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
          <span className="ts:truncate">{nome}</span>\r
          <span className="ts:shrink-0 ts:tabular-nums ts:text-fg-secondary">{valor}</span>\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
}

function CardDeVendas() {\r
  const [periodo, setPeriodo] = useState('hoje');\r
  const valores: Record<string, string> = { hoje: 'R$ 4.820,00', semana: 'R$ 31.450,00', mes: 'R$ 128.900,00' };\r
  return (\r
    <Tabs variant="segmented" size="sm" value={periodo} onValueChange={setPeriodo}>\r
      <Card\r
        title="Vendas"\r
        description="Pagas, sem cancelamentos"\r
        actions={(\r
          <TabList aria-label="Período" activateOnFocus>\r
            <Tab value="hoje">Hoje</Tab>\r
            <Tab value="semana">7 dias</Tab>\r
            <Tab value="mes">30 dias</Tab>\r
          </TabList>\r
        )}\r
      >\r
        <p className="ts:text-heading-xl ts:tabular-nums">{valores[periodo]}</p>\r
      </Card>\r
    </Tabs>\r
  );\r
}

<div className="ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1">\r
  <div><Rotulo>Só conteúdo</Rotulo><Card><p className="ts:text-fg-secondary">Nenhum pedido aguardando separação.</p></Card></div>\r
  <div><Rotulo>Título e descrição</Rotulo><Card title="Cliente" description="Desde março de 2024"><p>Ana Souza</p><p className="ts:text-fg-secondary">ana@exemplo.com.br</p></Card></div>\r
  <div><Rotulo>Com ações (Menu)</Rotulo><Card title="Estoque baixo" actions={<AcoesDoCard />}><p className="ts:text-fg-secondary">3 produtos abaixo do mínimo.</p></Card></div>\r
  <div><Rotulo>Com Tabs segmentadas nas ações</Rotulo><CardDeVendas /></div>\r
  <div><Rotulo>Com rodapé</Rotulo><Card title="Entrega" footer={<><Button size="sm" variant="ghost">Cancelar entrega</Button><Button size="sm">Chamar entregador</Button></>}><p>Rua das Flores, 120 · Porto Alegre</p></Card></div>\r
  <div><Rotulo>flush, com lista e rodapé</Rotulo><Card title="Itens" description="3 produtos" flush footer={<Button size="sm" variant="ghost">Ver todos</Button>}><ListaDeItens /></Card></div>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Margem interna de 20 px (16 na densidade compacta). O título é o nível 2 do documento, abaixo do h1 da página.`,children:(0,V.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Só conteúdo`}),(0,V.jsx)(y,{children:(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`Nenhum pedido aguardando separação.`})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Título e descrição`}),(0,V.jsxs)(y,{title:`Cliente`,description:`Desde março de 2024`,children:[(0,V.jsx)(`p`,{children:`Ana Souza`}),(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`ana@exemplo.com.br`})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Com ações (Menu)`}),(0,V.jsx)(y,{title:`Estoque baixo`,actions:(0,V.jsx)(K,{}),children:(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`3 produtos abaixo do mínimo.`})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Com Tabs segmentadas nas ações`}),(0,V.jsx)(X,{})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Com rodapé`}),(0,V.jsx)(y,{title:`Entrega`,footer:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(a,{size:`sm`,variant:`ghost`,children:`Cancelar entrega`}),(0,V.jsx)(a,{size:`sm`,children:`Chamar entregador`})]}),children:(0,V.jsx)(`p`,{children:`Rua das Flores, 120 · Porto Alegre`})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`flush, com lista e rodapé`}),(0,V.jsx)(y,{title:`Itens`,description:`3 produtos`,flush:!0,footer:(0,V.jsx)(a,{size:`sm`,variant:`ghost`,children:`Ver todos`}),children:(0,V.jsx)(J,{})})]})]})}),(0,V.jsx)(F,{id:`temas`,titulo:`Temas e densidades`,children:(0,V.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,V.jsx)(I,{theme:e,titulo:N[e],children:(0,V.jsx)(y,{title:`Itens`,description:`3 produtos`,actions:(0,V.jsx)(K,{}),flush:!0,footer:(0,V.jsx)(a,{size:`sm`,variant:`ghost`,children:`Ver todos`}),children:(0,V.jsx)(J,{})})},e)),n.map(e=>(0,V.jsx)(I,{density:e,titulo:z[e],children:(0,V.jsxs)(y,{title:`Entrega`,actions:(0,V.jsx)(a,{size:`sm`,variant:`secondary`,children:`Alterar`}),children:[(0,V.jsx)(`p`,{children:`Rua das Flores, 120`}),(0,V.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`Porto Alegre, RS`})]})},e))]})}),(0,V.jsx)(F,{codigo:`import { Badge, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Card, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, PageHeader, Tab, TabList, TabPanel, Tabs } from '@tessela/web';
import { Download, Ellipsis, Pencil, Share2, Trash2 } from 'lucide-react';

const semNavegar = { onClick: (e: React.MouseEvent) => e.preventDefault() };

function TrilhaDoPedido({ rotulo = 'Trilha do pedido' }: { rotulo?: string }) {\r
  return (\r
    <Breadcrumb aria-label={rotulo}>\r
      <BreadcrumbLink href="#" {...semNavegar}>Loja Centro</BreadcrumbLink>\r
      <BreadcrumbLink href="#" {...semNavegar}>Pedidos</BreadcrumbLink>\r
      <BreadcrumbPage>Pedido #1042</BreadcrumbPage>\r
    </Breadcrumb>\r
  );\r
}

function AcoesDoCard() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label="Ações do card" size="sm" /></MenuTrigger>\r
      <MenuContent align="end">\r
        <MenuItem icon={Download}>Exportar CSV</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Remover do painel</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

const itensDoPedido = [['Café torrado 500 g', '2 × R$ 42,00'], ['Filtro de papel 103', '1 × R$ 12,90'], ['Caneca esmaltada', '1 × R$ 88,00']];

function ListaDeItens() {\r
  return (\r
    <ul className="ts:flex ts:flex-col ts:text-body-m">\r
      {itensDoPedido.map(([nome, valor]) => (\r
        <li key={nome} className="ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
          <span className="ts:truncate">{nome}</span>\r
          <span className="ts:shrink-0 ts:tabular-nums ts:text-fg-secondary">{valor}</span>\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
}

function PaginaDoPedido({ rotuloDaTrilha = 'Trilha do detalhe do pedido' }: { rotuloDaTrilha?: string }) {\r
  return (\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-32 ts:max-md:p-20">\r
      <Tabs>\r
        <PageHeader\r
          breadcrumb={<TrilhaDoPedido rotulo={rotuloDaTrilha} />}\r
          title="Pedido #1042"\r
          status={<Badge tone="success" dot>Pago</Badge>}\r
          description="Ana Souza · 25/09, 14:32 · R$ 184,90"\r
          actions={(\r
            <>\r
              <Button variant="secondary" leadingIcon={Pencil}>Editar</Button>\r
              <Button>Marcar como enviado</Button>\r
            </>\r
          )}\r
        >\r
          <TabList aria-label="Seções do pedido">\r
            <Tab value="resumo">Resumo</Tab>\r
            <Tab value="itens" count={3}>Itens</Tab>\r
            <Tab value="historico">Histórico</Tab>\r
          </TabList>\r
        </PageHeader>\r
        <TabPanel value="resumo">\r
          <div className="ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] ts:gap-16 ts:max-lg:grid-cols-1">\r
            <Card title="Itens" description="3 produtos" actions={<AcoesDoCard />} footer={<Button size="sm" variant="ghost">Ver todos os itens</Button>} flush>\r
              <ListaDeItens />\r
            </Card>\r
            <div className="ts:flex ts:flex-col ts:gap-16">\r
              <Card title="Cliente">\r
                <p>Ana Souza</p>\r
                <p className="ts:text-fg-secondary">ana@exemplo.com.br · (51) 99999-0000</p>\r
              </Card>\r
              <Card title="Entrega" actions={<Button size="sm" variant="secondary">Alterar</Button>}>\r
                <p>Rua das Flores, 120</p>\r
                <p className="ts:text-fg-secondary">Porto Alegre, RS · 90000-000</p>\r
              </Card>\r
            </div>\r
          </div>\r
        </TabPanel>\r
        <TabPanel value="itens"><Card title="Itens" flush><ListaDeItens /></Card></TabPanel>\r
        <TabPanel value="historico"><Card>Criado por Ana Souza às 14:32 · pago às 14:33.</Card></TabPanel>\r
      </Tabs>\r
    </div>\r
  );\r
}

<PaginaDoPedido />`,id:`em-uso`,titulo:`Em uso`,descricao:`Detalhe de um pedido: Cards dentro da aba Resumo.`,children:(0,V.jsx)(Y,{})}),(0,V.jsx)(F,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,V.jsx)(M,{itens:[{nome:`title / description`,tipo:`ReactNode`,descricao:`Cabeçalho do card. Sem título nem ações, o card não tem cabeçalho.`},{nome:`actions`,tipo:`ReactNode`,descricao:`À direita do título: botões sm, IconButton com Menu ou Tabs segmentadas sm.`},{nome:`footer`,tipo:`ReactNode`,descricao:`Faixa de baixo, separada por uma linha; conteúdo à direita.`},{nome:`headingLevel`,tipo:`2 | 3 | 4`,padrao:`2`,descricao:`Nível do título no documento. Use 3 para card dentro de uma seção com título.`},{nome:`flush`,tipo:`boolean`,padrao:`false`,descricao:`Corpo sem margem interna, para lista ou tabela de borda a borda.`}]})}),(0,V.jsx)(F,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,V.jsx)(H,{itens:[(0,V.jsx)(V.Fragment,{children:`O título é um heading de verdade (h2 por padrão): quem usa leitor de tela navega pelos cards pelos títulos.`}),(0,V.jsx)(V.Fragment,{children:`O card não é uma região nem um link. Para um card que leva a outra página, ponha um link no título.`}),(0,V.jsx)(V.Fragment,{children:`Ações no cabeçalho vêm depois do título na ordem do Tab.`})]})})]})}var Q=[{value:`todos`,label:`Todos os status`},{value:`pago`,label:`Pago`},{value:`pendente`,label:`Pendente`}];function ee(){return(0,V.jsxs)(`article`,{children:[(0,V.jsx)(P,{etapa:`Componente 19 · aprovado`,titulo:`PageHeader`,descricao:(0,V.jsx)(V.Fragment,{children:`O topo de cada página do admin: trilha, título (o h1), status, descrição e ações. Abaixo dele entram as abas da página ou uma barra de filtros.`})}),(0,V.jsx)(F,{codigo:`import { Badge, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Input, PageHeader, Select, Tab, TabList, Tabs } from '@tessela/web';
import { Download, Plus, Search } from 'lucide-react';
import { type ReactNode } from 'react';

function Rotulo({ children }: { children: ReactNode }) {\r
  return <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">{children}</p>;\r
}

const semNavegar = { onClick: (e: React.MouseEvent) => e.preventDefault() };

function TrilhaDoPedido({ rotulo = 'Trilha do pedido' }: { rotulo?: string }) {\r
  return (\r
    <Breadcrumb aria-label={rotulo}>\r
      <BreadcrumbLink href="#" {...semNavegar}>Loja Centro</BreadcrumbLink>\r
      <BreadcrumbLink href="#" {...semNavegar}>Pedidos</BreadcrumbLink>\r
      <BreadcrumbPage>Pedido #1042</BreadcrumbPage>\r
    </Breadcrumb>\r
  );\r
}

const status = [{ value: 'todos', label: 'Todos os status' }, { value: 'pago', label: 'Pago' }, { value: 'pendente', label: 'Pendente' }];

<div className="ts:flex ts:flex-col ts:gap-24">\r
  <div><Rotulo>Só título</Rotulo><div className="ts:rounded-lg ts:border ts:border-border-default ts:p-24"><PageHeader title="Configurações" /></div></div>\r
  <div>\r
    <Rotulo>Lista: descrição e ação principal</Rotulo>\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:p-24">\r
      <PageHeader title="Pedidos" description="Todos os pedidos da Loja Centro, do mais novo para o mais antigo." actions={<><Button variant="secondary" leadingIcon={Download}>Exportar</Button><Button leadingIcon={Plus}>Novo pedido</Button></>} />\r
    </div>\r
  </div>\r
  <div>\r
    <Rotulo>Lista com filtros</Rotulo>\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:p-24">\r
      <PageHeader title="Pedidos" actions={<Button leadingIcon={Plus}>Novo pedido</Button>}>\r
        <div className="ts:grid ts:grid-cols-[minmax(0,1fr)_220px] ts:gap-8 ts:max-md:grid-cols-1">\r
          <Input aria-label="Buscar pedidos" leadingIcon={Search} placeholder="Buscar por número ou cliente" />\r
          <Select aria-label="Status" options={status} defaultValue="todos" />\r
        </div>\r
      </PageHeader>\r
    </div>\r
  </div>\r
  <div>\r
    <Rotulo>Detalhe: trilha, status e abas</Rotulo>\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:p-24">\r
      <Tabs>\r
      <PageHeader breadcrumb={<TrilhaDoPedido rotulo="Trilha da variação de PageHeader" />} title="Pedido #1042" status={<Badge tone="success" dot>Pago</Badge>} description="Ana Souza · R$ 184,90" actions={<Button>Marcar como enviado</Button>}>\r
          <TabList aria-label="Seções do pedido">\r
            <Tab value="resumo">Resumo</Tab>\r
            <Tab value="itens" count={3}>Itens</Tab>\r
            <Tab value="historico">Histórico</Tab>\r
          </TabList>\r
        </PageHeader>\r
      </Tabs>\r
    </div>\r
  </div>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Título em 24 px. As ações ficam à direita, alinhadas ao topo do título; em tela estreita, descem para baixo dele.`,children:(0,V.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Só título`}),(0,V.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:p-24`,children:(0,V.jsx)(w,{title:`Configurações`})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Lista: descrição e ação principal`}),(0,V.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:p-24`,children:(0,V.jsx)(w,{title:`Pedidos`,description:`Todos os pedidos da Loja Centro, do mais novo para o mais antigo.`,actions:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(a,{variant:`secondary`,leadingIcon:o,children:`Exportar`}),(0,V.jsx)(a,{leadingIcon:u,children:`Novo pedido`})]})})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Lista com filtros`}),(0,V.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:p-24`,children:(0,V.jsx)(w,{title:`Pedidos`,actions:(0,V.jsx)(a,{leadingIcon:u,children:`Novo pedido`}),children:(0,V.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1fr)_220px] ts:gap-8 ts:max-md:grid-cols-1`,children:[(0,V.jsx)(c,{"aria-label":`Buscar pedidos`,leadingIcon:L,placeholder:`Buscar por número ou cliente`}),(0,V.jsx)(m,{"aria-label":`Status`,options:Q,defaultValue:`todos`})]})})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Detalhe: trilha, status e abas`}),(0,V.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:p-24`,children:(0,V.jsx)(h,{children:(0,V.jsx)(w,{breadcrumb:(0,V.jsx)(G,{rotulo:`Trilha da variação de PageHeader`}),title:`Pedido #1042`,status:(0,V.jsx)(E,{tone:`success`,dot:!0,children:`Pago`}),description:`Ana Souza · R$ 184,90`,actions:(0,V.jsx)(a,{children:`Marcar como enviado`}),children:(0,V.jsxs)(g,{"aria-label":`Seções do pedido`,children:[(0,V.jsx)(v,{value:`resumo`,children:`Resumo`}),(0,V.jsx)(v,{value:`itens`,count:3,children:`Itens`}),(0,V.jsx)(v,{value:`historico`,children:`Histórico`})]})})})})]})]})}),(0,V.jsx)(F,{id:`temas`,titulo:`Temas e densidades`,children:(0,V.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,V.jsx)(I,{theme:e,titulo:N[e],children:(0,V.jsx)(w,{breadcrumb:(0,V.jsx)(G,{rotulo:`Trilha do pedido no tema ${N[e]}`}),title:`Pedido #1042`,status:(0,V.jsx)(E,{tone:`success`,dot:!0,children:`Pago`}),actions:(0,V.jsx)(a,{children:`Enviar`})})},e)),n.map(e=>(0,V.jsx)(I,{density:e,titulo:z[e],children:(0,V.jsx)(w,{title:`Pedidos`,description:`Loja Centro`,actions:(0,V.jsx)(a,{leadingIcon:u,children:`Novo`})})},e))]})}),(0,V.jsx)(F,{codigo:`import { Badge, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Card, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, PageHeader, Tab, TabList, TabPanel, Tabs } from '@tessela/web';
import { Download, Ellipsis, Pencil, Share2, Trash2 } from 'lucide-react';

const semNavegar = { onClick: (e: React.MouseEvent) => e.preventDefault() };

function TrilhaDoPedido({ rotulo = 'Trilha do pedido' }: { rotulo?: string }) {\r
  return (\r
    <Breadcrumb aria-label={rotulo}>\r
      <BreadcrumbLink href="#" {...semNavegar}>Loja Centro</BreadcrumbLink>\r
      <BreadcrumbLink href="#" {...semNavegar}>Pedidos</BreadcrumbLink>\r
      <BreadcrumbPage>Pedido #1042</BreadcrumbPage>\r
    </Breadcrumb>\r
  );\r
}

function AcoesDoCard() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label="Ações do card" size="sm" /></MenuTrigger>\r
      <MenuContent align="end">\r
        <MenuItem icon={Download}>Exportar CSV</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Remover do painel</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

const itensDoPedido = [['Café torrado 500 g', '2 × R$ 42,00'], ['Filtro de papel 103', '1 × R$ 12,90'], ['Caneca esmaltada', '1 × R$ 88,00']];

function ListaDeItens() {\r
  return (\r
    <ul className="ts:flex ts:flex-col ts:text-body-m">\r
      {itensDoPedido.map(([nome, valor]) => (\r
        <li key={nome} className="ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
          <span className="ts:truncate">{nome}</span>\r
          <span className="ts:shrink-0 ts:tabular-nums ts:text-fg-secondary">{valor}</span>\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
}

function PaginaDoPedido({ rotuloDaTrilha = 'Trilha do detalhe do pedido' }: { rotuloDaTrilha?: string }) {\r
  return (\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-32 ts:max-md:p-20">\r
      <Tabs>\r
        <PageHeader\r
          breadcrumb={<TrilhaDoPedido rotulo={rotuloDaTrilha} />}\r
          title="Pedido #1042"\r
          status={<Badge tone="success" dot>Pago</Badge>}\r
          description="Ana Souza · 25/09, 14:32 · R$ 184,90"\r
          actions={(\r
            <>\r
              <Button variant="secondary" leadingIcon={Pencil}>Editar</Button>\r
              <Button>Marcar como enviado</Button>\r
            </>\r
          )}\r
        >\r
          <TabList aria-label="Seções do pedido">\r
            <Tab value="resumo">Resumo</Tab>\r
            <Tab value="itens" count={3}>Itens</Tab>\r
            <Tab value="historico">Histórico</Tab>\r
          </TabList>\r
        </PageHeader>\r
        <TabPanel value="resumo">\r
          <div className="ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] ts:gap-16 ts:max-lg:grid-cols-1">\r
            <Card title="Itens" description="3 produtos" actions={<AcoesDoCard />} footer={<Button size="sm" variant="ghost">Ver todos os itens</Button>} flush>\r
              <ListaDeItens />\r
            </Card>\r
            <div className="ts:flex ts:flex-col ts:gap-16">\r
              <Card title="Cliente">\r
                <p>Ana Souza</p>\r
                <p className="ts:text-fg-secondary">ana@exemplo.com.br · (51) 99999-0000</p>\r
              </Card>\r
              <Card title="Entrega" actions={<Button size="sm" variant="secondary">Alterar</Button>}>\r
                <p>Rua das Flores, 120</p>\r
                <p className="ts:text-fg-secondary">Porto Alegre, RS · 90000-000</p>\r
              </Card>\r
            </div>\r
          </div>\r
        </TabPanel>\r
        <TabPanel value="itens"><Card title="Itens" flush><ListaDeItens /></Card></TabPanel>\r
        <TabPanel value="historico"><Card>Criado por Ana Souza às 14:32 · pago às 14:33.</Card></TabPanel>\r
      </Tabs>\r
    </div>\r
  );\r
}

<PaginaDoPedido />`,id:`em-uso`,titulo:`Em uso`,children:(0,V.jsx)(Y,{})}),(0,V.jsx)(F,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,V.jsx)(M,{itens:[{nome:`title`,tipo:`ReactNode`,descricao:`Título da página. É o h1: um por página.`},{nome:`description`,tipo:`ReactNode`,descricao:`Uma linha de contexto abaixo do título.`},{nome:`breadcrumb`,tipo:`ReactNode`,descricao:`A trilha (Breadcrumb), acima do título.`},{nome:`status`,tipo:`ReactNode`,descricao:`Ao lado do título, como o Badge de status do registro.`},{nome:`actions`,tipo:`ReactNode`,descricao:`Botões à direita; a ação principal por último.`},{nome:`children`,tipo:`ReactNode`,descricao:`Abaixo, a 24 px: a TabList das seções ou uma barra de filtros. Com abas, envolva cabeçalho e painéis em Tabs.`}]})}),(0,V.jsx)(F,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,V.jsx)(H,{itens:[(0,V.jsxs)(V.Fragment,{children:[`O título é o `,(0,V.jsx)(R,{children:`h1`}),` da página; os Cards abaixo usam h2.`]}),(0,V.jsx)(V.Fragment,{children:`A ordem de leitura e do Tab segue a tela: trilha, título, status, descrição, ações, abas.`}),(0,V.jsx)(V.Fragment,{children:`O status precisa de texto (“Pago”), não só cor.`})]})})]})}function $({compacto:e=!1}){let[t,n]=(0,B.useState)(``),[r,i]=(0,B.useState)(!1);function o(){i(!0),n(`Salvando produto`),window.setTimeout(()=>{i(!1),n(`Produto salvo`)},700)}return(0,V.jsxs)(`form`,{onChange:()=>n(`Alterações não salvas`),onSubmit:e=>{e.preventDefault(),o()},className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24 ts:max-md:p-16`,children:[(0,V.jsxs)(S,{title:`Informações básicas`,description:`Nome e categoria que aparecem no catálogo.`,headingLevel:3,children:[(0,V.jsx)(c,{label:`Nome`,defaultValue:`Prensa francesa 600 ml`}),!e&&(0,V.jsx)(m,{label:`Categoria`,options:[{value:`utilidades`,label:`Utilidades`},{value:`bebidas`,label:`Bebidas`}],defaultValue:`utilidades`})]}),(0,V.jsxs)(T,{status:t,className:`ts:mt-24 ts:-mx-24 ts:-mb-24 ts:max-md:-mx-16 ts:max-md:-mb-16`,children:[(0,V.jsx)(a,{type:`button`,variant:`ghost`,onClick:()=>n(`Alterações descartadas`),children:`Cancelar`}),(0,V.jsx)(a,{type:`submit`,loading:r,children:`Salvar produto`})]})]})}function te(){return(0,V.jsxs)(`article`,{children:[(0,V.jsx)(P,{etapa:`Componentes · formulário`,titulo:`FormSection e ActionBar`,descricao:(0,V.jsx)(V.Fragment,{children:`FormSection organiza grupos de campos com título e explicação. ActionBar mantém as ações do formulário ao alcance e anuncia o estado salvo no mesmo nó de status.`})}),(0,V.jsx)(F,{codigo:`import { ActionBar, Button, FormSection, Input, Select } from '@tessela/web';
import { useState } from 'react';

const status = [{ value: 'todos', label: 'Todos os status' }, { value: 'pago', label: 'Pago' }, { value: 'pendente', label: 'Pendente' }];

function FormularioDeProduto({ compacto = false }: { compacto?: boolean }) {\r
  const [status, setStatus] = useState('');\r
  const [salvando, setSalvando] = useState(false);\r
\r
  function salvar() {\r
    setSalvando(true);\r
    setStatus('Salvando produto');\r
    window.setTimeout(() => {\r
      setSalvando(false);\r
      setStatus('Produto salvo');\r
    }, 700);\r
  }\r
\r
  return (\r
    <form onChange={() => setStatus('Alterações não salvas')} onSubmit={(event) => { event.preventDefault(); salvar(); }} className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24 ts:max-md:p-16">\r
      <FormSection title="Informações básicas" description="Nome e categoria que aparecem no catálogo." headingLevel={3}>\r
        <Input label="Nome" defaultValue="Prensa francesa 600 ml" />\r
        {!compacto && <Select label="Categoria" options={[{ value: 'utilidades', label: 'Utilidades' }, { value: 'bebidas', label: 'Bebidas' }]} defaultValue="utilidades" />}\r
      </FormSection>\r
      <ActionBar status={status} className="ts:mt-24 ts:-mx-24 ts:-mb-24 ts:max-md:-mx-16 ts:max-md:-mb-16">\r
        <Button type="button" variant="ghost" onClick={() => setStatus('Alterações descartadas')}>Cancelar</Button>\r
        <Button type="submit" loading={salvando}>Salvar produto</Button>\r
      </ActionBar>\r
    </form>\r
  );\r
}

<FormularioDeProduto />`,id:`exemplos`,titulo:`Exemplos`,descricao:`Use uma seção por assunto. A barra vem no fim do formulário, com a ação principal por último.`,children:(0,V.jsx)($,{})}),(0,V.jsx)(F,{codigo:`import { ActionBar, Button, FormSection, Input, Select } from '@tessela/web';
import { useState } from 'react';

const status = [{ value: 'todos', label: 'Todos os status' }, { value: 'pago', label: 'Pago' }, { value: 'pendente', label: 'Pendente' }];

function FormularioDeProduto({ compacto = false }: { compacto?: boolean }) {\r
  const [status, setStatus] = useState('');\r
  const [salvando, setSalvando] = useState(false);\r
\r
  function salvar() {\r
    setSalvando(true);\r
    setStatus('Salvando produto');\r
    window.setTimeout(() => {\r
      setSalvando(false);\r
      setStatus('Produto salvo');\r
    }, 700);\r
  }\r
\r
  return (\r
    <form onChange={() => setStatus('Alterações não salvas')} onSubmit={(event) => { event.preventDefault(); salvar(); }} className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24 ts:max-md:p-16">\r
      <FormSection title="Informações básicas" description="Nome e categoria que aparecem no catálogo." headingLevel={3}>\r
        <Input label="Nome" defaultValue="Prensa francesa 600 ml" />\r
        {!compacto && <Select label="Categoria" options={[{ value: 'utilidades', label: 'Utilidades' }, { value: 'bebidas', label: 'Bebidas' }]} defaultValue="utilidades" />}\r
      </FormSection>\r
      <ActionBar status={status} className="ts:mt-24 ts:-mx-24 ts:-mb-24 ts:max-md:-mx-16 ts:max-md:-mb-16">\r
        <Button type="button" variant="ghost" onClick={() => setStatus('Alterações descartadas')}>Cancelar</Button>\r
        <Button type="submit" loading={salvando}>Salvar produto</Button>\r
      </ActionBar>\r
    </form>\r
  );\r
}

<FormularioDeProduto compacto />`,id:`estados`,titulo:`Estados`,descricao:`Edite um campo para informar alterações não salvas. Salve para acompanhar o estado de salvamento e a confirmação.`,children:(0,V.jsx)($,{compacto:!0})}),(0,V.jsx)(F,{id:`temas`,titulo:`Temas`,children:(0,V.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:r.map(e=>(0,V.jsx)(I,{theme:e,titulo:N[e],children:(0,V.jsx)($,{compacto:!0})},e))})}),(0,V.jsx)(F,{id:`densidades`,titulo:`Densidades`,children:(0,V.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:n.map(e=>(0,V.jsx)(I,{density:e,titulo:z[e],children:(0,V.jsx)($,{compacto:!0})},e))})}),(0,V.jsx)(F,{codigo:`<a href="/modelos/formulario" className="ts:text-fg-primary ts:underline ts:underline-offset-4">Abrir o modelo Formulário</a>`,id:`em-uso`,titulo:`Em uso`,descricao:`O modelo Formulário usa as duas peças no cadastro de produto.`,children:(0,V.jsx)(`a`,{href:`/modelos/formulario`,className:`ts:text-fg-primary ts:underline ts:underline-offset-4`,children:`Abrir o modelo Formulário`})}),(0,V.jsx)(F,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,V.jsx)(M,{itens:[{nome:`FormSection · title`,tipo:`ReactNode`,descricao:`Título da seção. É h2 por padrão; use headingLevel 3 dentro de outro bloco com título.`},{nome:`FormSection · description`,tipo:`ReactNode`,descricao:`Explica o grupo de campos e o motivo da configuração.`},{nome:`FormSection · headingLevel`,tipo:`2 | 3`,padrao:`2`,descricao:`Nível semântico do título.`},{nome:`ActionBar · status`,tipo:`ReactNode`,descricao:`Estado anunciado em uma região role=status persistente, inclusive quando começa vazio.`},{nome:`ActionBar · children`,tipo:`ReactNode`,descricao:`Ações à direita. A ação principal vem por último.`},{nome:`className`,tipo:`string`,descricao:`Classes extras para encaixar a seção ou a barra no container do formulário.`}]})}),(0,V.jsx)(F,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,V.jsx)(H,{itens:[(0,V.jsx)(V.Fragment,{children:`O título de FormSection é um heading real. Mantenha a sequência de níveis da página.`}),(0,V.jsxs)(V.Fragment,{children:[`A região `,(0,V.jsx)(R,{children:`role="status"`}),` permanece no DOM quando vazia; a primeira mensagem entra no mesmo nó e pode ser anunciada.`]}),(0,V.jsx)(V.Fragment,{children:`Com teclado, a ordem segue os campos e depois as ações. Cancelar vem antes de Salvar.`}),(0,V.jsx)(V.Fragment,{children:`ActionBar não cria estado desativado ou de carregamento próprio: use o estado do Button para impedir envio duplicado.`})]})})]})}function ne(){return(0,V.jsxs)(`article`,{children:[(0,V.jsx)(P,{etapa:`Componente 20 · aprovado`,titulo:`Breadcrumb`,descricao:(0,V.jsxs)(V.Fragment,{children:[`A trilha de onde a página fica, acima do título. Cada nível é um link; o último é a página atual. Aceita o link do roteador do app pelo `,(0,V.jsx)(R,{children:`render`}),`, como o NavItem.`]})}),(0,V.jsx)(F,{codigo:`import { Breadcrumb, BreadcrumbLink, BreadcrumbPage } from '@tessela/web';
import { type ReactNode } from 'react';

function Rotulo({ children }: { children: ReactNode }) {\r
  return <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">{children}</p>;\r
}

const semNavegar = { onClick: (e: React.MouseEvent) => e.preventDefault() };

<div className="ts:flex ts:flex-col ts:gap-24">\r
  <div><Rotulo>Dois níveis</Rotulo><Breadcrumb aria-label="Trilha de dois níveis"><BreadcrumbLink href="#" {...semNavegar}>Pedidos</BreadcrumbLink><BreadcrumbPage>Pedido #1042</BreadcrumbPage></Breadcrumb></div>\r
  <div><Rotulo>Quatro níveis</Rotulo><Breadcrumb aria-label="Trilha de quatro níveis"><BreadcrumbLink href="#" {...semNavegar}>Loja Centro</BreadcrumbLink><BreadcrumbLink href="#" {...semNavegar}>Cardápio</BreadcrumbLink><BreadcrumbLink href="#" {...semNavegar}>Bebidas quentes</BreadcrumbLink><BreadcrumbPage>Café coado</BreadcrumbPage></Breadcrumb></div>\r
  <div className="ts:max-w-360">\r
    <Rotulo>Rótulos longos (360 px)</Rotulo>\r
    <Breadcrumb aria-label="Trilha com rótulos longos">\r
      <BreadcrumbLink href="#" {...semNavegar}>Loja Centro Histórico de Porto Alegre</BreadcrumbLink>\r
      <BreadcrumbLink href="#" {...semNavegar}>Cardápio de inverno</BreadcrumbLink>\r
      <BreadcrumbPage>Chocolate quente com canela e chantilly</BreadcrumbPage>\r
    </Breadcrumb>\r
  </div>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Texto de 13 px. O primeiro nível fica alinhado ao conteúdo; o hover mostra um fundo de 4 px além do texto. Rótulos longos são cortados com reticências.`,children:(0,V.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Dois níveis`}),(0,V.jsxs)(x,{"aria-label":`Trilha de dois níveis`,children:[(0,V.jsx)(C,{href:`#`,...W,children:`Pedidos`}),(0,V.jsx)(b,{children:`Pedido #1042`})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(U,{children:`Quatro níveis`}),(0,V.jsxs)(x,{"aria-label":`Trilha de quatro níveis`,children:[(0,V.jsx)(C,{href:`#`,...W,children:`Loja Centro`}),(0,V.jsx)(C,{href:`#`,...W,children:`Cardápio`}),(0,V.jsx)(C,{href:`#`,...W,children:`Bebidas quentes`}),(0,V.jsx)(b,{children:`Café coado`})]})]}),(0,V.jsxs)(`div`,{className:`ts:max-w-360`,children:[(0,V.jsx)(U,{children:`Rótulos longos (360 px)`}),(0,V.jsxs)(x,{"aria-label":`Trilha com rótulos longos`,children:[(0,V.jsx)(C,{href:`#`,...W,children:`Loja Centro Histórico de Porto Alegre`}),(0,V.jsx)(C,{href:`#`,...W,children:`Cardápio de inverno`}),(0,V.jsx)(b,{children:`Chocolate quente com canela e chantilly`})]})]})]})}),(0,V.jsx)(F,{id:`temas`,titulo:`Temas`,children:(0,V.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:r.map(e=>(0,V.jsx)(I,{theme:e,titulo:N[e],children:(0,V.jsx)(G,{rotulo:`Trilha do pedido no tema ${N[e]}`})},e))})}),(0,V.jsx)(F,{codigo:`import { Badge, Breadcrumb, BreadcrumbLink, BreadcrumbPage, Button, Card, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, PageHeader, Tab, TabList, TabPanel, Tabs } from '@tessela/web';
import { Download, Ellipsis, Pencil, Share2, Trash2 } from 'lucide-react';

const semNavegar = { onClick: (e: React.MouseEvent) => e.preventDefault() };

function TrilhaDoPedido({ rotulo = 'Trilha do pedido' }: { rotulo?: string }) {\r
  return (\r
    <Breadcrumb aria-label={rotulo}>\r
      <BreadcrumbLink href="#" {...semNavegar}>Loja Centro</BreadcrumbLink>\r
      <BreadcrumbLink href="#" {...semNavegar}>Pedidos</BreadcrumbLink>\r
      <BreadcrumbPage>Pedido #1042</BreadcrumbPage>\r
    </Breadcrumb>\r
  );\r
}

function AcoesDoCard() {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label="Ações do card" size="sm" /></MenuTrigger>\r
      <MenuContent align="end">\r
        <MenuItem icon={Download}>Exportar CSV</MenuItem>\r
        <MenuItem icon={Share2}>Compartilhar</MenuItem>\r
        <MenuSeparator />\r
        <MenuItem icon={Trash2} destructive>Remover do painel</MenuItem>\r
      </MenuContent>\r
    </Menu>\r
  );\r
}

const itensDoPedido = [['Café torrado 500 g', '2 × R$ 42,00'], ['Filtro de papel 103', '1 × R$ 12,90'], ['Caneca esmaltada', '1 × R$ 88,00']];

function ListaDeItens() {\r
  return (\r
    <ul className="ts:flex ts:flex-col ts:text-body-m">\r
      {itensDoPedido.map(([nome, valor]) => (\r
        <li key={nome} className="ts:flex ts:justify-between ts:gap-16 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
          <span className="ts:truncate">{nome}</span>\r
          <span className="ts:shrink-0 ts:tabular-nums ts:text-fg-secondary">{valor}</span>\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
}

function PaginaDoPedido({ rotuloDaTrilha = 'Trilha do detalhe do pedido' }: { rotuloDaTrilha?: string }) {\r
  return (\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:p-32 ts:max-md:p-20">\r
      <Tabs>\r
        <PageHeader\r
          breadcrumb={<TrilhaDoPedido rotulo={rotuloDaTrilha} />}\r
          title="Pedido #1042"\r
          status={<Badge tone="success" dot>Pago</Badge>}\r
          description="Ana Souza · 25/09, 14:32 · R$ 184,90"\r
          actions={(\r
            <>\r
              <Button variant="secondary" leadingIcon={Pencil}>Editar</Button>\r
              <Button>Marcar como enviado</Button>\r
            </>\r
          )}\r
        >\r
          <TabList aria-label="Seções do pedido">\r
            <Tab value="resumo">Resumo</Tab>\r
            <Tab value="itens" count={3}>Itens</Tab>\r
            <Tab value="historico">Histórico</Tab>\r
          </TabList>\r
        </PageHeader>\r
        <TabPanel value="resumo">\r
          <div className="ts:grid ts:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] ts:gap-16 ts:max-lg:grid-cols-1">\r
            <Card title="Itens" description="3 produtos" actions={<AcoesDoCard />} footer={<Button size="sm" variant="ghost">Ver todos os itens</Button>} flush>\r
              <ListaDeItens />\r
            </Card>\r
            <div className="ts:flex ts:flex-col ts:gap-16">\r
              <Card title="Cliente">\r
                <p>Ana Souza</p>\r
                <p className="ts:text-fg-secondary">ana@exemplo.com.br · (51) 99999-0000</p>\r
              </Card>\r
              <Card title="Entrega" actions={<Button size="sm" variant="secondary">Alterar</Button>}>\r
                <p>Rua das Flores, 120</p>\r
                <p className="ts:text-fg-secondary">Porto Alegre, RS · 90000-000</p>\r
              </Card>\r
            </div>\r
          </div>\r
        </TabPanel>\r
        <TabPanel value="itens"><Card title="Itens" flush><ListaDeItens /></Card></TabPanel>\r
        <TabPanel value="historico"><Card>Criado por Ana Souza às 14:32 · pago às 14:33.</Card></TabPanel>\r
      </Tabs>\r
    </div>\r
  );\r
}

<PaginaDoPedido />`,id:`em-uso`,titulo:`Em uso`,children:(0,V.jsx)(Y,{})}),(0,V.jsx)(F,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,V.jsx)(M,{itens:[{nome:`Breadcrumb · aria-label`,tipo:`string`,padrao:`Trilha de navegação`,descricao:`Nome da navegação para o leitor de tela (texto traduzível no provider).`},{nome:`BreadcrumbLink · href / render`,tipo:`string | ReactElement`,descricao:`Link do nível. Para o roteador: render={<Link to="/pedidos" />}.`},{nome:`BreadcrumbPage`,tipo:`ReactNode`,descricao:`A página atual, no fim. Não é link.`}]})}),(0,V.jsx)(F,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,V.jsx)(H,{itens:[(0,V.jsxs)(V.Fragment,{children:[`É um `,(0,V.jsx)(R,{children:`nav`}),` com nome e uma lista ordenada; os separadores ficam escondidos do leitor de tela.`]}),(0,V.jsxs)(V.Fragment,{children:[`A página atual tem `,(0,V.jsx)(R,{children:`aria-current="page"`}),` e não recebe foco.`]}),(0,V.jsx)(V.Fragment,{children:`Com mouse, cada link tem 24 px de altura, o alvo mínimo da WCAG 2.2. Com toque, ele tem alvo de 44 px; o texto e o layout não se movem, e o chevron seguinte pode andar até uns 7 px se o link for mais estreito que 44 px. A página atual não é interativa e fica como está.`}),(0,V.jsx)(V.Fragment,{children:`Rótulo cortado continua inteiro no nome acessível.`})]})})]})}export{te as ActionBarPagina,ne as BreadcrumbPagina,Z as CardPagina,ee as PageHeaderPagina};