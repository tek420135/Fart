## 2025-05-14 - [Accessible Anchor Navigation]
**Learning:** Setting `aria-current="false"` is an accessibility anti-pattern; inactive states should have the attribute removed entirely to avoid confusing assistive technologies. Additionally, smooth-scrolling to an anchor without programmatically shifting focus (`tabindex="-1"` + `.focus()`) leaves keyboard users stranded at the top of the page.
**Action:** Always remove `aria-current` for inactive states and ensure target sections have `tabindex="-1"` to receive programmatic focus after navigation.

## 2025-05-14 - [Sticky Header Scroll Alignment]
**Learning:** Sticky headers often overlap target content when using native anchor navigation or `scrollIntoView`.
**Action:** Implement `scroll-padding-top` on the `html` element to create a global offset that accounts for the header height without complex JavaScript offset calculations.
