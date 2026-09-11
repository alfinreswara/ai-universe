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
