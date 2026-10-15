import { useEffect } from 'react';

// Título da aba: "TôAqui — Branding · LWORKS®"
export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · LWORKS®` : 'Lucas Cartaxo — LWORKS®';
  }, [title]);
}
