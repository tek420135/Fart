# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - Improving Single-Page Navigation Accessibility

**Learning:** Using `aria-current='false'` is an accessibility anti-pattern; for inactive navigation states, the attribute should be removed entirely. Additionally, anchor-based navigation in single-page apps often fails to move the keyboard focus to the target element, leaving screen reader users stuck at the link they just clicked even after the visual scroll. Sticky headers also frequently overlap section headings unless `scroll-padding-top` is applied to the `html` element.

**Action:**
1. Remove `aria-current` from inactive links instead of setting to `false`.
2. Manually shift focus to the target element using `target.focus({ preventScroll: true })` after `scrollIntoView`.
3. Apply `scroll-padding-top` equal to the header height to the `html` element.
4. Ensure target sections have `tabindex='-1'` to allow programmatic focus.

## 2025-05-15 - Enhancing Long-Page UX with "Back to Top"

**Learning:** For long landing pages, a "Back to Top" button provides a significant usability boost, but it must be accessible. This means it should be hidden from the accessibility tree when not visible, and it should reset the keyboard focus to the top of the page (e.g., the Hero section) rather than just scrolling the viewport.

**Action:**
1. Use the `hidden` attribute to remove the button from the tab order when it's not active.
2. Implement a scroll listener to toggle visibility based on a threshold (e.g., 400px).
3. Reset focus to `#hero` (with `tabindex='-1'`) on click.
4. Use glass-morphism and transitions to ensure the button feels integrated with the "vibe commerce" aesthetic.
