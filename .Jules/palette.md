## 2026-05-25 - Layout-Stable Navigation Highlighting

**Learning:** Toggling `font-weight: 700` on navigation links for active or hover states often causes subtle but annoying layout shifts as the text expands, pushing neighboring links. Using a `data-text` attribute combined with a hidden `::after` pseudo-element (which reserves the bold width) provides a smooth, stable experience. Additionally, when using `IntersectionObserver` in single-page apps with a sticky header, sorting visible entries by their vertical position (`boundingClientRect.top`) ensures the most relevant section is highlighted.

**Action:** Implement `data-text` and `::after` for bold states and use `scroll-padding-top` to prevent header overlap. Always shift focus to sections after smooth scrolling to support keyboard and screen reader users.
