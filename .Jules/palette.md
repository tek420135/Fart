## 2025-05-14 - Sticky Header Offset and Focus Management

**Learning:** When using a sticky header, CSS `scroll-margin-top` is a more robust solution for preventing content overlap during anchor navigation than JavaScript-based scroll offsets, as it works with native browser behavior. Additionally, smooth-scrolling alone is insufficient for accessibility; focus must be programmatically shifted to the target element (using `tabindex="-1"`) to ensure screen readers and keyboard users are correctly positioned.

**Action:** Always apply `scroll-margin-top` to anchor targets and implement a post-scroll focus shift in JavaScript for all internal links.
