import crypto from 'node:crypto';

/*
  Autenticação simples do painel:
  - ADMIN_PASSWORD (variável de ambiente) é a senha de acesso
  - o login devolve um token assinado que vale 7 dias
*/
const DAY = 24 * 60 * 60 * 1000;

const secret = () => process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || '';
const sign = (value) => crypto.createHmac('sha256', secret()).update(value).digest('hex');

export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD || '';
  if (!expected || typeof password !== 'string') return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function createToken() {
  const expires = String(Date.now() + 7 * DAY);
  return `${expires}.${sign(expires)}`;
}

export function verifyToken(token) {
  if (!secret() || typeof token !== 'string') return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature || Number(expires) < Date.now()) return false;
  const a = Buffer.from(signature);
  const b = Buffer.from(sign(expires));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export const tokenFrom = (req) => (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
