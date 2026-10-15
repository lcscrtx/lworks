import { useEffect, useState } from 'react';

/*
  Lê a proporção real (largura / altura) de cada imagem.
  Assim, ao cadastrar um projeto, basta informar o `src` — não precisa de `ratio`.
  As imagens também ficam pré-carregadas, então aparecem na hora no hover.
*/
const cache = new Map();

function load(src) {
  if (!cache.has(src)) {
    cache.set(
      src,
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img.naturalWidth / img.naturalHeight || null);
        img.onerror = () => resolve(null);
        img.src = src;
      })
    );
  }
  return cache.get(src);
}

export function useImageRatios(srcs) {
  const [ratios, setRatios] = useState({});
  const key = srcs.join('|');

  useEffect(() => {
    let alive = true;
    srcs.forEach((src) =>
      load(src).then((ratio) => {
        if (alive && ratio) setRatios((r) => (r[src] === ratio ? r : { ...r, [src]: ratio }));
      })
    );
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return ratios;
}

// Proporção final de um item: a real da imagem > a informada > 4:3
export const ratioOf = (item, ratios) => (item.src && ratios[item.src]) || item.ratio || 4 / 3;
