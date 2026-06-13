# Palette UX Journal

## 2025-05-14 - Scroll Padding and Focus Management
**Learning:** Sticky headers often obscure content when using anchor links. Applying `scroll-padding-top` to the `html` element is a clean, CSS-only fix that respects scroll-margin and works across browsers. Additionally, programmatic focus shifts require a delay to ensure the scroll animation has completed, and containers should have their focus rings suppressed to avoid visual clutter.
**Action:** Use `scroll-padding-top` matching header height + margin, and implement a `setTimeout` of 600ms for focus shifts after smooth scrolls.
