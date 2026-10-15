import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,p as i,sr as a}from"./Codigo-Dgz1In5l.js";import{t as o}from"./ellipsis-CzhPUSUO.js";import{t as s}from"./Input-BBFu0gZj.js";import{t as c}from"./pencil-DEQjmgeG.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./Dialog-DjDx4UAw.js";import{t as h}from"./trash-BZfsE4TV.js";import{s as g}from"./tiptap-jvs8iIPE.js";import{t as _}from"./Select-DFPozajq.js";import{t as v}from"./Textarea-DglDNy8U.js";import{t as y}from"./Switch-BltZJQRk.js";import{t as b}from"./Badge-g4zT1uda.js";import{Ft as x,Ht as S,Lt as C,Nt as w,Vt as T,_ as E,b as D,dt as O,f as k,g as A,h as j,p as M,ut as N,y as P}from"./index-3SU4ioj-.js";var F=e(t(),1),I=g();function L({itens:e}){return(0,I.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})}function R({titulo:e,children:t}){return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:e}),(0,I.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:t})]})}var z=e=>new Promise(t=>setTimeout(t,e)),B=(e=`Salvar`)=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(p,{children:(0,I.jsx)(a,{variant:`secondary`,children:`Cancelar`})}),(0,I.jsx)(p,{children:(0,I.jsx)(a,{children:e})})]});function V({size:e}){let t={sm:400,md:520,lg:720}[e];return(0,I.jsxs)(d,{children:[(0,I.jsx)(l,{children:(0,I.jsxs)(a,{variant:`secondary`,children:[e,` · `,t,` px`]})}),(0,I.jsx)(u,{size:e,title:`Diálogo ${e}`,description:`Largura de ${t} px, sem passar da tela.`,footer:B(),children:(0,I.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`O corpo usa o texto padrão. Ações ficam no rodapé, alinhadas à direita, com a principal por último.`})})]})}var H=[{value:`ativo`,label:`Ativo`},{value:`pausado`,label:`Pausado`},{value:`bloqueado`,label:`Bloqueado`}];function U(){let e=O(),t=(0,F.useId)(),[n,r]=(0,F.useState)(!1),[i,o]=(0,F.useState)(!1);async function f(){i||(o(!0),await z(900),o(!1),r(!1),e.success(`Cliente atualizado`,{description:`Ana Souza · as mudanças valem para os próximos pedidos.`}))}return(0,I.jsxs)(d,{open:n,onOpenChange:e=>!i&&r(e),children:[(0,I.jsx)(l,{children:(0,I.jsx)(a,{variant:`secondary`,leadingIcon:c,children:`Editar cliente`})}),(0,I.jsx)(u,{title:`Editar cliente`,description:`As mudanças valem para os próximos pedidos.`,headerAction:(0,I.jsx)(a,{size:`sm`,type:`submit`,form:t,loading:i,children:`Salvar`}),footer:(0,I.jsx)(p,{children:(0,I.jsx)(a,{variant:`secondary`,disabled:i,children:`Cancelar`})}),children:(0,I.jsxs)(`form`,{id:t,onSubmit:e=>{e.preventDefault(),f()},className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,I.jsx)(s,{label:`Nome`,defaultValue:`Ana Souza`,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,I.jsx)(s,{label:`E-mail`,type:`email`,defaultValue:`ana@exemplo.com.br`}),(0,I.jsx)(_,{label:`Situação`,options:H,defaultValue:`ativo`}),(0,I.jsx)(v,{label:`Observações`,optional:!0,placeholder:`Só a equipe vê.`,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,I.jsx)(y,{label:`Receber avisos por e-mail`,defaultChecked:!0,className:`ts:col-span-2 ts:max-md:col-span-1`})]})})]})}function W(){return(0,I.jsxs)(d,{children:[(0,I.jsx)(l,{children:(0,I.jsx)(a,{variant:`secondary`,children:`Termos (corpo longo)`})}),(0,I.jsx)(u,{title:`Termos de uso do painel`,description:`Leia antes de liberar o acesso da equipe.`,footer:B(`Aceitar`),children:(0,I.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:text-fg-secondary`,children:Array.from({length:30},(e,t)=>(0,I.jsxs)(`p`,{children:[t+1,`. Cada pessoa da equipe acessa com o próprio login. Ações ficam registradas com nome, data e hora, e podem ser consultadas no histórico da loja.`]},t))})})]})}function G(){return(0,I.jsxs)(d,{children:[(0,I.jsx)(l,{children:(0,I.jsx)(a,{variant:`secondary`,children:`Sem o X`})}),(0,I.jsx)(u,{showClose:!1,size:`sm`,title:`Novo turno`,description:`O caixa foi aberto às 08:00.`,footer:(0,I.jsx)(p,{children:(0,I.jsx)(a,{children:`Entendi`})})})]})}function K(){let e=(0,F.useRef)(null);return(0,I.jsxs)(d,{children:[(0,I.jsx)(l,{children:(0,I.jsx)(a,{variant:`secondary`,children:`Foco no campo`})}),(0,I.jsx)(u,{size:`sm`,title:`Renomear loja`,initialFocus:e,footer:B(),children:(0,I.jsx)(s,{ref:e,label:`Nome da loja`,defaultValue:`Centro`})})]})}function q(){let e=O();return(0,I.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,I.jsx)(R,{titulo:`Neutra`,children:(0,I.jsx)(m,{trigger:(0,I.jsx)(a,{variant:`secondary`,children:`Publicar cardápio`}),title:`Publicar o cardápio?`,description:`Os clientes passam a ver os preços novos na hora.`,confirmLabel:`Publicar agora`,onConfirm:()=>{e.success(`Cardápio publicado`)}})}),(0,I.jsx)(R,{titulo:`Destrutiva (foco começa em Cancelar)`,children:(0,I.jsx)(m,{trigger:(0,I.jsx)(a,{variant:`destructive`,leadingIcon:h,children:`Excluir 3 pedidos`}),title:`Excluir 3 pedidos?`,description:`Os pedidos saem da lista e dos relatórios. Essa ação não pode ser desfeita.`,confirmLabel:`Excluir pedidos`,destructive:!0,onConfirm:()=>{e.show({title:`3 pedidos excluídos`})}})}),(0,I.jsx)(R,{titulo:`Assíncrona (espera o servidor)`,children:(0,I.jsx)(m,{trigger:(0,I.jsx)(a,{variant:`secondary`,leadingIcon:f,children:`Enviar notas`}),title:`Enviar 12 notas fiscais?`,description:`O envio leva alguns segundos. Não feche a página.`,confirmLabel:`Enviar notas`,onConfirm:async()=>{await z(1500),e.success(`12 notas enviadas`)}})}),(0,I.jsx)(R,{titulo:`Falha (continua aberta)`,children:(0,I.jsx)(m,{trigger:(0,I.jsx)(a,{variant:`secondary`,children:`Cancelar assinatura`}),title:`Cancelar a assinatura?`,description:`O plano fica ativo até o fim do mês já pago.`,confirmLabel:`Cancelar assinatura`,cancelLabel:`Manter assinatura`,destructive:!0,onConfirm:async()=>{throw await z(1e3),e.error(`Não foi possível cancelar`,{description:`Sem conexão com o servidor. Tente de novo.`}),Error(`rede`)}})})]})}var J=[{id:1042,cliente:`Ana Souza`,total:`R$ 184,90`,status:`Pago`},{id:1041,cliente:`Bruno Lima`,total:`R$ 62,00`,status:`Pendente`},{id:1040,cliente:`Carla Dias`,total:`R$ 309,50`,status:`Pago`}];function Y(){let e=O(),[t,n]=(0,F.useState)(J),[r,s]=(0,F.useState)(null),[l,f]=(0,F.useState)(null),[g,_]=(0,F.useState)(!1);function v(r){let i=t;n(e=>e.filter(e=>e.id!==r.id)),s(i),e.show({title:`Pedido #${r.id} excluído`,action:{label:`Desfazer`,onClick:()=>{n(i),s(null)}}})}return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,I.jsxs)(`div`,{className:`ts:flex ts:items-center ts:justify-between ts:gap-12`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Pedidos de hoje`}),(0,I.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8`,children:[r&&(0,I.jsx)(a,{size:`sm`,variant:`secondary`,onClick:()=>{n(r),s(null)},children:`Desfazer exclusão`}),(0,I.jsx)(a,{size:`sm`,variant:`ghost`,onClick:()=>n(J),children:`Restaurar lista`})]})]}),(0,I.jsx)(`div`,{className:`ts:overflow-x-auto`,children:(0,I.jsxs)(`div`,{className:`ts:min-w-480`,children:[t.map(e=>(0,I.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[80px_minmax(0,1fr)_110px_100px_32px] ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:py-8 ts:text-body-m ts:last:border-b-0`,children:[(0,I.jsxs)(`span`,{className:`ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.id]}),(0,I.jsx)(`span`,{className:`ts:truncate`,children:e.cliente}),(0,I.jsx)(`span`,{className:`ts:text-right ts:tabular-nums`,children:e.total}),(0,I.jsx)(`span`,{children:(0,I.jsx)(b,{tone:e.status===`Pago`?`success`:`warning`,children:e.status})}),(0,I.jsxs)(w,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(i,{icon:o,label:`Ações do pedido #${e.id}`,size:`sm`,variant:`ghost`,tooltip:!1})}),(0,I.jsxs)(x,{align:`end`,children:[(0,I.jsx)(C,{icon:c,onClick:()=>_(!0),children:`Editar`}),(0,I.jsx)(T,{}),(0,I.jsx)(C,{icon:h,destructive:!0,onClick:()=>f(e),children:`Excluir`})]})]})]},e.id)),t.length===0&&(0,I.jsx)(`p`,{className:`ts:py-16 ts:text-body-m ts:text-fg-muted`,children:`Nenhum pedido. Use “Restaurar lista”.`})]})}),(0,I.jsx)(m,{open:l!==null,onOpenChange:e=>{e||f(null)},title:`Excluir o pedido #${l?.id??``}?`,description:`O pedido de ${l?.cliente??``} sai da lista. Dá para desfazer logo depois.`,confirmLabel:`Excluir pedido`,destructive:!0,onConfirm:()=>{l&&v(l)}}),(0,I.jsx)(d,{open:g,onOpenChange:_,children:(0,I.jsx)(u,{size:`sm`,title:`Editar pedido`,description:`A edição completa chega com a Tabela.`,footer:(0,I.jsx)(p,{children:(0,I.jsx)(a,{children:`Entendi`})})})})]})}function X(){return(0,I.jsxs)(`article`,{children:[(0,I.jsx)(k,{etapa:`Componente 15 · aprovado`,titulo:`Dialog`,descricao:(0,I.jsxs)(I.Fragment,{children:[`Janela sobre a página para uma tarefa curta: editar um registro, confirmar uma ação. O resto da página fica inerte até fechar. Para confirmar, use o `,(0,I.jsx)(M,{children:`ConfirmDialog`}),`, que já vem montado.`]})}),(0,I.jsx)(A,{codigo:`import { Button, Dialog, DialogClose, DialogContent, type DialogSize, DialogTrigger } from '@tessela/web';

const rodapePadrao = (acao = 'Salvar') => (\r
  <>\r
    <DialogClose><Button variant="secondary">Cancelar</Button></DialogClose>\r
    <DialogClose><Button>{acao}</Button></DialogClose>\r
  </>\r
);

function DialogDeTamanho({ size }: { size: DialogSize }) {\r
  const largura = { sm: 400, md: 520, lg: 720 }[size];\r
  return (\r
    <Dialog>\r
      <DialogTrigger><Button variant="secondary">{size} · {largura} px</Button></DialogTrigger>\r
      <DialogContent size={size} title={\`Diálogo \${size}\`} description={\`Largura de \${largura} px, sem passar da tela.\`} footer={rodapePadrao()}>\r
        <p className="ts:text-fg-secondary">O corpo usa o texto padrão. Ações ficam no rodapé, alinhadas à direita, com a principal por último.</p>\r
      </DialogContent>\r
    </Dialog>\r
  );\r
}

<div className="ts:flex ts:flex-wrap ts:gap-8">\r
  <DialogDeTamanho size="sm" />\r
  <DialogDeTamanho size="md" />\r
  <DialogDeTamanho size="lg" />\r
</div>`,id:`tamanhos`,titulo:`Tamanhos`,descricao:`Três larguras, em tokens de componente. Em telas estreitas, o diálogo ocupa a largura menos 16 px de cada lado.`,children:(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(V,{size:`sm`}),(0,I.jsx)(V,{size:`md`}),(0,I.jsx)(V,{size:`lg`})]})}),(0,I.jsx)(A,{codigo:`import { Button, Dialog, DialogClose, DialogContent, DialogTrigger, Input, Select, Switch, Textarea, useToast } from '@tessela/web';
import { Pencil } from 'lucide-react';
import { useId, useRef, useState } from 'react';

const esperar = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const rodapePadrao = (acao = 'Salvar') => (\r
  <>\r
    <DialogClose><Button variant="secondary">Cancelar</Button></DialogClose>\r
    <DialogClose><Button>{acao}</Button></DialogClose>\r
  </>\r
);

const status = [\r
  { value: 'ativo', label: 'Ativo' }, { value: 'pausado', label: 'Pausado' }, { value: 'bloqueado', label: 'Bloqueado' },\r
];

function EditarCliente() {\r
  const toast = useToast();\r
  const formId = useId();\r
  const [aberto, setAberto] = useState(false);\r
  const [salvando, setSalvando] = useState(false);\r
  async function salvar() {\r
    if (salvando) return;\r
    setSalvando(true);\r
    await esperar(900);\r
    setSalvando(false);\r
    setAberto(false);\r
    toast.success('Cliente atualizado', { description: 'Ana Souza · as mudanças valem para os próximos pedidos.' });\r
  }\r
  return (\r
    <Dialog open={aberto} onOpenChange={(v) => !salvando && setAberto(v)}>\r
      <DialogTrigger><Button variant="secondary" leadingIcon={Pencil}>Editar cliente</Button></DialogTrigger>\r
      <DialogContent\r
        title="Editar cliente"\r
        description="As mudanças valem para os próximos pedidos."\r
        headerAction={<Button size="sm" type="submit" form={formId} loading={salvando}>Salvar</Button>}\r
        footer={(\r
          <DialogClose><Button variant="secondary" disabled={salvando}>Cancelar</Button></DialogClose>\r
        )}\r
      >\r
        <form id={formId} onSubmit={(e) => { e.preventDefault(); void salvar(); }} className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
          <Input label="Nome" defaultValue="Ana Souza" className="ts:col-span-2 ts:max-md:col-span-1" />\r
          <Input label="E-mail" type="email" defaultValue="ana@exemplo.com.br" />\r
          <Select label="Situação" options={status} defaultValue="ativo" />\r
          <Textarea label="Observações" optional placeholder="Só a equipe vê." className="ts:col-span-2 ts:max-md:col-span-1" />\r
          <Switch label="Receber avisos por e-mail" defaultChecked className="ts:col-span-2 ts:max-md:col-span-1" />\r
        </form>\r
      </DialogContent>\r
    </Dialog>\r
  );\r
}

function CorpoLongo() {\r
  return (\r
    <Dialog>\r
      <DialogTrigger><Button variant="secondary">Termos (corpo longo)</Button></DialogTrigger>\r
      <DialogContent title="Termos de uso do painel" description="Leia antes de liberar o acesso da equipe." footer={rodapePadrao('Aceitar')}>\r
        <div className="ts:flex ts:flex-col ts:gap-12 ts:text-fg-secondary">\r
          {Array.from({ length: 30 }, (_, i) => (\r
            <p key={i}>{i + 1}. Cada pessoa da equipe acessa com o próprio login. Ações ficam registradas com nome, data e hora, e podem ser consultadas no histórico da loja.</p>\r
          ))}\r
        </div>\r
      </DialogContent>\r
    </Dialog>\r
  );\r
}

function SemFechar() {\r
  return (\r
    <Dialog>\r
      <DialogTrigger><Button variant="secondary">Sem o X</Button></DialogTrigger>\r
      <DialogContent showClose={false} size="sm" title="Novo turno" description="O caixa foi aberto às 08:00." footer={<DialogClose><Button>Entendi</Button></DialogClose>} />\r
    </Dialog>\r
  );\r
}

function FocoInicial() {\r
  const campo = useRef<HTMLInputElement>(null);\r
  return (\r
    <Dialog>\r
      <DialogTrigger><Button variant="secondary">Foco no campo</Button></DialogTrigger>\r
      <DialogContent size="sm" title="Renomear loja" initialFocus={campo} footer={rodapePadrao()}>\r
        <Input ref={campo} label="Nome da loja" defaultValue="Centro" />\r
      </DialogContent>\r
    </Dialog>\r
  );\r
}

<div className="ts:flex ts:flex-wrap ts:gap-8">\r
  <EditarCliente />\r
  <CorpoLongo />\r
  <SemFechar />\r
  <FocoInicial />\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`O editor combina ação no cabeçalho, formulário que salva com Enter e apresentação como sheet abaixo de md. O corpo rola sozinho quando não cabe, com título e rodapé fixos.`,children:(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(U,{}),(0,I.jsx)(W,{}),(0,I.jsx)(G,{}),(0,I.jsx)(K,{})]})}),(0,I.jsx)(A,{codigo:`import { Button, ConfirmDialog, useToast } from '@tessela/web';
import { Send, Trash2 } from 'lucide-react';
import { type ReactNode } from 'react';

function Caixa({ titulo, children }: { titulo: string; children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">{titulo}</p>\r
      <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">{children}</div>\r
    </div>\r
  );\r
}

const esperar = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function Confirmacoes() {\r
  const toast = useToast();\r
  return (\r
    <div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1">\r
      <Caixa titulo="Neutra">\r
        <ConfirmDialog\r
          trigger={<Button variant="secondary">Publicar cardápio</Button>}\r
          title="Publicar o cardápio?"\r
          description="Os clientes passam a ver os preços novos na hora."\r
          confirmLabel="Publicar agora"\r
          onConfirm={() => { toast.success('Cardápio publicado'); }}\r
        />\r
      </Caixa>\r
      <Caixa titulo="Destrutiva (foco começa em Cancelar)">\r
        <ConfirmDialog\r
          trigger={<Button variant="destructive" leadingIcon={Trash2}>Excluir 3 pedidos</Button>}\r
          title="Excluir 3 pedidos?"\r
          description="Os pedidos saem da lista e dos relatórios. Essa ação não pode ser desfeita."\r
          confirmLabel="Excluir pedidos"\r
          destructive\r
          onConfirm={() => { toast.show({ title: '3 pedidos excluídos' }); }}\r
        />\r
      </Caixa>\r
      <Caixa titulo="Assíncrona (espera o servidor)">\r
        <ConfirmDialog\r
          trigger={<Button variant="secondary" leadingIcon={Send}>Enviar notas</Button>}\r
          title="Enviar 12 notas fiscais?"\r
          description="O envio leva alguns segundos. Não feche a página."\r
          confirmLabel="Enviar notas"\r
          onConfirm={async () => { await esperar(1500); toast.success('12 notas enviadas'); }}\r
        />\r
      </Caixa>\r
      <Caixa titulo="Falha (continua aberta)">\r
        <ConfirmDialog\r
          trigger={<Button variant="secondary">Cancelar assinatura</Button>}\r
          title="Cancelar a assinatura?"\r
          description="O plano fica ativo até o fim do mês já pago."\r
          confirmLabel="Cancelar assinatura"\r
          cancelLabel="Manter assinatura"\r
          destructive\r
          onConfirm={async () => {\r
            await esperar(1000);\r
            toast.error('Não foi possível cancelar', { description: 'Sem conexão com o servidor. Tente de novo.' });\r
            throw new Error('rede');\r
          }}\r
        />\r
      </Caixa>\r
    </div>\r
  );\r
}

<Confirmacoes />`,id:`confirmacao`,titulo:`Confirmação`,descricao:(0,I.jsxs)(I.Fragment,{children:[`O `,(0,I.jsx)(M,{children:`ConfirmDialog`}),` não fecha ao clicar fora. O texto do botão diz o que acontece. Se `,(0,I.jsx)(M,{children:`onConfirm`}),` devolve uma promessa, o botão carrega e o diálogo só fecha no sucesso.`]}),children:(0,I.jsx)(q,{})}),(0,I.jsx)(A,{id:`temas`,titulo:`Temas e densidades`,descricao:`O diálogo abre no tema e na densidade do trecho onde está o gatilho.`,children:(0,I.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[n.map(e=>(0,I.jsx)(j,{density:e,titulo:P[e],children:(0,I.jsx)(U,{})},e)),r.map(e=>(0,I.jsx)(j,{theme:e,titulo:D[e],children:(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(U,{}),(0,I.jsx)(m,{trigger:(0,I.jsx)(a,{variant:`destructive`,leadingIcon:h,children:`Excluir`}),title:`Excluir o produto?`,description:`Ele sai do cardápio e dos relatórios.`,confirmLabel:`Excluir produto`,destructive:!0,onConfirm:()=>{}})]})},e))]})}),(0,I.jsx)(A,{codigo:`import { Badge, Button, ConfirmDialog, Dialog, DialogClose, DialogContent, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, useToast } from '@tessela/web';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

const status = [\r
  { value: 'ativo', label: 'Ativo' }, { value: 'pausado', label: 'Pausado' }, { value: 'bloqueado', label: 'Bloqueado' },\r
];

type Pedido = { id: number; cliente: string; total: string; status: 'Pago' | 'Pendente' };

const pedidosIniciais: Pedido[] = [\r
  { id: 1042, cliente: 'Ana Souza', total: 'R$ 184,90', status: 'Pago' },\r
  { id: 1041, cliente: 'Bruno Lima', total: 'R$ 62,00', status: 'Pendente' },\r
  { id: 1040, cliente: 'Carla Dias', total: 'R$ 309,50', status: 'Pago' },\r
];

function ListaDePedidos() {\r
  const toast = useToast();\r
  const [pedidos, setPedidos] = useState(pedidosIniciais);\r
  const [ultimoRemovido, setUltimoRemovido] = useState<Pedido[] | null>(null);\r
  const [excluir, setExcluir] = useState<Pedido | null>(null);\r
  const [editando, setEditando] = useState(false);\r
\r
  function removerComDesfazer(p: Pedido) {\r
    const antes = pedidos;\r
    setPedidos((atual) => atual.filter((x) => x.id !== p.id));\r
    setUltimoRemovido(antes);\r
    toast.show({\r
      title: \`Pedido #\${p.id} excluído\`,\r
      action: { label: 'Desfazer', onClick: () => { setPedidos(antes); setUltimoRemovido(null); } },\r
    });\r
  }\r
\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <div className="ts:flex ts:items-center ts:justify-between ts:gap-12">\r
        <p className="ts:text-label-s ts:text-fg-muted">Pedidos de hoje</p>\r
        <div className="ts:flex ts:items-center ts:gap-8">\r
          {ultimoRemovido && <Button size="sm" variant="secondary" onClick={() => { setPedidos(ultimoRemovido); setUltimoRemovido(null); }}>Desfazer exclusão</Button>}\r
          <Button size="sm" variant="ghost" onClick={() => setPedidos(pedidosIniciais)}>Restaurar lista</Button>\r
        </div>\r
      </div>\r
      <div className="ts:overflow-x-auto">\r
        <div className="ts:min-w-480">\r
          {pedidos.map((p) => (\r
            <div key={p.id} className="ts:grid ts:grid-cols-[80px_minmax(0,1fr)_110px_100px_32px] ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:py-8 ts:text-body-m ts:last:border-b-0">\r
              <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{p.id}</span>\r
              <span className="ts:truncate">{p.cliente}</span>\r
              <span className="ts:text-right ts:tabular-nums">{p.total}</span>\r
              <span><Badge tone={p.status === 'Pago' ? 'success' : 'warning'}>{p.status}</Badge></span>\r
              <Menu>\r
                <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações do pedido #\${p.id}\`} size="sm" variant="ghost" tooltip={false} /></MenuTrigger>\r
                <MenuContent align="end">\r
                  <MenuItem icon={Pencil} onClick={() => setEditando(true)}>Editar</MenuItem>\r
                  <MenuSeparator />\r
                  <MenuItem icon={Trash2} destructive onClick={() => setExcluir(p)}>Excluir</MenuItem>\r
                </MenuContent>\r
              </Menu>\r
            </div>\r
          ))}\r
          {pedidos.length === 0 && <p className="ts:py-16 ts:text-body-m ts:text-fg-muted">Nenhum pedido. Use “Restaurar lista”.</p>}\r
        </div>\r
      </div>\r
      <ConfirmDialog\r
        open={excluir !== null}\r
        onOpenChange={(v) => { if (!v) setExcluir(null); }}\r
        title={\`Excluir o pedido #\${excluir?.id ?? ''}?\`}\r
        description={\`O pedido de \${excluir?.cliente ?? ''} sai da lista. Dá para desfazer logo depois.\`}\r
        confirmLabel="Excluir pedido"\r
        destructive\r
        onConfirm={() => { if (excluir) removerComDesfazer(excluir); }}\r
      />\r
      <Dialog open={editando} onOpenChange={setEditando}>\r
        <DialogContent size="sm" title="Editar pedido" description="A edição completa chega com a Tabela." footer={<DialogClose><Button>Entendi</Button></DialogClose>} />\r
      </Dialog>\r
    </div>\r
  );\r
}

<ListaDePedidos />`,id:`em-uso`,titulo:`Em uso`,descricao:`Excluir pelo menu da linha pede confirmação e mostra um aviso com “Desfazer”.`,children:(0,I.jsx)(Y,{})}),(0,I.jsx)(A,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-m`,children:`Dialog, DialogTrigger, DialogClose`}),(0,I.jsx)(E,{rotulo:`Tabela de propriedades do Dialog, DialogTrigger e DialogClose`,itens:[{nome:`Dialog · open / defaultOpen / onOpenChange`,tipo:`boolean`,descricao:`Raiz: controla abrir e fechar.`},{nome:`DialogTrigger`,tipo:`ReactElement`,descricao:`Envolve o botão que abre.`},{nome:`DialogClose`,tipo:`ReactElement`,descricao:`Envolve um botão que fecha (Cancelar).`}]})]}),(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-m`,children:`DialogContent`}),(0,I.jsx)(E,{rotulo:`Tabela de propriedades do DialogContent`,itens:[{nome:`title`,tipo:`ReactNode`,descricao:`Obrigatório. Nomeia o diálogo para o leitor de tela.`},{nome:`description`,tipo:`ReactNode`,descricao:`Texto de apoio, ligado ao diálogo.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`400, 520 ou 720 px.`},{nome:`footer`,tipo:`ReactNode`,descricao:`Ações, à direita. A principal por último.`},{nome:`headerAction`,tipo:`ReactNode`,descricao:`Ação ao lado do título, útil para salvar um formulário.`},{nome:`data-presentation (atributo de saída)`,tipo:`'dialog' | 'sheet'`,descricao:`Indica a apresentação ativa no elemento; abaixo de md, abre como sheet.`},{nome:`showClose`,tipo:`boolean`,padrao:`true`,descricao:`Mostra o X no canto.`},{nome:`initialFocus`,tipo:`RefObject`,descricao:`Quem recebe o foco ao abrir. Padrão: o primeiro focável.`}]})]}),(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-m`,children:`ConfirmDialog`}),(0,I.jsx)(E,{rotulo:`Tabela de propriedades do ConfirmDialog`,itens:[{nome:`trigger`,tipo:`ReactElement`,descricao:`Botão que abre. Ou controle com open / onOpenChange.`},{nome:`title / description`,tipo:`ReactNode`,descricao:`Pergunta e consequência.`},{nome:`confirmLabel / cancelLabel`,tipo:`ReactNode`,padrao:`Confirmar / Cancelar`,descricao:`Diga o que acontece: “Excluir pedidos”.`},{nome:`destructive`,tipo:`boolean`,padrao:`false`,descricao:`Botão vermelho e foco inicial em Cancelar.`},{nome:`onConfirm`,tipo:`() => void | Promise`,descricao:`Com promessa: carrega, fecha no sucesso, fica aberto na falha.`}]})]})]})}),(0,I.jsx)(A,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,I.jsx)(L,{itens:[(0,I.jsxs)(I.Fragment,{children:[`Ao abrir, o foco vai para o primeiro campo (ou para `,(0,I.jsx)(M,{children:`initialFocus`}),`) e fica preso dentro do diálogo. No toque, vai para a janela, sem abrir o teclado virtual. Tab e Shift+Tab circulam; o X é o último.`]}),(0,I.jsx)(I.Fragment,{children:`Esc fecha. Ao fechar, o foco volta ao botão que abriu. Se quem abriu foi um item de menu, volta ao botão do menu.`}),(0,I.jsxs)(I.Fragment,{children:[`O título nomeia o diálogo e a descrição o descreve. A confirmação usa o papel `,(0,I.jsx)(M,{children:`alertdialog`}),`.`]}),(0,I.jsx)(I.Fragment,{children:`Abaixo de md, a mesma API abre como sheet; a ação do cabeçalho pode enviar o formulário associado.`}),(0,I.jsx)(I.Fragment,{children:`O resto da página fica inerte e a rolagem dela trava enquanto o diálogo está aberto.`}),(0,I.jsx)(I.Fragment,{children:`Com movimento reduzido, o diálogo só esmaece, sem mudar de escala.`})]})})]})}function Z(){let e=O();return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.show({title:`Rascunho salvo`}),children:`Neutro`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.success(`Pedido #1042 salvo`),children:`Sucesso`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.error(`Não foi possível salvar`,{description:`Sem conexão com o servidor. Tente de novo.`}),children:`Erro`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.warning(`Estoque baixo`,{description:`Café torrado 500 g tem 3 unidades.`}),children:`Aviso`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.info(`Nova versão do painel`,{description:`Recarregue para usar.`}),children:`Informação`})]})}function Q(){let e=O();return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.show({title:`Produto arquivado`,action:{label:`Desfazer`,onClick:()=>e.success(`Produto restaurado`)}}),children:`Com ação`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.promise(z(1800),{loading:`Exportando relatório…`,success:`Relatório pronto`,error:`Falha na exportação`}),children:`Promessa: sucesso`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.promise(z(1800).then(()=>{throw Error(`x`)}),{loading:`Enviando notas…`,success:`Notas enviadas`,error:`Não foi possível enviar as notas`}),children:`Promessa: erro`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.show({title:`Sincronização pausada`,description:`Fica aqui até você fechar.`,timeout:0}),children:`Sem tempo`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>{e.success(`Pedido #1040 pago`),setTimeout(()=>e.success(`Pedido #1041 pago`),150),setTimeout(()=>e.success(`Pedido #1042 pago`),300),setTimeout(()=>e.success(`Pedido #1043 pago`),450)},children:`Pilha (4 avisos)`})]})}function ee(){let e=O();return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.show({title:`★★★★★`,description:`“Cadastrei o restaurante em poucos minutos.” Rafael Tanaka · Gerente`}),children:`Aviso embaixo`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>{e.success(`Pedido #1040 pago`),setTimeout(()=>e.success(`Pedido #1041 pago`),150),setTimeout(()=>e.success(`Pedido #1042 pago`),300)},children:`Pilha embaixo (3 avisos)`})]})}function $(){let e=O();return(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.success(`Pedido #1042 salvo`,{description:`Ana Souza · R$ 184,90`,action:{label:`Desfazer`,onClick:()=>{}}}),children:`Sucesso com ação`}),(0,I.jsx)(a,{variant:`secondary`,onClick:()=>e.error(`Não foi possível salvar`),children:`Erro`})]})}function te(){return(0,I.jsxs)(`article`,{children:[(0,I.jsx)(k,{etapa:`Componente 16 · aprovado`,titulo:`Toast`,descricao:(0,I.jsx)(I.Fragment,{children:`Aviso curto sobre algo que acabou de acontecer. Aparece no canto superior direito e some sozinho em 5 segundos. Não use para erro que impede a tarefa: nesse caso, mostre o erro no campo ou na página.`})}),(0,I.jsx)(A,{codigo:`import { Button, useToast } from '@tessela/web';

function Tipos() {\r
  const toast = useToast();\r
  return (\r
    <div className="ts:flex ts:flex-wrap ts:gap-8">\r
      <Button variant="secondary" onClick={() => toast.show({ title: 'Rascunho salvo' })}>Neutro</Button>\r
      <Button variant="secondary" onClick={() => toast.success('Pedido #1042 salvo')}>Sucesso</Button>\r
      <Button variant="secondary" onClick={() => toast.error('Não foi possível salvar', { description: 'Sem conexão com o servidor. Tente de novo.' })}>Erro</Button>\r
      <Button variant="secondary" onClick={() => toast.warning('Estoque baixo', { description: 'Café torrado 500 g tem 3 unidades.' })}>Aviso</Button>\r
      <Button variant="secondary" onClick={() => toast.info('Nova versão do painel', { description: 'Recarregue para usar.' })}>Informação</Button>\r
    </div>\r
  );\r
}

<Tipos />`,id:`tipos`,titulo:`Tipos`,descricao:`A cor fica só no ícone. O fundo é o mesmo em todos, como no Menu.`,children:(0,I.jsx)(Z,{})}),(0,I.jsx)(A,{codigo:`import { Button, useToast } from '@tessela/web';

const esperar = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function Variacoes() {\r
  const toast = useToast();\r
  return (\r
    <div className="ts:flex ts:flex-wrap ts:gap-8">\r
      <Button variant="secondary" onClick={() => toast.show({ title: 'Produto arquivado', action: { label: 'Desfazer', onClick: () => toast.success('Produto restaurado') } })}>Com ação</Button>\r
      <Button variant="secondary" onClick={() => toast.promise(esperar(1800), { loading: 'Exportando relatório…', success: 'Relatório pronto', error: 'Falha na exportação' })}>Promessa: sucesso</Button>\r
      <Button variant="secondary" onClick={() => toast.promise(esperar(1800).then(() => { throw new Error('x'); }), { loading: 'Enviando notas…', success: 'Notas enviadas', error: 'Não foi possível enviar as notas' })}>Promessa: erro</Button>\r
      <Button variant="secondary" onClick={() => toast.show({ title: 'Sincronização pausada', description: 'Fica aqui até você fechar.', timeout: 0 })}>Sem tempo</Button>\r
      <Button\r
        variant="secondary"\r
        onClick={() => {\r
          toast.success('Pedido #1040 pago');\r
          setTimeout(() => toast.success('Pedido #1041 pago'), 150);\r
          setTimeout(() => toast.success('Pedido #1042 pago'), 300);\r
          setTimeout(() => toast.success('Pedido #1043 pago'), 450);\r
        }}\r
      >\r
        Pilha (4 avisos)\r
      </Button>\r
    </div>\r
  );\r
}

<Variacoes />`,id:`variacoes`,titulo:`Variações`,descricao:`Até 3 avisos visíveis; os mais antigos ficam empilhados embaixo do mais novo e abrem ao passar o mouse. O tempo pausa com o mouse em cima ou com foco.`,children:(0,I.jsx)(Q,{})}),(0,I.jsx)(A,{codigo:`import { Button, ToastProvider, useToast } from '@tessela/web';

function AvisosEmbaixo() {\r
  const toast = useToast();\r
  return (\r
    <div className="ts:flex ts:flex-wrap ts:gap-8">\r
      <Button variant="secondary" onClick={() => toast.show({ title: '★★★★★', description: '“Cadastrei o restaurante em poucos minutos.” Rafael Tanaka · Gerente' })}>Aviso embaixo</Button>\r
      <Button\r
        variant="secondary"\r
        onClick={() => {\r
          toast.success('Pedido #1040 pago');\r
          setTimeout(() => toast.success('Pedido #1041 pago'), 150);\r
          setTimeout(() => toast.success('Pedido #1042 pago'), 300);\r
        }}\r
      >\r
        Pilha embaixo (3 avisos)\r
      </Button>\r
    </div>\r
  );\r
}

<ToastProvider aria-label="Notificações da demonstração inferior" position="bottom-right"><AvisosEmbaixo /></ToastProvider>`,id:`posicao`,titulo:`Posição`,descricao:(0,I.jsxs)(I.Fragment,{children:[`No canto superior direito, por padrão. Com `,(0,I.jsx)(M,{children:`position="bottom-right"`}),`, no inferior: a pilha cresce para cima e o aviso fecha arrastando para baixo. Serve a uma tela com cabeçalho e etapas no topo, como o cadastro do Checkout Menux no celular.`]}),children:(0,I.jsx)(N,{"aria-label":`Notificações da demonstração inferior`,position:`bottom-right`,children:(0,I.jsx)(ee,{})})}),(0,I.jsx)(A,{id:`temas`,titulo:`Temas e densidades`,descricao:`Cada trecho tem o próprio ToastProvider: o aviso sai no tema e na densidade dele.`,children:(0,I.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[r.map(e=>(0,I.jsx)(j,{theme:e,titulo:D[e],children:(0,I.jsx)(N,{"aria-label":`Notificações no tema ${D[e]}`,children:(0,I.jsx)($,{})})},e)),n.map(e=>(0,I.jsx)(j,{density:e,titulo:P[e],children:(0,I.jsx)(N,{"aria-label":`Notificações na densidade ${P[e]}`,children:(0,I.jsx)($,{})})},e))]})}),(0,I.jsx)(A,{codigo:`import { Badge, Button, ConfirmDialog, Dialog, DialogClose, DialogContent, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, useToast } from '@tessela/web';
import { Ellipsis, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

const status = [\r
  { value: 'ativo', label: 'Ativo' }, { value: 'pausado', label: 'Pausado' }, { value: 'bloqueado', label: 'Bloqueado' },\r
];

type Pedido = { id: number; cliente: string; total: string; status: 'Pago' | 'Pendente' };

const pedidosIniciais: Pedido[] = [\r
  { id: 1042, cliente: 'Ana Souza', total: 'R$ 184,90', status: 'Pago' },\r
  { id: 1041, cliente: 'Bruno Lima', total: 'R$ 62,00', status: 'Pendente' },\r
  { id: 1040, cliente: 'Carla Dias', total: 'R$ 309,50', status: 'Pago' },\r
];

function ListaDePedidos() {\r
  const toast = useToast();\r
  const [pedidos, setPedidos] = useState(pedidosIniciais);\r
  const [ultimoRemovido, setUltimoRemovido] = useState<Pedido[] | null>(null);\r
  const [excluir, setExcluir] = useState<Pedido | null>(null);\r
  const [editando, setEditando] = useState(false);\r
\r
  function removerComDesfazer(p: Pedido) {\r
    const antes = pedidos;\r
    setPedidos((atual) => atual.filter((x) => x.id !== p.id));\r
    setUltimoRemovido(antes);\r
    toast.show({\r
      title: \`Pedido #\${p.id} excluído\`,\r
      action: { label: 'Desfazer', onClick: () => { setPedidos(antes); setUltimoRemovido(null); } },\r
    });\r
  }\r
\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <div className="ts:flex ts:items-center ts:justify-between ts:gap-12">\r
        <p className="ts:text-label-s ts:text-fg-muted">Pedidos de hoje</p>\r
        <div className="ts:flex ts:items-center ts:gap-8">\r
          {ultimoRemovido && <Button size="sm" variant="secondary" onClick={() => { setPedidos(ultimoRemovido); setUltimoRemovido(null); }}>Desfazer exclusão</Button>}\r
          <Button size="sm" variant="ghost" onClick={() => setPedidos(pedidosIniciais)}>Restaurar lista</Button>\r
        </div>\r
      </div>\r
      <div className="ts:overflow-x-auto">\r
        <div className="ts:min-w-480">\r
          {pedidos.map((p) => (\r
            <div key={p.id} className="ts:grid ts:grid-cols-[80px_minmax(0,1fr)_110px_100px_32px] ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:py-8 ts:text-body-m ts:last:border-b-0">\r
              <span className="ts:font-mono ts:text-code ts:text-fg-secondary">#{p.id}</span>\r
              <span className="ts:truncate">{p.cliente}</span>\r
              <span className="ts:text-right ts:tabular-nums">{p.total}</span>\r
              <span><Badge tone={p.status === 'Pago' ? 'success' : 'warning'}>{p.status}</Badge></span>\r
              <Menu>\r
                <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações do pedido #\${p.id}\`} size="sm" variant="ghost" tooltip={false} /></MenuTrigger>\r
                <MenuContent align="end">\r
                  <MenuItem icon={Pencil} onClick={() => setEditando(true)}>Editar</MenuItem>\r
                  <MenuSeparator />\r
                  <MenuItem icon={Trash2} destructive onClick={() => setExcluir(p)}>Excluir</MenuItem>\r
                </MenuContent>\r
              </Menu>\r
            </div>\r
          ))}\r
          {pedidos.length === 0 && <p className="ts:py-16 ts:text-body-m ts:text-fg-muted">Nenhum pedido. Use “Restaurar lista”.</p>}\r
        </div>\r
      </div>\r
      <ConfirmDialog\r
        open={excluir !== null}\r
        onOpenChange={(v) => { if (!v) setExcluir(null); }}\r
        title={\`Excluir o pedido #\${excluir?.id ?? ''}?\`}\r
        description={\`O pedido de \${excluir?.cliente ?? ''} sai da lista. Dá para desfazer logo depois.\`}\r
        confirmLabel="Excluir pedido"\r
        destructive\r
        onConfirm={() => { if (excluir) removerComDesfazer(excluir); }}\r
      />\r
      <Dialog open={editando} onOpenChange={setEditando}>\r
        <DialogContent size="sm" title="Editar pedido" description="A edição completa chega com a Tabela." footer={<DialogClose><Button>Entendi</Button></DialogClose>} />\r
      </Dialog>\r
    </div>\r
  );\r
}

<ListaDePedidos />`,id:`em-uso`,titulo:`Em uso`,descricao:`Excluir um pedido mostra o aviso com “Desfazer”.`,children:(0,I.jsx)(Y,{})}),(0,I.jsx)(A,{semCaixa:!0,id:`instalacao`,titulo:`Instalação`,descricao:`Coloque o provider uma vez, dentro do TesselaProvider. Depois, qualquer tela chama o hook.`,children:(0,I.jsx)(`pre`,{className:`ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-subtle ts:p-16 ts:font-mono ts:text-code ts:text-fg-secondary`,children:`<TesselaProvider>
  <ToastProvider>
    <App />
  </ToastProvider>
</TesselaProvider>

const toast = useToast();
toast.success('Pedido salvo', { action: { label: 'Desfazer', onClick: desfazer } });
toast.promise(salvar(), { loading: 'Salvando…', success: 'Salvo', error: 'Falhou' });`})}),(0,I.jsx)(A,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-m`,children:`ToastProvider`}),(0,I.jsx)(E,{rotulo:`Tabela de propriedades do ToastProvider`,itens:[{nome:`limit`,tipo:`number`,padrao:`3`,descricao:`Avisos visíveis de uma vez.`},{nome:`timeout`,tipo:`number (ms)`,padrao:`5000`,descricao:`Tempo até sumir. 0 deixa até fechar.`},{nome:`position`,tipo:`'top-right' | 'bottom-right'`,padrao:`'top-right'`,descricao:`Canto dos avisos. Embaixo, para não cobrir o cabeçalho de uma tela no celular.`}]})]}),(0,I.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,I.jsx)(`p`,{className:`ts:text-label-m`,children:`useToast()`}),(0,I.jsx)(E,{rotulo:`Tabela de propriedades do useToast`,itens:[{nome:`show`,tipo:`(opções) => id`,descricao:`Aviso com title, description, tone, action e timeout.`},{nome:`success / error / warning / info`,tipo:`(título, opções?) => id`,descricao:`Atalhos por tipo. Erro é anunciado com urgência.`},{nome:`promise`,tipo:`(promessa, { loading, success, error })`,descricao:`Carregando que vira sucesso ou erro.`},{nome:`close`,tipo:`(id) => void`,descricao:`Fecha um aviso.`}]})]})]})}),(0,I.jsx)(A,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,I.jsx)(L,{itens:[(0,I.jsx)(I.Fragment,{children:`F6 leva o foco aos avisos; Tab anda entre eles; Esc fecha o aviso com foco e devolve o foco para onde estava.`}),(0,I.jsx)(I.Fragment,{children:`Os avisos ficam numa região “Notificações”. Sucesso, aviso e informação são anunciados com educação; erro é anunciado na hora.`}),(0,I.jsx)(I.Fragment,{children:`O tempo pausa com o mouse em cima, com foco ou com a janela em segundo plano.`}),(0,I.jsx)(I.Fragment,{children:`No toque, arrastar para cima ou para a direita dispensa o aviso.`}),(0,I.jsx)(I.Fragment,{children:`A ação (como “Desfazer”) também precisa existir em outro lugar da tela: o aviso some e quem usa leitor de tela pode não alcançá-lo a tempo.`})]})})]})}export{X as DialogPagina,te as ToastPagina};