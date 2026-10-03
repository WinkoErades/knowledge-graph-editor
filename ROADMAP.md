# Roadmap

The roadmap is guided by one product idea:

> **Knowledge graphs that work like documents.**

The project should make structured knowledge easy to create, inspect, validate, save, review, and share without requiring graph-database infrastructure.

## Near term — trustworthy authoring

- Node and relationship properties.
- Provenance/evidence fields for assertions.
- Schema constraints for allowed source/target types and required properties.
- Stronger Graph Health checks with safe one-click fixes.
- Multi-select and bulk editing.
- Merge/reconcile duplicate entities.

## Navigation and reading

- Focus/neighborhood mode with hop depth and direction controls.
- Minimap and improved zoom/navigation controls.
- Better rendering of parallel and reciprocal relationships.
- Readable narrative/inspection mode generated deterministically from graph relations.

## Interoperability

- CSV import/export.
- GraphML import/export.
- Optional RDF-oriented interchange without making RDF a requirement.
- Stable, deterministic project serialization for meaningful Git diffs.
- Graph version comparison / visual diff.

## Engineering

- Modular development source while continuing to publish a standalone HTML build.
- Automated browser regression tests.
- Accessibility audit and improved dialog/tab focus behavior.
- Performance improvements for larger graphs.

## Out of scope for the core product

The project does not aim to become a graph database server, hosted collaboration suite, or mandatory cloud platform. Integrations may be added, but local file-based authoring should remain a first-class experience.
