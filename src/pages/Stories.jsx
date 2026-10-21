import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import CategoryNav from '@/components/CategoryNav';
import { useTitle } from '@/lib/useTitle';
import { articles } from '@/data/stories';

// Lista de artigos: um card por artigo, com a prévia do painel e do celular
export default function Stories() {
  useTitle('Stories');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <main className="container category journal">
        <h1 className="category__title">Stories</h1>
        <CategoryNav />

        <ul className="journal__list">
          {articles.map((a, i) => (
            <li key={a.slug} className="reveal" style={{ '--delay': `${0.25 + i * 0.08}s` }}>
              <Link to={`/stories/${a.slug}`} className="story-card">
                <div className="story-card__media" aria-hidden="true">
                  <img className="story-card__desktop" src={a.hero.desktop} alt="" loading="lazy" />
                  <img className="story-card__phone" src={a.hero.phone} alt="" loading="lazy" />
                </div>

                <div className="story-card__body">
                  <p className="story-card__meta">
                    <span className="story-card__tag">{a.kicker}</span>
                    {a.date} · {a.readTime}
                  </p>
                  <h2 className="story-card__title">{a.title}</h2>
                  <p className="story-card__lead">{a.lead[0]}</p>

                  <div className="story-card__foot">
                    <p className="story-card__client">{a.facts.find((f) => f.label === 'Produto')?.value}</p>
                    <span className="story-card__more">Ler artigo <span aria-hidden="true">→</span></span>
                  </div>
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
