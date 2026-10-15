import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useImageRatios, ratioOf } from '@/lib/useImageRatios';

// Quantidade de colunas conforme a largura da tela
function useColumns() {
  const get = () => (window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : 3);
  const [cols, setCols] = useState(get);
  useEffect(() => {
    const onResize = () => setCols(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return cols;
}

/*
  Grade masonry de cards (Figma: Brandings / Works).
  items: [{ title, src, ratio, href, caption }]
*/
export default function Masonry({ items }) {
  const cols = useColumns();
  const ratios = useImageRatios(items.map((i) => i.src).filter(Boolean));

  // Cada item entra na coluna mais baixa até o momento
  const columns = Array.from({ length: cols }, () => ({ height: 0, items: [] }));
  items.forEach((item) => {
    const ratio = ratioOf(item, ratios);
    const col = columns.reduce((a, b) => (b.height < a.height ? b : a));
    col.items.push({ ...item, ratio });
    col.height += 1 / ratio + 0.24; // altura relativa da imagem + legenda (74px / 304px)
  });

  return (
    <div className="masonry">
      {columns.map((col, c) => (
        <div className="masonry__col" key={c}>
          {col.items.map((item, i) => (
            <Link
              to={item.href || '#'}
              className="work"
              key={item.key || item.title}
              style={{ '--delay': `${0.25 + Math.min(i * cols + c, 12) * 0.08}s` }}
            >
              <div className="work__media" style={{ aspectRatio: item.ratio }}>
                {item.src && <img src={item.src} alt={item.title} loading="lazy" />}
              </div>
              <p className="work__caption">
                {item.caption}
                <span>{item.title}</span>
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
