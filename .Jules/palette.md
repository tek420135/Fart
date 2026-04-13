## 2024-05-14 - Accessible Anchor Navigation and Active Section Tracking
**Learning:** In single-page applications (SPAs) using anchor navigation with a sticky header, users of assistive technology (keyboard/screen readers) are often left with focus on the navigation link after a "page" transition, rather than the content. Additionally, visual active states for navigation should be handled semantically.
**Action:**
1. Make section targets focusable using `tabindex="-1"`.
2. Shift focus programmatically to the target section after navigation using `.focus({ preventScroll: true })` to support screen readers while allowing smooth CSS scrolling.
3. Use `aria-current="page"` on the active navigation link, managed via `IntersectionObserver` with a `rootMargin` that prioritizes the upper viewport (e.g., `'-10% 0px -80% 0px'`).
4. Apply `scroll-margin-top` to section targets to ensure the sticky header doesn't obscure content.
