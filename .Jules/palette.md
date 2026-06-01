## 2025-05-14 - Layout-stable bolding for navigation links
**Learning:** Toggling `font-weight: 700` on hover or active states causes layout shifts as the text width changes. This can be prevented by using a hidden `::after` pseudo-element that reserves the space for the bold text.
**Action:** Apply the `data-text` attribute to links and use `a::after { content: attr(data-text); font-weight: 700; height: 0; visibility: hidden; overflow: hidden; }` in CSS.
