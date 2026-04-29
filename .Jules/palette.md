## 2026-04-29 - Accessible Single-Page Navigation
**Learning:** Standard smooth-scroll implementations often fail to update the URL hash and neglect programmatic focus management, leaving screen reader users stuck at the top of the page while the viewport moves. Additionally, sticky headers often obscure the very targets users are trying to reach.

**Action:**
1. Use `scroll-margin-top` on anchor targets to account for sticky headers without affecting layout spacing.
2. Synchronize the URL hash using `history.pushState` within click handlers to ensure shareable links and back-button consistency.
3. Manually shift focus to the target section (using `tabindex="-1"`) after the scroll animation completes (e.g., via a ~600ms `setTimeout`) to support assistive technologies.
4. Tune `IntersectionObserver` with a specific `rootMargin` (e.g., `'-10% 0px -80% 0px'`) to ensure only the most relevant section is marked as `aria-current="page"`.
