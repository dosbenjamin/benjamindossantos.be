# benjamindossantos.be

Source code for [benjamindossantos.be](https://benjamindossantos.be), Benjamin Dos Santos' personal website.

The site is built as a static Astro project and deployed to Cloudflare Workers using Workers Static Assets.

## Tech stack

- [Astro](https://astro.build/) with strict TypeScript
- [Bun](https://bun.sh/) as the package manager
- [Nix](https://nixos.org/) and [devenv](https://devenv.sh/) for the development environment
- [Cloudflare Workers](https://workers.cloudflare.com/) and [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for hosting and deployment
- [pen.dev](https://www.pen.dev/) (Pencil) for the visual design
- [Ultracite](https://www.ultracite.ai/) with Oxlint and Oxfmt for code quality

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

## Design

The visual design is created with [pen.dev](https://www.pen.dev/) and stored in the version-controlled `design.pen` document. Open this file with Pencil when reviewing or updating the interface, and keep the Astro implementation aligned with it.

The `.pen` document is the editable design source. Exported previews or assets should only be committed when they are required by the website.

## Deployment

The site is deployed as static assets from `dist/`. The Worker name and asset directory are defined in `wrangler.jsonc`.

Authenticate Wrangler once from inside `devenv shell`:

```sh
wrangler login
```

Then deploy:

```sh
bun run deploy
```

The deployment script always builds the site before uploading it. Cloudflare account details and custom-domain routing are managed outside this repository.

## Project structure

```text
.
├── src/pages/           # Astro pages
├── astro.config.ts      # Astro configuration
├── design.pen           # Pencil design source
├── devenv.nix           # Reproducible development environment
├── devenv.yaml          # Pinned devenv inputs
├── oxfmt.config.ts      # Ultracite/Oxfmt configuration
├── oxlint.config.ts     # Ultracite/Oxlint configuration
├── package.json         # Project scripts and dependencies
├── tsconfig.json        # Strict TypeScript configuration
└── wrangler.jsonc       # Cloudflare Workers configuration
```
