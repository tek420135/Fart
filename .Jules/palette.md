## 2024-05-15 - Layout-Stable Navigation Bolding
**Learning:** Toggling `font-weight: 700` on navigation links during active or hover states often causes horizontal layout shifts (jitter) because bold text takes up more space than regular text.
**Action:** Use a `data-text` attribute on the link and a hidden `::after` pseudo-element with `font-weight: 700` and `content: attr(data-text)` to reserve the maximum width needed, ensuring the layout remains stable when the weight changes.
