import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useCategories } from '@/lib/projectsStore';
import Footer from '@/components/Footer';
import ClientGroups from '@/components/ClientGroups';
import Masonry from '@/components/Masonry';
import { useTitle } from '@/lib/useTitle';
import { captionOf } from '@/data/projects';

export default function Category() {
  const { id } = useParams();
  const categories = useCategories();
  const category = categories.find((c) => c.id === id);

  useTitle(category?.label);
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!category) return <Navigate to="/" replace />;

  return (
    <>
      <main className="container category" key={id}>
        <h1 className="category__title">{category.label}</h1>

        {category.items.length === 0 ? (
          <p className="category__empty">Nada por aqui ainda.</p>
        ) : category.layout === 'clients' ? (
          <ClientGroups category={category} />
        ) : (
          <Masonry
            items={category.items.map((item) => ({
              ...item,
              caption: captionOf(category, item),
              href: item.slug ? `/projects/${category.id}/${item.slug}` : null
            }))}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
