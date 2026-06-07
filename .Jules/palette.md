## 2025-05-14 - Accessible Anchor Navigation and Visual Feedback

**Learning:** Smooth scrolling via JavaScript often breaks accessibility by leaving the keyboard focus on the triggering link, and sticky headers can obscure the target content. Additionally, users lack visual confirmation of their position in long one-page sites without explicit active link styling.

**Action:** Always pair smooth scroll logic with:
1. `scroll-padding-top` on the `html` element to clear sticky headers.
2. Programmatic focus management using `tabindex="-1"` and `.focus({ preventScroll: true })` on the target section.
3. URL hash synchronization using `history.pushState`.
4. Visual `aria-current="page"` styling coupled with a refined `IntersectionObserver` `rootMargin`.
