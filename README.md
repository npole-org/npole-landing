# npole-landing

Minimal static landing page for the npole organization.

## Stack

- Plain HTML
- Plain CSS
- Tiny vanilla JS
- No build step
- No runtime dependencies

## Local development

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy (Cloudflare Pages)

- Framework preset: **None**
- Build command: *(empty)*
- Build output directory: `/`

## License

MIT


## Project visibility model

The landing page reads `data/projects.json` and renders an **Ongoing projects** section.

For each project, provide:
- status
- high-level summary
- link to overview
- link to planning document
- link to changelog

Current project docs live in `projects/riannahs-plants/`.
