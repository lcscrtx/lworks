import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '@/lib/projectsStore';
import { useImageRatios, ratioOf } from '@/lib/useImageRatios';
import { categoryImages, mixByProject } from '@/lib/media';

const INTERVAL = 700; // tempo (ms) de cada imagem no preview
const AREA = 320 * 240; // área base do preview; a proporção muda conforme a imagem
const SHADES = ['#e6e6e6', '#dcdcdc', '#ececec', '#d4d4d4']; // tons dos placeholders

export default function Projects() {
  const categories = useCategories();
  const [active, setActive] = useState(null);
  const [pool, setPool] = useState([]); // imagens da categoria ativa, em ordem aleatória
  const [index, setIndex] = useState(0);

  // Pré-carrega todas as imagens para o preview trocar sem piscar
  const allSrcs = useMemo(() => categories.flatMap(categoryImages).map((i) => i.src), [categories]);
  const ratios = useImageRatios(allSrcs);

  const open = (category) => {
    const images = categoryImages(category);
    // Sem nenhuma imagem cadastrada ainda: usa os placeholders dos projetos
    setPool(images.length ? mixByProject(images) : category.items);
    setIndex(0);
    setActive(category.id);
  };

  useEffect(() => {
    if (!active || pool.length < 2) return;
    const timer = setInterval(() => setIndex((i) => i + 1), INTERVAL);
    return () => clearInterval(timer);
  }, [active, pool]);

  const item = active ? pool[index % pool.length] : null;
  const ratio = item ? ratioOf(item, ratios) : 1;
  const w = item ? Math.min(380, Math.sqrt(AREA * ratio)) : 0;

  return (
    <nav className="projects" aria-label="Projects" onMouseLeave={() => setActive(null)}>
      <p className="projects__title">Projects</p>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>
            <Link
              to={`/projects/${c.id}`}
              onMouseEnter={() => open(c)}
              onFocus={() => open(c)}
              onBlur={() => setActive(null)}
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`projects__preview${item ? ' is-open' : ''}`} aria-hidden="true">
        {item && (
          <div
            className="projects__frame"
            style={{ width: w, height: w / ratio, background: item.src ? undefined : SHADES[index % SHADES.length] }}
          >
            {item.src && <img src={item.src} alt="" />}
          </div>
        )}
      </div>
    </nav>
  );
}
