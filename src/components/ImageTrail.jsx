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
// Mouse fora do bloco: a imagem é empurrada para fora dele em vez de sumir
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
      if (last.current && Math.hypot(p.x - last.current.x, p.y - last.current.y) < SPACING) return;
      last.current = p;

      const img = images[index.current % images.length];
      const ratio = ratioOf(img, ratios.current);
      const w = Math.sqrt(AREA * ratio);
      const h = w / ratio;

      // A imagem nasce centrada no mouse; perto de um bloco de texto, é empurrada para fora dele.
      // Só não aparece se não couber (ex.: no vão estreito entre dois blocos).
      const zones = [...document.querySelectorAll(TEXT_ZONES)].map((el) => {
        const r = el.getBoundingClientRect();
        return { l: r.left - ZONE_GAP, r: r.right + ZONE_GAP, t: r.top - ZONE_GAP, b: r.bottom + ZONE_GAP };
      });
      const hits = (c) => zones.find((z) => c.x + w / 2 > z.l && c.x - w / 2 < z.r && c.y + h / 2 > z.t && c.y - h / 2 < z.b);
      const pos = { ...p };
      const zone = hits(pos);
      if (zone) {
        // menor deslocamento que tira a imagem do bloco: para a esquerda, direita, cima ou baixo
        const moves = [
          { x: zone.l - w / 2, y: pos.y },
          { x: zone.r + w / 2, y: pos.y },
          { x: pos.x, y: zone.t - h / 2 },
          { x: pos.x, y: zone.b + h / 2 }
        ].sort((a, b) => Math.hypot(a.x - pos.x, a.y - pos.y) - Math.hypot(b.x - pos.x, b.y - pos.y));
        const fit = moves.find((m) => !hits(m));
        if (!fit) {
          last.current = null;
          return;
        }
        Object.assign(pos, fit);
      }

      index.current += 1;
      const key = id.current++;
      setItems((list) => [...list.slice(-(MAX_VISIBLE - 1)), { key, ...pos, w, h, src: img.src }]);
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
