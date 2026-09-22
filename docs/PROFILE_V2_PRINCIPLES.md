# Profile V2 — Design Principles

This document is the decision charter for the next GitHub profile README.

## Editorial direction

The profile is about **Adrian first**, not about one project or one visual theme.

It should present a broad technical builder working across:
- full-stack web development;
- interactive systems, games and realtime;
- 3D / graphics;
- AI and local compute;
- automation and tooling;
- security-minded engineering;
- hardware-aware software;
- testing, delivery and reliability.

Projects are **evidence** of those capabilities, not the visual identity of the profile.

## Core design rule

Every element must do at least one of these things:

1. explain who Adrian is;
2. prove or clarify a capability;
3. improve comprehension or navigation.

If it does none of the three, remove it.

## Macro principles

- Identity before decoration.
- Clear hierarchy: identity → technical scope → way of working → evidence → activity → contact.
- One coherent visual system across the entire README.
- Professional and restrained: no decorative clutter, gimmicks or novelty widgets without purpose.
- Projects remain visually subordinate to the overall personal identity.
- Broad technical scope must be visible without turning the profile into a skill wall.

## Micro principles

- Consistent grid, spacing, typography and terminology.
- Consistent perspective, depth, lighting, stroke weights and corner radii for any 3D/isometric assets.
- Dark graphite base; electric blue for systems/data/flow; gold for identity/accent; white/grey for information.
- 3D only when depth communicates hierarchy, architecture, relation or data.
- Animation only when motion communicates flow, progression, activity or state.
- Motion should be slow, controlled and secondary to readability.
- Prefer real Markdown/HTML text for important content rather than trapping everything inside large SVG images.
- Prefer self-hosted assets and GitHub Actions-generated data to fragile external runtime dependencies.
- Mobile readability and reduced-motion behavior must be considered from the start.
- Light/dark variants should exist only when they materially improve rendering.

## Content principles

- Skills are hierarchical:
  - core/current;
  - solid supporting domains;
  - technologies previously used or explored.
- Do not imply equal mastery of every technology found in a repository.
- Dynamic metrics must be factual and useful; avoid vanity metrics.
- Projects should demonstrate different capabilities rather than repeat the same story.
- Private repositories may validate a capability internally, but should not expose private implementation details.
- No fake terminal status, arbitrary percentages, visitor-counter clutter, random quote widgets, trophy walls or decorative badge spam.

## Section rule

No section automatically receives an illustration.

For each section:
1. define what the reader must understand;
2. choose the best medium: prose, diagram, data visualization, 3D/isometric scene, animation or nothing;
3. remove anything that does not improve the message.

## Quality bar

The target is not “an impressive GitHub README”.

The target is a small, highly considered technical identity piece that could plausibly have been produced by a professional design studio: coherent at macro scale, precise at micro scale, easy to maintain, and unmistakably centered on Adrian.
