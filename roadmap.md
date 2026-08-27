# Roadmap

## Now
- [ ] Call KPU Future Students (604-599-3030, Mon–Fri 1–4pm PT), book Upgrading Advisor appt
- [ ] Register for Pre-Calc 12 (MATQ 1130) — free, continuous intake
- [ ] Apply for StudentAid BC disability status (CSG-D / CSG-DSE)
- [ ] Open an RDSP

## After Pre-Calc 12
- [ ] Apply to SFU Computing Science as a BC high school completer
- [ ] Register calc + physics for year 1 (keeps engineering open, also feeds the finance track)

## Year 2
- [ ] Declare the Beedie Finance minor (BUS 217/312 + electives)

## Later
- [ ] Revisit MSc Finance after 1–2 years working — needs GPA + GMAT/GRE
- [ ] Target Kits/Chinatown move within 1–2 years of graduating

## Maybe
- [ ] Verify the Beedie minor course list against the current SFU calendar (linked source is the 2026 spring calendar)

## From Notes PDF (imported 2026-08-02)
- [ ] Explore/research: BSc diploma versus Masters — worth digging into before/after the SFU CS BSc + Beedie minor path, timing and tradeoffs vs. the existing "Revisit MSc Finance after 1-2 years working" item above

## WebMCP + REST API rollout (pending, 2026-08-27)

Add `document.modelContext` tool registration so in-browser agents can drive
this app, and document any HTTP surface it already has.

Pattern is already shipped in epiphany, healstack, roost, curvely, wiretext,
litigate, cadence, sparkjar and lexly — copy the closest one:

- React app with hooks → `src/lib/webmcp.js` exporting `useWebMCP(ctx)`, called
  from `App.jsx` with the hook callbacks it already holds (see epiphany, curvely).
- React app whose state lives in contexts → a `<WebMCP />` component that reads
  those contexts (see healstack, roost).
- Vanilla JS app → a `webmcp.js` IIFE plus `window.*` accessors exported from the
  existing app script (see litigate, lexly, sparkjar).

Rules the shipped ones follow:
- Tools call existing functions or existing `/api` routes. Never reimplement logic.
- Read-only tools first, then reversible writes.
- `requiresConfirmation: true` only on the genuinely consequential ones —
  payments, public publishing, deletions. Not on ordinary writes.
- Bail out quietly when `document.modelContext` is missing.
- Ship a `docs/API.md` listing REST routes (or stating there are none) plus the
  tool table split into read-only / reversible / confirmation-gated.
