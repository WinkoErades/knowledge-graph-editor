# Development

## Requirements

Normal users need only a modern browser. Contributors need Node.js only to run the repository validation script.

No npm packages are required.

## Validate the repository

```bash
npm test
```

The validator checks:

- JavaScript syntax in inline scripts,
- duplicate HTML IDs,
- `$()` / `getElementById()` references to missing elements,
- absence of native `alert()` / `confirm()` usage,
- absence of common network APIs in the runtime application,
- presence of the project-v2 format identifier,
- presence of the strict Viewer JSON field names.

## Run locally through HTTP

Opening `index.html` directly is supported. For browser debugging that prefers an HTTP origin, run any static server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Manual smoke-test checklist

Before a release, verify at minimum:

1. Create a new document and edit title/description.
2. Create node types, nodes, relation types, and relationships.
3. Select/edit nodes and relationships directly on the graph.
4. Create a relationship using Connect mode or Shift-drag.
5. Undo and redo several mutations.
6. Trigger validation warnings and open them from Graph Health.
7. Save a `.kge.json` project, reload it, and verify positions/metadata persist.
8. Export Viewer JSON and verify every object contains exactly five fields.
9. Export SVG and open it independently.
10. Exercise right-click context menus and dialogs with keyboard navigation.

## Release artifact

`index.html` is the product. Avoid changes that make normal use depend on external CDNs or package installations.
