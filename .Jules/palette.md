# Palette's Journal - Ghost Hemp Shop

## 2025-05-14 - [Surgical UX Updates]
**Learning:** Overwriting core script files during UX enhancements can lead to major regressions by accidentally deleting existing logic like animations or service worker registrations.
**Action:** Always use surgical edits (like `replace_with_git_merge_diff`) instead of overwriting entire files. Maintain a strict focus on "ONE micro-UX improvement" to ensure code changes remain under the 50-line boundary.

## 2025-05-14 - [Accessible Smooth-Scroll]
**Learning:** Using `scroll-behavior: smooth` in CSS provides a nice visual transition, but it does not move the browser's focus. This creates a broken experience for keyboard and screen reader users who remain stuck at the top of the page.
**Action:** Implement programmatic focus management (using `tabindex="-1"` and `.focus()`) alongside smooth scrolls to ensure accessibility.
