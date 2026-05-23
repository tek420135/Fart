const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];

sections.forEach((section) => {
  if (!section.hasAttribute('tabindex')) {
    section.setAttribute('tabindex', '-1');
  }
});

inPageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    history.pushState(null, null, targetId);

    setTimeout(() => {
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = navLinks.find((l) => l.getAttribute('href') === `#${id}`);
      if (!link) return;

      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      }
    });
  },
  { rootMargin: '-80px 0px -40% 0px', threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

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
