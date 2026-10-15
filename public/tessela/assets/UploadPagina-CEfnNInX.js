import{ei as e,li as t,sr as n}from"./Codigo-Dgz1In5l.js";import{t as r}from"./Input-BBFu0gZj.js";import{t as i}from"./Upload-BRCho5Cm.js";import{s as a}from"./tiptap-jvs8iIPE.js";import{t as o}from"./Textarea-DglDNy8U.js";import{a as s}from"./Estrutura-Bg5zrcqs.js";import{_ as c,b as l,dt as u,f as d,g as f,h as p,p as m,y as h}from"./index-3SU4ioj-.js";var g=a();function _({itens:e}){return(0,g.jsx)(`ul`,{className:`ts:flex ts:max-w-720 ts:list-disc ts:flex-col ts:gap-8 ts:pl-20 ts:text-body-m ts:text-fg-secondary`,children:e.map((e,t)=>(0,g.jsx)(`li`,{children:e},t))})}var v=(e,{onProgress:t,signal:n})=>new Promise((r,i)=>{let a=0,o=Math.max(4,Math.round(40/Math.max(1,e.size/2e5))),s=setInterval(()=>{a=Math.min(100,a+o),t(a),/erro/i.test(e.name)&&a>=60?(clearInterval(s),i(Error(`O servidor recusou o arquivo`))):a>=100&&(clearInterval(s),r(`https://arquivos.exemplo.com/${encodeURIComponent(e.name)}`))},180);n.addEventListener(`abort`,()=>clearInterval(s))}),y=[{id:`manual`,name:`manual-da-prensa.pdf`,size:184e4,type:`application/pdf`,status:`done`,url:`#`},{id:`ficha`,name:`ficha-tecnica.pdf`,size:312e3,type:`application/pdf`,status:`done`,url:`#`}];function b(){let e=u();return(0,g.jsx)(s,{title:`Novo produto`,description:`Cardápio de inverno`,children:(0,g.jsxs)(`form`,{onSubmit:t=>{t.preventDefault(),e.success(`Produto salvo`)},className:`ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1`,children:[(0,g.jsx)(r,{label:`Nome`,defaultValue:`Prensa francesa 600 ml`,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,g.jsx)(o,{label:`Descrição`,optional:!0,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,g.jsx)(i,{label:`Fotos`,description:`Até 4 fotos, PNG ou JPG, até 5 MB cada. A primeira vira a capa.`,accept:`image/png,image/jpeg`,maxSize:5242880,maxFiles:4,upload:v,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,g.jsx)(i,{label:`Manual`,optional:!0,variant:`button`,multiple:!1,accept:`.pdf`,description:`PDF, até 10 MB.`,maxSize:10485760,upload:v,className:`ts:col-span-2 ts:max-md:col-span-1`}),(0,g.jsxs)(`div`,{className:`ts:col-span-2 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16 ts:max-md:col-span-1`,children:[(0,g.jsx)(n,{variant:`ghost`,type:`button`,children:`Cancelar`}),(0,g.jsx)(n,{type:`submit`,children:`Salvar produto`})]})]})})}function x(){return(0,g.jsxs)(`article`,{children:[(0,g.jsx)(d,{etapa:`Componente 33 · no catálogo`,titulo:`FileUpload`,descricao:(0,g.jsxs)(g.Fragment,{children:[`Envio de arquivos: arraste para a área ou escolha no computador. Valida tipo, tamanho e quantidade no navegador antes de enviar, mostra o progresso de cada arquivo e deixa tentar de novo ou remover. Quem envia de fato é a função `,(0,g.jsx)(m,{children:`upload`}),` do app; o servidor revalida o conteúdo e o tamanho.`]})}),(0,g.jsx)(f,{codigo:`import { FileUpload, type UploadFn } from '@tessela/web';

const enviarSimulado: UploadFn = (file, { onProgress, signal }) =>\r
  new Promise((resolver, rejeitar) => {\r
    let feito = 0;\r
    const passo = Math.max(4, Math.round(40 / Math.max(1, file.size / 200_000)));\r
    const t = setInterval(() => {\r
      feito = Math.min(100, feito + passo);\r
      onProgress(feito);\r
      if (/erro/i.test(file.name) && feito >= 60) {\r
        clearInterval(t);\r
        rejeitar(new Error('O servidor recusou o arquivo'));\r
      } else if (feito >= 100) {\r
        clearInterval(t);\r
        resolver(\`https://arquivos.exemplo.com/\${encodeURIComponent(file.name)}\`);\r
      }\r
    }, 180);\r
    signal.addEventListener('abort', () => clearInterval(t));\r
  });

<div className="ts:grid ts:grid-cols-2 ts:items-start ts:gap-24 ts:max-lg:grid-cols-1">\r
  <FileUpload label="Anexos" description="Qualquer tipo, até 10 MB." maxSize={10 * 1024 * 1024} upload={enviarSimulado} />\r
  <div className="ts:flex ts:flex-col ts:gap-24">\r
    <FileUpload label="Contrato" variant="button" multiple={false} accept=".pdf" description="PDF." upload={enviarSimulado} />\r
    <FileUpload label="Com erro" error="Envie o comprovante para continuar." />\r
    <FileUpload label="Desativado" disabled />\r
  </div>\r
</div>`,id:`estados`,titulo:`Área e botão`,descricao:`Arraste arquivos do computador para a área (ela escurece ao passar) ou clique. O botão serve para formulários compactos. Os envios aqui são simulados.`,children:(0,g.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:items-start ts:gap-24 ts:max-lg:grid-cols-1`,children:[(0,g.jsx)(i,{label:`Anexos`,description:`Qualquer tipo, até 10 MB.`,maxSize:10485760,upload:v}),(0,g.jsxs)(`div`,{className:`ts:flex ts:flex-col ts:gap-24`,children:[(0,g.jsx)(i,{label:`Contrato`,variant:`button`,multiple:!1,accept:`.pdf`,description:`PDF.`,upload:v}),(0,g.jsx)(i,{label:`Com erro`,error:`Envie o comprovante para continuar.`}),(0,g.jsx)(i,{label:`Desativado`,disabled:!0})]})]})}),(0,g.jsx)(f,{codigo:`import { FileUpload, type UploadFn } from '@tessela/web';

const enviarSimulado: UploadFn = (file, { onProgress, signal }) =>\r
  new Promise((resolver, rejeitar) => {\r
    let feito = 0;\r
    const passo = Math.max(4, Math.round(40 / Math.max(1, file.size / 200_000)));\r
    const t = setInterval(() => {\r
      feito = Math.min(100, feito + passo);\r
      onProgress(feito);\r
      if (/erro/i.test(file.name) && feito >= 60) {\r
        clearInterval(t);\r
        rejeitar(new Error('O servidor recusou o arquivo'));\r
      } else if (feito >= 100) {\r
        clearInterval(t);\r
        resolver(\`https://arquivos.exemplo.com/\${encodeURIComponent(file.name)}\`);\r
      }\r
    }, 180);\r
    signal.addEventListener('abort', () => clearInterval(t));\r
  });

<div className="ts:max-w-560">\r
  <FileUpload label="Fotos da loja" description="PNG ou JPG, até 1 MB, no máximo 3." accept="image/*" maxSize={1024 * 1024} maxFiles={3} upload={enviarSimulado} />\r
</div>`,id:`validacao`,titulo:`Validação e erros`,descricao:`Aceita só imagens até 1 MB, no máximo 3. Tente um PDF, uma imagem grande, mais de 3 arquivos, ou um arquivo com “erro” no nome (falha no meio do envio e oferece tentar de novo).`,children:(0,g.jsx)(`div`,{className:`ts:max-w-560`,children:(0,g.jsx)(i,{label:`Fotos da loja`,description:`PNG ou JPG, até 1 MB, no máximo 3.`,accept:`image/*`,maxSize:1048576,maxFiles:3,upload:v})})}),(0,g.jsx)(f,{codigo:`import { FileUpload, type UploadFile, type UploadFn } from '@tessela/web';

const enviarSimulado: UploadFn = (file, { onProgress, signal }) =>\r
  new Promise((resolver, rejeitar) => {\r
    let feito = 0;\r
    const passo = Math.max(4, Math.round(40 / Math.max(1, file.size / 200_000)));\r
    const t = setInterval(() => {\r
      feito = Math.min(100, feito + passo);\r
      onProgress(feito);\r
      if (/erro/i.test(file.name) && feito >= 60) {\r
        clearInterval(t);\r
        rejeitar(new Error('O servidor recusou o arquivo'));\r
      } else if (feito >= 100) {\r
        clearInterval(t);\r
        resolver(\`https://arquivos.exemplo.com/\${encodeURIComponent(file.name)}\`);\r
      }\r
    }, 180);\r
    signal.addEventListener('abort', () => clearInterval(t));\r
  });

const existentes: UploadFile[] = [\r
  { id: 'manual', name: 'manual-da-prensa.pdf', size: 1_840_000, type: 'application/pdf', status: 'done', url: '#' },\r
  { id: 'ficha', name: 'ficha-tecnica.pdf', size: 312_000, type: 'application/pdf', status: 'done', url: '#' },\r
];

<div className="ts:max-w-560"><FileUpload label="Documentos" defaultValue={existentes} upload={enviarSimulado} /></div>`,id:`existentes`,titulo:`Arquivos que já existem`,descricao:`defaultValue traz os arquivos enviados antes, já como enviados.`,children:(0,g.jsx)(`div`,{className:`ts:max-w-560`,children:(0,g.jsx)(i,{label:`Documentos`,defaultValue:y,upload:v})})}),(0,g.jsx)(f,{id:`temas`,titulo:`Temas e densidades`,children:(0,g.jsxs)(`div`,{className:`ts:grid ts:grid-cols-2 ts:gap-24 ts:max-lg:grid-cols-1`,children:[t.map(e=>(0,g.jsx)(p,{theme:e,titulo:l[e],children:(0,g.jsx)(i,{label:`Documentos`,defaultValue:y,upload:v})},e)),e.map(e=>(0,g.jsx)(p,{density:e,titulo:h[e],children:(0,g.jsx)(i,{label:`Documentos`,defaultValue:y.slice(0,1),upload:v})},e))]})}),(0,g.jsx)(f,{codigo:`import { Button, Card, FileUpload, Input, Textarea, type UploadFn, useToast } from '@tessela/web';

const enviarSimulado: UploadFn = (file, { onProgress, signal }) =>\r
  new Promise((resolver, rejeitar) => {\r
    let feito = 0;\r
    const passo = Math.max(4, Math.round(40 / Math.max(1, file.size / 200_000)));\r
    const t = setInterval(() => {\r
      feito = Math.min(100, feito + passo);\r
      onProgress(feito);\r
      if (/erro/i.test(file.name) && feito >= 60) {\r
        clearInterval(t);\r
        rejeitar(new Error('O servidor recusou o arquivo'));\r
      } else if (feito >= 100) {\r
        clearInterval(t);\r
        resolver(\`https://arquivos.exemplo.com/\${encodeURIComponent(file.name)}\`);\r
      }\r
    }, 180);\r
    signal.addEventListener('abort', () => clearInterval(t));\r
  });

function CadastroDeProduto() {\r
  const toast = useToast();\r
  return (\r
    <Card title="Novo produto" description="Cardápio de inverno">\r
      <form onSubmit={(e) => { e.preventDefault(); toast.success('Produto salvo'); }} className="ts:grid ts:grid-cols-2 ts:gap-x-16 ts:gap-y-20 ts:max-md:grid-cols-1">\r
        <Input label="Nome" defaultValue="Prensa francesa 600 ml" className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <Textarea label="Descrição" optional className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <FileUpload\r
          label="Fotos"\r
          description="Até 4 fotos, PNG ou JPG, até 5 MB cada. A primeira vira a capa."\r
          accept="image/png,image/jpeg"\r
          maxSize={5 * 1024 * 1024}\r
          maxFiles={4}\r
          upload={enviarSimulado}\r
          className="ts:col-span-2 ts:max-md:col-span-1"\r
        />\r
        <FileUpload label="Manual" optional variant="button" multiple={false} accept=".pdf" description="PDF, até 10 MB." maxSize={10 * 1024 * 1024} upload={enviarSimulado} className="ts:col-span-2 ts:max-md:col-span-1" />\r
        <div className="ts:col-span-2 ts:flex ts:justify-end ts:gap-8 ts:border-t ts:border-border-subtle ts:pt-16 ts:max-md:col-span-1">\r
          <Button variant="ghost" type="button">Cancelar</Button>\r
          <Button type="submit">Salvar produto</Button>\r
        </div>\r
      </form>\r
    </Card>\r
  );\r
}

<div className="ts:max-w-720"><CadastroDeProduto /></div>`,id:`em-uso`,titulo:`Em uso`,descricao:`Cadastro de produto com fotos (área) e manual (botão).`,children:(0,g.jsx)(`div`,{className:`ts:max-w-720`,children:(0,g.jsx)(b,{})})}),(0,g.jsx)(f,{semCaixa:!0,id:`integracao`,titulo:`Integração`,descricao:`O componente cuida da interface; o app decide para onde o arquivo vai (API própria, S3, Supabase Storage).`,children:(0,g.jsx)(s,{flush:!0,children:(0,g.jsx)(`pre`,{tabIndex:0,role:`region`,"aria-label":`Código de integração do upload`,className:`ts:overflow-x-auto ts:p-16 ts:font-mono ts:text-code ts:text-fg-secondary`,children:`const upload: UploadFn = async (file, { onProgress, signal }) => {
  try {
    return await enviarParaStorage(file, { onProgress, signal });
  } catch (erro) {
    if (erro instanceof DOMException && erro.name === 'AbortError') throw erro;
    throw new Error('Não foi possível enviar o arquivo. Tente novamente.');
  }
};

<FileUpload label="Fotos" accept="image/*" maxSize={5 * 1024 * 1024} upload={upload} onValueChange={setArquivos} />`})})}),(0,g.jsx)(f,{semCaixa:!0,id:`propriedades`,titulo:`Propriedades`,children:(0,g.jsx)(c,{itens:[{nome:`label / description / error / optional`,tipo:`—`,descricao:`Como nos campos. Diga na ajuda os tipos e o tamanho aceitos.`},{nome:`accept / maxSize / maxFiles / multiple`,tipo:`string / bytes / number / boolean`,padrao:`— / — / — / true`,descricao:`Checagem no navegador antes de enviar; o motivo aparece na linha do arquivo. O servidor revalida o conteúdo e o tamanho.`},{nome:`upload`,tipo:`(file, { onProgress, signal }) => Promise<url | void>`,descricao:`Envia um arquivo. Remover ou trocar o arquivo único aborta pelo signal; a mensagem do Error aparece para a pessoa, então traduza falhas de rede para pt-BR.`},{nome:`defaultValue / onValueChange`,tipo:`UploadFile[]`,descricao:`Arquivos que já existem; aviso a cada mudança (status, progresso, url).`},{nome:`variant`,tipo:`'dropzone' | 'button'`,padrao:`'dropzone'`,descricao:`Área de arrastar ou só o botão.`},{nome:`disabled`,tipo:`boolean`,padrao:`false`,descricao:`Desativa escolher e arrastar.`}]})}),(0,g.jsx)(f,{semCaixa:!0,id:`acessibilidade`,titulo:`Teclado e acessibilidade`,children:(0,g.jsx)(_,{itens:[(0,g.jsx)(g.Fragment,{children:`A área é um botão com o rótulo e a instrução no nome; Enter ou Espaço abrem o seletor de arquivos. Arrastar é um atalho, não o único caminho.`}),(0,g.jsx)(g.Fragment,{children:`Cada arquivo tem progresso com nome (“Enviando contrato.pdf”), e botões com o nome do arquivo (“Remover contrato.pdf”, “Tentar de novo: contrato.pdf”).`}),(0,g.jsx)(g.Fragment,{children:`Uma região de status anuncia quando cada arquivo termina ou falha; recusas por limite aparecem também como texto.`}),(0,g.jsx)(g.Fragment,{children:`Erros têm ícone e texto, não só a borda vermelha.`})]})})]})}export{x as UploadPagina};