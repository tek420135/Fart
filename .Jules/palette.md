# Palette's Journal - Critical UX/A11y Learnings
## 2026-04-07 - [Anchor Navigation & Focus Management]
**Learning:** In glass-morphism SPAs with sticky headers, CSS `scroll-margin-top` ensures visual alignment, but programmatic focus management (`tabindex='-1'` and `.focus()`) is critical to orient screen readers and keyboard users after an in-page transition.
**Action:** Always pair `scroll-margin-top` with a focus shift in JavaScript for anchor navigation.
