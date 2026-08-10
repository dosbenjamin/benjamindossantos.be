# Agent Instruction Routing Specification

## Purpose

Defines a lean, task-aware instruction system that preserves safe repository-wide defaults while loading specialized project guidance only for work that needs it.

## Requirements

### Requirement: Lean persistent repository instructions

The repository SHALL keep its root `AGENTS.md` limited to rules that apply to every task, essential project commands, and concise routing to project-local skills. Detailed domain guidance MUST NOT be duplicated in the root instructions when a task-specific skill owns that guidance.

#### Scenario: Non-frontend repository task

- **WHEN** an agent starts from the repository root to perform a task unrelated to frontend design or source architecture
- **THEN** the persistent project context contains the universal repository rules without the detailed frontend-design or architecture guidance

### Requirement: Task-specific skill routing

The repository SHALL provide project-local skills whose descriptions and root routing guidance identify the tasks that activate them. An agent working in a specialized domain MUST load the applicable skill before reviewing, planning, or changing that domain.

#### Scenario: Frontend task activates design guidance

- **WHEN** a task concerns visual UI, Astro component presentation, CSS, design tokens, responsive behavior, semantic interface markup, SEO presentation metadata, accessibility, or `design.pen`
- **THEN** the agent loads the frontend-design skill before acting

#### Scenario: Architecture task activates architecture guidance

- **WHEN** a task concerns feature boundaries, shared-code placement, source organization, cross-domain imports, or import aliases
- **THEN** the agent loads the project-architecture skill before acting

#### Scenario: Project-specific code task activates code standards

- **WHEN** an agent writes or reviews JavaScript or TypeScript governed by project-specific conventions
- **THEN** the agent loads the project-code-standards skill before acting

#### Scenario: Linting or formatting task activates Ultracite

- **WHEN** an agent writes, reviews, formats, lints, or troubleshoots JavaScript or TypeScript in this project
- **THEN** the agent uses the installed project-local Ultracite skill without modifying its versioned files

### Requirement: Consolidated frontend design guidance

The frontend-design skill SHALL provide a single entry point for the `design.pen` workflow, CSS design system, responsive behavior, semantic HTML, SEO-related interface requirements, and accessibility. It SHALL use progressive references so an agent loads only the detailed guidance relevant to the current frontend task.

#### Scenario: CSS-only task

- **WHEN** a task changes component CSS or shared design tokens without changing `design.pen`
- **THEN** the agent loads the CSS-system guidance without requiring the detailed design-document workflow

#### Scenario: Design-to-code task

- **WHEN** a task translates or compares a visual design from `design.pen`
- **THEN** the agent loads both the design workflow and the applicable implementation guidance

#### Scenario: Browser compatibility task

- **WHEN** a task introduces or reviews a browser-facing Web API, JavaScript capability, or CSS feature
- **THEN** the agent loads the Web-platform guidance from the frontend-design skill

### Requirement: Generic and discoverable skill guidance

Project-local skills SHALL express reusable principles, constraints, discovery methods, sources of truth, and validation workflows. They MUST inspect authoritative project files for current state instead of embedding inventories, real project examples, or lists that can become stale.

#### Scenario: Current project state changes

- **WHEN** a feature, import mapping, design token, component, or design element is added, removed, or renamed
- **THEN** the applicable skill remains accurate without requiring an update solely to synchronize an embedded inventory

### Requirement: Explicit design ownership

The frontend-design guidance SHALL define `design.pen` as the source of visual intent and responsive states, shared global CSS as the implemented token and foundation contract, and component files as the owners of semantic markup, accessible behavior, and local presentation.

#### Scenario: Design and accessibility conflict

- **WHEN** literal translation of a visual design would violate semantic HTML or WCAG 2.2 Level AA
- **THEN** the agent preserves accessibility and semantics, documents the divergence, and updates `design.pen` only when design modification is within the task scope

### Requirement: Root-based workflow compatibility

The instruction system SHALL work when Codex is launched from the repository root and MUST NOT depend on automatic discovery of nested `AGENTS.md` files.

#### Scenario: Session starts at repository root

- **WHEN** Codex begins a task with the repository root as its current working directory
- **THEN** the root instructions provide enough routing information for the applicable project-local skill to be selected
