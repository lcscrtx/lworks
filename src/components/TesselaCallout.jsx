/*
  Chamada para o Tessela, o design system publicado em /tessela.
  É outro site (fora do React Router), por isso um <a> comum, aberto em nova aba.
*/
export default function TesselaCallout() {
  return (
    <section className="tessela-callout" aria-labelledby="tessela-callout-title">
      <p className="tessela-callout__label">Design system</p>
      <img className="tessela-callout__icon" src="/assets/tessela.svg" alt="" width="16" height="16" />
      <p id="tessela-callout-title" className="tessela-callout__title">Tessela</p>
      <p className="tessela-callout__text">
        O design system que construí do zero na ShiftLabs: mais de 50 componentes, tokens e telas prontas.
      </p>
      <a className="tessela-callout__cta" href="/tessela" target="_blank" rel="noopener">Ver o Tessela <span aria-hidden="true">→</span></a>
    </section>
  );
}
