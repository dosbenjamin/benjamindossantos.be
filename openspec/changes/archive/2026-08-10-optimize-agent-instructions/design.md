## Context

The current root `AGENTS.md` is approximately 1,550 words and combines repository operations, architecture, JavaScript and TypeScript compatibility, visual design, CSS, SEO, and accessibility. Codex is normally launched from the repository root, while native nested `AGENTS.md` discovery builds its chain only from the project root to the startup working directory. The repository already contains project-local OpenSpec and Ultracite skills.

## Goals / Non-Goals

**Goals:**

- Minimize instruction context loaded for every root-started task.
- Preserve universal safety, tooling, language, and validation rules at the repository root.
- Load architecture and frontend guidance according to task intent rather than file location.
- Keep project-specific code conventions separate from installed third-party skill content.
- Give frontend work one coherent entry point with progressively loaded references.
- Keep skills stable by discovering current project state from authoritative files.
- Remove normative duplication between persistent instructions, skills, and human-facing documentation.

**Non-Goals:**

- Change the website, design, dependencies, build, or deployment behavior.
- Make Codex start in a nested working directory.
- Encode every existing README explanation as an agent instruction.

## Decisions

### Keep one minimal repository-root `AGENTS.md`

The root file will retain only instructions that apply broadly: use of `devenv shell`, Bun package management, validation commands, English and naming conventions, Conventional Commits, preservation of unrelated changes, and a compact skill-routing section.

This is preferred over nested `AGENTS.md` files because root-started sessions do not automatically load descendant instructions. It is also preferred over placing everything in skills because essential operational constraints must remain active even when skill matching is imperfect.

### Route cross-cutting guidance through project-local skills

Add `frontend-design`, `project-architecture`, and `project-code-standards` skills under `.agents/skills/`. Retain and reference the existing `ultracite` skill without modifying it because it is installed from an external source and integrity-tracked in `skills-lock.json`.

Skill descriptions will enumerate concrete trigger phrases and task categories. The root file will contain a short matching table as a safety net. This task-based routing is preferred over directory routing because frontend and architecture rules span multiple directories.

The project-code-standards skill owns repository-specific JavaScript and TypeScript conventions such as handling domain-significant literals and naming constants. Ultracite continues to own its upstream linting, formatting, diagnostic, and generic code-quality workflow. This separation is preferred over customizing Ultracite because local edits could be overwritten by installation or update and would invalidate the locked content hash.

### Use progressive disclosure inside the frontend skill

Keep `frontend-design/SKILL.md` focused on triggers, source-of-truth ownership, the common workflow, and reference routing. Store detailed guidance in focused references:

- `design-workflow.md` for pen.dev access, frame and state inspection, implementation comparison, and divergence handling.
- `css-system.md` for native CSS, scoped Astro styles, tokens, spacing, variants, and typography.
- `accessibility.md` for semantic HTML, keyboard interaction, WCAG 2.2 AA, focus, contrast, reflow, and validation.
- `web-platform.md` for Baseline availability, progressive enhancement, capability detection, fallbacks, and browser compatibility verification.

SEO guidance that directly affects pages and interface markup will be included in the smallest applicable frontend reference rather than creating a separate skill for the current project size. A separate SEO reference can be introduced later if the guidance grows independently.

This split is preferred over one large skill because a CSS-only task does not need the full pen.dev workflow. It is preferred over independent skills for each frontend concern because design implementation commonly crosses them and benefits from one reliable entry point.

### Keep skills generic and discover project state

Skills will define principles, constraints, discovery steps, sources of truth, and validation workflows. They will not list current features, import mappings, components, design tokens, frames, or other concrete project examples. Instead, they will direct the agent to inspect the authoritative project file or nearby implementation before deciding.

This is preferred over embedding current state because inventories become stale and require instruction maintenance after unrelated project changes. File paths may be named when they identify an authoritative source, but their current contents will not be copied into the skill.

### Separate visual intent from implementation contracts

The frontend skill will define ownership as follows:

```text
design.pen              visual intent, layout, responsive intent, visual states
global.css              implemented tokens, foundations, reset, shared utilities
component/page files    semantic markup, accessible behavior, local presentation
```

Accessibility and semantic correctness take precedence over literal visual translation. Technical divergences must be explained; `design.pen` is updated only when the task includes design changes.

### Treat the README as explanatory, not normative

The README may describe project setup and architecture for humans, but agent-facing requirements will have one normative owner: the root instructions or a named skill. Where both need similar information, the README should summarize or link rather than reproduce detailed rules.

## Risks / Trade-offs

- [Risk] A specialized skill fails to trigger for an ambiguously phrased task. → Mitigation: use explicit, broad skill descriptions and retain a concise routing table in the root instructions.
- [Risk] Moving rules changes their effective priority or silently drops a constraint. → Mitigation: build a rule inventory, assign each rule one owner, and verify coverage before removing it from the root file.
- [Risk] Progressive references become too fragmented. → Mitigation: keep one frontend entry skill, use only four focused references, and avoid creating references for short or isolated rules.
- [Risk] Generic skills become too abstract to guide action. → Mitigation: provide explicit discovery and validation steps while avoiding snapshots of current project state.
- [Risk] Human documentation and agent instructions drift. → Mitigation: keep normative details in one agent-facing location and make the README descriptive rather than duplicative.
- [Trade-off] Skill content still consumes context when activated. → This is intentional: domain context is paid only by tasks that require it.

## Migration Plan

1. Inventory every rule in the current root `AGENTS.md` and map it to the root file, the unchanged Ultracite skill, a new project-local skill, or removal as duplicated documentation.
2. Create the project-local skills using the project's skill-creation workflow and validate their trigger descriptions, generic discovery guidance, and reference routing.
3. Replace the root `AGENTS.md` with the lean universal rules and skill-routing table only after skill coverage is complete.
4. Review the README for duplicated normative agent instructions and reduce duplication without removing useful human setup documentation.
5. Test representative root-started tasks for repository operations, frontend CSS, design-to-code, browser compatibility, architecture, project-specific TypeScript conventions, and Ultracite operations; confirm each receives the intended instruction set.
6. Run the repository validation commands. Roll back by restoring the previous root `AGENTS.md` if routing or coverage validation fails.
