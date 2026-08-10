## Why

The repository currently loads a large, monolithic `AGENTS.md` for every task, including instructions unrelated to the work at hand. The project needs a lean instruction architecture that preserves root-based Codex workflows while loading specialized guidance only when relevant.

## What Changes

- Reduce the repository-root `AGENTS.md` to stable, universally applicable project rules and concise skill-routing guidance.
- Introduce project-local skills for frontend design, source architecture, and project-specific code standards, while retaining the installed and versioned Ultracite skill unchanged.
- Consolidate `design.pen`, CSS design-system, responsive, semantic HTML, SEO, and accessibility guidance behind task-based skill activation.
- Move browser compatibility and Web API guidance into the frontend-design skill.
- Keep skills generic by directing agents to inspect authoritative project files instead of embedding current inventories or concrete project examples.
- Define clear ownership between `design.pen`, shared CSS foundations, and component-local implementation.
- Avoid hierarchical `AGENTS.md` files for cross-cutting guidance because Codex is normally launched from the repository root.

## Capabilities

### New Capabilities

- `agent-instruction-routing`: Defines how persistent project rules and task-specific skills are organized and selected so agents receive the relevant guidance without loading the full instruction set for every task.

### Modified Capabilities

None.

## Impact

- Affects the repository-root `AGENTS.md` and project-local content under `.agents/skills/`.
- Reorganizes existing guidance without changing the website, its public APIs, dependencies, build output, or deployment behavior.
