import { useMemo } from 'react';
import Footer from '@/components/Footer';
import ImageTrail from '@/components/ImageTrail';
import Projects from '@/components/Projects';
import TesselaCallout from '@/components/TesselaCallout';
import { useTitle } from '@/lib/useTitle';
import { useCategories } from '@/lib/projectsStore';
import { categoryImages, mixByProject } from '@/lib/media';

export default function Home() {
  useTitle();
  const categories = useCategories();
  // Trilha da área branca: todas as imagens cadastradas, misturadas (sem imagens → retângulos cinza)
  const trail = useMemo(() => {
    const all = categories.flatMap(categoryImages);
    return all.length ? mixByProject(all) : undefined;
  }, [categories]);

  return (
    <>
      <ImageTrail images={trail} />

      <main className="container home">
        <div className="intro">
          <p>Oi, eu sou <span className="ink name-peek" tabIndex={0}>
            <u>Lucas.</u>
            <img src="/assets/lucas.png" alt="Foto de Lucas Cartaxo" width="400" height="400" />
          </span></p>
          <p>Designer, CDO e alguém que gosta de tirar ideias do papel, conectando produto, marca e tecnologia para criar interfaces que fazem sentido em cada detalhe: na aparência, na experiência e no uso.</p>
          <p>Tenho mais de 8 anos de experiência entre branding e produtos digitais. Hoje, lidero design, produto e identidade na <u className="ink">ShiftLabs</u>, da estratégia à execução.</p>
          <p>No dia a dia, transito entre marca e produto: crio identidades visuais, desenho interfaces e experiências em UI/UX e ainda coloco a mão na massa no social media, post a post. Também crio e mantenho design systems, incluindo <a href="/tessela" target="_blank" rel="noopener">um que construí do zero</a>.</p>
          <p>E gosto de construir. Desenvolvo o front-end das minhas próprias interfaces, tiro produtos do papel e entendo como a engenharia funciona por trás. <span className="tool"><img src="/assets/claude.svg" alt="" />Claude</span> e <span className="tool"><img src="/assets/openai.svg" alt="" />Codex</span> fazem parte do meu processo e me ajudam a aproximar o que imagino do que chega às mãos das pessoas.</p>
          <p>Estou em João Pessoa, Paraíba. Você me encontra no <a href="https://www.linkedin.com/in/lucas-cartaxo-015152181/" target="_blank" rel="noopener">LinkedIn</a> ou pelo <a href="https://www.instagram.com/lworks.co/" target="_blank" rel="noopener">Instagram</a><span className="ink">.</span></p>

          <img className="scribble scribble--1" src="/assets/underline-1.svg" width="202.865" height="1.22848" alt="" />
          <img className="scribble scribble--2" src="/assets/underline-2.svg" width="96.958" height="1.176" alt="" />
        </div>

        <div className="home__side">
          <Projects />
          <TesselaCallout />
        </div>
      </main>

      <Footer />
    </>
  );
}
