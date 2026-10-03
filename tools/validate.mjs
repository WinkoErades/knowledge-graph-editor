import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const failures = [];
const pass = message => console.log(`✓ ${message}`);
const fail = message => { failures.push(message); console.error(`✗ ${message}`); };

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const duplicates = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
if (duplicates.length) fail(`Duplicate HTML ids: ${duplicates.join(", ")}`);
else pass(`${ids.length} HTML ids are unique`);

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
if (!scripts.length) fail("No inline application script found");
else {
  try {
    for (const script of scripts) new Function(script);
    pass(`${scripts.length} inline script block(s) pass JavaScript syntax parsing`);
  } catch (error) {
    fail(`JavaScript syntax error: ${error.message}`);
  }
}

const refs = new Set();
for (const script of scripts) {
  for (const m of script.matchAll(/\$\("([^"]+)"\)/g)) refs.add(m[1]);
  for (const m of script.matchAll(/getElementById\("([^"]+)"\)/g)) refs.add(m[1]);
}
const missing = [...refs].filter(id => !ids.includes(id));
if (missing.length) fail(`DOM references missing from HTML: ${missing.join(", ")}`);
else pass(`${refs.size} static DOM id references resolve`);

const appScript = scripts.join("\n");
if (/\b(?:window\.)?(?:alert|confirm)\s*\(/.test(appScript)) fail("Native alert()/confirm() detected; use in-app dialogs");
else pass("No native alert()/confirm() calls detected");

const networkPatterns = [
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
  /navigator\.sendBeacon\s*\(/
];
if (networkPatterns.some(re => re.test(appScript))) fail("Network API detected in runtime application; review local-first invariant");
else pass("No common runtime network APIs detected");

if (html.includes('knowledge-graph-editor/project-v2')) pass("Project-v2 format identifier present");
else fail("Project-v2 format identifier missing");

const viewerFields = ["head", "head_type", "relation", "tail", "tail_type"];
const missingViewerFields = viewerFields.filter(field => !new RegExp(`\\b${field}\\b`).test(appScript));
if (missingViewerFields.length) fail(`Viewer export field names missing: ${missingViewerFields.join(", ")}`);
else pass("All strict Viewer JSON field names are present");

if (!failures.length) {
  console.log("\nValidation passed.");
  process.exit(0);
}
console.error(`\nValidation failed with ${failures.length} issue(s).`);
process.exit(1);
