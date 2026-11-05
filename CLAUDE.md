# Plan

Joshua's ten-year plan, one static page at plan.jaybulb.com (Cloudflare Worker assets,
`npx wrangler deploy`). Public on purpose, including grades and disability funding detail.

## The plan
LECSS Pre-Calc 12 (Sep 2026 – Jun 2027) → KPU, online/Langley only (2027) → SFU Computing
Science, transfer entry, Beedie Business minor (2028–31) → UBC engineering + grad work (2031 →).
Dropped, don't bring back: Capilano paralegal, UVic, KPU MATQ, the old SFU → work → engineering
2033–36 timeline.

KPU Spring 2027: plan "Spring 2027 Online" in KPU Plan Ahead — ENGL 1100 (15645), MRKT 1199
(18519), DESN 1160 (17480), ECON 1150 (18415), DESN 1240 (17634). Registration Mon Nov 9 2026.
No Surrey: math and CPSC 1103 wait for Langley/online sections.

## Files
- `index.html` — markup + three small scripts (hero time-lapse, chart, nav spy). No inline styles.
- `plan.css` — the design system, loaded after `jaybulb.com/tokens.css`. `brand/` renders it.
- `brand/glyphs/*.svg` — chapter glyphs, black on transparent, used as CSS masks.
- `fonts/PlanSans.woff2` — Inter v4.1, renamed, ss03 + cv05 frozen, Latin subset.

## Rules
- White and off-white surfaces only. One accent, `--plan #2F6FB0`. Bulb yellow only as the footer rule.
- Square 2px corners; only the app icon rounds. Caps for labels only.
- "Where we are" is the task list (Now / Next / Later / Done): move items as they happen, and
  update `#elapsed[data-next]` in the hero.
- Numbers are cited; sources live in the footer drawer.
