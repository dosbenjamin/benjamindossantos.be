# CSS System

## Ownership

- Use native CSS and Astro scoped styles; do not introduce a styling framework.
- Keep shared foundations, reset rules, stable utilities, and reusable tokens in the shared global stylesheet.
- Keep component-specific presentation in the component that owns it.
- Centralize font configuration and expose loaded families through semantic font tokens.

## Tokens

- Maintain separate primitive and semantic token layers.
- Make components consume semantic tokens rather than primitive tokens.
- Promote a value to a token only when it has an intentionally reusable design role; keep isolated values local.
- Inspect the current token contract before adding or changing values.
- Define reusable roles for relevant color, typography, spacing, dimensions, borders, radii, shadows, opacity, stacking, and motion values.

## Layout and Typography

- Align layout and typography to a 4px grid, with a 2px half-step for fine details.
- Use the closed spacing scale of 2, 4, 8, 12, 16, 24, 32, 48, and 64 pixels.
- Keep layout dimensions on the grid even when they are not spacing tokens.

## Components and States

- Use component-prefixed `kebab-case` class names without full BEM notation.
- Express visual variants consistently with `data-*` attributes when no native state represents the variant.
- Style real state through native attributes, ARIA state, or pseudo-classes.
- Never add ARIA solely as a styling hook.
- Add a global utility only for a stable pattern reused across components.
