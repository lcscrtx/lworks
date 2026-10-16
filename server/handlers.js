import { checkPassword, createToken, verifyToken, tokenFrom } from './auth.js';
import { mode, readProjects, writeProjects, readPages, writePages, saveLocalFile, saveFile } from './storage.js';

/*
  Handlers da API, escritos com Node puro para rodar igual
  na Vercel (pasta /api) e no computador (middleware do Vite).
*/
const MAX_UPLOAD = 50 * 1024 * 1024; // 50 MB (upload local)

const send = (res, status, data) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
};

async function readRaw(req, limit = MAX_UPLOAD) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) throw Object.assign(new Error('Arquivo grande demais'), { status: 413 });
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

async function readJson(req) {
  if (req.body !== undefined && req.body !== null && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body; // já interpretado pela Vercel
  }
  if (typeof req.body === 'string') return JSON.parse(req.body || '{}');
  const raw = await readRaw(req, 5 * 1024 * 1024);
  return JSON.parse(raw.toString('utf8') || '{}');
}

const isAuthed = (req) => verifyToken(tokenFrom(req));

// POST /api/login  { password }  →  { token }
// GET  /api/login               →  { ok, storage } (verifica a sessão atual)
export async function login(req, res) {
  if (req.method === 'GET') return send(res, 200, { ok: isAuthed(req), storage: mode() });
  if (req.method !== 'POST') return send(res, 405, { error: 'Método não permitido' });
  if (!process.env.ADMIN_PASSWORD) {
    return send(res, 500, { error: 'Defina a variável ADMIN_PASSWORD para usar o painel.' });
  }
  const { password } = await readJson(req);
  if (!checkPassword(password)) {
    await new Promise((r) => setTimeout(r, 600)); // freia tentativas
    return send(res, 401, { error: 'Senha incorreta' });
  }
  send(res, 200, { token: createToken(), storage: mode() });
}

// GET /api/projects → { categories } | { categories: null }
// PUT /api/projects { categories } (precisa estar logado)
export async function projects(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await readProjects();
      return send(res, 200, { categories: data?.categories ?? null, updatedAt: data?.updatedAt ?? null });
    }
    if (req.method === 'PUT') {
      if (!isAuthed(req)) return send(res, 401, { error: 'Sessão expirada. Entre de novo.' });
      const { categories } = await readJson(req);
      if (!Array.isArray(categories)) return send(res, 400, { error: 'Dados inválidos' });
      const data = { categories, updatedAt: new Date().toISOString() };
      await writeProjects(data);
      return send(res, 200, { ok: true, updatedAt: data.updatedAt });
    }
    send(res, 405, { error: 'Método não permitido' });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: 'Erro ao acessar os dados' });
  }
}

// GET /api/pages → { about, contact } (null enquanto nada foi publicado)
// PUT /api/pages { about, contact } (precisa estar logado)
export async function pages(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await readPages();
      return send(res, 200, { about: data?.about ?? null, contact: data?.contact ?? null, updatedAt: data?.updatedAt ?? null });
    }
    if (req.method === 'PUT') {
      if (!isAuthed(req)) return send(res, 401, { error: 'Sessão expirada. Entre de novo.' });
      const { about, contact } = await readJson(req);
      if (!about || typeof about !== 'object' || !contact || typeof contact !== 'object') {
        return send(res, 400, { error: 'Dados inválidos' });
      }
      const data = { about, contact, updatedAt: new Date().toISOString() };
      await writePages(data);
      return send(res, 200, { ok: true, updatedAt: data.updatedAt });
    }
    send(res, 405, { error: 'Método não permitido' });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: 'Erro ao acessar os dados' });
  }
}

// Upload de imagens e vídeos
// - Vercel (blob): protocolo do @vercel/blob/client (o arquivo vai direto do navegador para o Blob)
// - Local: POST com o arquivo no corpo e ?name=arquivo.jpg
export async function upload(req, res) {
  try {
    if (mode() === 'blob') {
      const { handleUpload } = await import('@vercel/blob/client');
      const body = await readJson(req);
      const result = await handleUpload({
        body,
        request: req,
        onBeforeGenerateToken: async (_pathname, clientPayload) => {
          if (!verifyToken(clientPayload)) throw new Error('Sessão expirada. Entre de novo.');
          return {
            allowedContentTypes: ['image/*', 'video/*'],
            addRandomSuffix: true,
            maximumSizeInBytes: 200 * 1024 * 1024
          };
        },
        onUploadCompleted: async () => {}
      });
      return send(res, 200, result);
    }

    if (req.method !== 'POST') return send(res, 405, { error: 'Método não permitido' });
    if (!isAuthed(req)) return send(res, 401, { error: 'Sessão expirada. Entre de novo.' });
    const name = new URL(req.url, 'http://local').searchParams.get('name') || 'arquivo';
    const url = await saveLocalFile(name, await readRaw(req));
    send(res, 200, { url });
  } catch (err) {
    console.error(err);
    send(res, err.status || 400, { error: err.message || 'Falha no upload' });
  }
}

/*
  Sites ao vivo (página Development)
  Muitos sites proíbem aparecer dentro de outro site (X-Frame-Options / CSP frame-ancestors).
  Para esses, o projeto mostra uma captura da página inteira, rolável, dentro da moldura.
*/
const normalizeUrl = (raw) => {
  let url = String(raw || '').trim();
  if (!url) return null;
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    const u = new URL(url);
    return /^https?:$/.test(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
};

// true = pode ir num iframe, false = bloqueia, null = não deu para saber (site fora do ar etc.)
async function canEmbed(url, ourHost) {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LWORKS preview)' },
      signal: AbortSignal.timeout(8000)
    });
    res.body?.cancel?.();
    const xfo = (res.headers.get('x-frame-options') || '').toLowerCase();
    if (xfo.includes('deny') || xfo.includes('sameorigin') || xfo.includes('allow-from')) return false;
    const csp = res.headers.get('content-security-policy') || '';
    const fa = csp.split(';').map((d) => d.trim()).find((d) => d.toLowerCase().startsWith('frame-ancestors'));
    if (fa) {
      const sources = fa.split(/\s+/).slice(1);
      return sources.some((s) => s === '*' || s === 'https:' || (ourHost && s.includes(ourHost)));
    }
    return true;
  } catch {
    return null;
  }
}

// Captura da página inteira (serviço gratuito Microlink), guardada junto das outras imagens
async function captureSite(url) {
  const api = new URL('https://api.microlink.io/');
  api.search = new URLSearchParams({
    url, screenshot: 'true', fullPage: 'true', meta: 'false',
    'viewport.width': '1440', 'viewport.height': '900', waitUntil: 'networkidle2'
  });
  const res = await fetch(api, { signal: AbortSignal.timeout(45000) });
  const data = await res.json().catch(() => ({}));
  const shotUrl = data?.data?.screenshot?.url;
  if (!res.ok || !shotUrl) throw new Error(data?.message || 'Não foi possível capturar o site');
  const img = await fetch(shotUrl);
  if (!img.ok) throw new Error('Não foi possível baixar a captura');
  const host = new URL(url).hostname.replace(/^www\./, '').replace(/[^a-z0-9.-]+/gi, '-');
  return saveFile(`site-${host}.png`, Buffer.from(await img.arrayBuffer()), 'image/png');
}

// GET  /api/site?url=…       → { embeddable }                (público)
// POST /api/site { url, capture } → { url, embeddable, shot? } (precisa estar logado)
export async function site(req, res) {
  try {
    const ourHost = (req.headers['x-forwarded-host'] || req.headers.host || '').split(':')[0];
    if (req.method === 'GET') {
      const url = normalizeUrl(new URL(req.url, 'http://local').searchParams.get('url'));
      if (!url) return send(res, 400, { error: 'Endereço inválido' });
      const embeddable = await canEmbed(url, ourHost);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
      return res.end(JSON.stringify({ embeddable }));
    }
    if (req.method !== 'POST') return send(res, 405, { error: 'Método não permitido' });
    if (!isAuthed(req)) return send(res, 401, { error: 'Sessão expirada. Entre de novo.' });
    const body = await readJson(req);
    const url = normalizeUrl(body.url);
    if (!url) return send(res, 400, { error: 'Endereço inválido' });
    const embeddable = await canEmbed(url, ourHost);
    const result = { url, embeddable };
    if (body.capture || embeddable === false) {
      try {
        result.shot = await captureSite(url);
      } catch (err) {
        result.shotError = err.message;
      }
    }
    send(res, 200, result);
  } catch (err) {
    console.error(err);
    send(res, 500, { error: 'Erro ao verificar o site' });
  }
}
