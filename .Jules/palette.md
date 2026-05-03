## 2025-05-14 - Accessible Anchor Navigation with Sticky Headers

**Learning:** Sticky headers often obscure anchor targets (sections), creating a jarring experience. Additionally, smooth-scrolling via JavaScript doesn't automatically move keyboard focus, which leaves screen reader and keyboard users at the top of the page while the viewport moves.

**Action:**
1. Use `scroll-margin-top` (e.g., `5rem`) on anchor targets to ensure they land below the sticky header.
2. Manually shift focus to the target element (using `tabindex='-1'` and `.focus({ preventScroll: true })`) after the scroll animation completes to support accessibility.
3. Synchronize the URL hash using `history.pushState` to prevent the browser's default jumpy scroll behavior while maintaining linkable URLs.
4. Use `IntersectionObserver` to manage `aria-current='page'` on navigation links for real-time visual and programmatic feedback.
