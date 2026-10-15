import { useEffect, useState } from 'react';
import { usePages } from '@/lib/pagesStore';
import { useTitle } from '@/lib/useTitle';
import Footer from '@/components/Footer';

export default function Contact() {
  useTitle('Contact');
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const { intro = [], channels = [] } = usePages().pages.contact;

  const [copied, setCopied] = useState(null); // índice do canal copiado
  const copy = async (text, i) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(i);
      setTimeout(() => setCopied(null), 1800);
    } catch { /* sem permissão: o link mailto continua funcionando */ }
  };

  let step = 0;
  const delay = () => ({ '--delay': `${0.1 + step++ * 0.08}s` });

  return (
    <>
      <main className="container contact">
        <section className="about__intro contact__intro">
          <h1 className="about__title reveal" style={delay()}>Contact</h1>
          <div className="about__bio reveal" style={delay()}>
            {intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__title reveal" style={delay()}>Channels</h2>
          <ul className="channels">
            {channels.map((c, i) => {
              const external = c.href?.startsWith('http');
              return (
                <li className="channel reveal" style={delay()} key={`${c.label}-${i}`}>
                  <span className="channel__label">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined} className="ink">
                      {c.value}{external && ' ↗'}
                    </a>
                  ) : (
                    <span className="ink">{c.value}</span>
                  )}
                  {c.copy && (
                    <button type="button" className="channel__copy" onClick={() => copy(c.value, i)}>
                      {copied === i ? 'Copiado ✓' : 'Copiar'}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
