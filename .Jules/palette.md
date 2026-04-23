## 2025-05-14 - Accessible Smooth Scroll Navigation
**Learning:** In single-page applications with smooth scrolling, visual alignment isn't enough; the keyboard focus remains on the triggering link, breaking the experience for screen readers and keyboard users.
**Action:** Always programmatically shift focus to the target section after a smooth scroll completes (using a ~600ms delay for common animation durations) and ensure sections have `tabindex="-1"` and `scroll-margin-top` for proper alignment.
