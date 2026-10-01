(() => {
  const host = document.querySelector('cadence-workflow');
  if (!host) return;
  // Support browsers without declarative Shadow DOM as well.
  if (!host.shadowRoot) {
    const template = host.querySelector('template');
    host.attachShadow({ mode: 'open' }).append(template.content.cloneNode(true));
    template.remove();
  }
  const frames = [...host.shadowRoot.querySelectorAll('.frame')];
  const fit = () => frames.forEach(frame => {
    const stage = frame.firstElementChild;
    const scale = frame.clientWidth / 1440;
    frame.style.height = `${parseFloat(getComputedStyle(stage).height) * scale}px`;
    stage.style.transform = `scale(${scale})`;
  });
  new ResizeObserver(fit).observe(host);
  fit();
})();
