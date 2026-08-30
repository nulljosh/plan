# Plan

Joshua's education/career roadmap. Single static page, no build step, no deploy —
`index.html` is opened locally. Created 2026-07-27 from a one-off HTML file in
`~/Downloads`.

## Files
- `index.html` — the entire plan. Self-contained: inline `<style>`, inline SVG chart,
  no external assets, no JS.
- `architecture.svg` — project map for the README.

## The decision this file encodes
**SFU Computing Science BSc** (Burnaby) + **Beedie Finance minor** as the default,
with **MSc Finance** as an optional post-BSc add-on decided after 1–2 years of work.
Superseded earlier plans: Capilano paralegal (dropped 2026-07-06) and UVic CS (ruled
out — not Lower Mainland). Don't reintroduce either as current.

The one admission blocker is **Pre-Calculus 12** — Joshua has Pre-Calc 11 (C+, 2018).
English is already covered (English 12 C+, English Studies 12 = A), so no English
upgrading. KPU MATQ is free and continuous-intake.

## Editing rules
- Numbers in here are cited — tuition, PWD rates, CSG-D/CSG-DSE caps, salary bands.
  If you change a figure, update the matching entry in the Sources section too.
- The net-worth chart is hand-plotted SVG `points`. The value series is in an HTML
  comment directly above the `<polyline>`; recompute the `y` coords from that comment's
  formula (`y = 280 - (value/1100)*260`) rather than eyeballing new points.
- Keep it one file. This is a personal reference doc, not an app — no framework, no
  bundler, no CSS extraction.

## Roadmap
See `roadmap.md` in this repo root.

## Privacy note
The root `index.html` contains transcript grades, disability funding detail, and income information. It is kept private in this archived repo. Public mirror via `plan-site` was removed 2026-08-30 after serving the unredacted version; the `site/` directory copy within this repo has also been removed.
