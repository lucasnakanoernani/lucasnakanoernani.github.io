// Progressive enhancement: content and anchor links work without JavaScript.
(() => {
  const links = [...document.querySelectorAll('.rail nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let clickedSection = null;
  let releaseTimer;
  let framePending = false;
  const header = document.querySelector('.rail');
  const mobileNavigation = window.matchMedia('(max-width: 800px)');
  let headerHeight = 0;

  function syncNavigationHeight() {
    headerHeight = mobileNavigation.matches && header
      ? Math.ceil(header.getBoundingClientRect().height)
      : 0;
    document.documentElement.style.setProperty('--mobile-nav-height', `${headerHeight}px`);
    scheduleUpdate();
  }

  if (header && 'ResizeObserver' in window) {
    const headerObserver = new ResizeObserver(syncNavigationHeight);
    headerObserver.observe(header);
  }
  window.addEventListener('resize', syncNavigationHeight);
  window.addEventListener('load', syncNavigationHeight);
  syncNavigationHeight();

  function highlight(id) {
    links.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActive() {
    framePending = false;
    // Keep the clicked item active while its native smooth scroll completes.
    if (clickedSection) return highlight(clickedSection);
    const viewport = window.innerHeight;
    const activationLine = Math.max(headerHeight + 24, 80, viewport * 0.28);
    let active = sections.filter(section => section.getBoundingClientRect().top <= activationLine).pop();
    const contact = sections.find(section => section.id === 'contato');
    const atBottom = window.scrollY + viewport >= document.documentElement.scrollHeight - 4;
    // The last section may never reach the activation line on a tall screen.
    if (atBottom && contact && contact.getBoundingClientRect().top < viewport) active = contact;
    highlight(active?.id);
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateActive);
  }

  function releaseSelection() {
    window.clearTimeout(releaseTimer);
    clickedSection = null;
    scheduleUpdate();
  }

  links.forEach(link => link.addEventListener('click', () => {
    clickedSection = link.getAttribute('href').slice(1);
    highlight(clickedSection);
    window.clearTimeout(releaseTimer);
    releaseTimer = window.setTimeout(releaseSelection, 1600);
  }));
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('scrollend', releaseSelection);
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  window.addEventListener('wheel', releaseSelection, { passive: true });
  window.addEventListener('touchstart', releaseSelection, { passive: true });
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) releaseSelection();
  });
  scheduleUpdate();

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('seen');
      reveal.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.project').forEach(project => reveal.observe(project));
})();
