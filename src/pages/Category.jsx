import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useProjects } from '@/lib/projectsStore';
import Footer from '@/components/Footer';
import ClientGroups from '@/components/ClientGroups';
import Masonry from '@/components/Masonry';
import CategoryNav from '@/components/CategoryNav';
import Lightbox from '@/components/Lightbox';
import { useTitle } from '@/lib/useTitle';
import { useImageRatios, ratioOf, mediaSrcs } from '@/lib/useImageRatios';
import { captionOf } from '@/data/projects';

export default function Category() {
  const { id } = useParams();
  const { categories, loaded } = useProjects();
  const category = categories.find((c) => c.id === id);
  const [open, setOpen] = useState(null); // layout 'gallery': { item, index }

  // Proporções das imagens/vídeos abertos em tela cheia (layout 'gallery')
  const galleryMedia = category?.layout === 'gallery' ? category.items.flatMap((i) => i.posts || []) : [];
  const ratios = useImageRatios(galleryMedia.flatMap(mediaSrcs));

  useTitle(category?.title || category?.label);
  useEffect(() => { window.scrollTo(0, 0); setOpen(null); }, [id]);

  if (!category && !loaded) return null;
  if (!category) return <Navigate to="/" replace />;

  const cards = category.items.map((item, i) => {
    const card = { ...item, caption: captionOf(category, item) };
    if (category.layout === 'gallery') {
      // Sem página interna: a capa é a 1ª imagem e o clique abre todas em tela cheia
      const first = item.posts?.[0] || {};
      return {
        ...card,
        src: item.src ?? first.src,
        video: item.src ? undefined : first.video,
        ratio: item.ratio ?? first.ratio,
        onClick: item.posts?.length ? () => setOpen({ item: i, index: 0 }) : undefined
      };
    }
    return { ...card, href: item.slug ? `/projects/${category.id}/${item.slug}` : null };
  });

  const openItem = open && category.items[open.item];

  return (
    <>
      <main className="container category" key={id}>
        <h1 className="category__title">{category.title || category.label}</h1>
        <CategoryNav />

        {category.items.length === 0 ? (
          <p className="category__empty">Nada por aqui ainda.</p>
        ) : category.layout === 'clients' ? (
          <ClientGroups category={category} />
        ) : (
          <Masonry items={cards} />
        )}
      </main>

      <Footer />

      {openItem && (
        <Lightbox
          images={openItem.posts.map((p) => ({ ...p, ratio: ratioOf(p, ratios) }))}
          index={open.index}
          onChange={(index) => setOpen((o) => ({ ...o, index }))}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
