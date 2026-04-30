## 2026-04-30 - Sticky Header and Anchor Focus Management
**Learning:** In a single-page app with a sticky header, native anchor navigation can cause the header to overlap content and fail to shift keyboard focus. Using `scroll-margin-top` on targets and `setTimeout` for programmatic `.focus()` ensures a smooth, accessible transition.
**Action:** Always pair sticky headers with `scroll-margin-top` and use a 500-600ms delayed `focus()` call to allow the smooth-scroll animation to complete before shifting focus.
