# Ghost Hemp Shop

Seed-to-smoke, end-to-end hemp e-commerce concept focused on vibe-driven UX, no-inventory operations, and automated fulfillment.

## What is included

- `index.html`: Main landing page and content structure.
- `styles.css`: Glass-morphism UI styling and responsive layout.
- `script.js`: UI interactions and dopamine-loop panel toggles.
- `manifest.json`: Progressive Web App metadata.
- `sw.js`: Service worker for offline caching.
- `robots.txt`: Search crawler rules.
- `sitemap.xml`: Site URL listing for indexing.
- `package.json`: Front-end package metadata and scripts.
- `requirements.txt`: Python dependency list (minimal static-serve support).

## Local development

### Option 1: Python

```bash
python3 -m http.server 4173
```

### Option 2: npm

```bash
npm install
npm run dev
```

Then open `http://localhost:4173`.

## PWA notes

The app includes:

- Web app manifest (`manifest.json`)
- Service worker (`sw.js`) with basic runtime + precache strategy

## SEO notes

- `robots.txt` allows indexing
- `sitemap.xml` includes canonical homepage URL

## License

MIT
