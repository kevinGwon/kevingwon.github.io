
# Astro Blog Project

This is a customized Astro-based blog setup.

## Features

- **Post list cards**: Each post on the home page is displayed as a styled card with border, shadow and hover effect.
- **Tag chips**: Tags are shown as rounded chips, easy to scan and click.
- **Typography**: Uses Tailwind Typography plugin for clean prose defaults.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` (or the port shown) to see your blog locally.

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy via GitHub Pages or your preferred static host.

## Notes

- TailwindCSS with `@tailwindcss/typography` is enabled.
- Global styles live in `src/styles/globals.css`.
- Modify components in `src/components/` as needed.
- Pages are in `src/pages/`.
