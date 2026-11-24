# Visual design contract

Status: implementation baseline v2, 2026-11-24. The approved conversation concept is the visual reference; this document translates it into implementation constraints.

## Identity
Engineering Forge | Agentic Engineering Workbench
From engineering problems to proven solutions.
SI Wingman: Coordinate • Orchestrate • Advise.
USAF-inspired enterprise presentation; platform branding is secondary. Do not imply official endorsement.

## Desktop layout
Primary target 3440 × 1440, also support 1920 × 1080. Fixed compact header, horizontal navigator, collapsible context and SI Wingman panes. No floating assistant covering content. Use responsive sizing, bounded panels and internal scrolling only where needed. Dark navy, restrained cyan, neutral surfaces, gold for decisions, red for blockers. Provide light theme. Accessible contrast, keyboard operation and textual status labels.

## Navigation
Mission Control | Engineering Workspace | Orchestration Studio | Digital Thread | Knowledge Library | Administration.

Mission Control: compact portfolio table, mission status, blockers, decisions and measured metrics.
Engineering Workspace: left evidence/requirements tree, center artifact canvas with tabs for alternatives, CAD, analysis and verification; docked right Wingman. Default to the current engineering task.
Orchestration Studio: dependency-aware task graph, selected node inspector, inputs/outputs, model/tool versions and execution logs.
Digital Thread: revision-aware traceability matrix and lineage explorer.
Knowledge Library: searchable, previewable approved artifacts and applicability limits.
Administration: authorized model/tool registry, roles and policy; no unrestricted runtime routing.

## Engineering lifecycle
Problem & evidence → Requirements & AoA → Design & digital engineering → Analysis and manufacturing/repair/sourcing → Verification & release → Share & reuse.
This is a navigation model, not a fixed execution DAG. Source/reuse may bypass design. Human decisions appear at applicable milestones.

## UI acceptance
No fabricated operational data. Demo badge and isolated demo storage. Show unknown, blocked and pending verification explicitly. Every artifact links to provenance. Approvals reference exact revision; no release based on model confidence. Visual regression screenshots at both target resolutions, dark and light themes, and keyboard/accessibility checks before UI acceptance.

## Shared visual system (normative)
Use a single application shell and shared theme tokens across all views. The design reference is the existing application family, with Engineering Forge-specific navigation and original or authorized assets only. Maintain a compact persistent header and horizontal Navigator. The Hero is collapsible and defaults to compact in active engineering workspaces. Its artwork must tell the engineering lifecycle story, not embed UI text. Keep important actions and status visible without scrolling.

### Branding
- Upper left: authorized U.S. Air Force lockup, divider, Engineering Forge mark and title; subtitle Agentic Engineering Workbench.
- Date-driven application version immediately adjacent to title; environment and demo indicators distinct, textual and always visible.
- Lower left: subtle RSO attribution and FLY FASTER with treatment only when approved assets and authorization are available. Databricks Apps / AppKit attribution is secondary.
- Do not fabricate or redraw official marks. Until authorized assets are available, use a clearly identified neutral text treatment. Do not imply endorsement.
- Target header 64 px, navigation 40 px, logo maximum height 40 px, 8 px spacing grid, compact controls 32–36 px, body text 14 px minimum. These are implementation defaults; adjust only with documented visual review.
- Dark navy and restrained cyan default; light theme uses equivalent semantic tokens. Gold is for decisions, red for blockers; retain text labels. Avoid excessive glow, oversized cards and decorative metrics.

### Workspace and Wingman
Portfolio view is table-first; engineering view is artifact-first. Context rail left, flexible artifact canvas center, docked SI Wingman right. Wingman supports closed/minimal, normal and wide modes, with independent session preferences for portfolio and mission. Opening the dock reflows content; never overlays engineering controls. Default closed on portfolio, normal in mission. Provide a persistent Ask SI Wingman control.

### Build identity
Use the build-generated UTC date version vYYYY.MM.DD.N, where N is the CI build sequence for that date or an explicitly documented monotonically increasing CI run number. Build metadata includes exact commit SHA, build time, actual resolved AppKit version and release channel. Display version beside title; About exposes full provenance. Never derive release identity from browser date or hardcode a production version. Local builds explicitly identify themselves as local/unreleased. DEV bronze, TEST/UAT silver, PROD gold; demo mode is a separate flag, never inferred from environment.

### Visual acceptance
Capture every primary view at 3440 × 1440 and 1920 × 1080 in dark and light themes, with Hero expanded/collapsed and Wingman modes on relevant views. Verify no overlapping controls, clipped labels, unintended horizontal scroll or content obscured by Wingman. Check keyboard navigation, focus, accessible contrast and persisted layout preferences. Compare screenshots to reviewed baseline; require explicit approval for intentional changes. Never represent illustrative geometry or metrics as actual engineering results.
