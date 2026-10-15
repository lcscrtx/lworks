import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { categories as fallback } from '@/data/projects';

/*
  Fonte dos projetos do site:
  1. O que foi cadastrado no painel (/api/projects)
  2. Enquanto não há nada cadastrado (ou a API falha), os exemplos de src/data/projects.js
*/
const ProjectsContext = createContext({ categories: fallback, loaded: false, reload: () => {} });

export function ProjectsProvider({ children }) {
  const [state, setState] = useState({ categories: fallback, loaded: false, fromApi: false });

  const reload = useCallback(async () => {
    try {
      const res = await fetch('/api/projects', { cache: 'no-store' });
      const data = res.ok ? await res.json() : null;
      setState(
        data?.categories
          ? { categories: data.categories, loaded: true, fromApi: true }
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
