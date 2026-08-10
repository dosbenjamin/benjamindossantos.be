## 1. Instruction Inventory

- [x] 1.1 Inventory every rule in the current root `AGENTS.md` and assign one destination: persistent root instruction, `frontend-design`, `project-architecture`, `project-code-standards`, unchanged `ultracite`, human documentation, or removal as a duplicate.
- [x] 1.2 Verify that all safety-critical, environment, package-management, validation, language, naming, and commit rules remain covered before shortening the root file.

## 2. Project-Local Skills

- [x] 2.1 Use the project skill-creation workflow to create and validate `.agents/skills/frontend-design/SKILL.md` with explicit triggers, source-of-truth ownership, a common frontend workflow, and progressive reference routing.
- [x] 2.2 Add focused frontend references for the pen.dev design workflow, CSS and token system, semantic HTML/accessibility requirements, and Web-platform compatibility, placing SEO guidance in the smallest applicable reference.
- [x] 2.3 Use the project skill-creation workflow to create and validate `.agents/skills/project-architecture/SKILL.md` covering feature boundaries, shared-code placement, source organization, private import aliases, and cross-domain dependencies.
- [x] 2.4 Use the project skill-creation workflow to create and validate `.agents/skills/project-code-standards/SKILL.md` for repository-specific JavaScript and TypeScript conventions.
- [x] 2.5 Verify the installed Ultracite skill and its `skills-lock.json` entry remain unchanged while the root instructions route applicable linting, formatting, diagnostic, and generic quality work to it.
- [x] 2.6 Review every new skill and reference to ensure it contains generic rules and discovery methods rather than inventories or concrete examples of current project state.

## 3. Persistent Instructions and Documentation

- [x] 3.1 Replace the repository-root `AGENTS.md` with universal project rules and a concise routing table for `frontend-design`, `project-architecture`, `project-code-standards`, and `ultracite`.
- [x] 3.2 Review `README.md` for duplicated normative agent instructions and keep it useful for humans while assigning each agent-facing rule a single normative owner.

## 4. Verification

- [x] 4.1 Compare the new root and skill content against the instruction inventory and confirm that no existing requirement was silently lost or assigned conflicting owners.
- [x] 4.2 Exercise representative root-started prompts for a general repository task, CSS-only task, `design.pen` task, browser-compatibility task, architecture task, project-specific JavaScript or TypeScript task, and Ultracite task; verify that only the intended skills and references activate.
- [x] 4.3 Run `devenv shell -- bun run fix` and `devenv shell -- bun run check`, then inspect the resulting diff to confirm the change affects only instruction, skill, documentation, and OpenSpec artifacts.
