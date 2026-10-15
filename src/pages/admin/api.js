// Comunicação do painel com a API (/api/login, /api/projects, /api/upload)
const KEY = 'lworks-admin-token';

export const getToken = () => {
  try { return localStorage.getItem(KEY) || ''; } catch { return ''; }
};
const setToken = (t) => {
  try { t ? localStorage.setItem(KEY, t) : localStorage.removeItem(KEY); } catch { /* sem storage */ }
};

async function request(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}`, ...options.headers }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || 'Algo deu errado'), { status: res.status });
  return data;
}

export async function login(password) {
  const data = await request('/api/login', { method: 'POST', body: JSON.stringify({ password }) });
  setToken(data.token);
  return data;
}

export const logout = () => setToken('');

// { ok, storage }
export const session = () => request('/api/login');

export const saveCategories = (categories) =>
  request('/api/projects', { method: 'PUT', body: JSON.stringify({ categories }) });

// Envia um arquivo e devolve a URL pública dele
export async function uploadFile(file, storage) {
  if (storage === 'blob') {
    const { upload } = await import('@vercel/blob/client');
    const safe = file.name.toLowerCase().replace(/[^a-z0-9.\-_]+/g, '-');
    const blob = await upload(`works/${safe}`, file, {
      access: 'public',
      handleUploadUrl: '/api/upload',
      clientPayload: getToken()
    });
    return blob.url;
  }
  const res = await fetch(`/api/upload?name=${encodeURIComponent(file.name)}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': file.type || 'application/octet-stream' },
    body: file
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Falha no upload');
  return data.url;
}

export const isVideo = (url = '') => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);
