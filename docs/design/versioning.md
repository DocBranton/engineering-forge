# Build identity

CI supplies an immutable application version in vYYYY.MM.DD.N format (UTC date and unique build sequence). Record the full source SHA, UTC build timestamp, actual resolved AppKit version, and release channel in generated build metadata. Display version beside application title and details in About. Local builds must say local/unreleased; never use browser date as release provenance.

Environment labels: DEV bronze, TEST/UAT silver, PROD gold. Demo is an independent data-mode indicator. Environment labels alone do not authorize operational use.

Pin AppKit to an exact reviewed version, commit lockfile, install reproducibly and check registry releases before planned upgrades. Verify dependency and runtime compatibility; do not claim latest based on a stale reference repository.
