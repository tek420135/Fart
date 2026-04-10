## 2025-05-14 - Accessible Anchor Navigation with Sticky Headers
**Learning:** In SPAs or long-scrolling pages with sticky headers, simply using `scroll-behavior: smooth` is insufficient for accessibility. Focus remains on the clicked link, making it difficult for keyboard and screen reader users to navigate the newly visible content. Additionally, sticky headers often obscure the target content.
**Action:** Always implement a three-part fix:
1. CSS `scroll-margin-top` on anchor targets to prevent header overlap.
2. `tabindex="-1"` on targets to allow programmatic focus.
3. JavaScript `.focus({ preventScroll: true })` on the target element after the scroll is triggered.
