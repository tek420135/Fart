const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];

inPageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Sync URL hash without jumping
    history.pushState(null, null, targetId);

    // Manage focus for accessibility
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }
    // Small delay to ensure smooth scroll is underway or browser has updated position
    setTimeout(() => {
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        if (active) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  },
  { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
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
