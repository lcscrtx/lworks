import { Link } from 'react-router-dom';
import TechText from '@/components/TechText';
import { useCategories } from '@/lib/projectsStore';

const EMAIL = 'lucascartaaxo@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/lucascartaxodesign/';
const INSTAGRAM = 'https://www.instagram.com/lworks.co/';

const SERVICES = [
  ['Branding', 'Identidades visuais e sistemas de marca'],
  ['UI/UX Design', 'Produtos digitais, fluxos e interfaces'],
  ['Design Systems', 'Criação do zero e manutenção'],
  ['Social Media', 'Posts, campanhas e peças de mídia'],
  ['Front-end', 'Interfaces e produtos funcionando de verdade']
];

// Primeira frase do texto do projeto, para a descrição curta
const summary = (p) => p.intro?.[0]?.split(/(?<=\.)\s/)[0];


const Section = ({ title, children }) => (
  <section className="footer__section">
    <h3 className="footer__heading">{title}</h3>
    <div className="footer__content">{children}</div>
  </section>
);

export default function Footer() {
  const year = new Date().getFullYear();
  // Os 3 primeiros projetos que já têm página
  const recent = useCategories()
    .flatMap((c) => c.items.filter((p) => p.slug).map((p) => ({ ...p, category: c })))
    .slice(0, 3);

  return (
    <footer className="site-footer">
      <div className="container">
        {recent.length > 0 && (
          <Section title="Recentes">
            <ul className="footer__news">
              {recent.map((p) => (
                <li key={p.category.id + p.slug}>
                  <Link to={`/projects/${p.category.id}/${p.slug}`} className="news">
                    <div className="news__thumb">{p.src && <img src={p.src} alt="" loading="lazy" />}</div>
                    <div>
                      <p className="news__meta">
                        <span className="tag">{p.category.singular}</span>
                        {p.year}
                      </p>
                      <p className="news__title">{p.title}</p>
                      {summary(p) && <p className="news__desc">{summary(p)}</p>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/works" className="footer__more">Ver todos os projetos</Link>
          </Section>
        )}

        <Section title="Novos projetos">
          <p className="footer__lead">
            Disponível para projetos de marca, produto e design systems. Vamos conversar sobre o seu.
          </p>
          <dl className="footer__contacts">
            <div><dt>E-mail</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={LINKEDIN} target="_blank" rel="noopener">Lucas Cartaxo ↗</a></dd></div>
            <div><dt>Instagram</dt><dd><a href={INSTAGRAM} target="_blank" rel="noopener">@lworks.co ↗</a></dd></div>
            <div><dt>Base</dt><dd>João Pessoa, Paraíba — Brasil</dd></div>
          </dl>
        </Section>

        <Section title="Serviços">
          <ul className="footer__services">
            {SERVICES.map(([name, desc]) => (
              <li key={name}><span>{name}</span>{desc}</li>
            ))}
          </ul>
        </Section>

        <Section title="Sobre">
          <p className="footer__lead">
            LWORKS® é o estúdio de Lucas Cartaxo, designer e CDO na ShiftLabs. Mais de 8 anos conectando
            marca, produto e tecnologia — da estratégia ao detalhe, do conceito ao código.
          </p>
        </Section>
      </div>

      <div className="wordmark">
        <h2 className="sr-only">LWORKS®</h2>
        <div className="wordmark-stage">
          <TechText
            text="LWORKS®"
            fontFamily="Inter Display"
            fontWeight={500}
            fontSize={2000}
            letterSpacing={0}
            align="center"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            strokeWidth={1.5}
            lineStyle="dashed"
            specks={15}
            reach={200}
            softness={0.7}
            speed={1}
            bounce={0.4}
            intro="none"
            introDuration={2}
            color="currentColor"
            accentColor="currentColor"
            selection
            labels
            draggable
            clickKick
            sweep
            guides={false}
          />
        </div>
      </div>

      <div className="container footer__bar">
        <ul>
          <li><a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href={`mailto:${EMAIL}`}>E-mail</a></li>
        </ul>
        <ul>
          <li><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Voltar ao topo ↑</button></li>
          <li>© {year} LWORKS®</li>
        </ul>
      </div>
    </footer>
  );
}
