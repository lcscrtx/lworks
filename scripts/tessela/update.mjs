// Atualiza a página do Tessela servida em /tessela (public/tessela).
// Baixa (ou atualiza) o repositório shiftlabss/tessela em .tessela/, aplica o ajuste de
// subcaminho (base-path.patch), compila o catálogo com base /tessela/ e copia o resultado.
// Uso: node scripts/tessela/update.mjs   (precisa de git e pnpm, e acesso ao repositório)
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '../..');
const repo = path.join(raiz, '.tessela');
const patch = path.join(import.meta.dirname, 'base-path.patch');
const catalogo = path.join(repo, 'apps/catalogo');
const destino = path.join(raiz, 'public/tessela');

const rodar = (cmd, args, cwd = raiz) => execFileSync(cmd, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' });

if (existsSync(repo)) {
  rodar('git', ['checkout', '--', '.'], repo);
  rodar('git', ['pull', '--ff-only'], repo);
} else {
  rodar('git', ['clone', '--depth', '1', 'https://github.com/shiftlabss/tessela.git', repo]);
}

rodar('git', ['apply', patch], repo);
rodar('pnpm', ['install'], repo);
rodar('pnpm', ['exec', 'vite', 'build', '--base=/tessela/'], catalogo);

rmSync(destino, { recursive: true, force: true });
// O registro do shadcn (dist/r) tem endereço próprio; não precisa ir para o portfólio.
cpSync(path.join(catalogo, 'dist'), destino, { recursive: true, filter: (f) => !f.startsWith(path.join(catalogo, 'dist', 'r')) });
console.log('Tessela atualizado em public/tessela');
