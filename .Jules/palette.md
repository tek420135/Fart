## 2025-05-14 - Enhanced Anchor Navigation & Focus Management
**Learning:** Pure CSS `scroll-behavior: smooth` combined with `preventDefault()` on links requires manual URL hash management via `history.pushState` and programmatic focus shifts to ensure both shareable links and accessibility for screen readers. `scroll-margin-top` is essential on target sections to account for sticky headers.
**Action:** Always pair smooth scrolling JS with `history.pushState` and `setTimeout` focus management (approx 600ms) on target elements.
