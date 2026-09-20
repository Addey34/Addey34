# AG Signal System

Current profile design system for Adrian Guichard's GitHub profile.

## Visual grammar

The system is built around a continuous **signal spine**.

- Gold = structure, authored hierarchy, durable anchors.
- Electric blue = active flow, links, progression.
- Neutral rails = continuity and system structure.
- Typography carries hierarchy before decoration.

## Coherence rules

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

Hero → Internal navigation → About → Current → Workflow → Toolkit → More / Exploration → Contact → External actions → End / Continue.


## Global coordinate system

Top-level sections use one stable coordinate grid:

- 00 — Profile / Identity
- 10 — About
- 20 — Current
- 30 — Workflow
- 40 — Toolkit
- 50 — More / Exploration
- 60 — Contact
- 61 — Portfolio
- 62 — LinkedIn
- 63 — Email
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


## Action semantics

- Internal navigation actions use a downward signal glyph and remain inside the GitHub profile.
- External actions use the north-east arrow glyph and leave the profile.
- Internal navigation contains only profile sections.
- Portfolio, LinkedIn and Email are grouped only under 60 — Contact and inherit coordinates 61, 62 and 63.

Desktop and mobile hero compositions must expose the same semantic coordinates, including 02 — Practice.


## End-sequence geometry

The profile closes as one signal sequence:

60 Contact → 61 Portfolio / 62 LinkedIn / 63 Email → 90 End / Continue.

Contact branches the signal into three external channels. The footer visually collects those three channels back into one system endpoint. External action buttons use the same 150px rendered width as the primary navigation to preserve rhythm.


## Editorial open-frame rule

The primary content sections use open-frame geometry instead of dashboard cards:

- Hero
- About
- Current
- Workflow
- Toolkit
- More / Exploration

These sections may use:
- the canvas background;
- directive rails;
- partial top/bottom rules;
- left spines;
- nodes;
- typography.

They should not introduce filled panel rectangles around content blocks. Contact and End / Continue are allowed to use contained terminal surfaces because they represent interaction boundaries and the final system endpoint.

The editorial rule exists to keep the profile closer to an architectural publication than a product dashboard.
