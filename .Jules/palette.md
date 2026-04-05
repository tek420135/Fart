# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Anchor Navigation & Focus Management
**Learning:** Standard smooth scroll via `scrollIntoView` doesn't automatically move keyboard focus to the target element. Additionally, sticky headers can obscure the target of an anchor link.
**Action:** Manually shift focus to the target element (using `tabindex='-1'` and `.focus()`) after scrolling and apply `scroll-margin-top` to sections.
