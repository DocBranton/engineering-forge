# Target architecture

## Boundaries
AppKit + React/TypeScript application shell and server API. Databricks Apps host interactive UI. Durable orchestration lives behind the API, with transactional state in Lakebase and approved worker execution (candidate: Lakeflow Jobs). Unity Catalog Volumes hold artifact bytes, Delta tables hold governed knowledge and analytics. Model Serving via approved endpoints; AI Gateway, Genie and MLflow where enabled. All WDP capabilities are conditional until verified. No external API dependency by default.

## Domain model
Mission, Evidence, RequirementRevision, Alternative, TaskDefinition, TaskRun, ArtifactRevision, VerificationResult, Risk, Decision, Baseline, ToolRegistration, ModelRegistration, AuditEvent. Use immutable IDs, explicit revision links, hashes, timestamps and actors. Persist tasks and decisions transactionally. Use optimistic concurrency, idempotency keys and execution leases; recover interrupted tasks without duplicate side effects. Keep raw evidence separate from extracted claims.

## Orchestration
Planner proposes a typed DAG; policy validates acyclicity, permissions, budgets and dependency contracts before execution. Pin tool/model versions and input revisions. Run independent tasks concurrently only when their dependencies are satisfied. Changes invalidate downstream results, not unrelated evidence. Persist checkpoints, bounded retries, cancellation and blocked/failed states. Use explicit human gates for pathway selection, technical review and release as required.

## Tool contract
Typed input/output schema, units, artifact references, tool version, runtime limits, permissions, execution status, provenance and diagnostics. Model outputs are untrusted proposals; validate schema and semantic constraints. Deterministic tools perform measurements and calculations. Candidate first tool: parametric CAD plus geometry checks. Never execute unrestricted model-generated code; use allowlisted operations and isolated workers.

## Integrity and authorization
Operational mode must fail closed on absent identity, durable storage, missing required evidence or unauthorized tools. Simulation never fills operational data. Separate demo records and metrics. Project-scoped access enforced on all APIs, streams and retrieval; engineering authority distinct from configuration release. Approval binds exact baseline digest; changes invalidate applicable approvals. Verification requires objective evidence, not critic score; plan is not execution. No automatic risk closure. Release package assembled and reviewed before release; physical validation remains pending until evidence received.

## Data and cybersecurity
No sensitive data in public repository. Scan uploads, quarantine before processing, enforce file limits/types, isolate parsers, defend against document prompt injection and restrict egress. Least privilege for app and workers. Audit access, tool executions and decisions. Dependency locks, SBOM, SAST, secrets and malware scans; deploy through approved pipeline. Document inherited versus application controls; do not assume authorization from platform hosting.

## Reuse candidates
Forge III shell, mission control, graph visualization, API conventions and gateway abstraction; retain only after review. CAD Workbench and Requirements Workbench are candidate tool sources. Replace simulated fallbacks, subjective acceptance, automatic verification, process-local execution and unrestricted approval/routing. Preserve original repository.
