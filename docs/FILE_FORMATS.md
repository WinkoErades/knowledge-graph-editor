# File Formats

Knowledge Graph Editor deliberately separates the **lossless editor project** from the **simple Viewer interchange format**.

## 1. Knowledge Graph Editor project (`.kge.json`)

Current format identifier:

```json
"knowledge-graph-editor/project-v2"
```

A project preserves document metadata, graph entities, type registries, node positions, relationship IDs, and the current viewport.

Representative structure:

```json
{
  "format": "knowledge-graph-editor/project-v2",
  "version": 2,
  "document": {
    "title": "Example knowledge graph",
    "description": "A small demonstration graph."
  },
  "nodes": [
    {
      "id": "n1",
      "name": "Adam",
      "type": "Person",
      "x": 420.25,
      "y": 260.5
    }
  ],
  "nodeTypes": ["Person"],
  "relationTypes": ["KNOWS"],
  "relations": [
    {
      "id": "r1",
      "source": "n1",
      "type": "KNOWS",
      "target": "n2"
    }
  ],
  "view": {
    "x": 0,
    "y": 0,
    "scale": 1
  }
}
```

### Compatibility policy

- Project files are the canonical lossless editing format.
- New format versions should have explicit identifiers and version numbers.
- Older supported project versions should be migrated on load rather than silently reinterpreted.

## 2. Viewer JSON (`.json`)

Viewer JSON is intentionally minimal. The top level is an array of relationship records.

Each record contains **exactly five fields**:

```json
{
  "head": "Adam",
  "head_type": "Person",
  "relation": "KNOWS",
  "tail": "Eve",
  "tail_type": "Person"
}
```

### What Viewer JSON cannot preserve

Because the format stores relationships rather than a complete editor project, it cannot represent:

- isolated nodes,
- unused node types,
- unused relation types,
- editor IDs,
- node positions,
- viewport state,
- document title/description.

The editor warns before export when information would be omitted.

### Node identity caveat

The Viewer format has no node ID. Node names therefore need to remain unambiguous for predictable round-tripping. The editor validates name collisions and prevents ambiguous duplicate creation in normal editing flows.

## 3. SVG export

SVG is a visual export of the complete graph. It includes node labels, node types, relationship labels (when practical), arrowheads, and the graph's dark background. The document title and description are embedded as SVG accessibility metadata.

SVG is not intended for re-import as editable graph data.
