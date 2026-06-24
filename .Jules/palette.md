# Palette's Journal - Ghost Hemp Shop

## 2024-06-24 - Navigation Accessibility and Focus Management
**Learning:** Single-page applications with sticky headers often suffer from heading overlap and lost keyboard focus during anchor navigation. Additionally, using `aria-current="false"` is an accessibility anti-pattern; the attribute should be removed entirely for inactive states.
**Action:** Always implement `scroll-padding-top` on the `html` element to account for sticky headers and use programmatic focus management (`target.focus({ preventScroll: true })`) after smooth scrolling to maintain accessibility.

## 2024-06-24 - IntersectionObserver Testing Constraints
**Learning:** Automated verification of IntersectionObserver-based active navigation states is highly sensitive to viewport dimensions and timing in headless browsers.
**Action:** Ensure Playwright tests use a minimum viewport of 1280x800 and include explicit waits or manual scroll triggers to reliably verify intersection logic.
