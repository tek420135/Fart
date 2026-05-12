const inPageLinks = document.querySelectorAll('a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];

// Prepare sections for programmatic focus
sections.forEach((section) => {
  section.setAttribute('tabindex', '-1');
});

inPageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    // Update URL hash without jump
    history.pushState(null, null, href);

    // Smooth scroll
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Accessibility: shift focus after scroll
    setTimeout(() => {
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    // Sort entries by their vertical position to handle multiple intersections correctly
    const visibleEntries = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visibleEntries.length > 0) {
      // Pick the first visible one (top-most in the viewport area we care about)
      const id = visibleEntries[0].target.getAttribute('id');
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
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
