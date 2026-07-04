## 2025-05-14 - [Robust Navigation State Management]
**Learning:** Using a simple IntersectionObserver threshold on individual elements often fails to highlight the 'correct' link when multiple sections are visible (e.g., on high-resolution displays). Maintaining a `Set` of all currently intersecting elements and sorting them by their `getBoundingClientRect().top` provides a significantly more reliable and intuitive active state for users.
**Action:** Always use a `Set`-based tracking approach with coordinate-based sorting for single-page navigation highlighting.

## 2025-05-14 - [Accessible Anchor Navigation]
**Learning:** Smooth scrolling to a target via anchor links (`#section`) does not automatically move the keyboard focus in many browsers, leaving keyboard and screen reader users stranded at the top of the page.
**Action:** Target sections must have `tabindex="-1"` and be programmatically focused using `.focus({ preventScroll: true })` immediately after the scroll is initiated to ensure the focus ring follows the visual movement.
