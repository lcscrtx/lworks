import { useEffect, useRef, useState } from 'react';
import GradientASCII from '@/components/GradientASCII';

/*
  Modal de "mais projetos nos próximos dias": abre ao entrar no site. Cartão escuro com o Gradient ASCII (React Bits)
  ao fundo e o texto por cima, na parte de baixo.
  Fechado (botão, X, Esc ou clique fora), não volta enquanto a aba estiver aberta (sessionStorage).
  Para tirar do ar quando os projetos estiverem todos publicados, remova <UpdateModal /> de App.jsx.
*/
const KEY = 'lworks:update-modal';

const wasClosed = () => {
  try { return sessionStorage.getItem(KEY) === 'closed'; } catch { return false; }
};

export default function UpdateModal() {
  const [open, setOpen] = useState(() => !wasClosed());
  const [leaving, setLeaving] = useState(false);
  const cardRef = useRef(null);

  const close = () => {
    try { sessionStorage.setItem(KEY, 'closed'); } catch { /* sem storage: só fecha */ }
    setLeaving(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    cardRef.current?.focus({ preventScroll: true }); // foco no cartão, não no botão: a linha do hover não aparece sozinha
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`update-modal${leaving ? ' is-leaving' : ''}`}
      onClick={(e) => e.target === e.currentTarget && close()}
      onAnimationEnd={(e) => { if (leaving && e.target === e.currentTarget) setOpen(false); }}
    >
      <div ref={cardRef} tabIndex={-1} className="update-modal__card" role="dialog" aria-modal="true" aria-labelledby="update-modal-title" aria-describedby="update-modal-text">
        <div className="update-modal__media" aria-hidden="true">
          <GradientASCII cellSize={12} />
        </div>

        <button type="button" className="update-modal__x" onClick={close} aria-label="Fechar">
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>

        <div className="update-modal__body">
          <p className="update-modal__label"><i aria-hidden="true" />Atualizando agora</p>
          <h2 id="update-modal-title" className="update-modal__title">Mais projetos<br />nos próximos dias</h2>
          <p id="update-modal-text" className="update-modal__text">
            Estou terminando de subir meus trabalhos. Enquanto isso, fique à vontade para ver o que já está aqui ou falar comigo.
          </p>
          <button type="button" className="update-modal__cta" onClick={close}>
            Ver projetos<span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
