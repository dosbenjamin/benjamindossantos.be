# Accessibility and Semantic Structure

## Semantics

- Meet WCAG 2.2 Level AA.
- Prefer native semantic elements and landmarks before ARIA or generic containers.
- Maintain a logical heading hierarchy and clear purposes for links, buttons, navigation, and page regions.
- Use ARIA only when native semantics cannot express the required behavior.

## Interaction and Content

- Support keyboard navigation and provide a visible, unobscured focus indicator.
- Provide accessible names, labels, and meaningful alternatives for non-text content.
- Maintain sufficient contrast and reflow without loss of content or functionality.
- Use the native state that represents component behavior; never add ARIA only as a selector.

## Page and SEO Structure

- Give every public page a unique descriptive title and meta description.
- Set the correct document language and use descriptive crawlable links.
- Add canonical URLs, social metadata, and valid structured data when relevant.
- Keep document content and structure understandable without presentation styles.

## Validation

- Test keyboard behavior and focus states manually for changed interactions.
- Use automated accessibility audits as supporting evidence, not proof of conformance.
- Inspect rendered semantics and accessible names when changing document structure.
