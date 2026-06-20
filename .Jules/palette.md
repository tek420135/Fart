# Palette's Journal - Ghost Hemp Shop

## 2025-05-14 - Initial Observations
**Learning:** The application has a sticky header and smooth scrolling but lacks focus management for in-page links, causing accessibility issues for keyboard and screen reader users. Additionally, using `aria-current='false'` is an anti-pattern; the attribute should be removed when not active.
**Action:** Implement programmatic focus management with a timeout after smooth scroll, fix the aria-current attribute handling, and add scroll-padding-top to the HTML to account for the sticky header.

## 2025-05-14 - Robust Active Section Tracking
**Learning:** In single-page apps with long sections or varying heights, `IntersectionObserver` can trigger for multiple sections at once. Simple toggle logic causes flickering or incorrect active states. Sorting intersecting entries by their top position ensures the most relevant (topmost) section is always highlighted.
**Action:** Use a `Set` to track all intersecting sections and sort by `getBoundingClientRect().top` to determine the primary active section for navigation highlighting.
