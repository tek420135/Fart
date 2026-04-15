## 2025-05-14 - Accessible Anchor Navigation
**Learning:** Smooth scrolling alone doesn't update the focus for screen readers, leaving users at the top of the page when they expect to be at the new section.
**Action:** Manually shift focus to the target element (using `tabindex='-1'` and `.focus({ preventScroll: true })`) after scrolling to support screen reader and keyboard users.

## 2025-05-14 - Sticky Header Offsets
**Learning:** Sticky headers obscure target content when navigating via anchor links if `scroll-margin-top` is not set, making headings unreadable.
**Action:** Apply a `scroll-margin-top` (e.g., `5rem`) to major anchor targets to ensure they are fully visible under the sticky header.
