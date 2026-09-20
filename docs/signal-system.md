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
- Section rail title: 18.5px desktop / 17px mobile.
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


## Reader-facing labels

The visible profile uses semantic labels instead of internal coordinate codes.

- Section names are shown directly: About, Current, Workflow, Toolkit, More / Exploration, Contact.
- Submodules use their real names directly: Role, Scope, Frontend, Backend & Data, Build, Test, and so on.
- Contact branches are named Portfolio, LinkedIn and Email.
- Internal numbering may exist only as implementation detail; it must not be rendered in the public profile.
- Technical labels such as `10`, `31`, `61`, `90` or `S1` must never be used as reader-facing copy.

## Accent semantics

- Gold: identity, structure, durable capability, authored anchors.
- Blue: current activity, movement, workflow, exploration, external flow.
- Neutral rails: continuity between modules.

Top-level section accents follow those semantics rather than alternating for decoration.

Reader-facing header mapping:

- About — gold.
- Current — blue.
- Workflow — blue.
- Toolkit — gold.
- More / Exploration — blue.
- Contact — blue.
- End / Continue — gold.
- Portfolio, LinkedIn and Email — blue as one outbound-flow family.

Section titles directly replace the former coordinate labels on the leading Signal rail: y=42 on desktop and y=40 on mobile (End / Continue keeps its terminal rail at y=52 / 50). Their text uses the exact same accent color as the rail, not a brighter decorative variant.

Submodule titles also replace the former coordinate labels and inherit the exact color of their local leader/node. Mobile content uses one continuous section spine and one node/leader per module; overlapping duplicate spine segments are forbidden.

Decorative header microcopy is intentionally removed. Labels such as "SECONDARY · STILL ACTIVE", "EXTERNAL CHANNELS", "CURRENT · CURATED · MODULAR", generic build/learn status strips, and duplicated workflow summaries must not appear in the top-right header area. Supporting product/engineering copy inside the actual modules remains neutral and readable.


## Action semantics

- Internal navigation actions use a downward signal glyph and remain inside the GitHub profile.
- External actions use the north-east arrow glyph and leave the profile.
- Internal navigation contains only profile sections.
- Portfolio, LinkedIn and Email are grouped only under Contact.
- Direction is communicated by the action glyph and geometry, not by numbered labels.


## End-sequence geometry

The profile closes as one signal sequence:

Contact → Portfolio / LinkedIn / Email → End / Continue.

Contact branches the signal into three named external channels. The footer visually collects those three channels back into one system endpoint. External action buttons use the same 150px rendered width as the primary navigation to preserve rhythm.


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
