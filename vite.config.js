import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// No computador, a mesma API da pasta /api roda dentro do Vite (npm run dev)
function localApi() {
  return {
    name: 'lworks-local-api',
    configureServer(server) {
      // Imagens enviadas pelo painel em modo local (o Vite não vê arquivos novos em /public)
      server.middlewares.use('/uploads', async (req, res, next) => {
        const fs = await import('node:fs/promises');
        const file = path.join(path.resolve('public/uploads'), path.basename(decodeURIComponent(req.url.split('?')[0])));
        try {
          const data = await fs.readFile(file);
          const ext = path.extname(file).slice(1).toLowerCase();
          const types = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif', svg: 'image/svg+xml', avif: 'image/avif', mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime' };
          res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
          res.end(data);
        } catch {
          next();
        }
      });

      // O Tessela (public/tessela) é outro site, com rotas próprias: /tessela/docs etc. abrem o index.html dele
      server.middlewares.use('/tessela', async (req, res, next) => {
        if (path.extname(req.url.split('?')[0])) return next();
        const fs = await import('node:fs/promises');
        try {
          res.setHeader('Content-Type', 'text/html');
          res.end(await fs.readFile(path.resolve('public/tessela/index.html')));
        } catch {
          next();
        }
      });

      server.middlewares.use(async (req, res, next) => {
        const route = req.url.split('?')[0].match(/^\/api\/(login|projects|pages|upload|site)$/)?.[1];
        if (!route) return next();
        const handlers = await server.ssrLoadModule('/server/handlers.js');
        handlers[route](req, res);
      });
    }
  };
}

// Cada artigo de Stories ganha um HTML próprio, com título, descrição e imagem de prévia
// (og:image em public/og/<slug>.jpg) para o link aparecer certo no LinkedIn e afins
function storyPreviews() {
  const SITE = 'https://lworks.vercel.app';
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const cut = (s, n) => (s.length > n ? s.slice(0, s.lastIndexOf(' ', n)) + '…' : s);

  return {
    name: 'lworks-story-previews',
    apply: 'build',
    async closeBundle() {
      const fs = await import('node:fs/promises');
      const { pathToFileURL } = await import('node:url');
      const { articles } = await import(pathToFileURL(path.resolve('src/data/stories.js')).href);
      const html = await fs.readFile(path.resolve('dist/index.html'), 'utf8');

      for (const a of articles) {
        const title = esc(`${a.title} — LWORKS®`);
        const description = esc(cut(a.lead?.[0] ?? '', 160));
        const page = html
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
          .replace(/(<meta property="og:image" content=")[^"]*/, `$1${SITE}/og/${a.slug}.jpg`)
          .replace(/(<meta property="og:type" content=")[^"]*/, '$1article');
        const dir = path.resolve('dist/stories', a.slug);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(path.join(dir, 'index.html'), page);
      }
    }
  };
}

export default defineConfig(({ mode }) => {
  // Variáveis do .env.local (ex.: ADMIN_PASSWORD) ficam disponíveis para a API local
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), localApi(), storyPreviews()],
    resolve: {
      alias: { '@': path.resolve(import.meta.dirname, 'src') }
    },
    server: { port: 5173, watch: { ignored: ['**/.data/**'] } }
  };
});
