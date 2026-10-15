import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{dr as n,ei as r,fr as i,hr as a,li as o,mr as ee,pi as te,sr as s,ur as c,vi as l}from"./Codigo-Dgz1In5l.js";import{n as u,r as d,t as f}from"./underline-om7W9CRI.js";import{t as p}from"./DatePicker-CzUMwvCG.js";import{t as ne}from"./clock-CYh0yKdw.js";import{t as m}from"./layout-grid-BjSq2iG1.js";import{t as h}from"./list-dv9yRnp5.js";import{t as re}from"./printer-CA5HELwf.js";import{t as ie}from"./refresh-cw-DF2oHPTV.js";import{t as g}from"./Upload-BRCho5Cm.js";import{s as ae}from"./tiptap-jvs8iIPE.js";import{i as oe,n as se,r as ce,t as le}from"./FieldDescription-Bm_h-aQC.js";import{r as ue,t as de}from"./popup-DFIftnn-.js";import{c as fe,r as pe}from"./ComboboxItem-3_d_trQP.js";import{i as me,n as he,r as ge,t as _e}from"./ComboboxPopup-nn8SRWev.js";import{t as _}from"./Textarea-DglDNy8U.js";import{a as v}from"./Estrutura-Bg5zrcqs.js";import{a as y,n as b,o as ve,r as x,t as S}from"./Numeros-Sc1z5tIu.js";import{t as C}from"./Switch-BltZJQRk.js";import{t as w}from"./Badge-g4zT1uda.js";import{A as T,C as ye,D as E,E as D,K as be,L as xe,M as O,N as k,O as A,P as j,R as Se,T as M,_ as N,b as P,bn as Ce,cn as we,dt as Te,en as Ee,f as F,g as I,h as De,in as Oe,j as L,k as R,p as z,rn as ke,tn as Ae,v as B,w as V,y as H,z as je}from"./index-3SU4ioj-.js";var U={name:`text-align-center`,size:24,node:[[`path`,{d:`M21 5H3`,key:`1fi0y6`}],[`path`,{d:`M17 12H7`,key:`16if0g`}],[`path`,{d:`M19 19H5`,key:`vjpgq2`}]],aliases:[`align-center`]};U.node;var Me=l(U),W={name:`text-align-end`,size:24,node:[[`path`,{d:`M21 5H3`,key:`1fi0y6`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M21 19H7`,key:`4cu937`}]],aliases:[`align-right`]};W.node;var Ne=l(W),G={name:`text-align-start`,size:24,node:[[`path`,{d:`M21 5H3`,key:`1fi0y6`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M17 19H3`,key:`z6ezky`}]],aliases:[`text`,`align-left`]};G.node;var Pe=l(G),Fe=me,K=e(t(),1),q=ae(),J=e=>Number(e.slice(0,2))*60+Number(e.slice(3,5)),Ie=e=>`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`,Le=e=>{let t=e.replace(/\D/g,``).slice(0,4);return t.length===3?`${t.slice(0,1)}:${t.slice(1)}`:t.length>3?`${t.slice(0,2)}:${t.slice(2)}`:t};function Re(e){let t=e.replace(/\D/g,``);if(!t)return``;let[n,r]=t.length<=2?[t,`00`]:t.length===3?[t.slice(0,1),t.slice(1)]:[t.slice(0,2),t.slice(2,4)],i=Number(n),a=Number(r);return i>23||a>59?null:`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Y({label:e,description:t,error:n,optional:r,size:i=`md`,value:o,defaultValue:s=null,onValueChange:c,step:l=30,min:u=`00:00`,max:d=`23:59`,placeholder:f=`--:--`,name:p,disabled:m=!1,required:h,"aria-label":re,className:ie}){let{messages:g,portalContainer:ae}=te(),[me,_]=(0,K.useState)(o??s??``),[v,y]=(0,K.useState)(!1),[b,ve]=(0,K.useState)(o);o!==b&&(ve(o),_(o??``));let x=we[i],S=(0,K.useMemo)(()=>{let e=[];for(let t=J(u);t<=J(d);t+=l)e.push(Ie(t));return e},[u,d,l]);function C(e){let t=Re(e);if(t===``){y(!1),_(``),c?.(null);return}let n=t!==null&&(J(t)<J(u)||J(t)>J(d));if(t===null||n){y(!0);return}y(!1),_(t),c?.(t)}let w=n??(v?g.invalidTime:void 0),T=!!w;return(0,q.jsxs)(oe,{invalid:T,disabled:m,className:a(`ts:flex ts:flex-col ts:gap-6`,ie),children:[e&&(0,q.jsxs)(ce,{className:a(`ts:text-label-m ts:text-fg-primary ts:data-disabled:text-fg-disabled`,`ts:w-fit`),children:[e,r&&(0,q.jsx)(Ae,{text:g.optional})]}),(0,q.jsxs)(je,{items:S,value:me,onValueChange:(e,t)=>{let n=Le(e);_(n),y(!1),t.reason===`item-press`&&C(n)},filter:(e,t)=>e.replace(`:`,``).startsWith(t.replace(/\D/g,``)),openOnInputClick:!0,disabled:m,children:[(0,q.jsxs)(Se,{"data-invalid":T?``:void 0,"data-disabled":m?``:void 0,className:a(Oe,x.box,x.padding,x.text),children:[(0,q.jsx)(ne,{"aria-hidden":!0,className:a(ee,x.icon,`ts:text-field-icon`)}),(0,q.jsx)(fe,{"aria-label":re,name:p,required:h,inputMode:`numeric`,placeholder:f,onBlur:e=>C(e.currentTarget.value),className:`ts:h-full ts:min-h-target-min ts:min-w-0 ts:flex-1 ts:bg-transparent ts:tabular-nums ts:outline-none ts:placeholder:text-field-placeholder ts:disabled:cursor-not-allowed`}),(0,q.jsx)(Fe,{"aria-label":g.showTimes,className:a(ke,`ts:inline-flex ts:size-24 ts:shrink-0 ts:items-center ts:justify-center ts:rounded-sm ts:text-field-icon ts:hover:bg-bg-hover ts:hover:text-fg-primary ts:focus-visible:outline-offset-0`),children:(0,q.jsx)(Ce,{"aria-hidden":!0,className:a(ee,`ts:size-icon-sm`)})})]}),(0,q.jsx)(ge,{container:ae??void 0,children:(0,q.jsx)(he,{sideOffset:4,align:`start`,className:`ts:z-(--ts-z-index-popover) ts:outline-none`,children:(0,q.jsx)(_e,{className:a(de,`ts:max-h-[min(240px,var(--available-height))] ts:w-(--anchor-width) ts:min-w-120`),children:(0,q.jsx)(pe,{children:e=>(0,q.jsx)(xe,{value:e,className:a(ue,`ts:tabular-nums`),children:e},e)})})})})]}),t&&!T&&(0,q.jsx)(le,{className:`ts:text-body-s ts:text-fg-muted`,children:t}),T&&(0,q.jsx)(se,{match:!0,className:`ts:flex ts:items-start ts:gap-6 ts:text-body-s ts:text-feedback-error-fg`,children:(0,q.jsx)(Ee,{children:w})})]})}function X({itens:e}){return(0,q.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,q.jsx)(`li`,{children:e},t))})}var Z=new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`});function ze(){let[e,t]=(0,K.useState)(!1);return(0,q.jsx)(v,{title:`Pedidos em andamento`,actions:(0,q.jsx)(s,{size:`sm`,variant:`secondary`,leadingIcon:ie,disabled:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Atualizar`}),children:e?(0,q.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary`,children:[(0,q.jsx)(i,{label:`Atualizando pedidos`}),` Atualizando…`]}):(0,q.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`12 pedidos em separação.`})})}function Be(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 35 · no catálogo`,titulo:`Spinner`,descricao:(0,q.jsxs)(q.Fragment,{children:[`Espera curta, sem medida de quanto falta: uma ação rodando, um trecho atualizando. Para listas e cards que carregam, prefira o Skeleton; em botões, o `,(0,q.jsx)(z,{children:`loading`}),` do Button.`]})}),(0,q.jsx)(I,{codigo:`import { Spinner } from '@tessela/web';

<div className="ts:flex ts:items-center ts:gap-24"><Spinner size="sm" /><Spinner /><Spinner size="lg" /></div>`,id:`tamanhos`,titulo:`Tamanhos`,descricao:`Nos tamanhos de ícone. Com movimento reduzido, gira mais devagar.`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-24`,children:[(0,q.jsx)(i,{size:`sm`}),(0,q.jsx)(i,{}),(0,q.jsx)(i,{size:`lg`})]})}),(0,q.jsx)(I,{codigo:`import { Spinner } from '@tessela/web';

<div className="ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary"><Spinner label="Carregando" /> Carregando…</div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsxs)(`div`,{className:`ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary`,children:[(0,q.jsx)(i,{label:`Carregando`}),` Carregando…`]})})}),(0,q.jsx)(I,{codigo:`import { Button, Card, Spinner } from '@tessela/web';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

function Atualizar() {\r
  const [carregando, setCarregando] = useState(false);\r
  return (\r
    <Card title="Pedidos em andamento" actions={(\r
      <Button size="sm" variant="secondary" leadingIcon={RefreshCw} disabled={carregando} onClick={() => { setCarregando(true); setTimeout(() => setCarregando(false), 1500); }}>\r
        Atualizar\r
      </Button>\r
    )}>\r
      {carregando ? <div className="ts:flex ts:items-center ts:gap-8 ts:text-body-m ts:text-fg-secondary"><Spinner label="Atualizando pedidos" /> Atualizando…</div> : <p className="ts:text-fg-secondary">12 pedidos em separação.</p>}\r
    </Card>\r
  );\r
}

<div className="ts:max-w-480"><Atualizar /></div>`,id:`em-uso`,titulo:`Em uso`,children:(0,q.jsx)(`div`,{className:`ts:max-w-480`,children:(0,q.jsx)(ze,{})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Tamanho no ritmo dos ícones.`},{nome:`label`,tipo:`string`,descricao:`Nomeia a região de status; sem ele, o indicador é decorativo.`},{nome:`className`,tipo:`string`,descricao:`Classes adicionais para posicionar o indicador.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Com `,(0,q.jsx)(z,{children:`label`}),`, é uma região de status que o leitor de tela anuncia; sem ele, é decorativo (use quando o texto ao lado já diz o que acontece).`]})]})})]})}function Ve(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 36 · no catálogo`,titulo:`Separator`,descricao:`Linha que separa grupos de conteúdo. Com label, divide alternativas (“ou”).`}),(0,q.jsx)(I,{codigo:`import { Button, Separator } from '@tessela/web';

<div className="ts:flex ts:max-w-480 ts:flex-col ts:gap-24">\r
  <div className="ts:flex ts:flex-col ts:gap-12"><p className="ts:text-body-m">Acima</p><Separator /><p className="ts:text-body-m">Abaixo</p></div>\r
  <Separator label="ou" />\r
  <div className="ts:flex ts:h-32 ts:items-center ts:gap-8"><Button size="sm" variant="ghost">Copiar</Button><Separator orientation="vertical" /><Button size="sm" variant="ghost">Excluir</Button></div>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:max-w-480 ts:flex-col ts:gap-24`,children:[(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,q.jsx)(`p`,{className:`ts:text-body-m`,children:`Acima`}),(0,q.jsx)(n,{}),(0,q.jsx)(`p`,{className:`ts:text-body-m`,children:`Abaixo`})]}),(0,q.jsx)(n,{label:`ou`}),(0,q.jsxs)(`div`,{className:`ts:flex ts:h-32 ts:items-center ts:gap-8`,children:[(0,q.jsx)(s,{size:`sm`,variant:`ghost`,children:`Copiar`}),(0,q.jsx)(n,{orientation:`vertical`}),(0,q.jsx)(s,{size:`sm`,variant:`ghost`,children:`Excluir`})]})]})}),(0,q.jsx)(I,{codigo:`import { Separator } from '@tessela/web';

<Separator label="ou" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsx)(n,{label:`ou`})})}),(0,q.jsx)(I,{codigo:`import { Button, Card, Separator } from '@tessela/web';

<Card title="Entrar"><Button fullWidth>Continuar com e-mail</Button><div className="ts:py-16"><Separator label="ou" /></div><Button fullWidth variant="secondary">Continuar com Google</Button></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Alternativas de acesso na entrada da conta.`,children:(0,q.jsxs)(v,{title:`Entrar`,children:[(0,q.jsx)(s,{fullWidth:!0,children:`Continuar com e-mail`}),(0,q.jsx)(`div`,{className:`ts:py-16`,children:(0,q.jsx)(n,{label:`ou`})}),(0,q.jsx)(s,{fullWidth:!0,variant:`secondary`,children:`Continuar com Google`})]})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`orientation`,tipo:`'horizontal' | 'vertical'`,padrao:`'horizontal'`,descricao:`Direção da divisória.`},{nome:`label`,tipo:`ReactNode`,descricao:`Rótulo central, como “ou”.`},{nome:`className`,tipo:`string`,descricao:`Classes adicionais para o espaço ao redor.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`É um `,(0,q.jsx)(z,{children:`separator`}),` com orientação. Separe só o que é grupo diferente; espaço já separa o resto.`]})]})})]})}function He(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 37 · no catálogo`,titulo:`Link`,descricao:(0,q.jsxs)(q.Fragment,{children:[`Link de texto, sublinhado. Aceita o link do roteador pelo `,(0,q.jsx)(z,{children:`render`}),`. Externo abre em nova aba e avisa.`]})}),(0,q.jsx)(I,{codigo:`import { Link } from '@tessela/web';

<div className="ts:flex ts:max-w-560 ts:flex-col ts:gap-12 ts:text-body-m ts:text-fg-secondary">\r
  <p>Veja a <Link href="#" onClick={(e) => e.preventDefault()}>política de trocas</Link> antes de aprovar.</p>\r
  <p>Dúvidas? Leia o <Link href="https://exemplo.com" external>manual do painel</Link>.</p>\r
  <p className="ts:text-body-s"><Link tone="muted" href="#" onClick={(e) => e.preventDefault()}>Termos de uso</Link> · <Link tone="muted" href="#" onClick={(e) => e.preventDefault()}>Privacidade</Link></p>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:max-w-560 ts:flex-col ts:gap-12 ts:text-body-m ts:text-fg-secondary`,children:[(0,q.jsxs)(`p`,{children:[`Veja a `,(0,q.jsx)(c,{href:`#`,onClick:e=>e.preventDefault(),children:`política de trocas`}),` antes de aprovar.`]}),(0,q.jsxs)(`p`,{children:[`Dúvidas? Leia o `,(0,q.jsx)(c,{href:`https://exemplo.com`,external:!0,children:`manual do painel`}),`.`]}),(0,q.jsxs)(`p`,{className:`ts:text-body-s`,children:[(0,q.jsx)(c,{tone:`muted`,href:`#`,onClick:e=>e.preventDefault(),children:`Termos de uso`}),` · `,(0,q.jsx)(c,{tone:`muted`,href:`#`,onClick:e=>e.preventDefault(),children:`Privacidade`})]})]})}),(0,q.jsx)(I,{codigo:`import { Link } from '@tessela/web';

<p className="ts:text-body-m ts:text-fg-secondary">Veja o <Link href="#" onClick={(e) => e.preventDefault()}>manual</Link>.</p>`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsxs)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:[`Veja o `,(0,q.jsx)(c,{href:`#`,onClick:e=>e.preventDefault(),children:`manual`}),`.`]})})}),(0,q.jsx)(I,{codigo:`import { Card, Link } from '@tessela/web';

<Card title="Integração concluída"><p className="ts:text-body-m ts:text-fg-secondary">A loja já recebe pedidos automaticamente.</p><p className="ts:mt-12"><Link href="#" onClick={(e) => e.preventDefault()}>Ver instruções de operação</Link></p></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Link de apoio no fim de uma configuração.`,children:(0,q.jsxs)(v,{title:`Integração concluída`,children:[(0,q.jsx)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`A loja já recebe pedidos automaticamente.`}),(0,q.jsx)(`p`,{className:`ts:mt-12`,children:(0,q.jsx)(c,{href:`#`,onClick:e=>e.preventDefault(),children:`Ver instruções de operação`})})]})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`href`,tipo:`string`,descricao:`Destino do link.`},{nome:`tone`,tipo:`'default' | 'muted'`,padrao:`'default'`,descricao:`Peso visual do texto.`},{nome:`external`,tipo:`boolean`,padrao:`false`,descricao:`Abre em outra aba e adiciona o aviso no nome.`},{nome:`render`,tipo:`ReactElement`,descricao:`Substitui a âncora pelo componente do roteador.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsx)(q.Fragment,{children:`O sublinhado diz que é link, não só a cor.`}),(0,q.jsx)(q.Fragment,{children:`Externo: ícone e o aviso “(abre em nova aba)” no nome.`}),(0,q.jsx)(q.Fragment,{children:`Texto do link diz o destino (“política de trocas”), nunca “clique aqui”.`}),(0,q.jsx)(q.Fragment,{children:`Com toque, o link tem área de 44 × 44 px; só um link de uma ou duas letras fica mais estreito, pela exceção de alvo em linha da WCAG 2.5.8; o texto e o layout não se movem. A área se sobrepõe um pouco às linhas e aos vizinhos.`})]})})]})}var Ue=[{id:`1042`,cliente:`Ana Souza`,total:184.9,status:`Pago`},{id:`1041`,cliente:`Bruno Lima`,total:62,status:`Pendente`},{id:`1040`,cliente:`Carla Dias`,total:309.5,status:`Pago`}];function We(){return(0,q.jsx)(v,{title:`Pedidos de hoje`,flush:!0,children:(0,q.jsx)(`ul`,{children:Ue.map(e=>(0,q.jsxs)(`li`,{className:`ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0`,children:[(0,q.jsxs)(`span`,{className:`ts:w-64 ts:font-mono ts:text-code ts:text-fg-secondary`,children:[`#`,e.id]}),(0,q.jsx)(`span`,{className:`ts:min-w-0 ts:flex-1 ts:truncate`,children:e.cliente}),(0,q.jsx)(`span`,{className:`ts:tabular-nums`,children:Z.format(e.total)}),(0,q.jsxs)(L,{children:[(0,q.jsx)(j,{children:(0,q.jsx)(s,{size:`sm`,variant:`secondary`,children:`Ver`})}),(0,q.jsx)(k,{title:`Pedido #${e.id}`,description:`${e.cliente} · hoje, 14:32`,footer:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(s,{variant:`secondary`,leadingIcon:re,children:`Imprimir`}),(0,q.jsx)(O,{children:(0,q.jsx)(s,{children:`Marcar como enviado`})})]}),children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,q.jsx)(w,{tone:e.status===`Pago`?`success`:`warning`,dot:!0,children:e.status}),(0,q.jsx)(M,{items:[{term:`Cliente`,description:`${e.cliente} · (51) 99999-0000`},{term:`Entrega`,description:`Rua das Flores, 120 · Porto Alegre`},{term:`Pagamento`,description:`Pix · aprovado às 14:33`},{term:`Total`,description:Z.format(e.total)}]}),(0,q.jsx)(_,{label:`Observação interna`,optional:!0,placeholder:`Só a equipe vê.`})]})})]})]},e.id))})})}function Ge(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 38 · no catálogo`,titulo:`Drawer`,descricao:`Painel lateral para ver ou editar o detalhe de uma linha sem sair da lista. Mesma estrutura do Dialog: título, descrição, corpo que rola, rodapé e o X. Arrastar para o lado fecha.`}),(0,q.jsx)(I,{codigo:`import { Button, Drawer, DrawerClose, DrawerContent, DrawerTrigger, Switch } from '@tessela/web';

<div className="ts:flex ts:flex-wrap ts:gap-8">\r
  {(['sm', 'md', 'lg'] as const).map((t) => (\r
    <Drawer key={t}>\r
      <DrawerTrigger><Button variant="secondary">{t} · {{ sm: 360, md: 480, lg: 640 }[t]} px</Button></DrawerTrigger>\r
      <DrawerContent size={t} title={\`Painel \${t}\`} description="Entra pela direita." footer={<DrawerClose><Button>Fechar</Button></DrawerClose>}><p className="ts:text-fg-secondary">Conteúdo do painel.</p></DrawerContent>\r
    </Drawer>\r
  ))}\r
  <Drawer side="left">\r
    <DrawerTrigger><Button variant="secondary">Pela esquerda</Button></DrawerTrigger>\r
    <DrawerContent size="sm" title="Filtros" footer={<DrawerClose><Button>Aplicar</Button></DrawerClose>}><div className="ts:flex ts:flex-col ts:gap-12"><Switch label="Só pagos" /><Switch label="Com entrega hoje" /></div></DrawerContent>\r
  </Drawer>\r
</div>`,id:`tamanhos`,titulo:`Tamanhos e lados`,descricao:`360, 480 (padrão) ou 640 px; nunca mais que a tela menos 48 px.`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[[`sm`,`md`,`lg`].map(e=>(0,q.jsxs)(L,{children:[(0,q.jsx)(j,{children:(0,q.jsxs)(s,{variant:`secondary`,children:[e,` · `,{sm:360,md:480,lg:640}[e],` px`]})}),(0,q.jsx)(k,{size:e,title:`Painel ${e}`,description:`Entra pela direita.`,footer:(0,q.jsx)(O,{children:(0,q.jsx)(s,{children:`Fechar`})}),children:(0,q.jsx)(`p`,{className:`ts:text-fg-secondary`,children:`Conteúdo do painel.`})})]},e)),(0,q.jsxs)(L,{side:`left`,children:[(0,q.jsx)(j,{children:(0,q.jsx)(s,{variant:`secondary`,children:`Pela esquerda`})}),(0,q.jsx)(k,{size:`sm`,title:`Filtros`,footer:(0,q.jsx)(O,{children:(0,q.jsx)(s,{children:`Aplicar`})}),children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,q.jsx)(C,{label:`Só pagos`}),(0,q.jsx)(C,{label:`Com entrega hoje`})]})})]})]})}),(0,q.jsx)(I,{codigo:`import { Badge, Button, Card, DescriptionList, Drawer, DrawerClose, DrawerContent, DrawerTrigger, Textarea } from '@tessela/web';
import { Printer } from 'lucide-react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const pedidos = [\r
  { id: '1042', cliente: 'Ana Souza', total: 184.9, status: 'Pago' as const },\r
  { id: '1041', cliente: 'Bruno Lima', total: 62, status: 'Pendente' as const },\r
  { id: '1040', cliente: 'Carla Dias', total: 309.5, status: 'Pago' as const },\r
];

function DetalheNoPainel() {\r
  return (\r
    <Card title="Pedidos de hoje" flush>\r
      <ul>\r
        {pedidos.map((p) => (\r
          <li key={p.id} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
            <span className="ts:w-64 ts:font-mono ts:text-code ts:text-fg-secondary">#{p.id}</span>\r
            <span className="ts:min-w-0 ts:flex-1 ts:truncate">{p.cliente}</span>\r
            <span className="ts:tabular-nums">{real.format(p.total)}</span>\r
            <Drawer>\r
              <DrawerTrigger><Button size="sm" variant="secondary">Ver</Button></DrawerTrigger>\r
              <DrawerContent\r
                title={\`Pedido #\${p.id}\`}\r
                description={\`\${p.cliente} · hoje, 14:32\`}\r
                footer={<><Button variant="secondary" leadingIcon={Printer}>Imprimir</Button><DrawerClose><Button>Marcar como enviado</Button></DrawerClose></>}\r
              >\r
                <div className="ts:flex ts:flex-col ts:gap-24">\r
                  <Badge tone={p.status === 'Pago' ? 'success' : 'warning'} dot>{p.status}</Badge>\r
                  <DescriptionList items={[\r
                    { term: 'Cliente', description: \`\${p.cliente} · (51) 99999-0000\` },\r
                    { term: 'Entrega', description: 'Rua das Flores, 120 · Porto Alegre' },\r
                    { term: 'Pagamento', description: 'Pix · aprovado às 14:33' },\r
                    { term: 'Total', description: real.format(p.total) },\r
                  ]} />\r
                  <Textarea label="Observação interna" optional placeholder="Só a equipe vê." />\r
                </div>\r
              </DrawerContent>\r
            </Drawer>\r
          </li>\r
        ))}\r
      </ul>\r
    </Card>\r
  );\r
}

<DetalheNoPainel />`,id:`temas`,titulo:`Temas e densidades`,descricao:`O painel abre no tema e na densidade do trecho do botão.`,children:(0,q.jsx)(B,{children:(0,q.jsx)(We,{})})}),(0,q.jsx)(I,{codigo:`import { Badge, Button, Card, DescriptionList, Drawer, DrawerClose, DrawerContent, DrawerTrigger, Textarea } from '@tessela/web';
import { Printer } from 'lucide-react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const pedidos = [\r
  { id: '1042', cliente: 'Ana Souza', total: 184.9, status: 'Pago' as const },\r
  { id: '1041', cliente: 'Bruno Lima', total: 62, status: 'Pendente' as const },\r
  { id: '1040', cliente: 'Carla Dias', total: 309.5, status: 'Pago' as const },\r
];

function DetalheNoPainel() {\r
  return (\r
    <Card title="Pedidos de hoje" flush>\r
      <ul>\r
        {pedidos.map((p) => (\r
          <li key={p.id} className="ts:flex ts:items-center ts:gap-12 ts:border-b ts:border-border-subtle ts:px-card-padding ts:py-10 ts:last:border-b-0">\r
            <span className="ts:w-64 ts:font-mono ts:text-code ts:text-fg-secondary">#{p.id}</span>\r
            <span className="ts:min-w-0 ts:flex-1 ts:truncate">{p.cliente}</span>\r
            <span className="ts:tabular-nums">{real.format(p.total)}</span>\r
            <Drawer>\r
              <DrawerTrigger><Button size="sm" variant="secondary">Ver</Button></DrawerTrigger>\r
              <DrawerContent\r
                title={\`Pedido #\${p.id}\`}\r
                description={\`\${p.cliente} · hoje, 14:32\`}\r
                footer={<><Button variant="secondary" leadingIcon={Printer}>Imprimir</Button><DrawerClose><Button>Marcar como enviado</Button></DrawerClose></>}\r
              >\r
                <div className="ts:flex ts:flex-col ts:gap-24">\r
                  <Badge tone={p.status === 'Pago' ? 'success' : 'warning'} dot>{p.status}</Badge>\r
                  <DescriptionList items={[\r
                    { term: 'Cliente', description: \`\${p.cliente} · (51) 99999-0000\` },\r
                    { term: 'Entrega', description: 'Rua das Flores, 120 · Porto Alegre' },\r
                    { term: 'Pagamento', description: 'Pix · aprovado às 14:33' },\r
                    { term: 'Total', description: real.format(p.total) },\r
                  ]} />\r
                  <Textarea label="Observação interna" optional placeholder="Só a equipe vê." />\r
                </div>\r
              </DrawerContent>\r
            </Drawer>\r
          </li>\r
        ))}\r
      </ul>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-640"><DetalheNoPainel /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Clique em Ver: o pedido abre ao lado, com os dados e uma observação.`,children:(0,q.jsx)(`div`,{className:`ts:max-w-640`,children:(0,q.jsx)(We,{})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`Drawer · open / onOpenChange / side`,tipo:`boolean / 'right' | 'left'`,padrao:`— / 'right'`,descricao:`Raiz: abrir, fechar e de que lado entra.`},{nome:`DrawerTrigger / DrawerClose`,tipo:`ReactElement`,descricao:`Envolvem o botão que abre e um botão que fecha.`},{nome:`DrawerContent · title / description / footer`,tipo:`ReactNode`,descricao:`Cabeçalho, rodapé preso ao pé.`},{nome:`DrawerContent · size / showClose`,tipo:`'sm' | 'md' | 'lg' / boolean`,padrao:`'md' / true`,descricao:`360, 480 ou 640 px; o X.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsx)(q.Fragment,{children:`É um diálogo com o nome do título; o foco começa no primeiro campo (no toque, na janela) e fica preso dentro.`}),(0,q.jsx)(q.Fragment,{children:`Esc fecha e devolve o foco ao botão. O X é o último no Tab.`}),(0,q.jsx)(q.Fragment,{children:`Arrastar para fechar é atalho; o X e o Esc continuam.`})]})})]})}function Ke(){let[e,t]=(0,K.useState)(``),[n,r]=(0,K.useState)(``),[i,a]=(0,K.useState)({cnpj:!1,cpf:!1});return(0,q.jsx)(v,{title:`Dados da empresa`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,q.jsx)(b,{label:`CNPJ`,mask:`cnpj`,value:e,onValueChange:e=>t(e),onBlur:()=>a(e=>({...e,cnpj:!0})),error:i.cnpj&&e&&!y(e)?`CNPJ inválido. Confira os caracteres.`:void 0,description:`Ex.: 12.ABC.345/01DE-35`}),(0,q.jsx)(b,{label:`CPF do responsável`,mask:`cpf`,value:n,onValueChange:e=>r(e),onBlur:()=>a(e=>({...e,cpf:!0})),error:i.cpf&&n&&!ve(n)?`CPF inválido. Confira os números.`:void 0,description:`Ex.: 529.982.247-25`}),(0,q.jsx)(b,{label:`Telefone`,mask:`telefone`}),(0,q.jsx)(b,{label:`CEP`,mask:`cep`}),(0,q.jsx)(S,{label:`Faturamento mensal`,optional:!0}),(0,q.jsx)(x,{label:`Funcionários`,defaultValue:12,min:1})]})})}function qe(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 39 · no catálogo`,titulo:`NumberField, CurrencyField e MaskedInput`,descricao:(0,q.jsxs)(q.Fragment,{children:[`Números e documentos brasileiros. O NumberField formata na localidade e tem − e +; o CurrencyField mostra reais; o MaskedInput aplica a máscara de CPF, CNPJ, CEP, telefone e cartão (número e validade) e devolve os caracteres normalizados do documento. CPF só aceita dígitos; CNPJ aceita letras e números. `,(0,q.jsx)(z,{children:`isValidCpf`}),` e `,(0,q.jsx)(z,{children:`isValidCnpj`}),` conferem os dígitos verificadores.`]})}),(0,q.jsx)(I,{codigo:`import { NumberField } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <NumberField label="Estoque" defaultValue={12} min={0} />\r
  <NumberField label="Desconto" defaultValue={0.1} min={0} max={1} step={0.05} format={{ style: 'percent' }} />\r
  <NumberField label="Peso" defaultValue={1.5} step={0.1} format={{ maximumFractionDigits: 1 }} suffix="kg" stepper={false} />\r
  <NumberField label="Com erro" error="Informe a quantidade." />\r
  <NumberField label="Desativado" disabled defaultValue={3} />\r
  <NumberField label="sm" size="sm" defaultValue={1} />\r
</div>`,id:`numero`,titulo:`NumberField`,descricao:`Setas do teclado somam o passo; Shift+seta, 10 passos. Limites travam os botões.`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(x,{label:`Estoque`,defaultValue:12,min:0}),(0,q.jsx)(x,{label:`Desconto`,defaultValue:.1,min:0,max:1,step:.05,format:{style:`percent`}}),(0,q.jsx)(x,{label:`Peso`,defaultValue:1.5,step:.1,format:{maximumFractionDigits:1},suffix:`kg`,stepper:!1}),(0,q.jsx)(x,{label:`Com erro`,error:`Informe a quantidade.`}),(0,q.jsx)(x,{label:`Desativado`,disabled:!0,defaultValue:3}),(0,q.jsx)(x,{label:`sm`,size:`sm`,defaultValue:1})]})}),(0,q.jsx)(I,{codigo:`import { CurrencyField } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <CurrencyField label="Preço" defaultValue={42} />\r
  <CurrencyField label="Preço promocional" optional />\r
  <CurrencyField label="Em dólar" currency="USD" defaultValue={19.9} />\r
</div>`,id:`moeda`,titulo:`CurrencyField`,descricao:`Digite 1234,5: ao sair do campo, vira R$ 1.234,50. O valor para o app é 1234.5.`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(S,{label:`Preço`,defaultValue:42}),(0,q.jsx)(S,{label:`Preço promocional`,optional:!0}),(0,q.jsx)(S,{label:`Em dólar`,currency:`USD`,defaultValue:19.9})]})}),(0,q.jsx)(I,{codigo:`import { MaskedInput } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <MaskedInput label="CPF" mask="cpf" />\r
  <MaskedInput label="CNPJ" mask="cnpj" />\r
  <MaskedInput label="CPF ou CNPJ" mask="cpfCnpj" />\r
  <MaskedInput label="CEP" mask="cep" />\r
  <MaskedInput label="Telefone" mask="telefone" defaultValue="51999990000" />\r
  <MaskedInput label="Número do cartão" mask="cartao" />\r
  <MaskedInput label="Validade" mask="validade" placeholder="MM/AA" />\r
</div>`,id:`mascaras`,titulo:`Máscaras`,descricao:`Digite só números, exceto no CNPJ: ele aceita letras e números, como 12.ABC.345/01DE-35. A máscara aparece sozinha. O telefone troca para 9 dígitos no celular; CPF ou CNPJ decide pelo tamanho. O cartão vai em grupos de 4 e a validade em MM/AA.`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(b,{label:`CPF`,mask:`cpf`}),(0,q.jsx)(b,{label:`CNPJ`,mask:`cnpj`}),(0,q.jsx)(b,{label:`CPF ou CNPJ`,mask:`cpfCnpj`}),(0,q.jsx)(b,{label:`CEP`,mask:`cep`}),(0,q.jsx)(b,{label:`Telefone`,mask:`telefone`,defaultValue:`51999990000`}),(0,q.jsx)(b,{label:`Número do cartão`,mask:`cartao`}),(0,q.jsx)(b,{label:`Validade`,mask:`validade`,placeholder:`MM/AA`})]})}),(0,q.jsx)(I,{codigo:`import { CurrencyField, NumberField } from '@tessela/web';

<div className="ts:grid ts:grid-cols-2 ts:gap-12"><CurrencyField label="Preço" defaultValue={42} /><NumberField label="Estoque" defaultValue={12} /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-12`,children:[(0,q.jsx)(S,{label:`Preço`,defaultValue:42}),(0,q.jsx)(x,{label:`Estoque`,defaultValue:12})]})})}),(0,q.jsx)(I,{codigo:`import { Card, CurrencyField, MaskedInput, NumberField, isValidCnpj, isValidCpf } from '@tessela/web';
import { useState } from 'react';

function DadosDaEmpresa() {\r
  const [cnpj, setCnpj] = useState('');\r
  const [cpf, setCpf] = useState('');\r
  const [tocado, setTocado] = useState({ cnpj: false, cpf: false });\r
  return (\r
    <Card title="Dados da empresa">\r
      <div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <MaskedInput label="CNPJ" mask="cnpj" value={cnpj} onValueChange={(d) => setCnpj(d)} onBlur={() => setTocado((t) => ({ ...t, cnpj: true }))} error={tocado.cnpj && cnpj && !isValidCnpj(cnpj) ? 'CNPJ inválido. Confira os caracteres.' : undefined} description="Ex.: 12.ABC.345/01DE-35" />\r
        <MaskedInput label="CPF do responsável" mask="cpf" value={cpf} onValueChange={(d) => setCpf(d)} onBlur={() => setTocado((t) => ({ ...t, cpf: true }))} error={tocado.cpf && cpf && !isValidCpf(cpf) ? 'CPF inválido. Confira os números.' : undefined} description="Ex.: 529.982.247-25" />\r
        <MaskedInput label="Telefone" mask="telefone" />\r
        <MaskedInput label="CEP" mask="cep" />\r
        <CurrencyField label="Faturamento mensal" optional />\r
        <NumberField label="Funcionários" defaultValue={12} min={1} />\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-720"><DadosDaEmpresa /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Cadastro de empresa: saia do campo com um CNPJ ou CPF errado para ver o erro.`,children:(0,q.jsx)(`div`,{className:`ts:max-w-720`,children:(0,q.jsx)(Ke,{})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`NumberField · value / onValueChange`,tipo:`number | null`,descricao:`Valor numérico; vazio é null.`},{nome:`NumberField · min / max / step / format`,tipo:`number / Intl.NumberFormatOptions`,padrao:`— / — / 1 / —`,descricao:`Limites, passo e formato na localidade.`},{nome:`NumberField · stepper / prefix / suffix`,tipo:`boolean / ReactNode`,padrao:`true`,descricao:`Botões − e +; textos fixos.`},{nome:`CurrencyField · currency`,tipo:`string`,padrao:`'BRL'`,descricao:`Moeda (ISO 4217).`},{nome:`MaskedInput · mask`,tipo:`'cpf' | 'cnpj' | 'cpfCnpj' | 'cep' | 'telefone' | 'cartao' | 'validade'`,descricao:`Máscara; o valor são caracteres normalizados. CPF só recebe dígitos e CNPJ recebe A–Z e 0–9.`},{nome:`formatMask / isValidCpf / isValidCnpj`,tipo:`funções`,descricao:`Formatar e validar fora do campo (tabelas, API).`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`CPF, CEP, telefone, número e validade do cartão abrem o teclado numérico no celular (`,(0,q.jsx)(z,{children:`inputMode`}),`); CNPJ usa teclado de texto para aceitar letras.`]}),(0,q.jsx)(q.Fragment,{children:`CEP, telefone, número e validade do cartão ligam o preenchimento automático do navegador.`}),(0,q.jsx)(q.Fragment,{children:`Os botões − e + têm nome (“Diminuir”, “Aumentar”) e travam nos limites.`}),(0,q.jsx)(q.Fragment,{children:`Com toque, o campo e os botões − e + têm alvo de 44 × 44 px, mesmo com o desenho menor. A caixa do campo não muda. Os alvos de − e + se sobrepõem um pouco, e o da direita fica por cima.`})]})})]})}function Je(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 40 · no catálogo`,titulo:`TimePicker`,descricao:`Horário em 24 h: digite (14, 930, 1415) ou escolha na lista, que filtra enquanto você digita. Ao sair, o horário é completado e conferido contra o intervalo.`}),(0,q.jsx)(I,{codigo:`import { TimePicker } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  <TimePicker label="Padrão" />\r
  <TimePicker label="De 15 em 15 min" step={15} defaultValue="14:30" />\r
  <TimePicker label="Das 8h às 22h" min="08:00" max="22:00" description="Fora disso, o campo avisa." />\r
  <TimePicker label="Com erro" error="Escolha o horário." />\r
  <TimePicker label="Desativado" disabled defaultValue="09:00" />\r
  <TimePicker label="sm" size="sm" defaultValue="18:00" />\r
</div>`,id:`estados`,titulo:`Estados`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(Y,{label:`Padrão`}),(0,q.jsx)(Y,{label:`De 15 em 15 min`,step:15,defaultValue:`14:30`}),(0,q.jsx)(Y,{label:`Das 8h às 22h`,min:`08:00`,max:`22:00`,description:`Fora disso, o campo avisa.`}),(0,q.jsx)(Y,{label:`Com erro`,error:`Escolha o horário.`}),(0,q.jsx)(Y,{label:`Desativado`,disabled:!0,defaultValue:`09:00`}),(0,q.jsx)(Y,{label:`sm`,size:`sm`,defaultValue:`18:00`})]})}),(0,q.jsx)(I,{codigo:`import { TimePicker } from '@tessela/web';

<TimePicker label="Entrega" defaultValue="14:00" />`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsx)(Y,{label:`Entrega`,defaultValue:`14:00`})})}),(0,q.jsx)(I,{codigo:`import { Card, DatePicker, TimePicker } from '@tessela/web';

<Card title="Agendar entrega" className="ts:max-w-720">\r
  <div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-md:grid-cols-1"><DatePicker label="Data" /><TimePicker label="A partir de" min="08:00" max="22:00" defaultValue="13:00" /><TimePicker label="Até" min="08:00" max="22:00" defaultValue="18:00" /></div>\r
</Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Janela de entrega: data e horário de início e fim.`,children:(0,q.jsx)(v,{title:`Agendar entrega`,className:`ts:max-w-720`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-md:grid-cols-1`,children:[(0,q.jsx)(p,{label:`Data`}),(0,q.jsx)(Y,{label:`A partir de`,min:`08:00`,max:`22:00`,defaultValue:`13:00`}),(0,q.jsx)(Y,{label:`Até`,min:`08:00`,max:`22:00`,defaultValue:`18:00`})]})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`value / defaultValue / onValueChange`,tipo:`'HH:MM' | null`,descricao:`Chamado quando o horário é válido (ou null ao esvaziar).`},{nome:`step / min / max`,tipo:`number / 'HH:MM'`,padrao:`30 / '00:00' / '23:59'`,descricao:`Intervalo da lista e limites aceitos.`},{nome:`name / required`,tipo:`string / boolean`,descricao:`Envia o horário no formulário e bloqueia o envio vazio.`},{nome:`label / description / error / size / disabled`,tipo:`—`,descricao:`Como nos campos.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`É um campo com lista (`,(0,q.jsx)(z,{children:`combobox`}),`): setas abrem e andam na lista; Enter escolhe; Esc fecha.`]}),(0,q.jsx)(q.Fragment,{children:`Horário inválido é anunciado como erro do campo.`}),(0,q.jsx)(q.Fragment,{children:`Com toque, o campo de digitação e o botão que mostra os horários têm alvo de 44 × 44 px. A caixa do campo não muda.`})]})})]})}var Q=[{id:`arquivo`,label:`Arquivo`,description:`Envie a planilha`},{id:`conferir`,label:`Conferir`,description:`Revise as colunas`},{id:`importar`,label:`Importar`,description:`Confirme`}],Ye=[{id:`restaurante`,label:`Restaurante`},{id:`conta`,label:`Conta`},{id:`plano`,label:`Plano`},{id:`cartao`,label:`Cartão`}],Xe=[{id:`cnpj`,label:`CNPJ`},{id:`conta`,label:`Conta`},{id:`plano`,label:`Plano`},{id:`cartao`,label:`Cartão`}];function Ze(){let e=Te(),[t,n]=(0,K.useState)(0);return(0,q.jsx)(v,{title:`Importar produtos`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,q.jsx)(E,{steps:Q,current:t,onStepChange:n}),(0,q.jsxs)(`div`,{className:`ts:min-h-120`,children:[t===0&&(0,q.jsx)(g,{label:`Planilha`,accept:`.csv,.xlsx`,multiple:!1,description:`CSV ou XLSX, até 10 MB.`}),t===1&&(0,q.jsx)(M,{items:[{term:`Linhas`,description:`1.240 produtos`},{term:`Colunas`,description:`nome, preço, estoque, categoria`},{term:`Problemas`,description:`3 linhas sem preço (serão puladas)`}]}),t===2&&(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,q.jsx)(`p`,{children:`Tudo pronto para importar 1.237 produtos.`}),(0,q.jsx)(be,{value:null,"aria-label":`Preparando`,size:`sm`})]})]}),(0,q.jsxs)(`div`,{className:`ts:flex ts:justify-between ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16`,children:[(0,q.jsx)(s,{variant:`ghost`,disabled:t===0,onClick:()=>n(e=>e-1),children:`Voltar`}),t<2?(0,q.jsx)(s,{onClick:()=>n(e=>e+1),children:`Continuar`}):(0,q.jsx)(s,{onClick:()=>{e.success(`1.237 produtos importados`),n(0)},children:`Importar produtos`})]})]})})}function Qe(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 41 · no catálogo`,titulo:`Stepper`,descricao:`Andamento de um processo em etapas. As concluídas ganham o traço e podem ser clicadas para voltar; a atual tem um anel.`}),(0,q.jsx)(I,{codigo:`import { Stepper } from '@tessela/web';

const etapas = [\r
  { id: 'arquivo', label: 'Arquivo', description: 'Envie a planilha' },\r
  { id: 'conferir', label: 'Conferir', description: 'Revise as colunas' },\r
  { id: 'importar', label: 'Importar', description: 'Confirme' },\r
];

<div className="ts:flex ts:flex-col ts:gap-32">\r
  <Stepper steps={etapas} current={1} />\r
  <div className="ts:max-w-320"><Stepper steps={etapas} current={2} orientation="vertical" /></div>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Horizontal (padrão; vira coluna em tela estreita) e vertical.`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-32`,children:[(0,q.jsx)(E,{steps:Q,current:1}),(0,q.jsx)(`div`,{className:`ts:max-w-320`,children:(0,q.jsx)(E,{steps:Q,current:2,orientation:`vertical`})})]})}),(0,q.jsx)(I,{codigo:`import { Stepper } from '@tessela/web';

const etapasDoCadastro = [{ id: 'cnpj', label: 'CNPJ' }, { id: 'conta', label: 'Conta' }, { id: 'plano', label: 'Plano' }, { id: 'cartao', label: 'Cartão' }];

<div className="ts:max-w-480"><Stepper steps={etapasDoCadastro} current={1} mobileLayout="row" /></div>`,id:`celular`,titulo:`No celular`,descricao:(0,q.jsxs)(q.Fragment,{children:[`Abaixo de 768 px, a horizontal empilha as etapas. Com `,(0,q.jsx)(z,{children:`mobileLayout="row"`}),`, fica em linha, com o rótulo embaixo do número: para rótulos curtos, como num cadastro.`]}),children:(0,q.jsx)(`div`,{className:`ts:max-w-480`,children:(0,q.jsx)(E,{steps:Xe,current:1,mobileLayout:`row`})})}),(0,q.jsx)(I,{codigo:`import { Stepper } from '@tessela/web';

const etapasComRotuloLongo = [{ id: 'restaurante', label: 'Restaurante' }, { id: 'conta', label: 'Conta' }, { id: 'plano', label: 'Plano' }, { id: 'cartao', label: 'Cartão' }];

<div className="ts:max-w-416"><Stepper steps={etapasComRotuloLongo} current={0} /></div>`,id:`rotulo-longo`,titulo:`Rótulo longo`,descricao:(0,q.jsxs)(q.Fragment,{children:[`As etapas dividem a largura por igual, mas nenhuma fica menor que o próprio rótulo: a do rótulo longo pega espaço das vizinhas e dos conectores, sem quebrar a palavra nem invadir a vizinha. Se nem assim couber, use `,(0,q.jsx)(z,{children:`orientation="vertical"`}),`.`]}),children:(0,q.jsx)(`div`,{className:`ts:max-w-416`,children:(0,q.jsx)(E,{steps:Ye,current:0})})}),(0,q.jsx)(I,{codigo:`import { Stepper } from '@tessela/web';

const etapas = [\r
  { id: 'arquivo', label: 'Arquivo', description: 'Envie a planilha' },\r
  { id: 'conferir', label: 'Conferir', description: 'Revise as colunas' },\r
  { id: 'importar', label: 'Importar', description: 'Confirme' },\r
];

<Stepper steps={etapas} current={1} />`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{umaColuna:!0,children:(0,q.jsx)(E,{steps:Q,current:1})})}),(0,q.jsx)(I,{codigo:`import { Button, Card, DescriptionList, FileUpload, Progress, Stepper, useToast } from '@tessela/web';
import { useState } from 'react';

const etapas = [\r
  { id: 'arquivo', label: 'Arquivo', description: 'Envie a planilha' },\r
  { id: 'conferir', label: 'Conferir', description: 'Revise as colunas' },\r
  { id: 'importar', label: 'Importar', description: 'Confirme' },\r
];

function Importacao() {\r
  const toast = useToast();\r
  const [atual, setAtual] = useState(0);\r
  return (\r
    <Card title="Importar produtos">\r
      <div className="ts:flex ts:flex-col ts:gap-24">\r
        <Stepper steps={etapas} current={atual} onStepChange={setAtual} />\r
        <div className="ts:min-h-120">\r
          {atual === 0 && <FileUpload label="Planilha" accept=".csv,.xlsx" multiple={false} description="CSV ou XLSX, até 10 MB." />}\r
          {atual === 1 && <DescriptionList items={[{ term: 'Linhas', description: '1.240 produtos' }, { term: 'Colunas', description: 'nome, preço, estoque, categoria' }, { term: 'Problemas', description: '3 linhas sem preço (serão puladas)' }]} />}\r
          {atual === 2 && <div className="ts:flex ts:flex-col ts:gap-12"><p>Tudo pronto para importar 1.237 produtos.</p><Progress value={null} aria-label="Preparando" size="sm" /></div>}\r
        </div>\r
        <div className="ts:flex ts:justify-between ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
          <Button variant="ghost" disabled={atual === 0} onClick={() => setAtual((a) => a - 1)}>Voltar</Button>\r
          {atual < 2 ? <Button onClick={() => setAtual((a) => a + 1)}>Continuar</Button> : <Button onClick={() => { toast.success('1.237 produtos importados'); setAtual(0); }}>Importar produtos</Button>}\r
        </div>\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-720"><Importacao /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Importação em três etapas: continue, volte clicando numa etapa concluída.`,children:(0,q.jsx)(`div`,{className:`ts:max-w-720`,children:(0,q.jsx)(Ze,{})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`steps`,tipo:`{ id, label, description? }[]`,descricao:`Etapas.`},{nome:`current`,tipo:`number`,descricao:`Etapa atual, a partir de 0; as anteriores contam como concluídas.`},{nome:`onStepChange`,tipo:`(index) => void`,descricao:`Com ele, as concluídas viram botões.`},{nome:`orientation`,tipo:`'horizontal' | 'vertical'`,padrao:`'horizontal'`,descricao:`Direção.`},{nome:`mobileLayout`,tipo:`'column' | 'row'`,padrao:`'column'`,descricao:`Abaixo de 768 px, na horizontal: empilha as etapas ou fica em linha, com o rótulo em caption embaixo do número.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Grupo “Etapas” (`,(0,q.jsx)(z,{children:`role="group"`}),`) com lista ordenada; com `,(0,q.jsx)(z,{children:`onStepChange`}),`, as concluídas viram botões para voltar a elas, e o grupo vira navegação (`,(0,q.jsx)(z,{children:`nav`}),`). A atual tem `,(0,q.jsx)(z,{children:`aria-current="step"`}),`.`]}),(0,q.jsx)(q.Fragment,{children:`Cada etapa diz posição e situação ao leitor de tela (“Etapa 2 de 3, atual”).`})]})})]})}function $({contexto:e=`Perguntas frequentes`}){return(0,q.jsxs)(ye,{defaultValue:[`prazo`],children:[(0,q.jsx)(V,{value:`prazo`,title:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`span`,{className:`ts:sr-only`,children:[e,`: `]}),`Qual o prazo de entrega?`]}),children:`Em Porto Alegre, até 40 minutos. Em outras cidades, o prazo aparece no carrinho.`}),(0,q.jsx)(V,{value:`troca`,title:`Posso trocar um produto?`,children:`Sim, em até 7 dias depois da entrega, com o produto sem uso.`}),(0,q.jsx)(V,{value:`pagamento`,title:`Quais formas de pagamento a loja aceita?`,children:`Pix, cartão de crédito e débito. No balcão, também dinheiro.`}),(0,q.jsx)(V,{value:`nota`,title:`Emissão de nota fiscal`,disabled:!0,children:`Disponível no plano Pro.`})]})}function $e(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 42 · no catálogo`,titulo:`Accordion`,descricao:`Seções que abrem e fecham. Bom para perguntas frequentes e ajustes pouco usados; não esconda o que a pessoa precisa ver.`}),(0,q.jsx)(I,{codigo:`import { Accordion, AccordionItem, Card } from '@tessela/web';

function Perguntas({ contexto = 'Perguntas frequentes' }: { contexto?: string }) {\r
  return (\r
    <Accordion defaultValue={['prazo']}>\r
      <AccordionItem value="prazo" title={<><span className="ts:sr-only">{contexto}: </span>Qual o prazo de entrega?</>}>Em Porto Alegre, até 40 minutos. Em outras cidades, o prazo aparece no carrinho.</AccordionItem>\r
      <AccordionItem value="troca" title="Posso trocar um produto?">Sim, em até 7 dias depois da entrega, com o produto sem uso.</AccordionItem>\r
      <AccordionItem value="pagamento" title="Quais formas de pagamento a loja aceita?">Pix, cartão de crédito e débito. No balcão, também dinheiro.</AccordionItem>\r
      <AccordionItem value="nota" title="Emissão de nota fiscal" disabled>Disponível no plano Pro.</AccordionItem>\r
    </Accordion>\r
  );\r
}

<div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1">\r
  <Card title="Perguntas frequentes"><Perguntas /></Card>\r
  <Card title="Vários abertos"><Accordion multiple defaultValue={['a', 'b']}><AccordionItem value="a" title="Horário de funcionamento">Seg a sáb, das 8h às 22h.</AccordionItem><AccordionItem value="b" title="Área de entrega">Até 8 km da loja.</AccordionItem></Accordion></Card>\r
</div>`,id:`variacoes`,titulo:`Variações`,descricao:`Um aberto por vez (padrão) ou vários (multiple). Item desativado fica cinza.`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(v,{title:`Perguntas frequentes`,children:(0,q.jsx)($,{})}),(0,q.jsx)(v,{title:`Vários abertos`,children:(0,q.jsxs)(ye,{multiple:!0,defaultValue:[`a`,`b`],children:[(0,q.jsx)(V,{value:`a`,title:`Horário de funcionamento`,children:`Seg a sáb, das 8h às 22h.`}),(0,q.jsx)(V,{value:`b`,title:`Área de entrega`,children:`Até 8 km da loja.`})]})})]})}),(0,q.jsx)(I,{id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[o.map(e=>(0,q.jsx)(De,{theme:e,titulo:P[e],children:(0,q.jsx)($,{contexto:`Perguntas frequentes no tema ${P[e]}`})},e)),r.map(e=>(0,q.jsx)(De,{density:e,titulo:H[e],children:(0,q.jsx)($,{contexto:`Perguntas frequentes na densidade ${H[e]}`})},e))]})}),(0,q.jsx)(I,{codigo:`import { Accordion, AccordionItem, Card } from '@tessela/web';

function Perguntas({ contexto = 'Perguntas frequentes' }: { contexto?: string }) {\r
  return (\r
    <Accordion defaultValue={['prazo']}>\r
      <AccordionItem value="prazo" title={<><span className="ts:sr-only">{contexto}: </span>Qual o prazo de entrega?</>}>Em Porto Alegre, até 40 minutos. Em outras cidades, o prazo aparece no carrinho.</AccordionItem>\r
      <AccordionItem value="troca" title="Posso trocar um produto?">Sim, em até 7 dias depois da entrega, com o produto sem uso.</AccordionItem>\r
      <AccordionItem value="pagamento" title="Quais formas de pagamento a loja aceita?">Pix, cartão de crédito e débito. No balcão, também dinheiro.</AccordionItem>\r
      <AccordionItem value="nota" title="Emissão de nota fiscal" disabled>Disponível no plano Pro.</AccordionItem>\r
    </Accordion>\r
  );\r
}

<Card title="Dúvidas sobre seu pedido"><Perguntas contexto="Dúvidas sobre seu pedido" /></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Perguntas frequentes no fim de uma página de entrega.`,children:(0,q.jsx)(v,{title:`Dúvidas sobre seu pedido`,children:(0,q.jsx)($,{contexto:`Dúvidas sobre seu pedido`})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`Accordion · multiple`,tipo:`boolean`,padrao:`false`,descricao:`Vários abertos ao mesmo tempo.`},{nome:`Accordion · value / defaultValue / onValueChange`,tipo:`string[]`,descricao:`Itens abertos.`},{nome:`AccordionItem · value / title / disabled`,tipo:`—`,descricao:`Identificador, título e desativado.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Cada título é um botão num heading, com `,(0,q.jsx)(z,{children:`aria-expanded`}),`; Enter ou Espaço abrem e fecham.`]}),(0,q.jsx)(q.Fragment,{children:`Com movimento reduzido, abre sem animar a altura.`})]})})]})}function et(){let e=[{term:`Nome`,description:`Ana Souza`},{term:`E-mail`,description:`ana@exemplo.com.br`},{term:`Telefone`,description:`(51) 99999-0000`},{term:`Endereço`,description:`Rua das Flores, 120, ap. 302 · Porto Alegre, RS`},{term:`Cliente desde`,description:`março de 2024`}];return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 43 · no catálogo`,titulo:`DescriptionList`,descricao:`Pares rótulo e valor de um registro. rows põe o rótulo à esquerda (detalhe); grid põe em cima, em colunas (resumo).`}),(0,q.jsx)(I,{codigo:`import { Card, DescriptionList } from '@tessela/web';

<div className="ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1">\r
  <Card title="Cliente (rows)"><DescriptionList items={cliente} /></Card>\r
  <Card title="Resumo do pedido (grid)"><DescriptionList layout="grid" columns={2} items={[{ term: 'Total', description: 'R$ 194,80' }, { term: 'Itens', description: '4' }, { term: 'Pagamento', description: 'Pix' }, { term: 'Entrega', description: 'Amanhã, 13h–18h' }]} /></Card>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:items-start ts:gap-16 ts:max-lg:grid-cols-1`,children:[(0,q.jsx)(v,{title:`Cliente (rows)`,children:(0,q.jsx)(M,{items:e})}),(0,q.jsx)(v,{title:`Resumo do pedido (grid)`,children:(0,q.jsx)(M,{layout:`grid`,columns:2,items:[{term:`Total`,description:`R$ 194,80`},{term:`Itens`,description:`4`},{term:`Pagamento`,description:`Pix`},{term:`Entrega`,description:`Amanhã, 13h–18h`}]})})]})}),(0,q.jsx)(I,{codigo:`import { DescriptionList } from '@tessela/web';

<DescriptionList items={cliente.slice(0, 3)} />`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsx)(M,{items:e.slice(0,3)})})}),(0,q.jsx)(I,{codigo:`import { Card, DescriptionList } from '@tessela/web';

<Card title="Cliente"><DescriptionList items={cliente.slice(0, 3)} /></Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Dados da pessoa no resumo de um pedido.`,children:(0,q.jsx)(v,{title:`Cliente`,children:(0,q.jsx)(M,{items:e.slice(0,3)})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`items`,tipo:`{ term, description }[]`,descricao:`Pares; vira dl/dt/dd.`},{nome:`layout`,tipo:`'rows' | 'grid'`,padrao:`'rows'`,descricao:`Rótulo à esquerda ou em cima.`},{nome:`columns`,tipo:`2 | 3 | 4`,padrao:`3`,descricao:`Colunas do grid; uma coluna em tela estreita.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Use uma lista de termos: o componente renderiza `,(0,q.jsx)(z,{children:`dl`}),`, `,(0,q.jsx)(z,{children:`dt`}),` e `,(0,q.jsx)(z,{children:`dd`}),` para relacionar cada rótulo ao seu valor.`]}),(0,q.jsx)(q.Fragment,{children:`Mantenha o termo curto e escreva o valor completo; não use a lista para controles interativos.`})]})})]})}function tt(){let e=[{id:`status`,rotulo:`Status: Pago`},{id:`canal`,rotulo:`Canal: Site`},{id:`periodo`,rotulo:`Últimos 7 dias`},{id:`valor`,rotulo:`Acima de R$ 100`}],[t,n]=(0,K.useState)(e);return(0,q.jsx)(v,{title:`Pedidos`,description:`${t.length?38-t.length*7:38} resultados`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-8`,children:[t.map(e=>(0,q.jsx)(A,{onRemove:()=>n(t=>t.filter(t=>t.id!==e.id)),children:e.rotulo},e.id)),t.length>0?(0,q.jsx)(s,{size:`sm`,variant:`ghost`,onClick:()=>n([]),children:`Limpar filtros`}):(0,q.jsx)(s,{size:`sm`,variant:`ghost`,onClick:()=>n(e),children:`Restaurar exemplo`})]})})}function nt(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 44 · no catálogo`,titulo:`Tag`,descricao:`Etiqueta removível: filtros ativos, palavras-chave, destinatários. Para status (que não se remove), use o Badge.`}),(0,q.jsx)(I,{codigo:`import { Tag } from '@tessela/web';
import { List } from 'lucide-react';

<div className="ts:flex ts:flex-wrap ts:gap-8"><Tag>café</Tag><Tag onRemove={() => {}}>Status: Pago</Tag><Tag icon={List} onRemove={() => {}}>Categoria: Mercearia</Tag></div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,q.jsx)(A,{children:`café`}),(0,q.jsx)(A,{onRemove:()=>{},children:`Status: Pago`}),(0,q.jsx)(A,{icon:h,onRemove:()=>{},children:`Categoria: Mercearia`})]})}),(0,q.jsx)(I,{codigo:`import { Tag } from '@tessela/web';

<div className="ts:flex ts:flex-wrap ts:gap-8"><Tag onRemove={() => {}}>Status: Pago</Tag><Tag onRemove={() => {}}>Canal: Site</Tag></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,q.jsx)(A,{onRemove:()=>{},children:`Status: Pago`}),(0,q.jsx)(A,{onRemove:()=>{},children:`Canal: Site`})]})})}),(0,q.jsx)(I,{codigo:`import { Button, Card, Tag } from '@tessela/web';
import { useState } from 'react';

type Filtro = { id: string; rotulo: string };

function FiltrosAtivos() {\r
  const inicial: Filtro[] = [{ id: 'status', rotulo: 'Status: Pago' }, { id: 'canal', rotulo: 'Canal: Site' }, { id: 'periodo', rotulo: 'Últimos 7 dias' }, { id: 'valor', rotulo: 'Acima de R$ 100' }];\r
  const [filtros, setFiltros] = useState(inicial);\r
  return (\r
    <Card title="Pedidos" description={\`\${filtros.length ? 38 - filtros.length * 7 : 38} resultados\`}>\r
      <div className="ts:flex ts:flex-wrap ts:items-center ts:gap-8">\r
        {filtros.map((f) => <Tag key={f.id} onRemove={() => setFiltros((l) => l.filter((x) => x.id !== f.id))}>{f.rotulo}</Tag>)}\r
        {filtros.length > 0 ? <Button size="sm" variant="ghost" onClick={() => setFiltros([])}>Limpar filtros</Button> : <Button size="sm" variant="ghost" onClick={() => setFiltros(inicial)}>Restaurar exemplo</Button>}\r
      </div>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-640"><FiltrosAtivos /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Filtros ativos acima de uma lista; remova um ou limpe todos.`,children:(0,q.jsx)(`div`,{className:`ts:max-w-640`,children:(0,q.jsx)(tt,{})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`children`,tipo:`ReactNode`,descricao:`Texto que identifica o filtro.`},{nome:`icon`,tipo:`IconComponent`,descricao:`Ícone opcional antes do texto.`},{nome:`onRemove`,tipo:`() => void`,descricao:`Mostra o botão para remover a etiqueta.`},{nome:`className`,tipo:`string`,descricao:`Classes adicionais para posicionar a etiqueta.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsx)(q.Fragment,{children:`O X é um botão com nome (“Remover Status: Pago”).`}),(0,q.jsx)(q.Fragment,{children:`Ao remover o último, mova o foco para um lugar útil (a busca, o botão de filtros).`}),(0,q.jsx)(q.Fragment,{children:`Com toque, o botão de remover tem alvo de 44 × 44 px em volta do X; o círculo de 20 px continua igual.`})]})})]})}function rt(){let[e,t]=(0,K.useState)([`seg`,`ter`,`qua`,`qui`,`sex`]);return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 45 · no catálogo`,titulo:`ToggleGroup`,descricao:`Botões unidos que ligam e desligam. Escolha única (alinhamento, visão) ou múltipla (dias da semana, formatos). Para trocar o conteúdo de uma área, use Tabs.`}),(0,q.jsx)(I,{codigo:`import { ToggleGroup, ToggleGroupItem } from '@tessela/web';
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, LayoutGrid, List, Underline } from 'lucide-react';

<div className="ts:flex ts:flex-col ts:items-start ts:gap-16">\r
  <ToggleGroup aria-label="Alinhamento" defaultValue={['esq']}><ToggleGroupItem value="esq" icon={AlignLeft} aria-label="Esquerda" /><ToggleGroupItem value="centro" icon={AlignCenter} aria-label="Centro" /><ToggleGroupItem value="dir" icon={AlignRight} aria-label="Direita" /></ToggleGroup>\r
  <ToggleGroup aria-label="Formato" multiple size="sm"><ToggleGroupItem value="b" icon={Bold} aria-label="Negrito" /><ToggleGroupItem value="i" icon={Italic} aria-label="Itálico" /><ToggleGroupItem value="u" icon={Underline} aria-label="Sublinhado" /></ToggleGroup>\r
  <ToggleGroup aria-label="Visão" defaultValue={['lista']}><ToggleGroupItem value="lista" icon={List}>Lista</ToggleGroupItem><ToggleGroupItem value="grade" icon={LayoutGrid}>Grade</ToggleGroupItem></ToggleGroup>\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-start ts:gap-16`,children:[(0,q.jsxs)(R,{"aria-label":`Alinhamento`,defaultValue:[`esq`],children:[(0,q.jsx)(T,{value:`esq`,icon:Pe,"aria-label":`Esquerda`}),(0,q.jsx)(T,{value:`centro`,icon:Me,"aria-label":`Centro`}),(0,q.jsx)(T,{value:`dir`,icon:Ne,"aria-label":`Direita`})]}),(0,q.jsxs)(R,{"aria-label":`Formato`,multiple:!0,size:`sm`,children:[(0,q.jsx)(T,{value:`b`,icon:d,"aria-label":`Negrito`}),(0,q.jsx)(T,{value:`i`,icon:u,"aria-label":`Itálico`}),(0,q.jsx)(T,{value:`u`,icon:f,"aria-label":`Sublinhado`})]}),(0,q.jsxs)(R,{"aria-label":`Visão`,defaultValue:[`lista`],children:[(0,q.jsx)(T,{value:`lista`,icon:h,children:`Lista`}),(0,q.jsx)(T,{value:`grade`,icon:m,children:`Grade`})]})]})}),(0,q.jsx)(I,{codigo:`import { ToggleGroup, ToggleGroupItem } from '@tessela/web';
import { LayoutGrid, List } from 'lucide-react';

<ToggleGroup aria-label="Visão" defaultValue={['lista']}><ToggleGroupItem value="lista" icon={List}>Lista</ToggleGroupItem><ToggleGroupItem value="grade" icon={LayoutGrid}>Grade</ToggleGroupItem></ToggleGroup>`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsxs)(R,{"aria-label":`Visão`,defaultValue:[`lista`],children:[(0,q.jsx)(T,{value:`lista`,icon:h,children:`Lista`}),(0,q.jsx)(T,{value:`grade`,icon:m,children:`Grade`})]})})}),(0,q.jsx)(I,{codigo:`import { Card, TimePicker, ToggleGroup, ToggleGroupItem } from '@tessela/web';

<Card title="Horário de funcionamento" className="ts:max-w-640">\r
  <div className="ts:flex ts:flex-col ts:gap-16">\r
    <ToggleGroup aria-label="Dias de funcionamento" multiple value={dias} onValueChange={setDias}>{Object.entries(nomes).map(([v, n]) => <ToggleGroupItem key={v} value={v}>{n}</ToggleGroupItem>)}</ToggleGroup>\r
    <p className="ts:text-body-s ts:text-fg-secondary">Aberta {dias.length} dias por semana.</p>\r
    <div className="ts:grid ts:grid-cols-2 ts:gap-16"><TimePicker label="Abre" defaultValue="08:00" /><TimePicker label="Fecha" defaultValue="22:00" /></div>\r
  </div>\r
</Card>`,id:`em-uso`,titulo:`Em uso`,descricao:`Dias de funcionamento da loja.`,children:(0,q.jsx)(v,{title:`Horário de funcionamento`,className:`ts:max-w-640`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,q.jsx)(R,{"aria-label":`Dias de funcionamento`,multiple:!0,value:e,onValueChange:t,children:Object.entries({dom:`Dom`,seg:`Seg`,ter:`Ter`,qua:`Qua`,qui:`Qui`,sex:`Sex`,sab:`Sáb`}).map(([e,t])=>(0,q.jsx)(T,{value:e,children:t},e))}),(0,q.jsxs)(`p`,{className:`ts:text-body-s ts:text-fg-secondary`,children:[`Aberta `,e.length,` dias por semana.`]}),(0,q.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-16`,children:[(0,q.jsx)(Y,{label:`Abre`,defaultValue:`08:00`}),(0,q.jsx)(Y,{label:`Fecha`,defaultValue:`22:00`})]})]})})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`ToggleGroup · value / defaultValue / onValueChange`,tipo:`string[]`,descricao:`Itens ligados.`},{nome:`ToggleGroup · multiple / size / aria-label`,tipo:`boolean / 'sm' | 'md' / string`,padrao:`false / 'md'`,descricao:`Um ou vários; tamanho; nome do grupo.`},{nome:`ToggleGroupItem · value / icon / aria-label`,tipo:`—`,descricao:`Só ícone exige aria-label.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Grupo com nome; cada botão diz se está ligado (`,(0,q.jsx)(z,{children:`aria-pressed`}),`).`]}),(0,q.jsx)(q.Fragment,{children:`Setas andam entre os botões; Enter ou Espaço ligam e desligam.`})]})})]})}var it=[{nome:`Filtro de papel 103`,preco:12.9},{nome:`Chocolate quente`,preco:29.5},{nome:`Café torrado 500 g`,preco:42},{nome:`Caneca esmaltada`,preco:88},{nome:`Prensa francesa`,preco:149},{nome:`Moedor manual`,preco:239}];function at(){let[e,t]=(0,K.useState)([20,150]),n=(0,K.useMemo)(()=>it.filter(t=>t.preco>=e[0]&&t.preco<=e[1]),[e]);return(0,q.jsx)(v,{title:`Produtos`,className:`ts:max-w-560`,children:(0,q.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-20`,children:[(0,q.jsx)(D,{label:`Faixa de preço`,value:e,onValueChange:e=>t(e),min:0,max:250,step:5,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0}}),(0,q.jsxs)(`ul`,{className:`ts:flex ts:flex-col ts:text-body-m`,children:[n.map(e=>(0,q.jsxs)(`li`,{className:`ts:flex ts:justify-between ts:border-b ts:border-border-subtle ts:py-8 ts:last:border-b-0`,children:[(0,q.jsx)(`span`,{children:e.nome}),(0,q.jsx)(`span`,{className:`ts:tabular-nums`,children:Z.format(e.preco)})]},e.nome)),!n.length&&(0,q.jsx)(`li`,{className:`ts:py-8 ts:text-fg-muted`,children:`Nenhum produto nessa faixa.`})]})]})})}function ot(){return(0,q.jsxs)(`article`,{children:[(0,q.jsx)(F,{etapa:`Componente 46 · no catálogo`,titulo:`Slider`,descricao:`Valor ou faixa numa régua: porcentagem, faixa de preço, raio de entrega. Para valores exatos, ofereça também um campo (NumberField).`}),(0,q.jsx)(I,{codigo:`import { Slider } from '@tessela/web';

<div className="ts:grid ts:max-w-560 ts:gap-32">\r
  <Slider label="Raio de entrega" defaultValue={8} min={1} max={20} format={{ style: 'unit', unit: 'kilometer' }} description="A partir da loja." />\r
  <Slider label="Desconto máximo" defaultValue={0.15} min={0} max={0.5} step={0.05} format={{ style: 'percent' }} />\r
  <Slider label="Faixa de preço" defaultValue={[50, 200]} min={0} max={300} step={10} format={{ style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }} />\r
  <Slider label="Desativado" defaultValue={40} disabled />\r
</div>`,id:`variacoes`,titulo:`Variações`,children:(0,q.jsxs)(`div`,{className:`ts:grid ts:max-w-560 ts:gap-32`,children:[(0,q.jsx)(D,{label:`Raio de entrega`,defaultValue:8,min:1,max:20,format:{style:`unit`,unit:`kilometer`},description:`A partir da loja.`}),(0,q.jsx)(D,{label:`Desconto máximo`,defaultValue:.15,min:0,max:.5,step:.05,format:{style:`percent`}}),(0,q.jsx)(D,{label:`Faixa de preço`,defaultValue:[50,200],min:0,max:300,step:10,format:{style:`currency`,currency:`BRL`,maximumFractionDigits:0}}),(0,q.jsx)(D,{label:`Desativado`,defaultValue:40,disabled:!0})]})}),(0,q.jsx)(I,{codigo:`import { Slider } from '@tessela/web';

<Slider label="Raio" defaultValue={8} min={1} max={20} format={{ style: 'unit', unit: 'kilometer' }} />`,id:`temas`,titulo:`Temas e densidades`,children:(0,q.jsx)(B,{children:(0,q.jsx)(D,{label:`Raio`,defaultValue:8,min:1,max:20,format:{style:`unit`,unit:`kilometer`}})})}),(0,q.jsx)(I,{codigo:`import { Card, Slider } from '@tessela/web';
import { useMemo, useState } from 'react';

const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const produtos = [\r
  { nome: 'Filtro de papel 103', preco: 12.9 }, { nome: 'Chocolate quente', preco: 29.5 }, { nome: 'Café torrado 500 g', preco: 42 },\r
  { nome: 'Caneca esmaltada', preco: 88 }, { nome: 'Prensa francesa', preco: 149 }, { nome: 'Moedor manual', preco: 239 },\r
];

function FaixaDePreco() {\r
  const [faixa, setFaixa] = useState<[number, number]>([20, 150]);\r
  const achados = useMemo(() => produtos.filter((p) => p.preco >= faixa[0] && p.preco <= faixa[1]), [faixa]);\r
  return (\r
    <Card title="Produtos" className="ts:max-w-560">\r
      <div className="ts:flex ts:flex-col ts:gap-20">\r
        <Slider label="Faixa de preço" value={faixa} onValueChange={(v) => setFaixa(v as [number, number])} min={0} max={250} step={5} format={{ style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }} />\r
        <ul className="ts:flex ts:flex-col ts:text-body-m">\r
          {achados.map((p) => <li key={p.nome} className="ts:flex ts:justify-between ts:border-b ts:border-border-subtle ts:py-8 ts:last:border-b-0"><span>{p.nome}</span><span className="ts:tabular-nums">{real.format(p.preco)}</span></li>)}\r
          {!achados.length && <li className="ts:py-8 ts:text-fg-muted">Nenhum produto nessa faixa.</li>}\r
        </ul>\r
      </div>\r
    </Card>\r
  );\r
}

<FaixaDePreco />`,id:`em-uso`,titulo:`Em uso`,descricao:`Filtro de produtos por faixa de preço.`,children:(0,q.jsx)(at,{})}),(0,q.jsx)(I,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,q.jsx)(N,{itens:[{nome:`value / defaultValue / onValueChange`,tipo:`number | [número, número]`,descricao:`Um valor ou faixa (dois polegares).`},{nome:`min / max / step / format`,tipo:`number / Intl.NumberFormatOptions`,padrao:`0 / 100 / 1 / —`,descricao:`Limites, passo e formato na localidade.`},{nome:`label / description / showValue / disabled`,tipo:`—`,padrao:`showValue: true`,descricao:`Rótulo, ajuda e o valor à direita.`}]})}),(0,q.jsx)(I,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,q.jsx)(X,{itens:[(0,q.jsxs)(q.Fragment,{children:[`Cada polegar é um `,(0,q.jsx)(z,{children:`slider`}),` com nome (na faixa, “Mínimo” e “Máximo”) e o valor formatado.`]}),(0,q.jsx)(q.Fragment,{children:`Com toque, o polegar e a régua respondem numa faixa de 44 px de altura; o polegar continua com 16 px. A área de toque avança uns 4 px sobre a linha do rótulo e do valor; o desenho não muda.`}),(0,q.jsx)(q.Fragment,{children:`Setas somam o passo; PageUp/PageDown, 10 passos; Home e End vão às pontas.`})]})})]})}export{$e as AccordionPagina,et as DescriptionListPagina,Ge as DrawerPagina,He as LinkPagina,qe as NumberFieldPagina,Ve as SeparatorPagina,ot as SliderPagina,Be as SpinnerPagina,Qe as StepperPagina,nt as TagPagina,Je as TimePickerPagina,rt as ToggleGroupPagina};