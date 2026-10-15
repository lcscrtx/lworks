import { useEffect, useState } from 'react';
import { useTitle } from '@/lib/useTitle';
import Footer from '@/components/Footer';

const EMAIL = 'lucascartaaxo@gmail.com';

// TODO: troque pelo seu número com DDI + DDD, só dígitos (ex.: 5583999999999)
const WHATSAPP = '5583000000000';
const WHATSAPP_MSG = 'Olá, Lucas! Vim pelo seu portfólio e quero conversar sobre um projeto.';

const CHANNELS = [
  {
    label: 'WhatsApp',
    value: 'Conversar agora',
    href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`
  },
  { label: 'Instagram', value: '@lworks.co', href: 'https://www.instagram.com/lworks.co/' },
  { label: 'LinkedIn', value: 'Lucas Cartaxo', href: 'https://www.linkedin.com/in/lucas-cartaxo-015152181/' },
  { label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
  { label: 'Base', value: 'João Pessoa, Paraíba — Brasil' }
];

export default function Contact() {
  useTitle('Contact');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
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
            <p>Tem uma marca para nascer, um produto para tirar do papel ou um design system para organizar? Me conta sobre o seu projeto.</p>
            <p>Respondo em até 2 dias úteis. Trabalho com empresas e pessoas de qualquer lugar — remoto ou presencial em João Pessoa.</p>
          </div>
        </section>

        <section className="about__section">
          <h2 className="about__title reveal" style={delay()}>Channels</h2>
          <ul className="channels">
            {CHANNELS.map((c) => {
              const external = c.href?.startsWith('http');
              return (
                <li className="channel reveal" style={delay()} key={c.label}>
                  <span className="channel__label">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined} className="ink">
                      {c.value}{external && ' ↗'}
                    </a>
                  ) : (
                    <span className="ink">{c.value}</span>
                  )}
                  {c.copy && (
                    <button type="button" className="channel__copy" onClick={copy}>
                      {copied ? 'Copiado ✓' : 'Copiar'}
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
