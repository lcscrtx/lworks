# LWORKS® — Portfólio de Lucas Cartaxo

React + Vite. Projetos cadastrados pelo painel `/admin`, guardados no **Vercel Blob**.

## Rodar no computador

```bash
npm install
cp .env.example .env.local   # defina ADMIN_PASSWORD
npm run dev                  # http://localhost:5173  ·  painel em /admin
```

No computador, o painel salva em arquivos locais (`.data/` e `public/uploads/`), que não vão para o GitHub.

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project** → importe o repositório (o framework Vite é detectado sozinho).
3. Em **Storage → Create → Blob**, crie um Blob Store e conecte ao projeto.
   Isso cria a variável `BLOB_READ_WRITE_TOKEN` automaticamente.
4. Em **Settings → Environment Variables**, adicione `ADMIN_PASSWORD` com a sua senha.
5. Faça um novo deploy (**Deployments → Redeploy**) para as variáveis valerem.
6. Abra `seu-site.vercel.app/admin`, entre com a senha e cadastre os projetos.

Cada "Salvar e publicar" atualiza o site na hora — não precisa de novo deploy.

## Onde fica cada coisa

| O quê | Onde |
| --- | --- |
| Projetos (conteúdo) | Painel `/admin` → Vercel Blob (`data/projects.json`) |
| Imagens e vídeos dos projetos | Painel `/admin` → Vercel Blob (`works/…`) |
| Projetos de exemplo (aparecem até a 1ª publicação) | `src/data/projects.js` |
| Textos de About e experiências | `src/data/about.js` |
| Texto da home e contatos | `src/pages/Home.jsx`, `src/pages/Contact.jsx` |
| API (login, projetos, upload) | `api/` e `server/` |
