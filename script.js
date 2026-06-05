const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];

inPageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id && id !== '#' ? document.querySelector(id) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, null, id);
    setTimeout(() => {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    let idx = sections.findIndex(s => s.id === id);
    let activeLink;
    while (idx >= 0 && !activeLink) {
      activeLink = navLinks.find(l => l.getAttribute('href') === `#${sections[idx].id}`);
      idx--;
    }
    navLinks.forEach(l => l === activeLink ? l.setAttribute('aria-current', 'page') : l.removeAttribute('aria-current'));
  });
}, { rootMargin: '-94px 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(e => console.warn('SW failed:', e));
  });
}

if (window.gsap) {
  window.gsap.from('.section', { opacity: 0, y: 20, duration: 0.55, stagger: 0.05, ease: 'power2.out' });
}
