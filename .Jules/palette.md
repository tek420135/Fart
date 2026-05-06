# Palette's Journal - Ghost Hemp Shop

## 2025-05-14 - Initial Observations
**Learning:** The current navigation implementation lacks programmatic focus management, which breaks the experience for screen reader and keyboard users after an in-page jump. The IntersectionObserver also uses a generic rootMargin that might not be optimal for the sticky header.
**Action:** Implement programmatic focus shifting with a delay after smooth scrolling, and optimize the IntersectionObserver configuration for more reliable active state tracking.
