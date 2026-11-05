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

KPU Spring 2027: the only plan in KPU Plan Ahead is "Spring 2027 Langley" (preferred):
ENGL 1100 (13506, Mon 10–12:50), BUQU 1230 (17139, Tue 10–12:50), BUQU 1130 (17131, Tue 1–3:50),
CMNS 1140 (10341, Thu 1–3:50), BUSI 1110 (10283, Thu 4–6:50). Registration Mon Nov 9 2026.
Marketing (MRKT 1199) has no Langley in-person section in Spring 2027 — revisit for Fall.

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

## Next session: register at KPU (Mon Nov 9 2026)
Paste this to Claude on Nov 9:

> Registration for KPU Spring 2027 opened today. Open myKPU in Safari (I'll log in), go to
> Register for Classes → Spring 2027 → Plans, load "Spring 2027 Langley", Add All, and show me
> the summary before I hit Submit. CRNs: 13506 ENGL 1100, 17139 BUQU 1230, 17131 BUQU 1130,
> 10341 CMNS 1140, 10283 BUSI 1110. If a section is full, waitlist it and suggest a Langley
> in-person swap (see KPU rules). Then update the plan: move "Register at KPU" to Done, set the hero
> `#elapsed[data-next]` to the next task (StudentAid BC), mark the KPU section Registered,
> commit, push and deploy.

After that: StudentAid BC (disability status) before Jan; last no-penalty drop Tue Jan 5;
classes start Wed Jan 6; fees due Thu Jan 21.
