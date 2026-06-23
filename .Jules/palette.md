## 2025-05-14 - Accessible Anchor Navigation
**Learning:** Smooth scrolling to anchors without shifting focus or providing scroll padding leads to poor accessibility and UX. Screen readers remain on the trigger, and sticky headers can obscure the target content.
**Action:** Implement `scroll-padding-top`, programmatic focus management for anchor links, and ensure `aria-current` is handled correctly (removed when not active).
