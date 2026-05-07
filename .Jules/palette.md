# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Accessible Smooth Scroll Navigation
**Learning:** Custom smooth-scroll implementations using `preventDefault()` often trap keyboard focus on the triggering link, leaving screen reader and keyboard users at the top of the page while the viewport moves. Additionally, using `aria-current="false"` is semantically incorrect; the attribute should be removed entirely for inactive states.
**Action:** When implementing smooth scroll, always programmatically shift focus to the target element (adding `tabindex="-1"` if necessary) after the scroll animation. Use `history.pushState` to sync the URL without trigger a native jump, and manage `aria-current="page"` by adding/removing the attribute rather than toggling a boolean value.
