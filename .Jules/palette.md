## 2025-05-14 - Sticky Header Navigation Overlap
**Learning:** In single-page applications with sticky headers, internal navigation links (anchor tags) often scroll the target element to the very top of the viewport, causing the header to obscure the section title. This creates a jarring user experience where the context of the navigation is partially hidden.
**Action:** Always apply `scroll-margin-top` (matching the header's height) to sections or heading elements that serve as anchor targets to ensure they are fully visible after navigation.
