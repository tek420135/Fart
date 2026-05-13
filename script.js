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
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${id}`;
        link.setAttribute('aria-current', active ? 'page' : 'false');
      });
    });
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
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

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    let isVisible = false;

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 300;
      if (show === isVisible) return;
      isVisible = show;

      window.gsap.to(backToTop, {
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        duration: 0.3,
        overwrite: 'auto',
        onStart: () => {
          if (show) backToTop.style.pointerEvents = 'auto';
        },
        onComplete: () => {
          if (!show) backToTop.style.pointerEvents = 'none';
        }
      });
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        setTimeout(() => {
          skipLink.focus({ preventScroll: true });
        }, 600);
      }
    });
  }
}
