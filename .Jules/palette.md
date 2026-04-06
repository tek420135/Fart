## 2026-04-04 - Sticky Header Anchor Navigation
**Learning:** In layouts with a sticky header, anchor navigation can cause the target element to be obscured by the header. Standard `scroll-behavior: smooth` does not account for the header's height. Additionally, screen readers and keyboard users need focus to be explicitly moved to the target section after the transition.
**Action:** Always apply `scroll-margin-top` to target sections (matching the header's height) and use JavaScript to move focus (`tabindex="-1"` + `.focus()`) to the target section during smooth scroll events.

## 2026-04-06 - Progressive Enhancement for Scroll Animations
**Learning:** Using `opacity: 0` on elements to prepare them for JavaScript-driven entrance animations (like IntersectionObserver triggers) can result in a completely blank page for users with disabled scripts or loading failures.
**Action:** Always scope visibility-hiding styles to a `.js-enabled` class added to the root element via JavaScript. This ensures content remains accessible by default while allowing for enhanced motion for supported users.
