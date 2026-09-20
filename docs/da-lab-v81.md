# AG DA Lab — V8.1

This branch compares four **atomic SVG art directions** using the same information and the same module roles.

## GRID 01
Technical lattice, broken frames, coordinates, ticks and compact module IDs.

**Strengths:** strongest engineering identity, maximum modularity, distinctive system language.  
**Risk:** can become visually dense if every module uses the full treatment.

## SIGNAL RAIL
Flow-oriented modules attached to a persistent rail and active nodes.

**Strengths:** excellent continuity and progression, ideal for workflow / timeline / current-state storytelling.  
**Risk:** less flexible when modules need to live completely independently.

## EDITORIAL 03
Large typography, strong spacing, asymmetric slabs and minimal accents.

**Strengths:** highest immediate readability, premium feel, least visual noise.  
**Risk:** by itself it can feel less uniquely “AG technical”.

## HYBRID 04
Editorial typography and spacing + Grid IDs/corner geometry + Signal language only where progression is meaningful.

**Strengths:** best balance of identity, readability and composability.  
**Current recommendation:** deepen this direction first, while keeping GRID 01 as the source for more technical details.

## Atomic module contract

Every direction provides the same independent pieces:

- section header;
- frontend focus tile;
- backend focus tile;
- workflow step;
- TypeScript chip;
- React chip;
- Portfolio action;
- LinkedIn action.

The final system should extend this contract rather than making larger all-in-one cards.

## Next exploration

1. expand Hybrid 04 to the full module inventory;
2. create two Hybrid variants: **clean** and **technical-dense**;
3. test module spacing at real GitHub README width;
4. increase minimum text sizes where possible;
5. only after that generate light and dedicated mobile variants.
