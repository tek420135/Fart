# Palette Journal

## 2025-05-14 - Navigation and Accessibility Enhancements
**Learning:** Standard smooth scrolling and IntersectionObserver setups often miss critical accessibility details like focus management and visual "active" indicators. Proper scroll margins are also essential when using sticky headers to prevent content from being hidden.
**Action:** Always apply scroll-margin-top to sections, use ARIA-current for nav links with distinct styles, and programmatically shift focus to the target section after smooth scrolling.
