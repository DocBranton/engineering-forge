# Visual design contract

Status: initial baseline, 2026-11-24. The approved conversation concept is the visual reference; this document translates it into implementation constraints.

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
