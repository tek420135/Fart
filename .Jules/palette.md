## 2025-05-24 - Enhanced Navigation Accessibility and Logic
**Learning:** For single-page applications with sticky headers, `scroll-padding-top` on the `html` element provides a robust global solution to prevent content from being obscured. Managing focus after smooth scrolling is critical for keyboard and screen reader users, but requires a `setTimeout` (approx. 600ms) to ensure the scroll animation completes first.
**Action:** Use `scroll-padding-top`, `history.pushState`, and programmatic focus management (`tabindex="-1"`) for all in-page navigation.
