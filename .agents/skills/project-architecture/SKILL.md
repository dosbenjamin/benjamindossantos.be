---
name: project-architecture
description: Organize or review source structure and module boundaries. Use when creating or moving features, deciding between feature-local and shared code, changing routes or layouts, introducing cross-domain dependencies, or adding and changing private import aliases.
---

# Project Architecture

Maintain a lightweight feature-based architecture. Discover the current structure and mappings from the repository instead of embedding inventories in this skill.

## Discovery

1. Inspect nearby files and directories for established patterns.
2. Inspect the package import map before changing cross-domain imports or aliases.
3. Identify the stable user-facing capability that owns the behavior.
4. Check whether proposed shared code already has clear reuse across multiple domains.

## Boundaries

- Keep feature-specific components, data, types, utilities, tests, and supporting files within their owning feature.
- Keep route files thin and focused on routing, metadata, layouts, and feature composition.
- Move code into the shared domain only after it has a clear, stable use across multiple features.
- Allow features to depend on shared code, but do not reach into another feature's internal files.
- Expose an explicit public entry point when cross-feature reuse is necessary.
- Create only directories required by the current implementation.

## Imports and Naming

- Use native private import aliases for imports crossing feature or shared-domain boundaries.
- Give each feature its own alias and use the shared-domain alias for shared code.
- Add the corresponding import mapping when introducing a feature.
- Keep relative imports within the same feature or domain and in areas without a declared alias.
- Include source extensions in native aliased imports.
- Name features after stable user-facing domains using English `kebab-case`.

## Validation

- Confirm dependency direction remains feature-to-shared and not feature-to-feature internals.
- Confirm route files remain composition entry points.
- Confirm import mappings match the resulting structure.
- Run the repository's relevant checks after structural changes.
