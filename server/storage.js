import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

/*
  Onde os dados e as imagens ficam guardados:
  - Na Vercel (com BLOB_READ_WRITE_TOKEN): Vercel Blob
  - No computador (npm run dev): arquivos locais em .data/ e public/uploads/
*/
export const mode = () => (process.env.BLOB_READ_WRITE_TOKEN ? 'blob' : 'local');

const LOCAL_UPLOADS = path.resolve('public/uploads');

// Cada conjunto de dados é um JSON: data/<nome>.json (Blob) ou .data/<nome>.json (local)
const blobPath = (name) => `data/${name}.json`;
const localPath = (name) => path.resolve(`.data/${name}.json`);

async function readData(name) {
  if (mode() === 'blob') {
    const { list } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: blobPath(name), limit: 1 });
    if (!blobs.length) return null;
    const res = await fetch(`${blobs[0].url}?v=${Date.now()}`, { cache: 'no-store' });
    return res.ok ? res.json() : null;
  }
  try {
    return JSON.parse(await fs.readFile(localPath(name), 'utf8'));
  } catch {
    return null;
  }
}

async function writeData(name, data) {
  const json = JSON.stringify(data, null, 2);
  if (mode() === 'blob') {
    const { put } = await import('@vercel/blob');
    await put(blobPath(name), json, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60
    });
    return;
  }
  await fs.mkdir(path.dirname(localPath(name)), { recursive: true });
  await fs.writeFile(localPath(name), json);
}

export const readProjects = () => readData('projects');
export const writeProjects = (data) => writeData('projects', data);

// Textos e imagens das páginas About e Contact
export const readPages = () => readData('pages');
export const writePages = (data) => writeData('pages', data);

// Upload local (só no computador). Na Vercel o navegador envia direto para o Blob.
export async function saveLocalFile(name, buffer) {
  const safe = name.toLowerCase().replace(/[^a-z0-9.\-_]+/g, '-').slice(-80);
  const file = `${crypto.randomBytes(4).toString('hex')}-${safe}`;
  await fs.mkdir(LOCAL_UPLOADS, { recursive: true });
  await fs.writeFile(path.join(LOCAL_UPLOADS, file), buffer);
  return `/uploads/${file}`;
}
