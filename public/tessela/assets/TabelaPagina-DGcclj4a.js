import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,gi as r,li as i,p as a,sr as o}from"./Codigo-Dgz1In5l.js";import{n as s,r as c,t as l}from"./Table-BtEE3qm2.js";import{t as u}from"./download-Bz44KTCP.js";import{t as d}from"./ellipsis-CzhPUSUO.js";import{t as ee}from"./plus-BCNg58Vj.js";import{t as te}from"./printer-CA5HELwf.js";import{o as f,t as p}from"./Dialog-DjDx4UAw.js";import{t as m}from"./trash-BZfsE4TV.js";import{s as h}from"./tiptap-jvs8iIPE.js";import{t as g}from"./Select-DFPozajq.js";import{a as _}from"./Estrutura-Bg5zrcqs.js";import{t as v}from"./Badge-g4zT1uda.js";import{Ft as y,Ht as ne,Lt as b,Nt as re,T as ie,_ as x,b as S,dt as C,f as w,g as T,h as E,p as D,rt as O,y as k}from"./index-3SU4ioj-.js";var A=e(t(),1),j=h();function M({itens:e}){return(0,j.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})}var N=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`}),P=new Intl.DateTimeFormat(`pt-BR`,{day:`2-digit`,month:`2-digit`,hour:`2-digit`,minute:`2-digit`}),F=new Intl.DateTimeFormat(`pt-BR`,{day:`2-digit`,month:`2-digit`,year:`numeric`}),I=[`Ana Souza`,`Bruno Lima`,`Carla Dias`,`Diego Reis`,`Elisa Moura`,`Fábio Nunes`,`Gabriela Rocha`,`Henrique Alves`,`Isabela Costa`,`João Pedro`],L=[`Porto Alegre`,`São Paulo`,`Curitiba`,`Recife`,`Belo Horizonte`],R=[`Pago`,`Pago`,`Pendente`,`Enviado`,`Cancelado`];function z(e,t=1042){return Array.from({length:e},(e,n)=>({id:String(t-n),cliente:I[n*7%I.length],cidade:L[n*3%L.length],criado:new Date(2026,8,25,18-n%10,59-n*13%60),itens:1+n*5%7,total:Math.round(n*7919%48e3+1990)/100,status:R[n*3%R.length]}))}var B={Pago:`success`,Pendente:`warning`,Enviado:`info`,Cancelado:`neutral`},V=s(),H=V.columns([V.accessor(`id`,{header:`Pedido`,meta:{width:96},enableHiding:!1,cell:e=>(0,j.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.getValue()]})}),V.accessor(`cliente`,{header:`Cliente`,cell:e=>(0,j.jsx)(`span`,{className:`ts:font-medium`,children:e.getValue()})}),V.accessor(`cidade`,{header:`Cidade`}),V.accessor(`criado`,{header:`Criado em`,sortFn:`datetime`,meta:{width:128},cell:e=>P.format(e.getValue())}),V.accessor(`itens`,{header:`Itens`,meta:{align:`end`,width:72}}),V.accessor(`total`,{header:`Total`,meta:{align:`end`,width:120},cell:e=>N.format(e.getValue())}),V.accessor(`status`,{header:`Status`,meta:{width:120},cell:e=>(0,j.jsx)(v,{tone:B[e.getValue()],dot:!0,children:e.getValue()})})]),U=[{value:`todos`,label:`Todos os status`},...[`Pago`,`Pendente`,`Enviado`,`Cancelado`].map(e=>({value:e,label:e}))];function W(){let e=C(),[t,n]=(0,A.useState)(()=>z(64)),[r,i]=(0,A.useState)(`todos`),[a,s]=(0,A.useState)(null),c=(0,A.useMemo)(()=>r===`todos`?t:t.filter(e=>e.status===r),[t,r]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l,{"aria-label":`Pedidos`,data:c,columns:H,getRowId:e=>e.id,rowLabel:e=>`pedido #${e.id}`,search:!0,searchPlaceholder:`Buscar por cliente ou número`,filters:(0,j.jsx)(g,{"aria-label":`Status`,className:`ts:w-180`,options:U,value:r,onValueChange:e=>i(e??`todos`)}),columnToggle:!0,selectable:!0,bulkActions:({ids:t,clear:r})=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o,{size:`sm`,variant:`secondary`,leadingIcon:f,onClick:()=>{n(e=>e.map(e=>t.includes(e.id)?{...e,status:`Enviado`}:e)),r(),e.success(`${t.length} pedidos marcados como enviados`)},children:`Marcar como enviados`}),(0,j.jsx)(o,{size:`sm`,variant:`secondary`,leadingIcon:u,children:`Exportar`}),(0,j.jsx)(o,{size:`sm`,variant:`destructive`,leadingIcon:m,onClick:()=>s(t),children:`Excluir`})]})}),(0,j.jsx)(p,{open:a!==null,onOpenChange:e=>{e||s(null)},title:`Excluir ${a?.length??0} pedidos?`,description:`Os pedidos saem da lista e dos relatórios.`,confirmLabel:`Excluir pedidos`,destructive:!0,onConfirm:()=>{let r=a??[],i=t;n(e=>e.filter(e=>!r.includes(e.id))),e.show({title:`${r.length} pedidos excluídos`,action:{label:`Desfazer`,onClick:()=>n(i)}})}})]})}var G=[{id:`p1`,nome:`Café torrado 500 g`,categoria:`Mercearia`,preco:42,estoque:18,reposicao:new Date(2026,9,4),ativo:!0},{id:`p2`,nome:`Filtro de papel 103`,categoria:`Mercearia`,preco:12.9,estoque:64,reposicao:new Date(2026,9,10),ativo:!0},{id:`p3`,nome:`Caneca esmaltada`,categoria:`Utilidades`,preco:88,estoque:3,reposicao:new Date(2026,9,18),ativo:!1},{id:`p4`,nome:`Chocolate quente 300 g`,categoria:`Mercearia`,preco:29.5,estoque:0,reposicao:new Date(2026,9,2),ativo:!0},{id:`p5`,nome:`Prensa francesa 600 ml`,categoria:`Utilidades`,preco:149,estoque:7,reposicao:new Date(2026,9,22),ativo:!0}],K=s(),q=K.columns([K.accessor(`nome`,{header:`Produto`,meta:{editable:`text`}}),K.accessor(`categoria`,{header:`Categoria`,meta:{edit:`select`,editOptions:[{value:`Mercearia`,label:`Mercearia`},{value:`Utilidades`,label:`Utilidades`}],width:140}}),K.accessor(`preco`,{header:`Preço`,meta:{align:`end`,editable:`number`,width:128},cell:e=>N.format(e.getValue())}),K.accessor(`estoque`,{header:`Estoque`,meta:{align:`end`,editable:`number`,width:112},cell:e=>e.getValue()===0?(0,j.jsx)(`span`,{className:`ts:text-feedback-error-fg`,children:`Esgotado`}):e.getValue()}),K.accessor(`reposicao`,{header:`Reposição`,meta:{edit:`date`,format:e=>F.format(e),width:128},cell:e=>F.format(e.getValue())}),K.accessor(`ativo`,{header:`Ativo`,meta:{edit:`boolean`,width:84},cell:e=>e.getValue()?`Sim`:`Não`})]);function J(){let e=C(),[t,n]=(0,A.useState)(G);return(0,j.jsx)(l,{"aria-label":`Produtos`,data:t,columns:q,getRowId:e=>e.id,paginated:!1,onCellEdit:async({row:t,columnId:r,value:i})=>{if(r===`estoque`&&typeof i==`number`&&i<0)throw e.error(`Estoque não pode ser negativo`),Error(`negativo`);n(e=>e.map(e=>e.id===t.id?{...e,[r]:i}:e)),e.success(`Produto atualizado`,{description:`${t.nome} · ${r===`preco`?`preço`:r}`})}})}var Y=z(1e4,2e4);function ae(){return(0,j.jsx)(l,{"aria-label":`Todos os pedidos`,data:Y,columns:H,getRowId:e=>e.id,search:!0,virtualized:!0,height:440})}var oe=z(237,5e3);function se(e,t,n){return new Promise(r=>{setTimeout(()=>{let i=oe.filter(e=>`${e.id} ${e.cliente}`.toLowerCase().includes(n.toLowerCase())),a=t[0];if(a){let e=a.id;i=[...i].sort((t,n)=>(t[e]<n[e]?-1:+(t[e]>n[e]))*(a.desc?-1:1))}r({linhas:i.slice(e.pageIndex*e.pageSize,(e.pageIndex+1)*e.pageSize),total:i.length})},700)})}function ce(){let[e,t]=(0,A.useState)({pageIndex:0,pageSize:10}),[n,r]=(0,A.useState)([]),[i,a]=(0,A.useState)(``),[o,s]=(0,A.useState)({linhas:[],total:0}),[c,u]=(0,A.useState)(!0);return(0,A.useEffect)(()=>{let t=!0;return u(!0),se(e,n,i).then(e=>{t&&(s(e),u(!1))}),()=>{t=!1}},[e,n,i]),(0,j.jsx)(l,{"aria-label":`Pedidos do servidor`,data:o.linhas,columns:H,getRowId:e=>e.id,manual:!0,rowCount:o.total,loading:c,search:!0,pagination:e,onPaginationChange:t,sorting:n,onSortingChange:e=>{r(e),t(e=>({...e,pageIndex:0}))},globalFilter:i,onGlobalFilterChange:e=>{a(e),t(e=>({...e,pageIndex:0}))},pageSizeOptions:[10,25,50]})}function le(){let[e,t]=(0,A.useState)(`carregando`);return(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,j.jsx)(g,{"aria-label":`Estado`,className:`ts:w-200`,options:[{value:`carregando`,label:`Carregando`},{value:`vazio`,label:`Vazio`}],value:e,onValueChange:e=>t(e??`carregando`)}),(0,j.jsx)(l,{"aria-label":`Pedidos (estado)`,data:[],columns:H,getRowId:e=>e.id,loading:e===`carregando`,emptyState:(0,j.jsx)(O,{size:`sm`,headingLevel:3,title:`Nenhum pedido ainda`,description:`Os pedidos aparecem aqui assim que chegarem.`,actions:(0,j.jsx)(o,{size:`sm`,leadingIcon:ee,children:`Criar pedido`})})})]})}function X({rotulo:e}){return(0,j.jsx)(l,{"aria-label":e,data:z(4),columns:H.filter(e=>[`cliente`,`total`,`status`].includes(String(e.accessorKey))),getRowId:e=>e.id,selectable:!0,rowLabel:e=>`pedido #${e.id}`,paginated:!1})}var ue=z(60,3100),de=[`Pago`,`Pendente`,`Enviado`,`Cancelado`].map(e=>({value:e,label:e})),fe=V.columns([V.accessor(`id`,{header:`Pedido`,meta:{width:96},cell:e=>(0,j.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.getValue()]})}),V.accessor(`cliente`,{header:`Cliente`,meta:{filter:`text`},cell:e=>(0,j.jsx)(`span`,{className:`ts:font-medium`,children:e.getValue()})}),V.accessor(`cidade`,{header:`Cidade`,meta:{filter:`select`}}),V.accessor(`total`,{header:`Total`,meta:{align:`end`,width:140,filter:`range`},cell:e=>N.format(e.getValue())}),V.accessor(`status`,{header:`Status`,meta:{width:140,filter:`select`,filterOptions:de},cell:e=>(0,j.jsx)(v,{tone:B[e.getValue()],dot:!0,children:e.getValue()})})]);function pe(){return(0,j.jsx)(l,{"aria-label":`Pedidos com filtros por coluna`,data:ue,columns:fe,getRowId:e=>e.id,search:!0,pageSizeOptions:[10,25]})}var me=[`Pix`,`Cartão de crédito`,`Cartão de débito`,`Dinheiro`],he=[`Site`,`App`,`WhatsApp`,`Balcão`],ge=[`Marcos Paulo`,`Rita Gomes`,`Tiago Freitas`],Z=z(12,4200).map((e,t)=>({...e,pagamento:me[t%4],canal:he[t*3%4],entregador:ge[t%3],cep:`0${1e3+t*37}-0${10+t}`})),Q=s();function _e({id:e}){return(0,j.jsxs)(re,{children:[(0,j.jsx)(ne,{children:(0,j.jsx)(a,{icon:d,label:`Ações do pedido #${e}`,size:`sm`})}),(0,j.jsxs)(y,{align:`end`,children:[(0,j.jsx)(b,{icon:te,children:`Imprimir`}),(0,j.jsx)(b,{icon:r,children:`Duplicar`})]})]})}var ve=Q.columns([Q.accessor(`id`,{header:`Pedido`,meta:{width:96,pin:`start`},cell:e=>(0,j.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.getValue()]})}),Q.accessor(`cliente`,{header:`Cliente`,meta:{width:180,pin:`start`},cell:e=>(0,j.jsx)(`span`,{className:`ts:font-medium`,children:e.getValue()})}),Q.accessor(`cidade`,{header:`Cidade`}),Q.accessor(`cep`,{header:`CEP`,meta:{width:120}}),Q.accessor(`criado`,{header:`Criado em`,sortFn:`datetime`,meta:{width:140},cell:e=>P.format(e.getValue())}),Q.accessor(`canal`,{header:`Canal`,meta:{width:120}}),Q.accessor(`pagamento`,{header:`Pagamento`}),Q.accessor(`entregador`,{header:`Entregador`}),Q.accessor(`itens`,{header:`Itens`,meta:{align:`end`,width:80}}),Q.accessor(`total`,{header:`Total`,meta:{align:`end`,width:120,pin:`end`},cell:e=>N.format(e.getValue())}),Q.display({id:`acoes`,header:()=>(0,j.jsx)(`span`,{className:`ts:sr-only`,children:`Ações`}),meta:{width:56,pin:`end`,label:`Ações`},enableHiding:!1,cell:e=>(0,j.jsx)(_e,{id:e.row.original.id})})]);function ye(){return(0,j.jsx)(l,{"aria-label":`Pedidos com colunas fixas`,data:Z,columns:ve,getRowId:e=>e.id,rowLabel:e=>`pedido #${e.id}`,selectable:!0,resizableColumns:!0,paginated:!1})}var be=Q.columns([Q.accessor(`id`,{header:`Pedido`,meta:{width:96},cell:e=>(0,j.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.getValue()]})}),Q.accessor(`cliente`,{header:`Cliente`,cell:e=>(0,j.jsx)(`span`,{className:`ts:font-medium`,children:e.getValue()})}),Q.accessor(`total`,{header:`Total`,meta:{align:`end`,width:120},cell:e=>N.format(e.getValue())}),Q.accessor(`status`,{header:`Status`,meta:{width:120},cell:e=>(0,j.jsx)(v,{tone:B[e.getValue()],dot:!0,children:e.getValue()})})]);function xe(){return(0,j.jsx)(l,{"aria-label":`Pedidos com detalhes`,data:Z.slice(0,6),columns:be,getRowId:e=>e.id,rowLabel:e=>`pedido #${e.id}`,paginated:!1,renderDetail:e=>(0,j.jsx)(ie,{layout:`grid`,columns:3,items:[{term:`Entrega`,description:`${e.cidade} · CEP ${e.cep}`},{term:`Pagamento`,description:e.pagamento},{term:`Canal`,description:e.canal},{term:`Entregador`,description:e.entregador},{term:`Itens`,description:`${e.itens} itens`},{term:`Total`,description:N.format(e.total)}]})})}var Se=[{id:`bebidas`,nome:`Bebidas`,produtos:18,vendas:12840,filhas:[{id:`cafes`,nome:`Cafés`,produtos:9,vendas:8210,filhas:[{id:`espresso`,nome:`Espresso`,produtos:4,vendas:5120},{id:`coados`,nome:`Coados`,produtos:5,vendas:3090}]},{id:`chas`,nome:`Chás`,produtos:5,vendas:2130},{id:`sucos`,nome:`Sucos`,produtos:4,vendas:2500}]},{id:`comidas`,nome:`Comidas`,produtos:14,vendas:9320,filhas:[{id:`paes`,nome:`Pães`,produtos:6,vendas:4100},{id:`bolos`,nome:`Bolos`,produtos:8,vendas:5220}]},{id:`graos`,nome:`Grãos para levar`,produtos:7,vendas:3480}],$=s(),Ce=$.columns([$.accessor(`nome`,{header:`Categoria`,cell:e=>(0,j.jsx)(`span`,{className:e.row.depth===0?`ts:font-medium`:void 0,children:e.getValue()})}),$.accessor(`produtos`,{header:`Produtos`,meta:{align:`end`,width:120}}),$.accessor(`vendas`,{header:`Vendas no mês`,meta:{align:`end`,width:160},cell:e=>N.format(e.getValue())})]);function we(){return(0,j.jsx)(l,{"aria-label":`Vendas por categoria`,data:Se,columns:Ce,getRowId:e=>e.id,rowLabel:e=>e.nome,getSubRows:e=>e.filhas,paginated:!1})}function Te(){return(0,j.jsxs)(`article`,{children:[(0,j.jsx)(w,{etapa:`Componente 23 · aprovado · extras no catálogo`,titulo:`DataTable`,descricao:(0,j.jsxs)(j.Fragment,{children:[`A tabela de dados do admin, sobre o TanStack Table: ordenar, buscar sem diferenciar acentos, paginar, selecionar com ações em lote, abrir uma linha, mostrar e esconder colunas, editar no lugar e rolar milhares de linhas. Funciona com os dados todos no navegador ou com o servidor fazendo o trabalho (`,(0,j.jsx)(D,{children:`manual`}),`).`]})}),(0,j.jsx)(T,{codigo:`import { Badge, Button, ConfirmDialog, DataTable, Select, createColumns, useToast } from '@tessela/web';
import { Download, Send, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const data = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const colPedido = createColumns<Pedido>();

const colunasDePedido = colPedido.columns([\r
  colPedido.accessor('id', { header: 'Pedido', meta: { width: 96 }, enableHiding: false, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colPedido.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colPedido.accessor('cidade', { header: 'Cidade' }),\r
  colPedido.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 128 }, cell: (c) => data.format(c.getValue()) }),\r
  colPedido.accessor('itens', { header: 'Itens', meta: { align: 'end', width: 72 } }),\r
  colPedido.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  colPedido.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

const opcoesDeStatus = [{ value: 'todos', label: 'Todos os status' }, ...['Pago', 'Pendente', 'Enviado', 'Cancelado'].map((s) => ({ value: s, label: s }))];

function TabelaDePedidos() {\r
  const toast = useToast();\r
  const [pedidos, setPedidos] = useState(() => gerarPedidos(64));\r
  const [status, setStatus] = useState<string>('todos');\r
  const [excluir, setExcluir] = useState<string[] | null>(null);\r
  const visiveis = useMemo(() => (status === 'todos' ? pedidos : pedidos.filter((p) => p.status === status)), [pedidos, status]);\r
  return (\r
    <>\r
      <DataTable\r
        aria-label="Pedidos"\r
        data={visiveis}\r
        columns={colunasDePedido}\r
        getRowId={(p) => p.id}\r
        rowLabel={(p) => \`pedido #\${p.id}\`}\r
        search\r
        searchPlaceholder="Buscar por cliente ou número"\r
        filters={<Select aria-label="Status" className="ts:w-180" options={opcoesDeStatus} value={status} onValueChange={(v) => setStatus(v ?? 'todos')} />}\r
        columnToggle\r
        selectable\r
        bulkActions={({ ids, clear }) => (\r
          <>\r
            <Button size="sm" variant="secondary" leadingIcon={Send} onClick={() => { setPedidos((a) => a.map((p) => (ids.includes(p.id) ? { ...p, status: 'Enviado' } : p))); clear(); toast.success(\`\${ids.length} pedidos marcados como enviados\`); }}>Marcar como enviados</Button>\r
            <Button size="sm" variant="secondary" leadingIcon={Download}>Exportar</Button>\r
            <Button size="sm" variant="destructive" leadingIcon={Trash2} onClick={() => setExcluir(ids)}>Excluir</Button>\r
          </>\r
        )}\r
      />\r
      <ConfirmDialog\r
        open={excluir !== null}\r
        onOpenChange={(v) => { if (!v) setExcluir(null); }}\r
        title={\`Excluir \${excluir?.length ?? 0} pedidos?\`}\r
        description="Os pedidos saem da lista e dos relatórios."\r
        confirmLabel="Excluir pedidos"\r
        destructive\r
        onConfirm={() => {\r
          const ids = excluir ?? [];\r
          const antes = pedidos;\r
          setPedidos((a) => a.filter((p) => !ids.includes(p.id)));\r
          toast.show({ title: \`\${ids.length} pedidos excluídos\`, action: { label: 'Desfazer', onClick: () => setPedidos(antes) } });\r
        }}\r
      />\r
    </>\r
  );\r
}

<TabelaDePedidos />`,id:`pedidos`,titulo:`Lista completa`,descricao:`Busca, filtro de status, colunas e seleção. A busca encontra “São Paulo” com “sao”. Selecione linhas para ver a barra de lote; Shift+clique seleciona um intervalo. onRowClick abre a linha por clique, Enter ou Espaço, e getRowHref serve para navegação. Clique num cabeçalho para ordenar: texto começa em A–Z; número e data começam do maior.`,children:(0,j.jsx)(W,{})}),(0,j.jsx)(T,{codigo:`import { DataTable, createColumns, useToast } from '@tessela/web';
import { useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const dataCurta = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

type Produto = { id: string; nome: string; categoria: string; preco: number; estoque: number; reposicao: Date; ativo: boolean };

const produtosIniciais: Produto[] = [\r
  { id: 'p1', nome: 'Café torrado 500 g', categoria: 'Mercearia', preco: 42, estoque: 18, reposicao: new Date(2026, 9, 4), ativo: true },\r
  { id: 'p2', nome: 'Filtro de papel 103', categoria: 'Mercearia', preco: 12.9, estoque: 64, reposicao: new Date(2026, 9, 10), ativo: true },\r
  { id: 'p3', nome: 'Caneca esmaltada', categoria: 'Utilidades', preco: 88, estoque: 3, reposicao: new Date(2026, 9, 18), ativo: false },\r
  { id: 'p4', nome: 'Chocolate quente 300 g', categoria: 'Mercearia', preco: 29.5, estoque: 0, reposicao: new Date(2026, 9, 2), ativo: true },\r
  { id: 'p5', nome: 'Prensa francesa 600 ml', categoria: 'Utilidades', preco: 149, estoque: 7, reposicao: new Date(2026, 9, 22), ativo: true },\r
];

const colProduto = createColumns<Produto>();

const colunasDeProduto = colProduto.columns([\r
  colProduto.accessor('nome', { header: 'Produto', meta: { editable: 'text' } }),\r
  colProduto.accessor('categoria', {\r
    header: 'Categoria',\r
    meta: { edit: 'select', editOptions: [{ value: 'Mercearia', label: 'Mercearia' }, { value: 'Utilidades', label: 'Utilidades' }], width: 140 },\r
  }),\r
  colProduto.accessor('preco', { header: 'Preço', meta: { align: 'end', editable: 'number', width: 128 }, cell: (c) => real.format(c.getValue()) }),\r
  colProduto.accessor('estoque', {\r
    header: 'Estoque',\r
    meta: { align: 'end', editable: 'number', width: 112 },\r
    cell: (c) => (c.getValue() === 0 ? <span className="ts:text-feedback-error-fg">Esgotado</span> : c.getValue()),\r
  }),\r
  colProduto.accessor('reposicao', { header: 'Reposição', meta: { edit: 'date', format: (valor) => dataCurta.format(valor as Date), width: 128 }, cell: (c) => dataCurta.format(c.getValue()) }),\r
  colProduto.accessor('ativo', { header: 'Ativo', meta: { edit: 'boolean', width: 84 }, cell: (c) => c.getValue() ? 'Sim' : 'Não' }),\r
]);

function TabelaDeProdutos() {\r
  const toast = useToast();\r
  const [produtos, setProdutos] = useState(produtosIniciais);\r
  return (\r
    <DataTable\r
      aria-label="Produtos"\r
      data={produtos}\r
      columns={colunasDeProduto}\r
      getRowId={(p) => p.id}\r
      paginated={false}\r
      onCellEdit={async ({ row, columnId, value }) => {\r
        if (columnId === 'estoque' && typeof value === 'number' && value < 0) {\r
          toast.error('Estoque não pode ser negativo');\r
          throw new Error('negativo');\r
        }\r
        setProdutos((a) => a.map((p) => (p.id === row.id ? { ...p, [columnId]: value } : p)));\r
        toast.success('Produto atualizado', { description: \`\${row.nome} · \${columnId === 'preco' ? 'preço' : columnId}\` });\r
      }}\r
    />\r
  );\r
}

<TabelaDeProdutos />`,id:`edicao`,titulo:`Edição no lugar`,descricao:`Produto, preço e estoque usam texto ou número; categoria usa seleção, reposição abre o calendário e ativo alterna a chave. Clique ou Enter abre o campo; Esc cancela. Estoque negativo falha e o campo continua aberto.`,children:(0,j.jsx)(J,{})}),(0,j.jsx)(T,{codigo:`import { Badge, DataTable, createColumns } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const colPedido = createColumns<Pedido>();

const sessentaPedidos = gerarPedidos(60, 3100);

const statusDoFiltro = ['Pago', 'Pendente', 'Enviado', 'Cancelado'].map((v) => ({ value: v, label: v }));

const colunasFiltraveis = colPedido.columns([\r
  colPedido.accessor('id', { header: 'Pedido', meta: { width: 96 }, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colPedido.accessor('cliente', { header: 'Cliente', meta: { filter: 'text' }, cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colPedido.accessor('cidade', { header: 'Cidade', meta: { filter: 'select' } }),\r
  colPedido.accessor('total', { header: 'Total', meta: { align: 'end', width: 140, filter: 'range' }, cell: (c) => real.format(c.getValue()) }),\r
  colPedido.accessor('status', { header: 'Status', meta: { width: 140, filter: 'select', filterOptions: statusDoFiltro }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

function TabelaComFiltros() {\r
  return <DataTable aria-label="Pedidos com filtros por coluna" data={sessentaPedidos} columns={colunasFiltraveis} getRowId={(p) => p.id} search pageSizeOptions={[10, 25]} />;\r
}

<TabelaComFiltros />`,id:`filtros`,titulo:`Filtro por coluna`,descricao:`Com meta.filter, o cabeçalho ganha um botão de filtro: texto (sem diferenciar acentos), lista de valores (os da coluna ou filterOptions) ou faixa de números. O botão fica marcado enquanto o filtro vale; sem resultado, o estado vazio oferece limpar tudo.`,children:(0,j.jsx)(pe,{})}),(0,j.jsx)(T,{codigo:`import { DataTable, IconButton, Menu, MenuContent, MenuItem, MenuTrigger, createColumns } from '@tessela/web';
import { Copy, Ellipsis, Printer } from 'lucide-react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const data = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

type PedidoLargo = Pedido & { pagamento: string; canal: string; entregador: string; cep: string };

const pagamentos = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Dinheiro'];

const canais = ['Site', 'App', 'WhatsApp', 'Balcão'];

const entregadores = ['Marcos Paulo', 'Rita Gomes', 'Tiago Freitas'];

const pedidosLargos: PedidoLargo[] = gerarPedidos(12, 4200).map((p, i) => ({\r
  ...p, pagamento: pagamentos[i % 4]!, canal: canais[(i * 3) % 4]!, entregador: entregadores[i % 3]!, cep: \`0\${1000 + i * 37}-0\${10 + i}\`,\r
}));

const colLarga = createColumns<PedidoLargo>();

function AcoesDaLinha({ id }: { id: string }) {\r
  return (\r
    <Menu>\r
      <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações do pedido #\${id}\`} size="sm" /></MenuTrigger>\r
      <MenuContent align="end"><MenuItem icon={Printer}>Imprimir</MenuItem><MenuItem icon={Copy}>Duplicar</MenuItem></MenuContent>\r
    </Menu>\r
  );\r
}

const colunasLargas = colLarga.columns([\r
  colLarga.accessor('id', { header: 'Pedido', meta: { width: 96, pin: 'start' }, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colLarga.accessor('cliente', { header: 'Cliente', meta: { width: 180, pin: 'start' }, cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colLarga.accessor('cidade', { header: 'Cidade' }),\r
  colLarga.accessor('cep', { header: 'CEP', meta: { width: 120 } }),\r
  colLarga.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 140 }, cell: (c) => data.format(c.getValue()) }),\r
  colLarga.accessor('canal', { header: 'Canal', meta: { width: 120 } }),\r
  colLarga.accessor('pagamento', { header: 'Pagamento' }),\r
  colLarga.accessor('entregador', { header: 'Entregador' }),\r
  colLarga.accessor('itens', { header: 'Itens', meta: { align: 'end', width: 80 } }),\r
  colLarga.accessor('total', { header: 'Total', meta: { align: 'end', width: 120, pin: 'end' }, cell: (c) => real.format(c.getValue()) }),\r
  colLarga.display({ id: 'acoes', header: () => <span className="ts:sr-only">Ações</span>, meta: { width: 56, pin: 'end', label: 'Ações' }, enableHiding: false, cell: (c) => <AcoesDaLinha id={c.row.original.id} /> }),\r
]);

function TabelaLarga() {\r
  return <DataTable aria-label="Pedidos com colunas fixas" data={pedidosLargos} columns={colunasLargas} getRowId={(p) => p.id} rowLabel={(p) => \`pedido #\${p.id}\`} selectable resizableColumns paginated={false} />;\r
}

<TabelaLarga />`,id:`fixas`,titulo:`Colunas fixas e largura`,descricao:`Pedido e Cliente presos à esquerda, Total e Ações à direita (meta.pin, com largura em px); o meio rola. Com resizableColumns, arraste a borda do cabeçalho, ou foque a alça e use as setas (Shift anda mais). Clique duplo volta à largura original.`,children:(0,j.jsx)(ye,{})}),(0,j.jsx)(T,{codigo:`import { Badge, DataTable, DescriptionList, createColumns } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

type PedidoLargo = Pedido & { pagamento: string; canal: string; entregador: string; cep: string };

const pagamentos = ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Dinheiro'];

const canais = ['Site', 'App', 'WhatsApp', 'Balcão'];

const entregadores = ['Marcos Paulo', 'Rita Gomes', 'Tiago Freitas'];

const pedidosLargos: PedidoLargo[] = gerarPedidos(12, 4200).map((p, i) => ({\r
  ...p, pagamento: pagamentos[i % 4]!, canal: canais[(i * 3) % 4]!, entregador: entregadores[i % 3]!, cep: \`0\${1000 + i * 37}-0\${10 + i}\`,\r
}));

const colLarga = createColumns<PedidoLargo>();

const colunasResumo = colLarga.columns([\r
  colLarga.accessor('id', { header: 'Pedido', meta: { width: 96 }, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colLarga.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colLarga.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  colLarga.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

function TabelaComDetalhes() {\r
  return (\r
    <DataTable\r
      aria-label="Pedidos com detalhes"\r
      data={pedidosLargos.slice(0, 6)}\r
      columns={colunasResumo}\r
      getRowId={(p) => p.id}\r
      rowLabel={(p) => \`pedido #\${p.id}\`}\r
      paginated={false}\r
      renderDetail={(p) => (\r
        <DescriptionList\r
          layout="grid"\r
          columns={3}\r
          items={[\r
            { term: 'Entrega', description: \`\${p.cidade} · CEP \${p.cep}\` },\r
            { term: 'Pagamento', description: p.pagamento },\r
            { term: 'Canal', description: p.canal },\r
            { term: 'Entregador', description: p.entregador },\r
            { term: 'Itens', description: \`\${p.itens} itens\` },\r
            { term: 'Total', description: real.format(p.total) },\r
          ]}\r
        />\r
      )}\r
    />\r
  );\r
}

type Categoria = { id: string; nome: string; produtos: number; vendas: number; filhas?: Categoria[] };

const categorias: Categoria[] = [\r
  { id: 'bebidas', nome: 'Bebidas', produtos: 18, vendas: 12840, filhas: [\r
    { id: 'cafes', nome: 'Cafés', produtos: 9, vendas: 8210, filhas: [{ id: 'espresso', nome: 'Espresso', produtos: 4, vendas: 5120 }, { id: 'coados', nome: 'Coados', produtos: 5, vendas: 3090 }] },\r
    { id: 'chas', nome: 'Chás', produtos: 5, vendas: 2130 },\r
    { id: 'sucos', nome: 'Sucos', produtos: 4, vendas: 2500 },\r
  ] },\r
  { id: 'comidas', nome: 'Comidas', produtos: 14, vendas: 9320, filhas: [{ id: 'paes', nome: 'Pães', produtos: 6, vendas: 4100 }, { id: 'bolos', nome: 'Bolos', produtos: 8, vendas: 5220 }] },\r
  { id: 'graos', nome: 'Grãos para levar', produtos: 7, vendas: 3480 },\r
];

const colCategoria = createColumns<Categoria>();

const colunasDeCategoria = colCategoria.columns([\r
  colCategoria.accessor('nome', { header: 'Categoria', cell: (c) => <span className={c.row.depth === 0 ? 'ts:font-medium' : undefined}>{c.getValue()}</span> }),\r
  colCategoria.accessor('produtos', { header: 'Produtos', meta: { align: 'end', width: 120 } }),\r
  colCategoria.accessor('vendas', { header: 'Vendas no mês', meta: { align: 'end', width: 160 }, cell: (c) => real.format(c.getValue()) }),\r
]);

function TabelaComSubitens() {\r
  return <DataTable aria-label="Vendas por categoria" data={categorias} columns={colunasDeCategoria} getRowId={(c) => c.id} rowLabel={(c) => c.nome} getSubRows={(c) => c.filhas} paginated={false} />;\r
}

<div className="ts:flex ts:flex-col ts:gap-32">\r
  <TabelaComDetalhes />\r
  <TabelaComSubitens />\r
</div>`,id:`detalhes`,titulo:`Detalhes e subitens`,descricao:`renderDetail abre um painel embaixo da linha; getSubRows mostra linhas dentro de linhas, com recuo e o botão na primeira coluna.`,children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:[(0,j.jsx)(xe,{}),(0,j.jsx)(we,{})]})}),(0,j.jsx)(T,{codigo:`import { Badge, DataTable, createColumns } from '@tessela/web';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const data = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const colPedido = createColumns<Pedido>();

const colunasDePedido = colPedido.columns([\r
  colPedido.accessor('id', { header: 'Pedido', meta: { width: 96 }, enableHiding: false, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colPedido.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colPedido.accessor('cidade', { header: 'Cidade' }),\r
  colPedido.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 128 }, cell: (c) => data.format(c.getValue()) }),\r
  colPedido.accessor('itens', { header: 'Itens', meta: { align: 'end', width: 72 } }),\r
  colPedido.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  colPedido.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

const milPedidos = gerarPedidos(10000, 20000);

function TabelaVirtualizada() {\r
  return (\r
    <DataTable\r
      aria-label="Todos os pedidos"\r
      data={milPedidos}\r
      columns={colunasDePedido}\r
      getRowId={(p) => p.id}\r
      search\r
      virtualized\r
      height={440}\r
    />\r
  );\r
}

<TabelaVirtualizada />`,id:`virtualizada`,titulo:`10 mil linhas`,descricao:`Com virtualized, a tabela desenha só as linhas visíveis e rola dentro de 440 px. Busca e ordenação continuam valendo para todas as linhas.`,children:(0,j.jsx)(ae,{})}),(0,j.jsx)(T,{codigo:`import { Badge, DataTable, type PaginationState, type SortingState, createColumns } from '@tessela/web';
import { useEffect, useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const data = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura', 'Fábio Nunes', 'Gabriela Rocha', 'Henrique Alves', 'Isabela Costa', 'João Pedro'];

const cidades = ['Porto Alegre', 'São Paulo', 'Curitiba', 'Recife', 'Belo Horizonte'];

const estados: Status[] = ['Pago', 'Pago', 'Pendente', 'Enviado', 'Cancelado'];

function gerarPedidos(n: number, inicio = 1042): Pedido[] {\r
  return Array.from({ length: n }, (_, i) => ({\r
    id: String(inicio - i),\r
    cliente: clientes[(i * 7) % clientes.length]!,\r
    cidade: cidades[(i * 3) % cidades.length]!,\r
    criado: new Date(2026, 8, 25, 18 - (i % 10), 59 - ((i * 13) % 60)),\r
    itens: 1 + ((i * 5) % 7),\r
    total: Math.round(((i * 7919) % 48000) + 1990) / 100,\r
    status: estados[(i * 3) % estados.length]!,\r
  }));\r
}

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const colPedido = createColumns<Pedido>();

const colunasDePedido = colPedido.columns([\r
  colPedido.accessor('id', { header: 'Pedido', meta: { width: 96 }, enableHiding: false, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colPedido.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colPedido.accessor('cidade', { header: 'Cidade' }),\r
  colPedido.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 128 }, cell: (c) => data.format(c.getValue()) }),\r
  colPedido.accessor('itens', { header: 'Itens', meta: { align: 'end', width: 72 } }),\r
  colPedido.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  colPedido.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

const servidor = gerarPedidos(237, 5000);

function buscarNoServidor(pagina: PaginationState, ordem: SortingState, busca: string) {\r
  return new Promise<{ linhas: Pedido[]; total: number }>((resolver) => {\r
    setTimeout(() => {\r
      let linhas = servidor.filter((p) => \`\${p.id} \${p.cliente}\`.toLowerCase().includes(busca.toLowerCase()));\r
      const o = ordem[0];\r
      if (o) {\r
        const k = o.id as keyof Pedido;\r
        linhas = [...linhas].sort((a, b) => (a[k] < b[k] ? -1 : a[k] > b[k] ? 1 : 0) * (o.desc ? -1 : 1));\r
      }\r
      resolver({ linhas: linhas.slice(pagina.pageIndex * pagina.pageSize, (pagina.pageIndex + 1) * pagina.pageSize), total: linhas.length });\r
    }, 700);\r
  });\r
}

function TabelaDoServidor() {\r
  const [pagina, setPagina] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });\r
  const [ordem, setOrdem] = useState<SortingState>([]);\r
  const [busca, setBusca] = useState('');\r
  const [resposta, setResposta] = useState<{ linhas: Pedido[]; total: number }>({ linhas: [], total: 0 });\r
  const [carregando, setCarregando] = useState(true);\r
  useEffect(() => {\r
    let vivo = true;\r
    setCarregando(true);\r
    void buscarNoServidor(pagina, ordem, busca).then((r) => { if (vivo) { setResposta(r); setCarregando(false); } });\r
    return () => { vivo = false; };\r
  }, [pagina, ordem, busca]);\r
  return (\r
    <DataTable\r
      aria-label="Pedidos do servidor"\r
      data={resposta.linhas}\r
      columns={colunasDePedido}\r
      getRowId={(p) => p.id}\r
      manual\r
      rowCount={resposta.total}\r
      loading={carregando}\r
      search\r
      pagination={pagina}\r
      onPaginationChange={setPagina}\r
      sorting={ordem}\r
      onSortingChange={(s) => { setOrdem(s); setPagina((p) => ({ ...p, pageIndex: 0 })); }}\r
      globalFilter={busca}\r
      onGlobalFilterChange={(b) => { setBusca(b); setPagina((p) => ({ ...p, pageIndex: 0 })); }}\r
      pageSizeOptions={[10, 25, 50]}\r
    />\r
  );\r
}

<TabelaDoServidor />`,id:`servidor`,titulo:`Dados do servidor`,descricao:`Com manual, a tabela não ordena, filtra nem pagina: pede ao servidor (aqui, simulado em 700 ms) e mostra as linhas em Skeleton enquanto espera. Com seleção e rowCount, a barra oferece selecionar todos os resultados; allResultsSelected informa ao app esse estado sem criar ids das páginas que ele ainda não recebeu.`,children:(0,j.jsx)(ce,{})}),(0,j.jsx)(T,{codigo:`import { Badge, Button, DataTable, EmptyState, Select, createColumns } from '@tessela/web';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const data = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

type Status = 'Pago' | 'Pendente' | 'Enviado' | 'Cancelado';

type Pedido = { id: string; cliente: string; cidade: string; criado: Date; itens: number; total: number; status: Status };

const tom: Record<Status, 'success' | 'warning' | 'info' | 'neutral'> = { Pago: 'success', Pendente: 'warning', Enviado: 'info', Cancelado: 'neutral' };

const colPedido = createColumns<Pedido>();

const colunasDePedido = colPedido.columns([\r
  colPedido.accessor('id', { header: 'Pedido', meta: { width: 96 }, enableHiding: false, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  colPedido.accessor('cliente', { header: 'Cliente', cell: (c) => <span className="ts:font-medium">{c.getValue()}</span> }),\r
  colPedido.accessor('cidade', { header: 'Cidade' }),\r
  colPedido.accessor('criado', { header: 'Criado em', sortFn: 'datetime', meta: { width: 128 }, cell: (c) => data.format(c.getValue()) }),\r
  colPedido.accessor('itens', { header: 'Itens', meta: { align: 'end', width: 72 } }),\r
  colPedido.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  colPedido.accessor('status', { header: 'Status', meta: { width: 120 }, cell: (c) => <Badge tone={tom[c.getValue()]} dot>{c.getValue()}</Badge> }),\r
]);

function Estados() {\r
  const [estado, setEstado] = useState<'carregando' | 'vazio'>('carregando');\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12">\r
      <Select aria-label="Estado" className="ts:w-200" options={[{ value: 'carregando', label: 'Carregando' }, { value: 'vazio', label: 'Vazio' }]} value={estado} onValueChange={(v) => setEstado((v as 'carregando' | 'vazio') ?? 'carregando')} />\r
      <DataTable\r
        aria-label="Pedidos (estado)"\r
        data={[]}\r
        columns={colunasDePedido}\r
        getRowId={(p) => p.id}\r
        loading={estado === 'carregando'}\r
        emptyState={<EmptyState size="sm" headingLevel={3} title="Nenhum pedido ainda" description="Os pedidos aparecem aqui assim que chegarem." actions={<Button size="sm" leadingIcon={Plus}>Criar pedido</Button>} />}\r
      />\r
    </div>\r
  );\r
}

<Estados />`,id:`estados`,titulo:`Carregando e vazio`,children:(0,j.jsx)(le,{})}),(0,j.jsx)(T,{id:`temas`,titulo:`Temas e densidades`,descricao:`Linha de 44 px e cabeçalho de 40 px na densidade confortável; 32 e 32 px na compacta.`,children:(0,j.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[i.map(e=>(0,j.jsx)(E,{theme:e,titulo:S[e],children:(0,j.jsx)(X,{rotulo:`Pedidos no tema ${S[e]}`})},e)),n.map(e=>(0,j.jsx)(E,{density:e,titulo:k[e],children:(0,j.jsx)(X,{rotulo:`Pedidos na densidade ${k[e]}`})},e))]})}),(0,j.jsx)(T,{semCaixa:!0,id:`colunas`,titulo:`Colunas`,descricao:`As colunas são declaradas com o ajudante createColumns, fora do componente.`,children:(0,j.jsx)(_,{flush:!0,children:(0,j.jsx)(`pre`,{tabIndex:0,role:`region`,"aria-label":`Código de integração da DataTable`,className:`ts:overflow-x-auto ts:p-16 ts:font-mono ts:text-code ts:text-fg-secondary`,children:`const col = createColumns<Pedido>();
const colunas = col.columns([
  col.accessor('id', { header: 'Pedido', meta: { width: 96 }, enableHiding: false }),
  col.accessor('cliente', { header: 'Cliente' }),
  col.accessor('total', { header: 'Total', meta: { align: 'end' }, cell: (c) => real.format(c.getValue()) }),
  col.accessor('estoque', { header: 'Estoque', meta: { align: 'end', editable: 'number' } }),
]);

<DataTable aria-label="Pedidos" data={pedidos} columns={colunas} getRowId={(p) => p.id} search selectable />`})})}),(0,j.jsx)(T,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-label-m`,children:`DataTable`}),(0,j.jsx)(x,{rotulo:`Tabela de propriedades da DataTable`,itens:[{nome:`data / columns / getRowId`,tipo:`—`,descricao:`Linhas, colunas (createColumns) e o id estável de cada linha. Obrigatórios, com aria-label.`},{nome:`search / searchPlaceholder`,tipo:`boolean / string`,padrao:`false`,descricao:`Busca em todas as colunas de texto e número, sem diferenciar acentos.`},{nome:`filters`,tipo:`ReactNode`,descricao:`Filtros extras ao lado da busca; o app filtra data.`},{nome:`columnToggle`,tipo:`boolean`,padrao:`false`,descricao:`Botão Colunas para mostrar e esconder.`},{nome:`selectable / rowLabel / bulkActions`,tipo:`—`,descricao:`Caixas de seleção, nome de cada linha e ações da barra de lote ({ ids, rows, allResultsSelected, rowCount, clear }). O cabeçalho seleciona a página quando há paginação e todas as linhas sem paginação ou com virtualized.`},{nome:`paginated / pageSizeOptions`,tipo:`boolean / number[]`,padrao:`true / [10, 25, 50, 100]`,descricao:`Paginação no rodapé; começa em 25 por página.`},{nome:`virtualized / height`,tipo:`boolean / number`,padrao:`false / 480`,descricao:`Desenha só as linhas visíveis; rola dentro da altura; não pagina.`},{nome:`manual / rowCount / allResultsSelected`,tipo:`boolean / number / boolean`,padrao:`false`,descricao:`O servidor ordena, filtra e pagina; data é a página pedida. Com seleção, a barra pode marcar todos os rowCount resultados sem inventar ids fora da página.`},{nome:`onRowClick / getRowHref`,tipo:`(row) => void / (row) => string`,descricao:`Abre a linha por clique, Enter ou Espaço. O clique nos controles da linha mantém a ação do próprio controle.`},{nome:`sorting, globalFilter, pagination, rowSelection, columnVisibility`,tipo:`estado + on…Change`,descricao:`Estado controlado, parte por parte. Sem ele, a tabela guarda o próprio.`},{nome:`loading / emptyState`,tipo:`boolean / ReactNode`,descricao:`Linhas em Skeleton; estado vazio próprio.`},{nome:`onCellEdit`,tipo:`({ row, columnId, value }) => void | Promise`,descricao:`Salva células com meta.edit. Promessa que falha deixa o campo aberto.`},{nome:`resizableColumns`,tipo:`boolean`,padrao:`false`,descricao:`Largura das colunas pela borda do cabeçalho (mouse, toque ou setas).`},{nome:`renderDetail`,tipo:`(row) => ReactNode`,descricao:`Painel de detalhes embaixo da linha. Não vale na virtualizada.`},{nome:`getSubRows`,tipo:`(row) => row[] | undefined`,descricao:`Linhas dentro de linhas, abertas pela primeira coluna.`},{nome:`columnFilters, expanded, columnSizing`,tipo:`estado + on…Change`,descricao:`Filtros por coluna, linhas abertas e larguras, controlados se precisar.`}]})]}),(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,j.jsx)(`p`,{className:`ts:text-label-m`,children:`meta da coluna`}),(0,j.jsx)(x,{rotulo:`Tabela de propriedades de meta da coluna`,itens:[{nome:`align`,tipo:`'start' | 'end'`,padrao:`'start'`,descricao:`end para números: à direita e com algarismos de largura fixa.`},{nome:`width`,tipo:`number | string`,descricao:`Largura. Na tabela virtualizada, dê largura às colunas.`},{nome:`edit / editOptions`,tipo:`'text' | 'number' | 'select' | 'date' | 'boolean' / SelectOption[]`,descricao:`Célula editável no lugar e as opções da seleção.`},{nome:`label`,tipo:`string`,descricao:`Nome em texto quando o cabeçalho não é texto.`},{nome:`pin`,tipo:`'start' | 'end'`,descricao:`Prende a coluna na borda. Declare as fixas no começo ou no fim, com width em px.`},{nome:`filter / filterOptions`,tipo:`'text' | 'select' | 'range' / { value, label }[]`,descricao:`Filtro no cabeçalho e as opções da lista.`}]})]})]})}),(0,j.jsx)(T,{semCaixa:!0,id:`toque`,titulo:`Toque`,children:(0,j.jsx)(M,{itens:[(0,j.jsx)(j.Fragment,{children:`No celular e no tablet, cada controle da tabela aceita um toque de 44 × 44 px: ordenar, filtrar, expandir, abrir subitens, editar a célula e redimensionar a coluna. Só a área de toque cresce; o desenho, a altura das linhas e a do cabeçalho não mudam. Com mouse, nada muda.`}),(0,j.jsx)(j.Fragment,{children:`A alça de redimensionar fica centrada na borda da coluna, por baixo dos botões do título: tocar no título sempre ordena. Para redimensionar pelo toque, arraste a partir do espaço livre junto à borda. Pelo teclado, use as setas (Shift+setas para passos maiores). Numa coluna estreita cujo título ocupa toda a largura, sobra pouco espaço para a alça.`}),(0,j.jsx)(j.Fragment,{children:`Ao editar uma célula pelo toque, o campo mede 44 px de altura nas duas densidades. Na confortável, ocupa a linha. Na compacta, a linha continua com 32 px e o campo passa dela, por cima das linhas vizinhas, só enquanto edita: centrado na linha, só para baixo na primeira e só para cima na última.`}),(0,j.jsx)(j.Fragment,{children:`Com toque, o filtro cresce para o lado oposto ao título, e o popover pode abrir até 10 px mais longe do ícone. Um título mais estreito que 44 px alarga o botão de ordenar e empurra o filtro (nenhuma coluna do catálogo cai nesse caso).`}),(0,j.jsx)(j.Fragment,{children:`Na densidade compacta, as áreas de toque passam da linha de 32 px e se sobrepõem às das linhas vizinhas. Para uso principal no toque, prefira a confortável.`})]})}),(0,j.jsx)(T,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,j.jsx)(M,{itens:[(0,j.jsxs)(j.Fragment,{children:[`É uma `,(0,j.jsx)(D,{children:`table`}),` com nome; os cabeçalhos ordenáveis são botões e o cabeçalho ativo tem `,(0,j.jsx)(D,{children:`aria-sort`}),`.`]}),(0,j.jsxs)(j.Fragment,{children:[`Cada caixa de seleção tem nome (“Selecionar pedido #1042”); a linha selecionada tem `,(0,j.jsx)(D,{children:`aria-selected`}),`. Shift+clique seleciona um intervalo.`]}),(0,j.jsxs)(j.Fragment,{children:[`Uma linha com `,(0,j.jsx)(D,{children:`onRowClick`}),` ou `,(0,j.jsx)(D,{children:`getRowHref`}),` recebe foco; Enter e Espaço a abrem. As caixas e os outros controles mantêm o próprio comportamento.`]}),(0,j.jsx)(j.Fragment,{children:`A célula editável é um botão (“Estoque: 18, editar”). Enter abre o campo; Enter salva; Esc cancela; o foco volta à célula.`}),(0,j.jsx)(j.Fragment,{children:`Uma região de status anuncia “Carregando” e o número de resultados da busca e dos filtros.`}),(0,j.jsx)(j.Fragment,{children:`O botão de filtro diz a coluna e se está ativo (“Filtrar Status, filtro ativo”); o painel tem o nome da coluna.`}),(0,j.jsxs)(j.Fragment,{children:[`A alça de largura é um `,(0,j.jsx)(D,{children:`separator`}),` com o valor em px: foque e use ← →.`]}),(0,j.jsxs)(j.Fragment,{children:[`O botão de detalhes e o de subitens têm `,(0,j.jsx)(D,{children:`aria-expanded`}),`; o de detalhes aponta para o painel com `,(0,j.jsx)(D,{children:`aria-controls`}),`.`]}),(0,j.jsx)(j.Fragment,{children:`Com toque, cada controle da tabela tem alvo de 44 × 44 px (ver Toque, abaixo).`}),(0,j.jsxs)(j.Fragment,{children:[`Na tabela virtualizada, as linhas têm `,(0,j.jsx)(D,{children:`aria-rowindex`}),` e a tabela, `,(0,j.jsx)(D,{children:`aria-rowcount`}),`, para o leitor de tela saber o total.`]})]})})]})}function Ee(){let[e,t]=(0,A.useState)(0),[r,a]=(0,A.useState)(25);return(0,j.jsxs)(`article`,{children:[(0,j.jsx)(w,{etapa:`Componente 24 · aprovado`,titulo:`Pagination`,descricao:(0,j.jsx)(j.Fragment,{children:`Rodapé de uma lista paginada: o intervalo mostrado, as linhas por página e anterior/próxima. A DataTable já usa; sozinho, serve para listas que não são tabela.`})}),(0,j.jsx)(T,{codigo:`import { Card, Pagination } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-24">\r
  <Card><Pagination aria-label="Paginação com seletor de linhas" pageIndex={pagina} pageSize={tamanho} rowCount={1240} onPageChange={setPagina} onPageSizeChange={(n) => { setTamanho(n); setPagina(0); }} /></Card>\r
  <Card><Pagination aria-label="Paginação sem seletor de linhas" pageIndex={0} pageSize={10} rowCount={37} onPageChange={() => {}} /></Card>\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Números no formato da localidade. Sem onPageSizeChange, o seletor de linhas por página some.`,children:(0,j.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,j.jsx)(_,{children:(0,j.jsx)(c,{"aria-label":`Paginação com seletor de linhas`,pageIndex:e,pageSize:r,rowCount:1240,onPageChange:t,onPageSizeChange:e=>{a(e),t(0)}})}),(0,j.jsx)(_,{children:(0,j.jsx)(c,{"aria-label":`Paginação sem seletor de linhas`,pageIndex:0,pageSize:10,rowCount:37,onPageChange:()=>{}})})]})}),(0,j.jsx)(T,{id:`temas`,titulo:`Temas e densidades`,children:(0,j.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[i.map(e=>(0,j.jsx)(E,{theme:e,titulo:S[e],children:(0,j.jsx)(c,{"aria-label":`Paginação no tema ${S[e]}`,pageIndex:2,pageSize:25,rowCount:1240,onPageChange:()=>{},onPageSizeChange:()=>{}})},e)),n.map(e=>(0,j.jsx)(E,{density:e,titulo:k[e],children:(0,j.jsx)(c,{"aria-label":`Paginação na densidade ${k[e]}`,pageIndex:2,pageSize:25,rowCount:1240,onPageChange:()=>{},onPageSizeChange:()=>{}})},e))]})}),(0,j.jsx)(T,{codigo:`import { Card, Pagination } from '@tessela/web';

<Card><Pagination aria-label="Paginação da lista de pedidos" pageIndex={pagina} pageSize={tamanho} rowCount={1240} onPageChange={setPagina} onPageSizeChange={(n) => { setTamanho(n); setPagina(0); }} /></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Rodapé da lista de pedidos.`,children:(0,j.jsx)(_,{children:(0,j.jsx)(c,{"aria-label":`Paginação da lista de pedidos`,pageIndex:e,pageSize:r,rowCount:1240,onPageChange:t,onPageSizeChange:e=>{a(e),t(0)}})})}),(0,j.jsx)(T,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,j.jsx)(x,{itens:[{nome:`pageIndex / pageSize / rowCount`,tipo:`number`,descricao:`Página atual (a partir de 0), tamanho e total de registros.`},{nome:`onPageChange`,tipo:`(pageIndex) => void`,descricao:`Anterior e próxima.`},{nome:`onPageSizeChange / pageSizeOptions`,tipo:`(n) => void / number[]`,padrao:`— / [10, 25, 50, 100]`,descricao:`Seletor de linhas por página.`}]})}),(0,j.jsx)(T,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,j.jsx)(M,{itens:[(0,j.jsxs)(j.Fragment,{children:[`É um `,(0,j.jsx)(D,{children:`nav`}),` chamado “Paginação”.`]}),(0,j.jsx)(j.Fragment,{children:`Anterior e próxima são botões com nome e dica; ficam desativados nas pontas.`}),(0,j.jsx)(j.Fragment,{children:`O seletor tem o nome “Linhas por página”.`})]})})]})}export{Ee as PaginationPagina,Te as TabelaPagina};