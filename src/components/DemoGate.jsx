import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/*
  Botão "Ver como ficou" + modal de senha para abrir a versão navegável.
  A senha é fixa e conferida no navegador: serve para não deixar o link solto, não é proteção de verdade.
  Depois de acertar, a liberação vale enquanto a aba estiver aberta (sessionStorage).
*/
const KEY = 'lworks:demo-unlocked';

const wasUnlocked = () => {
  try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; }
};

export default function DemoGate({ demo }) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(wasUnlocked);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    inputRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    if (value.trim() === demo.password) {
      try { sessionStorage.setItem(KEY, '1'); } catch { /* sem storage: libera só agora */ }
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setValue('');
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <button type="button" className="demo-cta" onClick={() => setOpen(true)}>
        Ver como ficou <span aria-hidden="true">→</span>
      </button>

      {open && createPortal(
        <div className="demo-gate" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="demo-gate__card" role="dialog" aria-modal="true" aria-labelledby="demo-gate-title">
            <button type="button" className="demo-gate__x" onClick={() => setOpen(false)} aria-label="Fechar">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>

            {unlocked ? (
              <>
                <h2 id="demo-gate-title" className="demo-gate__title">Versão navegável</h2>
                <p className="demo-gate__text">Restaurante e dados fictícios. Tudo funciona no navegador, sem conta e sem servidor.</p>
                <ul className="demo-gate__links">
                  {demo.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener">
                        <span>{l.label}<small>{l.hint}</small></span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <form onSubmit={submit}>
                <h2 id="demo-gate-title" className="demo-gate__title">Acesso à versão navegável</h2>
                <p className="demo-gate__text">Digite a senha para abrir o painel e o cardápio funcionando.</p>
                <label className="demo-gate__field">
                  <span>Senha</span>
                  <input
                    ref={inputRef}
                    type="password"
                    inputMode="numeric"
                    autoComplete="off"
                    value={value}
                    onChange={(e) => { setValue(e.target.value); setError(false); }}
                    aria-invalid={error}
                    aria-describedby={error ? 'demo-gate-error' : undefined}
                  />
                </label>
                {error && <p id="demo-gate-error" className="demo-gate__error" role="alert">Senha incorreta. Tente de novo.</p>}
                <button type="submit" className="demo-gate__submit">Entrar</button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
