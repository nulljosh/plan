# Plan, technically

A personal plan as one static page. No framework, no build, no backend.

- **Page:** `index.html`. Hero time-lapse (one photo per chapter), a task list, the plan,
  money, outlook, and a net-worth chart drawn as inline SVG by ~30 lines of JS.
- **Design system:** `plan.css` on top of the Jaybulb fleet tokens. Rendered at `/brand/`.
- **Type:** Plan Sans, a renamed Inter with round punctuation and a tailed l, optical sizing on.
- **Art:** six SVG glyphs masked into scanlines with a halftone dither, no images needed.
- **Hosting:** Cloudflare Worker static assets on plan.jaybulb.com.
- **Privacy:** nothing collected; personal numbers are published deliberately.

MIT 2026, Joshua Trommel
