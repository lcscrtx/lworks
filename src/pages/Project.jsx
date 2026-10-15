import { Fragment, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useCategories } from '@/lib/projectsStore';
import { useImageRatios, ratioOf } from '@/lib/useImageRatios';
import { useTitle } from '@/lib/useTitle';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

// '\n' dentro de um parágrafo vira quebra de linha
const Lines = ({ text }) =>
  text.split('\n').map((line, i) => (
    <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
  ));

export default function Project() {
  const { id, slug } = useParams();
  const categories = useCategories();
  const category = categories.find((c) => c.id === id);
  const list = category ? category.items.filter((p) => p.slug) : [];
  const at = list.findIndex((p) => p.slug === slug);
  const project = list[at];
  const prev = list.length > 1 ? list[(at - 1 + list.length) % list.length] : null;
  const next = list.length > 1 ? list[(at + 1) % list.length] : null;

  const [open, setOpen] = useState(null); // índice da imagem aberta em tela cheia

  // Todas as imagens da galeria, em ordem (para a tela cheia)
  // Sites ao vivo (embed) não entram na tela cheia
  const gallery = (project?.blocks || []).flatMap((b) => (b.type === 'images' ? b.items.filter((i) => !i.embed) : []));
  const ratios = useImageRatios(
    [...gallery.map((i) => i.src), prev?.src, next?.src].filter(Boolean)
  );

  useTitle(project && `${project.title} — ${category.singular}`);
  useEffect(() => { window.scrollTo(0, 0); setOpen(null); }, [id, slug]);

  if (!project) return <Navigate to={category ? `/projects/${id}` : '/'} replace />;

  let step = 0; // ordem da animação de entrada
  const delay = () => ({ '--delay': `${0.1 + step++ * 0.08}s` });
  let g = 0; // índice da imagem dentro da galeria

  return (
    <>
      <main className="container project" key={slug}>
        <Link to={`/projects/${category.id}`} className="project__back reveal" style={delay()}>
          ← {category.label}
        </Link>

        <header className="project__head">
          <h1 className="project__title reveal" style={delay()}>{project.title}</h1>

          <div className="project__intro reveal" style={delay()}>
            {project.intro?.map((p, i) => <p key={i}><Lines text={p} /></p>)}
          </div>

          <dl className="project__meta reveal" style={delay()}>
            <dd>{category.singular}</dd>
            {project.client && <div><dt>Cliente, </dt><dd className="ink">{project.client}</dd></div>}
            {project.year && <div><dt>Ano, </dt><dd className="ink">{project.year}</dd></div>}

            {project.tools?.length > 0 && (
              <ul className="ink">{project.tools.map((t) => <li key={t}>{t}</li>)}</ul>
            )}

            {project.credits?.length > 0 && (
              <div className="project__credits">
                {project.credits.map((c) => (
                  <div key={c.role + c.name}><dt>{c.role}, </dt><dd className="ink">{c.name}</dd></div>
                ))}
              </div>
            )}

            {project.link && (
              <a className="project__link ink" href={project.link.url} target="_blank" rel="noopener">
                {project.link.label} ↗
              </a>
            )}
          </dl>
        </header>

        {project.blocks?.map((block, b) =>
          block.type === 'text' ? (
            <div className="project__text reveal" style={delay()} key={b}>
              {block.body.map((p, i) => <p key={i}><Lines text={p} /></p>)}
            </div>
          ) : (
            <div className={`project__gallery${block.items.every((i) => i.full) ? ' is-stack' : ''}`} key={b}>
              {block.items.map((img, i) => {
                // Site ao vivo: o site real dentro de uma moldura de navegador
                if (img.embed) {
                  return (
                    <div
                      className={`project__media project__site reveal${img.full ? ' is-full' : ''}`}
                      style={{ ...delay(), aspectRatio: img.ratio || 952 / 615 }}
                      key={i}
                    >
                      <div className="site-bar">
                        <span className="site-bar__dots" aria-hidden="true"><i /><i /><i /></span>
                        <span className="site-bar__url">{img.embed.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
                        <a href={img.embed} target="_blank" rel="noopener">Abrir ↗</a>
                      </div>
                      <iframe
                        src={img.embed}
                        title={`Site — ${project.title}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    </div>
                  );
                }
                const index = g++;
                return (
                  <button
                    type="button"
                    className={`project__media reveal${img.full ? ' is-full' : ''}`}
                    style={{ ...delay(), aspectRatio: ratioOf(img, ratios) }}
                    onClick={() => setOpen(index)}
                    aria-label={`Ampliar imagem ${index + 1}`}
                    key={i}
                  >
                    {img.video ? (
                      <video src={img.video} poster={img.src} autoPlay muted loop playsInline />
                    ) : (
                      img.src && <img src={img.src} alt={img.alt || project.title} loading="lazy" />
                    )}
                  </button>
                );
              })}
            </div>
          )
        )}

        {prev && next && (
          <nav className="project__pager" aria-label="Outros projetos">
            {[['prev', '← Projeto anterior', prev], ['next', 'Próximo projeto →', next]].map(([key, label, p]) => (
              <Link to={`/projects/${category.id}/${p.slug}`} className={`pager pager--${key}`} key={key}>
                <div className="pager__thumb" style={{ aspectRatio: ratioOf(p, ratios) }}>
                  {p.src && <img src={p.src} alt="" loading="lazy" />}
                </div>
                <p className="pager__label">
                  {label}
                  <span>{p.title}</span>
                </p>
              </Link>
            ))}
          </nav>
        )}
      </main>

      <Footer />

      {open !== null && (
        <Lightbox
          images={gallery.map((img) => ({ ...img, ratio: ratioOf(img, ratios) }))}
          index={open}
          onChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
