## 2025-05-14 - Accessible Smooth Scroll Focus Management
**Learning:** Programmatic focus shifts are essential for accessible smooth scrolling. To keep HTML clean and PRs concise, `tabindex="-1"` can be applied programmatically via JS to navigation targets.
**Action:** Use JS to set `tabindex="-1"` on sections and call `.focus({ preventScroll: true })` after scroll animations to guide screen readers and keyboard users.
