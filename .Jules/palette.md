## 2025-05-14 - Accessible Anchor Navigation
**Learning:** In single-page applications with a sticky header, smooth scrolling alone is insufficient for accessibility. Focus must be programmatically shifted to the target element (using `tabindex="-1"` and `.focus({ preventScroll: true })`) to support screen reader and keyboard users. Additionally, `scroll-margin-top` is essential to prevent the header from obscuring the target heading.
**Action:** Always pair smooth scroll interactions with programmatic focus management and CSS scroll offsets.

## 2025-05-14 - Accurate Active Section Highlights
**Learning:** An `IntersectionObserver` with a centered `rootMargin` (e.g., `'-45% 0px -45% 0px'`) can be unreliable for tracking the active section in a sticky header setup. A more top-heavy margin like `'-10% 0px -80% 0px'` provides a more intuitive "active" state as the user scrolls into new content.
**Action:** Use a top-biased `rootMargin` for navigation highlighting in sticky header layouts.
