import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t}from"./recharts-CHWuGRQf.js";import{ei as n,li as r,sr as i,ti as a,vi as o}from"./Codigo-Dgz1In5l.js";import{t as s}from"./Input-BBFu0gZj.js";import{s as c}from"./tiptap-jvs8iIPE.js";import{_ as l,b as u,f as d,g as f,h as p,mn as m,p as h,y as g}from"./index-3SU4ioj-.js";var _={name:`at-sign`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`,key:`7n84p3`}]]};_.node;var v=o(_),y={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};y.node;var b=o(y),x=e(t(),1),S=c(),C=[{size:`sm`,nome:`sm`},{size:`md`,nome:`md (padrão)`},{size:`lg`,nome:`lg`}];function w({titulo:e,children:t}){return(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20`,children:[(0,S.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:e}),t]})}function T(){let[e,t]=(0,x.useState)({}),[n,r]=(0,x.useState)(!1);function a(e){e.preventDefault();let n=new FormData(e.currentTarget),i={};String(n.get(`nome`)).trim()||(i.nome=`Informe o nome do cliente.`),/^\S+@\S+\.\S+$/.test(String(n.get(`email`)))||(i.email=`Informe um e-mail válido, como nome@empresa.com.`),n.get(`limite`)&&Number.isNaN(Number(String(n.get(`limite`)).replace(/\./g,``).replace(`,`,`.`)))&&(i.limite=`Use só números, como 1.500,00.`),String(n.get(`senha`)).length<8&&(i.senha=`A senha precisa de pelo menos 8 caracteres.`),t(i);let a=Object.keys(i)[0];a&&e.currentTarget.elements.namedItem(a)?.focus(),Object.keys(i).length===0&&(r(!0),setTimeout(()=>r(!1),1500))}return(0,S.jsxs)(`form`,{noValidate:!0,onSubmit:a,className:`ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24`,children:[(0,S.jsx)(`p`,{className:`ts:text-label-s ts:text-fg-muted`,children:`Cadastro de cliente · envie vazio para ver os erros`}),(0,S.jsx)(`h3`,{className:`ts:mt-12 ts:text-heading-m`,children:`Novo cliente`}),(0,S.jsxs)(`div`,{className:`ts:mt-20 ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(s,{name:`nome`,label:`Nome`,placeholder:`Mercado Bom Preço`,error:e.nome,autoComplete:`organization`}),(0,S.jsx)(s,{name:`email`,label:`E-mail`,type:`email`,leadingIcon:b,placeholder:`contato@empresa.com`,error:e.email,autoComplete:`email`}),(0,S.jsx)(s,{name:`limite`,label:`Limite de crédito (R$)`,prefix:`R$`,placeholder:`0,00`,inputMode:`decimal`,optional:!0,description:`Deixe em branco para não ter limite.`,error:e.limite}),(0,S.jsx)(s,{name:`senha`,label:`Senha de acesso`,type:`password`,description:`Pelo menos 8 caracteres.`,error:e.senha,autoComplete:`new-password`})]}),(0,S.jsxs)(`div`,{className:`ts:mt-24 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16`,children:[(0,S.jsx)(i,{variant:`ghost`,type:`reset`,onClick:()=>t({}),children:`Limpar`}),(0,S.jsx)(i,{type:`submit`,loading:n,children:`Salvar cliente`})]})]})}var E=[{nome:`label`,tipo:`ReactNode`,descricao:`Rótulo visível, ligado ao campo.`},{nome:`description`,tipo:`ReactNode`,descricao:`Ajuda abaixo do campo; some enquanto houver erro.`},{nome:`error`,tipo:`ReactNode`,descricao:`Mensagem de erro. Deixa o campo inválido e é anunciada com ele.`},{nome:`optional`,tipo:`boolean`,padrao:`false`,descricao:`Mostra "(opcional)" ao lado do rótulo.`},{nome:`size`,tipo:`'sm' | 'md' | 'lg'`,padrao:`'md'`,descricao:`Mesmas alturas do Button, pela densidade.`},{nome:`leadingIcon`,tipo:`IconComponent`,descricao:`Ícone decorativo no início.`},{nome:`prefix / suffix`,tipo:`ReactNode`,descricao:`Texto fixo antes ou depois do valor (R$, %, .com.br). Ponha a unidade também no rótulo.`},{nome:`trailing`,tipo:`ReactNode`,descricao:`Conteúdo livre no fim do campo.`},{nome:`type`,tipo:`string`,padrao:`'text'`,descricao:`Com "password", aparece o botão de mostrar e ocultar a senha.`},{nome:`value / defaultValue`,tipo:`string`,descricao:`Valor controlado ou inicial.`},{nome:`onValueChange`,tipo:`(valor, detalhes) => void`,descricao:`Chamado a cada mudança. onChange nativo também funciona.`},{nome:`disabled / readOnly`,tipo:`boolean`,padrao:`false`,descricao:`Desativado sai da tabulação; somente leitura aceita foco e cópia.`},{nome:`className`,tipo:`string`,descricao:`Classes do contêiner (largura, margem).`}];function D(){return(0,S.jsxs)(`article`,{children:[(0,S.jsx)(d,{etapa:`Componente 2 · aprovado`,titulo:`Input`,descricao:(0,S.jsxs)(S.Fragment,{children:[`Campo de texto de uma linha, com rótulo, ajuda e erro. Mesmas alturas, raio e respiro do Button, para os dois ficarem lado a lado. Texto longo será o `,(0,S.jsx)(h,{children:`Textarea`}),`; busca com atalho, o `,(0,S.jsx)(h,{children:`SearchField`}),`.`]})}),(0,S.jsx)(f,{codigo:`import { Input, type InputSize } from '@tessela/web';

const tamanhos: { size: InputSize; nome: string }[] = [\r
  { size: 'sm', nome: 'sm' },\r
  { size: 'md', nome: 'md (padrão)' },\r
  { size: 'lg', nome: 'lg' },\r
];

<div className="ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1">\r
  {tamanhos.map(({ size, nome }) => (\r
    <Input key={size} size={size} label={nome} placeholder="Nome do cliente" />\r
  ))}\r
</div>`,id:`tamanhos`,titulo:`Tamanhos`,descricao:`28, 32 e 40 px de altura na densidade confortável. O texto do valor é 13 px no sm e 14 px no md e lg.`,children:(0,S.jsx)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-16 ts:max-lg:grid-cols-1`,children:C.map(({size:e,nome:t})=>(0,S.jsx)(s,{size:e,label:t,placeholder:`Nome do cliente`},e))})}),(0,S.jsx)(f,{codigo:`import { Input } from '@tessela/web';

<div className="ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
  <Input label="Vazio" placeholder="Placeholder" />\r
  <Input label="Preenchido" defaultValue="Mercado Bom Preço" />\r
  <Input label="Com ajuda" description="Como aparece nos pedidos." placeholder="Nome fantasia" />\r
  <Input label="Com erro" defaultValue="contato@" error="Informe um e-mail válido." />\r
  <Input label="Opcional" optional placeholder="Ex.: Loja Centro" />\r
  <Input label="Desativado" disabled defaultValue="Plano Básico" />\r
  <Input label="Somente leitura" readOnly defaultValue="ord_7Hk29QpLm3" description="Pode selecionar e copiar." />\r
</div>`,id:`estados`,titulo:`Estados`,descricao:`Clique num campo para ver o foco: a borda assume a cor do texto (preta no claro, branca no escuro) e fica com 2 px. No erro, fica vermelha.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(s,{label:`Vazio`,placeholder:`Placeholder`}),(0,S.jsx)(s,{label:`Preenchido`,defaultValue:`Mercado Bom Preço`}),(0,S.jsx)(s,{label:`Com ajuda`,description:`Como aparece nos pedidos.`,placeholder:`Nome fantasia`}),(0,S.jsx)(s,{label:`Com erro`,defaultValue:`contato@`,error:`Informe um e-mail válido.`}),(0,S.jsx)(s,{label:`Opcional`,optional:!0,placeholder:`Ex.: Loja Centro`}),(0,S.jsx)(s,{label:`Desativado`,disabled:!0,defaultValue:`Plano Básico`}),(0,S.jsx)(s,{label:`Somente leitura`,readOnly:!0,defaultValue:`ord_7Hk29QpLm3`,description:`Pode selecionar e copiar.`})]})}),(0,S.jsx)(f,{codigo:`import { Input } from '@tessela/web';
import { AtSign, Mail } from 'lucide-react';

<div className="ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1">\r
  <Input label="E-mail" type="email" leadingIcon={Mail} placeholder="contato@empresa.com" />\r
  <Input label="Valor (R$)" prefix="R$" placeholder="0,00" inputMode="decimal" />\r
  <Input label="Desconto (%)" suffix="%" placeholder="0" inputMode="numeric" />\r
  <Input label="Domínio" suffix=".com.br" placeholder="minhaloja" />\r
  <Input label="Usuário" leadingIcon={AtSign} placeholder="loja.centro" />\r
  <Input label="Senha" type="password" defaultValue="segredo-123" />\r
</div>`,id:`conteudo`,titulo:`Ícone, prefixo e senha`,descricao:`Ícone, prefixo e sufixo são decorativos; o rótulo precisa dizer tudo sozinho.`,children:(0,S.jsxs)(`div`,{className:`ts:grid ts:grid-cols-3 ts:gap-x-16 ts:gap-y-24 ts:max-lg:grid-cols-2 ts:max-md:grid-cols-1`,children:[(0,S.jsx)(s,{label:`E-mail`,type:`email`,leadingIcon:b,placeholder:`contato@empresa.com`}),(0,S.jsx)(s,{label:`Valor (R$)`,prefix:`R$`,placeholder:`0,00`,inputMode:`decimal`}),(0,S.jsx)(s,{label:`Desconto (%)`,suffix:`%`,placeholder:`0`,inputMode:`numeric`}),(0,S.jsx)(s,{label:`Domínio`,suffix:`.com.br`,placeholder:`minhaloja`}),(0,S.jsx)(s,{label:`Usuário`,leadingIcon:v,placeholder:`loja.centro`}),(0,S.jsx)(s,{label:`Senha`,type:`password`,defaultValue:`segredo-123`})]})}),(0,S.jsx)(f,{codigo:`import { Button, Input, type InputSize } from '@tessela/web';
import { Search } from 'lucide-react';

const tamanhos: { size: InputSize; nome: string }[] = [\r
  { size: 'sm', nome: 'sm' },\r
  { size: 'md', nome: 'md (padrão)' },\r
  { size: 'lg', nome: 'lg' },\r
];

<div className="ts:flex ts:flex-col ts:gap-16">\r
  {tamanhos.map(({ size }) => (\r
    <div key={size} className="ts:flex ts:max-w-560 ts:items-end ts:gap-8">\r
      <Input size={size} aria-label="Buscar pedidos" leadingIcon={Search} placeholder="Buscar pedidos" className="ts:flex-1" />\r
      <Button size={size} variant="secondary">Filtrar</Button>\r
      <Button size={size}>Buscar</Button>\r
    </div>\r
  ))}\r
</div>`,id:`botao`,titulo:`Com o Button`,descricao:`Mesma altura e mesmo raio em cada tamanho: campo e botão alinham sem ajuste.`,children:(0,S.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:C.map(({size:e})=>(0,S.jsxs)(`div`,{className:`ts:flex ts:max-w-560 ts:items-end ts:gap-8`,children:[(0,S.jsx)(s,{size:e,"aria-label":`Buscar pedidos`,leadingIcon:m,placeholder:`Buscar pedidos`,className:`ts:flex-1`}),(0,S.jsx)(i,{size:e,variant:`secondary`,children:`Filtrar`}),(0,S.jsx)(i,{size:e,children:`Buscar`})]},e))})}),(0,S.jsx)(f,{id:`temas`,titulo:`Temas`,children:(0,S.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:r.map(e=>(0,S.jsx)(p,{theme:e,titulo:u[e],children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-16`,children:[(0,S.jsx)(s,{label:`Nome`,defaultValue:`Mercado Bom Preço`}),(0,S.jsx)(s,{label:`E-mail`,leadingIcon:b,defaultValue:`contato@`,error:`Informe um e-mail válido.`}),(0,S.jsx)(s,{label:`Plano`,disabled:!0,defaultValue:`Básico`})]})},e))})}),(0,S.jsx)(f,{id:`densidade`,titulo:`Densidade`,children:(0,S.jsx)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:n.map(e=>(0,S.jsx)(p,{density:e,titulo:`${g[e]} · ${a[e][`control/height/sm`]} / ${a[e][`control/height/md`]} / ${a[e][`control/height/lg`]} px`,children:(0,S.jsx)(`div`,{className:`ts:flex ts:flex-col ts:gap-12`,children:C.map(({size:e})=>(0,S.jsx)(s,{size:e,"aria-label":`Campo ${e}`,placeholder:`Campo ${e}`},e))})},e))})}),(0,S.jsx)(f,{codigo:`import { Button, Input } from '@tessela/web';
import { Mail, Search } from 'lucide-react';
import { type FormEvent, type ReactNode, useState } from 'react';

function Exemplo({ titulo, children }: { titulo: string; children: ReactNode }) {\r
  return (\r
    <div className="ts:flex ts:flex-col ts:gap-12 ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-20">\r
      <p className="ts:text-label-s ts:text-fg-muted">{titulo}</p>\r
      {children}\r
    </div>\r
  );\r
}

type Erros = Partial<Record<'nome' | 'email' | 'limite' | 'senha', string>>;

function FormularioDeCliente() {\r
  const [erros, setErros] = useState<Erros>({});\r
  const [salvando, setSalvando] = useState(false);\r
\r
  function salvar(event: FormEvent<HTMLFormElement>) {\r
    event.preventDefault();\r
    const dados = new FormData(event.currentTarget);\r
    const novos: Erros = {};\r
    if (!String(dados.get('nome')).trim()) novos.nome = 'Informe o nome do cliente.';\r
    if (!/^\\S+@\\S+\\.\\S+$/.test(String(dados.get('email')))) novos.email = 'Informe um e-mail válido, como nome@empresa.com.';\r
    if (dados.get('limite') && Number.isNaN(Number(String(dados.get('limite')).replace(/\\./g, '').replace(',', '.')))) novos.limite = 'Use só números, como 1.500,00.';\r
    if (String(dados.get('senha')).length < 8) novos.senha = 'A senha precisa de pelo menos 8 caracteres.';\r
    setErros(novos);\r
    // Com erro, o foco vai para o primeiro campo inválido: quem usa teclado ou leitor de tela chega direto nele.\r
    const primeiro = Object.keys(novos)[0];\r
    if (primeiro) (event.currentTarget.elements.namedItem(primeiro) as HTMLInputElement | null)?.focus();\r
    if (Object.keys(novos).length === 0) {\r
      setSalvando(true);\r
      setTimeout(() => setSalvando(false), 1500);\r
    }\r
  }\r
\r
  return (\r
    <form noValidate onSubmit={salvar} className="ts:rounded-lg ts:border ts:border-border-default ts:bg-bg-surface ts:p-24">\r
      <p className="ts:text-label-s ts:text-fg-muted">Cadastro de cliente · envie vazio para ver os erros</p>\r
      <h3 className="ts:mt-12 ts:text-heading-m">Novo cliente</h3>\r
      <div className="ts:mt-20 ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <Input name="nome" label="Nome" placeholder="Mercado Bom Preço" error={erros.nome} autoComplete="organization" />\r
        <Input name="email" label="E-mail" type="email" leadingIcon={Mail} placeholder="contato@empresa.com" error={erros.email} autoComplete="email" />\r
        <Input name="limite" label="Limite de crédito (R$)" prefix="R$" placeholder="0,00" inputMode="decimal" optional description="Deixe em branco para não ter limite." error={erros.limite} />\r
        <Input name="senha" label="Senha de acesso" type="password" description="Pelo menos 8 caracteres." error={erros.senha} autoComplete="new-password" />\r
      </div>\r
      <div className="ts:mt-24 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16">\r
        <Button variant="ghost" type="reset" onClick={() => setErros({})}>Limpar</Button>\r
        <Button type="submit" loading={salvando}>Salvar cliente</Button>\r
      </div>\r
    </form>\r
  );\r
}

<div className="ts:flex ts:flex-col ts:gap-24">\r
  <FormularioDeCliente />\r
  <Exemplo titulo="Barra de filtros">\r
    <div className="ts:flex ts:flex-wrap ts:items-end ts:gap-8">\r
      <Input aria-label="Buscar clientes" leadingIcon={Search} placeholder="Buscar por nome ou e-mail" className="ts:min-w-240 ts:flex-1" />\r
      <Input aria-label="Cidade" placeholder="Cidade" className="ts:w-160" />\r
      <Button variant="secondary">Limpar</Button>\r
    </div>\r
  </Exemplo>\r
</div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Formulário real de admin, com validação ao salvar.`,children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{codigo:`import { Button, Input } from '@tessela/web';
import { Search } from 'lucide-react';

<div className="ts:flex ts:flex-wrap ts:items-end ts:gap-8">\r
  <Input aria-label="Buscar clientes" leadingIcon={Search} placeholder="Buscar por nome ou e-mail" className="ts:min-w-240 ts:flex-1" />\r
  <Input aria-label="Cidade" placeholder="Cidade" className="ts:w-160" />\r
  <Button variant="secondary">Limpar</Button>\r
</div>`,titulo:`Barra de filtros`,children:(0,S.jsxs)(`div`,{className:`ts:flex ts:flex-wrap ts:items-end ts:gap-8`,children:[(0,S.jsx)(s,{"aria-label":`Buscar clientes`,leadingIcon:m,placeholder:`Buscar por nome ou e-mail`,className:`ts:min-w-240 ts:flex-1`}),(0,S.jsx)(s,{"aria-label":`Cidade`,placeholder:`Cidade`,className:`ts:w-160`}),(0,S.jsx)(i,{variant:`secondary`,children:`Limpar`})]})})]})}),(0,S.jsx)(f,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,descricao:(0,S.jsxs)(S.Fragment,{children:[`Também aceita as propriedades do `,(0,S.jsx)(h,{children:`<input>`}),` (name, placeholder, autoComplete, inputMode, required…).`]}),children:(0,S.jsx)(l,{itens:E})}),(0,S.jsx)(f,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,S.jsxs)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:[(0,S.jsx)(`li`,{children:`O rótulo fica ligado ao campo; clicar nele ou em qualquer ponto da caixa põe o foco no campo.`}),(0,S.jsxs)(`li`,{children:[`Sem rótulo visível (busca, filtros), use `,(0,S.jsx)(h,{children:`aria-label`}),`.`]}),(0,S.jsx)(`li`,{children:`A ajuda e o erro são descrições do campo: o leitor de tela lê junto. Com erro, o campo fica marcado como inválido.`}),(0,S.jsx)(`li`,{children:`O erro tem ícone e texto, não só cor. A borda vermelha e a borda de foco têm contraste de pelo menos 3:1.`}),(0,S.jsxs)(`li`,{children:[`A borda em repouso é clara por decisão de design e fica abaixo de 3:1 (exceção registrada). Por isso o campo sempre leva rótulo visível ou `,(0,S.jsx)(h,{children:`aria-label`}),`.`]}),(0,S.jsx)(`li`,{children:`O botão da senha tem rótulo que muda com o estado ("Mostrar senha" / "Ocultar senha") e é alcançável pelo Tab.`}),(0,S.jsx)(`li`,{children:`Somente leitura continua na tabulação para poder copiar; desativado sai.`}),(0,S.jsx)(`li`,{children:`Ao enviar um formulário com erro, leve o foco ao primeiro campo inválido (o exemplo "Em uso" faz isso). O componente de formulário do Tessela Web fará isso sozinho.`})]})})]})}export{D as InputPagina};