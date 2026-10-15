import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/*
  Visualizador em tela cheia.
  Fecha com Esc ou clique fora; navega com ← →, pelos botões ou deslizando o dedo.
*/
export default function Lightbox({ images, index, onChange, onClose }) {
  const total = images.length;
  const go = (step) => onChange((index + step + total) % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  });

  const img = images[index];

  // Celular: deslizar o dedo para os lados troca a imagem
  const swipe = useRef(null);
  const onTouchStart = (e) => { swipe.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
  const onTouchEnd = (e) => {
    if (!swipe.current) return;
    const dx = e.changedTouches[0].clientX - swipe.current.x;
    const dy = e.changedTouches[0].clientY - swipe.current.y;
    swipe.current = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && total > 1) go(dx < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Imagem em tela cheia"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="lightbox__media"
        style={{ aspectRatio: img.ratio }}
        onClick={(e) => e.stopPropagation()}
      >
        {img.video ? (
          <video key={img.video} src={img.video} poster={img.src} autoPlay muted loop playsInline controls />
        ) : (
          img.src && <img src={img.src} alt={img.alt || ''} />
        )}
      </div>

      <div className="lightbox__bar" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => go(-1)} aria-label="Imagem anterior">← Anterior</button>
        <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <button type="button" onClick={() => go(1)} aria-label="Próxima imagem">Próxima →</button>
        <button type="button" className="lightbox__close" onClick={onClose}>Fechar</button>
      </div>
    </div>,
    document.body
  );
}
