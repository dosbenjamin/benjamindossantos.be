# Web Platform Compatibility

## Capability Selection

- Prefer modern JavaScript, TypeScript, CSS, built-in objects, and Web APIs when required behavior is Baseline Widely Available across Safari, Chrome, Edge, and Firefox.
- Verify support with current MDN browser compatibility data rather than memory, type availability, or compilation success.
- Avoid limited-availability capabilities when they carry essential content, navigation, interaction, layout, accessibility, or data integrity.

## Progressive Enhancement

- Use newer capabilities only when the page remains readable and functional without them.
- Detect capabilities directly instead of inferring support from a user-agent string.
- Provide a defensive fallback or use `@supports` when conditional behavior is necessary.
- Keep essential behavior on the broadly supported path.

## Compatibility Cost

- Do not add a polyfill, compatibility dependency, or transpilation-target change unless the capability is necessary and a lightweight native fallback is insufficient.
- Document the support evidence and fallback when adopting a recent capability for an important interaction.
