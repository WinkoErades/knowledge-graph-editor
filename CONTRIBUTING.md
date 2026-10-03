# Contributing

Thank you for helping improve Knowledge Graph Editor.

## Product principles

Changes should preserve the project's core identity:

1. **The graph is the document.** Editing should feel direct and understandable.
2. **Local-first by default.** Core graph editing must not require an account, database, or network connection.
3. **Portable release artifact.** The distributed application should remain usable as a single standalone HTML file.
4. **Transparent data.** Project and export formats should be documented and human-readable.
5. **Viewer export stays strict.** Viewer JSON must contain only `head`, `head_type`, `relation`, `tail`, and `tail_type`.
6. **Data-loss risks are explicit.** The UI should clearly explain when a target format cannot preserve editor state.
7. **Accessibility matters.** Keyboard use, focus behavior, labels, and non-color cues should be considered in UI changes.

## Before opening a pull request

1. Fork the repository and create a focused branch.
2. Make the smallest coherent change that solves the problem.
3. Run:

   ```bash
   npm test
   ```

4. Test the app manually in at least one Chromium-based browser and one other browser when the change affects pointer, keyboard, or file behavior.
5. Update documentation and `CHANGELOG.md` when appropriate.
6. Include a short description of user-visible behavior and any file-format impact.

## Development style

The current distributed app is intentionally a single `index.html`. Avoid adding runtime frameworks or CDN dependencies to the release artifact without prior discussion.

Prefer:

- standard browser APIs,
- deterministic serialization,
- explicit state transitions,
- reversible mutations through undo/redo,
- custom in-app dialogs instead of native `alert()` / `confirm()`,
- backward-compatible project loading where practical.

## Data format changes

Any `.kge.json` format change must:

- increment the project format version when compatibility requires it,
- document the change in `docs/FILE_FORMATS.md`,
- preserve loading of older supported versions or provide a migration path,
- never silently change the strict Viewer JSON schema.

## Reporting bugs

Please use the Bug Report issue template and include:

- browser and OS,
- steps to reproduce,
- expected and actual behavior,
- a minimal graph file when possible,
- whether the problem occurs with a Viewer JSON file, a project file, or both.

## Feature proposals

Use the Feature Request template. Explain the user problem first, then the proposed interaction. Features that reinforce the document-first, local-first product direction are preferred.
