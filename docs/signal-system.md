# AG Signal System

Current profile design system for Adrian Guichard's GitHub profile.

## Visual grammar

The system is built around a continuous **signal spine**.

- Gold = structure, authored hierarchy, durable anchors.
- Electric blue = active flow, links, progression.
- Neutral rails = continuity and system structure.
- Typography carries hierarchy before decoration.

## V8.7 coherence rules

1. Every section begins from the same directive rail.
2. Related modules connect to shared backbones rather than repeating decorative accents.
3. Section height is kept intentionally compact to preserve page rhythm.
4. Metadata is integrated into the signal structure instead of floating as isolated labels.
5. Repeated information is removed when a nearby action already communicates it.
6. Desktop and mobile are separately composed.
7. Light mode preserves geometry and remaps only the palette.
8. Supporting text is sized for actual GitHub rendering, not only source SVG dimensions.

## Responsive targets

- Desktop composition width: 1120px.
- Mobile composition width: 640px.
- Hero title: 46px desktop / 37px mobile.
- Section title: 32px desktop / 28px mobile.
- Card title: 17–20px.
- Supporting text: 12.5–15px.
- Signal metadata: 10.5–11.5px minimum.

## Architecture

Visible responsive compositions:
`assets/brand/v83/composed/`

Reusable atomic desktop modules:
`assets/brand/v83/modules/`

Reusable atomic mobile modules:
`assets/brand/v83/modules-mobile/`

The README uses composed sections because GitHub does not expose arbitrary CSS layout control, while the modular asset library remains available for independent edits and recomposition.

## Current visible flow

Hero → Navigation → About → Current → Workflow → Toolkit → More / Exploration → Contact actions → End / Continue.


## Global coordinate system

Top-level sections use one stable coordinate grid:

- 00 — Profile / Identity
- 10 — About
- 20 — Current
- 30 — Workflow
- 40 — Toolkit
- 50 — More / Exploration
- 90 — End / Continue

Submodules inherit the section decade:

- About: 11–13
- Current: 21–24
- Workflow: 31–37
- Toolkit: 41–45
- More / Exploration: 51–53

This numbering is semantic and follows the visible profile order.

## Accent semantics

- Gold: identity, structure, durable capability, authored anchors.
- Blue: current activity, movement, workflow, exploration, external flow.
- Neutral rails: continuity between modules.

Top-level section accents follow those semantics rather than alternating for decoration.
