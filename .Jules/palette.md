## 2025-05-15 - [Navigation Accessibility & Smooth Scroll Focus]
**Learning:** Using `aria-current='false'` is an accessibility anti-pattern; for inactive navigation states, the attribute must be removed completely rather than set to false. Additionally, accessible anchor navigation requires manually shifting focus to the target element (using `tabindex='-1'` and `.focus({ preventScroll: true })`) after scrolling to support screen reader and keyboard users.
**Action:** Always ensure smooth scroll handlers manage focus, and toggle `aria-current` presence instead of value.
