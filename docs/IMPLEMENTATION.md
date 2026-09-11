# AI Universe implementation

The supplied PRD is retained in `docs/PRD_AI_UNIVERSE_3D.md`.

## Architecture and phase acceptance

0. Foundation: Next.js App Router, React, TypeScript, Tailwind design tokens, Zod-validated curated catalog; acceptance: source validation and typecheck.
1–2. Scene: layered GPU star points, procedural galaxy particles, three spatial nebula planes, reusable provider system; acceptance: interactive rendering without raster backgrounds and no per-star React components.
3–4. Hierarchy: data-driven provider → family → model nodes, centralized GSAP CameraController, Zustand selection, normalized deep links, breadcrumbs and Escape; acceptance: navigation unit and browser tests.
5–6. Discovery: native modal command palette with keyboard selection, model details and official source records, statically generated provider/model pages; acceptance: search and direct-link tests.
7–9. Experience: responsive drawer, optional intro remembered locally, quality selection and frame-time adaptation, reduced motion, error boundaries, 2D fallback; acceptance: desktop/mobile/fallback browser checks.
10. Production: static Next.js export, metadata, sitemap, local analytics integration point, production build and private publication. Measured QA results are recorded separately.

## Deliberate decisions

- Next.js is preserved exactly as requested. The initial catalog is statically generated, making all public profiles indexable and available without a database. PRD section 51 explicitly permits a validated seed/editor workflow for MVP. PostgreSQL schema and transactional, repeatable seed are included, but no remote database is provisioned or claimed connected.
- The curated 16-model collection is intentionally not labeled latest, exhaustive, or live. Official sources were checked on 2026-09-11. Historical announcements establish release facts, not current API availability. Unverified status, weights, and availability remain null/unknown. No benchmark or pricing claims are made.
- Galaxy presentation is an AI Universe visualization, not a provider's taxonomy. All current family names are official; internal grouping is supported explicitly by classificationType.
- Procedural geometry and shader points implement space, following the PRD. No generated wallpaper, large textures, GLBs, dynamic shadows, or expensive bloom.
- Quality adapts downward after frame sampling below 30 FPS, unless explicitly overridden. Each preset changes actual particle counts and DPR. Frame-rate measurements are sampled after a warmup, not marketed as guaranteed device performance.
- Analytics events are local CustomEvents (`ai-universe:analytics`), containing event names and catalog IDs only. No analytics service, personal identifiers, or search text leaves the browser. A production collector can subscribe after the owner chooses one.

## Content workflow

Edit `src/data/catalog.ts`, attach a checked official Source, use null for unknown facts, and keep new entries unpublished until verification. Update lastVerifiedAt only after checking displayed facts. Run `npm run data:validate`, `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` before publishing. Scene layout auto-generates family/model positions. New providers beyond the initial curated anchors receive deterministic positions.

## PostgreSQL workflow

Copy `.env.example` to `.env`, provide a PostgreSQL DATABASE_URL, then run `npm run db:generate`, `npm run db:push`, and `npm run db:seed`. The website's curated snapshot remains the serving layer for this MVP; changing the database alone does not silently publish data. A future reviewed export pipeline can read database records and regenerate the validated snapshot.

## Deferred work and limits

No CMS login, scraper, model inference, benchmark comparison, watchlist, account system, or background data publication. Those are outside the PRD MVP. Current catalog verification is claim-level rather than an ongoing freshness service. Database-backed publishing, external analytics/error aggregation, and sustained physical-device GPU profiling require the owner's production infrastructure or hardware. Browsers expose draw calls, geometry counts, textures, and sampled FPS; reliable process-level GPU memory measurements are not available through the app.
