# AG Signal System — V8.4

V8.4 is the candidate visual system for Adrian Guichard's GitHub profile.

## Core idea

The identity is built around **directive signal rails** rather than repeated decorative underlines.

- Gold = authored structure, hierarchy and durable anchors.
- Electric blue = active signal, movement, links and progression.
- Dark neutral rails = continuity and system structure.

## Composition rules

1. Section headers begin from a persistent directive rail.
2. Related modules are connected by shared backbones where the relationship matters.
3. Repeated cards do not each receive the same decorative line.
4. Typography carries hierarchy before decoration.
5. Supporting text must remain readable at GitHub profile width.
6. Desktop and mobile are composed separately.
7. Light mode preserves geometry and remaps only the visual palette.

## Typography targets

- Hero name: 46px desktop / 37px mobile.
- Section title: 32px desktop / 28px mobile.
- Card title: 19–20px.
- Primary supporting text: 13–15px.
- Signal metadata: 9.5–11px.

## Modular architecture

The visible README uses composed responsive sections because GitHub does not expose arbitrary CSS layout control.

The underlying SVG library remains atomic:

- hero;
- about;
- current;
- workflow;
- toolkit;
- actions;
- primitives;
- footer.

Desktop modules live under `assets/brand/v83/modules/`.
Mobile modules live under `assets/brand/v83/modules-mobile/`.

## Visible compositions

Responsive dark/light compositions live under `assets/brand/v83/composed/`.

## Current profile sections

Hero → Navigation → About → Current → Workflow → Toolkit → More / Exploration → Contact / Footer.
