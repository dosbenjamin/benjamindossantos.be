# Project Instructions

## Environment and Commands

Run project commands inside `devenv shell`. Prefix one-off commands from the system shell with `devenv shell --`.

- Use Bun exclusively for package installation, dependency changes, scripts, and package binaries.
- Fix and format with `bun run fix`.
- Run Astro and Ultracite checks with `bun run check`.
- Diagnose Ultracite with `bun x ultracite doctor`.
- Run relevant tests and type checks after changes.

Do not use npm, npx, pnpm, or Yarn. Do not disable lint rules without explaining the underlying conflict.

## Project Conventions

- Follow established patterns in nearby files.
- Prefer the simplest readable solution that satisfies the current requirements.
- Consolidate genuinely repeated logic without introducing premature abstractions.
- Use English for source code, identifiers, filenames, directory names, comments, documentation, commit messages, and user-facing copy.
- Use `kebab-case` for filenames, directory names, URL slugs, CSS classes, and other free-form names. Follow language conventions where `kebab-case` is invalid.

## Project Skills

Use every applicable project-local skill before acting:

- `frontend-design`: visual UI, Astro presentation, CSS, design tokens, typography, responsive behavior, semantic interface markup, SEO presentation, accessibility, browser compatibility, Web APIs, or `design.pen`.
- `project-architecture`: feature boundaries, shared-code placement, source organization, cross-domain dependencies, routes, layouts, or import aliases.
- `project-code-standards`: writing or reviewing project JavaScript and TypeScript conventions.
- `ultracite`: writing, reviewing, formatting, linting, or troubleshooting JavaScript and TypeScript or the configured quality tools. This skill is installed and versioned; do not modify it.

## Commits

Use Conventional Commits in the form `type(scope): description`. The scope is optional; choose an appropriate standard type.
