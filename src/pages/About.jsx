import { useEffect } from 'react';
import { about, experience, clients } from '@/data/about';
import { useTitle } from '@/lib/useTitle';
import Footer from '@/components/Footer';

export default function About() {
  useTitle('About');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  let step = 0; // ordem da animação de entrada
  const delay = () => ({ '--delay': `${0.1 + Math.min(step++, 10) * 0.08}s` });

  return (
    <>
      <main className="container about">
        <section className="about__intro">
          <h1 className="about__title reveal" style={delay()}>About me</h1>
          <div className="about__bio reveal" style={delay()}>
            {about.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <figure className="about__photo reveal" style={delay()}>
            <img src={about.photo} alt="Foto de Lucas Cartaxo" width="304" height="304" />
            <figcaption>{about.caption}</figcaption>
          </figure>
        </section>

        <section className="about__section">
          <h2 className="about__title reveal" style={delay()}>Work Experience</h2>
          <ul className="experience">
            {experience.map((job) => (
              <li className="job reveal" style={delay()} key={job.company + job.role}>
                <div className="job__head">
                  <div className="job__logo">{job.logo && <img src={job.logo} alt="" />}</div>
                  <p>
                    <span className="ink">{job.company}</span>
                    <br />
                    {job.role} · {job.period}
                  </p>
                </div>
                <div className="job__desc">
                  <p>{[].concat(job.description).join(' ')}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="about__section">
          <h2 className="about__title reveal" style={delay()}>Clients</h2>
          <ul className="clients">
            {clients.map((c) => (
              <li className="client reveal" style={delay()} key={c.name} title={c.name}>
                {c.logo ? <img src={c.logo} alt={c.name} /> : <span className="sr-only">{c.name}</span>}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
