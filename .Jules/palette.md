## 2025-05-14 - Active Section Tracking & Accessible Navigation
**Learning:** For a single-page app with a sticky header (80px tall), an `IntersectionObserver` `rootMargin` of `'-80px 0px -40% 0px'` provides much more reliable tracking of the 'active' section, especially for short content areas at the bottom of the page.
**Action:** Always coordinate `rootMargin` with header height and ensure focus is programmatically shifted after smooth scrolling to maintain accessibility.
