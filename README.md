# Knowledge Graph Editor

**Knowledge graphs that work like documents.**

Knowledge Graph Editor is a local-first, single-file web application for creating, inspecting, validating, and sharing structured knowledge visually — without a database, server, account, or query language.


## Why this project?

Most knowledge-graph tools assume a database, server, ontology stack, or heavyweight desktop application. Knowledge Graph Editor takes a document-first approach: **the graph is the document**.

Open a file, edit nodes and relationships directly, validate the structure, save a lossless project, or export a simple Viewer-compatible JSON file.

## Highlights

- Direct visual editing of nodes and relationships
- Clickable/selectable graph elements with keyboard support
- Right-click context menus for common graph actions
- Direct relationship creation by click or Shift-drag
- Node types and relation types as managed graph concepts
- Graph validation and a visible Graph Health indicator
- Undo/redo and unsaved-change protection
- Lossless project files (`.kge.json`)
- Strict five-field Viewer JSON export
- Complete graph export as SVG
- Document title and description metadata
- Search and relation filtering
- Zoom, pan, drag, fit-to-graph, and selected-node navigation
- Works offline after download
- No runtime dependencies and no network requests

## Quick start

### Use it locally

1. Download `Knowledge Graph Editor v1.0.0.html`.
2. Open it in a modern browser.
3. Choose **New document** or **Open file**.
4. Save ongoing work with **Save Project**.
5. Share simplified graph data with **Export Viewer JSON**, or share the visualization with **Export SVG**.

No installation or local server is required for normal use.

### Use the hosted GitHub Pages build

After Pages is enabled for the repository, the included workflow publishes the same `Knowledge Graph Editor v1.0.0.html` application automatically from `main`.

## File formats

| Format | Purpose | Lossless? |
| --- | --- | --- |
| `.kge.json` | Knowledge Graph Editor project | Yes |
| Viewer `.json` | Simple relationship interchange | No — relationship records only |
| `.svg` | Visual sharing/export | Visual only |

Viewer JSON contains exactly these five fields per relationship:

```json
[
  {
    "head": "Adam",
    "head_type": "Person",
    "relation": "KNOWS",
    "tail": "Eve",
    "tail_type": "Person"
  }
]
```

See [docs/FILE_FORMATS.md](docs/FILE_FORMATS.md) for the full project format and compatibility rules.

## Keyboard shortcuts

| Action | Shortcut |
| --- | --- |
| Save project | `Ctrl/Cmd + S` |
| Export Viewer JSON | `Ctrl/Cmd + Shift + E` |
| Undo | `Ctrl/Cmd + Z` |
| Redo | `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` |
| Cancel dialogs / connect mode | `Esc` |

## Repository structure

```text
.
├── Knowledge Graph Editor v1.0.0.html      # Complete standalone application
├── examples/                               # Example Viewer and project files
├── docs/                                   # Architecture, formats, privacy, development
├── tools/validate.mjs                      # Zero-dependency repository validation
├── .github/                                # CI, Pages, issue and PR templates
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── ROADMAP.md
└── LICENSE
```

## Development

The distributed application intentionally remains a single HTML file. This keeps the product portable and easy to audit.

For contributor setup and validation instructions, see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

Run the repository checks with:

```bash
npm test
```

There are no npm dependencies; Node.js is only used for the validation script.

## Privacy and local-first behavior

The current application makes no network requests. Graph files are read and processed in the browser. See [docs/PRIVACY.md](docs/PRIVACY.md) for details and hosting caveats.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) before opening a pull request.

## Security

Please do not open public issues for vulnerabilities. Follow [SECURITY.md](SECURITY.md) instead.

## Roadmap

The roadmap focuses on keeping the editor document-first while expanding trustworthy knowledge authoring: provenance, properties, schema constraints, entity reconciliation, richer navigation, and interoperability. See [ROADMAP.md](ROADMAP.md).

## License

Released under the [MIT License](LICENSE).
