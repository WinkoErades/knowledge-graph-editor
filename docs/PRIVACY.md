# Privacy

Knowledge Graph Editor is designed to be local-first.

## Current application behavior

The current release:

- reads graph files through browser file APIs,
- performs graph editing and validation in the browser,
- saves/exports files through browser download APIs,
- does not intentionally send graph contents to a server,
- does not include analytics or telemetry,
- does not make application-level network requests.

This means a downloaded copy can be used offline.

## Hosted copies

If the application is served through GitHub Pages or another web host, the hosting provider may receive ordinary web-server information such as IP address, user agent, and page requests. That behavior belongs to the hosting service and is separate from the application's graph-processing logic.

## Future changes

Any future feature that transmits graph content or metadata off-device should be opt-in, documented prominently, and designed so the local-only workflow remains available.
