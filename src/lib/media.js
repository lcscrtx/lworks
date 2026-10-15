/*
  Todas as imagens de um projeto: capa + imagens das galerias + posts.
  Vídeos entram pela imagem de capa (poster), quando houver.
  Cada item: { src, ratio?, href, title }
*/
export function projectImages(project, href) {
  const list = [];
  const add = (m) => {
    if (m?.src && !list.some((x) => x.src === m.src)) list.push({ src: m.src, ratio: m.ratio, href, title: project.title });
  };
  add(project);
  (project.blocks || []).forEach((b) => b.type === 'images' && b.items.forEach(add));
  (project.posts || []).forEach(add);
  return list;
}

export const projectHref = (category, project) =>
  project.slug ? `/projects/${category.id}/${project.slug}` : `/projects/${category.id}`;

// Todas as imagens de uma categoria
export const categoryImages = (category) =>
  category.items.flatMap((p) => projectImages(p, projectHref(category, p)));

/*
  Mistura por projeto: sorteia um projeto, mostra de 1 a 3 imagens dele,
  troca para outro projeto (nunca o mesmo em seguida) e assim por diante.
  Evita sequências longas de um projeto só quando há muitas imagens.
*/
export function mixByProject(images) {
  const groups = new Map();
  images.forEach((img) => {
    const key = img.href || img.title;
    groups.set(key, [...(groups.get(key) || []), img]);
  });
  const queues = [...groups.values()].map(shuffle);
  const out = [];
  let last = -1;

  while (queues.some((q) => q.length)) {
    const options = queues.map((q, i) => i).filter((i) => queues[i].length && i !== last);
    // Sorteio com peso pelas imagens que faltam: projetos grandes ficam espalhados pela lista toda.
    // Só sobrou o mesmo projeto: segue com ele.
    let pick = last;
    if (options.length) {
      let r = Math.random() * options.reduce((sum, i) => sum + queues[i].length, 0);
      pick = options.find((i) => (r -= queues[i].length) < 0) ?? options[options.length - 1];
    }
    const run = 1 + Math.floor(Math.random() * 3); // 1 a 3 imagens
    out.push(...queues[pick].splice(0, run));
    last = pick;
  }
  return out;
}

// Embaralha (Fisher–Yates) sem alterar a lista original
export function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
