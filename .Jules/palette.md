## 2026-05-31 - [Layout-stable Navigation Bolding]
**Learning:** Toggling `font-weight: 700` on navigation links for active/hover states causes layout shifts (jitter) because bold text is wider.
**Action:** Implement the `data-text` pattern. Add `data-text="Link Text"` to HTML anchors. In CSS, use `nav a::after { content: attr(data-text); font-weight: 700; height: 0; visibility: hidden; display: block; overflow: hidden; }` to reserve the space required for the bold state.

## 2026-05-31 - [Accessible Anchor Navigation]
**Learning:** Standard smooth-scroll implementations often fail to shift keyboard focus to the target section, breaking the experience for screen reader and keyboard users.
**Action:** Programmatically shift focus to the target element (setting `tabindex="-1"`) after the scroll animation completes (approx. 500-600ms) to ensure true logical navigation.
