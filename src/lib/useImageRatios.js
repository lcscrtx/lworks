import { useEffect, useState } from 'react';

/*
  Lê a proporção real (largura / altura) de cada imagem ou vídeo.
  Assim, ao cadastrar um projeto, basta informar o `src` (ou `video`) — não precisa de `ratio`.
  As imagens também ficam pré-carregadas, então aparecem na hora no hover.
*/
const cache = new Map();
const isVideo = (url) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);

function load(src) {
  if (!cache.has(src)) {
    cache.set(
      src,
      new Promise((resolve) => {
        if (isVideo(src)) {
          // Vídeo: só os metadados (largura/altura), sem baixar o arquivo inteiro
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.muted = true;
          video.onloadedmetadata = () => resolve(video.videoWidth / video.videoHeight || null);
          video.onerror = () => resolve(null);
          video.src = src;
          return;
        }
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

// Arquivos de um item cuja proporção deve ser lida (vídeo primeiro: é o que aparece na tela)
export const mediaSrcs = (item) => [item.video, item.src].filter(Boolean);

// Proporção final de um item: a real do vídeo/imagem > a informada > 4:3
export const ratioOf = (item, ratios) =>
  (item.video && ratios[item.video]) || (item.src && ratios[item.src]) || item.ratio || 4 / 3;
