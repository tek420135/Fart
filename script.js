document.documentElement.classList.add('js-enabled');
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

    // UX: Ensure focus moves to target for accessibility and keyboard navigation
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${id}`;
          link.setAttribute('aria-current', active ? 'page' : 'false');
        });
      }
    });
  },
  { rootMargin: '-10% 0px -10% 0px', threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  });
}

const vrTrigger = document.getElementById('vr-portal-trigger');
if (vrTrigger) {
  vrTrigger.addEventListener('click', (e) => {
    const target = document.querySelector('#vr');
    if (!target) return;

    e.preventDefault();
    const overlay = document.createElement('div');
    overlay.className = 'vr-transition-overlay';
    document.body.appendChild(overlay);

    // Simulate immersive portal effect with CSS transitions
    overlay.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'auto' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });

        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 800);
      }, 400);
    });
  });
}

const guruBtn = document.getElementById('ganja-guru-trigger');
if (guruBtn) {
  guruBtn.addEventListener('click', () => {
    const greeting = "Yo! I'm GanjaGuru. Ready to elevate your flow?";
    guruBtn.innerHTML = `<span>🍀</span> ${greeting}`;
    setTimeout(() => {
      guruBtn.innerHTML = `<span>🤖</span> GanjaGuru`;
    }, 4000);
  });
}
