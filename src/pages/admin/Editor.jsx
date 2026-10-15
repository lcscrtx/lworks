import { useRef, useState } from 'react';
import { uploadFile, isVideo } from './api';

/*
  Editor de um projeto.
  - Categorias normais: capa, ficha técnica, textos e blocos (galerias e textos)
  - Social Media (layout 'clients'): nome do cliente e posts
*/

const slugify = (text) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'projeto';

// Parágrafos ↔ texto com linha em branco entre eles
const toText = (paragraphs = []) => paragraphs.join('\n\n');
const toParagraphs = (text) => text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

const move = (list, from, to) => {
  if (to < 0 || to >= list.length) return list;
  const copy = [...list];
  copy.splice(to, 0, copy.splice(from, 1)[0]);
  return copy;
};

// Um arquivo (imagem/vídeo) vira um item de mídia
const mediaFromUrl = (url) => (isVideo(url) ? { video: url } : { src: url });

function Media({ item, className = '' }) {
  if (item.embed) {
    return (
      <div className={`adm-thumb adm-thumb--site ${className}`}>
        <span>Site ao vivo</span>
        <small>{item.embed.replace(/^https?:\/\/(www\.)?/, '')}</small>
      </div>
    );
  }
  const url = item.video || item.src;
  return (
    <div className={`adm-thumb ${className}`} style={{ aspectRatio: item.ratio || undefined }}>
      {item.video ? <video src={item.video} muted loop autoPlay playsInline /> : url ? <img src={url} alt="" /> : null}
    </div>
  );
}

function UploadButton({ label, multiple, onFiles, storage, accept = 'image/*,video/*' }) {
  const input = useRef(null);
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');

  const handle = async (files) => {
    if (!files?.length) return;
    setError('');
    const urls = [];
    try {
      for (let i = 0; i < files.length; i++) {
        setBusy(`Enviando ${i + 1}/${files.length}…`);
        urls.push(await uploadFile(files[i], storage));
      }
      onFiles(urls);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy('');
      if (input.current) input.current.value = '';
    }
  };

  return (
    <div
      className="adm-upload"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); handle(e.dataTransfer.files); }}
    >
      <button type="button" className="adm-btn" disabled={!!busy} onClick={() => input.current?.click()}>
        {busy || label}
      </button>
      <span className="adm-hint">ou arraste {multiple ? 'os arquivos' : 'o arquivo'} aqui</span>
      {error && <span className="adm-error">{error}</span>}
      <input ref={input} type="file" accept={accept} multiple={multiple} hidden onChange={(e) => handle(e.target.files)} />
    </div>
  );
}

// Grade de mídias com reordenar, largura total e remover
function MediaGrid({ items, onChange, allowFull }) {
  return (
    <div className="adm-media-grid">
      {items.map((item, i) => (
        <div className="adm-media" key={`${item.src || item.video || 'ph'}-${i}`}>
          <Media item={item} />
          <div className="adm-media__tools">
            <button type="button" onClick={() => onChange(move(items, i, i - 1))} aria-label="Mover para trás">←</button>
            <button type="button" onClick={() => onChange(move(items, i, i + 1))} aria-label="Mover para frente">→</button>
            {allowFull && (
              <label title="Ocupar a largura inteira">
                <input
                  type="checkbox"
                  checked={!!item.full}
                  onChange={(e) => onChange(items.map((it, j) => (j === i ? { ...it, full: e.target.checked } : it)))}
                />
                Largura total
              </label>
            )}
            <button type="button" className="adm-danger" onClick={() => onChange(items.filter((_, j) => j !== i))}>
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Editor({ category, item, isNew, storage, onSave, onCancel, saving, takenSlugs }) {
  const clients = category.layout === 'clients';
  const [draft, setDraft] = useState(() => ({
    ...item,
    introText: toText(item.intro),
    toolsText: (item.tools || []).join(', ')
  }));
  const [error, setError] = useState('');
  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const blocks = draft.blocks || [];
  const setBlocks = (next) => set({ blocks: next });

  const submit = (e) => {
    e.preventDefault();
    if (!draft.title?.trim()) return setError('Dê um nome ao projeto.');

    const { introText, toolsText, ...rest } = draft;
    const out = { ...rest, title: draft.title.trim() };

    if (clients) {
      delete out.slug;
    } else {
      let slug = slugify(draft.slug || draft.title);
      while (takenSlugs.includes(slug)) slug = `${slug}-2`;
      out.slug = slug;
      out.intro = toParagraphs(introText || '');
      out.tools = (toolsText || '').split(',').map((t) => t.trim()).filter(Boolean);
      out.blocks = blocks
        .map((b) => (b.type === 'text' ? { ...b, body: b.body.filter(Boolean) } : b))
        .filter((b) => (b.type === 'text' ? b.body.length : b.items.length));
      if (!out.link?.url) delete out.link;
      if (!out.client) delete out.client;
      if (!out.year) delete out.year;
    }
    // Com capa enviada, a proporção vem da imagem — o "ratio" do placeholder sai
    if (out.src) delete out.ratio;
    onSave(out);
  };

  return (
    <form className="adm-editor" onSubmit={submit}>
      <div className="adm-editor__head">
        <button type="button" className="adm-link" onClick={onCancel}>← {category.label}</button>
        <h1>{isNew ? `Novo em ${category.label}` : draft.title || 'Sem nome'}</h1>
      </div>

      <section className="adm-card">
        <h2>{clients ? 'Cliente' : 'Informações'}</h2>
        <label className="adm-field">
          <span>{clients ? 'Nome do cliente' : 'Nome do projeto'}</span>
          <input value={draft.title || ''} onChange={(e) => set({ title: e.target.value })} required />
        </label>

        {!clients && (
          <>
            <label className="adm-field">
              <span>Endereço da página</span>
              <div className="adm-prefix">
                <em>/projects/{category.id}/</em>
                <input
                  value={draft.slug ?? ''}
                  placeholder={slugify(draft.title || '')}
                  onChange={(e) => set({ slug: e.target.value })}
                />
              </div>
            </label>
            <div className="adm-row">
              <label className="adm-field">
                <span>Cliente</span>
                <input value={draft.client || ''} onChange={(e) => set({ client: e.target.value })} />
              </label>
              <label className="adm-field">
                <span>Ano</span>
                <input value={draft.year || ''} onChange={(e) => set({ year: e.target.value })} inputMode="numeric" />
              </label>
            </div>
            <label className="adm-field">
              <span>Ferramentas <em>(separe por vírgula)</em></span>
              <input
                value={draft.toolsText}
                placeholder="Figma, Adobe Illustrator, React"
                onChange={(e) => set({ toolsText: e.target.value })}
              />
            </label>
            <div className="adm-row">
              <label className="adm-field">
                <span>Texto do link <em>(opcional)</em></span>
                <input
                  value={draft.link?.label || ''}
                  placeholder="Ver no Behance"
                  onChange={(e) => set({ link: { ...draft.link, label: e.target.value } })}
                />
              </label>
              <label className="adm-field">
                <span>URL do link</span>
                <input
                  type="url"
                  value={draft.link?.url || ''}
                  placeholder="https://"
                  onChange={(e) => set({ link: { label: draft.link?.label || 'Ver projeto', ...draft.link, url: e.target.value } })}
                />
              </label>
            </div>
          </>
        )}
      </section>

      {!clients && (
        <section className="adm-card">
          <h2>Capa</h2>
          <p className="adm-hint">Aparece na grade, no preview da home, no footer e no Playground.</p>
          <div className="adm-cover">
            {draft.src ? <Media item={{ src: draft.src }} className="adm-cover__img" /> : <div className="adm-thumb adm-cover__img" />}
            <div>
              <UploadButton
                label={draft.src ? 'Trocar capa' : 'Enviar capa'}
                accept="image/*"
                storage={storage}
                onFiles={([url]) => set({ src: url })}
              />
              {draft.src && (
                <button type="button" className="adm-link adm-danger" onClick={() => set({ src: undefined })}>
                  Remover capa
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {!clients && (
        <section className="adm-card">
          <h2>Texto de apresentação</h2>
          <p className="adm-hint">Deixe uma linha em branco entre os parágrafos.</p>
          <textarea
            className="adm-textarea"
            rows={10}
            value={draft.introText}
            onChange={(e) => set({ introText: e.target.value })}
          />
        </section>
      )}

      {clients ? (
        <section className="adm-card">
          <h2>Posts</h2>
          <p className="adm-hint">Imagens ou vídeos (reels). Aparecem em grade 2×2 na ordem abaixo.</p>
          <MediaGrid items={draft.posts || []} onChange={(posts) => set({ posts })} />
          <UploadButton
            label="+ Adicionar posts"
            multiple
            storage={storage}
            onFiles={(urls) => set({ posts: [...(draft.posts || []), ...urls.map(mediaFromUrl)] })}
          />
        </section>
      ) : (
        <section className="adm-card">
          <h2>Conteúdo da página</h2>
          <p className="adm-hint">Galerias (2 colunas) e blocos de texto, na ordem em que aparecem no projeto.</p>

          {blocks.map((block, b) => (
            <div className="adm-block" key={b}>
              <div className="adm-block__head">
                <strong>{block.type === 'text' ? 'Texto' : 'Galeria'}</strong>
                <div>
                  <button type="button" onClick={() => setBlocks(move(blocks, b, b - 1))} aria-label="Subir">↑</button>
                  <button type="button" onClick={() => setBlocks(move(blocks, b, b + 1))} aria-label="Descer">↓</button>
                  <button type="button" className="adm-danger" onClick={() => setBlocks(blocks.filter((_, j) => j !== b))}>
                    Remover bloco
                  </button>
                </div>
              </div>

              {block.type === 'text' ? (
                <textarea
                  className="adm-textarea"
                  rows={6}
                  value={toText(block.body)}
                  onChange={(e) =>
                    setBlocks(blocks.map((x, j) => (j === b ? { ...x, body: e.target.value.split(/\n\s*\n/) } : x)))
                  }
                />
              ) : (
                <>
                  <MediaGrid
                    allowFull
                    items={block.items}
                    onChange={(items) => setBlocks(blocks.map((x, j) => (j === b ? { ...x, items } : x)))}
                  />
                  <UploadButton
                    label="+ Adicionar imagens ou vídeos"
                    multiple
                    storage={storage}
                    onFiles={(urls) =>
                      setBlocks(blocks.map((x, j) => (j === b ? { ...x, items: [...x.items, ...urls.map(mediaFromUrl)] } : x)))
                    }
                  />
                  <button
                    type="button"
                    className="adm-btn adm-btn--self"
                    onClick={() => {
                      let url = window.prompt('Endereço do site (ex.: https://meusite.com.br)')?.trim();
                      if (!url) return;
                      if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
                      const site = { embed: url, full: true, ratio: 952 / 615 };
                      setBlocks(blocks.map((x, j) => (j === b ? { ...x, items: [...x.items, site] } : x)));
                    }}
                  >
                    + Site ao vivo
                  </button>
                </>
              )}
            </div>
          ))}

          <div className="adm-actions">
            <button type="button" className="adm-btn" onClick={() => setBlocks([...blocks, { type: 'images', items: [] }])}>
              + Galeria
            </button>
            <button type="button" className="adm-btn" onClick={() => setBlocks([...blocks, { type: 'text', body: [''] }])}>
              + Texto
            </button>
          </div>
        </section>
      )}

      <div className="adm-savebar">
        {error && <span className="adm-error">{error}</span>}
        <button type="button" className="adm-btn" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="adm-btn adm-btn--primary" disabled={saving}>
          {saving ? 'Salvando…' : 'Salvar e publicar'}
        </button>
      </div>
    </form>
  );
}
