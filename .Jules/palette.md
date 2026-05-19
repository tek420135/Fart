## 2025-05-15 - Accessible Smooth Scroll Focus Management
**Learning:** In single-page applications (SPAs) with smooth-scrolling navigation, simply scrolling the viewport is insufficient for accessibility. Screen readers and keyboard users remain stuck at the previous location unless focus is programmatically moved to the target section. Additionally, sticky headers can obscure section headings unless a `scroll-margin-top` is applied.
**Action:** Always pair smooth-scroll logic with programmatic focus management:
1. Apply `tabindex="-1"` to the target section.
2. Use `.focus({ preventScroll: true })` to move focus without triggering a native browser jump.
3. If using an animation library (like GSAP), delay the focus shift until the animation completes (e.g., ~600ms) to ensure a smooth transition for sighted users while updating the focus tree for assistive tech.
4. Apply `scroll-margin-top` to target sections to account for sticky headers.
