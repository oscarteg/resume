# Rams Document — Design System

A restrained, functional design language in the spirit of **Dieter Rams / Braun**:
warm off-white paper, near-black ink, a single Braun-orange accent, grotesk +
monospace type, hairline rules, numbered sections, and square corners. It was
extracted from a personal website redesign and is meant for editorial / portfolio
/ document-style interfaces — "as little design as possible."

## Sources
- Content and structure derived from **oscartegiffel.com** and its source repo
  `github.com/oscarteg/oscartegiffel.com` (Astro). No proprietary brand assets
  were used; the look is an original Rams-inspired system.
- Reference implementation (multi-page): the `*.dc.html` files at the project
  root (`Oscar te Giffel - Redesign`, `Blog`, `Post`, `Principles`, `Uses`).

## Content fundamentals
- **Voice:** first person, warm but terse. "Hi there! I'm Oscar…" Plain, direct
  sentences; no marketing bombast. Keep the user's own copy where it exists.
- **Casing:** sentence case for prose and titles; **UPPERCASE** only for the
  monospace kicker labels and metadata (SECTION LABELS, stacks, timestamps).
- **Numbers:** sections are numbered `01`, `02`… in mono orange — a running index.
- **No emoji.** Arrows (`↗`, `→`, `←`) are the only glyph decoration.
- **Vibe:** quiet, engineered, confident. Whitespace and rules do the talking.

## Visual foundations
- **Color:** off-white paper (`--paper #EFEBE3`), raised paper for cards
  (`#E8E3D9`), ink `#1B1917`, grey text ramp (`--ink-soft / --muted / --faint`),
  and one accent — **Braun orange `#DC4B12`** — used sparingly for markers, the
  status dot, links, and index numbers. Max one accent; greyscale otherwise.
- **Type:** two families only. **Archivo** (grotesk; stands in for Helvetica
  Neue / Neue Haas Grotesk) for everything structural, **Space Mono** for labels,
  numbers, and metadata. Large display is tightly tracked (`-0.025em`); mono
  labels are uppercased and tracked out (`0.14em`).
- **Layout:** a functional grid — fixed **300px identity/menu rail** + flexible
  content column, `1240px` page max, `860px` reading cap, `64ch` body measure.
- **Dividers:** 2px ink rule for section/column heads; 1px hairline (`#D4CEC3`)
  for list rows. Rules divide, not boxes.
- **Corners:** square (`--radius: 0`). Only code blocks get a hint of radius.
- **Elevation:** essentially flat. In-page depth reads through the raised-paper
  fill + hairline, never shadow. One soft page-level shadow token exists
  (`--shadow-float`) for genuinely floating cards; use rarely.
- **Dark theme:** `[data-theme="dark"]` re-points the base neutrals to a warm
  charcoal paper stack (`--paper #17140F`) with off-white ink; the accent stays
  Braun orange (nudged to `#E4571F`) and hover *lightens* instead of darkening.
  Set `data-theme="dark"` on `<html>`/`<body>` or any ancestor; every semantic
  alias inherits, so token-driven components flip automatically.
- **Markers:** a 7px orange **square** before column headings; a haloed orange
  **dot** for status. These are the two brand "ornaments."
- **Motion:** minimal. `140ms` with a firm ease (`cubic-bezier(0.2,0,0,1)`);
  color/background transitions only. No bounce, no scale-in.
- **Hover:** links darken orange → `#B23A0C`. No underline animations.
- **Imagery:** the system is type-and-rule first. Where images appear they sit in
  hairline frames; no full-bleed gradients, no rounded photo cards.

## Iconography
- **No icon set.** The system deliberately uses Unicode arrows (`↗ → ←`) and the
  two geometric marks (square marker, status dot) instead of an icon library.
- **No logo.** The brand mark is the name set in the grotesk (`Oscar te Giffel`)
  or the mono monogram `O·tG`. No logo file exists — render the name in type
  wherever a mark would go. Do not invent one.

## Foundations (Design System tab)
Specimen cards live in `guidelines/`: Colors (paper, ink, accent, rules), Type
(display, body, mono), Spacing (scale, layout), Brand (section header, status
dot, card, pipeline).

## Components (`components/`)
- **core/** — `SectionHeader`, `Kicker`, `StatusBadge`, `Button`, `Card`, `ListRow`
- **navigation/** — `RailNav`
- **content/** — `SkillColumn`, `Pipeline`

All are React (`.jsx`) with a `.d.ts` contract and `.prompt.md` usage note.
Styling references CSS custom properties only — no CSS-in-JS, no packages.

### Intentional additions
None beyond what the reference site uses. Components map 1:1 to real patterns in
the source (section dividers, rail menu, project cards, record rows, skill
columns, roadmap pipeline).

## UI kit (`ui_kits/personal-site/`)
Home screen recreation — `index.html` (static, token-driven) and `HomeScreen.jsx`
(composed from primitives). README lists the other pages of the source site.

## Template (`templates/personal-site/`)
`PersonalSite.dc.html` — the copyable starting point consuming projects see. It
loads the system via `ds-base.js` and mounts `HomeScreen`. (Replaces the old
per-component/per-screen "starting point" tags, which the runtime deprecated.)

## Thumbnail
`thumbnail.html` — the homepage tile: the name set in Archivo on warm paper with
an orange → press → ink swatch strip. No logo exists, so the name is the mark.

## Files
- `styles.css` — entry point; `@import`s all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards.
- `components/{core,navigation,content}/` — primitives.
- `ui_kits/personal-site/` — screen recreation.
- `shadcn/` — shadcn/ui port of the theme (Tailwind v3 + v4 globals, config, README).
- `SKILL.md` — portable skill manifest.

## Caveats
- **Fonts are substitutes.** Archivo (Google Fonts) stands in for Helvetica Neue /
  Neue Haas Grotesk; Berkeley Mono (from the source "Uses" page) is replaced by
  Space Mono. Swap in licensed originals if you have them.
- Component demo cards resolve the runtime namespace dynamically, so they work
  regardless of the generated bundle name.
