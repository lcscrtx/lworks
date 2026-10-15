import { useState } from 'react';
import { useImageRatios, ratioOf, mediaSrcs } from '@/lib/useImageRatios';
import Lightbox from '@/components/Lightbox';

/*
  Layout por cliente (Figma: Social Media).
  Cada cliente: legenda + grade 2×2 de posts. Clientes em 2 colunas.
  Clicar num post abre os posts daquele cliente em tela cheia.
*/
export default function ClientGroups({ category }) {
  const posts = category.items.flatMap((c) => c.posts || []);
  const ratios = useImageRatios(posts.flatMap(mediaSrcs));
  const [open, setOpen] = useState(null); // { client, index }

  const openClient = open && category.items[open.client];

  return (
    <>
      <div className="clients-grid">
        {category.items.map((client, c) => (
          <section className="client-group work" style={{ '--delay': `${0.25 + c * 0.08}s` }} key={client.title}>
            <p className="work__caption client-group__caption">
              {category.caption || 'Cliente'}
              <span>{client.title}</span>
            </p>
            <div className="client-group__posts">
              {(client.posts || []).map((post, i) => (
                <button
                  type="button"
                  className="client-group__post"
                  style={{ aspectRatio: ratioOf(post, ratios) }}
                  onClick={() => setOpen({ client: c, index: i })}
                  aria-label={`Ampliar post ${i + 1} de ${client.title}`}
                  key={i}
                >
                  {post.video ? (
                    <video src={post.video} poster={post.src} autoPlay muted loop playsInline />
                  ) : (
                    post.src && <img src={post.src} alt={`${client.title} — post ${i + 1}`} loading="lazy" />
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {openClient && (
        <Lightbox
          images={openClient.posts.map((p) => ({ ...p, ratio: ratioOf(p, ratios) }))}
          index={open.index}
          onChange={(index) => setOpen((o) => ({ ...o, index }))}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
