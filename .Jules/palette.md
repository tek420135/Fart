# Palette's Journal

## 2025-05-15 - [Accessible Anchor Navigation]
**Learning:** Manual focus shift is required for accessible smooth scrolling when using `preventDefault()` on anchor links. Browsers do not automatically move the focus point when `preventDefault()` is used to intercept the click, leaving keyboard and screen reader users at the original link location even after a visual scroll.
**Action:** Always add `tabindex='-1'` and call `.focus({ preventScroll: true })` on the target element after calling `scrollIntoView()` to ensure the accessibility tree follows the visual focus.
