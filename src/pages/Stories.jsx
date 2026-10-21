import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { useTitle } from '@/lib/useTitle';
import { articles } from '@/data/stories';

// Lista de artigos: capa, legenda e título
export default function Stories() {
  useTitle('Stories');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <main className="container category journal">
        <h1 className="category__title">Stories</h1>
        <p className="journal__intro reveal" style={{ '--delay': '.18s' }}>
          Bastidores dos projetos: o problema, as decisões e o que ficou de cada um.
        </p>

        <ul className="journal__list">
          {articles.map((a, i) => (
            <li key={a.slug} className="reveal" style={{ '--delay': `${0.25 + i * 0.08}s` }}>
              <Link to={`/stories/${a.slug}`} className="journal-card">
                <div className="journal-card__media">
                  <img src={a.cover} alt="" loading="lazy" />
                </div>
                <div className="journal-card__text">
                  <p className="journal-card__meta">{a.kicker} · {a.date} · {a.readTime}</p>
                  <h2 className="journal-card__title">{a.title}</h2>
                  <p className="journal-card__lead">{a.lead[0]}</p>
                  <span className="journal-card__more">Ler artigo →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
