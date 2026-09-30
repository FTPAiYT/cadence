(() => {
  'use strict';
  const previewEnabled = false;
  const banner = window.CADENCE_SITE?.banner;
  if (previewEnabled) document.body.classList.add('banner-preview-enabled');
  const $ = selector => document.querySelector(selector);
  const panel = $('#banner-picker'), toggle = $('#open-banner-picker'), hero = $('.hero');
  const image = $('.hero-image'), select = $('#banner-choice'), status = $('#banner-status');
  const key = 'cadence.banner-preview.v1';
  let references = [], index = 0, generation = 0, preferences = { positions: {}, favourites: [] };
  let cycling = false, cycleTimer, outgoing, nextInCycle, cycleIds = '';
  try {
    const saved = previewEnabled ? JSON.parse(localStorage.getItem(key)) : null;
    if (saved && typeof saved === 'object') preferences = { ...saved, positions: saved.positions || {} };
  } catch { /* Preview still works when browser storage is unavailable. */ }
  if (!Array.isArray(preferences.favourites)) preferences.favourites = [];
  if (banner && preferences.bannerVersion !== banner.version) {
    preferences.favourites = banner.slides.map(item => item.id);
    for (const item of banner.slides) preferences.positions[item.id] = { x: item.x, y: item.y };
    preferences.bannerVersion = banner.version;
  }
  const percent = (value, fallback) => Number.isFinite(Number(value)) ? Math.min(100, Math.max(0, Number(value))) : fallback;
  const save = () => { if (previewEnabled) try { localStorage.setItem(key, JSON.stringify(preferences)); } catch {} };
  const favourites = () => preferences.favourites.map(id => references.find(item => item.id === id)).filter(Boolean);
  function stopCycle() {
    cycling = false; clearTimeout(cycleTimer);
    generation++;
    $('#banner-cycle').textContent = 'Preview cycle';
    $('#banner-cycle').setAttribute('aria-pressed', 'false');
    $('#banner-pause').textContent = 'Play cycle';
    $('#banner-pause').hidden = false;
  }
  function renderFavourites() {
    const list = favourites(), marked = preferences.favourites.includes(references[index]?.id);
    $('#banner-favourite').textContent = marked ? '★ Favourited' : '☆ Favourite';
    $('#banner-favourite').setAttribute('aria-pressed', String(marked));
    $('#banner-favourite-count').textContent = `Favourites · ${list.length}`;
    $('#banner-copy-favourites').disabled = !list.length;
    $('#banner-cycle').disabled = list.length < 2;
    $('#banner-cycle-hint').textContent = list.length < 2 ? 'Star a few images to build your shortlist.' : '#10 first · shuffled after that · 6 seconds · soft fade';
    $('#banner-favourites').replaceChildren(...list.map(item => {
      const button = document.createElement('button');
      const number = references.findIndex(reference => reference.id === item.id) + 1;
      button.textContent = `★ ${String(number).padStart(2, '0')}`;
      button.title = item.label; button.setAttribute('aria-label', `Show favourite ${number}: ${item.label}`);
      button.setAttribute('aria-pressed', String(item.id === references[index]?.id));
      button.addEventListener('click', () => { stopCycle(); show(number - 1); });
      return button;
    }));
    for (const option of select.options) {
      const item = references.find(reference => reference.id === option.value);
      option.textContent = `${preferences.favourites.includes(item.id) ? '★ ' : ''}${String(references.indexOf(item) + 1).padStart(2, '0')} · ${item.label}`;
    }
  }
  function scheduleCycle() {
    clearTimeout(cycleTimer);
    if (!cycling) return;
    cycleTimer = setTimeout(async () => {
      if (document.hidden) { scheduleCycle(); return; }
      const list = favourites();
      if (list.length < 2) { stopCycle(); return; }
      const ids = list.map(item => item.id);
      if (cycleIds !== ids.join(',')) {
        cycleIds = ids.join(',');
        nextInCycle = window.CadenceBannerOrder(ids, references[index]?.id);
      }
      const nextId = nextInCycle();
      const nextIndex = references.findIndex(item => item.id === nextId);
      // Resolve the queued ID once; a missing ID must never wrap to the last reference.
      if (nextIndex < 0) { stopCycle(); return; }
      await show(nextIndex, true);
      scheduleCycle();
    }, 6000);
  }
  function setOpen(open) {
    if (open) stopCycle();
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('banner-picker-open', open);
    hero.style.setProperty('--banner-toolbar-height', `${panel.getBoundingClientRect().height}px`);
  }
  function frame() {
    if (!references.length) return;
    const x = percent($('#banner-x').value, 50), y = percent($('#banner-y').value, 26);
    hero.style.setProperty('--banner-x', `${x}%`);
    hero.style.setProperty('--banner-y', `${y}%`);
    image.style.objectPosition = `${x}% ${y}%`;
    preferences.positions[references[index].id] = { x, y };
    save();
  }
  async function show(next, fade = false) {
    if (!references.length) return;
    index = (next + references.length) % references.length;
    const item = references[index], request = ++generation;
    select.value = item.id;
    status.textContent = 'Loading reference…';
    const candidate = new Image(); candidate.src = item.src;
    try { await candidate.decode(); }
    catch { if (request === generation) status.textContent = 'Could not load this image. Choose another or refresh.'; return; }
    if (request !== generation) return;
    outgoing?.remove(); outgoing = null;
    if (fade && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const previous = image.cloneNode();
      previous.alt = ''; previous.setAttribute('aria-hidden', 'true');
      previous.style.objectPosition = getComputedStyle(image).objectPosition;
      image.after(previous); outgoing = previous;
      previous.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 900, fill: 'forwards' }).finished.then(() => previous.remove()).catch(() => previous.remove());
    }
    image.src = item.src;
    image.width = item.width; image.height = item.height;
    image.alt = `Original Bossy reference: ${item.label}`;
    const position = preferences.positions[item.id] || { x: 50, y: item.height > item.width ? 26 : 50 };
    $('#banner-x').value = percent(position.x, 50);
    $('#banner-y').value = percent(position.y, 50);
    preferences.selected = item.id;
    frame();
    renderFavourites();
    $('#banner-count').textContent = `${index + 1} / ${references.length}`;
    $('#banner-resolution').textContent = `${item.width} × ${item.height} original`;
    status.textContent = 'Use ← → to browse. Selection stays in this browser.';
    // Load only adjacent full-size originals, not the entire library at once.
    for (const offset of [-1, 1]) { const preload = new Image(); preload.src = references[(index + offset + references.length) % references.length].src; }
  }
  toggle.hidden = !previewEnabled;
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  $('#banner-hide').addEventListener('click', () => { setOpen(false); toggle.focus(); });
  $('#banner-prev').addEventListener('click', () => { stopCycle(); show(index - 1); });
  $('#banner-next').addEventListener('click', () => { stopCycle(); show(index + 1); });
  select.addEventListener('change', () => { stopCycle(); show(references.findIndex(item => item.id === select.value)); });
  $('#banner-favourite').addEventListener('click', () => {
    const item = references[index]; if (!item) return;
    if (preferences.favourites.includes(item.id)) preferences.favourites = preferences.favourites.filter(id => id !== item.id);
    else preferences.favourites.push(item.id);
    if (preferences.favourites.length < 2) stopCycle();
    save(); renderFavourites();
  });
  async function startCycle() {
    if (cycling) { stopCycle(); return; }
    if (favourites().length < 2) return;
    cycling = true;
    $('#banner-cycle').textContent = 'Pause cycle';
    $('#banner-cycle').setAttribute('aria-pressed', 'true');
    $('#banner-pause').hidden = false;
    $('#banner-pause').textContent = 'Pause cycle';
    const first = favourites().find(item => item.id === banner?.first) || favourites()[0];
    await show(references.indexOf(first), references[index]?.id !== first.id);
    if (!cycling) return;
    cycleIds = favourites().map(item => item.id).join(',');
    nextInCycle = window.CadenceBannerOrder(favourites().map(item => item.id), first.id);
    scheduleCycle();
  }
  $('#banner-cycle').addEventListener('click', startCycle);
  $('#banner-pause').addEventListener('click', () => cycling ? stopCycle() : startCycle());
  $('#banner-copy-favourites').addEventListener('click', async () => {
    const text = 'Cadence banner favourites (#10 first, then shuffled):\n' + favourites().map(item => {
      const position = preferences.positions[item.id] || { x: 50, y: item.height > item.width ? 26 : 50 };
      return `${references.indexOf(item) + 1}. ${item.label}\nImage: ${item.src}\nPosition: ${position.x}% ${position.y}%`;
    }).join('\n\n');
    try { await navigator.clipboard.writeText(text); status.textContent = 'Favourites copied. Paste them into our chat when you’re ready.'; }
    catch { status.textContent = 'Copy was unavailable. Your starred image numbers are shown in the shortlist.'; }
  });
  for (const id of ['#banner-x', '#banner-y']) $(id).addEventListener('input', frame);
  $('#banner-reset').addEventListener('click', () => { $('#banner-x').value = 50; $('#banner-y').value = references[index]?.height > references[index]?.width ? 26 : 50; frame(); });
  $('#banner-text').addEventListener('change', event => hero.classList.toggle('banner-hide-text', event.target.checked));
  $('#banner-copy').addEventListener('click', async () => {
    const item = references[index]; if (!item) return;
    const text = `Cadence banner choice: ${index + 1} / ${references.length} — ${item.label}\nImage: ${item.src}\nOriginal: ${item.filename}\nPosition: ${$('#banner-x').value}% ${$('#banner-y').value}%`;
    try { await navigator.clipboard.writeText(text); status.textContent = 'Copied. Paste this into our chat to make it the final banner.'; }
    catch { status.textContent = `Choice ${index + 1}: ${item.label}. Position ${$('#banner-x').value}% ${$('#banner-y').value}%.`; }
  });
  document.addEventListener('keydown', event => {
    if (panel.hidden || event.altKey || event.ctrlKey || event.metaKey || document.querySelector('dialog[open]') || event.target.closest('input, select, textarea, [contenteditable="true"]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); stopCycle(); show(index + (event.key === 'ArrowRight' ? 1 : -1)); }
  });
  new ResizeObserver(() => hero.style.setProperty('--banner-toolbar-height', `${panel.getBoundingClientRect().height}px`)).observe(panel);
  setOpen(false);
  const loadReferences = previewEnabled ? fetch('banner-references.json').then(response => { if (!response.ok) throw Error('Reference list unavailable'); return response.json(); }) : Promise.resolve(banner.slides.map(item => ({ ...item, src: `${item.id}.webp` })));
  loadReferences.then(async items => {
    references = items;
    select.replaceChildren(...items.map((item, n) => new Option(`${String(n + 1).padStart(2, '0')} · ${item.label}`, item.id)));
    const firstIndex = items.findIndex(item => item.id === banner?.first);
    await show(firstIndex >= 0 ? firstIndex : 0);
    if (!panel.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) stopCycle();
    else await startCycle();
  }).catch(() => { status.textContent = 'Could not load the reference list. Refresh to try again.'; });
})();
