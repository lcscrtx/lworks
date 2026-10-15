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

      server.middlewares.use(async (req, res, next) => {
        const route = req.url.split('?')[0].match(/^\/api\/(login|projects|upload)$/)?.[1];
        if (!route) return next();
        const handlers = await server.ssrLoadModule('/server/handlers.js');
        handlers[route](req, res);
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  // Variáveis do .env.local (ex.: ADMIN_PASSWORD) ficam disponíveis para a API local
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react(), localApi()],
    resolve: {
      alias: { '@': path.resolve(import.meta.dirname, 'src') }
    },
    server: { port: 5173, watch: { ignored: ['**/.data/**'] } }
  };
});
