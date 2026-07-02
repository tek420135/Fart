const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];
const main = document.querySelector('main');

if (main) main.setAttribute('tabindex', '-1');
sections.forEach(s => { if (!s.hasAttribute('tabindex')) s.setAttribute('tabindex', '-1'); });

inPageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    target.focus({ preventScroll: true });
  });
});

const activeSections = new Set();
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) activeSections.add(entry.target);
    else activeSections.delete(entry.target);
  });
  const mostActive = [...activeSections].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
  let activeId = mostActive ? mostActive.getAttribute('id') : null;
  if (activeId && !navLinks.some(l => l.getAttribute('href') === `#${activeId}`)) {
    const idx = sections.findIndex(s => s.getAttribute('id') === activeId);
    for (let i = idx - 1; i >= 0; i--) {
      const pid = sections[i].getAttribute('id');
      if (navLinks.some(l => l.getAttribute('href') === `#${pid}`)) { activeId = pid; break; }
    }
  }
  navLinks.forEach((link) => {
    if (link.getAttribute('href') === `#${activeId}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

sections.forEach((section) => observer.observe(section));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(e => console.warn('SW failed:', e));
  });
}

if (window.gsap) {
  window.gsap.from('.section', { opacity: 0, y: 20, duration: 0.55, stagger: 0.05, ease: 'power2.out' });
}
