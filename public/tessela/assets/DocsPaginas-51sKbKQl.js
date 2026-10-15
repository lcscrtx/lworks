import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{Xr as n,cr as r,d as i,f as a,fi as o,i as s,n as c,qr as l,sr as u,t as d}from"./Codigo-Dgz1In5l.js";import{s as f}from"./tiptap-jvs8iIPE.js";import{i as p,n as m,t as h}from"./Tabs-C69_giCo.js";import{_ as g,c as _,f as v,g as y,o as b,p as x,s as S}from"./index-3SU4ioj-.js";var C=e(t(),1),w=f();function T({itens:e}){return(0,w.jsx)(`ul`,{className:`ts:flex ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map(([e,t])=>(0,w.jsxs)(`li`,{children:[(0,w.jsxs)(`strong`,{className:`ts:font-medium ts:text-fg-primary`,children:[e,`:`]}),` `,t]},e))})}function E(){return(0,w.jsxs)(`article`,{children:[(0,w.jsx)(v,{titulo:`Introdução`,descricao:`O Tessela Web é o design system dos painéis e backoffices da ShiftLabs: componentes React acessíveis, em português, com tokens que viram a marca de cada produto.`}),(0,w.jsx)(y,{semCaixa:!0,id:`o-que-e`,titulo:`O que é`,children:(0,w.jsxs)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:[`Um pacote de componentes (`,(0,w.jsx)(x,{children:`@tessela/web`}),`) e um de tokens (`,(0,w.jsx)(x,{children:`@tessela/web-tokens`}),`). Os produtos se adaptam ao Tessela, nunca o contrário: quando uma tela precisa de algo que não existe, a peça nasce aqui, com teste e página neste site, e todos os produtos ganham.`]})}),(0,w.jsx)(y,{id:`principios`,titulo:`Princípios`,semCaixa:!0,children:(0,w.jsx)(T,{itens:[[`Acessível`,`teclado, leitor de tela e contraste conferidos em cada peça, com testes automáticos (axe) e no navegador.`],[`Em português`,`todo texto de interface vem do provider, com números, moeda e datas na localidade (Intl).`],[`Tokens primeiro`,`cor, tipografia, espaço, raio e movimento saem de um arquivo de tokens; trocar os tokens troca a marca.`],[`Base UI por baixo`,`o comportamento difícil (foco, teclado, posicionamento) vem do Base UI; o Tessela cuida do desenho e das decisões.`],[`Código primeiro`,`a fonte da verdade é o código; a revisão acontece neste site, com os componentes de verdade.`]]})}),(0,w.jsx)(y,{id:`o-que-tem`,titulo:`O que tem aqui`,semCaixa:!0,children:(0,w.jsx)(T,{itens:[[`Fundação`,`as escalas e os papéis de cor, tipografia, espaço, raio, sombra e densidade.`],[`Componentes`,`${_.length} páginas, cada uma com exemplos, código, propriedades e notas de acessibilidade.`],[`Modelos`,`${S.length} telas completas para copiar.`],[`Gráficos e Cores`,`as galerias de gráficos e de cores, para escolher e copiar.`]]})}),(0,w.jsx)(y,{id:`proximos-passos`,titulo:`Próximos passos`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,w.jsx)(`a`,{href:`/docs/instalacao`,className:r({variant:`primary`}),children:`Instalar`}),(0,w.jsx)(`a`,{href:`/docs/componentes`,className:r({variant:`secondary`}),children:`Ver componentes`})]})})]})}var D={pnpm:`pnpm add @tessela/web @tessela/web-tokens`,npm:`npm install @tessela/web @tessela/web-tokens`,yarn:`yarn add @tessela/web @tessela/web-tokens`,bun:`bun add @tessela/web @tessela/web-tokens`};function O({comandos:e=D,realce:t=!0}){let[n,r]=(0,C.useState)(`pnpm`);return(0,w.jsxs)(`div`,{className:`ts:overflow-hidden ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-subtle`,children:[(0,w.jsxs)(`div`,{className:`ts:flex ts:items-center ts:justify-between ts:gap-8 ts:border-b ts:border-border-default ts:px-8 ts:py-6`,children:[(0,w.jsx)(p,{value:n,onValueChange:e=>r(e),variant:`segmented`,size:`sm`,children:(0,w.jsx)(m,{"aria-label":`Gerenciador de pacotes`,children:Object.keys(e).map(e=>(0,w.jsx)(h,{value:e,children:e},e))})}),(0,w.jsx)(c,{texto:e[n],rotulo:`Copiar comando`})]}),(0,w.jsx)(s,{codigo:e[n],numeros:!1,realce:t,className:`ts:px-16 ts:py-14`})]})}var k=e=>({pnpm:`pnpm add ${e}`,npm:`npm install ${e}`,yarn:`yarn add ${e}`,bun:`bun add ${e}`}),A=`/* Use os arquivos web da sua licença, sem converter. */
@font-face {
  font-family: "ABC Diatype";
  src: url("/fonts/abc-diatype/ABCDiatype-Regular.ttf") format("truetype");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "ABC Diatype";
  src: url("/fonts/abc-diatype/ABCDiatypeMedium-Regular.ttf") format("truetype");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "ABC Diatype";
  src: url("/fonts/abc-diatype/ABCDiatype-Bold.ttf") format("truetype");
  font-weight: 700;
  font-display: swap;
}`,j=`/* Use os arquivos web da sua licença, sem converter. */
@font-face {
  font-family: "Puffin Display Soft";
  src: url("/fonts/puffin-display-soft/PuffinDisplaySoft-Regular.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Puffin Display Soft";
  src: url("/fonts/puffin-display-soft/PuffinDisplaySoft-Medium.otf") format("opentype");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Puffin Display Soft";
  src: url("/fonts/puffin-display-soft/PuffinDisplaySoft-SemiBold.otf") format("opentype");
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: "Puffin Display Soft";
  src: url("/fonts/puffin-display-soft/PuffinDisplaySoft-Bold.otf") format("opentype");
  font-weight: 700;
  font-display: swap;
}`;function M(){let{ambiente:e}=a(),t=l[e.brand],r=n[e.brand],o=t?.name??`@tessela/web`,s=t?t.hostedFonts:[`ABC Diatype`],c=i.flatMap(e=>l[e]?.name??[]);return(0,w.jsxs)(`article`,{children:[(0,w.jsx)(v,{titulo:`Instalação`,descricao:`Instale o pacote, importe o CSS, envolva o app no provider e use os componentes. As instruções seguem o produto escolhido no cabeçalho.`}),(0,w.jsx)(y,{id:`pacotes`,titulo:`Pacotes`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,w.jsx)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:t?(0,w.jsxs)(w.Fragment,{children:[`O `,(0,w.jsx)(x,{children:o}),` é o Tessela Web na marca `,r,`: traz os componentes do `,(0,w.jsx)(x,{children:`@tessela/web`}),` com os tokens do `,r,`. Um pacote só, na mesma versão do `,(0,w.jsx)(x,{children:`@tessela/web`}),`.`]}):(0,w.jsxs)(w.Fragment,{children:[`A marca Padrão é neutra. Cada produto tem um pacote próprio, com os componentes e os tokens da marca: `,c.map((e,t)=>(0,w.jsxs)(`span`,{children:[t>0&&(t===c.length-1?` e `:`, `),(0,w.jsx)(x,{children:e})]},e)),`. Escolha o produto no cabeçalho para ver as instruções dele.`]})}),(0,w.jsx)(O,{comandos:k(t?o:`@tessela/web @tessela/web-tokens`)})]})}),(0,w.jsx)(y,{id:`css-compilado`,titulo:`Sem Tailwind próprio`,descricao:`Para usar os componentes sem configurar Tailwind no app, importe o CSS compilado.`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,w.jsx)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:`O arquivo já traz as classes usadas pelos componentes, os tokens e a JetBrains Mono com a licença. Importe-o uma vez na entrada do app e envolva a interface no provider.`}),(0,w.jsx)(d,{titulo:`src/main.tsx`,rotulo:`Código do CSS compilado: src/main.tsx`,codigo:`import '@tessela/web/styles.compiled.css';`}),(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código do CSS compilado: src/App.tsx`,numeros:!0,codigo:`import { TesselaProvider, ToastProvider } from '${o}';

export function App() {
  return (
    <TesselaProvider theme="light" density="comfortable" locale="pt-BR">
      <ToastProvider>
        <Painel />
      </ToastProvider>
    </TesselaProvider>
  );
}`}),(0,w.jsxs)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:[`A fonte principal licenciada da marca continua hospedada pelo app. Se você escrever classes `,(0,w.jsx)(x,{children:`ts:`}),` próprias, use o CSS fonte com o compilador abaixo: o CSS compilado não gera classes novas.`]})]})}),(0,w.jsx)(y,{id:`estilos`,titulo:`Com Tailwind v4`,descricao:t?`Use o CSS fonte para escrever classes ts: próprias com os componentes e os tokens do ${r}.`:`Use o CSS fonte para escrever classes ts: próprias com os componentes e os tokens.`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,w.jsx)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:`Instale o compilador do Tailwind v4 e registre o plugin no Vite antes de importar o CSS fonte.`}),(0,w.jsx)(d,{titulo:`terminal`,codigo:`pnpm add -D tailwindcss @tailwindcss/vite`}),(0,w.jsx)(d,{titulo:`vite.config.ts`,codigo:`import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});`}),(0,w.jsx)(d,{titulo:`src/main.tsx`,rotulo:`Código com Tailwind: src/main.tsx`,codigo:`import '${o}/styles.css';`})]})}),(0,w.jsx)(y,{id:`fonte`,titulo:`Fonte`,descricao:s.length?`A marca ${r} usa ${s.join(` e `)}. A licença não permite redistribuir os arquivos, então eles não vêm no pacote: cada app hospeda os seus e declara o @font-face.`:`A marca ${r} usa ${t.bundledFonts.join(` e `)}, de licença aberta: a fonte vem no pacote e não pede @font-face.`,semCaixa:!0,children:s.length>0&&(0,w.jsx)(d,{titulo:`src/fonts.css`,codigo:t?j:A})}),(0,w.jsx)(y,{id:`provider`,titulo:`Provider`,descricao:t?`O TesselaProvider do ${o} já vem na marca ${r}; escolha tema, densidade e idioma. O ToastProvider habilita os avisos.`:`O TesselaProvider escolhe tema, marca, densidade e idioma. O ToastProvider habilita os avisos.`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:[(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código do provider: src/App.tsx`,numeros:!0,codigo:`import { TesselaProvider, ToastProvider } from '${o}';

export function App() {
  return (
    <TesselaProvider theme="light" density="comfortable" locale="pt-BR">
      <ToastProvider>
        <Painel />
      </ToastProvider>
    </TesselaProvider>
  );
}`}),(0,w.jsxs)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:[`Veja a `,(0,w.jsx)(`a`,{href:`/docs/provider`,className:`ts:text-fg-primary ts:underline ts:underline-offset-4`,children:`referência completa do TesselaProvider`}),`, incluindo textos, escopo, contraste e localidade.`]})]})}),(0,w.jsx)(y,{codigo:`import { Button } from '@tessela/web';

<div className="ts:flex ts:flex-wrap ts:gap-8">\r
  <Button>Salvar alterações</Button>\r
  <Button variant="secondary">Cancelar</Button>\r
</div>`,id:`primeiro-componente`,titulo:`Primeiro componente`,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:gap-8`,children:[(0,w.jsx)(u,{children:`Salvar alterações`}),(0,w.jsx)(u,{variant:`secondary`,children:`Cancelar`})]})}),(0,w.jsx)(y,{id:`classes`,titulo:`Classes`,descricao:(0,w.jsxs)(w.Fragment,{children:[`As classes do Tailwind do Tessela levam o prefixo `,(0,w.jsx)(x,{children:`ts:`}),`, antes das variantes. O marcador de grupo é `,(0,w.jsx)(x,{children:`ts:group`}),`.`]}),semCaixa:!0,children:(0,w.jsx)(d,{titulo:`src/Painel.tsx`,codigo:`<div className="ts:group ts:flex ts:gap-8 ts:p-16 ts:max-lg:flex-col">
  <span className="ts:text-fg-secondary ts:group-hover:text-fg-primary">Pedidos</span>
</div>`})}),(0,w.jsx)(y,{id:`tailwind-do-app`,titulo:`Num app com Tailwind próprio`,descricao:`O CSS do ${o} vai numa folha separada, importada antes da folha do app. O prefixo mantém as classes do app como estão. Nunca importe o CSS do Tessela dentro do CSS do app: numa compilação só, o prefixo vale para tudo e as classes do app deixam de ser geradas. Pede Tailwind 4.3 ou mais novo.`,semCaixa:!0,children:(0,w.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,w.jsx)(d,{titulo:`src/tessela.css`,codigo:`@import "${o}/styles.css";`}),(0,w.jsx)(d,{titulo:`src/main.tsx`,rotulo:`Código do Tailwind próprio: src/main.tsx`,codigo:`import './tessela.css';
import './index.css';`}),(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código do Tailwind próprio: src/App.tsx`,numeros:!0,codigo:`import { TesselaProvider, ToastProvider } from '${o}';

export function App() {
  return (
    <TesselaProvider scope="element" className="ts:font-sans ts:text-body-m ts:text-fg-primary">
      <ToastProvider>
        <Cadastro />
      </ToastProvider>
    </TesselaProvider>
  );
}`})]})})]})}var N=e=>e.match(/\{[^}]+\}/g)??[];function P(){return(0,w.jsxs)(`article`,{children:[(0,w.jsx)(v,{titulo:`TesselaProvider`,descricao:`O provider define o ambiente do Tessela e entrega tema, marca, densidade, contraste, localidade e textos a todos os componentes.`}),(0,w.jsx)(y,{id:`uso`,titulo:`Uso`,semCaixa:!0,children:(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código de uso do TesselaProvider: src/App.tsx`,codigo:`import { TesselaProvider, ToastProvider } from '@tessela/web';

export function App() {
  return (
    <TesselaProvider theme="light" brand="padrao" locale="pt-BR">
      <ToastProvider>
        <Painel />
      </ToastProvider>
    </TesselaProvider>
  );
}`})}),(0,w.jsx)(y,{id:`propriedades`,titulo:`Propriedades`,semCaixa:!0,children:(0,w.jsx)(g,{itens:[{nome:`theme`,tipo:`'light' | 'dark' | 'system'`,padrao:`'system'`,descricao:`Tema do ambiente. Sem valor, herda do provider de fora.`},{nome:`brand`,tipo:`Brand`,padrao:`'padrao'`,descricao:`Marca que resolve os tokens do ambiente.`},{nome:`density`,tipo:`'comfortable' | 'compact'`,padrao:`'comfortable'`,descricao:`Densidade dos componentes.`},{nome:`contrast`,tipo:`'standard' | 'high'`,padrao:`'standard'`,descricao:`Alto contraste aplicado sobre o tema.`},{nome:`locale`,tipo:`string`,padrao:`'pt-BR'`,descricao:`Localidade para datas, números e moeda.`},{nome:`scope`,tipo:`'document' | 'element'`,padrao:`'document'`,descricao:`Aplica o ambiente no html ou somente no contêiner do trecho.`},{nome:`messages`,tipo:`Partial<Messages>`,descricao:`Substitui total ou parcialmente os textos embutidos.`}]})}),(0,w.jsxs)(y,{id:`messages`,titulo:`Textos`,descricao:`Passe somente as chaves que precisam mudar; as demais continuam com os valores de defaultMessages.`,semCaixa:!0,children:[(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código de textos do TesselaProvider: src/App.tsx`,codigo:`<TesselaProvider
  locale="en-US"
  messages={{
    loading: 'Loading',
    rowsPerPage: 'Rows per page',
    pageRange: '{inicio}–{fim} of {total}',
  }}
>
  <Painel />
</TesselaProvider>`}),(0,w.jsxs)(`p`,{className:`ts:max-w-[var(--ts-site-docs-copy-max-width)] ts:text-body-m ts:text-fg-secondary`,children:[`Para usar um dicionário completo, importe `,(0,w.jsx)(x,{children:`enMessages`}),` ou `,(0,w.jsx)(x,{children:`esMessages`}),`. O padrão continua em português do Brasil.`]}),(0,w.jsx)(d,{titulo:`src/App.tsx`,rotulo:`Código de traduções do TesselaProvider: src/App.tsx`,codigo:`import { enMessages, esMessages, TesselaProvider } from '@tessela/web';

<TesselaProvider locale="en-US" messages={enMessages}>
  <Painel />
</TesselaProvider>

<TesselaProvider locale="es-ES" messages={esMessages}>
  <Painel />
</TesselaProvider>`})]}),(0,w.jsx)(y,{id:`use-tessela`,titulo:`useTessela`,descricao:`Use o hook em um componente dentro do provider para ler o ambiente resolvido e os textos.`,semCaixa:!0,children:(0,w.jsx)(d,{titulo:`src/Resumo.tsx`,codigo:`import { useTessela } from '@tessela/web';

export function Resumo() {
  const { locale, messages } = useTessela();
  return <p lang={locale}>{messages.loading}</p>;
}`})}),(0,w.jsx)(y,{id:`chaves-de-mensagens`,titulo:`Chaves e marcadores`,descricao:`${Object.keys(o).length} chaves disponíveis. Os marcadores entre chaves devem permanecer na tradução.`,semCaixa:!0,children:(0,w.jsx)(`ul`,{className:`ts:flex ts:max-w-[var(--ts-content-width-lg)] ts:flex-col ts:gap-8 ts:text-body-m ts:text-fg-secondary`,children:Object.entries(o).map(([e,t])=>{let n=N(t);return(0,w.jsxs)(`li`,{className:`ts:flex ts:flex-wrap ts:gap-x-8`,children:[(0,w.jsx)(x,{children:e}),(0,w.jsx)(`span`,{children:n.length?`Marcadores: ${n.join(`, `)}`:`Sem marcadores.`})]},e)})})})]})}function F({paginas:e}){return(0,w.jsx)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-32 ts:max-md:grid-cols-2`,children:e.map(e=>(0,w.jsx)(`a`,{href:e.caminho,className:`ts:flex ts:min-h-40 ts:items-center ts:text-body-m ts:text-fg-primary ts:underline-offset-4 ts:hover:underline`,children:e.nome},e.id))})}function I(){return(0,w.jsxs)(`article`,{children:[(0,w.jsx)(v,{titulo:`Componentes`,descricao:`Todas as peças do Tessela Web. Cada página traz exemplos com código, propriedades e as notas de teclado e acessibilidade.`}),b.slice(1).map(e=>(0,w.jsx)(y,{id:e.titulo.toLocaleLowerCase(`pt-BR`).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replaceAll(` `,`-`),titulo:e.titulo,semCaixa:!0,children:(0,w.jsx)(F,{paginas:e.paginas})},e.titulo))]})}export{O as ComandoDeInstalacao,I as IndiceDeComponentes,M as Instalacao,E as Introducao,P as PaginaDoProvider};