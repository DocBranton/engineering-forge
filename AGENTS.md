# Engineering Forge development rules

Read docs/design-contract.md, docs/architecture.md and docs/roadmap.md before changing the application. The visual contract is normative for all UI work.

- Use one shared shell, header, Navigator, theme and Wingman dock. Do not create inconsistent page-specific branding.
- Preserve the approved visual baseline; document intentional changes and obtain review before replacing it.
- Use authorized branding assets only. Do not transfer private or unlicensed source, assets, data or configuration into this public repository without explicit authorization. Reference implementations remain unchanged.
- Generate visible date-based release identity and exact build provenance in CI. Pin reviewed AppKit dependencies, commit lockfiles and validate upgrades.
- Preserve engineering authority, evidence provenance and explicit verification states. Never substitute simulated data for operational results or approve by model confidence.
- Run type checks, build, unit tests and applicable visual tests before requesting merge. Record actual results, not assumed passes.
- Capture dark/light screenshots at 3440x1440 and 1920x1080 for UI changes; include relevant Hero and Wingman states.
- No deployment without explicit authorization. No sensitive or operational data in the public repository.
