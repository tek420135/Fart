## 2025-05-22 - Layout-Stable Active Navigation
**Learning:** Toggling `font-weight: 700` on navigation links during scroll or hover causes layout shifts (jitter) because bold text is wider.
**Action:** Use a `data-text` attribute on the link and a hidden `::after` pseudo-element with `font-weight: 700` and `content: attr(data-text)` to reserve the necessary width upfront.

## 2025-05-22 - Semantic Navigation States
**Learning:** `aria-current="page"` is the standard for identifying the active link in a navigation set. Setting it to `"false"` is non-standard.
**Action:** Apply `aria-current="page"` to the active link and remove the attribute entirely from inactive links to maintain clean accessibility semantics.
