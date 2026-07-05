## 2025-05-15 - [Navigation & Focus Management]
**Learning:** For single-page applications with sticky headers, anchor navigation requires both `scroll-padding-top` in CSS (for visual clearance) and programmatic focus management in JS (for keyboard/screen reader accessibility). Using `aria-current='page'` while removing the attribute for inactive states is superior to `aria-current='false'`.
**Action:** Always pair smooth-scrolling anchors with `target.focus({ preventScroll: true })` and ensure sections have `tabindex='-1'`.

## 2025-05-15 - [Back to Top Pattern]
**Learning:** A "Back to Top" button should be independent of specific hero IDs for scrolling but should reset focus to a logical start point (like the hero section) for keyboard users. Glass-morphism styles require `backdrop-filter` and high-contrast hover states to remain accessible against complex backgrounds.
**Action:** Use `window.scrollTo({ top: 0, behavior: 'smooth' })` for the scroll action and target the top-most meaningful section for the focus reset.
