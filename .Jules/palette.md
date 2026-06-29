## 2025-05-14 - [Back to Top Focus Management]
**Learning:** In single-page applications, a "Back to Top" button that only scrolls visually leaves keyboard users stranded at the bottom of the DOM. Programmatically resetting focus to the top-most section (using `tabindex="-1"`) is essential for accessible navigation.
**Action:** Always pair smooth-scrolling 'Back to Top' buttons with a `.focus()` call to a top-level container to synchronize the accessibility tree with the visual state.
