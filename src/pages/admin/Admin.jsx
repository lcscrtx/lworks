import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '@/lib/projectsStore';
import { usePages } from '@/lib/pagesStore';
import { useTitle } from '@/lib/useTitle';
import { login, logout, session, saveCategories, savePages, getToken } from './api';
import Editor from './Editor';
import { AboutEditor, ContactEditor } from './PagesEditor';
import './admin.css';

const clone = (x) => JSON.parse(JSON.stringify(x));
const TABS = [['projects', 'Projetos'], ['about', 'About'], ['contact', 'Contact']];
const cover = (item) => item.src || item.posts?.find((p) => p.src)?.src;

function Login({ onDone }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      onDone(await login(password));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="adm-login" onSubmit={submit}>
      <p className="adm-brand">Lucas Cartaxo <span>LWORKS®</span></p>
      <h1>Painel</h1>
      <label className="adm-field">
        <span>Senha</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus required />
      </label>
      {error && <p className="adm-error">{error}</p>}
      <button className="adm-btn adm-btn--primary" disabled={busy}>{busy ? 'Entrando…' : 'Entrar'}</button>
    </form>
  );
}

export default function Admin() {
  useTitle('Painel');
  const { categories, loaded, fromApi, reload } = useProjects();
  const [auth, setAuth] = useState({ checked: false, ok: false, storage: 'local' });
  const [cats, setCats] = useState(null);
  const [editing, setEditing] = useState(null); // { cat, index } | { cat, isNew: true }
  const [status, setStatus] = useState({ saving: false, message: '', error: '' });
  const [tab, setTab] = useState('projects');
  const pagesStore = usePages();

  // Sessão salva neste navegador?
  useEffect(() => {
    if (!getToken()) return setAuth((a) => ({ ...a, checked: true }));
    session()
      .then((s) => setAuth({ checked: true, ok: s.ok, storage: s.storage }))
      .catch(() => setAuth((a) => ({ ...a, checked: true })));
  }, []);

  // Cópia editável dos projetos
  useEffect(() => { if (loaded && !cats) setCats(clone(categories)); }, [loaded, categories, cats]);

  const persist = (next, message) => save(async () => {
    await saveCategories(next);
    setCats(next);
    await reload();
  }, message);

  // About e Contact são salvos juntos
  const persistPage = (key, value) => {
    const next = { ...pagesStore.pages, [key]: value };
    return save(async () => {
      await savePages({ about: next.about, contact: next.contact });
      await pagesStore.reload();
    });
  };

  const save = async (task, message = 'Publicado ✓') => {
    setStatus({ saving: true, message: '', error: '' });
    try {
      await task();
      setStatus({ saving: false, message, error: '' });
      setTimeout(() => setStatus((s) => ({ ...s, message: '' })), 2500);
      return true;
    } catch (err) {
      if (err.status === 401) setAuth((a) => ({ ...a, ok: false }));
      setStatus({ saving: false, message: '', error: err.message });
      return false;
    }
  };

  const updateItems = (catIndex, fn) =>
    cats.map((c, i) => (i === catIndex ? { ...c, items: fn(c.items) } : c));

  if (!auth.checked || !cats) return <div className="adm adm-center">Carregando…</div>;
  if (!auth.ok) return <div className="adm adm-center"><Login onDone={(d) => setAuth({ checked: true, ok: true, storage: d.storage })} /></div>;

  if (editing) {
    const category = cats[editing.cat];
    const item = editing.isNew ? { title: '', blocks: [], posts: [] } : category.items[editing.index];
    const takenSlugs = category.items.filter((_, i) => i !== editing.index).map((p) => p.slug).filter(Boolean);
    return (
      <div className="adm">
        <Editor
          key={`${editing.cat}-${editing.index ?? 'new'}`}
          category={category}
          item={item}
          isNew={editing.isNew}
          storage={auth.storage}
          saving={status.saving}
          takenSlugs={takenSlugs}
          onCancel={() => setEditing(null)}
          onSave={async (saved) => {
            const next = updateItems(editing.cat, (items) =>
              editing.isNew ? [saved, ...items] : items.map((p, i) => (i === editing.index ? saved : p))
            );
            if (await persist(next)) setEditing(null);
          }}
        />
        {status.error && <p className="adm-toast adm-toast--error">{status.error}</p>}
      </div>
    );
  }

  return (
    <div className="adm">
      <header className="adm-top">
        <p className="adm-brand">Lucas Cartaxo <span>LWORKS®</span> · Painel</p>
        <div className="adm-top__right">
          <Link to="/" target="_blank" className="adm-link">Ver site ↗</Link>
          <button type="button" className="adm-link" onClick={() => { logout(); setAuth((a) => ({ ...a, ok: false })); }}>
            Sair
          </button>
        </div>
      </header>

      <nav className="adm-tabs">
        {TABS.map(([id, label]) => (
          <button type="button" key={id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}>{label}</button>
        ))}
      </nav>

      {auth.storage === 'local' && (
        <p className="adm-notice adm-notice--muted">
          Modo local: os dados ficam em <code>.data/</code> e as imagens em <code>public/uploads/</code>, só neste computador.
        </p>
      )}

      {tab === 'about' && pagesStore.loaded && (
        <AboutEditor about={pagesStore.pages.about} storage={auth.storage} saving={status.saving} onSave={(about) => persistPage('about', about)} />
      )}
      {tab === 'contact' && pagesStore.loaded && (
        <ContactEditor contact={pagesStore.pages.contact} saving={status.saving} onSave={(contact) => persistPage('contact', contact)} />
      )}

      {tab === 'projects' && (
        <>
          {!fromApi && (
            <p className="adm-notice">
              Ainda não há nada publicado: o site está mostrando os projetos de exemplo. Edite ou exclua os exemplos e
              cadastre os seus — na primeira publicação, esta lista passa a ser a do site.
            </p>
          )}
          {cats.map((category, c) => (
            <section className="adm-cat" key={category.id}>
              <div className="adm-cat__head">
                <h2>{category.label} <span>{category.items.length}</span></h2>
                <button type="button" className="adm-btn" onClick={() => setEditing({ cat: c, isNew: true })}>
                  + {category.layout === 'clients' ? 'Novo cliente' : 'Novo projeto'}
                </button>
              </div>

              <ul className="adm-list">
                {category.items.map((item, i) => (
                  <li key={`${item.slug || item.title}-${i}`}>
                    <div className="adm-thumb adm-list__thumb">{cover(item) && <img src={cover(item)} alt="" />}</div>
                    <div className="adm-list__info">
                      <strong>{item.title}</strong>
                      <span>
                        {category.layout === 'clients'
                          ? `${item.posts?.length || 0} posts`
                          : [item.types?.join(', '), item.client, item.year].filter(Boolean).join(' · ') || '—'}
                      </span>
                    </div>
                    <div className="adm-list__tools">
                      <button type="button" disabled={i === 0 || status.saving} aria-label="Subir"
                        onClick={() => persist(updateItems(c, (items) => { const a = [...items]; [a[i - 1], a[i]] = [a[i], a[i - 1]]; return a; }), 'Ordem salva ✓')}>↑</button>
                      <button type="button" disabled={i === category.items.length - 1 || status.saving} aria-label="Descer"
                        onClick={() => persist(updateItems(c, (items) => { const a = [...items]; [a[i + 1], a[i]] = [a[i], a[i + 1]]; return a; }), 'Ordem salva ✓')}>↓</button>
                      {item.slug && (
                        <Link to={`/projects/${category.id}/${item.slug}`} target="_blank" className="adm-link">Ver</Link>
                      )}
                      <button type="button" className="adm-link" onClick={() => setEditing({ cat: c, index: i })}>Editar</button>
                      <button type="button" className="adm-link adm-danger" disabled={status.saving}
                        onClick={() => {
                          if (window.confirm(`Excluir "${item.title}"? Isso não pode ser desfeito.`)) {
                            persist(updateItems(c, (items) => items.filter((_, j) => j !== i)), 'Excluído ✓');
                          }
                        }}>Excluir</button>
                    </div>
                  </li>
                ))}
                {category.items.length === 0 && <li className="adm-empty">Nenhum item ainda.</li>}
              </ul>
            </section>
          ))}
        </>
      )}

      {(status.message || status.error) && (
        <p className={`adm-toast${status.error ? ' adm-toast--error' : ''}`}>{status.error || status.message}</p>
      )}
    </div>
  );
}
