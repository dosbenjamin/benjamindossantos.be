# Project Instructions

This project uses Ultracite. Follow the project-local Ultracite skill when writing, reviewing, formatting, or linting code.

## Commands

Run Ultracite through the devenv environment:

- Fix and format: `bun x ultracite fix`
- Check: `bun x ultracite check`
- Diagnose: `bun x ultracite doctor`

## Package Management

- Use Bun exclusively for installing dependencies and running scripts.
- Use `bun install`, `bun add`, `bun remove`, and `bun run` as appropriate.
- Use `bunx` or the equivalent `bun x` form to execute package binaries.
- Do not use npm, npx, pnpm, or Yarn.

## Commits

Follow the Conventional Commits format:

```text
type(scope): description
```

The scope is optional. Use an appropriate type such as `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, or `style`.

Examples:

- `feat(home): add project showcase`
- `fix(seo): correct canonical URL`
- `docs: document deployment workflow`

## Project Conventions

- Follow the architecture and patterns established in nearby files.
- Follow KISS: prefer the simplest readable solution that satisfies the current requirements.
- Follow DRY: consolidate genuinely repeated logic without introducing premature abstractions.
- Use English for source code, identifiers, filenames, directory names, comments, documentation, commit messages, and user-facing copy.
- Use `kebab-case` for filenames, directory names, URL slugs, CSS classes, and other free-form names.
- Follow language conventions where `kebab-case` is not valid: use `camelCase` for JavaScript and TypeScript values and functions, and `PascalCase` for components, classes, and types.
- Run relevant tests and type checks after making changes.
- Do not disable lint rules without explaining the underlying conflict.

## JavaScript and TypeScript Compatibility

- Do not leave magic values in JavaScript or TypeScript. Extract domain-significant numbers, strings, status values, keys, limits, durations, and other configuration literals into clearly named constants.
- Name constants after their purpose rather than their literal value, and group related immutable values with `as const` when that improves their relationship and inferred types.
- Use `camelCase` for JavaScript and TypeScript constants, including module-level values, configuration values, and objects declared with `as const`. Preserve uppercase or framework-defined names only when an external interface requires them, such as environment variables (`SITE_URL`) or Astro endpoint exports (`GET`).
- Keep literals inline only when their meaning is intrinsic and unambiguous in the immediate language construct; do not use comments as a substitute for naming a reusable or domain-significant value.
- Prefer modern JavaScript and TypeScript syntax, built-in objects, and Web APIs when the corresponding runtime behavior is Baseline Widely Available across Safari, Chrome, Edge, and Firefox.
- Use newly available JavaScript features and Web APIs only as progressive enhancements when the page remains readable and functional without them.
- Provide a defensive fallback or feature detection for recent runtime capabilities. Test capabilities directly instead of inferring support from a user-agent string.
- Avoid features with limited availability when they are required for content access, navigation, interaction, data integrity, or accessibility.
- Verify runtime support with MDN browser compatibility data instead of relying on memory. TypeScript compilation and type availability do not prove browser support.
- Do not add a polyfill, transpilation target change, or compatibility dependency unless the feature is necessary and a lightweight native fallback is insufficient.

## Architecture

Use a lightweight feature-based architecture while keeping Astro pages as thin composition and routing entry points. A feature represents a stable user-facing capability or content domain, such as `projects`, `about`, or `contact`; do not create a feature for every visual page section.

```text
src/
├── features/
│   └── <feature>/
│       ├── components/
│       ├── data/
│       ├── types.ts
│       └── utils.ts
├── layouts/
├── pages/
└── shared/
    ├── components/
    ├── styles/
    └── utils/
```

- Keep feature-specific components, data, types, and utilities inside their feature directory.
- Keep `src/pages` focused on routing, page metadata, and composing features and layouts.
- Name features after their user-facing domain in English and `kebab-case`.
- Move code into `src/shared` only after it has a clear, stable use across multiple features.
- Features may depend on `shared`, but must not reach into another feature's internal files. Expose an explicit public entry point when cross-feature reuse is necessary.
- Create only the directories required by the current implementation; the structure above is a guide, not a requirement to add empty folders.
- Prefer colocating feature tests and supporting files with the code they validate.

## Design Source of Truth

- Treat `design.pen` as the source of truth for visual design, layout, spacing, typography, colors, and responsive intent.
- Access `.pen` files only through the Pencil MCP. Do not read, parse, or edit them with regular filesystem tools.
- Before implementing or reviewing visual UI changes, open `design.pen` in Pencil and inspect the relevant frames, components, variables, and states through the MCP.
- Reuse design tokens and shared visual patterns from the Pencil design instead of introducing isolated values or near-duplicate components.
- After implementation, compare the rendered UI with the relevant Pencil frames at the designed viewport sizes and interaction states.
- Do not silently diverge from the design. If technical, semantic, responsive, or accessibility constraints require a change, document the reason and update the Pencil design when the task includes design changes.
- Accessibility and semantic HTML requirements remain mandatory when translating the design into code.

## CSS and Typography

- Use native CSS and Astro's scoped `<style>` blocks. Do not add Panda CSS, Tailwind CSS, or another styling framework.
- Keep shared foundations in `src/shared/styles/global.css` and component-specific styles in the component that owns them.
- Define reusable design values as CSS custom properties using a primitive token layer and a semantic token layer.
- Components must consume semantic tokens such as `--color-text` or `--font-family-body`, not primitive tokens such as `--color-neutral-100`.
- Create tokens for intentionally shared colors, font families, font weights, font sizes, line heights, letter spacing, spacing, dimensions, borders, radii, shadows, opacity, stacking, and motion values when relevant. Do not tokenize isolated values without a reusable design role.
- Promote intentionally shared design values to named primitive or semantic tokens. Keep isolated values local when they have no reusable design role.
- Use `kebab-case` component-prefixed class names, such as `.project-card` and `.project-card-title`. Avoid full BEM naming because Astro already scopes component styles.
- Represent component variants explicitly and consistently. Prefer `data-*` attributes such as `data-variant`, `data-size`, or `data-state` when no native HTML state expresses the variant.
- Style accessible states using the native HTML or ARIA attribute that represents the real state, such as `disabled`, `open`, `aria-current`, `aria-expanded`, or `aria-pressed`.
- Never add an ARIA attribute only as a CSS hook. Prefer native pseudo-classes such as `:hover`, `:focus-visible`, `:checked`, and `:disabled` when they express the state.
- Add global utility classes only for stable patterns reused across components, such as `.visually-hidden`.
- Prefer modern native CSS when it simplifies the implementation. Use features marked Baseline Widely Available across Safari, Chrome, Edge, and Firefox without compatibility fallbacks.
- Use newly available CSS features only as progressive enhancements when the page remains readable and functional without them. Provide a defensive fallback, using `@supports` when conditional behavior is necessary.
- Avoid CSS features with limited availability when they are required for layout, content access, interaction, or accessibility. Verify support with MDN browser compatibility data instead of relying on memory.
- Keep font configuration centralized and expose loaded families through semantic font tokens.

## Semantic HTML and SEO

- Prefer native semantic HTML elements and landmarks over generic containers or ARIA-based replacements.
- Maintain a logical heading hierarchy and give links, buttons, navigation, and page regions clear purposes.
- Give every public page a unique, descriptive title and meta description.
- Set the correct document language and use descriptive, crawlable links.
- Add canonical URLs, social-sharing metadata, and valid structured data when relevant to the page.
- Keep content and document structure understandable for both users and search engines.

## Accessibility

- Meet [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/) for all pages and components.
- Support keyboard navigation and provide a visible, unobscured focus indicator.
- Provide accessible names, labels, and meaningful text alternatives for non-text content.
- Maintain sufficient contrast and ensure content reflows without loss of information or functionality.
- Prefer native HTML semantics before adding ARIA.
- Use automated accessibility audits as a complement to manual keyboard and assistive-technology checks, not as proof of conformance.
