## 2026-04-04 - Sticky Header Anchor Navigation
**Learning:** In layouts with a sticky header, anchor navigation can cause the target element to be obscured by the header. Standard `scroll-behavior: smooth` does not account for the header's height. Additionally, screen readers and keyboard users need focus to be explicitly moved to the target section after the transition.
**Action:** Always apply `scroll-margin-top` to target sections (matching the header's height) and use JavaScript to move focus (`tabindex="-1"` + `.focus()`) to the target section during smooth scroll events.
