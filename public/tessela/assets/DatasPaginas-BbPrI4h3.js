import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,sr as i}from"./Codigo-Dgz1In5l.js";import{n as a,t as o}from"./Table-BtEE3qm2.js";import{n as s,r as c,t as l}from"./DatePicker-CzUMwvCG.js";import{s as u}from"./tiptap-jvs8iIPE.js";import{t as d}from"./Select-DFPozajq.js";import{a as f}from"./Estrutura-Bg5zrcqs.js";import{t as p}from"./Badge-g4zT1uda.js";import{_ as m,b as h,f as g,g as _,h as v,p as y,y as b}from"./index-3SU4ioj-.js";var x=e(t(),1),S=u();function C({itens:e}){return(0,S.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,S.jsx)(`li`,{children:e},t))})}var w=new Date,T=e=>new Date(w.getFullYear(),w.getMonth(),w.getDate()+e),E=e=>e.getDay()===0||e.getDay()===6,D=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`}),O=new Intl.DateTimeFormat(`pt-BR`,{day:`2-digit`,month:`2-digit`,year:`numeric`}),k=[{value:`manha`,label:`08:00 – 12:00`},{value:`tarde`,label:`13:00 – 18:00`},{value:`noite`,label:`18:00 – 21:00`}];function A(){let[e,t]=(0,x.useState)(null),[n,r]=(0,x.useState)(!1);return(0,S.jsx)(f,{title:`Agendar entrega`,description:`Pedido #1042 · Ana Souza`,children:(0,S.jsxs)(`form`,{onSubmit:t=>{t.preventDefault(),r(!e)},className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(l,{label:`Data da entrega`,value:e,onValueChange:e=>{t(e),r(!1)},min:T(1),max:T(30),isDateDisabled:E,description:`Dias úteis, a partir de amanhã.`,error:n?`Escolha a data da entrega.`:void 0}),(0,S.jsx)(d,{label:`Janela`,options:k,defaultValue:`tarde`}),(0,S.jsxs)(`div`,{className:`ts:col-span-2 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16 ts:max-md:col-span-1`,children:[(0,S.jsx)(i,{variant:`ghost`,type:`button`,onClick:()=>{t(null),r(!1)},children:`Cancelar`}),(0,S.jsx)(i,{type:`submit`,children:`Agendar`})]})]})})}function j(){let[e,t]=(0,x.useState)(w);return(0,S.jsxs)(`article`,{children:[(0,S.jsx)(g,{etapa:`Componente 25 · aprovado`,titulo:`DatePicker`,descricao:(0,S.jsxs)(S.Fragment,{children:[`Campo de uma data: a caixa dos campos abre um calendário. O texto segue a localidade (25/09/2026 no pt-BR) e a semana começa no dia que a localidade usa. O `,(0,S.jsx)(y,{children:`Calendar`}),` também existe sozinho.`]})}),(0,S.jsx)(_,{codigo:`import { DatePicker } from '@tessela/web';

const hoje = new Date();

<div className="ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
  <DatePicker label="Padrão" />\r
  <DatePicker label="Escolhido" defaultValue={hoje} />\r
  <DatePicker label="Com ajuda" description="Quando o pedido chega." />\r
  <DatePicker label="Com erro" error="Escolha a data." />\r
  <DatePicker label="Opcional" optional />\r
  <DatePicker label="Desativado" disabled defaultValue={hoje} />\r
  <DatePicker label="sm" size="sm" defaultValue={hoje} />\r
  <DatePicker label="lg" size="lg" defaultValue={hoje} />\r
  <DatePicker label="Sem limpar" clearable={false} defaultValue={hoje} />\r
</div>`,id:`estados`,titulo:`Estados e tamanhos`,descricao:`A mesma caixa do Input e do Select: rótulo, ajuda, erro, opcional e desativado. O X limpa a data.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(l,{label:`Padrão`}),(0,S.jsx)(l,{label:`Escolhido`,defaultValue:w}),(0,S.jsx)(l,{label:`Com ajuda`,description:`Quando o pedido chega.`}),(0,S.jsx)(l,{label:`Com erro`,error:`Escolha a data.`}),(0,S.jsx)(l,{label:`Opcional`,optional:!0}),(0,S.jsx)(l,{label:`Desativado`,disabled:!0,defaultValue:w}),(0,S.jsx)(l,{label:`sm`,size:`sm`,defaultValue:w}),(0,S.jsx)(l,{label:`lg`,size:`lg`,defaultValue:w}),(0,S.jsx)(l,{label:`Sem limpar`,clearable:!1,defaultValue:w})]})}),(0,S.jsx)(_,{codigo:`import { DatePicker } from '@tessela/web';

const hoje = new Date();

const dia = (n: number) => new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + n);

const fimDeSemana = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-md:grid-cols-1">\r
  <DatePicker label="Próximos 30 dias" min={hoje} max={dia(30)} />\r
  <DatePicker label="Só dias úteis" isDateDisabled={fimDeSemana} />\r
</div>`,id:`limites`,titulo:`Limites`,descricao:`min e max desativam o que fica fora; isDateDisabled desativa datas específicas. Datas desativadas aparecem apagadas e não podem ser escolhidas.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(l,{label:`Próximos 30 dias`,min:w,max:T(30)}),(0,S.jsx)(l,{label:`Só dias úteis`,isDateDisabled:E})]})}),(0,S.jsx)(_,{codigo:`import { Calendar, Card } from '@tessela/web';

const dataCurta = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

<div className="ts:flex ts:flex-wrap ts:items-start ts:gap-24">\r
  <Card><Calendar value={solta} onValueChange={setSolta} /></Card>\r
  <p className="ts:text-body-m ts:text-fg-secondary">Escolhida: <span className="ts:tabular-nums ts:text-fg-primary">{solta ? dataCurta.format(solta) : '—'}</span></p>\r
</div>`,id:`calendario`,titulo:`Calendar`,descricao:`O calendário sozinho, para um painel lateral ou uma agenda. Hoje tem um ponto embaixo do número.`,children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-start ts:gap-24`,children:[(0,S.jsx)(f,{children:(0,S.jsx)(c,{value:e,onValueChange:t})}),(0,S.jsxs)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:[`Escolhida: `,(0,S.jsx)(`span`,{className:`ts:tabular-nums ts:text-fg-primary`,children:e?O.format(e):`—`})]})]})}),(0,S.jsx)(_,{id:`temas`,titulo:`Temas e densidades`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,S.jsx)(v,{theme:e,titulo:h[e],children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,S.jsx)(l,{label:`Entrega`,defaultValue:w}),(0,S.jsx)(c,{value:w})]})},e)),n.map(e=>(0,S.jsx)(v,{density:e,titulo:b[e],children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,S.jsx)(l,{label:`Entrega`,defaultValue:w}),(0,S.jsx)(c,{value:w})]})},e))]})}),(0,S.jsx)(_,{codigo:`import { Button, Card, DatePicker, Select } from '@tessela/web';
import { useState } from 'react';

const hoje = new Date();

const dia = (n: number) => new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + n);

const fimDeSemana = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

const janelas = [{ value: 'manha', label: '08:00 – 12:00' }, { value: 'tarde', label: '13:00 – 18:00' }, { value: 'noite', label: '18:00 – 21:00' }];

function AgendarEntrega() {\r
  const [data, setData] = useState<Date | null>(null);\r
  const [erro, setErro] = useState(false);\r
  return (\r
    <Card title="Agendar entrega" description="Pedido #1042 · Ana Souza">\r
      <form\r
        onSubmit={(e) => { e.preventDefault(); setErro(!data); }}\r
        className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1"\r
      >\r
        <DatePicker\r
          label="Data da entrega"\r
          value={data}\r
          onValueChange={(d) => { setData(d); setErro(false); }}\r
          min={dia(1)}\r
          max={dia(30)}\r
          isDateDisabled={fimDeSemana}\r
          description="Dias úteis, a partir de amanhã."\r
          error={erro ? 'Escolha a data da entrega.' : undefined}\r
        />\r
        <Select label="Janela" options={janelas} defaultValue="tarde" />\r
        <div className="ts:col-span-2 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16 ts:max-md:col-span-1">\r
          <Button variant="ghost" type="button" onClick={() => { setData(null); setErro(false); }}>Cancelar</Button>\r
          <Button type="submit">Agendar</Button>\r
        </div>\r
      </form>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-640"><AgendarEntrega /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Agendamento de entrega: só dias úteis, de amanhã a 30 dias. Envie sem data para ver o erro.`,children:(0,S.jsx)(`div`,{className:`ts:max-w-640`,children:(0,S.jsx)(A,{})})}),(0,S.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,S.jsx)(`p`,{className:`ts:text-label-m`,children:`DatePicker`}),(0,S.jsx)(m,{rotulo:`Tabela de propriedades do DatePicker`,itens:[{nome:`value / defaultValue / onValueChange`,tipo:`Date | null`,descricao:`Data escolhida (controlada ou inicial). Limpar devolve null.`},{nome:`label / description / error / optional / placeholder`,tipo:`—`,descricao:`Como no Input. Placeholder padrão: “Escolha a data”.`},{nome:`min / max / isDateDisabled`,tipo:`Date / (d) => boolean`,descricao:`Datas fora do limite ou desativadas.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Alturas dos controles.`},{nome:`clearable`,tipo:`boolean`,padrao:`true`,descricao:`Mostra o X para limpar.`},{nome:`name / required`,tipo:`string / boolean`,descricao:`name envia a data como AAAA-MM-DD; required bloqueia o envio vazio.`}]})]}),(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,S.jsx)(`p`,{className:`ts:text-label-m`,children:`Calendar`}),(0,S.jsx)(m,{rotulo:`Tabela de propriedades do Calendar`,itens:[{nome:`mode`,tipo:`'single' | 'range'`,padrao:`'single'`,descricao:`Uma data ou um período ({ from, to }).`},{nome:`value / onValueChange`,tipo:`Date | DateRange`,descricao:`No período, o primeiro clique marca o início e o segundo, o fim.`},{nome:`numberOfMonths / defaultMonth`,tipo:`number / Date`,padrao:`1 (2 no período)`,descricao:`Meses lado a lado e mês inicial.`},{nome:`min / max / isDateDisabled`,tipo:`—`,descricao:`Como no DatePicker.`}]})]})]})}),(0,S.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,S.jsx)(C,{itens:[(0,S.jsx)(S.Fragment,{children:`O campo é um botão com o rótulo e a data no nome (“Entrega 25/09/2026”). Enter ou Espaço abrem o calendário, com o foco na data escolhida (ou em hoje).`}),(0,S.jsx)(S.Fragment,{children:`No calendário: setas andam pelos dias; Home e End vão ao começo e ao fim da semana; PageUp e PageDown trocam o mês; com Shift, o ano. Enter escolhe; Esc fecha e devolve o foco ao campo.`}),(0,S.jsxs)(S.Fragment,{children:[`Cada dia tem o nome completo (“sexta-feira, 25 de setembro de 2026”); hoje tem `,(0,S.jsx)(y,{children:`aria-current="date"`}),`; o escolhido, `,(0,S.jsx)(y,{children:`aria-selected`}),`.`]}),(0,S.jsx)(S.Fragment,{children:`O mês é anunciado quando muda. Datas desativadas são anunciadas como indisponíveis.`}),(0,S.jsx)(S.Fragment,{children:`Com toque, o botão de abrir o calendário e o de limpar têm alvo de 44 × 44 px, mesmo com o desenho menor. A caixa do campo não muda.`})]})})]})}var M=[`Ana Souza`,`Bruno Lima`,`Carla Dias`,`Diego Reis`,`Elisa Moura`],N=Array.from({length:90},(e,t)=>({id:String(3e3-t),data:T(-Math.floor(t/2)),cliente:M[t*3%5],total:Math.round(t*6151%32e3+1500)/100,status:t%4==0?`Pendente`:`Pago`})),P=a(),F=P.columns([P.accessor(`id`,{header:`Pedido`,meta:{width:96},cell:e=>(0,S.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.getValue()]})}),P.accessor(`data`,{header:`Data`,sortFn:`datetime`,meta:{width:120},cell:e=>O.format(e.getValue())}),P.accessor(`cliente`,{header:`Cliente`}),P.accessor(`total`,{header:`Total`,meta:{align:`end`,width:120},cell:e=>D.format(e.getValue())}),P.accessor(`status`,{header:`Status`,meta:{width:110},cell:e=>(0,S.jsx)(p,{tone:e.getValue()===`Pago`?`success`:`warning`,dot:!0,children:e.getValue()})})]);function I(){let[e,t]=(0,x.useState)({from:T(-6),to:w}),n=(0,x.useMemo)(()=>{if(!e?.to)return N;let t=new Date(e.from.getFullYear(),e.from.getMonth(),e.from.getDate()).getTime(),n=new Date(e.to.getFullYear(),e.to.getMonth(),e.to.getDate()+1).getTime();return N.filter(e=>e.data.getTime()>=t&&e.data.getTime()<n)},[e]),r=n.filter(e=>e.status===`Pago`).reduce((e,t)=>e+t.total,0);return(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-md:grid-cols-1`,children:[(0,S.jsxs)(f,{children:[(0,S.jsx)(`p`,{className:`ts:text-body-s ts:text-fg-secondary`,children:`Vendas pagas`}),(0,S.jsx)(`p`,{className:`ts:mt-4 ts:text-heading-l ts:tabular-nums`,children:D.format(r)})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(`p`,{className:`ts:text-body-s ts:text-fg-secondary`,children:`Pedidos`}),(0,S.jsx)(`p`,{className:`ts:mt-4 ts:text-heading-l ts:tabular-nums`,children:n.length})]}),(0,S.jsxs)(f,{children:[(0,S.jsx)(`p`,{className:`ts:text-body-s ts:text-fg-secondary`,children:`Ticket médio`}),(0,S.jsx)(`p`,{className:`ts:mt-4 ts:text-heading-l ts:tabular-nums`,children:D.format(n.length?r/n.length:0)})]})]}),(0,S.jsx)(o,{"aria-label":`Vendas do período`,data:n,columns:F,getRowId:e=>e.id,search:!0,filters:(0,S.jsx)(s,{"aria-label":`Período`,value:e,onValueChange:t,max:w,className:`ts:w-280 ts:max-w-full`}),pageSizeOptions:[10,25,50]})]})}var L=[{label:`Este trimestre`,range:()=>({from:new Date(w.getFullYear(),Math.floor(w.getMonth()/3)*3,1),to:w})},{label:`Este ano`,range:()=>({from:new Date(w.getFullYear(),0,1),to:w})}];function R(){return(0,S.jsxs)(`article`,{children:[(0,S.jsx)(g,{etapa:`Componente 26 · aprovado`,titulo:`DateRangePicker`,descricao:(0,S.jsx)(S.Fragment,{children:`Campo de período para filtros e relatórios. O primeiro clique marca o início e o segundo, o fim; até lá, o período acompanha o mouse. Atalhos à esquerda aplicam períodos comuns de uma vez.`})}),(0,S.jsx)(_,{codigo:`import { DateRangePicker } from '@tessela/web';

const hoje = new Date();

const dia = (n: number) => new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + n);

<div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1">\r
  <DateRangePicker label="Padrão" />\r
  <DateRangePicker label="Escolhido" defaultValue={{ from: dia(-6), to: hoje }} />\r
  <DateRangePicker label="Com erro" error="Escolha o período." />\r
  <DateRangePicker label="Desativado" disabled defaultValue={{ from: dia(-6), to: hoje }} />\r
  <DateRangePicker label="Até hoje" description="Datas futuras ficam desativadas." max={hoje} />\r
  <DateRangePicker label="sm" size="sm" defaultValue={{ from: dia(-29), to: hoje }} />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Em tela larga (768 px ou mais), dois meses lado a lado; em tela estreita, um mês e os atalhos em cima.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(s,{label:`Padrão`}),(0,S.jsx)(s,{label:`Escolhido`,defaultValue:{from:T(-6),to:w}}),(0,S.jsx)(s,{label:`Com erro`,error:`Escolha o período.`}),(0,S.jsx)(s,{label:`Desativado`,disabled:!0,defaultValue:{from:T(-6),to:w}}),(0,S.jsx)(s,{label:`Até hoje`,description:`Datas futuras ficam desativadas.`,max:w}),(0,S.jsx)(s,{label:`sm`,size:`sm`,defaultValue:{from:T(-29),to:w}})]})}),(0,S.jsx)(_,{codigo:`import { DateRangePicker } from '@tessela/web';

const hoje = new Date();

const atalhosDeTrimestre = [\r
  { label: 'Este trimestre', range: () => ({ from: new Date(hoje.getFullYear(), Math.floor(hoje.getMonth() / 3) * 3, 1), to: hoje }) },\r
  { label: 'Este ano', range: () => ({ from: new Date(hoje.getFullYear(), 0, 1), to: hoje }) },\r
];

<div className="ts:grid ts:grid-cols-2 ts:gap-16 ts:max-md:grid-cols-1">\r
  <DateRangePicker label="Atalhos próprios" presets={atalhosDeTrimestre} />\r
  <DateRangePicker label="Sem atalhos" presets={false} />\r
</div>`,id:`atalhos`,titulo:`Atalhos`,descricao:`Os padrões são hoje, ontem, 7 e 30 dias, este mês e mês passado. O app pode trocar a lista ou tirar os atalhos.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(s,{label:`Atalhos próprios`,presets:L}),(0,S.jsx)(s,{label:`Sem atalhos`,presets:!1})]})}),(0,S.jsx)(_,{id:`temas`,titulo:`Temas e densidades`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,S.jsx)(v,{theme:e,titulo:h[e],children:(0,S.jsx)(s,{label:`Período`,defaultValue:{from:T(-6),to:w}})},e)),n.map(e=>(0,S.jsx)(v,{density:e,titulo:b[e],children:(0,S.jsx)(s,{label:`Período`,defaultValue:{from:T(-6),to:w}})},e))]})}),(0,S.jsx)(_,{codigo:`import { Badge, Card, DataTable, type DateRange, DateRangePicker, createColumns } from '@tessela/web';
import { useMemo, useState } from 'react';

const hoje = new Date();

const dia = (n: number) => new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + n);

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const dataCurta = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });

type Venda = { id: string; data: Date; cliente: string; total: number; status: 'Pago' | 'Pendente' };

const clientes = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Diego Reis', 'Elisa Moura'];

const vendas: Venda[] = Array.from({ length: 90 }, (_, i) => ({\r
  id: String(3000 - i),\r
  data: dia(-Math.floor(i / 2)),\r
  cliente: clientes[(i * 3) % 5]!,\r
  total: Math.round(((i * 6151) % 32000) + 1500) / 100,\r
  status: i % 4 === 0 ? 'Pendente' : 'Pago',\r
}));

const col = createColumns<Venda>();

const colunas = col.columns([\r
  col.accessor('id', { header: 'Pedido', meta: { width: 96 }, cell: (c) => <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{c.getValue()}</span> }),\r
  col.accessor('data', { header: 'Data', sortFn: 'datetime', meta: { width: 120 }, cell: (c) => dataCurta.format(c.getValue()) }),\r
  col.accessor('cliente', { header: 'Cliente' }),\r
  col.accessor('total', { header: 'Total', meta: { align: 'end', width: 120 }, cell: (c) => real.format(c.getValue()) }),\r
  col.accessor('status', { header: 'Status', meta: { width: 110 }, cell: (c) => <Badge tone={c.getValue() === 'Pago' ? 'success' : 'warning'} dot>{c.getValue()}</Badge> }),\r
]);

function RelatorioDeVendas() {\r
  const [periodo, setPeriodo] = useState<DateRange | null>({ from: dia(-6), to: hoje });\r
  const filtradas = useMemo(() => {\r
    if (!periodo?.to) return vendas;\r
    const ini = new Date(periodo.from.getFullYear(), periodo.from.getMonth(), periodo.from.getDate()).getTime();\r
    const fim = new Date(periodo.to.getFullYear(), periodo.to.getMonth(), periodo.to.getDate() + 1).getTime();\r
    return vendas.filter((v) => v.data.getTime() >= ini && v.data.getTime() < fim);\r
  }, [periodo]);\r
  const soma = filtradas.filter((v) => v.status === 'Pago').reduce((t, v) => t + v.total, 0);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-16">\r
      <div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-md:grid-cols-1">\r
        <Card><p className="ts:text-body-s ts:text-fg-secondary">Vendas pagas</p><p className="ts:mt-4 ts:text-heading-l ts:tabular-nums">{real.format(soma)}</p></Card>\r
        <Card><p className="ts:text-body-s ts:text-fg-secondary">Pedidos</p><p className="ts:mt-4 ts:text-heading-l ts:tabular-nums">{filtradas.length}</p></Card>\r
        <Card><p className="ts:text-body-s ts:text-fg-secondary">Ticket médio</p><p className="ts:mt-4 ts:text-heading-l ts:tabular-nums">{real.format(filtradas.length ? soma / filtradas.length : 0)}</p></Card>\r
      </div>\r
      <DataTable\r
        aria-label="Vendas do período"\r
        data={filtradas}\r
        columns={colunas}\r
        getRowId={(v) => v.id}\r
        search\r
        filters={<DateRangePicker aria-label="Período" value={periodo} onValueChange={setPeriodo} max={hoje} className="ts:w-280 ts:max-w-full" />}\r
        pageSizeOptions={[10, 25, 50]}\r
      />\r
    </div>\r
  );\r
}

<RelatorioDeVendas />`,id:`em-uso`,titulo:`Em uso`,descricao:`Relatório de vendas: o período na barra da tabela filtra os pedidos e os indicadores.`,children:(0,S.jsx)(I,{})}),(0,S.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,S.jsx)(m,{itens:[{nome:`value / defaultValue / onValueChange`,tipo:`{ from, to } | null`,descricao:`O período só muda quando as duas pontas estão escolhidas. Limpar devolve null.`},{nome:`presets`,tipo:`boolean | { label, range }[]`,padrao:`true`,descricao:`Atalhos. range é uma função, calculada ao abrir.`},{nome:`min / max / isDateDisabled`,tipo:`—`,descricao:`Como no DatePicker.`},{nome:`label / description / error / size / clearable`,tipo:`—`,descricao:`Como no DatePicker. Placeholder padrão: “Escolha o período”.`},{nome:`name / required`,tipo:`string / boolean`,descricao:`name envia início e fim como name[from] e name[to]; required bloqueia o envio sem as duas datas.`}]})}),(0,S.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,S.jsx)(C,{itens:[(0,S.jsx)(S.Fragment,{children:`O mesmo teclado do calendário do DatePicker; Enter marca o início e, depois, o fim.`}),(0,S.jsxs)(S.Fragment,{children:[`Os atalhos são botões num grupo “Períodos”; o atalho do período atual fica marcado (`,(0,S.jsx)(y,{children:`aria-pressed`}),`).`]}),(0,S.jsxs)(S.Fragment,{children:[`Os dias do período têm `,(0,S.jsx)(y,{children:`aria-selected`}),`; a faixa é só visual.`]}),(0,S.jsx)(S.Fragment,{children:`Fechar sem escolher o fim descarta o início: o período anterior continua valendo.`}),(0,S.jsx)(S.Fragment,{children:`Com toque, os botões dentro do campo têm alvo de 44 × 44 px, mesmo com o desenho menor. A caixa do campo não muda.`})]})})]})}export{j as DatePickerPagina,R as DateRangePickerPagina};