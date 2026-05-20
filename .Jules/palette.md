## 2026-05-20 - Refinement of Navigation and Focus Management
**Learning:** For a single-page application with a sticky header, combining `scroll-margin-top` in CSS with programmatic focus shifts (`tabindex="-1"` and `.focus()`) in JavaScript significantly improves accessibility and UX by ensuring that target content is neither obscured nor loses keyboard focus context after smooth scrolling.
**Action:** Always pair smooth scrolling with focus management and `scroll-margin-top` when sticky headers are present.
