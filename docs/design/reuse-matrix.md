# Reference design and reuse strategy

Engineering Forge is a clean-sheet problem-centric engineering workbench. Use the established portfolio visual language as inspiration and the existing orchestration prototype as a conceptual reference. Preserve both source repositories unchanged.

| Capability | Approach | Acceptance |
| --- | --- | --- |
| Branding and shell | Independently implement shared visual contract; use authorized assets only | Consistent header and build identity |
| Hero and navigation | Adapt interaction patterns, not AM workflow | Compact and expanded states; persistent navigation |
| Wingman | Reimplement docked layout with session preferences | No overlay; closed/normal/wide |
| CAD and evidence | Evaluate existing capabilities for authorized reuse later | Editable artifacts and provenance |
| Requirements | Evaluate SysML and evidence review capabilities | Revision-aware traceability |
| Mission Control | Table-first portfolio inspired by orchestration prototype | Explicit blockers and decisions |
| Orchestration Studio | Adapt visualization concept; new durable executor | Dependency-aware tasks and recovery |
| Knowledge Library | Adapt gallery concept | Approved artifacts and applicability |
| Verification and release | New policy and evidence architecture | No unsupported verification or release |

## Reuse gate
Confirm source and asset authorization, licensing, dependency compatibility and engineering integrity before any transfer. Maintain a provenance manifest for approved reused components. Do not publish private source or asset bytes as part of design work. Until approved, implement original components from the requirements in the visual contract.
