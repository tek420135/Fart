## 2025-03-24 - Navigation UX and Accessibility Enhancements
**Learning:** Accessible anchor navigation requires manually shifting focus to the target element (using `tabindex='-1'` and `.focus({ preventScroll: true })`) after scrolling to support screen reader and keyboard users. Additionally, using `scroll-padding-top` on the `html` element is a more robust way to handle sticky headers than adding margins to individual sections.
**Action:** Always implement programmatic focus management for smooth-scrolling links and ensure `scroll-padding-top` is set when using sticky headers.
