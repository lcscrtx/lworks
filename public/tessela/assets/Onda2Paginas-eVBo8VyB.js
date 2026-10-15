import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{_i as n,gi as r,hr as i,p as a,pi as o,sr as s,vi as c}from"./Codigo-Dgz1In5l.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Notificacoes-CdoSte5f.js";import{t as g}from"./chevron-right-D5L5CZZ8.js";import{t as _}from"./credit-card-CATjEuH8.js";import{t as v}from"./ellipsis-CzhPUSUO.js";import{t as ee}from"./file-text-D_AecRpq.js";import{t as te}from"./minus-gx3HSStf.js";import{t as y}from"./package-D-m41Piz.js";import{t as ne}from"./pencil-DEQjmgeG.js";import{t as b}from"./printer-CA5HELwf.js";import{t as x}from"./store-iOLWVzAk.js";import{t as S}from"./user-plus-D6nWujPv.js";import{s as C}from"./tiptap-jvs8iIPE.js";import{a as w}from"./Estrutura-Bg5zrcqs.js";import{n as re}from"./Checkbox-v-rRjqnt.js";import{t as T}from"./Badge-g4zT1uda.js";import{At as E,Ft as D,Ht as O,Lt as k,Mt as A,Nt as j,Vt as M,_ as N,dt as P,f as F,fn as ie,g as I,jt as ae,p as L,v as R}from"./index-3SU4ioj-.js";var oe={name:`ban`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M4.929 4.929 19.07 19.071`,key:`196cmz`}]]};oe.node;var se=c(oe),z={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};z.node;var B=c(z),ce={name:`message-square`,size:24,node:[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]};ce.node;var le=c(ce),V=e(t(),1),H=C();function ue(e,t,n=1,r=null,i=[]){return e.forEach((a,o)=>{i.push({node:a,level:n,posinset:o+1,setsize:e.length,parentId:r}),a.children?.length&&t.has(a.id)&&ue(a.children,t,n+1,a.id,i)}),i}function U(e){return e.disabled?[]:e.children?.length?e.children.flatMap(U):[e.id]}function de(e){return(e.textValue??(typeof e.label==`string`?e.label:``)).toLocaleLowerCase()}function W(e,t,n){let[r,i]=(0,V.useState)(t);return[e===void 0?r:e,t=>{e===void 0&&i(t),n?.(t)}]}function G({items:e,"aria-label":t,selectionMode:r=`single`,selected:a,defaultSelected:o=null,onSelectedChange:s,checked:c,defaultChecked:l=[],onCheckedChange:u,expanded:d,defaultExpanded:f=[],onExpandedChange:p,className:m}){let[h,_]=W(d,f,p),[v,ee]=W(a,o,e=>e&&s?.(e)),[y,ne]=W(c,l,u),b=(0,V.useMemo)(()=>new Set(h),[h]),x=(0,V.useMemo)(()=>new Set(y),[y]),S=(0,V.useMemo)(()=>ue(e,b),[e,b]),[C,w]=(0,V.useState)(null),T=(0,V.useRef)(new Map),E=(0,V.useRef)({texto:``,ate:0}),D=S.some(e=>e.node.id===C)?C:S.find(e=>e.node.id===v)?.node.id??S[0]?.node.id,O=(e,t)=>{let n=t??!b.has(e);n!==b.has(e)&&_(n?[...h,e]:h.filter(t=>t!==e))},k=e=>{let t=U(e);if(!t.length)return!e.children?.length&&x.has(e.id);let n=t.filter(e=>x.has(e)).length;return n===0?!1:n===t.length||`mixed`},A=e=>{if(!e.disabled){if(r===`single`)ee(e.id);else if(r===`multiple`){let t=U(e),n=k(e)===!0;ne(n?y.filter(e=>!t.includes(e)):[...new Set([...y,...t])])}else e.children?.length&&O(e.id)}},j=e=>{e&&(w(e),T.current.get(e)?.focus())},M=e=>{let t=S.findIndex(e=>e.node.id===D),n=S[t];if(!n)return;let{node:r}=n,i=!!r.children?.length,a=()=>e.preventDefault();switch(e.key){case`ArrowDown`:a(),j(S[t+1]?.node.id);break;case`ArrowUp`:a(),j(S[t-1]?.node.id);break;case`Home`:a(),j(S[0]?.node.id);break;case`End`:a(),j(S.at(-1)?.node.id);break;case`ArrowRight`:a(),i&&!b.has(r.id)?O(r.id,!0):i&&j(S[t+1]?.node.id);break;case`ArrowLeft`:a(),i&&b.has(r.id)?O(r.id,!1):n.parentId&&j(n.parentId);break;case`Enter`:case` `:a(),A(r);break;default:if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){let n=Date.now();E.current={texto:(n<E.current.ate?E.current.texto:``)+e.key.toLocaleLowerCase(),ate:n+500};let r=E.current.texto,i=[...S.slice(t+1),...S.slice(0,t+1)],a=[...r].every(e=>e===r[0]),o=i.find(e=>de(e.node).startsWith(r))??(a?i.find(e=>de(e.node).startsWith(r[0])):void 0);o&&j(o.node.id)}}};return(0,H.jsx)(`div`,{role:`tree`,"aria-label":t,"aria-multiselectable":r===`multiple`||void 0,className:i(`ts:flex ts:flex-col ts:gap-2`,m),children:S.map(({node:e,level:t,posinset:a,setsize:o})=>{let s=!!e.children?.length,c=s&&b.has(e.id),l=r===`multiple`?k(e):void 0,u=e.icon;return(0,H.jsxs)(`div`,{ref:t=>{t?T.current.set(e.id,t):T.current.delete(e.id)},role:`treeitem`,"aria-level":t,"aria-posinset":a,"aria-setsize":o,"aria-expanded":s?c:void 0,"aria-selected":r===`single`?v===e.id:void 0,"aria-checked":l,"aria-disabled":e.disabled||void 0,tabIndex:e.id===D?0:-1,onFocus:()=>w(e.id),onClick:()=>A(e),onKeyDown:M,style:{paddingLeft:`calc(var(--ts-space-4) + ${t-1} * var(--ts-tree-indent))`},className:i(`ts:flex ts:min-h-item-height ts:cursor-default ts:select-none ts:items-center ts:gap-6 ts:rounded-md ts:pr-8 ts:text-body-m`,`ts:transition-colors ts:duration-(--ts-duration-fast) ts:focus-visible:-outline-offset-2`,e.disabled?`ts:text-fg-disabled`:`ts:text-fg-primary ts:hover:bg-bg-hover`,`ts:aria-selected:bg-bg-selected ts:aria-selected:font-medium`),children:[(0,H.jsx)(`span`,{"aria-hidden":!0,"data-tree-toggle":s?``:void 0,onClick:t=>{s&&(t.stopPropagation(),O(e.id))},className:i(`ts:flex ts:size-[max(24px,var(--ts-target-min))] ts:-m-[max(0px,calc((var(--ts-target-min)-24px)/2))] ts:shrink-0 ts:items-center ts:justify-center ts:rounded-sm`,s&&`ts:text-fg-muted ts:hover:text-fg-primary`),children:s&&(0,H.jsx)(g,{className:i(`ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]`,`ts:size-icon-sm ts:transition-transform ts:duration-(--ts-duration-fast) ts:motion-reduce:transition-none`,c&&`ts:rotate-90`)})}),l!==void 0&&(0,H.jsxs)(`span`,{"aria-hidden":!0,"data-checked":l===!0?``:void 0,"data-indeterminate":l===`mixed`?``:void 0,"data-disabled":e.disabled?``:void 0,className:i(re.replace(`ts:mt-2 `,``),`ts:mr-2`),children:[l===!0&&(0,H.jsx)(n,{className:i(`ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]`,`ts:size-icon-xs`)}),l===`mixed`&&(0,H.jsx)(te,{className:i(`ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]`,`ts:size-icon-xs`)})]}),u&&(0,H.jsx)(u,{"aria-hidden":!0,className:i(`ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]`,`ts:size-icon-md`,e.disabled?`ts:text-fg-disabled`:`ts:text-fg-muted`)}),(0,H.jsx)(`span`,{className:`ts:min-w-0 ts:flex-1 ts:truncate`,children:e.label}),e.meta&&(0,H.jsx)(`span`,{className:`ts:shrink-0 ts:text-body-s ts:text-fg-muted`,children:e.meta})]},e.id)})})}var K=`Nova na 2.3.0.`;function q({itens:e}){return(0,H.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,H.jsx)(`li`,{children:e},t))})}var J=e=>new Date(Date.now()-e*60*1e3);function fe(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 47 · no catálogo`,titulo:`Meter`,descricao:`Quanto de um limite já foi usado: usuários do plano, lojas, armazenamento, envios do mês. Fica amarelo perto do limite e vermelho no limite. Para o andamento de uma tarefa, use o Progress.`}),(0,H.jsx)(I,{codigo:`import { Meter } from '@tessela/web';

<div className="ts:grid ts:max-w-480 ts:gap-24">\r
  <Meter label="Armazenamento" value={1.2} max={5} valueLabel="1,2 de 5 GB" />\r
  <Meter label="Usuários do plano" value={9} max={10} valueLabel="9 de 10 usuários" />\r
  <Meter label="Lojas" value={3} max={3} valueLabel="3 de 3 lojas" description="Para abrir outra loja, mude de plano." />\r
  <Meter label="Envios de SMS no mês" value={62} size="sm" />\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`A cor muda a partir de 80% (warningAt) e no limite (dangerAt). O texto à direita sempre diz o número.`,children:(0,H.jsxs)(`div`,{className:`ts:grid ts:max-w-480 ts:gap-24`,children:[(0,H.jsx)(p,{label:`Armazenamento`,value:1.2,max:5,valueLabel:`1,2 de 5 GB`}),(0,H.jsx)(p,{label:`Usuários do plano`,value:9,max:10,valueLabel:`9 de 10 usuários`}),(0,H.jsx)(p,{label:`Lojas`,value:3,max:3,valueLabel:`3 de 3 lojas`,description:`Para abrir outra loja, mude de plano.`}),(0,H.jsx)(p,{label:`Envios de SMS no mês`,value:62,size:`sm`})]})}),(0,H.jsx)(I,{codigo:`import { Meter } from '@tessela/web';

<div className="ts:grid ts:gap-16"><Meter label="Usuários" value={9} max={10} valueLabel="9 de 10" /><Meter label="Lojas" value={3} max={3} valueLabel="3 de 3" /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsxs)(`div`,{className:`ts:grid ts:gap-16`,children:[(0,H.jsx)(p,{label:`Usuários`,value:9,max:10,valueLabel:`9 de 10`}),(0,H.jsx)(p,{label:`Lojas`,value:3,max:3,valueLabel:`3 de 3`})]})})}),(0,H.jsx)(I,{codigo:`import { Badge, Button, Card, Meter } from '@tessela/web';

<div className="ts:max-w-480">\r
  <Card title="Plano Pro" description="Renova em 12 de outubro" actions={<Badge tone="neutral">Mensal</Badge>} footer={<Button size="sm">Mudar de plano</Button>}>\r
    <div className="ts:grid ts:gap-20">\r
      <Meter label="Usuários" value={8} max={10} valueLabel="8 de 10" />\r
      <Meter label="Lojas" value={3} max={3} valueLabel="3 de 3" description="Limite atingido: novas lojas precisam do plano Rede." />\r
      <Meter label="Armazenamento de fotos" value={1.2} max={5} valueLabel="1,2 de 5 GB" />\r
    </div>\r
  </Card>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`O uso do plano na página de assinatura.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-480`,children:(0,H.jsx)(w,{title:`Plano Pro`,description:`Renova em 12 de outubro`,actions:(0,H.jsx)(T,{tone:`neutral`,children:`Mensal`}),footer:(0,H.jsx)(s,{size:`sm`,children:`Mudar de plano`}),children:(0,H.jsxs)(`div`,{className:`ts:grid ts:gap-20`,children:[(0,H.jsx)(p,{label:`Usuários`,value:8,max:10,valueLabel:`8 de 10`}),(0,H.jsx)(p,{label:`Lojas`,value:3,max:3,valueLabel:`3 de 3`,description:`Limite atingido: novas lojas precisam do plano Rede.`}),(0,H.jsx)(p,{label:`Armazenamento de fotos`,value:1.2,max:5,valueLabel:`1,2 de 5 GB`})]})})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`label / value`,tipo:`ReactNode / number`,descricao:`Rótulo visível e o valor usado.`},{nome:`min / max`,tipo:`number`,padrao:`0 / 100`,descricao:`Limites do medidor.`},{nome:`valueLabel`,tipo:`string`,padrao:`porcentagem`,descricao:`Texto do valor, visível e lido: “8 de 10 usuários”.`},{nome:`warningAt / dangerAt`,tipo:`number (0–1)`,padrao:`0,8 / 1`,descricao:`Fração a partir da qual fica amarelo e vermelho.`},{nome:`description / size`,tipo:`ReactNode / sm | md`,padrao:`— / md`,descricao:`Explicação abaixo e espessura da barra.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsxs)(H.Fragment,{children:[`É um `,(0,H.jsx)(L,{children:`meter`}),` com nome (o rótulo), mínimo, máximo e o texto do valor em `,(0,H.jsx)(L,{children:`aria-valuetext`}),`.`]}),(0,H.jsxs)(H.Fragment,{children:[`A cor não é o único sinal: o número está sempre escrito. Quando o limite importa, diga o que fazer na `,(0,H.jsx)(L,{children:`description`}),`.`]})]})})]})}var Y=[`Ana Souza`,`Bruno Lima`,`Carla Dias`,`Davi Rocha`,`Elisa Mota`,`Fábio Reis`,`Gabi Nunes`].map(e=>({name:e}));function pe(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 48 · no catálogo`,titulo:`AvatarGroup`,descricao:`Quem está num pedido, numa loja, numa conversa. Mostra alguns rostos e resume o resto em “+N”. O leitor de tela ouve os nomes.`}),(0,H.jsx)(I,{codigo:`import { AvatarGroup } from '@tessela/web';

const equipe = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Davi Rocha', 'Elisa Mota', 'Fábio Reis', 'Gabi Nunes'].map((name) => ({ name }));

<div className="ts:flex ts:flex-col ts:gap-20">\r
  <AvatarGroup people={equipe} ringClassName="ts:ring-bg-base" />\r
  <AvatarGroup people={equipe} max={3} size="sm" ringClassName="ts:ring-bg-base" />\r
  <AvatarGroup people={equipe.slice(0, 3)} ringClassName="ts:ring-bg-base" />\r
  <AvatarGroup people={['Loja Centro', 'Loja Norte', 'Loja Sul', 'Quiosque'].map((name) => ({ name }))} shape="square" max={3} ringClassName="ts:ring-bg-base" />\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`O anel entre os rostos tem a cor do fundo: aqui, o da página (ring-bg-base).`,children:(0,H.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-20`,children:[(0,H.jsx)(d,{people:Y,ringClassName:`ts:ring-bg-base`}),(0,H.jsx)(d,{people:Y,max:3,size:`sm`,ringClassName:`ts:ring-bg-base`}),(0,H.jsx)(d,{people:Y.slice(0,3),ringClassName:`ts:ring-bg-base`}),(0,H.jsx)(d,{people:[`Loja Centro`,`Loja Norte`,`Loja Sul`,`Quiosque`].map(e=>({name:e})),shape:`square`,max:3,ringClassName:`ts:ring-bg-base`})]})}),(0,H.jsx)(I,{codigo:`import { AvatarGroup } from '@tessela/web';

const equipe = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Davi Rocha', 'Elisa Mota', 'Fábio Reis', 'Gabi Nunes'].map((name) => ({ name }));

<AvatarGroup people={equipe} ringClassName="ts:ring-bg-base" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsx)(d,{people:Y,ringClassName:`ts:ring-bg-base`})})}),(0,H.jsx)(I,{codigo:`import { AvatarGroup, Card } from '@tessela/web';

const equipe = ['Ana Souza', 'Bruno Lima', 'Carla Dias', 'Davi Rocha', 'Elisa Mota', 'Fábio Reis', 'Gabi Nunes'].map((name) => ({ name }));

<div className="ts:max-w-560">\r
  <Card title="Lojas" flush>\r
    <ul className="ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle">\r
      {[['Loja Centro', 7], ['Loja Norte', 3], ['Quiosque Shopping', 2]].map(([loja, n]) => (\r
        <li key={loja} className="ts:flex ts:items-center ts:justify-between ts:gap-16 ts:px-card-padding ts:py-12">\r
          <div className="ts:min-w-0"><p className="ts:text-body-m">{loja}</p><p className="ts:text-body-s ts:text-fg-muted">{n} pessoas</p></div>\r
          <AvatarGroup people={equipe.slice(0, Number(n))} max={3} size="sm" />\r
        </li>\r
      ))}\r
    </ul>\r
  </Card>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Quem trabalha em cada loja, num Card (anel na cor da superfície, o padrão).`,children:(0,H.jsx)(`div`,{className:`ts:max-w-560`,children:(0,H.jsx)(w,{title:`Lojas`,flush:!0,children:(0,H.jsx)(`ul`,{className:`ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle`,children:[[`Loja Centro`,7],[`Loja Norte`,3],[`Quiosque Shopping`,2]].map(([e,t])=>(0,H.jsxs)(`li`,{className:`ts:flex ts:items-center ts:justify-between ts:gap-16 ts:px-card-padding ts:py-12`,children:[(0,H.jsxs)(`div`,{className:`ts:min-w-0`,children:[(0,H.jsx)(`p`,{className:`ts:text-body-m`,children:e}),(0,H.jsxs)(`p`,{className:`ts:text-body-s ts:text-fg-muted`,children:[t,` pessoas`]})]}),(0,H.jsx)(d,{people:Y.slice(0,Number(t)),max:3,size:`sm`})]},e))})})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`people`,tipo:`{ name, src? }[]`,descricao:`As pessoas (ou lojas), na ordem em que aparecem.`},{nome:`max`,tipo:`number`,padrao:`4`,descricao:`Rostos antes do “+N”.`},{nome:`size / shape`,tipo:`sm | md / circle | square`,padrao:`md / circle`,descricao:`Os mesmos do Avatar.`},{nome:`ringClassName`,tipo:`string`,padrao:`ts:ring-bg-surface`,descricao:`Cor do anel: a do fundo onde o grupo está.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsx)(H.Fragment,{children:`O grupo é uma imagem com nome: “Ana Souza, Bruno Lima, Carla Dias e mais 4”. Os rostos e o “+N” são decorativos.`}),(0,H.jsx)(H.Fragment,{children:`Se a lista completa importa, mostre-a por escrito (numa dica não dá: não recebe foco).`})]})})]})}function me(){let e=P(),[t,n]=(0,V.useState)(),[r,i]=(0,V.useState)(``),a=t=>{t===`123456`?(n(void 0),e.success(`E-mail confirmado`)):n(`Código incorreto. Confira o e-mail mais recente.`)};return(0,H.jsx)(w,{title:`Confirme seu e-mail`,description:`Enviamos um código de 6 dígitos para ana@cafedobairro.com.br.`,children:(0,H.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),a(r)},className:`ts:flex ts:flex-col ts:gap-20`,children:[(0,H.jsx)(u,{label:`Código de confirmação`,groups:[3,3],value:r,onValueChange:e=>{i(e),n(void 0)},onComplete:a,error:t,description:`Teste com 123456.`}),(0,H.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[(0,H.jsx)(s,{type:`submit`,disabled:r.length<6,children:`Confirmar`}),(0,H.jsx)(s,{type:`button`,variant:`ghost`,onClick:()=>e.info(`Novo código enviado`),children:`Reenviar código`})]})]})})}function he(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 49 · no catálogo`,titulo:`OTPField`,descricao:`Código de verificação: 2FA, confirmação de e-mail ou SMS. Uma casa por caractere; colar o código inteiro preenche todas, e o celular sugere o código recebido por SMS.`}),(0,H.jsx)(I,{codigo:`import { OTPField } from '@tessela/web';

<div className="ts:grid ts:gap-32">\r
  <OTPField label="Código de 6 dígitos" description="Enviado por SMS para (11) 9••••-4321." />\r
  <OTPField label="Em blocos" groups={[3, 3]} />\r
  <OTPField label="Código de recuperação" length={8} groups={[4, 4]} validationType="alphanumeric" size="lg" description="Letras e números, como no arquivo de recuperação." />\r
  <OTPField label="PIN" length={4} mask />\r
  <OTPField label="Com erro" defaultValue="482" error="Código expirado. Peça um novo." />\r
  <OTPField label="Desativado" defaultValue="123456" disabled />\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,H.jsxs)(`div`,{className:`ts:grid ts:gap-32`,children:[(0,H.jsx)(u,{label:`Código de 6 dígitos`,description:`Enviado por SMS para (11) 9••••-4321.`}),(0,H.jsx)(u,{label:`Em blocos`,groups:[3,3]}),(0,H.jsx)(u,{label:`Código de recuperação`,length:8,groups:[4,4],validationType:`alphanumeric`,size:`lg`,description:`Letras e números, como no arquivo de recuperação.`}),(0,H.jsx)(u,{label:`PIN`,length:4,mask:!0}),(0,H.jsx)(u,{label:`Com erro`,defaultValue:`482`,error:`Código expirado. Peça um novo.`}),(0,H.jsx)(u,{label:`Desativado`,defaultValue:`123456`,disabled:!0})]})}),(0,H.jsx)(I,{codigo:`import { OTPField } from '@tessela/web';

<OTPField label="Código" length={6} groups={[3, 3]} defaultValue="482" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsx)(u,{label:`Código`,length:6,groups:[3,3],defaultValue:`482`})})}),(0,H.jsx)(I,{codigo:`import { Button, Card, OTPField, useToast } from '@tessela/web';
import { useState } from 'react';

function Verificacao() {\r
  const toast = useToast();\r
  const [erro, setErro] = useState<string>();\r
  const [codigo, setCodigo] = useState('');\r
  const verificar = (valor: string) => {\r
    if (valor === '123456') {\r
      setErro(undefined);\r
      toast.success('E-mail confirmado');\r
    } else setErro('Código incorreto. Confira o e-mail mais recente.');\r
  };\r
  return (\r
    <Card title="Confirme seu e-mail" description="Enviamos um código de 6 dígitos para ana@cafedobairro.com.br.">\r
      <form onSubmit={(e) => { e.preventDefault(); verificar(codigo); }} className="ts:flex ts:flex-col ts:gap-20">\r
        <OTPField label="Código de confirmação" groups={[3, 3]} value={codigo} onValueChange={(v) => { setCodigo(v); setErro(undefined); }} onComplete={verificar} error={erro} description="Teste com 123456." />\r
        <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
          <Button type="submit" disabled={codigo.length < 6}>Confirmar</Button>\r
          <Button type="button" variant="ghost" onClick={() => toast.info('Novo código enviado')}>Reenviar código</Button>\r
        </div>\r
      </form>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-480"><Verificacao /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Ao completar as 6 casas, confere sozinho; o botão serve para quem prefere confirmar.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-480`,children:(0,H.jsx)(me,{})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`label / description / error`,tipo:`ReactNode`,descricao:`Rótulo (da primeira casa), ajuda e erro.`},{nome:`length / groups`,tipo:`number / number[]`,padrao:`6 / —`,descricao:`Número de casas e blocos com traço ([3, 3]).`},{nome:`value / defaultValue / onValueChange`,tipo:`string`,descricao:`O código digitado.`},{nome:`onComplete / autoSubmit`,tipo:`(código) => void / boolean`,padrao:`— / false`,descricao:`Aviso ao completar; ou enviar o formulário.`},{nome:`validationType / mask`,tipo:`numeric | alphanumeric | alpha / boolean`,padrao:`numeric / false`,descricao:`O que aceita e se esconde os caracteres.`},{nome:`size / name / disabled / required`,tipo:`md | lg / …`,padrao:`md`,descricao:`Tamanho das casas e integração com formulário.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsx)(H.Fragment,{children:`A primeira casa leva o rótulo; as outras, a posição (“Dígito 2 de 6”). O erro fica associado e marca as casas como inválidas.`}),(0,H.jsx)(H.Fragment,{children:`Digitar avança; Backspace volta e apaga; setas andam entre as casas; colar distribui o código. Caracteres fora do tipo são ignorados.`}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(L,{children:`autocomplete="one-time-code"`}),` deixa o celular sugerir o código do SMS.`]})]})})]})}var X=[{id:`1`,title:`Pedido criado pelo site`,actor:`Ana Souza`,date:J(160),icon:m},{id:`2`,title:`Pagamento aprovado`,description:`Pix · R$ 184,90`,actor:`Sistema`,date:J(158),icon:_,tone:`success`,toneLabel:`Aprovado`},{id:`3`,title:`Separação iniciada`,actor:`Bruno Lima`,date:J(120),icon:y},{id:`4`,title:`Endereço com número faltando`,description:`Cliente avisado por WhatsApp.`,actor:`Bruno Lima`,date:J(95),icon:ie,tone:`warning`,toneLabel:`Atenção`},{id:`5`,title:`Saiu para entrega`,actor:`Carla Dias`,date:J(12),icon:f,tone:`info`,toneLabel:`Em trânsito`}];function ge(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 50 · no catálogo`,titulo:`Timeline`,descricao:`O que aconteceu com um registro, em ordem: pedido criado, pago, enviado. Quem fez e quando em cada evento.`}),(0,H.jsx)(I,{codigo:`import { Timeline } from '@tessela/web';
import { CreditCard, Package, ShoppingBag, TriangleAlert, Truck } from 'lucide-react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const historico = [\r
  { id: '1', title: 'Pedido criado pelo site', actor: 'Ana Souza', date: minutosAtras(160), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento aprovado', description: 'Pix · R$ 184,90', actor: 'Sistema', date: minutosAtras(158), icon: CreditCard, tone: 'success' as const, toneLabel: 'Aprovado' },\r
  { id: '3', title: 'Separação iniciada', actor: 'Bruno Lima', date: minutosAtras(120), icon: Package },\r
  { id: '4', title: 'Endereço com número faltando', description: 'Cliente avisado por WhatsApp.', actor: 'Bruno Lima', date: minutosAtras(95), icon: TriangleAlert, tone: 'warning' as const, toneLabel: 'Atenção' },\r
  { id: '5', title: 'Saiu para entrega', actor: 'Carla Dias', date: minutosAtras(12), icon: Truck, tone: 'info' as const, toneLabel: 'Em trânsito' },\r
];

<div className="ts:grid ts:grid-cols-2 ts:gap-40 ts:max-lg:grid-cols-1">\r
  <div><p className="ts:mb-16 ts:text-label-s ts:text-fg-muted">Pontos, datas absolutas</p><Timeline items={historico.map(({ icon: _i, ...h }) => h)} /></div>\r
  <div><p className="ts:mb-16 ts:text-label-s ts:text-fg-muted">Ícones com tom, datas relativas</p><Timeline items={historico} dateStyle="relative" /></div>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,H.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-40 ts:max-lg:grid-cols-1`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`ts:mb-16 ts:text-label-s ts:text-fg-muted`,children:`Pontos, datas absolutas`}),(0,H.jsx)(l,{items:X.map(({icon:e,...t})=>t)})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`ts:mb-16 ts:text-label-s ts:text-fg-muted`,children:`Ícones com tom, datas relativas`}),(0,H.jsx)(l,{items:X,dateStyle:`relative`})]})]})}),(0,H.jsx)(I,{codigo:`import { Timeline } from '@tessela/web';
import { CreditCard, Package, ShoppingBag, TriangleAlert, Truck } from 'lucide-react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const historico = [\r
  { id: '1', title: 'Pedido criado pelo site', actor: 'Ana Souza', date: minutosAtras(160), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento aprovado', description: 'Pix · R$ 184,90', actor: 'Sistema', date: minutosAtras(158), icon: CreditCard, tone: 'success' as const, toneLabel: 'Aprovado' },\r
  { id: '3', title: 'Separação iniciada', actor: 'Bruno Lima', date: minutosAtras(120), icon: Package },\r
  { id: '4', title: 'Endereço com número faltando', description: 'Cliente avisado por WhatsApp.', actor: 'Bruno Lima', date: minutosAtras(95), icon: TriangleAlert, tone: 'warning' as const, toneLabel: 'Atenção' },\r
  { id: '5', title: 'Saiu para entrega', actor: 'Carla Dias', date: minutosAtras(12), icon: Truck, tone: 'info' as const, toneLabel: 'Em trânsito' },\r
];

<Timeline items={historico.slice(1, 4)} dateStyle="relative" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsx)(l,{items:X.slice(1,4),dateStyle:`relative`})})}),(0,H.jsx)(I,{codigo:`import { Button, Card, Timeline } from '@tessela/web';
import { CreditCard, MessageSquare, Package, ShoppingBag, TriangleAlert, Truck } from 'lucide-react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const historico = [\r
  { id: '1', title: 'Pedido criado pelo site', actor: 'Ana Souza', date: minutosAtras(160), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento aprovado', description: 'Pix · R$ 184,90', actor: 'Sistema', date: minutosAtras(158), icon: CreditCard, tone: 'success' as const, toneLabel: 'Aprovado' },\r
  { id: '3', title: 'Separação iniciada', actor: 'Bruno Lima', date: minutosAtras(120), icon: Package },\r
  { id: '4', title: 'Endereço com número faltando', description: 'Cliente avisado por WhatsApp.', actor: 'Bruno Lima', date: minutosAtras(95), icon: TriangleAlert, tone: 'warning' as const, toneLabel: 'Atenção' },\r
  { id: '5', title: 'Saiu para entrega', actor: 'Carla Dias', date: minutosAtras(12), icon: Truck, tone: 'info' as const, toneLabel: 'Em trânsito' },\r
];

<div className="ts:max-w-560">\r
  <Card title="Histórico" actions={<Button size="sm" variant="secondary" leadingIcon={MessageSquare}>Comentar</Button>}>\r
    <Timeline\r
      dateStyle="relative"\r
      items={[\r
        ...historico.slice(0, 3),\r
        {\r
          id: 'c', title: 'Comentário', actor: 'Bruno Lima', date: minutosAtras(100), icon: MessageSquare,\r
          children: <p className="ts:rounded-md ts:bg-bg-subtle ts:px-12 ts:py-8 ts:text-body-s ts:text-fg-secondary">Cliente pediu para trocar o filtro 103 pelo 102. Troca feita.</p>,\r
        },\r
        ...historico.slice(3),\r
      ]}\r
    />\r
  </Card>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Histórico do pedido, com um comentário da equipe como conteúdo do evento.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-560`,children:(0,H.jsx)(w,{title:`Histórico`,actions:(0,H.jsx)(s,{size:`sm`,variant:`secondary`,leadingIcon:le,children:`Comentar`}),children:(0,H.jsx)(l,{dateStyle:`relative`,items:[...X.slice(0,3),{id:`c`,title:`Comentário`,actor:`Bruno Lima`,date:J(100),icon:le,children:(0,H.jsx)(`p`,{className:`ts:rounded-md ts:bg-bg-subtle ts:px-12 ts:py-8 ts:text-body-s ts:text-fg-secondary`,children:`Cliente pediu para trocar o filtro 103 pelo 102. Troca feita.`})},...X.slice(3)]})})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`items`,tipo:`TimelineItem[]`,descricao:`{ id, title, description?, actor?, date?, icon?, tone?, toneLabel?, children? }`},{nome:`dateStyle`,tipo:`absolute | relative`,padrao:`absolute`,descricao:`“25 set., 14:32” ou “há 5 minutos” (com a absoluta no title).`},{nome:`dateFormat`,tipo:`Intl.DateTimeFormatOptions`,padrao:`dia, mês, hora`,descricao:`Formato das datas absolutas.`},{nome:`tone`,tipo:`neutral | success | warning | error | info`,padrao:`neutral`,descricao:`Cor do ponto ou do ícone. O título precisa dizer o estado; cor sozinha não basta.`},{nome:`toneLabel`,tipo:`ReactNode`,descricao:`Texto só para leitores de tela que complementa o tom, como “Aprovado” ou “Atenção”.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsxs)(H.Fragment,{children:[`É uma lista ordenada; marcadores e linha são decorativos. A data vai num `,(0,H.jsx)(L,{children:`<time dateTime>`}),`.`]}),(0,H.jsxs)(H.Fragment,{children:[`O título precisa dizer o estado (“Pagamento recusado”). O tom é reforço e `,(0,H.jsx)(L,{children:`toneLabel`}),` adiciona esse estado para leitores de tela quando necessário.`]})]})})]})}var _e=[[`#1043`,`Bruno Lima`,`R$ 62,00`],[`#1042`,`Ana Souza`,`R$ 184,90`],[`#1041`,`Carla Dias`,`R$ 38,50`]];function ve({id:e,toast:t}){return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(k,{icon:ne,onClick:()=>t.info(`Editar ${e}`),children:`Editar`}),(0,H.jsx)(k,{icon:r,onClick:()=>t.success(`${e} duplicado`),children:`Duplicar`}),(0,H.jsx)(k,{icon:b,hint:`⌘P`,onClick:()=>t.info(`Imprimindo ${e}`),children:`Imprimir`}),(0,H.jsx)(M,{}),(0,H.jsx)(k,{icon:se,destructive:!0,onClick:()=>t.error(`${e} cancelado`),children:`Cancelar pedido`})]})}function ye(){let e=P();return(0,H.jsx)(w,{title:`Pedidos de hoje`,description:`Clique com o botão direito numa linha, ou use o botão ⋯.`,flush:!0,children:(0,H.jsx)(`ul`,{className:`ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle`,children:_e.map(([t,n,r])=>(0,H.jsx)(`li`,{children:(0,H.jsxs)(E,{children:[(0,H.jsxs)(A,{className:`ts:flex ts:items-center ts:gap-16 ts:px-card-padding ts:py-10 ts:data-popup-open:bg-bg-hover`,children:[(0,H.jsx)(`span`,{className:`ts:w-56 ts:text-body-m ts:font-medium ts:tabular-nums`,children:t}),(0,H.jsx)(`span`,{className:`ts:min-w-0 ts:flex-1 ts:truncate ts:text-body-m ts:text-fg-secondary`,children:n}),(0,H.jsx)(`span`,{className:`ts:text-body-m ts:tabular-nums`,children:r}),(0,H.jsxs)(j,{children:[(0,H.jsx)(O,{children:(0,H.jsx)(a,{icon:v,label:`Ações de ${t}`,size:`sm`})}),(0,H.jsx)(D,{align:`end`,children:(0,H.jsx)(ve,{id:t,toast:e})})]})]}),(0,H.jsx)(ae,{children:(0,H.jsx)(ve,{id:t,toast:e})})]})},t))})})}function be(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 51 · no catálogo`,titulo:`ContextMenu`,descricao:`Menu do botão direito (ou do toque longo): atalho para ações que já estão visíveis na tela. Usa os mesmos itens do Menu.`}),(0,H.jsx)(I,{codigo:`import { Card, ContextMenu, ContextMenuContent, ContextMenuTrigger, IconButton, Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger, useToast } from '@tessela/web';
import { Ban, Copy, Ellipsis, Pencil, Printer } from 'lucide-react';

const pedidos = [['#1043', 'Bruno Lima', 'R$ 62,00'], ['#1042', 'Ana Souza', 'R$ 184,90'], ['#1041', 'Carla Dias', 'R$ 38,50']] as const;

function AcoesDoPedido({ id, toast }: { id: string; toast: ReturnType<typeof useToast> }) {\r
  return (\r
    <>\r
      <MenuItem icon={Pencil} onClick={() => toast.info(\`Editar \${id}\`)}>Editar</MenuItem>\r
      <MenuItem icon={Copy} onClick={() => toast.success(\`\${id} duplicado\`)}>Duplicar</MenuItem>\r
      <MenuItem icon={Printer} hint="⌘P" onClick={() => toast.info(\`Imprimindo \${id}\`)}>Imprimir</MenuItem>\r
      <MenuSeparator />\r
      <MenuItem icon={Ban} destructive onClick={() => toast.error(\`\${id} cancelado\`)}>Cancelar pedido</MenuItem>\r
    </>\r
  );\r
}

function PedidosComMenu() {\r
  const toast = useToast();\r
  return (\r
    <Card title="Pedidos de hoje" description="Clique com o botão direito numa linha, ou use o botão ⋯." flush>\r
      <ul className="ts:divide-y ts:divide-border-subtle ts:border-t ts:border-border-subtle">\r
        {pedidos.map(([id, nome, valor]) => (\r
          <li key={id}>\r
            <ContextMenu>\r
              <ContextMenuTrigger className="ts:flex ts:items-center ts:gap-16 ts:px-card-padding ts:py-10 ts:data-popup-open:bg-bg-hover">\r
                <span className="ts:w-56 ts:text-body-m ts:font-medium ts:tabular-nums">{id}</span>\r
                <span className="ts:min-w-0 ts:flex-1 ts:truncate ts:text-body-m ts:text-fg-secondary">{nome}</span>\r
                <span className="ts:text-body-m ts:tabular-nums">{valor}</span>\r
                <Menu>\r
                  <MenuTrigger><IconButton icon={Ellipsis} label={\`Ações de \${id}\`} size="sm" /></MenuTrigger>\r
                  <MenuContent align="end"><AcoesDoPedido id={id} toast={toast} /></MenuContent>\r
                </Menu>\r
              </ContextMenuTrigger>\r
              <ContextMenuContent><AcoesDoPedido id={id} toast={toast} /></ContextMenuContent>\r
            </ContextMenu>\r
          </li>\r
        ))}\r
      </ul>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-640"><PedidosComMenu /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`As ações do botão ⋯ repetidas no botão direito da linha. A linha fica destacada enquanto o menu está aberto.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-640`,children:(0,H.jsx)(ye,{})})}),(0,H.jsx)(I,{codigo:`import { ContextMenu, ContextMenuContent, ContextMenuTrigger, MenuItem, MenuSeparator } from '@tessela/web';
import { Ban, Copy, Printer } from 'lucide-react';

<ContextMenu><ContextMenuTrigger className="ts:flex ts:h-96 ts:items-center ts:justify-center ts:rounded-md ts:border ts:border-dashed ts:border-border-strong ts:text-body-s ts:text-fg-muted">Botão direito aqui</ContextMenuTrigger><ContextMenuContent><MenuItem icon={Copy}>Duplicar</MenuItem><MenuItem icon={Printer}>Imprimir</MenuItem><MenuSeparator /><MenuItem icon={Ban} destructive>Cancelar</MenuItem></ContextMenuContent></ContextMenu>`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsxs)(E,{children:[(0,H.jsx)(A,{className:`ts:flex ts:h-96 ts:items-center ts:justify-center ts:rounded-md ts:border ts:border-dashed ts:border-border-strong ts:text-body-s ts:text-fg-muted`,children:`Botão direito aqui`}),(0,H.jsxs)(ae,{children:[(0,H.jsx)(k,{icon:r,children:`Duplicar`}),(0,H.jsx)(k,{icon:b,children:`Imprimir`}),(0,H.jsx)(M,{}),(0,H.jsx)(k,{icon:se,destructive:!0,children:`Cancelar`})]})]})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`ContextMenu`,tipo:`open / onOpenChange / disabled`,descricao:`Raiz; sem open, controla sozinho.`},{nome:`ContextMenuTrigger`,tipo:`render / className`,padrao:`<div>`,descricao:`A área que abre o menu: linha, card, imagem.`},{nome:`ContextMenuContent`,tipo:`children`,descricao:`MenuItem, MenuSeparator, MenuGroup, MenuRadioGroup, MenuCheckboxItem.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsx)(H.Fragment,{children:`Nunca é o único caminho: quem usa teclado, leitor de tela ou toque pode não descobrir o botão direito. Repita as ações num botão visível.`}),(0,H.jsx)(H.Fragment,{children:`Aberto, funciona como o Menu: setas, Enter, Esc devolve o foco, digitar pula para o item.`})]})})]})}var xe=[{id:`1`,title:`Novo pedido #1043`,description:`Bruno Lima · R$ 62,00 · entrega`,date:J(2),icon:m},{id:`2`,title:`Pagamento recusado no pedido #1040`,description:`Cartão sem limite. O cliente foi avisado.`,date:J(25),icon:_,tone:`error`},{id:`3`,title:`Estoque baixo: Café torrado 500 g`,description:`Restam 4 unidades na Loja Centro.`,date:J(90),icon:ie,tone:`warning`},{id:`4`,title:`Carla Dias entrou na equipe`,date:J(1560),icon:S,read:!0},{id:`5`,title:`Relatório de setembro pronto`,description:`Vendas, ticket médio e produtos mais vendidos.`,date:J(4320),icon:ee,read:!0}];function Z({vazia:e=!1,marcarUma:t=!1,gravando:n=!1,itens:r,unreadCount:i,loading:a}){let c=P(),{messages:l}=o(),[u,d]=(0,V.useState)(r??(e?[]:xe)),[f,p]=(0,V.useState)(!1),m=(0,V.useRef)(void 0);(0,V.useEffect)(()=>()=>clearTimeout(m.current),[]);let g=()=>d(e=>e.map(e=>({...e,read:!0})));return(0,H.jsx)(h,{items:u,onItemSelect:e=>{d(t=>t.map(t=>t.id===e.id?{...t,read:!0}:t)),c.info(`Abrindo`,{description:e.title})},onMarkAllRead:n?()=>{p(!0),m.current=setTimeout(()=>{g(),p(!1)},2500)}:g,markAllReadDisabled:n?f:void 0,onMarkRead:t?e=>d(t=>t.map(t=>t.id===e.id?{...t,read:!0}:t)):void 0,unreadCount:i,loading:a,footer:e||u.length===0?void 0:(0,H.jsx)(s,{variant:`ghost`,size:`sm`,className:`ts:w-full`,children:l.viewAll})})}function Q({children:e}){return(0,H.jsxs)(`div`,{className:`ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16`,children:[(0,H.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8 ts:text-label-m`,children:[(0,H.jsx)(x,{"aria-hidden":!0,className:`ts:size-icon-md ts:text-fg-muted`}),` Café do Bairro`]}),(0,H.jsx)(`div`,{className:`ts:flex ts:items-center ts:gap-4`,children:e})]})}function Se(){return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 52 · no catálogo`,titulo:`NotificationCenter`,descricao:`O sino do cabeçalho: o número diz quantas não lidas; o painel lista as recentes e leva ao assunto. Para um aviso que some sozinho, use o Toast.`}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo /></BarraDoTopo></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Abrir uma notificação marca como lida; “Marcar todas como lidas” zera o número.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo vazia /></BarraDoTopo></div>`,id:`vazio`,titulo:`Sem notificações`,children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{vazia:!0})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo itens={avisosIniciais.slice(0, 3)} unreadCount={12} /></BarraDoTopo></div>`,id:`contagem`,titulo:`Contagem do servidor`,descricao:(0,H.jsxs)(H.Fragment,{children:[`Quando a lista traz só as recentes, `,(0,H.jsx)(L,{children:`unreadCount`}),` diz o total de não lidas no sino e no painel. Sem ele, o número conta as não lidas de `,(0,H.jsx)(L,{children:`items`}),`. `,K]}),children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{itens:xe.slice(0,3),unreadCount:12})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo vazia loading /></BarraDoTopo></div>`,id:`carregando`,titulo:`Carregando`,descricao:(0,H.jsxs)(H.Fragment,{children:[`Com `,(0,H.jsx)(L,{children:`loading`}),`, o painel anuncia o texto `,(0,H.jsx)(L,{children:`loading`}),` do provider; sem itens, mostra linhas no formato das notificações no lugar de “Nenhuma notificação”. `,K]}),children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{vazia:!0,loading:!0})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo marcarUma /></BarraDoTopo></div>`,id:`marcar-uma`,titulo:`Marcar uma como lida`,descricao:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(L,{children:`onMarkRead`}),` põe o botão “Marcar como lida” ao lado de cada não lida, fora do link: marca sem abrir. `,K]}),children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{marcarUma:!0})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, Store, TriangleAlert, UserPlus } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

function BarraDoTopo({ children }: { children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:h-56 ts:items-center ts:justify-between ts:gap-16 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-base ts:px-16">\r
      <div className="ts:flex ts:items-center ts:gap-8 ts:text-label-m"><Store aria-hidden className="ts:size-icon-md ts:text-fg-muted" /> Café do Bairro</div>\r
      <div className="ts:flex ts:items-center ts:gap-4">{children}</div>\r
    </div>\r
  );\r
}

<div className="ts:max-w-720"><BarraDoTopo><CentralDeExemplo gravando /></BarraDoTopo></div>`,id:`gravando`,titulo:`Gravando a marcação`,descricao:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(L,{children:`markAllReadDisabled`}),` desativa “Marcar todas como lidas” sem escondê-lo, enquanto a marcação anterior é gravada. Aqui a gravação leva 2,5 s. `,K]}),children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(Q,{children:(0,H.jsx)(Z,{gravando:!0})})})}),(0,H.jsx)(I,{codigo:`import { Button, NotificationCenter, type NotificationCenterProps, type NotificationItem, useTessela, useToast } from '@tessela/web';
import { CreditCard, FileText, ShoppingBag, TriangleAlert, UserPlus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const minutosAtras = (m: number) => new Date(Date.now() - m * 60 * 1000);

const avisosIniciais: NotificationItem[] = [\r
  { id: '1', title: 'Novo pedido #1043', description: 'Bruno Lima · R$ 62,00 · entrega', date: minutosAtras(2), icon: ShoppingBag },\r
  { id: '2', title: 'Pagamento recusado no pedido #1040', description: 'Cartão sem limite. O cliente foi avisado.', date: minutosAtras(25), icon: CreditCard, tone: 'error' },\r
  { id: '3', title: 'Estoque baixo: Café torrado 500 g', description: 'Restam 4 unidades na Loja Centro.', date: minutosAtras(90), icon: TriangleAlert, tone: 'warning' },\r
  { id: '4', title: 'Carla Dias entrou na equipe', date: minutosAtras(60 * 26), icon: UserPlus, read: true },\r
  { id: '5', title: 'Relatório de setembro pronto', description: 'Vendas, ticket médio e produtos mais vendidos.', date: minutosAtras(60 * 24 * 3), icon: FileText, read: true },\r
];

type OpcoesDaCentral = Pick<NotificationCenterProps, 'unreadCount' | 'loading'> & {\r
  vazia?: boolean;\r
  /** Liga o botão “Marcar como lida” de cada não lida. */\r
  marcarUma?: boolean;\r
  /** “Marcar todas” grava por um tempo, desativado, antes de zerar. */\r
  gravando?: boolean;\r
  itens?: NotificationItem[];\r
};

function CentralDeExemplo({ vazia = false, marcarUma = false, gravando = false, itens: itensIniciais, unreadCount, loading }: OpcoesDaCentral) {\r
  const toast = useToast();\r
  const { messages } = useTessela();\r
  const [itens, setItens] = useState(itensIniciais ?? (vazia ? [] : avisosIniciais));\r
  const [salvando, setSalvando] = useState(false);\r
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);\r
  useEffect(() => () => clearTimeout(espera.current), []);\r
  const marcarTodas = () => setItens((l) => l.map((x) => ({ ...x, read: true })));\r
  return (\r
    <NotificationCenter\r
      items={itens}\r
      onItemSelect={(n) => { setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))); toast.info('Abrindo', { description: n.title }); }}\r
      onMarkAllRead={gravando ? () => { setSalvando(true); espera.current = setTimeout(() => { marcarTodas(); setSalvando(false); }, 2500); } : marcarTodas}\r
      markAllReadDisabled={gravando ? salvando : undefined}\r
      onMarkRead={marcarUma ? (n) => setItens((l) => l.map((x) => (x.id === n.id ? { ...x, read: true } : x))) : undefined}\r
      unreadCount={unreadCount}\r
      loading={loading}\r
      footer={vazia || itens.length === 0 ? undefined : <Button variant="ghost" size="sm" className="ts:w-full">{messages.viewAll}</Button>}\r
    />\r
  );\r
}

<div className="ts:flex ts:justify-end"><CentralDeExemplo /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsx)(`div`,{className:`ts:flex ts:justify-end`,children:(0,H.jsx)(Z,{})})})}),(0,H.jsx)(I,{id:`opcoes-temas`,titulo:`Opções nos temas e densidades`,descricao:`Contagem do servidor e “Marcar como lida” juntos, em cada tema e densidade.`,semCaixa:!0,children:(0,H.jsx)(R,{children:(0,H.jsx)(`div`,{className:`ts:flex ts:justify-end`,children:(0,H.jsx)(Z,{marcarUma:!0,unreadCount:12})})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`items`,tipo:`NotificationItem[]`,descricao:`{ id, title, description?, date?, read?, icon?, tone?, href? }`},{nome:`onItemSelect`,tipo:`(item) => void`,descricao:`Ao abrir uma: marque como lida e leve ao assunto. O painel fecha.`},{nome:`onMarkAllRead`,tipo:`() => void`,descricao:`Mostra “Marcar todas como lidas” quando há não lidas.`},{nome:`markAllReadDisabled`,tipo:`boolean`,padrao:`false`,descricao:`Desativa “Marcar todas como lidas” sem escondê-lo, enquanto a marcação anterior é gravada. ${K}`},{nome:`onMarkRead`,tipo:`(item) => void`,descricao:`Mostra “Marcar como lida” ao lado de cada não lida, como botão irmão do item, nunca dentro do link. ${K}`},{nome:`unreadCount`,tipo:`number`,padrao:`não lidas de items`,descricao:`Não lidas no sino e no painel. Informe quando a lista traz só as recentes. ${K}`},{nome:`loading`,tipo:`boolean`,padrao:`false`,descricao:`Anuncia o texto loading do provider; sem itens, mostra linhas no formato das notificações. ${K}`},{nome:`footer`,tipo:`ReactNode`,descricao:`Link para a página com todas. Use messages.viewAll no texto para manter a tradução.`},{nome:`open / onOpenChange`,tipo:`boolean`,descricao:`Controle do painel, se precisar.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsx)(H.Fragment,{children:`O sino diz o número no nome: “Notificações, 3 não lidas”. O painel é um diálogo não modal com título.`}),(0,H.jsxs)(H.Fragment,{children:[`Cada notificação é um botão (ou link, com `,(0,H.jsx)(L,{children:`href`}),`); as não lidas levam “(não lida)” no nome, além do ponto e do negrito.`]}),(0,H.jsx)(H.Fragment,{children:`Esc fecha e devolve o foco ao sino.`}),(0,H.jsx)(H.Fragment,{children:`“Marcar como lida” é um botão irmão do item, com o título no nome: “Marcar como lida, Novo pedido #1043”. Ao marcar, o botão some e o foco passa ao item, sem cair no início da página.`}),(0,H.jsxs)(H.Fragment,{children:[`Com `,(0,H.jsx)(L,{children:`loading`}),`, a região de status do painel diz “Carregando…” e o painel fica com `,(0,H.jsx)(L,{children:`aria-busy`}),`.`]}),(0,H.jsxs)(H.Fragment,{children:[`Com toque (ponteiro grosso), o sino, cada item, “Marcar todas” e “Marcar como lida” chegam a 44 × 44 px pelo token `,(0,H.jsx)(L,{children:`target/min`}),`; com mouse, as medidas não mudam. `,K]})]})})]})}var $=[{id:`bebidas`,label:`Bebidas`,icon:B,meta:18,children:[{id:`cafes`,label:`Cafés`,icon:B,meta:9,children:[{id:`espresso`,label:`Espresso`,meta:4},{id:`coados`,label:`Coados`,meta:3},{id:`gelados`,label:`Gelados`,meta:2}]},{id:`chas`,label:`Chás`,meta:5},{id:`sucos`,label:`Sucos`,meta:4}]},{id:`comidas`,label:`Comidas`,icon:B,meta:14,children:[{id:`paes`,label:`Pães`,meta:6},{id:`bolos`,label:`Bolos`,meta:5},{id:`salgados`,label:`Salgados`,meta:3}]},{id:`graos`,label:`Grãos para levar`,icon:B,meta:7},{id:`arquivados`,label:`Arquivados`,icon:B,meta:2,disabled:!0}],Ce=[{id:`pedidos`,label:`Pedidos`,children:[{id:`pedidos.ver`,label:`Ver pedidos`},{id:`pedidos.editar`,label:`Editar pedidos`},{id:`pedidos.cancelar`,label:`Cancelar pedidos`}]},{id:`cardapio`,label:`Cardápio`,children:[{id:`cardapio.ver`,label:`Ver cardápio`},{id:`cardapio.editar`,label:`Editar produtos e preços`}]},{id:`financeiro`,label:`Financeiro`,children:[{id:`financeiro.ver`,label:`Ver relatórios`},{id:`financeiro.repasses`,label:`Alterar conta de repasse`,disabled:!0}]}];function we(){let[e,t]=(0,V.useState)(`espresso`),n=t=>t.reduce((t,r)=>t??(r.id===e?r:n(r.children??[])),void 0),r=n($);return(0,H.jsx)(w,{flush:!0,children:(0,H.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[260px_minmax(0,1fr)] ts:max-md:grid-cols-1`,children:[(0,H.jsx)(`div`,{className:`ts:border-r ts:border-border-subtle ts:p-8 ts:max-md:border-b ts:max-md:border-r-0`,children:(0,H.jsx)(G,{"aria-label":`Categorias do cardápio`,items:$,selected:e,onSelectedChange:t,defaultExpanded:[`bebidas`,`cafes`]})}),(0,H.jsxs)(`div`,{className:`ts:p-card-padding`,children:[(0,H.jsx)(`h3`,{className:`ts:text-heading-s`,children:r?.label??`Escolha uma categoria`}),(0,H.jsx)(`p`,{className:`ts:mt-4 ts:text-body-m ts:text-fg-secondary`,children:r?`${r.meta} produtos nesta categoria.`:`Os produtos aparecem aqui.`})]})]})})}function Te(){let[e,t]=(0,V.useState)([`pedidos.ver`,`pedidos.editar`,`cardapio.ver`]);return(0,H.jsxs)(`article`,{children:[(0,H.jsx)(F,{etapa:`Componente 53 · no catálogo`,titulo:`TreeView`,descricao:`Árvore: categorias do cardápio, estrutura de lojas, permissões por área. Escolhe um nó, marca vários (o pai marca os filhos) ou só navega.`}),(0,H.jsx)(I,{codigo:`import { type TreeNode, TreeView } from '@tessela/web';
import { Folder } from 'lucide-react';

const cardapio: TreeNode[] = [\r
  {\r
    id: 'bebidas', label: 'Bebidas', icon: Folder, meta: 18, children: [\r
      { id: 'cafes', label: 'Cafés', icon: Folder, meta: 9, children: [{ id: 'espresso', label: 'Espresso', meta: 4 }, { id: 'coados', label: 'Coados', meta: 3 }, { id: 'gelados', label: 'Gelados', meta: 2 }] },\r
      { id: 'chas', label: 'Chás', meta: 5 },\r
      { id: 'sucos', label: 'Sucos', meta: 4 },\r
    ],\r
  },\r
  { id: 'comidas', label: 'Comidas', icon: Folder, meta: 14, children: [{ id: 'paes', label: 'Pães', meta: 6 }, { id: 'bolos', label: 'Bolos', meta: 5 }, { id: 'salgados', label: 'Salgados', meta: 3 }] },\r
  { id: 'graos', label: 'Grãos para levar', icon: Folder, meta: 7 },\r
  { id: 'arquivados', label: 'Arquivados', icon: Folder, meta: 2, disabled: true },\r
];

const permissoes: TreeNode[] = [\r
  { id: 'pedidos', label: 'Pedidos', children: [{ id: 'pedidos.ver', label: 'Ver pedidos' }, { id: 'pedidos.editar', label: 'Editar pedidos' }, { id: 'pedidos.cancelar', label: 'Cancelar pedidos' }] },\r
  { id: 'cardapio', label: 'Cardápio', children: [{ id: 'cardapio.ver', label: 'Ver cardápio' }, { id: 'cardapio.editar', label: 'Editar produtos e preços' }] },\r
  { id: 'financeiro', label: 'Financeiro', children: [{ id: 'financeiro.ver', label: 'Ver relatórios' }, { id: 'financeiro.repasses', label: 'Alterar conta de repasse', disabled: true }] },\r
];

<div className="ts:grid ts:grid-cols-2 ts:gap-40 ts:max-lg:grid-cols-1">\r
  <div><p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">Escolha única (single)</p><TreeView aria-label="Categorias" items={cardapio} defaultExpanded={['bebidas']} defaultSelected="chas" /></div>\r
  <div>\r
    <p className="ts:mb-12 ts:text-label-s ts:text-fg-muted">Caixas de marcar (multiple)</p>\r
    <TreeView aria-label="Permissões do cargo" items={permissoes} selectionMode="multiple" checked={marcadas} onCheckedChange={setMarcadas} defaultExpanded={['pedidos', 'cardapio', 'financeiro']} />\r
    <p className="ts:mt-12 ts:text-body-s ts:text-fg-muted">{marcadas.length} permissões: {marcadas.join(', ')}</p>\r
  </div>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,H.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-40 ts:max-lg:grid-cols-1`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`ts:mb-12 ts:text-label-s ts:text-fg-muted`,children:`Escolha única (single)`}),(0,H.jsx)(G,{"aria-label":`Categorias`,items:$,defaultExpanded:[`bebidas`],defaultSelected:`chas`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`p`,{className:`ts:mb-12 ts:text-label-s ts:text-fg-muted`,children:`Caixas de marcar (multiple)`}),(0,H.jsx)(G,{"aria-label":`Permissões do cargo`,items:Ce,selectionMode:`multiple`,checked:e,onCheckedChange:t,defaultExpanded:[`pedidos`,`cardapio`,`financeiro`]}),(0,H.jsxs)(`p`,{className:`ts:mt-12 ts:text-body-s ts:text-fg-muted`,children:[e.length,` permissões: `,e.join(`, `)]})]})]})}),(0,H.jsx)(I,{codigo:`import { type TreeNode, TreeView } from '@tessela/web';
import { Folder } from 'lucide-react';

const cardapio: TreeNode[] = [\r
  {\r
    id: 'bebidas', label: 'Bebidas', icon: Folder, meta: 18, children: [\r
      { id: 'cafes', label: 'Cafés', icon: Folder, meta: 9, children: [{ id: 'espresso', label: 'Espresso', meta: 4 }, { id: 'coados', label: 'Coados', meta: 3 }, { id: 'gelados', label: 'Gelados', meta: 2 }] },\r
      { id: 'chas', label: 'Chás', meta: 5 },\r
      { id: 'sucos', label: 'Sucos', meta: 4 },\r
    ],\r
  },\r
  { id: 'comidas', label: 'Comidas', icon: Folder, meta: 14, children: [{ id: 'paes', label: 'Pães', meta: 6 }, { id: 'bolos', label: 'Bolos', meta: 5 }, { id: 'salgados', label: 'Salgados', meta: 3 }] },\r
  { id: 'graos', label: 'Grãos para levar', icon: Folder, meta: 7 },\r
  { id: 'arquivados', label: 'Arquivados', icon: Folder, meta: 2, disabled: true },\r
];

<TreeView aria-label="Categorias" items={cardapio.slice(0, 2)} defaultExpanded={['bebidas']} defaultSelected="cafes" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,H.jsx)(R,{children:(0,H.jsx)(G,{"aria-label":`Categorias`,items:$.slice(0,2),defaultExpanded:[`bebidas`],defaultSelected:`cafes`})})}),(0,H.jsx)(I,{codigo:`import { Card, type TreeNode, TreeView } from '@tessela/web';
import { Folder } from 'lucide-react';
import { useState } from 'react';

const cardapio: TreeNode[] = [\r
  {\r
    id: 'bebidas', label: 'Bebidas', icon: Folder, meta: 18, children: [\r
      { id: 'cafes', label: 'Cafés', icon: Folder, meta: 9, children: [{ id: 'espresso', label: 'Espresso', meta: 4 }, { id: 'coados', label: 'Coados', meta: 3 }, { id: 'gelados', label: 'Gelados', meta: 2 }] },\r
      { id: 'chas', label: 'Chás', meta: 5 },\r
      { id: 'sucos', label: 'Sucos', meta: 4 },\r
    ],\r
  },\r
  { id: 'comidas', label: 'Comidas', icon: Folder, meta: 14, children: [{ id: 'paes', label: 'Pães', meta: 6 }, { id: 'bolos', label: 'Bolos', meta: 5 }, { id: 'salgados', label: 'Salgados', meta: 3 }] },\r
  { id: 'graos', label: 'Grãos para levar', icon: Folder, meta: 7 },\r
  { id: 'arquivados', label: 'Arquivados', icon: Folder, meta: 2, disabled: true },\r
];

function CategoriasEmUso() {\r
  const [escolhida, setEscolhida] = useState<string | null>('espresso');\r
  const achar = (nos: TreeNode[]): TreeNode | undefined => nos.reduce<TreeNode | undefined>((a, n) => a ?? (n.id === escolhida ? n : achar(n.children ?? [])), undefined);\r
  const no = achar(cardapio);\r
  return (\r
    <Card flush>\r
      <div className="ts:grid ts:grid-cols-[260px_minmax(0,1fr)] ts:max-md:grid-cols-1">\r
        <div className="ts:border-r ts:border-border-subtle ts:p-8 ts:max-md:border-b ts:max-md:border-r-0">\r
          <TreeView aria-label="Categorias do cardápio" items={cardapio} selected={escolhida} onSelectedChange={setEscolhida} defaultExpanded={['bebidas', 'cafes']} />\r
        </div>\r
        <div className="ts:p-card-padding">\r
          <h3 className="ts:text-heading-s">{no?.label ?? 'Escolha uma categoria'}</h3>\r
          <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">{no ? \`\${no.meta} produtos nesta categoria.\` : 'Os produtos aparecem aqui.'}</p>\r
        </div>\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-720"><CategoriasEmUso /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Categorias à esquerda, conteúdo da escolhida à direita.`,children:(0,H.jsx)(`div`,{className:`ts:max-w-720`,children:(0,H.jsx)(we,{})})}),(0,H.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,H.jsx)(N,{itens:[{nome:`items / aria-label`,tipo:`TreeNode[] / string`,descricao:`{ id, label, textValue?, icon?, meta?, disabled?, children? } e o nome da árvore.`},{nome:`selectionMode`,tipo:`single | multiple | none`,padrao:`single`,descricao:`Escolher um, marcar vários ou só navegar.`},{nome:`selected / defaultSelected / onSelectedChange`,tipo:`string`,descricao:`O nó escolhido (single).`},{nome:`checked / defaultChecked / onCheckedChange`,tipo:`string[]`,descricao:`Folhas marcadas (multiple); os pais saem delas.`},{nome:`expanded / defaultExpanded / onExpandedChange`,tipo:`string[]`,descricao:`Nós abertos.`}]})}),(0,H.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,H.jsx)(q,{itens:[(0,H.jsxs)(H.Fragment,{children:[`É uma `,(0,H.jsx)(L,{children:`tree`}),`: cada linha diz nível, posição, se está aberta e se está escolhida ou marcada (inclusive “misto”).`]}),(0,H.jsx)(H.Fragment,{children:`↑ ↓ andam; → abre e depois entra no primeiro filho; ← fecha e depois volta ao pai; Home e End vão às pontas; uma letra pula para o nó que começa com ela.`}),(0,H.jsx)(H.Fragment,{children:`Enter ou Espaço escolhem (ou marcam). Só uma linha entra no Tab: a escolhida ou a última focada.`})]})})]})}export{pe as AvatarGroupPagina,be as ContextMenuPagina,fe as MeterPagina,Se as NotificationCenterPagina,he as OTPFieldPagina,ge as TimelinePagina,Te as TreeViewPagina};