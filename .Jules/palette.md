## 2025-05-14 - Accessible Anchor Navigation & Focus Management

**Learning:** When using smooth scrolling for anchor links, focus often stays on the clicked link, making it difficult for keyboard and screen reader users to navigate the newly visible content. Additionally, sticky headers can obscure the target content if not properly offset.

**Action:**
1. Use `scroll-margin-top` in CSS to offset targets from sticky headers.
2. Add `tabindex="-1"` to target elements (sections, main) to make them programmatically focusable.
3. In JavaScript, call `target.focus({ preventScroll: true })` after scrolling to the anchor target.
4. Use `aria-current="page"` on navigation links and remove the attribute for inactive links to provide clear accessibility semantics.
5. Use a specific `rootMargin` (e.g., `'-10% 0px -80% 0px'`) for `IntersectionObserver` to accurately track the "active" section as it enters the top of the viewport.
