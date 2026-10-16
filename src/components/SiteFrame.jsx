import { useEffect, useState } from 'react';

/*
  Site ao vivo dentro de uma moldura de navegador.
  - Se o site permite: o site real num iframe
  - Se o site bloqueia (X-Frame-Options / CSP): a captura da página inteira, rolável dentro da moldura
  Sites cadastrados antes da verificação são checados aqui mesmo (/api/site).
*/
const shotFallback = (url) =>
  `https://api.microlink.io/?${new URLSearchParams({
    url, screenshot: 'true', fullPage: 'true', meta: 'false', embed: 'screenshot.url', 'viewport.width': '1440', 'viewport.height': '900'
  })}`;

export default function SiteFrame({ item, title, className = '', style }) {
  const [blocked, setBlocked] = useState(item.blocked ?? null);

  useEffect(() => {
    if (item.blocked !== undefined) return setBlocked(item.blocked);
    let alive = true;
    fetch(`/api/site?url=${encodeURIComponent(item.embed)}`)
      .then((r) => (r.ok ? r.json() : {}))
      .then((d) => alive && setBlocked(d.embeddable === false))
      .catch(() => alive && setBlocked(false));
    return () => { alive = false; };
  }, [item.embed, item.blocked]);

  const host = item.embed.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div className={`project__media project__site ${className}`} style={{ ...style, aspectRatio: item.ratio || 952 / 615 }}>
      <div className="site-bar">
        <span className="site-bar__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="site-bar__url">{host}</span>
        <a href={item.embed} target="_blank" rel="noopener">Abrir ↗</a>
      </div>
      {blocked === false && (
        <iframe
          src={item.embed}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      )}
      {blocked === true && (
        <>
          <div className="site-shot" tabIndex={0} aria-label={`${title} (role para ver a página)`}>
            <img src={item.shot || shotFallback(item.embed)} alt={title} loading="lazy" />
          </div>
          {/* Aviso: é um print, o site de verdade abre em outra aba */}
          <a className="site-shot__note" href={item.embed} target="_blank" rel="noopener">
            <span>Captura de tela.</span> Abra o site para ver como ele ficou de verdade ↗
          </a>
        </>
      )}
    </div>
  );
}
