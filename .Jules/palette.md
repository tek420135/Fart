# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Enhancing Anchor Navigation UX
**Learning:** In single-page applications with sticky headers, simple anchor links often lead to the header obscuring the target content. Additionally, smooth scrolling alone doesn't manage focus, leaving screen reader users and keyboard navigators stranded at the trigger element.
**Action:** Use `scroll-margin-top` to account for sticky headers and programmatically shift focus to the target section (using `tabindex="-1"`) after the scroll animation completes to ensure a truly accessible and seamless transition.
