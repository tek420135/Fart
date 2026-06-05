## 2025-05-14 - Initial Navigation & Accessibility Baseline
**Learning:** The application uses a 94px sticky header that obscures section headings upon navigation. Accessible anchor navigation requires manually shifting focus to target elements to support screen readers, while IntersectionObserver needs a specific rootMargin ('-94px 0px -60% 0px') to reliably track active sections in this layout.
**Action:** Apply global scroll-padding-top, implement programmatic focus management for in-page links, and refine observer margins to ensure a seamless and accessible navigation experience.

## 2025-05-14 - Navigation State Logic & Repository Hygiene
**Learning:** To accurately highlight the active navigation link in a single-page app with intermediary sections, a "backwards-search" logic is required to find the nearest preceding section that exists in the menu. Additionally, binary artifacts and logs must be excluded from PRs to maintain repository cleanliness and respect diff constraints.
**Action:** Implement the fallback logic in the IntersectionObserver and ensure all temporary verification assets are deleted before final submission.
