import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import DemoGate from '@/components/DemoGate';
import GradientASCII from '@/components/GradientASCII';
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

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <rect x="2" y="5.5" width="8" height="5.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function Story() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const [open, setOpen] = useState(null); // índice da imagem aberta em tela cheia

  useTitle(article && `${article.title.split(':')[0]} — Stories`);
  useEffect(() => { window.scrollTo(0, 0); setOpen(null); }, [slug]);

  if (!article) return <Navigate to="/stories" replace />;

  const { hero, demo } = article;

  // Todas as telas do artigo, em ordem, para a tela cheia
  const gallery = [
    { src: hero.desktop, alt: hero.desktopAlt, ratio: RATIOS.DESKTOP },
    ...(hero.phone ? [{ src: hero.phone, alt: hero.phoneAlt, ratio: RATIOS.PHONE }] : []),
    ...article.blocks.flatMap((b) =>
      b.type === 'desktop' ? [{ src: b.src, alt: b.alt, ratio: RATIOS.DESKTOP }]
        : b.type === 'screens' ? b.items.map((s) => ({ ...s, ratio: RATIOS.DESKTOP }))
          : b.type === 'phones' ? b.items.map((p) => ({ ...p, ratio: RATIOS.PHONE }))
            : []
    )
  ];
  let g = hero.phone ? 2 : 1; // as imagens do topo vêm primeiro
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

        <div className={`article__hero reveal${hero.phone ? '' : ' is-solo'}`} style={delay()}>
          <Desktop src={hero.desktop} alt={hero.desktopAlt} onOpen={() => setOpen(0)} />
          {hero.phone && <Phone src={hero.phone} alt={hero.phoneAlt} onOpen={() => setOpen(1)} />}
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
          if (block.type === 'screens') {
            return (
              <figure className="article__figure" key={b}>
                <div className="article__screens">
                  {block.items.map((s) => {
                    const index = g++;
                    return (
                      <div className="article__screen" key={s.src}>
                        <Desktop src={s.src} alt={s.alt} onOpen={() => setOpen(index)} />
                        {s.label && <p>{s.label}</p>}
                      </div>
                    );
                  })}
                </div>
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

        {demo && (
          <section className="demo-banner" aria-labelledby="demo-banner-title">
            <div className="demo-banner__bg" aria-hidden="true">
              <GradientASCII cellSize={12} />
            </div>

            <div className="demo-banner__copy">
              <p className="demo-banner__label"><i aria-hidden="true" />{demo.label}</p>
              <h2 id="demo-banner-title" className="demo-banner__title">{demo.title}</h2>
              <p className="demo-banner__text">
                {demo.text.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
              </p>
              <div className="demo-banner__actions">
                {demo.password ? (
                  <>
                    <DemoGate demo={demo} className="demo-banner__cta" />
                    <span className="demo-banner__note"><LockIcon />Acesso com senha</span>
                  </>
                ) : (
                  <>
                    <a className="demo-banner__cta" href={demo.href} target="_blank" rel="noopener">
                      {demo.cta} <span aria-hidden="true">→</span>
                    </a>
                    {demo.note && <span className="demo-banner__note">{demo.note}</span>}
                  </>
                )}
              </div>
            </div>

            <div className={`demo-banner__visual${demo.preview.phone ? '' : ' is-solo'}`} aria-hidden="true">
              <img className="demo-banner__desktop" src={demo.preview.desktop} alt="" loading="lazy" />
              {demo.preview.phone && <img className="demo-banner__phone" src={demo.preview.phone} alt="" loading="lazy" />}
            </div>
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
