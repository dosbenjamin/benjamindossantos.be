---
name: frontend-design
description: Create, change, or review frontend presentation and Web-platform behavior. Use for visual UI, Astro component presentation, CSS, design tokens, typography, responsive layouts, semantic interface markup, page SEO presentation, accessibility, browser compatibility, Web APIs, or work involving design.pen.
---

# Frontend Design

Build accessible interfaces that follow the project's implemented design system and visual intent. Inspect authoritative sources instead of copying their current contents into this skill.

## Source Ownership

- Treat `design.pen` as the source of visual intent, layout, responsive intent, and visual states.
- Treat the shared global stylesheet as the implemented token, foundation, reset, and shared-utility contract.
- Treat component and page files as owners of semantic markup, accessible behavior, and local presentation.
- Preserve semantic HTML and accessibility when literal visual translation conflicts with them. Explain material divergence and update the design only when design changes are in scope.

## Workflow

1. Inspect the relevant source files and nearby patterns before deciding.
2. Load only the references required by the task.
3. Implement with existing semantic tokens and patterns where they satisfy the need.
4. Validate responsive behavior, semantics, accessibility, and visual alignment in proportion to the change.

## Reference Routing

- Read [references/design-workflow.md](references/design-workflow.md) for inspecting, changing, translating, or comparing `design.pen`.
- Read [references/css-system.md](references/css-system.md) for CSS, tokens, typography, spacing, component variants, or shared visual foundations.
- Read [references/accessibility.md](references/accessibility.md) for semantic markup, interaction, accessibility, or page SEO structure.
- Read [references/web-platform.md](references/web-platform.md) for browser-facing JavaScript, Web APIs, CSS compatibility, fallbacks, or progressive enhancement.

Read multiple references when the task crosses their concerns. Do not access `.pen` files through regular filesystem tools.
