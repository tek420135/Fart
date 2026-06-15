# Palette's Journal - Critical UX Learnings

## 2025-05-14 - Navigation State Precision
**Learning:** In a single-page layout with a sticky header (~94px) and varying section heights, a standard IntersectionObserver `rootMargin` of `0px` causes "active" state flickering or delayed triggers. An asymmetric margin like `'-10% 0px -80% 0px'` ensures that the section currently occupying the top portion of the viewport is consistently recognized as active.
**Action:** Always test IntersectionObserver thresholds against both very short and very long sections to find the optimal 'active' window.

## 2025-05-14 - Visual Focus and Anchor Alignment
**Learning:** Standard anchor links (`#id`) often result in headers being obscured by sticky navigation. Global `scroll-padding-top` is the cleanest CSS-only solution, while `:focus-visible` ensures that keyboard users have high-contrast feedback that matches the site's brand (e.g., using `var(--mint)`).
**Action:** Apply `scroll-padding-top` to the `html` element based on the computed height of the sticky header plus a small buffer.
