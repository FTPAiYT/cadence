(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const viewer = $('.screenshot-dialog');
  $$('.expand-shot').forEach(button => button.addEventListener('click', () => {
    $('#full-shot').src = button.dataset.shot;
    $('#full-shot').alt = button.querySelector('img').alt;
    $('#shot-title').textContent = button.dataset.caption;
    viewer.querySelector('.reject-annotation').hidden = !button.querySelector('.reject-annotation');
    viewer.showModal();
  }));
  $('#close-shot').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) { const r = viewer.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) viewer.close(); } });
  const config = window.CADENCE_SITE || {};
  function httpsUrl(value) { try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''; } catch { return ''; } }
  const repository = config.published === true ? httpsUrl(config.repositoryUrl) : '';
  function releaseAsset(value, extension) {
    const safe = httpsUrl(value);
    if (!safe) return '';
    const url = new URL(safe);
    return url.origin === 'https://github.com' &&
      url.pathname.startsWith('/FTPAiYT/cadence/releases/download/') &&
      url.pathname.endsWith(extension) && !url.search && !url.hash ? safe : '';
  }
  const download = config.published === true ? releaseAsset(config.windowsDownloadUrl, '.exe') : '';
  const macDownload = config.published === true && config.macPublished === true ? releaseAsset(config.macDownloadUrl, '.dmg') : '';
  const prompt = $('#agent-prompt');
  if (repository) {
    prompt.value = `Help me get started with Cadence: ${repository}\n\nRead README.md, AGENTS.md and SETUP.md. Check my operating system, native processor and OS version, then use the compatible published download and its platform-specific setup instructions. Verify its file size and SHA-256. Stop if my computer is unsupported; never use an installer for another OS. Help me install and open Cadence, then connect you through Cadence ▾ → Connect your agent. Ask how I make videos, where the finished clips arrive, and which song or project they belong to. Bring the clips I choose into a named bin. Preserve my original files and existing edits. Ask for any required operating-system approvals.`;
    $('#copy-prompt').innerHTML = 'Copy link + instructions <span aria-hidden="true">⧉</span>';
    $('#repo-status').textContent = 'Includes the GitHub setup link and the instructions your agent needs.';
    $('#repo-link').href = repository; $('#repo-link').hidden = false;
  }
  function configureDownload(selector, pendingSelector, url, label) {
    const link = $(selector), pending = $(pendingSelector);
    link.hidden = !url;
    pending.hidden = Boolean(url);
    if (url) link.href = url;
    else {
      link.removeAttribute('href');
      pending.textContent = `${label} download is not currently published. Check the official GitHub release.`;
    }
  }
  configureDownload('#windows-download', '#windows-pending', download, 'Windows');
  configureDownload('#mac-download', '#mac-pending', macDownload, 'Mac');
  if (config.releaseNotice) $('#release-status').textContent = config.releaseNotice;
  const fitPrompt = () => { prompt.style.height = 'auto'; prompt.style.height = `${prompt.scrollHeight + 2}px`; };
  fitPrompt();
  addEventListener('resize', fitPrompt);
  $('#copy-prompt').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(prompt.value); $('#copy-status').textContent = 'Copied. Paste this into your agent.'; }
    catch { prompt.focus(); prompt.select(); $('#copy-status').textContent = 'Instructions selected. Press Ctrl+C (or ⌘C) to copy.'; }
  });
})();
