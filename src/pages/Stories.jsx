import { useEffect } from 'react';
import Footer from '@/components/Footer';
import CategoryNav from '@/components/CategoryNav';
import Masonry from '@/components/Masonry';
import { useTitle } from '@/lib/useTitle';
import { articles } from '@/data/stories';

// Lista de artigos na mesma grade de Works: capa, legenda cinza e título
export default function Stories() {
  useTitle('Stories');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const items = articles.map((a) => ({
    key: a.slug,
    title: a.title.split(':')[0],
    caption: a.kicker,
    src: a.cover,
    href: `/stories/${a.slug}`
  }));

  return (
    <>
      <main className="container category">
        <h1 className="category__title">Stories</h1>
        <CategoryNav />
        <Masonry items={items} />
      </main>

      <Footer />
    </>
  );
}
