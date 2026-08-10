---
name: project-code-standards
description: Apply repository-specific JavaScript and TypeScript conventions. Use when writing or reviewing JavaScript or TypeScript values, functions, constants, configuration, status values, keys, limits, durations, naming, or immutable related values. Use alongside Ultracite when both apply.
---

# Project Code Standards

Apply the repository's domain-specific JavaScript and TypeScript rules while leaving generic linting and formatting to the installed Ultracite skill.

## Domain-Significant Values

- Extract domain-significant numbers, strings, statuses, keys, limits, durations, and configuration values into clearly named constants.
- Name constants after their purpose rather than their literal value.
- Group related immutable values with `as const` when that improves their relationship and inferred types.
- Keep literals inline only when their meaning is intrinsic and unambiguous in the immediate language construct.
- Do not use comments as a substitute for naming a reusable or domain-significant value.

## Naming

- Use `camelCase` for JavaScript and TypeScript values, functions, module-level constants, configuration values, and immutable objects.
- Use `PascalCase` for components, classes, and types.
- Preserve uppercase or framework-defined names only when an external interface requires them.
- Follow repository-wide English and filename conventions from the root instructions.

## Workflow

1. Inspect nearby code and external interfaces before naming or extracting values.
2. Distinguish domain configuration from syntax-intrinsic literals.
3. Apply these project rules together with the unchanged Ultracite skill.
4. Run the repository's formatting, linting, type, and relevant test commands.
