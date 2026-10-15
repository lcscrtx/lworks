import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

/*
  Onde os dados e as imagens ficam guardados:
  - Na Vercel (com BLOB_READ_WRITE_TOKEN): Vercel Blob
  - No computador (npm run dev): arquivos locais em .data/ e public/uploads/
*/
export const mode = () => (process.env.BLOB_READ_WRITE_TOKEN ? 'blob' : 'local');

const DATA_PATH = 'data/projects.json';
const LOCAL_DATA = path.resolve('.data/projects.json');
const LOCAL_UPLOADS = path.resolve('public/uploads');

export async function readProjects() {
  if (mode() === 'blob') {
    const { list } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: DATA_PATH, limit: 1 });
    if (!blobs.length) return null;
    const res = await fetch(`${blobs[0].url}?v=${Date.now()}`, { cache: 'no-store' });
    return res.ok ? res.json() : null;
  }
  try {
    return JSON.parse(await fs.readFile(LOCAL_DATA, 'utf8'));
  } catch {
    return null;
  }
}

export async function writeProjects(data) {
  const json = JSON.stringify(data, null, 2);
  if (mode() === 'blob') {
    const { put } = await import('@vercel/blob');
    await put(DATA_PATH, json, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 60
    });
    return;
  }
  await fs.mkdir(path.dirname(LOCAL_DATA), { recursive: true });
  await fs.writeFile(LOCAL_DATA, json);
}

// Upload local (só no computador). Na Vercel o navegador envia direto para o Blob.
export async function saveLocalFile(name, buffer) {
  const safe = name.toLowerCase().replace(/[^a-z0-9.\-_]+/g, '-').slice(-80);
  const file = `${crypto.randomBytes(4).toString('hex')}-${safe}`;
  await fs.mkdir(LOCAL_UPLOADS, { recursive: true });
  await fs.writeFile(path.join(LOCAL_UPLOADS, file), buffer);
  return `/uploads/${file}`;
}
