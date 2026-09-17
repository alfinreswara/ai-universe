# AI Universe

An interactive 3D atlas of AI providers, families, models, and capabilities, implemented from the supplied product requirements. English UI; implementation notes include the original Indonesian PRD.

## Run

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Drag to orbit, scroll/pinch to zoom, click a provider, select a family, then inspect a model. Use Ctrl/Cmd+K to search and Escape to move up one level.

## Validate and build

```sh
npm run db:generate
npm run data:validate
npm test
npm run typecheck
npm run lint
npm run build
```

The production site is a Next.js static export in `out/`. Serve that directory with any static host supporting directory index files. `next start` is not used with static export. Development uses `.next-dev/`, so preview and production outputs do not collide.

## Scope

- Nine provider systems, nine official model families, sixteen curated model records.
- Real React Three Fiber scene with procedural terrain and gas planets, atmospheric rim lighting, layered rings and orbiting dust, a baked nebula sky, colored stars, and responsive GSAP camera transitions.
- Provider → family → model navigation, source-backed detail panels, normalized shareable explore URLs.
- Keyboard command palette; model directory with provider, family, modality, capability, weights, API, and lifecycle filters.
- Server-generated HTML profiles and metadata; provider directory, six introductory Learn articles, sitemap, and 404/error handling.
- Automatic/manual quality presets, frame sampling, reduced motion, native modal focus management, mobile drawers, 2D fallback.
- Zod validation, separate source and capability relationships, PostgreSQL/Prisma schema and transactional seed.

The catalog is a verified **curated collection**, not a complete or live list of current models. Historical source pages do not confirm present API availability. Unknown facts are null/unknown and clearly labeled. No rumor, invented pricing, or benchmark numbers are used.

## Data maintenance

See `docs/IMPLEMENTATION.md`. Edit the validated catalog and its sources; models generate their own scene positions. Publish/unpublish is managed through data records. No running database is required for the public snapshot. To use PostgreSQL for internal storage, supply `DATABASE_URL`, then run `npm run db:push` and `npm run db:seed`. Database writes do not bypass review or automatically publish to the site.

## Local analytics hook

Listen to the browser's `ai-universe:analytics` CustomEvent to integrate an approved collector. Events contain catalog IDs and action names, not user identifiers or search text. No external analytics is configured by default. `universe:performance` reports sampled FPS, draw calls, geometries, and texture counts.

## Project map

- `src/app/` — pages, metadata, semantic profiles
- `src/components/three/` — rendering, camera, quality adaptation
- `src/components/ui/` — navigation, accessible search, details
- `src/data/` — reviewed model catalog, sources, learning content
- `src/lib/` — validation, search, URL normalization, deterministic layout
- `src/store/` — centralized exploration state
- `prisma/` — PostgreSQL schema and seed
- `tests/` — data, search, URL, hierarchy, layout, quality tests
- `docs/` — PRD, implementation decisions, QA notes

## GitHub Pages

The public repository is `alfinreswara/ai-universe`. Pushes to `main` run the validation/build workflow and deploy `out/` to GitHub Pages. Expected site URL: https://alfinreswara.github.io/ai-universe/.

The workflow supplies `NEXT_PUBLIC_BASE_PATH=/ai-universe` and `NEXT_PUBLIC_SITE_URL=https://alfinreswara.github.io`. Next.js links and chunks, browser-history updates, copied model links, canonical URLs, and sitemap entries all support this prefix. Local development keeps an empty base path. The older `.openai/hosting.json` is inactive for GitHub Pages.
