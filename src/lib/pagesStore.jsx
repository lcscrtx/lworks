import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { about, experience, clients } from '@/data/about';
import { contact } from '@/data/contact';

/*
  Conteúdo das páginas About e Contact:
  1. O que foi publicado no painel (/api/pages)
  2. Enquanto não há nada publicado (ou a API falha), os textos de src/data/about.js e contact.js
*/
export const defaultPages = {
  about: { ...about, experience, clients },
  contact
};

// Campos que faltarem no que foi salvo vêm do padrão
const merge = (saved) => ({
  about: { ...defaultPages.about, ...saved?.about },
  contact: { ...defaultPages.contact, ...saved?.contact }
});

const PagesContext = createContext({ pages: defaultPages, loaded: false, fromApi: false, reload: () => {} });

export function PagesProvider({ children }) {
  const [state, setState] = useState({ pages: defaultPages, loaded: false, fromApi: false });

  const reload = useCallback(async () => {
    try {
      const res = await fetch('/api/pages', { cache: 'no-store' });
      const data = res.ok ? await res.json() : null;
      const fromApi = !!(data?.about || data?.contact);
      setState({ pages: fromApi ? merge(data) : defaultPages, loaded: true, fromApi });
    } catch {
      setState((s) => ({ ...s, loaded: true }));
    }
  }, []);

  useEffect(() => { reload(); }, [reload]);

  return <PagesContext.Provider value={{ ...state, reload }}>{children}</PagesContext.Provider>;
}

export const usePages = () => useContext(PagesContext);
