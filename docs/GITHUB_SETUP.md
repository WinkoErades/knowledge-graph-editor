# GitHub Publishing Checklist

This repository bundle is designed to be uploaded directly to a new public GitHub repository.

## 1. Create the repository

Recommended repository name:

```text
knowledge-graph-editor
```

Recommended description:

> Knowledge graphs that work like documents — create, inspect, validate, and share structured knowledge visually, without a database.

Make it **Public** if the intention is an open-source project.

Do not ask GitHub to create an extra README, `.gitignore`, or license when creating the repository; this bundle already contains them.

## 2. Push the files

From the repository directory:

```bash
git init
git add .
git commit -m "Initial open-source release"
git branch -M main
git remote add origin https://github.com/OWNER/knowledge-graph-editor.git
git push -u origin main
```

Replace `OWNER` with the GitHub account or organization.

## 3. Update repository-specific placeholders

After the final repository URL is known:

- replace `OWNER/REPOSITORY` in the release link at the bottom of `CHANGELOG.md`;
- optionally add `repository-code` and `url` fields to `CITATION.cff`;
- add maintainer contact information to `SECURITY.md` only if you want an alternative to GitHub's private vulnerability reporting.

## 4. Repository settings

Recommended settings:

- **Issues:** enabled
- **Discussions:** optional but useful for support/questions
- **Projects:** optional
- **Wiki:** usually unnecessary because documentation lives in `/docs`
- **Private vulnerability reporting:** enable under Security settings
- **Branch protection for `main`:** require the Validate workflow once the project has multiple contributors

## 5. GitHub Pages

The repository includes `.github/workflows/pages.yml`.

In **Settings → Pages**, configure GitHub Pages to use **GitHub Actions**. A push to `main` will then publish the standalone application.

After deployment, put the Pages URL in the repository's **Website** field.

## 6. Repository topics

Suggested topics:

```text
knowledge-graph
knowledge-graph-editor
graph-visualization
graph-editor
local-first
offline-first
json
svg
semantic-web
open-source
```

Use only topics that continue to describe the project accurately.

## 7. Social preview

GitHub supports a repository social preview image under repository settings. A product screenshot or a simple branded image with the tagline **“Knowledge graphs that work like documents”** works well.

This bundle deliberately does not include a fabricated product screenshot; use a screenshot from the current release after it is running in your browser.

## 8. First release

Create tag/release:

```text
v1.0.0
```

Suggested release title:

```text
Knowledge Graph Editor v1.0.0 — Initial open-source release
```

Use the `1.0.0` section of `CHANGELOG.md` as the basis for the release notes and attach `index.html` as a standalone downloadable asset.

## 9. License

The bundle uses the **MIT License**. If you prefer a different open-source license, change `LICENSE`, the `license` fields in `package.json` / `CITATION.cff`, and the README before publishing.

## 10. Before announcing the project

Run:

```bash
npm test
```

Then complete `docs/RELEASE_CHECKLIST.md` and verify the GitHub Pages URL in a fresh browser session.
