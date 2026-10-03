# Release Checklist

## Code and behavior

- [ ] `npm test` passes.
- [ ] App opens directly from `index.html`.
- [ ] New document workflow works.
- [ ] Viewer JSON import works.
- [ ] Project JSON import works.
- [ ] Save Project round-trip preserves metadata and node positions.
- [ ] Viewer export contains exactly the five documented fields.
- [ ] SVG export opens independently.
- [ ] Undo/redo works after create, update, delete, and node movement.
- [ ] Node and relationship context menus work.
- [ ] Direct-connect workflow works.
- [ ] Graph Health opens and issue actions navigate correctly.
- [ ] No native browser `alert()` / `confirm()` dialogs appear.

## Documentation

- [ ] Update `CHANGELOG.md`.
- [ ] Update project version where applicable.
- [ ] Review `README.md` screenshots and feature list.
- [ ] Update file-format documentation for serialization changes.
- [ ] Review roadmap if a major planned feature was completed.

## GitHub release

- [ ] Tag release (`vX.Y.Z`).
- [ ] Create GitHub Release using changelog notes.
- [ ] Attach `index.html` as a standalone release download.
- [ ] Verify GitHub Pages deployment.
