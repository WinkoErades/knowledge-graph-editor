# Architecture

## Design goal

Knowledge Graph Editor is intentionally distributed as a **single standalone HTML file**. The browser is the runtime; there is no required backend, database, package manager, or network service.

## Runtime layers

### Document model

The in-memory model contains:

- document metadata (`title`, `description`),
- nodes,
- relationships,
- node types,
- relation types,
- stable editor IDs,
- layout positions and viewport state.

### Derived indexes

Maps such as node-by-ID and relationship-by-ID are rebuilt from the canonical arrays. UI selectors, filters, validation status, type legends, and graph statistics are derived from the model rather than acting as independent stores.

### Mutation and history

User-visible graph mutations are routed through a snapshot-based undo/redo mechanism. The history is intentionally bounded to avoid unbounded memory growth.

### Rendering

The graph is rendered as SVG. Nodes and relationships are interactive SVG groups with keyboard and pointer handlers. The graph supports zoom, pan, node drag, relationship selection, context menus, and direct-connect gestures.

### Validation

Graph Health derives advisory issues from the model, including structural and Viewer-export compatibility checks. Validation does not silently change graph data.

### Persistence

Two persistence paths are intentionally separate:

- **Save Project**: lossless `.kge.json` editor state.
- **Export Viewer JSON**: strict five-field relationship records.

SVG is a third, presentation-only export.

## Security posture

The application processes files entirely in the browser and currently makes no intentional network requests. User-provided graph labels are rendered with text-safe DOM APIs rather than inserted as raw HTML.

## Future modularization

As the codebase grows, development source may be split into modules (model, history, rendering, validation, import/export, dialogs) while a build step continues to produce a single self-contained `index.html` release artifact.
