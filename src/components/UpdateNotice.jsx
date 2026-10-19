import { useState } from 'react';

/*
  Aviso de site em atualização: aparece ao abrir o site e some ao fechar.
  Fechado, não volta enquanto a aba estiver aberta (sessionStorage); numa nova visita aparece de novo.
  Para tirar do ar quando os projetos estiverem todos publicados, remova <UpdateNotice /> de App.jsx.
*/
const KEY = 'lworks:update-notice';

const wasClosed = () => {
  try { return sessionStorage.getItem(KEY) === 'closed'; } catch { return false; }
};

export default function UpdateNotice() {
  const [open, setOpen] = useState(() => !wasClosed());
  const [leaving, setLeaving] = useState(false);

  if (!open) return null;

  const close = () => {
    try { sessionStorage.setItem(KEY, 'closed'); } catch { /* sem storage: só fecha */ }
    setLeaving(true);
  };

  return (
    <aside
      className={`update-notice${leaving ? ' is-leaving' : ''}`}
      role="status"
      aria-labelledby="update-notice-title"
      onAnimationEnd={(e) => { if (leaving && e.target === e.currentTarget) setOpen(false); }}
    >
      <p id="update-notice-title" className="update-notice__label">
        <i aria-hidden="true" />Em atualização
      </p>
      <p className="update-notice__text">
        Ainda estou subindo os projetos para o portfólio. Novos trabalhos chegam aos poucos, então volte em breve.
      </p>
      <button type="button" className="update-notice__close" onClick={close}>
        Ok, entendi
      </button>
    </aside>
  );
}
