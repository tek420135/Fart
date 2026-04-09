## 2025-05-14 - [Navigation Accessibility & Focus Management]
**Learning:** In applications with sticky headers and smooth-scrolling, anchor navigation often causes two issues: content being obscured by the header and keyboard focus remaining on the trigger link rather than the destination.
**Action:** Always apply `scroll-margin-top` to target sections to account for header height. Additionally, implement manual focus management using `.focus()` after smooth-scroll completion to ensure a seamless experience for keyboard and screen reader users.
