# Palette's Journal - Ghost Hemp Shop

## 2025-05-15 - [Anchor Navigation & Focus Management]
**Learning:** In single-page applications with sticky headers, anchor navigation often results in the header obscuring the section heading. Additionally, standard anchor links do not move keyboard focus to the target section, leaving screen reader and keyboard users at the top of the page.

**Action:**
1. Always apply `scroll-padding-top` to the `html` element to account for sticky header height.
2. Ensure all anchor targets have `tabindex="-1"` and programmatically `.focus()` them after navigation to synchronize visual and keyboard focus.
3. Use `aria-current="page"` (not `true` or `false`) on navigation links to identify the active section, and remove the attribute entirely for inactive states to avoid accessibility anti-patterns.

## 2025-05-15 - [Focus Visibility in Dark Themes]
**Learning:** Default browser focus rings often have poor contrast on dark, glass-morphism themed backgrounds. Using brand-aligned colors for focus indicators improves both accessibility and visual cohesion.

**Action:** Implement global `:focus-visible` styles using the primary brand color (e.g., `var(--mint)`) with an `outline-offset` to ensure the focus ring is clearly distinct from the element's border.
