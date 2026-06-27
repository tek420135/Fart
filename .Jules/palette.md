## 2025-05-14 - Accessible Scroll-to-Top Patterns

**Learning:** Implementing a "Back to Top" button requires more than just a scroll jump; for full accessibility, focus must be programmatically reset to the top of the document (e.g., the page header) to ensure keyboard and screen reader users aren't left stranded at the bottom of the page. This requires the target element to have `tabindex="-1"`.

**Action:** When adding scroll-to-top functionality, always include an explicit focus reset using `element.focus({ preventScroll: true })`. Ensure the button is hidden from the accessibility tree when not visually present by using `visibility: hidden` or `display: none` in addition to `opacity: 0`.
