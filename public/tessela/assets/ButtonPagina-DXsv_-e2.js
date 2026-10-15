import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{$r as n,cr as r,ei as i,li as a,sr as o,ti as s}from"./Codigo-Dgz1In5l.js";import{t as c}from"./download-Bz44KTCP.js";import{t as l}from"./plus-BCNg58Vj.js";import{t as u}from"./trash-BZfsE4TV.js";import{s as d}from"./tiptap-jvs8iIPE.js";import{_ as f,b as p,f as m,g as h,h as g,p as _,xn as v,y}from"./index-3SU4ioj-.js";var b=e(t(),1),x=d(),S=[{variant:`primary`,nome:`Primary`,uso:`A ação principal da área. Uma por vez.`},{variant:`secondary`,nome:`Secondary`,uso:`Ações de apoio ao lado da principal.`},{variant:`ghost`,nome:`Ghost`,uso:`Ações discretas: cancelar, barras de ferramentas.`},{variant:`destructive`,nome:`Destructive`,uso:`Excluir ou desfazer algo sem volta.`}],C=[{size:`sm`,nome:`sm`},{size:`md`,nome:`md (padrão)`},{size:`lg`,nome:`lg`}],w={primary:{fg:`action/primary/fg`,estados:[[`Padrão`,`action/primary/bg`],[`Hover`,`action/primary/bg-hover`],[`Pressionado`,`action/primary/bg-active`]]},secondary:{fg:`action/secondary/fg`,border:`action/secondary/border`,estados:[[`Padrão`,`action/secondary/bg`],[`Hover`,`action/secondary/bg-hover`],[`Pressionado`,`action/secondary/bg-active`]]},ghost:{fg:`action/ghost/fg`,estados:[[`Padrão`,null],[`Hover`,`action/ghost/bg-hover`],[`Pressionado`,`action/ghost/bg-active`]]},destructive:{fg:`action/destructive/fg`,estados:[[`Padrão`,`action/destructive/bg`],[`Hover`,`action/destructive/bg-hover`],[`Pressionado`,`action/destructive/bg-active`]]}};function T({colunas:e,rotulo:t,children:n}){return(0,x.jsx)(`div`,{tabIndex:0,role:`region`,"aria-label":t,className:`ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default`,children:(0,x.jsxs)(`div`,{className:`ts:min-w-max`,children:[(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]`,style:{"--n":e.length},children:[(0,x.jsx)(`span`,{className:`ts:px-16 ts:py-8`,children:`Variante`}),e.map(e=>(0,x.jsx)(`span`,{className:`ts:whitespace-nowrap ts:px-16 ts:py-8`,children:e},e))]}),n]})})}function E({nome:e,uso:t,n,children:r}){return(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0 ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]`,style:{"--n":n},children:[(0,x.jsxs)(`div`,{className:`ts:px-16 ts:py-16`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-m`,children:e}),t&&(0,x.jsx)(`p`,{className:`ts:mt-2 ts:text-caption ts:text-fg-muted`,children:t})]}),r]})}function D(){let[e,t]=(0,b.useState)(!1);return(0,x.jsx)(o,{loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},children:`Salvar alterações`})}var O=[{nome:`variant`,tipo:`'primary' | 'secondary' | 'ghost' | 'destructive'`,padrao:`'primary'`,descricao:`Peso visual da ação.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Altura e respiro; os valores seguem a densidade.`},{nome:`leadingIcon`,tipo:`IconComponent`,descricao:`Ícone antes do rótulo (componente do lucide-react).`},{nome:`trailingIcon`,tipo:`IconComponent`,descricao:`Ícone depois do rótulo.`},{nome:`loading`,tipo:`boolean`,padrao:`false`,descricao:`Bloqueia cliques, mantém o foco, mostra o indicador e anuncia "Carregando".`},{nome:`disabled`,tipo:`boolean`,padrao:`false`,descricao:`Desativa o botão e o tira da ordem de tabulação.`},{nome:`fullWidth`,tipo:`boolean`,padrao:`false`,descricao:`Ocupa a largura do contêiner.`},{nome:`type`,tipo:`'button' | 'submit' | 'reset'`,padrao:`'button'`,descricao:`Em formulário, informe submit.`},{nome:`className`,tipo:`string`,descricao:`Classes somadas às do componente (margem, posição).`},{nome:`buttonClassName()`,tipo:`(opções) => string`,descricao:`Mesmo visual para outro elemento, como o link do roteador.`}];function k(){return(0,x.jsxs)(`article`,{children:[(0,x.jsx)(m,{etapa:`Componente 1 · aprovado`,titulo:`Button`,descricao:(0,x.jsxs)(x.Fragment,{children:[`Dispara uma ação. Use um `,(0,x.jsx)(_,{children:`primary`}),` por área para a ação principal; as outras ficam em `,(0,x.jsx)(_,{children:`secondary`}),` ou `,(0,x.jsx)(_,{children:`ghost`}),`. Para navegar, use um link com `,(0,x.jsx)(_,{children:`buttonClassName()`}),`.`]})}),(0,x.jsx)(h,{codigo:`import { Button, type ButtonSize, type ButtonVariant } from '@tessela/web';
import { type CSSProperties, type ReactNode } from 'react';

const variantes: { variant: ButtonVariant; nome: string; uso: string }[] = [\r
  { variant: 'primary', nome: 'Primary', uso: 'A ação principal da área. Uma por vez.' },\r
  { variant: 'secondary', nome: 'Secondary', uso: 'Ações de apoio ao lado da principal.' },\r
  { variant: 'ghost', nome: 'Ghost', uso: 'Ações discretas: cancelar, barras de ferramentas.' },\r
  { variant: 'destructive', nome: 'Destructive', uso: 'Excluir ou desfazer algo sem volta.' },\r
];

const tamanhos: { size: ButtonSize; nome: string }[] = [\r
  { size: 'sm', nome: 'sm' },\r
  { size: 'md', nome: 'md (padrão)' },\r
  { size: 'lg', nome: 'lg' },\r
];

function Grade({ colunas, rotulo, children }: { colunas: string[]; rotulo: string; children: ReactNode }) {\r
  return (\r
    // Em tela estreita a grade rola na horizontal, em vez de espremer os botões.\r
    <div tabIndex={0} role="region" aria-label={rotulo} className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
      <div className="ts:min-w-max">\r
        <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': colunas.length } as CSSProperties}>\r
          <span className="ts:px-16 ts:py-8">Variante</span>\r
          {colunas.map((c) => <span key={c} className="ts:whitespace-nowrap ts:px-16 ts:py-8">{c}</span>)}\r
        </div>\r
        {children}\r
      </div>\r
    </div>\r
  );\r
}

function Linha({ nome, uso, n, children }: { nome: string; uso?: string; n: number; children: ReactNode }) {\r
  return (\r
    <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0 ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': n } as CSSProperties}>\r
      <div className="ts:px-16 ts:py-16">\r
        <p className="ts:text-label-m">{nome}</p>\r
        {uso && <p className="ts:mt-2 ts:text-caption ts:text-fg-muted">{uso}</p>}\r
      </div>\r
      {children}\r
    </div>\r
  );\r
}

<Grade rotulo="Tabela de variantes e tamanhos do Button" colunas={tamanhos.map((t) => t.nome)}>\r
  {variantes.map(({ variant, nome, uso }) => (\r
    <Linha key={variant} nome={nome} uso={uso} n={tamanhos.length}>\r
      {tamanhos.map(({ size }) => (\r
        <div key={size} className="ts:px-16 ts:py-16"><Button variant={variant} size={size}>Salvar</Button></div>\r
      ))}\r
    </Linha>\r
  ))}\r
</Grade>`,id:`variantes`,titulo:`Variantes e tamanhos`,descricao:`Quatro pesos e três tamanhos. A altura vem da densidade: 28, 32 e 40 px na confortável; o md tem 32 de altura e 10 de respiro. O raio vem de um token por tamanho (radius/button-sm, -md e -lg): 10 px em todos na marca Padrão, o mesmo dos campos. Cada marca pode mudá-lo, como a pílula do Cortex ou o raio que acompanha a altura no Contto (11, 14 e 17). O respiro e o peso do rótulo também vêm da marca.`,children:(0,x.jsx)(T,{rotulo:`Tabela de variantes e tamanhos do Button`,colunas:C.map(e=>e.nome),children:S.map(({variant:e,nome:t,uso:n})=>(0,x.jsx)(E,{nome:t,uso:n,n:C.length,children:C.map(({size:t})=>(0,x.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,x.jsx)(o,{variant:e,size:t,children:`Salvar`})},t))},e))})}),(0,x.jsx)(h,{codigo:`import { Button, type ButtonVariant } from '@tessela/web';
import { ArrowRight, Plus } from 'lucide-react';
import { type CSSProperties, type ReactNode } from 'react';

const variantes: { variant: ButtonVariant; nome: string; uso: string }[] = [\r
  { variant: 'primary', nome: 'Primary', uso: 'A ação principal da área. Uma por vez.' },\r
  { variant: 'secondary', nome: 'Secondary', uso: 'Ações de apoio ao lado da principal.' },\r
  { variant: 'ghost', nome: 'Ghost', uso: 'Ações discretas: cancelar, barras de ferramentas.' },\r
  { variant: 'destructive', nome: 'Destructive', uso: 'Excluir ou desfazer algo sem volta.' },\r
];

function Grade({ colunas, rotulo, children }: { colunas: string[]; rotulo: string; children: ReactNode }) {\r
  return (\r
    // Em tela estreita a grade rola na horizontal, em vez de espremer os botões.\r
    <div tabIndex={0} role="region" aria-label={rotulo} className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
      <div className="ts:min-w-max">\r
        <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': colunas.length } as CSSProperties}>\r
          <span className="ts:px-16 ts:py-8">Variante</span>\r
          {colunas.map((c) => <span key={c} className="ts:whitespace-nowrap ts:px-16 ts:py-8">{c}</span>)}\r
        </div>\r
        {children}\r
      </div>\r
    </div>\r
  );\r
}

function Linha({ nome, uso, n, children }: { nome: string; uso?: string; n: number; children: ReactNode }) {\r
  return (\r
    <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0 ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': n } as CSSProperties}>\r
      <div className="ts:px-16 ts:py-16">\r
        <p className="ts:text-label-m">{nome}</p>\r
        {uso && <p className="ts:mt-2 ts:text-caption ts:text-fg-muted">{uso}</p>}\r
      </div>\r
      {children}\r
    </div>\r
  );\r
}

<Grade rotulo="Tabela de estados do Button" colunas={['Com ícone', 'Ícone à direita', 'Desativado', 'Carregando']}>\r
  {variantes.map(({ variant, nome }) => (\r
    <Linha key={variant} nome={nome} n={4}>\r
      <div className="ts:px-16 ts:py-16"><Button variant={variant} leadingIcon={Plus}>Novo pedido</Button></div>\r
      <div className="ts:px-16 ts:py-16"><Button variant={variant} trailingIcon={ArrowRight}>Continuar</Button></div>\r
      <div className="ts:px-16 ts:py-16"><Button variant={variant} disabled>Salvar</Button></div>\r
      <div className="ts:px-16 ts:py-16"><Button variant={variant} loading>Salvar</Button></div>\r
    </Linha>\r
  ))}\r
</Grade>`,id:`estados`,titulo:`Estados`,descricao:`Passe o mouse, pressione e use Tab para ver hover, pressionado e foco. O carregamento mantém as cores e o rótulo da ação; o desativado usa as cores de desativado.`,children:(0,x.jsx)(T,{rotulo:`Tabela de estados do Button`,colunas:[`Com ícone`,`Ícone à direita`,`Desativado`,`Carregando`],children:S.map(({variant:e,nome:t})=>(0,x.jsxs)(E,{nome:t,n:4,children:[(0,x.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,x.jsx)(o,{variant:e,leadingIcon:l,children:`Novo pedido`})}),(0,x.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,x.jsx)(o,{variant:e,trailingIcon:v,children:`Continuar`})}),(0,x.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,x.jsx)(o,{variant:e,disabled:!0,children:`Salvar`})}),(0,x.jsx)(`div`,{className:`ts:px-16 ts:py-16`,children:(0,x.jsx)(o,{variant:e,loading:!0,children:`Salvar`})})]},e))})}),(0,x.jsx)(h,{codigo:`import { type ButtonVariant } from '@tessela/web';
import { cssVar } from '@tessela/web-tokens';
import { type CSSProperties, type ReactNode } from 'react';

const variantes: { variant: ButtonVariant; nome: string; uso: string }[] = [\r
  { variant: 'primary', nome: 'Primary', uso: 'A ação principal da área. Uma por vez.' },\r
  { variant: 'secondary', nome: 'Secondary', uso: 'Ações de apoio ao lado da principal.' },\r
  { variant: 'ghost', nome: 'Ghost', uso: 'Ações discretas: cancelar, barras de ferramentas.' },\r
  { variant: 'destructive', nome: 'Destructive', uso: 'Excluir ou desfazer algo sem volta.' },\r
];

const coresPorEstado: Record<ButtonVariant, { fg: string; border?: string; estados: [string, string | null][] }> = {\r
  primary: { fg: 'action/primary/fg', estados: [['Padrão', 'action/primary/bg'], ['Hover', 'action/primary/bg-hover'], ['Pressionado', 'action/primary/bg-active']] },\r
  secondary: { fg: 'action/secondary/fg', border: 'action/secondary/border', estados: [['Padrão', 'action/secondary/bg'], ['Hover', 'action/secondary/bg-hover'], ['Pressionado', 'action/secondary/bg-active']] },\r
  ghost: { fg: 'action/ghost/fg', estados: [['Padrão', null], ['Hover', 'action/ghost/bg-hover'], ['Pressionado', 'action/ghost/bg-active']] },\r
  destructive: { fg: 'action/destructive/fg', estados: [['Padrão', 'action/destructive/bg'], ['Hover', 'action/destructive/bg-hover'], ['Pressionado', 'action/destructive/bg-active']] },\r
};

function Grade({ colunas, rotulo, children }: { colunas: string[]; rotulo: string; children: ReactNode }) {\r
  return (\r
    // Em tela estreita a grade rola na horizontal, em vez de espremer os botões.\r
    <div tabIndex={0} role="region" aria-label={rotulo} className="ts:overflow-x-auto ts:rounded-lg ts:border ts:border-border-default">\r
      <div className="ts:min-w-max">\r
        <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:border-b ts:border-border-default ts:bg-bg-subtle ts:text-label-s ts:text-fg-muted ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': colunas.length } as CSSProperties}>\r
          <span className="ts:px-16 ts:py-8">Variante</span>\r
          {colunas.map((c) => <span key={c} className="ts:whitespace-nowrap ts:px-16 ts:py-8">{c}</span>)}\r
        </div>\r
        {children}\r
      </div>\r
    </div>\r
  );\r
}

function Linha({ nome, uso, n, children }: { nome: string; uso?: string; n: number; children: ReactNode }) {\r
  return (\r
    <div className="ts:grid ts:grid-cols-[180px_repeat(var(--n),minmax(max-content,1fr))] ts:items-center ts:border-b ts:border-border-subtle ts:last:border-b-0 ts:max-lg:grid-cols-[140px_repeat(var(--n),minmax(max-content,1fr))]" style={{ '--n': n } as CSSProperties}>\r
      <div className="ts:px-16 ts:py-16">\r
        <p className="ts:text-label-m">{nome}</p>\r
        {uso && <p className="ts:mt-2 ts:text-caption ts:text-fg-muted">{uso}</p>}\r
      </div>\r
      {children}\r
    </div>\r
  );\r
}

<Grade rotulo="Tabela de cores por estado do Button" colunas={['Padrão', 'Hover', 'Pressionado']}>\r
  {variantes.map(({ variant, nome }) => {\r
    const c = coresPorEstado[variant];\r
    return (\r
      <Linha key={variant} nome={nome} uso={\`texto \${c.fg}\`} n={3}>\r
        {c.estados.map(([estado, fundo]) => (\r
          <div key={estado} className="ts:flex ts:flex-col ts:items-start ts:gap-8 ts:px-16 ts:py-16">\r
            <span\r
              className="ts:inline-flex ts:h-control-height-md ts:items-center ts:rounded-button-md ts:border ts:px-button-padding-x-md ts:text-label-m ts:font-button ts:[corner-shape:var(--ts-corner-shape)]"\r
              style={{ background: fundo ? cssVar(fundo) : 'transparent', color: cssVar(c.fg), borderColor: c.border ? cssVar(c.border) : 'transparent' }}\r
            >\r
              {estado}\r
            </span>\r
            <Codigo>{fundo ?? 'sem fundo'}</Codigo>\r
          </div>\r
        ))}\r
      </Linha>\r
    );\r
  })}\r
</Grade>`,id:`cores`,titulo:`Cores por estado`,descricao:`Os tokens de cada estado, desenhados sem interação para comparar lado a lado. Desativado é igual em todas as variantes: action/disabled/bg e action/disabled/fg (o ghost fica sem fundo).`,children:(0,x.jsx)(T,{rotulo:`Tabela de cores por estado do Button`,colunas:[`Padrão`,`Hover`,`Pressionado`],children:S.map(({variant:e,nome:t})=>{let r=w[e];return(0,x.jsx)(E,{nome:t,uso:`texto ${r.fg}`,n:3,children:r.estados.map(([e,t])=>(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:items-start ts:gap-8 ts:px-16 ts:py-16`,children:[(0,x.jsx)(`span`,{className:`ts:inline-flex ts:h-control-height-md ts:items-center ts:rounded-button-md ts:border ts:px-button-padding-x-md ts:text-label-m ts:font-button ts:[corner-shape:var(--ts-corner-shape)]`,style:{background:t?n(t):`transparent`,color:n(r.fg),borderColor:r.border?n(r.border):`transparent`},children:e}),(0,x.jsx)(_,{children:t??`sem fundo`})]},e))},e)})})}),(0,x.jsx)(h,{id:`temas`,titulo:`Temas`,descricao:`Monocromático: o primary é preto no claro e branco no escuro.`,children:(0,x.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:a.map(e=>(0,x.jsx)(g,{theme:e,titulo:p[e],children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-12`,children:[S.map(({variant:e,nome:t})=>(0,x.jsx)(o,{variant:e,children:t},e)),(0,x.jsx)(o,{disabled:!0,children:`Desativado`})]})},e))})}),(0,x.jsx)(h,{id:`densidade`,titulo:`Densidade`,descricao:`O mesmo botão nas duas densidades. Só a altura e o respiro mudam; o texto continua igual.`,children:(0,x.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:i.map(e=>(0,x.jsx)(g,{density:e,titulo:`${y[e]} · ${s[e][`control/height/sm`]} / ${s[e][`control/height/md`]} / ${s[e][`control/height/lg`]} px`,children:(0,x.jsx)(`div`,{className:`ts:flex ts:flex-wrap ts:items-center ts:gap-12`,children:C.map(({size:e})=>(0,x.jsx)(o,{size:e,leadingIcon:l,children:`Novo`},e))})},e))})}),(0,x.jsx)(h,{codigo:`import { Button, buttonClassName } from '@tessela/web';
import { Download, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

function SalvarComCarregamento() {\r
  const [salvando, setSalvando] = useState(false);\r
  return (\r
    <Button loading={salvando} onClick={() => { setSalvando(true); setTimeout(() => setSalvando(false), 1500); }}>\r
      Salvar alterações\r
    </Button>\r
  );\r
}

<div className="ts:flex ts:flex-col ts:gap-24">\r
  <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
    <p className="ts:text-label-s ts:text-fg-muted">Cabeçalho de página</p>\r
    <div className="ts:mt-16 ts:flex ts:flex-wrap ts:items-end ts:justify-between ts:gap-16">\r
      <div>\r
        <h3 className="ts:text-heading-l">Pedidos</h3>\r
        <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">1.284 pedidos neste mês</p>\r
      </div>\r
      <div className="ts:flex ts:gap-8">\r
        <Button variant="secondary" leadingIcon={Download}>Exportar</Button>\r
        <Button leadingIcon={Plus}>Novo pedido</Button>\r
      </div>\r
    </div>\r
  </div>\r

  <div className="ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1">\r
    <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
      <p className="ts:text-label-s ts:text-fg-muted">Rodapé de formulário · clique em salvar</p>\r
      <p className="ts:mt-16 ts:text-body-m ts:text-fg-secondary">As alterações só valem depois de salvas.</p>\r
      <div className="ts:mt-24 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
        <Button variant="ghost">Cancelar</Button>\r
        <SalvarComCarregamento />\r
      </div>\r
    </div>\r

    <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-raised ts:p-24 ts:shadow-lg">\r
      <p className="ts:text-label-s ts:text-fg-muted">Confirmação destrutiva</p>\r
      <p className="ts:mt-16 ts:text-heading-s">Excluir 3 pedidos?</p>\r
      <p className="ts:mt-4 ts:text-body-m ts:text-fg-secondary">Essa ação não pode ser desfeita.</p>\r
      <div className="ts:mt-24 ts:flex ts:justify-end ts:gap-8">\r
        <Button variant="secondary">Cancelar</Button>\r
        <Button variant="destructive" leadingIcon={Trash2}>Excluir pedidos</Button>\r
      </div>\r
    </div>\r
  </div>\r

  <div className="ts:max-w-360 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
    <p className="ts:text-label-s ts:text-fg-muted">Rodapé de login</p>\r
    <p className="ts:mt-16 ts:text-body-m ts:text-fg-secondary">A ação principal ocupa toda a largura disponível.</p>\r
    <div className="ts:mt-24 ts:border-t ts:border-border-subtle ts:pt-16">\r
      <Button fullWidth>Entrar</Button>\r
    </div>\r
  </div>\r

  <div className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
    <p className="ts:text-label-s ts:text-fg-muted">Link com visual de botão</p>\r
    <div className="ts:mt-16 ts:flex ts:items-center ts:justify-between ts:gap-16">\r
      <p className="ts:text-body-m ts:text-fg-secondary">Últimos pedidos</p>\r
      <a href="#em-uso" className={buttonClassName({ variant: 'secondary', size: 'sm' })}>Ver todos</a>\r
    </div>\r
  </div>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Composições reais de admin.`,children:(0,x.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,x.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Cabeçalho de página`}),(0,x.jsxs)(`div`,{className:`ts:mt-16 ts:flex ts:flex-wrap ts:items-end ts:justify-between ts:gap-16`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{className:`ts:text-heading-l`,children:`Pedidos`}),(0,x.jsx)(`p`,{className:`ts:mt-4 ts:text-body-m ts:text-fg-secondary`,children:`1.284 pedidos neste mês`})]}),(0,x.jsxs)(`div`,{className:`ts:flex ts:gap-8`,children:[(0,x.jsx)(o,{variant:`secondary`,leadingIcon:c,children:`Exportar`}),(0,x.jsx)(o,{leadingIcon:l,children:`Novo pedido`})]})]})]}),(0,x.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,x.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Rodapé de formulário · clique em salvar`}),(0,x.jsx)(`p`,{className:`ts:mt-16 ts:text-body-m ts:text-fg-secondary`,children:`As alterações só valem depois de salvas.`}),(0,x.jsxs)(`div`,{className:`ts:mt-24 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16`,children:[(0,x.jsx)(o,{variant:`ghost`,children:`Cancelar`}),(0,x.jsx)(D,{})]})]}),(0,x.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-raised ts:p-24 ts:shadow-lg`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Confirmação destrutiva`}),(0,x.jsx)(`p`,{className:`ts:mt-16 ts:text-heading-s`,children:`Excluir 3 pedidos?`}),(0,x.jsx)(`p`,{className:`ts:mt-4 ts:text-body-m ts:text-fg-secondary`,children:`Essa ação não pode ser desfeita.`}),(0,x.jsxs)(`div`,{className:`ts:mt-24 ts:flex ts:justify-end ts:gap-8`,children:[(0,x.jsx)(o,{variant:`secondary`,children:`Cancelar`}),(0,x.jsx)(o,{variant:`destructive`,leadingIcon:u,children:`Excluir pedidos`})]})]})]}),(0,x.jsxs)(`div`,{className:`ts:max-w-360 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Rodapé de login`}),(0,x.jsx)(`p`,{className:`ts:mt-16 ts:text-body-m ts:text-fg-secondary`,children:`A ação principal ocupa toda a largura disponível.`}),(0,x.jsx)(`div`,{className:`ts:mt-24 ts:border-t ts:border-border-subtle ts:pt-16`,children:(0,x.jsx)(o,{fullWidth:!0,children:`Entrar`})})]}),(0,x.jsxs)(`div`,{className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,x.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Link com visual de botão`}),(0,x.jsxs)(`div`,{className:`ts:mt-16 ts:flex ts:items-center ts:justify-between ts:gap-16`,children:[(0,x.jsx)(`p`,{className:`ts:text-body-m ts:text-fg-secondary`,children:`Últimos pedidos`}),(0,x.jsx)(`a`,{href:`#em-uso`,className:r({variant:`secondary`,size:`sm`}),children:`Ver todos`})]})]})]})}),(0,x.jsx)(h,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,descricao:(0,x.jsxs)(x.Fragment,{children:[`Também aceita as propriedades do `,(0,x.jsx)(_,{children:`<button>`}),` (onClick, aria-*, form…).`]}),children:(0,x.jsx)(f,{itens:O})}),(0,x.jsx)(h,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,x.jsxs)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:[(0,x.jsx)(`li`,{children:`Enter e Espaço acionam o botão; o foco aparece como um anel de 2 px, afastado 2 px.`}),(0,x.jsx)(`li`,{children:`Desativado sai da ordem de tabulação. Carregando continua focável, para o foco não se perder no meio da ação.`}),(0,x.jsxs)(`li`,{children:[`Carregando marca `,(0,x.jsx)(_,{children:`aria-busy`}),` e acrescenta "Carregando" ao nome acessível; o texto vem do provider. Mantenha o rótulo da ação ("Salvar alterações"): trocar por "Salvando" repete a informação e muda a largura do botão.`]}),(0,x.jsxs)(`li`,{children:[`Ícones são decorativos (`,(0,x.jsx)(_,{children:`aria-hidden`}),`); o rótulo sempre descreve a ação. Para botão só com ícone, use o `,(0,x.jsx)(`a`,{href:`/docs/componentes/iconbutton`,className:`ts:text-fg-primary ts:underline ts:underline-offset-4`,children:`IconButton`}),`, com rótulo obrigatório.`]}),(0,x.jsx)(`li`,{children:`Com "Reduzir movimento" ligado, o botão não encolhe ao pressionar; só troca a cor.`}),(0,x.jsxs)(`li`,{children:[`Contraste do texto sobre cada fundo verificado pelo `,(0,x.jsx)(_,{children:`pnpm verify`}),` nos dois temas.`]})]})})]})}export{k as ButtonPagina};