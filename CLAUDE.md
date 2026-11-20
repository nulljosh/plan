# Plan

Joshua's ten-year plan, one static page at plan.jaybulb.com (Cloudflare Worker assets,
`npx wrangler deploy`). Public on purpose, including grades and disability funding detail.

## The plan
LECSS Pre-Calc 12 (Sep 2026 – Jun 2027) → KPU, Langley in person (2027) → SFU Computing
Science, transfer entry, Beedie Business minor (2028–31) → UBC engineering + grad work (2031 →).
Dropped, don't bring back: Capilano paralegal, UVic, KPU MATQ, the old SFU → work → engineering
2033–36 timeline.

## KPU rules (non-negotiable)
- Langley campus only. No Surrey, no Richmond.
- In person only. No Zoom, no online (sync or async).
- Not pursuing the BTech IT (its courses run only at Surrey).
- No back-to-back classes; one class a day is the target.

KPU Spring 2027: the only plan in KPU Plan Ahead is "Spring 2027 Langley" (preferred):
REGISTERED Nov 19 2026: BUQU 1130 (17131, Tue 1–3:50), ENGL 1100 L15 (17343, Wed 10–12:50; Mon L12 13506 was full), BUSI 1110 (10283, Thu 4–6:50).
9 credits, one class a day — no back-to-back classes (Joshua's call).
Deferred: BUQU 1230 (stats), CMNS 1140 (communication).
Marketing (MRKT 1199) has no Langley in-person section in Spring 2027 — revisit for Fall.

## Files
- `index.html` — markup + three small scripts (hero time-lapse, chart, nav spy). No inline styles.
- `plan.css` — the design system, loaded after `jaybulb.com/tokens.css`. `brand/` renders it.
- `brand/glyphs/*.svg` — chapter glyphs, black on transparent, used as CSS masks.
- `fonts/PlanSans.woff2` — Inter v4.1, renamed, ss03 + cv05 frozen, Latin subset.

## Rules
- White and off-white surfaces only. One UI accent, `--plan #2F6FB0`. Seven flat chapter colours (`--ch-*`) for hero, timeline rules, glyph tiles. No photos, gradients or animated backgrounds. Bulb yellow only as the footer rule.
- Square 2px corners; only the app icon rounds. Caps for labels only.
- "Where we are" is the task list (Now / Next / Later / Done): move items as they happen, and
  update `#elapsed[data-next]` in the hero.
- Numbers are cited; sources live in the footer drawer.

StudentAid BC: account created Nov 5 (SIN check ≤72h); disability status application started, verification form
sent to the assessing psychologist for signature — upload + submit when it comes back (~6 wks). Full-time
aid application right after registering; parents add income via the Supporting Users Portal.
After that: last no-penalty drop Tue Jan 5;
classes start Wed Jan 6 (first class that day); fees due Thu Jan 21.
