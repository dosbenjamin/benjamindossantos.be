# Design Workflow

## Inspect

- Access `.pen` files only through the pen.dev MCP.
- Inspect the relevant frames, components, variables, responsive layouts, and interaction states before implementing or reviewing visual changes.
- Discover current values from the design document; do not rely on remembered or copied inventories.

## Translate

- Reuse established design variables, components, and visual patterns before introducing a new pattern.
- Preserve the design's intent while normalizing implementation details to the project's CSS system when optical differences are immaterial.
- Keep accessibility and semantic HTML mandatory during translation.

## Verify

- Compare the rendered interface with the relevant design at the intended viewport sizes and states.
- Document material technical, semantic, responsive, or accessibility divergences.
- Update `design.pen` only when the task explicitly includes design changes; otherwise report the required reconciliation.
