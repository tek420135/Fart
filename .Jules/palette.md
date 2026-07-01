## 2025-07-01 - Accessible Single-Page Navigation
**Learning:** In single-page applications with sticky headers, anchor navigation often fails accessibility by:
1. Overlapping the target section with the header.
2. Failing to move keyboard focus to the target section, leaving focus on the clicked link.
3. Using `aria-current="false"` which can be confusing for screen readers compared to removing the attribute.

**Action:**
1. Use `scroll-padding-top` on the `html` element to offset sticky headers.
2. Programmatically apply `tabindex="-1"` and `.focus()` to target sections after navigation.
3. Completely remove `aria-current` from inactive links rather than setting it to "false".
4. Ensure utility buttons like "Back to Top" reset focus to the top landmark (e.g., `#hero`).
