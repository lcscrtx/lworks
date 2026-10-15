import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{_i as n,sr as r}from"./Codigo-Dgz1In5l.js";import{n as i,t as a}from"./qr-code-Bfn07OC4.js";import{t as o}from"./clock-CYh0yKdw.js";import{t as s}from"./credit-card-CATjEuH8.js";import{s as c}from"./tiptap-jvs8iIPE.js";import{t as l}from"./Checkbox-v-rRjqnt.js";import{t as u}from"./Switch-BltZJQRk.js";import{t as d}from"./Badge-g4zT1uda.js";import{n as f,t as p}from"./Radio-nPOo0-9S.js";import{_ as m,dn as h,f as g,g as _,p as v,v as y}from"./index-3SU4ioj-.js";var b=e(t(),1),x=c();function S({itens:e}){return(0,x.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,x.jsx)(`li`,{children:e},t))})}var C=[{tone:`neutral`,nome:`Neutro`},{tone:`success`,nome:`Sucesso`},{tone:`warning`,nome:`Aviso`},{tone:`error`,nome:`Erro`},{tone:`info`,nome:`Informação`}],w=[{id:`#10482`,cliente:`Mercado Bom Preço`,valor:`R$ 1.284,90`,status:`Pago`,tone:`success`},{id:`#10481`,cliente:`Padaria Estrela`,valor:`R$ 312,00`,status:`Aguardando pagamento`,tone:`warning`},{id:`#10480`,cliente:`Farmácia Central`,valor:`R$ 18.004,15`,status:`Em separação`,tone:`info`},{id:`#10479`,cliente:`Livraria Página 12`,valor:`R$ 94,50`,status:`Cancelado`,tone:`neutral`},{id:`#10478`,cliente:`Açougue Boi Gordo`,valor:`R$ 2.450,00`,status:`Estornado`,tone:`error`}];function T(){return(0,x.jsxs)(`article`,{children:[(0,x.jsx)(g,{etapa:`Componente 8 · aprovado`,titulo:`Badge`,descricao:`Rótulo curto de status, categoria ou contagem. A cor reforça o texto; nunca substitui.`}),(0,x.jsx)(_,{codigo:`import { Badge, type BadgeTone } from '@tessela/web';
import { Check, Clock, X } from 'lucide-react';

const tons: { tone: BadgeTone; nome: string }[] = [\r
  { tone: 'neutral', nome: 'Neutro' }, { tone: 'success', nome: 'Sucesso' }, { tone: 'warning', nome: 'Aviso' },\r
  { tone: 'error', nome: 'Erro' }, { tone: 'info', nome: 'Informação' },\r
];

<div className="ts:flex ts:flex-col ts:gap-16">\r
  {(['soft', 'solid'] as const).map((appearance) => (\r
    <div key={appearance} className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
      <span className="ts:w-80 ts:text-label-s ts:text-fg-muted">{appearance}</span>\r
      {tons.map(({ tone, nome }) => <Badge key={tone} tone={tone} appearance={appearance}>{nome}</Badge>)}\r
    </div>\r
  ))}\r
  <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
    <span className="ts:w-80 ts:text-label-s ts:text-fg-muted">ponto</span>\r
    {tons.map(({ tone, nome }) => <Badge key={tone} tone={tone} dot>{nome}</Badge>)}\r
  </div>\r
  <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
    <span className="ts:w-80 ts:text-label-s ts:text-fg-muted">ícone, sm</span>\r
    <Badge tone="success" icon={Check}>Aprovado</Badge>\r
    <Badge tone="warning" icon={Clock}>Em análise</Badge>\r
    <Badge tone="error" icon={X}>Recusado</Badge>\r
    <Badge size="sm">Rascunho</Badge>\r
    <Badge size="sm" appearance="solid" tone="error">3</Badge>\r
  </div>\r
</div>`,id:`tons`,titulo:`Tons e aparências`,descricao:`Soft para status em listas; solid para contagem ou alerta que precisa chamar atenção. Ponto e ícone opcionais. 20 e 24 px de altura, em pílula.`,children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[[`soft`,`solid`].map(e=>(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[(0,x.jsx)(`span`,{className:`ts:w-80 ts:text-label-s ts:text-fg-muted`,children:e}),C.map(({tone:t,nome:n})=>(0,x.jsx)(d,{tone:t,appearance:e,children:n},t))]},e)),(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[(0,x.jsx)(`span`,{className:`ts:w-80 ts:text-label-s ts:text-fg-muted`,children:`ponto`}),C.map(({tone:e,nome:t})=>(0,x.jsx)(d,{tone:e,dot:!0,children:t},e))]}),(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[(0,x.jsx)(`span`,{className:`ts:w-80 ts:text-label-s ts:text-fg-muted`,children:`ícone, sm`}),(0,x.jsx)(d,{tone:`success`,icon:n,children:`Aprovado`}),(0,x.jsx)(d,{tone:`warning`,icon:o,children:`Em análise`}),(0,x.jsx)(d,{tone:`error`,icon:h,children:`Recusado`}),(0,x.jsx)(d,{size:`sm`,children:`Rascunho`}),(0,x.jsx)(d,{size:`sm`,appearance:`solid`,tone:`error`,children:`3`})]})]})}),(0,x.jsx)(_,{codigo:`import { Badge, type BadgeTone } from '@tessela/web';

const tons: { tone: BadgeTone; nome: string }[] = [\r
  { tone: 'neutral', nome: 'Neutro' }, { tone: 'success', nome: 'Sucesso' }, { tone: 'warning', nome: 'Aviso' },\r
  { tone: 'error', nome: 'Erro' }, { tone: 'info', nome: 'Informação' },\r
];

<div className="ts:flex ts:flex-col ts:gap-8"><div className="ts:flex ts:flex-wrap ts:gap-8">{tons.map(({ tone, nome }) => <Badge key={tone} tone={tone} dot>{nome}</Badge>)}</div><div className="ts:flex ts:flex-wrap ts:gap-8">{tons.map(({ tone, nome }) => <Badge key={tone} tone={tone} appearance="solid">{nome}</Badge>)}</div></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,x.jsx)(y,{children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,x.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:C.map(({tone:e,nome:t})=>(0,x.jsx)(d,{tone:e,dot:!0,children:t},e))}),(0,x.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:C.map(({tone:e,nome:t})=>(0,x.jsx)(d,{tone:e,appearance:`solid`,children:t},e))})]})})}),(0,x.jsx)(_,{codigo:`import { Badge, type BadgeTone } from '@tessela/web';

const pedidos: { id: string; cliente: string; valor: string; status: string; tone: BadgeTone }[] = [\r
  { id: '#10482', cliente: 'Mercado Bom Preço', valor: 'R$ 1.284,90', status: 'Pago', tone: 'success' },\r
  { id: '#10481', cliente: 'Padaria Estrela', valor: 'R$ 312,00', status: 'Aguardando pagamento', tone: 'warning' },\r
  { id: '#10480', cliente: 'Farmácia Central', valor: 'R$ 18.004,15', status: 'Em separação', tone: 'info' },\r
  { id: '#10479', cliente: 'Livraria Página 12', valor: 'R$ 94,50', status: 'Cancelado', tone: 'neutral' },\r
  { id: '#10478', cliente: 'Açougue Boi Gordo', valor: 'R$ 2.450,00', status: 'Estornado', tone: 'error' },\r
];

<div className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
  <div className="ts:min-w-560">\r
    {pedidos.map((p) => (\r
      <div key={p.id} className="ts:grid ts:h-table-row-height ts:grid-cols-[80px_minmax(0,1fr)_120px_200px] ts:items-center ts:border-b ts:border-border-subtle ts:text-body-m ts:last:border-b-0">\r
        <span className="ts:px-table-cell-padding-x ts:font-mono ts:text-code ts:text-fg-secondary">{p.id}</span>\r
        <span className="ts:truncate ts:px-table-cell-padding-x">{p.cliente}</span>\r
        <span className="ts:px-table-cell-padding-x ts:text-right ts:tabular-nums">{p.valor}</span>\r
        <span className="ts:px-table-cell-padding-x"><Badge tone={p.tone} dot>{p.status}</Badge></span>\r
      </div>\r
    ))}\r
  </div>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Status de pedidos numa lista.`,children:(0,x.jsx)(`div`,{className:`ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default`,children:(0,x.jsx)(`div`,{className:`ts:min-w-560`,children:w.map(e=>(0,x.jsxs)(`div`,{className:`ts:grid ts:h-table-row-height ts:grid-cols-[80px_minmax(0,1fr)_120px_200px] ts:items-center ts:border-b ts:border-border-subtle ts:text-body-m ts:last:border-b-0`,children:[(0,x.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:font-mono ts:text-code ts:text-fg-secondary`,children:e.id}),(0,x.jsx)(`span`,{className:`ts:truncate ts:px-table-cell-padding-x`,children:e.cliente}),(0,x.jsx)(`span`,{className:`ts:px-table-cell-padding-x ts:text-right ts:tabular-nums`,children:e.valor}),(0,x.jsx)(`span`,{className:`ts:px-table-cell-padding-x`,children:(0,x.jsx)(d,{tone:e.tone,dot:!0,children:e.status})})]},e.id))})})}),(0,x.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,x.jsx)(m,{itens:[{nome:`tone`,tipo:`'neutral' | 'success' | 'warning' | 'error' | 'info'`,padrao:`'neutral'`,descricao:`Significado.`},{nome:`appearance`,tipo:`'soft' | 'solid'`,padrao:`'soft'`,descricao:`Soft para listas; solid para chamar atenção.`},{nome:`size`,tipo:`'sm' | 'md'`,padrao:`'md'`,descricao:`20 ou 24 px de altura.`},{nome:`dot`,tipo:`boolean`,padrao:`false`,descricao:`Ponto colorido antes do texto.`},{nome:`icon`,tipo:`IconComponent`,descricao:`Ícone de 12 px antes do texto.`}]})}),(0,x.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,x.jsx)(S,{itens:[(0,x.jsx)(x.Fragment,{children:`O texto diz o status; cor, ponto e ícone são reforço e ficam escondidos do leitor de tela.`}),(0,x.jsxs)(x.Fragment,{children:[`Contraste do texto verificado nos dois temas, soft e solid (`,(0,x.jsx)(v,{children:`pnpm verify`}),`).`]}),(0,x.jsx)(x.Fragment,{children:`Número sozinho precisa de contexto: "3" num badge ao lado de "Repasses" funciona; solto, escreva "3 novos".`})]})})]})}var E=[`#10482 · Mercado Bom Preço`,`#10481 · Padaria Estrela`,`#10480 · Farmácia Central`,`#10479 · Livraria Página 12`];function D(){let[e,t]=(0,b.useState)([E[1]]),n=e.length===E.length,i=e.length>0&&!n;return(0,x.jsxs)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default`,children:[(0,x.jsxs)(`div`,{className:`ts:flex ts:h-table-header-height ts:items-center ts:gap-12 ts:border-b ts:border-border-default ts:bg-bg-subtle ts:px-table-cell-padding-x`,children:[(0,x.jsx)(l,{"aria-label":`Selecionar todos os pedidos`,checked:n,indeterminate:i,onCheckedChange:e=>t(e?E:[])}),(0,x.jsx)(`span`,{className:`ts:flex-1 ts:text-label-s ts:text-fg-muted`,children:e.length>0?`${e.length} selecionado${e.length>1?`s`:``}`:`Pedido`}),e.length>0&&(0,x.jsx)(r,{size:`sm`,variant:`secondary`,children:`Exportar`})]}),E.map(n=>(0,x.jsxs)(`div`,{className:`ts:flex ts:h-table-row-height ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-table-cell-padding-x ts:text-body-m ts:last:border-b-0 ts:has-[[data-checked]]:bg-bg-hover`,children:[(0,x.jsx)(l,{"aria-label":`Selecionar ${n}`,checked:e.includes(n),onCheckedChange:r=>t(r?[...e,n]:e.filter(e=>e!==n))}),(0,x.jsx)(`span`,{children:n})]},n))]})}function O(){let[e,t]=(0,b.useState)(!1),[n,i]=(0,b.useState)(!1);return(0,x.jsxs)(`article`,{children:[(0,x.jsx)(g,{etapa:`Componente 9 · aprovado`,titulo:`Checkbox`,descricao:`Marca ou desmarca opções independentes. Tem o estado indeterminado, para "alguns marcados".`}),(0,x.jsx)(_,{codigo:`import { Checkbox } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-x-24 ts:gap-y-16 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
  <Checkbox label="Desmarcada" />\r
  <Checkbox label="Marcada" defaultChecked />\r
  <Checkbox label="Indeterminada" indeterminate />\r
  <Checkbox label="Desativada" disabled />\r
  <Checkbox label="Desativada marcada" disabled defaultChecked />\r
  <Checkbox label="Com descrição" description="Texto de apoio abaixo do rótulo." />\r
  <Checkbox label="Com erro" error="Marque para continuar." />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Caixa de 16 px, raio 4, borda de controle com 3:1. Marcada: fundo da ação principal. A área clicável passa da caixa: 24 px com mouse e 44 px com toque.`,children:(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-24 ts:gap-y-16 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,x.jsx)(l,{label:`Desmarcada`}),(0,x.jsx)(l,{label:`Marcada`,defaultChecked:!0}),(0,x.jsx)(l,{label:`Indeterminada`,indeterminate:!0}),(0,x.jsx)(l,{label:`Desativada`,disabled:!0}),(0,x.jsx)(l,{label:`Desativada marcada`,disabled:!0,defaultChecked:!0}),(0,x.jsx)(l,{label:`Com descrição`,description:`Texto de apoio abaixo do rótulo.`}),(0,x.jsx)(l,{label:`Com erro`,error:`Marque para continuar.`})]})}),(0,x.jsx)(_,{codigo:`import { Checkbox } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-12"><Checkbox label="Marcada" defaultChecked /><Checkbox label="Indeterminada" indeterminate /><Checkbox label="Desmarcada" /><Checkbox label="Desativada" disabled defaultChecked /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,x.jsx)(y,{children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,x.jsx)(l,{label:`Marcada`,defaultChecked:!0}),(0,x.jsx)(l,{label:`Indeterminada`,indeterminate:!0}),(0,x.jsx)(l,{label:`Desmarcada`}),(0,x.jsx)(l,{label:`Desativada`,disabled:!0,defaultChecked:!0})]})})}),(0,x.jsx)(_,{codigo:`import { Button, Checkbox } from '@tessela/web';
import { useState } from 'react';

const linhas = ['#10482 · Mercado Bom Preço', '#10481 · Padaria Estrela', '#10480 · Farmácia Central', '#10479 · Livraria Página 12'];

function SelecaoDeLinhas() {\r
  const [marcadas, setMarcadas] = useState<string[]>([linhas[1]!]);\r
  const todas = marcadas.length === linhas.length;\r
  const algumas = marcadas.length > 0 && !todas;\r
  return (\r
    <div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default">\r
      <div className="ts:flex ts:h-table-header-height ts:items-center ts:gap-12 ts:border-b ts:border-border-default ts:bg-bg-subtle ts:px-table-cell-padding-x">\r
        <Checkbox aria-label="Selecionar todos os pedidos" checked={todas} indeterminate={algumas} onCheckedChange={(v) => setMarcadas(v ? linhas : [])} />\r
        <span className="ts:flex-1 ts:text-label-s ts:text-fg-muted">{marcadas.length > 0 ? \`\${marcadas.length} selecionado\${marcadas.length > 1 ? 's' : ''}\` : 'Pedido'}</span>\r
        {marcadas.length > 0 && <Button size="sm" variant="secondary">Exportar</Button>}\r
      </div>\r
      {linhas.map((l) => (\r
        <div key={l} className="ts:flex ts:h-table-row-height ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-table-cell-padding-x ts:text-body-m ts:last:border-b-0 ts:has-[[data-checked]]:bg-bg-hover">\r
          <Checkbox aria-label={\`Selecionar \${l}\`} checked={marcadas.includes(l)} onCheckedChange={(v) => setMarcadas(v ? [...marcadas, l] : marcadas.filter((m) => m !== l))} />\r
          <span>{l}</span>\r
        </div>\r
      ))}\r
    </div>\r
  );\r
}

<div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1">\r
  <div className="ts:flex ts:flex-col ts:gap-8">\r
    <p className="ts:text-label-s ts:text-fg-muted">Seleção de linhas: o cabeçalho marca todas e fica indeterminado com algumas</p>\r
    <SelecaoDeLinhas />\r
  </div>\r
  <form noValidate onSubmit={(e) => { e.preventDefault(); setEnviado(true); }} className="ts:flex ts:flex-col ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
    <p className="ts:text-label-s ts:text-fg-muted">Permissões do usuário</p>\r
    <Checkbox label="Ver pedidos" defaultChecked description="Lista e detalhe de todos os pedidos." />\r
    <Checkbox label="Editar preços" description="Muda o valor dos produtos no catálogo." />\r
    <Checkbox label="Fazer estornos" description="Devolve o dinheiro ao cliente." />\r
    <Checkbox label="Li e aceito os termos de uso" checked={termos} onCheckedChange={(v) => setTermos(v)} error={enviado && !termos ? 'Aceite os termos para salvar.' : undefined} />\r
    <div className="ts:flex ts:justify-end"><Button type="submit">Salvar permissões</Button></div>\r
  </form>\r
</div>`,id:`em-uso`,titulo:`Em uso`,children:(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Seleção de linhas: o cabeçalho marca todas e fica indeterminado com algumas`}),(0,x.jsx)(D,{})]}),(0,x.jsxs)(`form`,{noValidate:!0,onSubmit:e=>{e.preventDefault(),i(!0)},className:`ts:flex ts:flex-col ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Permissões do usuário`}),(0,x.jsx)(l,{label:`Ver pedidos`,defaultChecked:!0,description:`Lista e detalhe de todos os pedidos.`}),(0,x.jsx)(l,{label:`Editar preços`,description:`Muda o valor dos produtos no catálogo.`}),(0,x.jsx)(l,{label:`Fazer estornos`,description:`Devolve o dinheiro ao cliente.`}),(0,x.jsx)(l,{label:`Li e aceito os termos de uso`,checked:e,onCheckedChange:e=>t(e),error:n&&!e?`Aceite os termos para salvar.`:void 0}),(0,x.jsx)(`div`,{className:`ts:flex ts:justify-end`,children:(0,x.jsx)(r,{type:`submit`,children:`Salvar permissões`})})]})]})}),(0,x.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,x.jsx)(m,{itens:[{nome:`label`,tipo:`ReactNode`,descricao:`Texto ao lado; clicar nele marca. Sem ele, passe aria-label.`},{nome:`description`,tipo:`ReactNode`,descricao:`Ajuda abaixo do rótulo.`},{nome:`error`,tipo:`ReactNode`,descricao:`Erro; deixa a caixa inválida.`},{nome:`checked / defaultChecked`,tipo:`boolean`,descricao:`Controlado ou inicial.`},{nome:`onCheckedChange`,tipo:`(marcado, detalhes) => void`,descricao:`Chamado a cada troca.`},{nome:`indeterminate`,tipo:`boolean`,padrao:`false`,descricao:`Estado "alguns marcados".`},{nome:`disabled / name / required`,tipo:`—`,descricao:`Como no <input type="checkbox">.`}]})}),(0,x.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,x.jsx)(S,{itens:[(0,x.jsx)(x.Fragment,{children:`Espaço marca e desmarca; Tab passa de uma caixa à outra.`}),(0,x.jsxs)(x.Fragment,{children:[`O indeterminado é anunciado como "misto" (`,(0,x.jsx)(v,{children:`aria-checked="mixed"`}),`).`]}),(0,x.jsx)(x.Fragment,{children:`Descrição e erro são descrições da caixa. O erro tem ícone e texto.`}),(0,x.jsx)(x.Fragment,{children:`A caixa tem 16 px, mas a área clicável tem 24 px com mouse (WCAG 2.2). Com toque, ela cresce até 44 × 44 px em volta da caixa, sem mudar o desenho nem o layout.`}),(0,x.jsx)(x.Fragment,{children:`O anel de foco fica em volta da caixa, não da área de toque.`})]})})]})}function k(){let[e,t]=(0,b.useState)(`normal`),[n,r]=(0,b.useState)(`7`);return(0,x.jsxs)(`article`,{children:[(0,x.jsx)(g,{etapa:`Componente 10 · aprovado`,titulo:`Radio`,descricao:(0,x.jsxs)(x.Fragment,{children:[`Escolha única entre poucas opções visíveis. Com muitas opções, use o Select. Sempre dentro de um `,(0,x.jsx)(v,{children:`RadioGroup`}),`.`]})}),(0,x.jsx)(_,{codigo:`import { Radio, RadioGroup } from '@tessela/web';

<div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1">\r
  <RadioGroup label="Tipo de frete" description="Vale para todos os pedidos da loja." value={frete} onValueChange={setFrete}>\r
    <Radio value="normal" label="Normal" description="5 a 7 dias úteis" />\r
    <Radio value="expresso" label="Expresso" description="1 a 2 dias úteis" />\r
    <Radio value="retirada" label="Retirar na loja" description="Indisponível nesta loja" disabled />\r
  </RadioGroup>\r
  <RadioGroup label="Forma de repasse" defaultValue="pix" error="Confirme os dados bancários antes de trocar.">\r
    <Radio value="pix" label="Pix" />\r
    <Radio value="ted" label="TED" />\r
  </RadioGroup>\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Círculo de 16 px. Escolhido: fundo da ação principal com ponto de 6 px. A área clicável passa do círculo: 24 px com mouse e 44 px com toque.`,children:(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-md:grid-cols-1`,children:[(0,x.jsxs)(f,{label:`Tipo de frete`,description:`Vale para todos os pedidos da loja.`,value:e,onValueChange:t,children:[(0,x.jsx)(p,{value:`normal`,label:`Normal`,description:`5 a 7 dias úteis`}),(0,x.jsx)(p,{value:`expresso`,label:`Expresso`,description:`1 a 2 dias úteis`}),(0,x.jsx)(p,{value:`retirada`,label:`Retirar na loja`,description:`Indisponível nesta loja`,disabled:!0})]}),(0,x.jsxs)(f,{label:`Forma de repasse`,defaultValue:`pix`,error:`Confirme os dados bancários antes de trocar.`,children:[(0,x.jsx)(p,{value:`pix`,label:`Pix`}),(0,x.jsx)(p,{value:`ted`,label:`TED`})]})]})}),(0,x.jsx)(_,{codigo:`import { Radio, RadioGroup } from '@tessela/web';
import { Barcode, CreditCard, QrCode } from 'lucide-react';

<div className="ts:max-w-480">\r
  <RadioGroup label="Forma de pagamento" variant="list" defaultValue="cartao">\r
    <Radio value="cartao" icon={CreditCard} label="Cartão de crédito" description="Cobrado todo mês, no mesmo dia." />\r
    <Radio value="pix" icon={QrCode} label="Pix Automático" description="Você autoriza uma vez no app do banco." />\r
    <Radio value="boleto" icon={Barcode} label="Boleto" description="Indisponível para este plano" disabled />\r
  </RadioGroup>\r
</div>`,id:`lista`,titulo:`Lista`,descricao:`variant="list": opções numa caixa com borda, uma por linha. A linha inteira escolhe, a escolhida ganha fundo de seleção e o ícone ajuda a reconhecer a opção. Para forma de pagamento e plano.`,children:(0,x.jsx)(`div`,{className:`ts:max-w-480`,children:(0,x.jsxs)(f,{label:`Forma de pagamento`,variant:`list`,defaultValue:`cartao`,children:[(0,x.jsx)(p,{value:`cartao`,icon:s,label:`Cartão de crédito`,description:`Cobrado todo mês, no mesmo dia.`}),(0,x.jsx)(p,{value:`pix`,icon:a,label:`Pix Automático`,description:`Você autoriza uma vez no app do banco.`}),(0,x.jsx)(p,{value:`boleto`,icon:i,label:`Boleto`,description:`Indisponível para este plano`,disabled:!0})]})})}),(0,x.jsx)(_,{codigo:`import { Radio, RadioGroup } from '@tessela/web';

<RadioGroup label="Frete" defaultValue="normal"><Radio value="normal" label="Normal" /><Radio value="expresso" label="Expresso" /><Radio value="retirada" label="Retirada" disabled /></RadioGroup>`,id:`temas`,titulo:`Temas e densidades`,children:(0,x.jsx)(y,{children:(0,x.jsxs)(f,{label:`Frete`,defaultValue:`normal`,children:[(0,x.jsx)(p,{value:`normal`,label:`Normal`}),(0,x.jsx)(p,{value:`expresso`,label:`Expresso`}),(0,x.jsx)(p,{value:`retirada`,label:`Retirada`,disabled:!0})]})})}),(0,x.jsx)(_,{codigo:`import { Radio, RadioGroup } from '@tessela/web';

<div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
  <RadioGroup label="Período do relatório" orientation="horizontal" value={periodo} onValueChange={setPeriodo}>\r
    <Radio value="hoje" label="Hoje" />\r
    <Radio value="7" label="7 dias" />\r
    <Radio value="30" label="30 dias" />\r
    <Radio value="ano" label="Este ano" />\r
  </RadioGroup>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Lado a lado para opções curtas.`,children:(0,x.jsx)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:(0,x.jsxs)(f,{label:`Período do relatório`,orientation:`horizontal`,value:n,onValueChange:r,children:[(0,x.jsx)(p,{value:`hoje`,label:`Hoje`}),(0,x.jsx)(p,{value:`7`,label:`7 dias`}),(0,x.jsx)(p,{value:`30`,label:`30 dias`}),(0,x.jsx)(p,{value:`ano`,label:`Este ano`})]})})}),(0,x.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,x.jsx)(m,{itens:[{nome:`RadioGroup`,tipo:`label, description, error, value, defaultValue, onValueChange, orientation, disabled, name`,descricao:`O grupo; label nomeia o grupo.`},{nome:`RadioGroup · variant`,tipo:`'default' | 'list'`,padrao:`'default'`,descricao:`list: caixa com borda, uma opção por linha, linha inteira clicável.`},{nome:`Radio`,tipo:`value, label, description, icon, disabled`,descricao:`Uma opção; icon é decorativo, antes do rótulo.`}]})}),(0,x.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,x.jsx)(S,{itens:[(0,x.jsx)(x.Fragment,{children:`Tab entra no grupo pela opção escolhida; setas trocam a opção e já escolhem, pulando as desativadas.`}),(0,x.jsx)(x.Fragment,{children:`O grupo é nomeado pelo rótulo e descrito pela ajuda e pelo erro.`}),(0,x.jsx)(x.Fragment,{children:`Com toque, a área clicável do círculo cresce até 44 × 44 px, sem mudar o desenho nem o layout. Com mouse, ela é a do círculo, completada até 24 px. O anel de foco fica no círculo.`})]})})]})}function A(){let[e,t]=(0,b.useState)({email:!0,pedidos:!0,manutencao:!1});return(0,x.jsxs)(`article`,{children:[(0,x.jsx)(g,{etapa:`Componente 11 · aprovado`,titulo:`Switch`,descricao:`Liga e desliga um ajuste que vale na hora, sem botão de salvar. Para escolher algo que só vale ao salvar, use o Checkbox.`}),(0,x.jsx)(_,{codigo:`import { Switch } from '@tessela/web';

<div className="ts:grid ts:grid-cols-2 ts:gap-x-24 ts:gap-y-16 ts:max-md:grid-cols-1">\r
  <Switch label="Desligado" />\r
  <Switch label="Ligado" defaultChecked />\r
  <Switch label="Desativado" disabled />\r
  <Switch label="Desativado ligado" disabled defaultChecked />\r
  <Switch label="Com descrição" description="Texto de apoio abaixo do rótulo." />\r
  <Switch label="Com erro" error="Corrija os avisos antes de salvar." />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Trilho de 36 × 20; desligado na cor de borda de controle (3:1), ligado no fundo da ação principal. A bolinha anda em 100 ms.`,children:(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-24 ts:gap-y-16 ts:max-md:grid-cols-1`,children:[(0,x.jsx)(u,{label:`Desligado`}),(0,x.jsx)(u,{label:`Ligado`,defaultChecked:!0}),(0,x.jsx)(u,{label:`Desativado`,disabled:!0}),(0,x.jsx)(u,{label:`Desativado ligado`,disabled:!0,defaultChecked:!0}),(0,x.jsx)(u,{label:`Com descrição`,description:`Texto de apoio abaixo do rótulo.`}),(0,x.jsx)(u,{label:`Com erro`,error:`Corrija os avisos antes de salvar.`})]})}),(0,x.jsx)(_,{codigo:`import { Switch } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-12"><Switch label="Ligado" defaultChecked /><Switch label="Desligado" /><Switch label="Desativado" disabled defaultChecked /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,x.jsx)(y,{children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,x.jsx)(u,{label:`Ligado`,defaultChecked:!0}),(0,x.jsx)(u,{label:`Desligado`}),(0,x.jsx)(u,{label:`Desativado`,disabled:!0,defaultChecked:!0})]})})}),(0,x.jsx)(_,{codigo:`import { Switch } from '@tessela/web';

<div className="ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface">\r
  {([\r
    ['email', 'Resumo diário por e-mail', 'Pedidos e repasses do dia, às 19h.'],\r
    ['pedidos', 'Aceitar pedidos', 'Desligado, a loja aparece como fechada.'],\r
    ['manutencao', 'Modo manutenção', 'Só administradores acessam o painel.'],\r
  ] as const).map(([k, rotulo, descricao]) => (\r
    <div key={k} className="ts:border-b ts:border-border-subtle ts:px-20 ts:py-16 ts:last:border-b-0">\r
      <Switch labelPosition="start" label={rotulo} description={descricao} checked={ajustes[k]} onCheckedChange={(v) => setAjustes({ ...ajustes, [k]: v })} />\r
    </div>\r
  ))}\r
  <div className="ts:px-20 ts:py-16">\r
    <Switch labelPosition="start" label="Integração com o ERP" description="Disponível no plano Pro." disabled />\r
  </div>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Lista de ajustes: texto à esquerda, chave no fim da linha.`,children:(0,x.jsxs)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface`,children:[[[`email`,`Resumo diário por e-mail`,`Pedidos e repasses do dia, às 19h.`],[`pedidos`,`Aceitar pedidos`,`Desligado, a loja aparece como fechada.`],[`manutencao`,`Modo manutenção`,`Só administradores acessam o painel.`]].map(([n,r,i])=>(0,x.jsx)(`div`,{className:`ts:border-b ts:border-border-subtle ts:px-20 ts:py-16 ts:last:border-b-0`,children:(0,x.jsx)(u,{labelPosition:`start`,label:r,description:i,checked:e[n],onCheckedChange:r=>t({...e,[n]:r})})},n)),(0,x.jsx)(`div`,{className:`ts:px-20 ts:py-16`,children:(0,x.jsx)(u,{labelPosition:`start`,label:`Integração com o ERP`,description:`Disponível no plano Pro.`,disabled:!0})})]})}),(0,x.jsx)(_,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,x.jsx)(m,{itens:[{nome:`label`,tipo:`ReactNode`,descricao:`Texto; clicar nele liga e desliga.`},{nome:`description`,tipo:`ReactNode`,descricao:`Ajuda abaixo do rótulo.`},{nome:`error`,tipo:`ReactNode`,descricao:`Erro ligado à chave; marca o campo como inválido.`},{nome:`labelPosition`,tipo:`'end' | 'start'`,padrao:`'end'`,descricao:`'start' põe a chave no fim da linha (listas de ajustes).`},{nome:`checked / defaultChecked / onCheckedChange`,tipo:`—`,descricao:`Controlado ou inicial.`},{nome:`disabled / name`,tipo:`—`,descricao:`Como no Checkbox.`}]})}),(0,x.jsx)(_,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,x.jsx)(S,{itens:[(0,x.jsx)(x.Fragment,{children:`É anunciado como interruptor ("switch"), com o estado ligado ou desligado.`}),(0,x.jsx)(x.Fragment,{children:`Espaço e Enter alternam. A descrição é lida junto, sem entrar no nome.`}),(0,x.jsx)(x.Fragment,{children:`Com toque, a área clicável cresce até 44 × 44 px em volta do trilho, sem mudar o desenho nem o layout. Com mouse, ela é a do trilho, completada até 24 px. O anel de foco fica no trilho.`}),(0,x.jsx)(x.Fragment,{children:`Com movimento reduzido, a bolinha troca de lado sem animar.`})]})})]})}export{T as BadgePagina,O as CheckboxPagina,k as RadioPagina,A as SwitchPagina};