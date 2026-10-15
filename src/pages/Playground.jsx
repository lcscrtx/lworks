import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Matter from 'matter-js';
import { useProjects } from '@/lib/projectsStore';
import { useImageRatios, ratioOf } from '@/lib/useImageRatios';
import { useTitle } from '@/lib/useTitle';
import { categoryImages, projectHref, mixByProject } from '@/lib/media';

const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;

const SHADES = ['#d9d9d9', '#cfcfcf', '#e3e3e3', '#c7c7c7'];
const DROP_EVERY = 110; // ms entre uma imagem e outra caindo
const WALL = 200; // espessura das paredes invisíveis
// limite de objetos na tela (desempenho; menos no celular, que tem pouco espaço)
const MAX_ITEMS = typeof window !== 'undefined' && window.innerWidth < 600 ? 18 : 40;

export default function Playground() {
  useTitle('Playground');
  const navigate = useNavigate();
  const stage = useRef(null);
  const nodes = useRef([]);
  const { categories, loaded } = useProjects();

  // Todas as imagens cadastradas (capas, galerias e posts), misturadas.
  // Categorias ainda sem imagens entram com os placeholders dos projetos.
  const ITEMS = useMemo(() => {
    const all = categories.flatMap((c) => {
      const images = categoryImages(c);
      return images.length ? images : c.items.map((p) => ({ ...p, src: undefined, href: projectHref(c, p) }));
    });
    return mixByProject(all).slice(0, MAX_ITEMS);
  }, [categories]);
  const ratios = useImageRatios(ITEMS.map((i) => i.src).filter(Boolean));
  const ratiosRef = useRef(ratios);
  ratiosRef.current = ratios; // proporções mais recentes no momento em que cada imagem cai

  // Só solta quando as imagens carregaram (ou após 2,5s, para não travar)
  const [waited, setWaited] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWaited(true), 2500); return () => clearTimeout(t); }, []);
  const ready = loaded && (waited || ITEMS.every((i) => !i.src || ratios[i.src]));

  useEffect(() => {
    if (!ready) return; // espera projetos e imagens carregarem para soltar só uma vez
    const el = stage.current;
    let { width, height } = el.getBoundingClientRect();

    const engine = Engine.create({ gravity: { y: 1 } });
    const runner = Runner.create();

    // Chão e paredes laterais (sem teto: as imagens entram por cima)
    const walls = [
      Bodies.rectangle(width / 2, height + WALL / 2, width * 3, WALL, { isStatic: true }),
      Bodies.rectangle(-WALL / 2, height / 2 - 2000, WALL, height * 2 + 4000, { isStatic: true }),
      Bodies.rectangle(width + WALL / 2, height / 2 - 2000, WALL, height * 2 + 4000, { isStatic: true })
    ];
    Composite.add(engine.world, walls);

    // Tamanho de cada imagem: mesma área visual, proporção real
    const base = Math.min(240, Math.max(120, width * 0.15));
    const area = base * base * 0.8;
    const bodies = [];
    const timers = ITEMS.map((item, i) =>
      setTimeout(() => {
        const ratio = ratioOf(item, ratiosRef.current);
        const w = Math.sqrt(area * ratio);
        const h = w / ratio;
        const x = w / 2 + Math.random() * Math.max(1, width - w);
        const body = Bodies.rectangle(x, -h - Math.random() * 200, w, h, {
          angle: (Math.random() - 0.5) * 0.8,
          restitution: 0.25,
          friction: 0.6,
          frictionAir: 0.01,
          chamfer: { radius: 4 }
        });
        body.plugin = { index: i, w, h };
        bodies[i] = body;
        Composite.add(engine.world, body);
        const node = nodes.current[i];
        if (node) {
          node.style.width = `${w}px`;
          node.style.height = `${h}px`;
          node.style.visibility = 'visible';
        }
      }, i * DROP_EVERY)
    );

    // Arrastar e arremessar com o mouse (ou dedo)
    const mouse = Mouse.create(el);
    mouse.element.removeEventListener('wheel', mouse.mousewheel);
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);
    const drag = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    Composite.add(engine.world, drag);

    // Clique sem arrastar abre o projeto
    let down = null;
    Events.on(drag, 'mousedown', (e) => { down = { ...e.mouse.position, t: Date.now(), body: drag.body }; });
    Events.on(drag, 'mouseup', (e) => {
      const b = down?.body;
      const moved = down && Math.hypot(e.mouse.position.x - down.x, e.mouse.position.y - down.y);
      if (b && moved < 5 && Date.now() - down.t < 300) {
        const item = ITEMS[b.plugin.index];
        if (item?.href) navigate(item.href);
      }
      down = null;
    });
    Events.on(drag, 'startdrag', () => el.classList.add('is-dragging'));
    Events.on(drag, 'enddrag', () => el.classList.remove('is-dragging'));

    // Desenha: cada imagem (DOM) segue o corpo físico
    let frame;
    const draw = () => {
      bodies.forEach((b) => {
        if (!b) return;
        const node = nodes.current[b.plugin.index];
        if (node) {
          node.style.transform =
            `translate(${b.position.x - b.plugin.w / 2}px, ${b.position.y - b.plugin.h / 2}px) rotate(${b.angle}rad)`;
        }
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    Runner.run(runner, engine);

    // Redimensionar a janela move as paredes
    const onResize = () => {
      ({ width, height } = el.getBoundingClientRect());
      Body.setPosition(walls[0], { x: width / 2, y: height + WALL / 2 });
      Body.setPosition(walls[2], { x: width + WALL / 2, y: walls[2].position.y });
    };
    window.addEventListener('resize', onResize);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      Mouse.clearSourceEvents(mouse);
      nodes.current.forEach((n) => { if (n) n.style.visibility = 'hidden'; });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ITEMS, ready]);

  return (
    <main className="playground">
      <div className="playground__stage" ref={stage}>
        {ITEMS.map((item, i) => (
          <div
            key={i}
            ref={(n) => { nodes.current[i] = n; }}
            className="playground__item"
            style={{ background: item.src ? undefined : SHADES[i % SHADES.length] }}
            title={item.title}
          >
            {item.src && <img src={item.src} alt={item.title} draggable={false} />}
          </div>
        ))}
      </div>
    </main>
  );
}
