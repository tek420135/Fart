## 2025-05-15 - Accessible Anchor Navigation
**Learning:** In single-page applications with sticky headers, simply using `scroll-behavior: smooth` is insufficient for accessibility. The header often obscures the target, and focus remains on the clicked link rather than the target section.
**Action:** Always pair `scroll-padding-top` in CSS with a JavaScript focus shift (using `tabindex="-1"` and `.focus({ preventScroll: true })`) to ensure the viewport is correctly aligned and screen readers/keyboard users are moved to the new content.
