## 2025-05-14 - Enhanced Navigation & Accessibility
**Learning:** Single-page applications with smooth scrolling often break keyboard and screen reader navigation by failing to update focus to the target section. Additionally, sticky headers can overlap targeted content if scroll-padding is missing.
**Action:** Always implement programmatic focus management (`target.focus()`) after smooth scroll animations and apply `scroll-padding-top` to the `html` element to account for fixed/sticky headers.
