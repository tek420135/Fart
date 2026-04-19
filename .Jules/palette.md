## 2025-05-14 - Accessible Smooth Navigation
**Learning:** For single-page navigation, smooth scrolling alone is insufficient for screen readers; programmatic focus must be shifted to the target element. To avoid visual noise for sighted users, a global focus reset for programmatically focusable elements (tabindex="-1") is necessary.
**Action:** Always shift focus to sections after smooth scroll using `setTimeout` and apply `[tabindex="-1"]:focus { outline: none; }` in CSS.
