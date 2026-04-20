# Palette Journal - Ghost Hemp Shop

## 2024-05-29 - Initial UX Audit
**Learning:** The site uses a sticky header which can obscure anchor targets when navigating via internal links. Additionally, smooth scrolling alone doesn't manage focus, which is a barrier for screen reader users.
**Action:** Implement `scroll-margin-top` for all major sections and programmatically shift focus to the target element after scrolling.

## 2024-05-29 - Navigation State Feedback
**Learning:** While `IntersectionObserver` updates `aria-current`, there is no visual differentiation for the active link in the navigation menu.
**Action:** Add CSS styles for `nav a[aria-current='page']` to match hover/focus states for persistent visual feedback.

## 2024-05-29 - Programmatic Focus Aesthetics
**Learning:** Programmatically focusing on a container can sometimes trigger a default browser focus ring, which might be visually disruptive for mouse users.
**Action:** Apply `[tabindex="-1"]:focus { outline: none; }` to keep the UI clean while maintaining accessibility for assistive technologies.

## 2024-05-29 - Verification of Active States
**Learning:** When verifying navigation links visually, an element might appear highlighted both if it is the 'active' section and if it still holds keyboard focus from a click.
**Action:** Use precise attribute checks (like `hasAttribute('aria-current')`) in automated tests to distinguish between state-driven and focus-driven styling.
