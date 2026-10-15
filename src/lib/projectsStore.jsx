import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { categories as fallback } from '@/data/projects';

/*
  Fonte dos projetos do site:
  1. O que foi cadastrado no painel (/api/projects)
  2. Enquanto não há nada cadastrado (ou a API falha), os exemplos de src/data/projects.js
*/
const ProjectsContext = createContext({ categories: fallback, loaded: false, reload: () => {} });

// Categorias novas no código (ex.: WIP) entram também nos dados já publicados, vazias,
// na mesma ordem do código. As configurações (nome, layout…) vêm sempre do código.
function withAllCategories(saved) {
  return fallback.map((base) => {
    const found = saved.find((c) => c.id === base.id);
    return found ? { ...found, label: base.label, title: base.title, singular: base.singular, layout: base.layout, tagged: base.tagged, caption: base.caption } : { ...base, items: [] };
  });
}

export function ProjectsProvider({ children }) {
  const [state, setState] = useState({ categories: fallback, loaded: false, fromApi: false });

  const reload = useCallback(async () => {
    try {
      const res = await fetch('/api/projects', { cache: 'no-store' });
      const data = res.ok ? await res.json() : null;
      setState(
        data?.categories
          ? { categories: withAllCategories(data.categories), loaded: true, fromApi: true }
          : { categories: fallback, loaded: true, fromApi: false }
      );
    } catch {
      setState((s) => ({ ...s, loaded: true }));
    }
  }, []);

  useEffect(() => { reload(); }, [reload]);

  return <ProjectsContext.Provider value={{ ...state, reload }}>{children}</ProjectsContext.Provider>;
}

export const useProjects = () => useContext(ProjectsContext);
export const useCategories = () => useContext(ProjectsContext).categories;
