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
