# GitHub Profile Design System

## Public visual grammar

The profile uses one simple hierarchy:

**directive rail → title card → main card → semantic sub-cards**

Nothing else should be added unless it communicates real structure.

### Rules

1. One continuous directive rail on the left of every section.
2. One title card attached to that rail.
3. One main card containing the section content.
4. Sub-cards only when the information represents a distinct concept.
5. No legacy open-frame overlays inside cards.
6. No duplicate rails, decorative ghost lines, coordinate labels, or status ornaments.
7. Gold marks durable identity / structure. Blue marks activity / flow / exploration.
8. Desktop and mobile are separately composed at 1120px and 640px.
9. Dark and light variants keep the same information hierarchy.
10. Public SVG text never exposes design-system names, experiment names, or version identifiers.

## Public flow

Hero → navigation → About → Current → Workflow → Toolkit → More → Contact → Portfolio / LinkedIn / Email → closing signature.

## Section structure

- Hero: identity main card with Build, Practice, Stack and Location sub-cards.
- About: Role, Scope, Path.
- Current: Frontend & Interaction, Backend & Data, Engineering & Delivery, Realtime & Exploration.
- Workflow: seven connected stage cards. The connector exists because the relationship is sequential.
- Toolkit: Frontend, Backend & Realtime, Data, Quality & Delivery, AI & Local Tooling.
- More: Web, Code Quality, Exploring.
- Contact: one main connector card aligned to the three external action buttons.
- Footer: one closing main card with the signature.

## Anti-artifact rule

A visual element must have exactly one job. If the same relationship is already communicated by a card boundary, do not add another frame. If the same hierarchy is already communicated by the title card, do not add another decorative header rail. The left directive rail is the only persistent page-level line.
