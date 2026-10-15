import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Media, UploadButton, move, toText, toParagraphs } from './Editor';

/*
  Editores das páginas About e Contact.
  Os parágrafos ficam como texto enquanto se digita e viram listas só ao salvar.
*/

// Cabeçalho de um item de lista: nome + subir/descer/remover
function ItemHead({ title, list, index, onChange }) {
  return (
    <div className="adm-block__head">
      <strong>{title}</strong>
      <div>
        <button type="button" onClick={() => onChange(move(list, index, index - 1))} aria-label="Subir">↑</button>
        <button type="button" onClick={() => onChange(move(list, index, index + 1))} aria-label="Descer">↓</button>
        <button type="button" className="adm-danger" onClick={() => onChange(list.filter((_, j) => j !== index))}>
          Remover
        </button>
      </div>
    </div>
  );
}

// Imagem pequena com enviar/trocar/remover (foto, logos)
function ImageField({ label, src, storage, onChange, square }) {
  return (
    <div className="adm-cover">
      {src ? (
        <Media item={{ src }} className={`adm-cover__img${square ? ' adm-cover__img--square' : ''}`} />
      ) : (
        <div className={`adm-thumb adm-cover__img${square ? ' adm-cover__img--square' : ''}`} />
      )}
      <div>
        <UploadButton label={src ? `Trocar ${label}` : `Enviar ${label}`} accept="image/*" storage={storage} onFiles={([url]) => onChange(url)} />
        {src && (
          <button type="button" className="adm-link adm-danger" onClick={() => onChange(undefined)}>
            Remover {label}
          </button>
        )}
      </div>
    </div>
  );
}

function SaveBar({ error, saving, view }) {
  return (
    <div className="adm-savebar">
      {error && <span className="adm-error">{error}</span>}
      <Link to={view} target="_blank" className="adm-link">Ver página ↗</Link>
      <button type="submit" className="adm-btn adm-btn--primary" disabled={saving}>
        {saving ? 'Salvando…' : 'Salvar e publicar'}
      </button>
    </div>
  );
}

export function AboutEditor({ about, storage, saving, onSave }) {
  const [draft, setDraft] = useState(() => ({
    ...about,
    bioText: toText(about.bio),
    experience: (about.experience || []).map((job) => ({ ...job, descText: toText([].concat(job.description || [])) })),
    clients: about.clients || []
  }));
  const [error, setError] = useState('');
  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const setJob = (i, patch) => set({ experience: draft.experience.map((j, k) => (k === i ? { ...j, ...patch } : j)) });
  const setClient = (i, patch) => set({ clients: draft.clients.map((c, k) => (k === i ? { ...c, ...patch } : c)) });

  const submit = (e) => {
    e.preventDefault();
    if (draft.experience.some((j) => !j.company?.trim())) return setError('Toda experiência precisa do nome da empresa.');
    if (draft.clients.some((c) => !c.name?.trim())) return setError('Todo cliente precisa de um nome.');
    setError('');
    const { bioText, ...rest } = draft;
    onSave({
      ...rest,
      bio: toParagraphs(bioText),
      experience: draft.experience.map(({ descText, ...job }) => ({
        ...job,
        company: job.company.trim(),
        description: toParagraphs(descText || '')
      })),
      clients: draft.clients.map((c) => ({ ...c, name: c.name.trim() }))
    });
  };

  return (
    <form className="adm-editor" onSubmit={submit}>
      <section className="adm-card">
        <h2>Apresentação</h2>
        <ImageField label="foto" square src={draft.photo} storage={storage} onChange={(photo) => set({ photo })} />
        <label className="adm-field">
          <span>Legenda da foto</span>
          <input value={draft.caption || ''} onChange={(e) => set({ caption: e.target.value })} />
        </label>
        <label className="adm-field">
          <span>Texto <em>(deixe uma linha em branco entre os parágrafos)</em></span>
          <textarea className="adm-textarea" rows={10} value={draft.bioText} onChange={(e) => set({ bioText: e.target.value })} />
        </label>
      </section>

      <section className="adm-card">
        <h2>Work Experience</h2>
        {draft.experience.map((job, i) => (
          <div className="adm-block" key={i}>
            <ItemHead title={job.company || 'Nova experiência'} list={draft.experience} index={i} onChange={(experience) => set({ experience })} />
            <div className="adm-row">
              <label className="adm-field">
                <span>Empresa</span>
                <input value={job.company || ''} onChange={(e) => setJob(i, { company: e.target.value })} />
              </label>
              <label className="adm-field">
                <span>Cargo</span>
                <input value={job.role || ''} onChange={(e) => setJob(i, { role: e.target.value })} />
              </label>
              <label className="adm-field">
                <span>Período</span>
                <input value={job.period || ''} placeholder="2024 — atual" onChange={(e) => setJob(i, { period: e.target.value })} />
              </label>
            </div>
            <label className="adm-field">
              <span>Descrição</span>
              <textarea className="adm-textarea" rows={4} value={job.descText} onChange={(e) => setJob(i, { descText: e.target.value })} />
            </label>
            <ImageField label="logo" square src={job.logo} storage={storage} onChange={(logo) => setJob(i, { logo })} />
          </div>
        ))}
        <div className="adm-actions">
          <button type="button" className="adm-btn" onClick={() => set({ experience: [{ company: '', role: '', period: '', descText: '' }, ...draft.experience] })}>
            + Experiência
          </button>
        </div>
      </section>

      <section className="adm-card">
        <h2>Clients</h2>
        <p className="adm-hint">Sem logo, o cliente aparece como um retângulo cinza.</p>
        {draft.clients.map((client, i) => (
          <div className="adm-block" key={i}>
            <ItemHead title={client.name || 'Novo cliente'} list={draft.clients} index={i} onChange={(clients) => set({ clients })} />
            <label className="adm-field">
              <span>Nome</span>
              <input value={client.name || ''} onChange={(e) => setClient(i, { name: e.target.value })} />
            </label>
            <ImageField label="logo" src={client.logo} storage={storage} onChange={(logo) => setClient(i, { logo })} />
          </div>
        ))}
        <div className="adm-actions">
          <button type="button" className="adm-btn" onClick={() => set({ clients: [...draft.clients, { name: '' }] })}>
            + Cliente
          </button>
        </div>
      </section>

      <SaveBar error={error} saving={saving} view="/about" />
    </form>
  );
}

export function ContactEditor({ contact, saving, onSave }) {
  const [draft, setDraft] = useState(() => ({ ...contact, introText: toText(contact.intro), channels: contact.channels || [] }));
  const [error, setError] = useState('');
  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const setChannel = (i, patch) => set({ channels: draft.channels.map((c, k) => (k === i ? { ...c, ...patch } : c)) });

  const submit = (e) => {
    e.preventDefault();
    if (draft.channels.some((c) => !c.label?.trim() || !c.value?.trim())) return setError('Todo canal precisa de nome e texto.');
    setError('');
    const { introText, ...rest } = draft;
    onSave({
      ...rest,
      intro: toParagraphs(introText),
      channels: draft.channels.map((c) => {
        const out = { ...c, label: c.label.trim(), value: c.value.trim(), href: c.href?.trim() };
        if (!out.href) delete out.href;
        if (!out.copy) delete out.copy;
        return out;
      })
    });
  };

  return (
    <form className="adm-editor" onSubmit={submit}>
      <section className="adm-card">
        <h2>Texto de apresentação</h2>
        <p className="adm-hint">Deixe uma linha em branco entre os parágrafos.</p>
        <textarea className="adm-textarea" rows={6} value={draft.introText} onChange={(e) => set({ introText: e.target.value })} />
      </section>

      <section className="adm-card">
        <h2>Channels</h2>
        <p className="adm-hint">
          Link opcional: <code>https://…</code>, <code>mailto:email@…</code> ou WhatsApp{' '}
          <code>https://wa.me/5583999999999?text=Olá</code>. Sem link, aparece só o texto.
        </p>
        {draft.channels.map((channel, i) => (
          <div className="adm-block" key={i}>
            <ItemHead title={channel.label || 'Novo canal'} list={draft.channels} index={i} onChange={(channels) => set({ channels })} />
            <div className="adm-row">
              <label className="adm-field">
                <span>Nome</span>
                <input value={channel.label || ''} placeholder="Instagram" onChange={(e) => setChannel(i, { label: e.target.value })} />
              </label>
              <label className="adm-field">
                <span>Texto</span>
                <input value={channel.value || ''} placeholder="@lworks.co" onChange={(e) => setChannel(i, { value: e.target.value })} />
              </label>
            </div>
            <label className="adm-field">
              <span>Link <em>(opcional)</em></span>
              <input value={channel.href || ''} placeholder="https://" onChange={(e) => setChannel(i, { href: e.target.value })} />
            </label>
            <label className="adm-check adm-btn--self">
              <input type="checkbox" checked={!!channel.copy} onChange={(e) => setChannel(i, { copy: e.target.checked })} />
              Botão “Copiar” (copia o texto)
            </label>
          </div>
        ))}
        <div className="adm-actions">
          <button type="button" className="adm-btn" onClick={() => set({ channels: [...draft.channels, { label: '', value: '' }] })}>
            + Canal
          </button>
        </div>
      </section>

      <SaveBar error={error} saving={saving} view="/contact" />
    </form>
  );
}
