## 2025-05-14 - Smooth Scroll and Focus Management
**Learning:** In single-page applications with sticky headers, simply scrolling to a section is insufficient. Accessibility requires programmatic focus management (using `tabindex="-1"` and `.focus()`) to assist screen reader users, and `scroll-padding-top` to prevent the header from obscuring the target content.
**Action:** Always pair smooth-scroll interactions with focus shifts and ensure adequate `scroll-padding-top` is set on the root element.
