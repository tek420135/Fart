const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];

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
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries.filter((e) => e.isIntersecting);
    if (visibleEntries.length === 0) return;

    const mostActive = visibleEntries.sort(
      (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
    )[0];
    const id = mostActive.target.getAttribute('id');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  },
  { rootMargin: '-94px 0px -60% 0px', threshold: 0 }
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
