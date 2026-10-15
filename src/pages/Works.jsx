import { useEffect } from 'react';
import { useCategories } from '@/lib/projectsStore';
import Footer from '@/components/Footer';
import Masonry from '@/components/Masonry';
import { useTitle } from '@/lib/useTitle';

/*
  Todos os projetos juntos, intercalando as categorias
  (1º de cada categoria, depois o 2º de cada…) para a grade ficar variada.
*/
function mixAll(categories) {
  const lists = categories.map((c) =>
    c.items.map((item) => ({
      ...item,
      key: `${c.id}-${item.slug || item.title}`,
      caption: c.singular,
      // Social Media não tem página interna: o card leva para a página da categoria
      href: item.slug ? `/projects/${c.id}/${item.slug}` : `/projects/${c.id}`,
      ratio: item.ratio ?? item.posts?.[0]?.ratio,
      src: item.src ?? item.posts?.[0]?.src
    }))
  );
  return Array.from({ length: Math.max(0, ...lists.map((l) => l.length)) })
    .flatMap((_, i) => lists.map((l) => l[i]))
    .filter(Boolean);
}

export default function Works() {
  useTitle('Works');
  const categories = useCategories();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <main className="container category">
        <h1 className="category__title">Works</h1>
        <Masonry items={mixAll(categories)} />
      </main>

      <Footer />
    </>
  );
}
