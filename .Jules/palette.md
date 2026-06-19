# Palette's Journal - Ghost Hemp Shop / PotGrowHub

## 2025-05-22 - [Sticky Header & Anchor Navigation]
**Learning:** In single-page applications with sticky headers, CSS `scroll-padding-top` on the `html` element is the most reliable way to prevent headings from being obscured by the header without requiring complex JavaScript offset calculations.
**Action:** Always check header height (approx. 8rem in this app) and apply matching `scroll-padding-top`.

## 2025-05-22 - [Smooth Scroll Focus Management]
**Learning:** Browser focus does not automatically follow smooth-scroll animations triggered by `element.scrollIntoView()`. This breaks keyboard and screen reader navigation flow as the focus remains on the clicked link rather than moving to the new content.
**Action:** Manually shift focus using `target.focus()` after a delay (e.g., 600ms) that matches the scroll animation duration. Ensure the target has `tabindex="-1"`.

## 2025-05-22 - [ARIA Current State Patterns]
**Learning:** Using `aria-current="false"` is an accessibility anti-pattern for navigation links. To properly indicate an inactive state to screen readers, the attribute should be removed entirely.
**Action:** Use `element.removeAttribute('aria-current')` for inactive navigation states instead of setting it to "false".
