import { useEffect, useRef, useState } from 'react';
import { useImageRatios, ratioOf } from '@/lib/useImageRatios';
import './ImageTrail.css';

/*
  Trilha de imagens que segue o mouse apenas na área branca da página.
  Para usar fotos reais, passe `images` com { src, ratio } (ratio = largura / altura).
  Sem `src`, o item vira um retângulo cinza (placeholder).
*/
const PLACEHOLDERS = [
  { ratio: 16 / 9 },
  { ratio: 1 },
  { ratio: 4 / 3 },
  { ratio: 3 / 4 },
  { ratio: 16 / 9 },
  { ratio: 4 / 5 },
  { ratio: 3 / 2 }
];

// Elementos que interrompem a trilha (.home__side: coluna de Projects e Tessela, inclusive o espaço entre eles)
const BLOCKERS = 'a, button, .header, .intro, .home__side, .projects, .tessela-callout, .site-footer';
// Blocos de texto que nenhuma imagem pode cobrir, nem em parte (o mouse pode estar fora deles e a imagem invadir)
const TEXT_ZONES = '.intro, .home__side';
const ZONE_GAP = 16; // folga (px) entre a imagem e o texto

const SPACING = 220;  // distância do mouse (px) entre uma imagem e outra
const MAX_VISIBLE = 3; // máximo de imagens na tela ao mesmo tempo
const LIFETIME = 900; // tempo (ms) que cada imagem fica na tela
const AREA = 190 * 140; // área base de cada imagem, para todas terem peso visual parecido

export default function ImageTrail({ images = PLACEHOLDERS }) {
  const [items, setItems] = useState([]);
  const last = useRef(null);
  const index = useRef(0);
  const id = useRef(0);
  const ratios = useRef({});
  ratios.current = useImageRatios(images.map((i) => i.src).filter(Boolean));

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      if (e.target.closest?.(BLOCKERS)) {
        last.current = null;
        return;
      }
      const p = { x: e.clientX, y: e.clientY };
      // last só é limpo quando a imagem não pode nascer; assim ela aparece logo ao sair da zona de texto
      if (last.current && Math.hypot(p.x - last.current.x, p.y - last.current.y) < SPACING) return;
      last.current = p;

      const img = images[index.current % images.length];
      const ratio = ratioOf(img, ratios.current);
      const w = Math.sqrt(AREA * ratio);
      const h = w / ratio;

      // A imagem nasce centrada no mouse: se invadir um bloco de texto, não aparece
      const hitsText = [...document.querySelectorAll(TEXT_ZONES)].some((el) => {
        const r = el.getBoundingClientRect();
        return p.x + w / 2 > r.left - ZONE_GAP && p.x - w / 2 < r.right + ZONE_GAP
          && p.y + h / 2 > r.top - ZONE_GAP && p.y - h / 2 < r.bottom + ZONE_GAP;
      });
      if (hitsText) {
        last.current = null;
        return;
      }

      index.current += 1;
      const key = id.current++;
      setItems((list) => [...list.slice(-(MAX_VISIBLE - 1)), { key, ...p, w, h, src: img.src }]);
      setTimeout(() => setItems((list) => list.filter((i) => i.key !== key)), LIFETIME);
    };

    const onLeave = () => { last.current = null; };
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [images]);

  return (
    <div className="image-trail" aria-hidden="true">
      {items.map((i) => (
        <div
          key={i.key}
          className="image-trail__item"
          style={{ left: i.x, top: i.y, width: i.w, height: i.h, '--life': `${LIFETIME}ms` }}
        >
          {i.src && <img src={i.src} alt="" />}
        </div>
      ))}
    </div>
  );
}
