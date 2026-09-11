# Validation record — 2026-09-11

## Automated checks

- `npm test`: six tests pass (catalog relations/provenance, search, URL normalization, hierarchy/back, deterministic spatial layout, quality presets).
- `npm run typecheck`: passes.
- `npm run lint`: passes without warnings.
- `npm run db:generate`: Prisma client generated successfully from the PostgreSQL schema. No live database connection or seed execution is claimed.
- Dependency installation/audit after explicit transitive patch overrides: zero reported vulnerabilities.
- Next.js static generation: 41 generated entries; build completion and export-link verification must precede publication.

## Browser integration checks

Using the Codex in-app browser against the local development server:

- Provider → GPT family → GPT-4.1 detail succeeds, including in fallback mode.
- Command palette search for Claude Opus 4, Return selection, automatic dialog closure, target detail, and URL synchronization succeed. A keyboard default-action issue found during QA was fixed with preventDefault/stopPropagation.
- Escape navigates from model detail to the family system.
- Explicit 2D fallback shows an explanation and working model-directory link.
- Provider=Meta + Open weights returns exactly two Llama models. Adding Audio Output produces the empty state; Clear filters restores all sixteen models.
- Llama 4 Scout profile opens, links to the official Meta announcement, and exposes a normalized View in Universe URL.
- No browser error logs were captured in the checked final interactions.

## Responsive/visual checks

- Desktop layout tested at 1440 × 900; provider controls and quality settings remain usable.
- Mobile model drawer tested at 390 × 844. Actual DOM width=390 and document scroll width=390; panel fits x=10..380 with an internal scroll area.
- Tablet directory checked at 768 × 1024; scroll width=753 (viewport width includes scrollbar), with no horizontal overflow. Directory screenshot reviewed.
- Initial mobile/desktop universe screenshots reviewed. Fixed welcome panel centering and stacking above celestial labels; increased low-quality galaxy particle visibility.
- Browser screenshot capture intermittently failed for the large high-quality canvas; accessible state, settings, and console checks remained available. No physical-device GPU profiling or high-DPR device certification is claimed.

## Performance observations and bounds

The settings panel sampled 24 FPS during an early low-quality development-session interval and 50 FPS in a later high-quality interval. These are observations of this constrained browser session, not comparable benchmark runs or a guaranteed 60 FPS result. The app automatically reduces quality when sustained measured frame rate falls below 30 FPS, unless a user explicitly overrides it. A follow-up on real target desktop/mobile hardware is recommended before treating all PRD performance targets as certified.

Quality presets change actual star/galaxy point counts and DPR. The heavy 3D scene is lazy loaded. All profiles are generated as HTML without requiring WebGL. Production bundle sizes and route output are provided by the final build.

## Final local delivery

- Final `npm run build` exited 0; all 41 static-generation entries completed. Explore first-load JS is 184 kB; shared JS is 103 kB. Heavy Three.js code is in separately loaded chunks.
- `python3 scripts/check-export.py` passed: 38 HTML files, all internal links and asset paths present, canonical metadata and model facts present in generated HTML.
- Production export size: 4.4 MB; deployment-format local archive: about 798 KB at `/tmp/ai-universe-deploy.tar.gz`.
- Production export served locally on port 3001 and checked in the in-app browser. Provider selection and family controls work; no error-level console logs were reported.
- Owner explicitly selected local-only delivery. No source push, version save, or deployment was performed. The registered Sites identity contains only the site title/description, not the project source.
