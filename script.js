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

    // Sync hash without jump
    history.pushState(null, null, targetId);

    // Shift focus after scroll
    setTimeout(() => {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 600);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    // Sort entries by distance from top to find the most active one
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visible.length > 0) {
      const activeId = visible[0].target.getAttribute('id');
      let targetId = activeId;

      // If the current section isn't in nav, find the preceding section that is
      const activeNavMatch = navLinks.find((link) => link.getAttribute('href') === `#${activeId}`);

      if (!activeNavMatch) {
        const sectionIndex = sections.indexOf(visible[0].target);
        for (let i = sectionIndex - 1; i >= 0; i--) {
          const id = sections[i].getAttribute('id');
          if (navLinks.some((link) => link.getAttribute('href') === `#${id}`)) {
            targetId = id;
            break;
          }
        }
      }

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${targetId}`) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  },
  { rootMargin: '-94px 0px -40% 0px', threshold: 0 }
);

sections.forEach((section) => {
  section.setAttribute('tabindex', '-1');
  observer.observe(section);
});

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
