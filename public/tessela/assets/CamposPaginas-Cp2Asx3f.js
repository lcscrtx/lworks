import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,g as n}from"./recharts-CHWuGRQf.js";import{Bt as r,Er as i,G as a,In as o,Sr as s,U as c,Ut as l,Wt as u,Yn as d,_i as f,cn as p,fn as m,hr as h,jr as g,kn as _,mr as v,pi as y,sn as b,sr as x,un as S,vi as C,x as w,xr as T,yr as E}from"./Codigo-Dgz1In5l.js";import{t as D}from"./clock-CYh0yKdw.js";import{t as O}from"./Input-BBFu0gZj.js";import{s as ee}from"./tiptap-jvs8iIPE.js";import{a as te,i as k,o as A,t as ne,u as re}from"./resolveValueLabel-Dj0x4zu_.js";import{t as j}from"./Select-DFPozajq.js";import{c as ie}from"./useRegisterFieldControl-DVveJKYm.js";import{i as ae,n as oe,r as se,t as ce}from"./FieldDescription-Bm_h-aQC.js";import{n as le,t as ue}from"./useCompositeListItem-H165gDY0.js";import{r as de,t as fe}from"./popup-DFIftnn-.js";import{E as M,T as pe,_ as me,b as N,c as he,g as ge,l as _e,n as P,o as ve,r as ye,s as be,t as xe,u as Se,y as Ce}from"./ComboboxItem-3_d_trQP.js";import{i as we,n as Te,r as Ee,t as De}from"./ComboboxPopup-nn8SRWev.js";import{t as F}from"./Textarea-DglDNy8U.js";import{Xt as Oe,_ as I,bn as ke,cn as Ae,dn as L,en as je,f as R,g as z,in as Me,mn as Ne,nn as Pe,p as B,tn as Fe,v as V,yn as Ie}from"./index-3SU4ioj-.js";var Le={name:`circle-dashed`,size:24,node:[[`path`,{d:`M10.1 2.182a10 10 0 0 1 3.8 0`,key:`5ilxe3`}],[`path`,{d:`M13.9 21.818a10 10 0 0 1-3.8 0`,key:`11zvb9`}],[`path`,{d:`M17.609 3.721a10 10 0 0 1 2.69 2.7`,key:`1iw5b2`}],[`path`,{d:`M2.182 13.9a10 10 0 0 1 0-3.8`,key:`c0bmvh`}],[`path`,{d:`M20.279 17.609a10 10 0 0 1-2.7 2.69`,key:`1ruxm7`}],[`path`,{d:`M21.818 10.1a10 10 0 0 1 0 3.8`,key:`qkgqxc`}],[`path`,{d:`M3.721 6.391a10 10 0 0 1 2.7-2.69`,key:`1mcia2`}],[`path`,{d:`M6.391 20.279a10 10 0 0 1-2.69-2.7`,key:`1fvljs`}]]};Le.node;var Re=C(Le),H={name:`circle-x`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]],aliases:[`x-circle`]};H.node;var ze=C(H),U=e(t(),1),W=ee();function G(e){let{multiple:t=!1,defaultValue:n,value:r,onValueChange:i,autoComplete:a,...o}=e;return(0,W.jsx)(Ce,{...o,selectionMode:t?`multiple`:`single`,selectedValue:r,defaultSelectedValue:n,onSelectedValueChange:i,formAutoComplete:a})}function Be(e){let{children:t,placeholder:n}=e,r=M(),i=r.useState(`itemToStringLabel`),a=r.useState(`selectedValue`),o=r.useState(`items`),s=r.useState(`selectionMode`)===`multiple`,c=r.useState(`hasSelectedValue`),l=!c&&n!=null&&t==null,u=r.useState(`hasNullItemLabel`,l),d=null;return d=typeof t==`function`?t(a):t??(!c&&n!=null&&!u?n:s&&Array.isArray(a)?k(a,o,i):te(a,o,i)),(0,W.jsx)(U.Fragment,{children:d})}var Ve=U.forwardRef(function(e,t){let{selected:n}=P();return e.keepMounted||n?(0,W.jsx)(He,{...e,ref:t}):null}),He=U.memo(U.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:s,...l}=e,{selected:u}=P(),d=U.useRef(null),{transitionStatus:f,setMounted:p}=a(u),m=E(`span`,e,{ref:[t,d],state:{selected:u,transitionStatus:f},props:[{"aria-hidden":!0,children:`✔️`},l],stateAttributesMapping:o});return c({batch:!0,enabled:!u,open:u,ref:d,onComplete(){u||p(!1)}}),m})),Ue=U.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=M(),c=o.useState(`open`),l=o.useState(`hasSelectionChips`),[u,d]=U.useState(void 0);c&&u!==void 0&&d(void 0);let f=U.useRef([]),p=E(`div`,e,{ref:[t,o.context.chipsContainerRef],props:[l?{role:`toolbar`}:s,{onMouseDown(e){be(e,o,o.state.disabled)}},a]}),m=U.useMemo(()=>({highlightedChipIndex:u,setHighlightedChipIndex:d,chipsRef:f}),[u,d,f]);return(0,W.jsx)(ge.Provider,{value:m,children:(0,W.jsx)(le,{elementsRef:f,children:p})})}),K=U.createContext(void 0);function We(){let e=U.useContext(K);if(!e)throw Error(g(17));return e}var Ge=e(n(),1),Ke=U.forwardRef(function(e,t){let{render:n,className:i,style:a,...o}=e,s=M(),{setHighlightedChipIndex:c,chipsRef:l}=me(),u=w(),f=s.useState(`disabled`),m=s.useState(`readOnly`),h=s.useState(`selectedValue`),{ref:g,index:_}=ue();function v(e){let t=_,[n,i]=_e(u);return e.key===n?(e.preventDefault(),t=_>0?_-1:void 0):e.key===i?(e.preventDefault(),t=_<l.current.length-1?_+1:void 0):e.key===`Backspace`||e.key===`Delete`?(t=Se(_,h.length),d(e),s.context.setIndices({activeIndex:null,selectedIndex:null,type:b}),s.context.setSelectedValue(h.filter((e,t)=>t!==_),r(S,e.nativeEvent))):e.key===`Enter`||e.key===` `?(d(e),t=void 0):e.key===`ArrowDown`||e.key===`ArrowUp`?(d(e),s.context.setOpen(!0,r(p,e.nativeEvent)),t=void 0):e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(t=void 0),t}let y=E(`div`,e,{ref:[t,g],state:{disabled:f},props:[{tabIndex:-1,"aria-disabled":f||void 0,"aria-readonly":m||void 0,onKeyDown(e){if(f||m)return;let t=v(e);Ge.flushSync(()=>{c(t)}),t===void 0?s.context.inputRef.current?.focus():l.current[t]?.focus()}},o]}),x=U.useMemo(()=>({index:_}),[_]);return(0,W.jsx)(K.Provider,{value:x,children:y})}),qe=U.forwardRef(function(e,t){let{render:n,className:a,disabled:o=!1,nativeButton:s=!0,style:c,...u}=e,f=M(),{index:p}=We(),h=f.useState(`disabled`),g=f.useState(`readOnly`),_=f.useState(`selectedValue`),v=f.useState(`isItemEqualToValue`),y=h||o,{buttonRef:x,getButtonProps:S}=i({native:s,disabled:y||g,focusableWhenDisabled:!0}),C={disabled:y};function w(e){let t=f.state.activeIndex;if(t==null)return;let n=re(f.context.valuesRef.current,e,v);n!==-1&&t===n&&f.context.setIndices({activeIndex:null,type:f.context.keyboardActiveRef.current?b:m})}function T(e){let t=r(l,e.nativeEvent),n=_[p];return w(n),f.context.setSelectedValue(_.filter((e,t)=>t!==p),t),f.context.inputRef.current?.focus(),t}return E(`button`,e,{ref:[t,x],state:C,props:[{tabIndex:-1,onMouseDown(e){e.preventDefault()},onClick(e){T(e).isPropagationAllowed||e.stopPropagation()},onKeyDown(e){(e.key===`Enter`||e.key===` `)&&(T(e).isPropagationAllowed||d(e))}},u,S]})}),Je={...o,..._},Ye=U.forwardRef(function(e,t){let{render:n,className:o,disabled:s=!1,nativeButton:l=!0,keepMounted:d=!1,style:f,...p}=e,{disabled:h}=ie(),g=M(),_=g.useState(`selectionMode`),v=g.useState(`disabled`),y=g.useState(`readOnly`),x=g.useState(`open`),S=g.useState(`selectedValue`),C=g.useState(`hasSelectionChips`),w=pe(),T=!1;T=_===`none`?w!==``:_===`single`?S!=null:C;let D=h||v||s,{buttonRef:O,getButtonProps:ee}=i({native:l,disabled:D}),{mounted:te,transitionStatus:k,setMounted:A}=a(T),ne={disabled:D,visible:T,open:x,transitionStatus:k};c({open:T,ref:g.context.clearRef,onComplete(){T||A(!1)}});let re=E(`button`,e,{state:ne,ref:[t,O,g.context.clearRef],props:[{tabIndex:-1,children:`x`,onMouseDown(e){e.preventDefault()},onClick(e){if(D||y)return;let t=g.context.keyboardActiveRef.current?b:m;g.context.setInputValue(``,r(u,e.nativeEvent)),_===`none`?g.context.setIndices({activeIndex:null,type:t}):(g.context.setSelectedValue(Array.isArray(S)?[]:null,r(u,e.nativeEvent)),g.context.setIndices({activeIndex:null,selectedIndex:null,type:t})),g.context.inputRef.current?.focus()}},p,ee],stateAttributesMapping:Je});return d||te?re:null});function Xe(e,t){let{getValue:n,getLabel:r}=t,i=null;function a(){if(i===null){let t=new Map,r=e?ne(e):T;for(let e of r){if(e==null)continue;let r=n(e);t.has(r)||t.set(r,e)}i=t}return i}function o(e){return e==null?e:n(e)}return{data:e,value:o,hasValue(e,t){return N(a(),e,t)!==void 0},itemLabel:r,label(e,t,n){let i=N(a(),e,t);return i===void 0?A(e,n):r(i)}}}function Ze({props:e,children:t}){let n={items:Xe(e.options,{getValue:e=>e.value,getLabel:e=>e.label}),disabled:e.disabled,name:e.name,required:e.required};return e.multiple?(0,W.jsx)(G,{...n,multiple:!0,value:e.value,defaultValue:e.defaultValue,onValueChange:e.onValueChange,children:t}):(0,W.jsx)(G,{...n,value:e.value,defaultValue:e.defaultValue,onValueChange:e.onValueChange,children:t})}var q=h(Pe,`ts:inline-flex ts:size-24 ts:shrink-0 ts:items-center ts:justify-center ts:rounded-sm ts:text-field-icon ts:hover:bg-bg-hover ts:hover:text-fg-primary ts:focus-visible:outline-offset-0`),Qe={sm:`ts:min-h-control-height-sm`,md:`ts:min-h-control-height-md`,lg:`ts:min-h-control-height-lg`};function J(e){let{label:t,description:n,error:r,optional:i,placeholder:a,size:o=`md`,options:s,emptyMessage:c,disabled:l=!1,"aria-label":u,className:d,multiple:p}=e,{messages:m,portalContainer:g}=y(),_=Ae[o],b=!!r,x=e=>s.find(t=>t.value===e)?.label??e,S=e=>(0,W.jsx)(he,{"aria-label":u,placeholder:p&&e?void 0:a,"aria-description":p&&e?m.removeHint:void 0,onFocus:p?void 0:e=>e.currentTarget.select(),className:h(`ts:h-full ts:min-h-target-min ts:min-w-64 ts:flex-1 ts:bg-transparent ts:outline-none ts:placeholder:text-field-placeholder ts:disabled:cursor-not-allowed`,p&&`ts:-my-[max(0px,calc((var(--ts-target-min)-1lh)/2))]`)}),C=(0,W.jsxs)(`span`,{className:`ts:-mr-4 ts:flex ts:shrink-0 ts:items-center`,children:[!l&&(0,W.jsx)(Ye,{"aria-label":m.clearSelection,className:q,children:(0,W.jsx)(L,{"aria-hidden":!0,className:h(`ts:shrink-0 ts:[stroke-width:var(--ts-stroke-icon)] ts:[&_*]:[vector-effect:non-scaling-stroke]`,`ts:size-icon-sm`)})}),(0,W.jsx)(we,{"aria-label":m.openOptions,className:q,children:(0,W.jsx)(ke,{"aria-hidden":!0,className:h(v,`ts:size-icon-sm`)})})]});return(0,W.jsxs)(ae,{invalid:b,disabled:l,className:h(`ts:flex ts:flex-col ts:gap-6`,d),children:[(0,W.jsxs)(Ze,{props:e,children:[t&&(0,W.jsxs)(se,{className:h(`ts:text-label-m ts:text-fg-primary ts:data-disabled:text-fg-disabled`,`ts:w-fit`),children:[t,i&&(0,W.jsx)(Fe,{text:m.optional})]}),(0,W.jsxs)(ve,{"data-invalid":b?``:void 0,"data-disabled":l?``:void 0,className:h(Me,_.radius,_.padding,_.text,p?h(`ts:h-auto ts:flex-wrap ts:py-2`,Qe[o]):_.box),children:[p?(0,W.jsx)(Be,{children:e=>(0,W.jsxs)(Ue,{"aria-label":e.length>0?m.selectedItems:void 0,className:`ts:flex ts:min-w-0 ts:flex-1 ts:flex-wrap ts:items-center ts:gap-4`,children:[e.map(e=>(0,W.jsxs)(Ke,{"aria-label":x(e),"aria-description":m.removeHint,className:`ts:inline-flex ts:h-20 ts:items-center ts:gap-2 ts:rounded-pill ts:bg-bg-selected ts:pl-8 ts:pr-2 ts:text-label-s ts:text-fg-primary ts:outline-none ts:data-highlighted:bg-bg-active ts:focus-visible:outline-(length:--ts-focus-ring-width) ts:focus-visible:outline-offset-0 ts:focus-visible:outline-(--ts-focus-ring)`,children:[x(e),(0,W.jsx)(qe,{"aria-label":`${m.remove} ${x(e)}`,className:`ts:-mx-[max(0px,calc((var(--ts-target-min)-var(--ts-space-16))/2))] ts:-my-[max(0px,calc((var(--ts-target-min)-var(--ts-space-16))/2))] ts:relative ts:inline-flex ts:size-16 ts:min-h-target-min ts:min-w-target-min ts:items-center ts:justify-center ts:rounded-circle ts:text-fg-muted ts:hover:bg-bg-active ts:hover:text-fg-primary ts:before:absolute ts:before:-inset-[var(--ts-space-4)] ts:before:content-['']`,children:(0,W.jsx)(L,{"aria-hidden":!0,className:h(v,`ts:size-icon-xs`)})})]},e)),S(e.length>0)]})}):S(!1),C]}),(0,W.jsx)(Ee,{container:g??void 0,children:(0,W.jsx)(Te,{sideOffset:4,className:`ts:z-(--ts-z-index-popover) ts:outline-none`,children:(0,W.jsxs)(De,{className:h(fe,`ts:w-(--anchor-width) ts:min-w-(--ts-list-width)`),children:[(0,W.jsx)(Oe,{className:`ts:px-8 ts:py-6 ts:text-body-m ts:text-fg-muted ts:empty:hidden`,children:c??m.noResults}),(0,W.jsx)(ye,{children:e=>(0,W.jsxs)(xe,{value:e.value,disabled:e.disabled,className:de,children:[(0,W.jsxs)(`span`,{className:`ts:flex ts:min-w-0 ts:flex-1 ts:flex-col`,children:[(0,W.jsx)(`span`,{className:`ts:truncate`,children:e.label}),e.description&&(0,W.jsx)(`span`,{className:`ts:truncate ts:text-caption ts:text-fg-muted`,children:e.description})]}),(0,W.jsx)(Ve,{className:`ts:flex`,children:(0,W.jsx)(f,{"aria-hidden":!0,className:h(v,`ts:size-icon-md`)})})]},e.value)})]})})})]}),n&&!b&&(0,W.jsx)(ce,{className:`ts:text-body-s ts:text-fg-muted`,children:n}),b&&(0,W.jsx)(oe,{match:!0,className:`ts:flex ts:items-start ts:gap-6 ts:text-body-s ts:text-feedback-error-fg`,children:(0,W.jsx)(je,{children:r})})]})}function Y({itens:e}){return(0,W.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,W.jsx)(`li`,{children:e},t))})}var X=[{value:`pago`,label:`Pago`,icon:Ie},{value:`pendente`,label:`Aguardando pagamento`,icon:D},{value:`separacao`,label:`Em separação`,icon:Re},{value:`cancelado`,label:`Cancelado`,icon:ze}],Z=[{value:`mercearia`,label:`Mercearia`},{value:`bebidas`,label:`Bebidas`},{value:`limpeza`,label:`Limpeza`},{value:`padaria`,label:`Padaria`},{value:`hortifruti`,label:`Hortifrúti`},{value:`congelados`,label:`Congelados`,disabled:!0}],Q=[{value:`sp`,label:`São Paulo`,description:`SP`},{value:`rj`,label:`Rio de Janeiro`,description:`RJ`},{value:`bh`,label:`Belo Horizonte`,description:`MG`},{value:`poa`,label:`Porto Alegre`,description:`RS`},{value:`cwb`,label:`Curitiba`,description:`PR`},{value:`rec`,label:`Recife`,description:`PE`},{value:`ssa`,label:`Salvador`,description:`BA`},{value:`for`,label:`Fortaleza`,description:`CE`},{value:`bsb`,label:`Brasília`,description:`DF`},{value:`gyn`,label:`Goiânia`,description:`GO`},{value:`mao`,label:`Manaus`,description:`AM`},{value:`bel`,label:`Belém`,description:`PA`}];function $e(){let[e,t]=(0,U.useState)(null),[n,r]=(0,U.useState)(null);return(0,W.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,W.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Barra de filtros de pedidos`}),(0,W.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] ts:items-end ts:gap-8 ts:max-lg:grid-cols-1`,children:[(0,W.jsx)(O,{"aria-label":`Buscar pedidos`,leadingIcon:Ne,placeholder:`Buscar por número ou cliente`}),(0,W.jsx)(j,{"aria-label":`Status`,placeholder:`Todos os status`,options:X,value:e,onValueChange:t}),(0,W.jsx)(J,{"aria-label":`Cidade`,placeholder:`Cidade`,options:Q,value:n,onValueChange:r}),(0,W.jsx)(x,{variant:`secondary`,onClick:()=>{t(null),r(null)},children:`Limpar`})]})]})}function $(){let[e,t]=(0,U.useState)([`sp`,`rj`]),[n,r]=(0,U.useState)(``);return(0,W.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),className:`ts:flex ts:flex-col ts:gap-20 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,W.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Cadastro de produto`}),(0,W.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,W.jsx)(O,{label:`Nome do produto`,placeholder:`Café torrado 500 g`}),(0,W.jsx)(j,{label:`Categoria`,placeholder:`Escolha a categoria`,options:Z,description:`Define onde o produto aparece no cardápio.`}),(0,W.jsx)(J,{multiple:!0,label:`Cidades com entrega`,placeholder:`Buscar cidade`,options:Q,value:e,onValueChange:t,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,W.jsx)(F,{label:`Descrição`,placeholder:`Conte o que o cliente precisa saber.`,maxLength:280,showCount:!0,value:n,onChange:e=>r(e.target.value),className:`ts:col-span-2 ts:max-md:col-span-1`})]}),(0,W.jsxs)(`div`,{className:`ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16`,children:[(0,W.jsx)(x,{variant:`ghost`,children:`Cancelar`}),(0,W.jsx)(x,{type:`submit`,children:`Salvar produto`})]})]})}function et(){return(0,W.jsxs)(`article`,{children:[(0,W.jsx)(R,{etapa:`Componente 12 · aprovado`,titulo:`Select`,descricao:(0,W.jsxs)(W.Fragment,{children:[`Escolha única numa lista curta (até uns 10 itens), sem busca. Mesma caixa do Input. Com lista longa, use o `,(0,W.jsx)(B,{children:`Combobox`}),`; com 2 a 5 opções visíveis, o `,(0,W.jsx)(B,{children:`Radio`}),`.`]})}),(0,W.jsx)(z,{codigo:`import { Select } from '@tessela/web';
import { CircleCheck, CircleDashed, CircleX, Clock } from 'lucide-react';

const status = [\r
  { value: 'pago', label: 'Pago', icon: CircleCheck },\r
  { value: 'pendente', label: 'Aguardando pagamento', icon: Clock },\r
  { value: 'separacao', label: 'Em separação', icon: CircleDashed },\r
  { value: 'cancelado', label: 'Cancelado', icon: CircleX },\r
];

const categorias = [\r
  { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }, { value: 'limpeza', label: 'Limpeza' },\r
  { value: 'padaria', label: 'Padaria' }, { value: 'hortifruti', label: 'Hortifrúti' }, { value: 'congelados', label: 'Congelados', disabled: true },\r
];

<div className="ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
  <Select label="Padrão" placeholder="Escolha a categoria" options={categorias} />\r
  <Select label="Escolhido" options={categorias} defaultValue="bebidas" />\r
  <Select label="Com ícones" options={status} defaultValue="pago" />\r
  <Select label="Com ajuda" placeholder="Escolha" options={categorias} description="Define onde aparece no cardápio." />\r
  <Select label="Com erro" placeholder="Escolha" options={categorias} error="Escolha a categoria." />\r
  <Select label="Opcional" optional placeholder="Escolha" options={categorias} />\r
  <Select label="Desativado" disabled options={categorias} defaultValue="padaria" />\r
  <Select label="sm" size="sm" options={categorias} defaultValue="bebidas" />\r
  <Select label="lg" size="lg" options={categorias} defaultValue="bebidas" />\r
</div>`,id:`estados`,titulo:`Estados e tamanhos`,descricao:`A lista abre embaixo, na largura do campo, com o visual do Menu. A opção escolhida tem a marca à direita.`,children:(0,W.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,W.jsx)(j,{label:`Padrão`,placeholder:`Escolha a categoria`,options:Z}),(0,W.jsx)(j,{label:`Escolhido`,options:Z,defaultValue:`bebidas`}),(0,W.jsx)(j,{label:`Com ícones`,options:X,defaultValue:`pago`}),(0,W.jsx)(j,{label:`Com ajuda`,placeholder:`Escolha`,options:Z,description:`Define onde aparece no cardápio.`}),(0,W.jsx)(j,{label:`Com erro`,placeholder:`Escolha`,options:Z,error:`Escolha a categoria.`}),(0,W.jsx)(j,{label:`Opcional`,optional:!0,placeholder:`Escolha`,options:Z}),(0,W.jsx)(j,{label:`Desativado`,disabled:!0,options:Z,defaultValue:`padaria`}),(0,W.jsx)(j,{label:`sm`,size:`sm`,options:Z,defaultValue:`bebidas`}),(0,W.jsx)(j,{label:`lg`,size:`lg`,options:Z,defaultValue:`bebidas`})]})}),(0,W.jsx)(z,{codigo:`import { Select } from '@tessela/web';
import { CircleCheck, CircleDashed, CircleX, Clock } from 'lucide-react';

const status = [\r
  { value: 'pago', label: 'Pago', icon: CircleCheck },\r
  { value: 'pendente', label: 'Aguardando pagamento', icon: Clock },\r
  { value: 'separacao', label: 'Em separação', icon: CircleDashed },\r
  { value: 'cancelado', label: 'Cancelado', icon: CircleX },\r
];

const categorias = [\r
  { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }, { value: 'limpeza', label: 'Limpeza' },\r
  { value: 'padaria', label: 'Padaria' }, { value: 'hortifruti', label: 'Hortifrúti' }, { value: 'congelados', label: 'Congelados', disabled: true },\r
];

<div className="ts:flex ts:flex-col ts:gap-16"><Select label="Status" options={status} defaultValue="pago" /><Select label="Categoria" placeholder="Escolha" options={categorias} error="Escolha a categoria." /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,W.jsx)(V,{children:(0,W.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,W.jsx)(j,{label:`Status`,options:X,defaultValue:`pago`}),(0,W.jsx)(j,{label:`Categoria`,placeholder:`Escolha`,options:Z,error:`Escolha a categoria.`})]})})}),(0,W.jsx)(z,{codigo:`import { Button, Combobox, Input, Select, Textarea } from '@tessela/web';
import { CircleCheck, CircleDashed, CircleX, Clock, Search } from 'lucide-react';
import { useState } from 'react';

const status = [\r
  { value: 'pago', label: 'Pago', icon: CircleCheck },\r
  { value: 'pendente', label: 'Aguardando pagamento', icon: Clock },\r
  { value: 'separacao', label: 'Em separação', icon: CircleDashed },\r
  { value: 'cancelado', label: 'Cancelado', icon: CircleX },\r
];

const categorias = [\r
  { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }, { value: 'limpeza', label: 'Limpeza' },\r
  { value: 'padaria', label: 'Padaria' }, { value: 'hortifruti', label: 'Hortifrúti' }, { value: 'congelados', label: 'Congelados', disabled: true },\r
];

const cidades = [\r
  { value: 'sp', label: 'São Paulo', description: 'SP' }, { value: 'rj', label: 'Rio de Janeiro', description: 'RJ' },\r
  { value: 'bh', label: 'Belo Horizonte', description: 'MG' }, { value: 'poa', label: 'Porto Alegre', description: 'RS' },\r
  { value: 'cwb', label: 'Curitiba', description: 'PR' }, { value: 'rec', label: 'Recife', description: 'PE' },\r
  { value: 'ssa', label: 'Salvador', description: 'BA' }, { value: 'for', label: 'Fortaleza', description: 'CE' },\r
  { value: 'bsb', label: 'Brasília', description: 'DF' }, { value: 'gyn', label: 'Goiânia', description: 'GO' },\r
  { value: 'mao', label: 'Manaus', description: 'AM' }, { value: 'bel', label: 'Belém', description: 'PA' },\r
];

function BarraDeFiltros() {\r
  const [st, setSt] = useState<string | null>(null);\r
  const [cidade, setCidade] = useState<string | null>(null);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">Barra de filtros de pedidos</p>\r
      <div className="ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] ts:items-end ts:gap-8 ts:max-lg:grid-cols-1">\r
        <Input aria-label="Buscar pedidos" leadingIcon={Search} placeholder="Buscar por número ou cliente" />\r
        <Select aria-label="Status" placeholder="Todos os status" options={status} value={st} onValueChange={setSt} />\r
        <Combobox aria-label="Cidade" placeholder="Cidade" options={cidades} value={cidade} onValueChange={setCidade} />\r
        <Button variant="secondary" onClick={() => { setSt(null); setCidade(null); }}>Limpar</Button>\r
      </div>\r
    </div>\r
  );\r
}

function FormularioDeProduto() {\r
  const [regioes, setRegioes] = useState<string[]>(['sp', 'rj']);\r
  const [descricao, setDescricao] = useState('');\r
  return (\r
    <form onSubmit={(e) => e.preventDefault()} className="ts:flex ts:flex-col ts:gap-20 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
      <p className="ts:text-label-s ts:text-fg-muted">Cadastro de produto</p>\r
      <div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <Input label="Nome do produto" placeholder="Café torrado 500 g" />\r
        <Select label="Categoria" placeholder="Escolha a categoria" options={categorias} description="Define onde o produto aparece no cardápio." />\r
        <Combobox multiple label="Cidades com entrega" placeholder="Buscar cidade" options={cidades} value={regioes} onValueChange={setRegioes} className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <Textarea label="Descrição" placeholder="Conte o que o cliente precisa saber." maxLength={280} showCount value={descricao} onChange={(e) => setDescricao(e.target.value)} className="ts:col-span-2 ts:max-md:col-span-1" />\r
      </div>\r
      <div className="ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
        <Button variant="ghost">Cancelar</Button>\r
        <Button type="submit">Salvar produto</Button>\r
      </div>\r
    </form>\r
  );\r
}

<div className="ts:flex ts:flex-col ts:gap-24"><BarraDeFiltros /><FormularioDeProduto /></div>`,id:`em-uso`,titulo:`Em uso`,children:(0,W.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,W.jsx)($e,{}),(0,W.jsx)($,{})]})}),(0,W.jsx)(z,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,W.jsx)(I,{itens:[{nome:`options`,tipo:`{ value, label, icon?, disabled? }[]`,descricao:`As opções.`},{nome:`value / defaultValue / onValueChange`,tipo:`string | null`,descricao:`Escolha controlada ou inicial.`},{nome:`label / description / error / optional`,tipo:`—`,descricao:`Como no Input.`},{nome:`placeholder`,tipo:`string`,descricao:`Texto sem escolha.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Mesmas alturas do Button e do Input.`},{nome:`disabled / name / required / aria-label`,tipo:`—`,descricao:`Sem rótulo visível, use aria-label.`}]})}),(0,W.jsx)(z,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,W.jsx)(Y,{itens:[(0,W.jsx)(W.Fragment,{children:`Enter, Espaço ou setas abrem a lista; setas andam; digitar uma letra pula para a opção; Enter escolhe; Esc fecha.`}),(0,W.jsx)(W.Fragment,{children:`O rótulo nomeia o campo; ajuda e erro são descrições dele.`}),(0,W.jsx)(W.Fragment,{children:`Opção desativada recebe foco mas não pode ser escolhida.`})]})})]})}function tt(){let[e,t]=(0,U.useState)(`poa`),[n,r]=(0,U.useState)([`sp`,`rj`,`bh`]);return(0,W.jsxs)(`article`,{children:[(0,W.jsx)(R,{etapa:`Componente 13 · aprovado`,titulo:`Combobox`,descricao:`Escolha com busca: digite para filtrar. Para listas longas (cidades, clientes, produtos). Escolha única ou múltipla; na múltipla, as escolhas viram etiquetas removíveis.`}),(0,W.jsx)(z,{codigo:`import { Combobox } from '@tessela/web';

const cidades = [\r
  { value: 'sp', label: 'São Paulo', description: 'SP' }, { value: 'rj', label: 'Rio de Janeiro', description: 'RJ' },\r
  { value: 'bh', label: 'Belo Horizonte', description: 'MG' }, { value: 'poa', label: 'Porto Alegre', description: 'RS' },\r
  { value: 'cwb', label: 'Curitiba', description: 'PR' }, { value: 'rec', label: 'Recife', description: 'PE' },\r
  { value: 'ssa', label: 'Salvador', description: 'BA' }, { value: 'for', label: 'Fortaleza', description: 'CE' },\r
  { value: 'bsb', label: 'Brasília', description: 'DF' }, { value: 'gyn', label: 'Goiânia', description: 'GO' },\r
  { value: 'mao', label: 'Manaus', description: 'AM' }, { value: 'bel', label: 'Belém', description: 'PA' },\r
];

<div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1">\r
  <Combobox label="Cidade" placeholder="Buscar cidade" options={cidades} value={uma} onValueChange={setUma} description="Digite 'por' para filtrar." />\r
  <Combobox label="Sem escolha" placeholder="Buscar cidade" options={cidades} />\r
  <Combobox multiple label="Várias cidades" placeholder="Buscar cidade" options={cidades} value={varias} onValueChange={setVarias} className="ts:col-span-2 ts:max-md:col-span-1" />\r
  <Combobox label="Com erro" placeholder="Buscar cidade" options={cidades} error="Escolha a cidade de entrega." />\r
  <Combobox label="Desativado" disabled options={cidades} defaultValue="sp" />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`O X limpa a escolha; a seta abre a lista. Sem resultado, aparece a mensagem do provider.`,children:(0,W.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1`,children:[(0,W.jsx)(J,{label:`Cidade`,placeholder:`Buscar cidade`,options:Q,value:e,onValueChange:t,description:`Digite 'por' para filtrar.`}),(0,W.jsx)(J,{label:`Sem escolha`,placeholder:`Buscar cidade`,options:Q}),(0,W.jsx)(J,{multiple:!0,label:`Várias cidades`,placeholder:`Buscar cidade`,options:Q,value:n,onValueChange:r,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,W.jsx)(J,{label:`Com erro`,placeholder:`Buscar cidade`,options:Q,error:`Escolha a cidade de entrega.`}),(0,W.jsx)(J,{label:`Desativado`,disabled:!0,options:Q,defaultValue:`sp`})]})}),(0,W.jsx)(z,{codigo:`import { Combobox } from '@tessela/web';

const cidades = [\r
  { value: 'sp', label: 'São Paulo', description: 'SP' }, { value: 'rj', label: 'Rio de Janeiro', description: 'RJ' },\r
  { value: 'bh', label: 'Belo Horizonte', description: 'MG' }, { value: 'poa', label: 'Porto Alegre', description: 'RS' },\r
  { value: 'cwb', label: 'Curitiba', description: 'PR' }, { value: 'rec', label: 'Recife', description: 'PE' },\r
  { value: 'ssa', label: 'Salvador', description: 'BA' }, { value: 'for', label: 'Fortaleza', description: 'CE' },\r
  { value: 'bsb', label: 'Brasília', description: 'DF' }, { value: 'gyn', label: 'Goiânia', description: 'GO' },\r
  { value: 'mao', label: 'Manaus', description: 'AM' }, { value: 'bel', label: 'Belém', description: 'PA' },\r
];

<div className="ts:flex ts:flex-col ts:gap-16"><Combobox label="Cidade" options={cidades} defaultValue="rj" /><Combobox multiple label="Cidades" options={cidades} defaultValue={['sp', 'bh']} /></div>`,id:`temas`,titulo:`Temas e densidades`,children:(0,W.jsx)(V,{children:(0,W.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,W.jsx)(J,{label:`Cidade`,options:Q,defaultValue:`rj`}),(0,W.jsx)(J,{multiple:!0,label:`Cidades`,options:Q,defaultValue:[`sp`,`bh`]})]})})}),(0,W.jsx)(z,{codigo:`import { Button, Combobox, Input, Select, Textarea } from '@tessela/web';
import { CircleCheck, CircleDashed, CircleX, Clock, Search } from 'lucide-react';
import { useState } from 'react';

const status = [\r
  { value: 'pago', label: 'Pago', icon: CircleCheck },\r
  { value: 'pendente', label: 'Aguardando pagamento', icon: Clock },\r
  { value: 'separacao', label: 'Em separação', icon: CircleDashed },\r
  { value: 'cancelado', label: 'Cancelado', icon: CircleX },\r
];

const categorias = [\r
  { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }, { value: 'limpeza', label: 'Limpeza' },\r
  { value: 'padaria', label: 'Padaria' }, { value: 'hortifruti', label: 'Hortifrúti' }, { value: 'congelados', label: 'Congelados', disabled: true },\r
];

const cidades = [\r
  { value: 'sp', label: 'São Paulo', description: 'SP' }, { value: 'rj', label: 'Rio de Janeiro', description: 'RJ' },\r
  { value: 'bh', label: 'Belo Horizonte', description: 'MG' }, { value: 'poa', label: 'Porto Alegre', description: 'RS' },\r
  { value: 'cwb', label: 'Curitiba', description: 'PR' }, { value: 'rec', label: 'Recife', description: 'PE' },\r
  { value: 'ssa', label: 'Salvador', description: 'BA' }, { value: 'for', label: 'Fortaleza', description: 'CE' },\r
  { value: 'bsb', label: 'Brasília', description: 'DF' }, { value: 'gyn', label: 'Goiânia', description: 'GO' },\r
  { value: 'mao', label: 'Manaus', description: 'AM' }, { value: 'bel', label: 'Belém', description: 'PA' },\r
];

function BarraDeFiltros() {\r
  const [st, setSt] = useState<string | null>(null);\r
  const [cidade, setCidade] = useState<string | null>(null);\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">Barra de filtros de pedidos</p>\r
      <div className="ts:grid ts:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto] ts:items-end ts:gap-8 ts:max-lg:grid-cols-1">\r
        <Input aria-label="Buscar pedidos" leadingIcon={Search} placeholder="Buscar por número ou cliente" />\r
        <Select aria-label="Status" placeholder="Todos os status" options={status} value={st} onValueChange={setSt} />\r
        <Combobox aria-label="Cidade" placeholder="Cidade" options={cidades} value={cidade} onValueChange={setCidade} />\r
        <Button variant="secondary" onClick={() => { setSt(null); setCidade(null); }}>Limpar</Button>\r
      </div>\r
    </div>\r
  );\r
}

function FormularioDeProduto() {\r
  const [regioes, setRegioes] = useState<string[]>(['sp', 'rj']);\r
  const [descricao, setDescricao] = useState('');\r
  return (\r
    <form onSubmit={(e) => e.preventDefault()} className="ts:flex ts:flex-col ts:gap-20 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
      <p className="ts:text-label-s ts:text-fg-muted">Cadastro de produto</p>\r
      <div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <Input label="Nome do produto" placeholder="Café torrado 500 g" />\r
        <Select label="Categoria" placeholder="Escolha a categoria" options={categorias} description="Define onde o produto aparece no cardápio." />\r
        <Combobox multiple label="Cidades com entrega" placeholder="Buscar cidade" options={cidades} value={regioes} onValueChange={setRegioes} className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <Textarea label="Descrição" placeholder="Conte o que o cliente precisa saber." maxLength={280} showCount value={descricao} onChange={(e) => setDescricao(e.target.value)} className="ts:col-span-2 ts:max-md:col-span-1" />\r
      </div>\r
      <div className="ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
        <Button variant="ghost">Cancelar</Button>\r
        <Button type="submit">Salvar produto</Button>\r
      </div>\r
    </form>\r
  );\r
}

<div className="ts:flex ts:flex-col ts:gap-24"><BarraDeFiltros /><FormularioDeProduto /></div>`,id:`em-uso`,titulo:`Em uso`,children:(0,W.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,W.jsx)($e,{}),(0,W.jsx)($,{})]})}),(0,W.jsx)(z,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,W.jsx)(I,{itens:[{nome:`options`,tipo:`{ value, label, description?, disabled? }[]`,descricao:`As opções; a busca usa o label.`},{nome:`multiple`,tipo:`boolean`,padrao:`false`,descricao:`Várias escolhas, em etiquetas.`},{nome:`value / defaultValue / onValueChange`,tipo:`string | null (ou string[] com multiple)`,descricao:`Escolha controlada ou inicial.`},{nome:`emptyMessage`,tipo:`ReactNode`,padrao:`"Nenhum resultado"`,descricao:`Texto quando a busca não acha nada.`},{nome:`label / description / error / optional / placeholder / size`,tipo:`—`,descricao:`Como no Input.`}]})}),(0,W.jsx)(z,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,W.jsx)(Y,{itens:[(0,W.jsx)(W.Fragment,{children:`Digitar filtra e abre a lista; setas andam; Enter escolhe; Esc fecha.`}),(0,W.jsx)(W.Fragment,{children:`Na múltipla, seta para a esquerda no início do campo leva às etiquetas; Backspace ou Delete removem. O leitor de tela recebe essa instrução.`}),(0,W.jsx)(W.Fragment,{children:`O X e a seta têm rótulo ("Limpar seleção", "Abrir opções"), vindos do provider.`}),(0,W.jsx)(W.Fragment,{children:`Com toque, o campo de digitação e os botões dentro do campo (limpar, abrir a lista, remover etiqueta) têm alvo de 44 × 44 px, mesmo com 16 ou 24 px visíveis. A caixa do campo não muda.`}),(0,W.jsx)(W.Fragment,{children:`Os alvos de botões vizinhos se sobrepõem em cerca de 20 px, e o mais à direita fica por cima; os centros ficam a 24 px. O X da etiqueta passa da borda dela. Na múltipla, a linha de digitação, se cair numa segunda linha, cresce uns 2 px.`})]})})]})}function nt(){return(0,W.jsxs)(`article`,{children:[(0,W.jsx)(R,{etapa:`Componente 14 · aprovado`,titulo:`Textarea`,descricao:`Texto de várias linhas. Começa com 3 linhas, cresce com o conteúdo e rola a partir de 8. Mesma caixa do Input.`}),(0,W.jsx)(z,{codigo:`import { Textarea } from '@tessela/web';

<div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1">\r
  <Textarea label="Observações" placeholder="Algo que a equipe precisa saber?" />\r
  <Textarea label="Com contador" maxLength={140} showCount defaultValue="Entregar pela manhã, portão lateral." description="Aparece na nota do pedido." />\r
  <Textarea label="Com erro" error="Explique o motivo do estorno." />\r
  <Textarea label="Somente leitura" readOnly defaultValue="Pedido criado pela integração com o ERP em 25/09 às 14:32." />\r
  <Textarea label="Desativado" disabled defaultValue="Campo bloqueado." />\r
  <Textarea label="Opcional, 2 a 4 linhas" optional minRows={2} maxRows={4} />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`O contador aparece com maxLength e showCount. Cresce com o texto onde o navegador suporta (Chrome, Edge, Safari recentes); nos outros, fica com a altura mínima e rola.`,children:(0,W.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-24 ts:max-md:grid-cols-1`,children:[(0,W.jsx)(F,{label:`Observações`,placeholder:`Algo que a equipe precisa saber?`}),(0,W.jsx)(F,{label:`Com contador`,maxLength:140,showCount:!0,defaultValue:`Entregar pela manhã, portão lateral.`,description:`Aparece na nota do pedido.`}),(0,W.jsx)(F,{label:`Com erro`,error:`Explique o motivo do estorno.`}),(0,W.jsx)(F,{label:`Somente leitura`,readOnly:!0,defaultValue:`Pedido criado pela integração com o ERP em 25/09 às 14:32.`}),(0,W.jsx)(F,{label:`Desativado`,disabled:!0,defaultValue:`Campo bloqueado.`}),(0,W.jsx)(F,{label:`Opcional, 2 a 4 linhas`,optional:!0,minRows:2,maxRows:4})]})}),(0,W.jsx)(z,{codigo:`import { Textarea } from '@tessela/web';

<Textarea label="Observações" maxLength={140} showCount defaultValue="Entregar pela manhã." />`,id:`temas`,titulo:`Temas e densidades`,children:(0,W.jsx)(V,{children:(0,W.jsx)(F,{label:`Observações`,maxLength:140,showCount:!0,defaultValue:`Entregar pela manhã.`})})}),(0,W.jsx)(z,{codigo:`import { Button, Combobox, Input, Select, Textarea } from '@tessela/web';
import { useState } from 'react';

const categorias = [\r
  { value: 'mercearia', label: 'Mercearia' }, { value: 'bebidas', label: 'Bebidas' }, { value: 'limpeza', label: 'Limpeza' },\r
  { value: 'padaria', label: 'Padaria' }, { value: 'hortifruti', label: 'Hortifrúti' }, { value: 'congelados', label: 'Congelados', disabled: true },\r
];

const cidades = [\r
  { value: 'sp', label: 'São Paulo', description: 'SP' }, { value: 'rj', label: 'Rio de Janeiro', description: 'RJ' },\r
  { value: 'bh', label: 'Belo Horizonte', description: 'MG' }, { value: 'poa', label: 'Porto Alegre', description: 'RS' },\r
  { value: 'cwb', label: 'Curitiba', description: 'PR' }, { value: 'rec', label: 'Recife', description: 'PE' },\r
  { value: 'ssa', label: 'Salvador', description: 'BA' }, { value: 'for', label: 'Fortaleza', description: 'CE' },\r
  { value: 'bsb', label: 'Brasília', description: 'DF' }, { value: 'gyn', label: 'Goiânia', description: 'GO' },\r
  { value: 'mao', label: 'Manaus', description: 'AM' }, { value: 'bel', label: 'Belém', description: 'PA' },\r
];

function FormularioDeProduto() {\r
  const [regioes, setRegioes] = useState<string[]>(['sp', 'rj']);\r
  const [descricao, setDescricao] = useState('');\r
  return (\r
    <form onSubmit={(e) => e.preventDefault()} className="ts:flex ts:flex-col ts:gap-20 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
      <p className="ts:text-label-s ts:text-fg-muted">Cadastro de produto</p>\r
      <div className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <Input label="Nome do produto" placeholder="Café torrado 500 g" />\r
        <Select label="Categoria" placeholder="Escolha a categoria" options={categorias} description="Define onde o produto aparece no cardápio." />\r
        <Combobox multiple label="Cidades com entrega" placeholder="Buscar cidade" options={cidades} value={regioes} onValueChange={setRegioes} className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <Textarea label="Descrição" placeholder="Conte o que o cliente precisa saber." maxLength={280} showCount value={descricao} onChange={(e) => setDescricao(e.target.value)} className="ts:col-span-2 ts:max-md:col-span-1" />\r
      </div>\r
      <div className="ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
        <Button variant="ghost">Cancelar</Button>\r
        <Button type="submit">Salvar produto</Button>\r
      </div>\r
    </form>\r
  );\r
}

<FormularioDeProduto />`,id:`em-uso`,titulo:`Em uso`,children:(0,W.jsx)($,{})}),(0,W.jsx)(z,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,descricao:(0,W.jsxs)(W.Fragment,{children:[`Também aceita as propriedades do `,(0,W.jsx)(B,{children:`<textarea>`}),`.`]}),children:(0,W.jsx)(I,{itens:[{nome:`label / description / error / optional`,tipo:`—`,descricao:`Como no Input.`},{nome:`maxLength + showCount`,tipo:`number + boolean`,descricao:`Limite e contador "120 de 500 caracteres".`},{nome:`minRows / maxRows`,tipo:`number`,padrao:`3 / 8`,descricao:`Altura mínima e até onde cresce.`},{nome:`value / defaultValue / onChange`,tipo:`—`,descricao:`Como no <textarea>.`}]})}),(0,W.jsx)(z,{semCaixa:!0,id:`acessibilidade`,titulo:`Acessibilidade`,children:(0,W.jsx)(Y,{itens:[(0,W.jsx)(W.Fragment,{children:`O contador é descrição do campo: o leitor de tela o lê ao entrar no campo, sem anunciar cada tecla.`}),(0,W.jsx)(W.Fragment,{children:`Ajuda e erro funcionam como no Input.`})]})})]})}export{tt as ComboboxPagina,et as SelectPagina,nt as TextareaPagina};