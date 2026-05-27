## 2025-05-14 - Smooth Navigation and Layout-Stable Bolding

**Learning:** Implementing in-page smooth scrolling without manual focus management leaves keyboard and screen reader users at the trigger link, creating a disconnected experience. Additionally, toggling `font-weight: 700` on active navigation links causes layout shifts as the text width increases.

**Action:**
1. Use `setTimeout` (approx 600ms) after triggering `scrollIntoView` to manually `.focus()` the target section (ensuring it has `tabindex="-1"`).
2. Prevent layout shifts by using a `data-text` attribute on links and a hidden `::after` pseudo-element with `font-weight: 700` to reserve the necessary width.
3. Optimize `IntersectionObserver` for "scroll spy" by sorting intersecting entries by `boundingClientRect.top` to accurately identify the section closest to the top.
