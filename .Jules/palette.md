## 2025-05-14 - Visualizing Programmatic State
**Learning:** Programmatic accessibility markers like `aria-current="page"` provide essential information for screen readers, but sighted users also require a visual representation of the active state for orientation. Relying solely on `aria-current` without corresponding CSS rules creates a gap in the user experience.
**Action:** When auditng navigation systems, verify that every accessibility-driven state change (active, expanded, pressed) has an associated, distinct visual style that adheres to the design system.
