import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import DemoGate from '@/components/DemoGate';
import { useTitle } from '@/lib/useTitle';
import { articles, RATIOS } from '@/data/stories';

// Tela do painel numa moldura de navegador
const Desktop = ({ src, alt, onOpen }) => (
  <button type="button" className="screen screen--desktop" onClick={onOpen} aria-label={`Ampliar: ${alt}`}>
    <span className="screen__bar" aria-hidden="true"><i /><i /><i /></span>
    <img src={src} alt={alt} loading="lazy" style={{ aspectRatio: RATIOS.DESKTOP }} />
  </button>
);

// Tela do celular numa moldura de aparelho
const Phone = ({ src, alt, onOpen }) => (
  <button type="button" className="screen screen--phone" onClick={onOpen} aria-label={`Ampliar: ${alt}`}>
    <img src={src} alt={alt} loading="lazy" style={{ aspectRatio: RATIOS.PHONE }} />
  </button>
);

export default function Story() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const [open, setOpen] = useState(null); // índice da imagem aberta em tela cheia

  useTitle(article && `${article.title.split(':')[0]} — Stories`);
  useEffect(() => { window.scrollTo(0, 0); setOpen(null); }, [slug]);

  if (!article) return <Navigate to="/stories" replace />;

  // Todas as telas do artigo, em ordem, para a tela cheia
  const gallery = [
    { src: article.hero.desktop, ratio: RATIOS.DESKTOP },
    { src: article.hero.phone, ratio: RATIOS.PHONE },
    ...article.blocks.flatMap((b) =>
      b.type === 'desktop' ? [{ src: b.src, alt: b.alt, ratio: RATIOS.DESKTOP }]
        : b.type === 'phones' ? b.items.map((p) => ({ ...p, ratio: RATIOS.PHONE }))
          : []
    )
  ];
  let g = 2; // as duas primeiras são as do topo
  let step = 0;
  const delay = () => ({ '--delay': `${0.1 + step++ * 0.08}s` });

  return (
    <>
      <main className="container article" key={slug}>
        <Link to="/stories" className="project__back reveal" style={delay()}>← Stories</Link>

        <header className="article__head">
          <p className="article__meta reveal" style={delay()}>
            {article.kicker} · {article.date} · {article.readTime}
          </p>
          <h1 className="article__title reveal" style={delay()}>{article.title}</h1>
        </header>

        <div className="article__hero reveal" style={delay()}>
          <Desktop src={article.hero.desktop} alt="Painel do restaurante" onOpen={() => setOpen(0)} />
          <Phone src={article.hero.phone} alt="Cardápio no celular" onOpen={() => setOpen(1)} />
        </div>

        <div className="article__intro">
          <div className="article__lead reveal" style={delay()}>
            {article.lead.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="article__facts reveal" style={delay()}>
            {article.facts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
        </div>

        {article.blocks.map((block, b) => {
          if (block.type === 'text') {
            return (
              <section className="article__text" key={b}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.body.map((p, i) => <p key={i}>{p}</p>)}
              </section>
            );
          }
          if (block.type === 'quote') {
            return <blockquote className="article__quote" key={b}>{block.text}</blockquote>;
          }
          if (block.type === 'desktop') {
            const index = g++;
            return (
              <figure className="article__figure" key={b}>
                <Desktop src={block.src} alt={block.alt} onOpen={() => setOpen(index)} />
                {block.caption && <figcaption>{block.caption}</figcaption>}
              </figure>
            );
          }
          return (
            <figure className="article__figure" key={b}>
              <div className="article__phones">
                {block.items.map((p) => {
                  const index = g++;
                  return <Phone key={p.src} src={p.src} alt={p.alt} onOpen={() => setOpen(index)} />;
                })}
              </div>
              {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
          );
        })}

        {article.demo && (
          <section className="article__demo">
            <div>
              <h2>Veja funcionando</h2>
              <p>O painel e o cardápio navegáveis, com o restaurante fictício deste artigo.</p>
            </div>
            <DemoGate demo={article.demo} />
          </section>
        )}

        <aside className="article__end">
          <p>Tem um produto que precisa sair do papel com esse mesmo cuidado?</p>
          <Link to="/contact">Vamos conversar →</Link>
        </aside>
      </main>

      <Footer />

      {open !== null && (
        <Lightbox images={gallery} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
