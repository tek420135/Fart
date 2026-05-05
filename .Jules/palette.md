# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Accessible Smooth Navigation & Sticky Header Sync
**Learning:** Native smooth-scrolling via CSS or JS often fails to update focus for keyboard and screen reader users, leaving them stranded at the top of the page. Additionally, sticky headers often overlap target headings.
**Action:**
1. Use `scroll-margin-top` on target sections to handle header offsets without complex JS calculations.
2. Manually shift focus to the target section after a scroll delay (500-600ms) using `tabindex="-1"` and `.focus({ preventScroll: true })`.
3. Synchronize `aria-current="page"` in navigation using `IntersectionObserver` with a `rootMargin` that accounts for the header height (e.g., `'-80px 0px -40% 0px'`).
4. Update the URL hash via `history.pushState` to ensure shareable links and "back" button consistency without triggering double-scrolling.
