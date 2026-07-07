## 2025-05-14 - Accessible Scroll Navigation
**Learning:** Smooth scrolling without focus management leaves keyboard and screen reader users stranded at the top of the page while the viewport moves. Using `tabindex="-1"` and `.focus()` ensures the accessibility tree follows the visual scroll.
**Action:** Always pair `scrollIntoView` with programmatic focus management on the target element.
