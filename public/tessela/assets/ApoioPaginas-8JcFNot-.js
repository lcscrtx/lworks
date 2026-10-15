import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{p as n,sr as r}from"./Codigo-Dgz1In5l.js";import{n as i}from"./DatePicker-CzUMwvCG.js";import{t as a}from"./Input-BBFu0gZj.js";import{t as o}from"./funnel-ER9ATl0z.js";import{t as s}from"./refresh-cw-DF2oHPTV.js";import{s as c}from"./tiptap-jvs8iIPE.js";import{t as l}from"./Select-DFPozajq.js";import{a as u}from"./Estrutura-Bg5zrcqs.js";import{t as d}from"./Checkbox-v-rRjqnt.js";import{n as f,t as p}from"./Radio-nPOo0-9S.js";import{B as m,G as h,H as g,K as _,U as v,V as y,W as b,_ as x,f as S,g as C,mn as w,p as T,q as E,v as D}from"./index-3SU4ioj-.js";var O=e(t(),1),k=c();function A({itens:e}){return(0,k.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,k.jsx)(`li`,{children:e},t))})}function j(){let[e,t]=(0,O.useState)(!0);return(0,k.jsx)(u,{title:`Integração com o iFood`,description:`Pedidos entram sozinhos no painel.`,children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,k.jsx)(m,{tone:`error`,title:`A conexão caiu às 14:32`,actions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{size:`sm`,leadingIcon:s,children:`Reconectar`}),(0,k.jsx)(r,{size:`sm`,variant:`ghost`,children:`Ver o registro`})]}),children:`Pedidos feitos depois disso não aparecem aqui. Reconecte para buscar os que ficaram de fora.`}),e&&(0,k.jsx)(m,{tone:`info`,title:`Novos campos no cardápio`,onDismiss:()=>t(!1),children:`Agora dá para marcar produtos sem glúten e veganos.`}),(0,k.jsx)(a,{label:`Código da loja`,defaultValue:`LJ-2931`})]})})}function M(){return(0,k.jsxs)(`article`,{children:[(0,k.jsx)(S,{etapa:`Componente 27 · no catálogo`,titulo:`Alert`,descricao:(0,k.jsx)(k.Fragment,{children:`Aviso na própria página, junto do que ele fala: um erro que impede a tarefa, um cuidado antes de agir, uma informação que vale enquanto a pessoa está ali. Para avisar algo que acabou de acontecer, use o Toast.`})}),(0,k.jsx)(C,{codigo:`import { Alert } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-12">\r
  <Alert title="Rascunho">Este cardápio ainda não foi publicado.</Alert>\r
  <Alert tone="info" title="Manutenção programada">O painel fica fora do ar domingo, das 2h às 4h.</Alert>\r
  <Alert tone="success" title="Domínio verificado">Os e-mails da loja já saem com o seu endereço.</Alert>\r
  <Alert tone="warning" title="Estoque baixo em 3 produtos">Eles somem do cardápio quando zerarem.</Alert>\r
  <Alert tone="error" title="Pagamento recusado">O cartão final 4242 foi recusado. Atualize a forma de pagamento para manter o plano.</Alert>\r
</div>`,id:`tons`,titulo:`Tons`,descricao:`A cor fica no fundo, na borda e no ícone; o texto continua em cinza, com contraste verificado.`,children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,k.jsx)(m,{title:`Rascunho`,children:`Este cardápio ainda não foi publicado.`}),(0,k.jsx)(m,{tone:`info`,title:`Manutenção programada`,children:`O painel fica fora do ar domingo, das 2h às 4h.`}),(0,k.jsx)(m,{tone:`success`,title:`Domínio verificado`,children:`Os e-mails da loja já saem com o seu endereço.`}),(0,k.jsx)(m,{tone:`warning`,title:`Estoque baixo em 3 produtos`,children:`Eles somem do cardápio quando zerarem.`}),(0,k.jsx)(m,{tone:`error`,title:`Pagamento recusado`,children:`O cartão final 4242 foi recusado. Atualize a forma de pagamento para manter o plano.`})]})}),(0,k.jsx)(C,{codigo:`import { Alert, Button } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-12">\r
  <Alert tone="success" title="Alterações salvas" />\r
  <Alert tone="info">Os preços valem a partir de amanhã.</Alert>\r
  <Alert tone="warning" title="Você vai excluir 12 produtos" actions={<><Button size="sm" variant="destructive">Excluir mesmo assim</Button><Button size="sm" variant="ghost">Revisar</Button></>}>Eles saem do cardápio e dos relatórios.</Alert>\r
  <Alert tone="info" title="Dica" onDismiss={() => {}}>Arraste as categorias para mudar a ordem no cardápio.</Alert>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Só título, só texto, com ações e com o X para dispensar.`,children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,k.jsx)(m,{tone:`success`,title:`Alterações salvas`}),(0,k.jsx)(m,{tone:`info`,children:`Os preços valem a partir de amanhã.`}),(0,k.jsx)(m,{tone:`warning`,title:`Você vai excluir 12 produtos`,actions:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{size:`sm`,variant:`destructive`,children:`Excluir mesmo assim`}),(0,k.jsx)(r,{size:`sm`,variant:`ghost`,children:`Revisar`})]}),children:`Eles saem do cardápio e dos relatórios.`}),(0,k.jsx)(m,{tone:`info`,title:`Dica`,onDismiss:()=>{},children:`Arraste as categorias para mudar a ordem no cardápio.`})]})}),(0,k.jsx)(C,{codigo:`import { Alert } from '@tessela/web';

<div className="ts:flex ts:flex-col ts:gap-8"><Alert tone="warning" title="Estoque baixo">3 produtos.</Alert><Alert tone="error" title="Pagamento recusado" /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,k.jsx)(D,{children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,k.jsx)(m,{tone:`warning`,title:`Estoque baixo`,children:`3 produtos.`}),(0,k.jsx)(m,{tone:`error`,title:`Pagamento recusado`})]})})}),(0,k.jsx)(C,{codigo:`import { Alert, Button, Card, Input } from '@tessela/web';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

function AlertEmUso() {\r
  const [visivel, setVisivel] = useState(true);\r
  return (\r
    <Card title="Integração com o iFood" description="Pedidos entram sozinhos no painel.">\r
      <div className="ts:flex ts:flex-col ts:gap-16">\r
        <Alert tone="error" title="A conexão caiu às 14:32" actions={<><Button size="sm" leadingIcon={RefreshCw}>Reconectar</Button><Button size="sm" variant="ghost">Ver o registro</Button></>}>\r
          Pedidos feitos depois disso não aparecem aqui. Reconecte para buscar os que ficaram de fora.\r
        </Alert>\r
        {visivel && <Alert tone="info" title="Novos campos no cardápio" onDismiss={() => setVisivel(false)}>Agora dá para marcar produtos sem glúten e veganos.</Alert>}\r
        <Input label="Código da loja" defaultValue="LJ-2931" />\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-640"><AlertEmUso /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Configuração de uma integração: o erro fica no topo do card que ele afeta.`,children:(0,k.jsx)(`div`,{className:`ts:max-w-640`,children:(0,k.jsx)(j,{})})}),(0,k.jsx)(C,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,k.jsx)(x,{itens:[{nome:`tone`,tipo:`'neutral' | 'info' | 'success' | 'warning' | 'error'`,padrao:`'neutral'`,descricao:`Cor e ícone.`},{nome:`title / children`,tipo:`ReactNode`,descricao:`Título curto e texto.`},{nome:`actions`,tipo:`ReactNode`,descricao:`Botões pequenos abaixo do texto.`},{nome:`icon`,tipo:`IconComponent | false`,descricao:`Troca o ícone do tom; false tira.`},{nome:`onDismiss`,tipo:`() => void`,descricao:`Mostra o X para dispensar.`}]})}),(0,k.jsx)(C,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,k.jsx)(A,{itens:[(0,k.jsxs)(k.Fragment,{children:[`Erro e aviso usam `,(0,k.jsx)(T,{children:`role="alert"`}),` (anunciados ao aparecer); os outros, `,(0,k.jsx)(T,{children:`role="status"`}),`.`]}),(0,k.jsx)(k.Fragment,{children:`O tom não depende da cor: o título diz o que é.`}),(0,k.jsx)(k.Fragment,{children:`Não use Alert para tudo: muitos avisos na tela viram ruído.`})]})})]})}function N(){let[e,t]=(0,O.useState)(0);return(0,O.useEffect)(()=>{let e=setInterval(()=>t(e=>e>=100?0:e+4),300);return()=>clearInterval(e)},[]),(0,k.jsx)(u,{title:`Importar produtos`,description:`cardapio-inverno.xlsx · 1.240 linhas`,children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,k.jsx)(_,{value:e,label:e>=100?`Importação concluída`:`Importando produtos`,showValue:!0}),(0,k.jsxs)(`p`,{className:`ts:text-body-s ts:text-fg-secondary ts:tabular-nums`,children:[Math.round(e/100*1240),` de 1.240 linhas`]})]})})}function P(){return(0,k.jsxs)(`article`,{children:[(0,k.jsx)(S,{etapa:`Componente 28 · no catálogo`,titulo:`Progress`,descricao:(0,k.jsxs)(k.Fragment,{children:[`Barra de andamento de uma tarefa que demora: envio de arquivo, importação, exportação. Sem valor (`,(0,k.jsx)(T,{children:`null`}),`), a barra corre até a tarefa dizer quanto falta.`]})}),(0,k.jsx)(C,{codigo:`import { Progress } from '@tessela/web';

<div className="ts:grid ts:max-w-560 ts:gap-24">\r
  <Progress value={0} label="Aguardando" showValue />\r
  <Progress value={62} label="Enviando fotos" showValue />\r
  <Progress value={100} label="Concluído" showValue />\r
  <Progress value={null} label="Preparando o arquivo" />\r
  <Progress value={48} label="Falhou em 48%" showValue error />\r
  <Progress value={35} size="sm" aria-label="Envio" />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`md (6 px) e sm (4 px). Na cor da ação principal; no erro, vermelha.`,children:(0,k.jsxs)(`div`,{className:`ts:grid ts:max-w-560 ts:gap-24`,children:[(0,k.jsx)(_,{value:0,label:`Aguardando`,showValue:!0}),(0,k.jsx)(_,{value:62,label:`Enviando fotos`,showValue:!0}),(0,k.jsx)(_,{value:100,label:`Concluído`,showValue:!0}),(0,k.jsx)(_,{value:null,label:`Preparando o arquivo`}),(0,k.jsx)(_,{value:48,label:`Falhou em 48%`,showValue:!0,error:!0}),(0,k.jsx)(_,{value:35,size:`sm`,"aria-label":`Envio`})]})}),(0,k.jsx)(C,{codigo:`import { Progress } from '@tessela/web';

<div className="ts:grid ts:gap-16"><Progress value={62} label="Enviando" showValue /><Progress value={null} aria-label="Carregando" size="sm" /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,k.jsx)(D,{children:(0,k.jsxs)(`div`,{className:`ts:grid ts:gap-16`,children:[(0,k.jsx)(_,{value:62,label:`Enviando`,showValue:!0}),(0,k.jsx)(_,{value:null,"aria-label":`Carregando`,size:`sm`})]})})}),(0,k.jsx)(C,{codigo:`import { Card, Progress } from '@tessela/web';
import { useEffect, useState } from 'react';

function Importacao() {\r
  const [valor, setValor] = useState(0);\r
  useEffect(() => {\r
    const t = setInterval(() => setValor((v) => (v >= 100 ? 0 : v + 4)), 300);\r
    return () => clearInterval(t);\r
  }, []);\r
  return (\r
    <Card title="Importar produtos" description="cardapio-inverno.xlsx · 1.240 linhas">\r
      <div className="ts:flex ts:flex-col ts:gap-16">\r
        <Progress value={valor} label={valor >= 100 ? 'Importação concluída' : 'Importando produtos'} showValue />\r
        <p className="ts:text-body-s ts:text-fg-secondary ts:tabular-nums">{Math.round((valor / 100) * 1240)} de 1.240 linhas</p>\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-560"><Importacao /></div>`,id:`em-uso`,titulo:`Em uso`,children:(0,k.jsx)(`div`,{className:`ts:max-w-560`,children:(0,k.jsx)(N,{})})}),(0,k.jsx)(C,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,k.jsx)(x,{itens:[{nome:`value`,tipo:`number | null`,descricao:`De 0 a 100; null quando não dá para saber quanto falta.`},{nome:`label / aria-label`,tipo:`ReactNode / string`,descricao:`Rótulo visível ou só para o leitor de tela.`},{nome:`showValue`,tipo:`boolean`,padrao:`false`,descricao:`Porcentagem na localidade, à direita.`},{nome:`size`,tipo:`'sm' | 'md'`,padrao:`'md'`,descricao:`4 ou 6 px.`},{nome:`error`,tipo:`boolean`,padrao:`false`,descricao:`Barra vermelha; o texto do erro fica com quem usa.`}]})}),(0,k.jsx)(C,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,k.jsx)(A,{itens:[(0,k.jsxs)(k.Fragment,{children:[`É um `,(0,k.jsx)(T,{children:`progressbar`}),` com nome e valor; sem valor, fica indeterminada.`]}),(0,k.jsx)(k.Fragment,{children:`Com movimento reduzido, a barra indeterminada não corre: fica cheia e mais clara.`})]})})]})}function F(){let e=E();return(0,k.jsxs)(`article`,{children:[(0,k.jsx)(S,{etapa:`Componente 29 · no catálogo`,titulo:`Kbd`,descricao:(0,k.jsxs)(k.Fragment,{children:[`Tecla ou atalho escrito na tela, em menus, dicas e na busca. `,(0,k.jsx)(T,{children:`modKey()`}),` devolve ⌘ no Mac e Ctrl nos outros sistemas.`]})}),(0,k.jsx)(C,{codigo:`import { Button, Kbd } from '@tessela/web';
import { Search } from 'lucide-react';

<div className="ts:flex ts:flex-col ts:gap-16 ts:text-body-m ts:text-fg-secondary">\r
  <p className="ts:flex ts:items-center ts:gap-8">Abrir a busca <span className="ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>K</Kbd></span></p>\r
  <p className="ts:flex ts:items-center ts:gap-8">Salvar <span className="ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>S</Kbd></span></p>\r
  <p className="ts:flex ts:items-center ts:gap-8">Fechar <Kbd>Esc</Kbd></p>\r
  <p className="ts:flex ts:items-center ts:gap-8">Navegar <span className="ts:inline-flex ts:gap-2"><Kbd>↑</Kbd><Kbd>↓</Kbd></span> e escolher <Kbd>Enter</Kbd></p>\r
  <div className="ts:flex ts:items-center ts:gap-8">\r
    <Button variant="secondary" leadingIcon={Search} aria-keyshortcuts="Meta+K Control+K" className="ts:w-240 ts:justify-start ts:text-fg-muted">\r
      Buscar… <span className="ts:ml-auto ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>K</Kbd></span>\r
    </Button>\r
  </div>\r
</div>`,id:`exemplos`,titulo:`Exemplos`,descricao:`Teclas com 20 px de altura; um atalho é uma sequência de teclas separadas por 2 px.`,children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16 ts:text-body-m ts:text-fg-secondary`,children:[(0,k.jsxs)(`p`,{className:`ts:flex ts:items-center ts:gap-8`,children:[`Abrir a busca `,(0,k.jsxs)(`span`,{className:`ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:e}),(0,k.jsx)(y,{children:`K`})]})]}),(0,k.jsxs)(`p`,{className:`ts:flex ts:items-center ts:gap-8`,children:[`Salvar `,(0,k.jsxs)(`span`,{className:`ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:e}),(0,k.jsx)(y,{children:`S`})]})]}),(0,k.jsxs)(`p`,{className:`ts:flex ts:items-center ts:gap-8`,children:[`Fechar `,(0,k.jsx)(y,{children:`Esc`})]}),(0,k.jsxs)(`p`,{className:`ts:flex ts:items-center ts:gap-8`,children:[`Navegar `,(0,k.jsxs)(`span`,{className:`ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:`↑`}),(0,k.jsx)(y,{children:`↓`})]}),` e escolher `,(0,k.jsx)(y,{children:`Enter`})]}),(0,k.jsx)(`div`,{className:`ts:flex ts:items-center ts:gap-8`,children:(0,k.jsxs)(r,{variant:`secondary`,leadingIcon:w,"aria-keyshortcuts":`Meta+K Control+K`,className:`ts:w-240 ts:justify-start ts:text-fg-muted`,children:[`Buscar… `,(0,k.jsxs)(`span`,{className:`ts:ml-auto ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:e}),(0,k.jsx)(y,{children:`K`})]})]})})]})}),(0,k.jsx)(C,{codigo:`import { Kbd } from '@tessela/web';

<span className="ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>K</Kbd></span>`,id:`temas`,titulo:`Temas e densidades`,children:(0,k.jsx)(D,{children:(0,k.jsxs)(`span`,{className:`ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:e}),(0,k.jsx)(y,{children:`K`})]})})}),(0,k.jsx)(C,{codigo:`import { Button, Card, Kbd } from '@tessela/web';
import { Search } from 'lucide-react';

<Card title="Busca rápida"><Button variant="secondary" leadingIcon={Search} aria-keyshortcuts="Meta+K Control+K">Buscar… <span className="ts:ml-auto ts:inline-flex ts:gap-2"><Kbd>{mod}</Kbd><Kbd>K</Kbd></span></Button></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Atalhos visíveis na busca; o botão continua acionável pelo mouse e por Tab.`,children:(0,k.jsx)(u,{title:`Busca rápida`,children:(0,k.jsxs)(r,{variant:`secondary`,leadingIcon:w,"aria-keyshortcuts":`Meta+K Control+K`,children:[`Buscar… `,(0,k.jsxs)(`span`,{className:`ts:ml-auto ts:inline-flex ts:gap-2`,children:[(0,k.jsx)(y,{children:e}),(0,k.jsx)(y,{children:`K`})]})]})})}),(0,k.jsx)(C,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,k.jsx)(x,{itens:[{nome:`children`,tipo:`ReactNode`,descricao:`Tecla ou combinação mostrada.`},{nome:`className`,tipo:`string`,descricao:`Classes adicionais para posicionar a tecla.`}]})}),(0,k.jsx)(C,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,k.jsx)(A,{itens:[(0,k.jsxs)(k.Fragment,{children:[`É um `,(0,k.jsx)(T,{children:`<kbd>`}),`. No botão que o atalho aciona, declare `,(0,k.jsx)(T,{children:`aria-keyshortcuts`}),`.`]}),(0,k.jsx)(k.Fragment,{children:`O atalho é um extra: tudo continua possível com o mouse e com Tab.`})]})})]})}var I=[{value:`todas`,label:`Todas as lojas`},{value:`centro`,label:`Loja Centro`},{value:`moinhos`,label:`Moinhos`}];function L(){let[e,t]=(0,O.useState)([`pago`,`pendente`]),[a,c]=(0,O.useState)(2),u=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[(0,k.jsxs)(g,{children:[(0,k.jsx)(h,{children:(0,k.jsxs)(r,{variant:`secondary`,leadingIcon:o,children:[`Filtros`,a>0?` · ${a}`:``]})}),(0,k.jsx)(b,{title:`Filtrar pedidos`,width:340,footer:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r,{size:`sm`,variant:`ghost`,onClick:()=>t([]),children:`Limpar`}),(0,k.jsx)(v,{children:(0,k.jsx)(r,{size:`sm`,onClick:()=>c(e.length),children:`Aplicar`})})]}),children:(0,k.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,k.jsxs)(`fieldset`,{className:`ts:flex ts:flex-col ts:gap-8`,children:[(0,k.jsx)(`legend`,{className:`ts:mb-8 ts:text-label-s ts:text-fg-muted`,children:`Status`}),[[`pago`,`Pago`],[`pendente`,`Pendente`],[`enviado`,`Enviado`],[`cancelado`,`Cancelado`]].map(([t,n])=>(0,k.jsx)(d,{label:n,checked:e.includes(t),onCheckedChange:e=>u(t,e)},t))]}),(0,k.jsx)(l,{label:`Loja`,options:I,defaultValue:`todas`}),(0,k.jsx)(i,{label:`Período`})]})})]}),(0,k.jsxs)(g,{children:[(0,k.jsx)(h,{children:(0,k.jsx)(n,{icon:s,label:`Atualização automática`,variant:`secondary`})}),(0,k.jsx)(b,{title:`Atualização automática`,description:`Com que frequência a lista busca pedidos novos.`,width:280,children:(0,k.jsxs)(f,{defaultValue:`30`,"aria-label":`Frequência`,children:[(0,k.jsx)(p,{value:`0`,label:`Desligada`}),(0,k.jsx)(p,{value:`30`,label:`A cada 30 segundos`}),(0,k.jsx)(p,{value:`60`,label:`A cada minuto`})]})})]})]})}function R(){return(0,k.jsxs)(`article`,{children:[(0,k.jsx)(S,{etapa:`Componente 30 · no catálogo`,titulo:`Popover`,descricao:(0,k.jsx)(k.Fragment,{children:`Caixa que abre junto de um botão para um conteúdo curto e interativo: filtros, ajustes rápidos, um formulário pequeno. Para uma lista de ações, use o Menu; para uma tarefa maior, o Dialog.`})}),(0,k.jsx)(C,{codigo:`import { Button, Checkbox, DateRangePicker, IconButton, Popover, PopoverClose, PopoverContent, PopoverTrigger, Radio, RadioGroup, Select } from '@tessela/web';
import { Filter, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const lojas = [{ value: 'todas', label: 'Todas as lojas' }, { value: 'centro', label: 'Loja Centro' }, { value: 'moinhos', label: 'Moinhos' }];

function PainelDeFiltros() {\r
  const [status, setStatus] = useState<string[]>(['pago', 'pendente']);\r
  const [aplicados, setAplicados] = useState(2);\r
  const alternar = (v: string, marcado: boolean) => setStatus((s) => (marcado ? [...s, v] : s.filter((x) => x !== v)));\r
  return (\r
    <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
      <Popover>\r
        <PopoverTrigger><Button variant="secondary" leadingIcon={Filter}>Filtros{aplicados > 0 ? \` · \${aplicados}\` : ''}</Button></PopoverTrigger>\r
        <PopoverContent\r
          title="Filtrar pedidos"\r
          width={340}\r
          footer={(\r
            <>\r
              <Button size="sm" variant="ghost" onClick={() => setStatus([])}>Limpar</Button>\r
              <PopoverClose><Button size="sm" onClick={() => setAplicados(status.length)}>Aplicar</Button></PopoverClose>\r
            </>\r
          )}\r
        >\r
          <div className="ts:flex ts:flex-col ts:gap-16">\r
            <fieldset className="ts:flex ts:flex-col ts:gap-8">\r
              <legend className="ts:mb-8 ts:text-label-s ts:text-fg-muted">Status</legend>\r
              {[['pago', 'Pago'], ['pendente', 'Pendente'], ['enviado', 'Enviado'], ['cancelado', 'Cancelado']].map(([v, l]) => (\r
                <Checkbox key={v} label={l} checked={status.includes(v!)} onCheckedChange={(m) => alternar(v!, m)} />\r
              ))}\r
            </fieldset>\r
            <Select label="Loja" options={lojas} defaultValue="todas" />\r
            <DateRangePicker label="Período" />\r
          </div>\r
        </PopoverContent>\r
      </Popover>\r
      <Popover>\r
        <PopoverTrigger><IconButton icon={RefreshCw} label="Atualização automática" variant="secondary" /></PopoverTrigger>\r
        <PopoverContent title="Atualização automática" description="Com que frequência a lista busca pedidos novos." width={280}>\r
          <RadioGroup defaultValue="30" aria-label="Frequência">\r
            <Radio value="0" label="Desligada" />\r
            <Radio value="30" label="A cada 30 segundos" />\r
            <Radio value="60" label="A cada minuto" />\r
          </RadioGroup>\r
        </PopoverContent>\r
      </Popover>\r
    </div>\r
  );\r
}

<PainelDeFiltros />`,id:`em-uso`,titulo:`Em uso`,descricao:`Filtros de uma lista (com rodapé Limpar/Aplicar) e um ajuste rápido sem rodapé.`,children:(0,k.jsx)(L,{})}),(0,k.jsx)(C,{codigo:`import { Button, Checkbox, DateRangePicker, IconButton, Popover, PopoverClose, PopoverContent, PopoverTrigger, Radio, RadioGroup, Select } from '@tessela/web';
import { Filter, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const lojas = [{ value: 'todas', label: 'Todas as lojas' }, { value: 'centro', label: 'Loja Centro' }, { value: 'moinhos', label: 'Moinhos' }];

function PainelDeFiltros() {\r
  const [status, setStatus] = useState<string[]>(['pago', 'pendente']);\r
  const [aplicados, setAplicados] = useState(2);\r
  const alternar = (v: string, marcado: boolean) => setStatus((s) => (marcado ? [...s, v] : s.filter((x) => x !== v)));\r
  return (\r
    <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
      <Popover>\r
        <PopoverTrigger><Button variant="secondary" leadingIcon={Filter}>Filtros{aplicados > 0 ? \` · \${aplicados}\` : ''}</Button></PopoverTrigger>\r
        <PopoverContent\r
          title="Filtrar pedidos"\r
          width={340}\r
          footer={(\r
            <>\r
              <Button size="sm" variant="ghost" onClick={() => setStatus([])}>Limpar</Button>\r
              <PopoverClose><Button size="sm" onClick={() => setAplicados(status.length)}>Aplicar</Button></PopoverClose>\r
            </>\r
          )}\r
        >\r
          <div className="ts:flex ts:flex-col ts:gap-16">\r
            <fieldset className="ts:flex ts:flex-col ts:gap-8">\r
              <legend className="ts:mb-8 ts:text-label-s ts:text-fg-muted">Status</legend>\r
              {[['pago', 'Pago'], ['pendente', 'Pendente'], ['enviado', 'Enviado'], ['cancelado', 'Cancelado']].map(([v, l]) => (\r
                <Checkbox key={v} label={l} checked={status.includes(v!)} onCheckedChange={(m) => alternar(v!, m)} />\r
              ))}\r
            </fieldset>\r
            <Select label="Loja" options={lojas} defaultValue="todas" />\r
            <DateRangePicker label="Período" />\r
          </div>\r
        </PopoverContent>\r
      </Popover>\r
      <Popover>\r
        <PopoverTrigger><IconButton icon={RefreshCw} label="Atualização automática" variant="secondary" /></PopoverTrigger>\r
        <PopoverContent title="Atualização automática" description="Com que frequência a lista busca pedidos novos." width={280}>\r
          <RadioGroup defaultValue="30" aria-label="Frequência">\r
            <Radio value="0" label="Desligada" />\r
            <Radio value="30" label="A cada 30 segundos" />\r
            <Radio value="60" label="A cada minuto" />\r
          </RadioGroup>\r
        </PopoverContent>\r
      </Popover>\r
    </div>\r
  );\r
}

<PainelDeFiltros />`,id:`temas`,titulo:`Temas e densidades`,descricao:`O popover abre no tema e na densidade do trecho do botão.`,children:(0,k.jsx)(D,{children:(0,k.jsx)(L,{})})}),(0,k.jsx)(C,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,k.jsx)(x,{itens:[{nome:`Popover · open / onOpenChange`,tipo:`boolean`,descricao:`Raiz; controla abrir e fechar.`},{nome:`PopoverTrigger / PopoverClose`,tipo:`ReactElement`,descricao:`Envolvem o botão que abre e um botão que fecha.`},{nome:`PopoverContent · title / description`,tipo:`ReactNode`,descricao:`Cabeçalho; o título nomeia o popover.`},{nome:`PopoverContent · footer`,tipo:`ReactNode`,descricao:`Ações à direita, separadas por uma linha.`},{nome:`PopoverContent · side / align / width`,tipo:`—`,padrao:`'bottom' / 'start' / 320`,descricao:`Posição e largura.`}]})}),(0,k.jsx)(C,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,k.jsx)(A,{itens:[(0,k.jsx)(k.Fragment,{children:`Ao abrir, o foco vai para o primeiro controle de dentro. Tab anda por dentro; Esc fecha e devolve o foco ao botão.`}),(0,k.jsxs)(k.Fragment,{children:[`O popover é um `,(0,k.jsx)(T,{children:`dialog`}),` com o nome do título. Sem título, use `,(0,k.jsx)(T,{children:`aria-label`}),`.`]}),(0,k.jsx)(k.Fragment,{children:`Clicar fora fecha, sem aplicar.`})]})})]})}export{M as AlertPagina,F as KbdPagina,R as PopoverPagina,P as ProgressPagina};