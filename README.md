# benjamindossantos.be

Source code for [benjamindossantos.be](https://benjamindossantos.be), Benjamin Dos Santos' personal website.

The site is built as a static Astro project and deployed to Cloudflare Workers using Workers Static Assets.

## Tech stack

- [Astro](https://astro.build/) with strict TypeScript
- Native CSS with Astro-scoped component styles and CSS custom property tokens
- [Astro Fonts](https://docs.astro.build/en/guides/fonts/) with the built-in Fontsource provider
- [Bun](https://bun.sh/) as the package manager
- [Nix](https://nixos.org/) and [devenv](https://devenv.sh/) for the development environment
- [Cloudflare Workers](https://workers.cloudflare.com/) and [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for hosting and deployment
- [pen.dev](https://www.pen.dev/) for the visual design
- [Ultracite](https://www.ultracite.ai/) with [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for code quality

## Prerequisites

Install Nix and the devenv CLI before working on the project. No global Bun, Astro, Wrangler, or Ultracite installation is required.

```sh
curl -sSfL https://artifacts.nixos.org/nix-installer | sh -s -- install
nix profile add nixpkgs#devenv
```

Open a new terminal after installing Nix.

## Getting started

From the repository directory, start the development environment:

```sh
devenv shell
```

devenv provides Bun and automatically installs the dependencies declared in `bun.lock`.

> [!IMPORTANT] Run every Bun command and JavaScript tool from inside `devenv shell`. Do not invoke `bun`, `bunx`, `astro`, `wrangler`, or `ultracite` directly from the system shell.

## Development

Once inside `devenv shell`, start the Astro development server:

```sh
bun run dev
```

Alternatively, start the configured development process directly from the system shell:

```sh
devenv up
```

The website is available at <http://localhost:4321> by default.

## Available commands

Run these commands from inside `devenv shell`:

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `bun run dev`     | Start the Astro development server.                 |
| `bun run check`   | Run Astro type checks, Oxfmt, and Oxlint.           |
| `bun run fix`     | Format files and apply safe lint fixes.             |
| `bun run build`   | Build the static website into `dist/`.              |
| `bun run preview` | Build and serve the result locally with Wrangler.   |
| `bun run deploy`  | Build and deploy the website to Cloudflare Workers. |

For a one-off command from the system shell, wrap it with devenv:

```sh
devenv shell -- bun run check
```

To run the same checks used to validate the development environment:

```sh
devenv test
```

## Code quality

Ultracite configures Oxfmt and Oxlint for this Astro project. Before committing changes, run:

```sh
bun run fix
bun run check
```

Editor settings for the Oxc extension are included in `.vscode/settings.json`. Project-specific coding instructions for Codex are provided in `AGENTS.md`.

Modern JavaScript, TypeScript, and Web APIs are preferred when their runtime behavior is [Baseline Widely Available](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) across the major browsers. Recent capabilities must be introduced as progressive enhancements with feature detection and a usable fallback. TypeScript support alone is not treated as evidence of browser compatibility.

JavaScript and TypeScript must not contain unexplained magic values. Domain-significant numbers, strings, statuses, keys, limits, and durations belong in purpose-named constants.

## Import aliases

Cross-domain imports use the native private aliases declared in `package.json#imports`. Each feature has a dedicated alias, while shared code uses `#shared/*`:

```ts
import NotFoundPage from '#errors/components/not-found-page.astro';
import PortfolioPage from '#portfolio/components/portfolio-page.astro';
import { siteIdentity } from '#shared/site.ts';
```

Add a `#<feature>/*` mapping when introducing a feature. Keep relative imports within the same feature or domain, and include source extensions in aliased imports.

## Design

The visual design is created with [pen.dev](https://www.pen.dev/) and stored in the version-controlled `design.pen` document. Open this file with pen.dev when reviewing or updating the interface, and keep the Astro implementation aligned with it.

The `.pen` document is the editable design source. Exported previews or assets should only be committed when they are required by the website.

## Styling and fonts

The project uses native CSS rather than a styling framework. Shared reset, base styles, utilities, and primitive and semantic design tokens live in `src/shared/styles/global.css`. Component-specific styles belong in Astro's scoped `<style>` blocks.

Components consume semantic CSS variables instead of hard-coded design values. Visual variants use `data-*` attributes, while genuine interactive or accessibility states use their native HTML or ARIA attributes. ARIA attributes are never added solely as styling hooks.

Layout and typography align to a 4px grid, with a 2px half-step available for fine details. Spacing uses the closed scale `2, 4, 8, 12, 16, 24, 32, 48, 64px`. Layout dimensions remain multiples of the grid even when they are not part of the spacing scale. Primitive tokens encode the scale, while semantic tokens describe how each value is used by the interface.

Modern native CSS is preferred when it is [Baseline Widely Available](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) across the major browsers. Newer features may be used as progressive enhancements with a usable fallback; limited-availability features must not carry essential layout, interaction, content, or accessibility behavior.

Fonts are configured in `astro.config.ts` with the [Astro Fonts API](https://docs.astro.build/en/reference/font-provider-reference/) and the built-in Fontsource provider. The shared layout loads the configured families with Astro's `<Font />` component, and the generated family variables are mapped to semantic typography tokens. Fonts are self-hosted by Astro; avoid manual `@font-face` declarations and browser-facing third-party font CDNs.

`design.pen` remains the source of visual direction and responsive intent. CSS values are normalized to the grid and token scale when small optical differences do not materially change the design.

## Deployment

The site is deployed as static assets from `dist/`. The Worker name and asset directory are defined in `wrangler.jsonc`.

Cloudflare automatically builds and deploys the site after every push to `main`. This deployment integration is configured outside the repository.

For a manual deployment, authenticate Wrangler once from inside `devenv shell`:

```sh
wrangler login
```

Then deploy:

```sh
bun run deploy
```

The manual deployment script always builds the site before uploading it. Cloudflare account details, deployment integration, and custom-domain routing are managed outside this repository.

## Project structure

```text
.
├── src/
│   ├── features/        # Feature-specific components, data, and types
│   │   ├── errors/
│   │   └── portfolio/
│   ├── layouts/         # Shared Astro page layouts
│   ├── pages/           # Thin routing and composition entry points
│   └── shared/          # Cross-feature modules, styles, and utilities
├── astro.config.ts      # Astro configuration
├── design.pen           # pen.dev design source
├── devenv.lock          # Pinned devenv inputs
├── devenv.nix           # Reproducible development environment
├── devenv.yaml          # devenv input declarations
├── oxfmt.config.ts      # Ultracite/Oxfmt configuration
├── oxlint.config.ts     # Ultracite/Oxlint configuration
├── package.json         # Project scripts and dependencies
├── tsconfig.json        # Strict TypeScript configuration
└── wrangler.jsonc       # Cloudflare Workers configuration
```
