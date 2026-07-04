const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];

inPageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
  });
});

const activeSections = new Set();
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => e.isIntersecting ? activeSections.add(e.target) : activeSections.delete(e.target));
    const sorted = [...activeSections].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    const activeId = sorted[0]?.getAttribute('id');
    navLinks.forEach((l) => l.getAttribute('href') === `#${activeId}` ? l.setAttribute('aria-current', 'page') : l.removeAttribute('aria-current'));
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    window.scrollY > 400 ? backToTop.removeAttribute('hidden') : backToTop.setAttribute('hidden', '');
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}

if (window.gsap) {
  window.gsap.from('.section', {
    opacity: 0,
    y: 20,
    duration: 0.55,
    stagger: 0.05,
    ease: 'power2.out'
  });
}
