# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions.

---

## [Session 13] — 2026-06-28

### Changed
- Concurrency Conflicts — Interactive: timeline steps switched from `.tl-step`
  to `.tl-step-code` (dark navy mono style), matching the Locks page convention;
  timeline centred with `justify-content: center`; narrative box width capped at
  584px (matching the combined column width) and given `min-height: 80px` to
  prevent layout shift between steps; button group spacing increased to `margin-top: 20px`
- Concurrency Conflicts — Reference: inline `SET DEADLOCK_PRIORITY` and
  `XACT_STATE()` code snippets changed from dark block treatment to
  `.code-inline` pill style; new `.ref-card code.code-inline` rule added to
  `main.css` for light inline code within reference cards
- Performance Basics — Reference: `<code>` pills in `.data-table` cells
  given explicit `color: #1a1a2e` and slightly darker background `#e8e8e8`
  for legibility against the light cell background; Output Field column
  given fixed `width: 160px` to prevent `physical reads` wrapping
- main.css: added `.tl-step-code.active-b`, `.tl-step-code.blocked`,
  `.tl-step-code.victim`, `.tl-step-code.resolved` dark-background state
  variants to match the existing `.tl-step-code.active-a` and `.tl-step-code.done`;
  added `.ref-card code.code-inline` override rule; updated `.data-table code`
  with explicit color and background values

### Fixed
- Concurrency Conflicts — Explainer: third deadlock diagram box given explicit
  `width` and `height` with flex centering to match the height of the flanking boxes;
  stray closing `</span>` tag corrected in Transaction B box; "requiry" → "require";
  "writing for" → "waiting for"
- Concurrency Conflicts — Interactive: `renderStep()` switched from `.textContent`
  to `.innerHTML` so em-dash entities render correctly in narrative text
- Concurrency Conflicts — Reference: "Telss" → "Tells"; `WHILE` condition
  restored (`AND @success = 0` was corrupted to stray tokens); `12ß5` → `1205`
  in intro text
- Concurrency Conflicts — JS data array: "noch blocked" → "now blocked";
  "consitent" → "consistent"; "must not catch" → "must now catch";
  "Customes" → "Customers"
- Performance Basics — Explainer: "rund" → "run"; "instead on" → "instead of
  an index on"; "unter" → "under"; "the revisit" → "then revisit"
- Performance Basics — Interactive: `class="sime-explanation"` typo corrected
  to `class="sim-explanation"` (explanation panel styling was silently absent
  on all simulator states); `INSERT INTO,` stray comma removed from three
  code array entries; "transcription scope" → "transaction scope";
  "nuder Serializable" → "under Serializable"; missing VALUES arguments
  restored in `ser-yes-wide` entry; missing semicolon added after WHERE clause
  in `ser-yes-wide` code block
- Performance Basics — Reference: `</spand>` corrected to `</span>` on
  Serializable and Snapshot blocking risk pills; `pill-safe` corrected to
  `pill-warn` on Medium blocking risk row; "reliabel" → "reliable";
  space before full stop removed in `blocking_session_id` cell


## [Session 12] — 2025-06-27

### Changed
- Locks — Explainer: swapped four problem cards from `.concept-block` to `.keyword-card` to resolve indigo overload
- Locks — Interactive: replaced timeline layout with CSS grid (`lock-grid`); SQL columns now use `tl-step-code` dark navy style;
  interactive block centred with `interactive-block` wrapper; intro paragraph uses `.tab-intro` class
- Locks — Reference: inline `<code>` term references replaced with plain text to prevent dark block treatment
- Isolation Levels — Interactive: SQL line uses `tl-step-code single-line` for consistent dark navy code style
- Isolation Levels — Reference: same `tl-step-code single-line` treatment applied via `buildReference()`
- main.css: added `.lock-grid` component and child rules; added `.interactive-block` wrapper rule; added `.tab-intro` class; 
  added `.tl-step-code.single-line` modifier; scoped `height: 72px` to `.lock-grid .tl-step-code` only; 
  added `margin-bottom` to `.scenario-box`

### Fixed
- Locks — multiple typos corrected across Explainer and data array
- Locks — `<hr3>` corrected to `<h3>`; `id="bnt-next"` corrected to `id="btn-next"`; `dl-victim` class conditional fixed;
  `state: "Done"` corrected to `state: "done"`
- Isolation Levels — typos corrected in data array and Explainer HTML


## 2026-06-21 — Session 10 (Part B — ACID Properties & Transactions)

### Changed
- **ACID Properties (`acid-properties/index.html`) and Transactions
  (`transactions/index.html`) — full visual restyle, continuing the
  post-chapter style polish pass started with the home page in Part A.**
  - **Explainer tab**: `.concept-block` now uses a tinted indigo
    background with a left-border accent, replacing the flat grey box,
    to visually mark it as Explainer-tier content.
  - **New `.keyword-card` component** (Transactions page): compact,
    code-flavored definition card for the four keyword/undo-stack
    callouts (`BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`,
    `SAVE TRANSACTION`), replacing repeated `.concept-block` instances
    that were cluttering the page when used six times in a row.
  - **Interactive tab**: `.detail-card` now uses a green top-border
    accent to distinguish it from Explainer content; new
    `.stat-grid`/`.stat-card`/`.stat-label`/`.stat-value` components
    replace inline-styled balance readouts (ACID page).
  - **New `.tl-step-code` component** (Transactions page): SQL statement
    steps in the interactive walkthrough now render in the same dark
    navy/mono style as `.code-block`, visually distinct from the
    lighter Undo Stack annotations (`.tl-step`).
  - **Reference tab**: `.ref-card code` switched from a light grey
    background to the dark navy/mono `.code-block` palette, unifying
    all SQL-bearing reference snippets across the site.
  - **Footer**: now auto-hides on scroll within `<main>` (CSS
    `max-height` transition + `footer.footer-hidden` class), instead of
    permanently reserving a fixed strip at the bottom of the viewport.
    Visibility re-syncs explicitly on tab switch (`updateFooterVisibility()`
    called from `switchTab()`) to avoid stale state when switching to a
    shorter tab without a scroll event firing.
  - Token-based custom properties (`--navy-deep`, `--accent-indigo`,
    `--accent-green`, `--mono-font`) introduced in Part A now used
    consistently across both pages in place of hardcoded hex values.

### Fixed
- `.detail-card` top border not rendering — fixed border settings.
- `renderCard()` (ACID page) — `ReferenceError` on undeclared
  `savingsNeg`/`currentNeg` variables (declared as `savingsColor`/
  `currentColor`), silently breaking the entire Interactive tab.
- Step-controls spacing (Transactions interactive tab) — invalid inline
  style `margin-top: 16 px` (stray space) silently dropped by the
  browser; moved to a proper `.step-controls` rule in `main.css`.
- Margin-collapsing bug (ACID page) — `.detail-card`'s top margin
  collapsed through its empty `#acid-card` wrapper, reducing the gap
  between the property-select buttons and the result card. Fixed via
  `display: flow-root` on `#acid-card`.
- Minor copy typos across both pages 


## 2026-06-20 — Session 10

### Changed
- **Home page (`index.html`) — full visual restyle, Part A of the
  post-chapter style polish pass.** Replaces the "Who is this for" prose
  block with a query/result-set hero, and applies a cohesive token-based
  palette across header, hero, content area, sidebar and footer.
  - New CSS custom properties in `main.css`: `--navy-deep`, `--bg-page`,
    `--accent-indigo`, `--accent-amber`, `--accent-green`, `--mono-font`
    (system monospace stack — no webfont dependency).
  - **Hero**: new `.query-block` / `.result-table` components — a styled
    mock SQL query ("SELECT mental_model FROM sql-field-guide WHERE
    confusion = true;") with an animated cursor, followed by a results
    table showing live tier-completion status (Beginner: planned,
    Intermediate: Transactions & Concurrency complete, Advanced: planned).
    Replaces the original static "Who is this for" prose intro.
  - **Lead copy**: new `.lead` paragraph — plain-English summary for
    non-technical visitors (LinkedIn/search traffic), positioned directly
    under the hero, ahead of the "Work in progress" notice.
  - **Tier cards**: new `.tier-grid` / `.tier-card` components replacing
    the old `.tag`-based "Who is this for" section — three color-coded
    cards (green/indigo/red for Beginner/Intermediate/Advanced) matching
    the sidebar's new tier accent colors.
  - **Typography**: `body` font stack changed from generic `sans-serif` to
    a system-UI stack (`-apple-system, "Segoe UI", Roboto, ...`); `main
    h2`/`h3` restyled with tighter letter-spacing, navy/ink colors, and a
    hairline divider under `h3`; `main p` line-height and color refined.
  - **Header**: background deepened to `--navy-deep`; layout changed from
    `justify-content: space-between` to `flex-start` with a fixed `gap`,
    so social buttons sit near the title instead of drifting to the far
    edge on wide viewports.
  - **Sidebar**: tier buttons (`.tier-btn`) get a colored left accent bar
    (6px, tier-specific) via new `#tier-btn-beginner` /
    `#tier-btn-intermediate` / `#tier-btn-advanced` rules; `.category-label`
    recolored to match its tier instead of flat gray; `.topic-link.active`
    updated to the new navy/indigo tokens; `.topic-link.disabled` now
    italicized; `nav` background tinted toward indigo (`#f1f2f8`) to read
    as a distinct panel rather than blending into the footer.
  - **Footer**: background shifted to a warm neutral (`#faf9f7`) distinct
    from the sidebar's indigo tint; text now left-aligns to the same
    horizontal position as the main content column (`padding-left: 288px`,
    matching sidebar width + main's padding) instead of spanning the full
    viewport width; line-height tightened.

### Fixed
- Root `index.html`: shared script paths corrected from
  `../../../assets/js/...` to `assets/js/...` — the root file is not
  three folders deep, so the previous paths silently 404'd on GitHub
  Pages (consistent with the path-depth bug class noted in Session 08/09).
- `main.css`: invalid `line-height: 1.6px` on `.tier-card p` corrected to
  `line-height: 1.6` — the `px` unit collapsed line height to 1.6 pixels,
  causing wrapped paragraph lines to render stacked on top of each other.
- `main.css`: `.result-table { width: 100; }` corrected to `width: 100%`
  — missing unit made the declaration invalid.
- `index.html`: `&amp Concurrency` corrected to `&amp; Concurrency` in the
  hero result table (missing semicolon on the HTML entity).
- `index.html`: "mental mode" corrected to "mental model" in the "How to
  use this field guide" section (pre-existing typo, caught while
  restyling the surrounding content).

---

## 2026-06-20 — Session 09

### Added
- **Topic: Performance Basics** (`topics/intermediate/performance-basics/index.html`)
  Final topic in the Transactions & Concurrency sequence — completes the
  six-topic chapter (ACID Properties → Transactions → Locks → Isolation
  Levels → Concurrency Conflicts → Performance Basics).
  - Explainer tab: warehouse mental model covering index seek vs. scan,
    transaction scope, and isolation level as the three levers controlling
    query cost; four-problem framework (slow reads, read/write contention,
    long-blocking transactions, lock escalation) mapped to causes and fixes
  - Interactive tab: query cost simulator — three controls (isolation
    level, index presence, transaction scope) covering 12 combinations,
    each with estimated I/O cost, lock hold duration, colour-coded
    blocking risk badge, plain-English explanation, and a matching
    multi-line T-SQL snippet. Set in an e-commerce flash-sale scenario
    (inventory check + order insert)
  - Reference tab: `SET STATISTICS TIME/IO ON` usage and output field
    guide, `sys.dm_exec_requests` blocking query, isolation level cost
    summary table, transaction scope do/don't table, key terms glossary,
    and a dialect note on `READ_COMMITTED_SNAPSHOT` vs. MySQL/PostgreSQL
    MVCC behaviour
- `SIDEBAR_DATA` in `assets/js/nav.js`: new entry for Performance Basics
  under the Intermediate tier, replacing the placeholder slot reserved
  since Session 08.

---

## 2026-06-14 — Session 08

### Added
- `docs/aria-patterns.md`: new reference document cataloguing the five
  ARIA patterns used across the site — tab switcher, sidebar tier
  accordion, current-page sidebar link, selector/toggle button groups,
  and live regions for dynamically-updated content — with guidance for
  applying each pattern to future topic pages.
- `SIDEBAR_DATA` now supports `comingSoon` placeholder entries: a topic
  with `comingSoon: true` (and no `id`/`path`) renders as a non-clickable
  `<span class="topic-link disabled" aria-disabled="true">`, styled via
  new `.topic-link.disabled` rule in `main.css`. Used to populate a broad
  outline of upcoming content:
  - Beginner: "Queries, Filtering & Joins", "Transformations & Views"
  - Advanced: "Performance Diagnostics & Error Analytics", "Indexing &
    Query Performance", "Security, Maintenance & Integration"

### Changed
- **ARIA tabs pattern** applied to all 7 pages: `.tabs` containers get
  `role="tablist"` and `aria-label`; each `.tab-btn` gets `role="tab"`,
  a unique `id`, `aria-controls`, and `aria-selected`; each `.tab-panel`
  gets `role="tabpanel"` and `aria-labelledby`. `assets/js/tabs.js`'s
  `switchTab()` updated to toggle `aria-selected` alongside the existing
  `.active` class.
- **Sidebar accordion pattern** in `assets/js/nav.js`: tier buttons get
  `aria-expanded` and `aria-controls`; `toggleTier()` keeps
  `aria-expanded` in sync with the section's open/closed state.
- **Current-page link**: the active topic's sidebar link gets
  `aria-current="page"`, set in `buildSidebarHTML()`.
- **Interactive tab widgets** across all five topic pages:
  - ACID Properties & Isolation Levels (selector + detail card): button
    containers get `role="group"` and a descriptive `aria-label`;
    `aria-pressed` tracked on each selector button via JS. Detail card
    gets `aria-live="polite"`. ACID's guarantee toggle pill also gets
    `aria-pressed` reflecting its on/off state; toggle label text changed
    from `ON`/`OFF` to `On`/`Off` (NVDA spells out short all-caps strings
    letter-by-letter).
  - Transactions, Locks, Concurrency Conflicts (step-through timelines):
    `#step-counter` and `#step-narrative` get `aria-live="polite"` — the
    only elements whose text content changes per step. Concurrency
    Conflicts' step controls also get `role="group"` and
    `aria-label="Step navigation"`.

### Fixed
- ACID Properties reference table: "revocery" corrected to "recovery",
  "commmit" corrected to "commit".
- Reference tab silently broken on multiple pages: the Reference tab
  button's `onclick` incorrectly called `switchTab('interactive', event)`
  instead of `switchTab('reference', event)`.
- Invalid `role="tab-panel"` corrected to `role="tabpanel"` on tab panel
  elements.
- `assets/js/nav.js`: missing closing quote on a tier button's `id`
  attribute, which silently broke the sidebar accordion's `onclick`
  handler (the accordion rendered but did nothing on click).
- `assets/js/nav.js`: syntax error in `SIDEBAR_DATA`
  (`comingSoon = true` instead of `comingSoon: true`) which broke parsing
  of the entire file, causing the sidebar to disappear.
- Nested `<span class="soon-tag">` inside "coming soon" sidebar entries
  removed — screen readers exposed it as a separate object, requiring a
  hover to read "(Coming soon)". Now a single text node, read as one unit.
  Now-unused `.soon-tag` rule removed from `main.css`.

---

## 2026-06-14 — Session 07

### Added
- `assets/js/footer.js`: shared site footer, injected into a
  `<footer id="site-footer"></footer>` placeholder on every page.
  Footer links defined in a `FOOTER_LINKS` array for easy extension
  as the site grows.
- `legal.html`: new standalone page covering licence terms (CC BY-NC 4.0),
  no-warranty notice, and a privacy section (no first-party cookies,
  analytics, or data collection; note on GitHub Pages hosting). Linked
  from the shared footer.

### Changed
- `assets/js/nav.js` refactored from a single `toggleTier()` helper into a
  full data-driven sidebar:
  - `SIDEBAR_DATA` array is now the single source of truth for sidebar
    structure (tiers, categories, topic links).
  - `buildSidebarHTML()` generates the sidebar markup; `renderSidebar()`
    injects it into a `<nav id="sidebar"></nav>` placeholder.
  - Active tier auto-expands and the current page's link is highlighted
    automatically, based on a per-page `CURRENT_PAGE` declaration.
  - Sidebar link paths are prefixed with a per-page `SITE_ROOT` value,
    allowing the same data to resolve correctly at any folder depth.
- All seven HTML files (`index.html` root, five topic pages, and the new
  `legal.html`) updated to the new pattern:
  - Added `SITE_ROOT` / `CURRENT_PAGE` declarations in `<head>`.
  - Replaced static `<nav>...</nav>` sidebar markup with a single
    `<nav id="sidebar"></nav>` placeholder.
  - Replaced static/missing `<footer>` with `<footer id="site-footer"></footer>`,
    loading `footer.js`.
  - Removed the old inline active-link-marking script (now handled by
    `nav.js` via `CURRENT_PAGE`).
- Search placeholder comment block (Lunr.js implementation outline) moved
  from root `index.html`'s sidebar into `buildSidebarHTML()` in `nav.js`,
  since the sidebar markup is now generated in one place.
- "← Home" link added to `legal.html` header, matching the pattern used on
  topic pages, so the page is reachable from and returns to the site.

### Fixed
- Sidebar inconsistencies that had crept in across pages — a missing Locks
  link on the ACID Properties page, and a typo ("Prorperties") on the
  Concurrency Conflicts page — are resolved as a side effect of the sidebar
  now being generated from a single `SIDEBAR_DATA` source rather than
  duplicated per file.
- Five topic pages previously had no `<footer>` at all (missing licence
  notice and issue-tracker link); all now receive the shared footer via
  `footer.js`.

---

## 2026-06-13 — Session 06

### Added
- **Topic: Locks** (`topics/intermediate/locks/index.html`)
  Third topic in the Transactions & Concurrency sequence, sitting between
  Transactions and Isolation Levels. Includes:
  - Explainer tab: "claim ticket" mental model for shared vs exclusive
    locks, four-problem framework (lost updates, dirty reads, deadlocks,
    lock escalation) mapped onto S/X locks, the deadlock detector, and
    lock granularity, and a manufacturing work-order scenario (two
    stations updating the same Inventory table in opposite part order)
  - Interactive tab: six-step deadlock walkthrough reusing the
    deadlock-diagram and timeline components from Concurrency Conflicts —
    shows each station acquiring its first X-lock, blocking on the
    second, the deadlock cycle forming, and the victim (error 1205)
    being rolled back so the other station can commit
  - Reference tab: lock mode table (S/X/U/Intent), lock granularity table
    (row/page/table), notice on automatic lock escalation,
    sys.dm_tran_locks and sys.dm_exec_requests queries for inspecting
    locks and blocking, error 1205 reference card linking to Concurrency
    Conflicts retry pattern, key terms table

### Changed
- Sidebar updated on all five existing HTML files (`index.html` root,
  acid-properties, transactions, isolation-levels, concurrency-conflicts)
  to include Locks as the third link in the Transactions & Concurrency
  category, between Transactions and Isolation Levels.

---

## 2026-06-11 — Session 05

### Added
- **Topic: Transactions** (`topics/intermediate/transactions/index.html`)
  Second topic in the Transactions & Concurrency sequence. Includes:
  - Explainer tab: undo stack mental model, the four keywords (BEGIN
    TRANSACTION, COMMIT, ROLLBACK, SAVE TRANSACTION) mapped onto it, and
    an e-commerce order fulfilment scenario motivating savepoint usage
  - Interactive tab: two-column step-through widget showing SQL statements
    on the left and the live undo stack on the right across eight steps,
    including a partial rollback to a savepoint and final commit
  - Reference tab: three syntax pattern cards, savepoint dialect comparison
    table (Standard SQL / MySQL / PostgreSQL vs T-SQL), warning notice on
    ROLLBACK TRANSACTION with and without a savepoint name, full T-SQL
    syntax reference block, XACT_STATE() reminder card, and key terms table
- Open Graph meta tags backfilled to isolation-levels/index.html and
  concurrency-conflicts/index.html — both pages were missing them.

### Changed
- Sidebar updated on all four existing HTML files to include Transactions
  as the second link in the Transactions & Concurrency category.

### Fixed
- Removed three empty placeholder JS files from
  topics/intermediate/isolation-levels/ (explainer.js, interactive.js,
  reference.js) — orphaned from Session 01 folder structure, never
  referenced by any page.

---

## 2026-06-09 — Session 04

### Added
- Social buttons (GitHub, LinkedIn) in home page header. Ghost button
  style with inline SVG icons, pill shape, hover fill animation. Grouped
  in .header-social wrapper div.
- .social-btn and .header-social classes added to main.css under the
  Header section.
- Search placeholder comment block in sidebar nav of root index.html.
  Documents Lunr.js implementation outline and recommended activation
  threshold (10+ topics). HTML stub is commented out and ready to activate.
- assets/js/nav.js: shared toggleTier() function for sidebar navigation,
  used by all four HTML files.
- assets/js/tabs.js: shared switchTab(name, event) function for tab
  switching, used by all three topic pages.

### Changed
- All four HTML files load nav.js via <script> tag above the inline
  script block. Inline toggleTier() removed from all four files.
  Simplified version used everywhere — arrow-update logic removed.
- All three topic pages load tabs.js via <script> tag above the inline
  script block. Inline switchTab() removed from all three files.
- Tab button onclick attributes on isolation-levels and
  concurrency-conflicts updated to pass event explicitly:
  switchTab('name', event). Aligns with the pattern already on
  acid-properties.

### Fixed
- panel-explainer id and active class were missing from the Explainer
  panel in isolation-levels/index.html — panel was labelled panel-reference,
  causing duplicate ids and broken tab switching.
- btn-next never disabled on last step in concurrency-conflicts — renderStep()
  referenced btn-prev twice. Second line corrected to btn-next.
- Stray < before meta keywords tag in concurrency-conflicts/index.html.
- Beginner spelling corrected in root index.html sidebar (Begginer → Beginner).

## 2026-06-09 — Session 03

### Added
- **Topic: ACID Properties** (`topics/intermediate/acid-properties/index.html`)
  First topic in the Transactions & Concurrency category, establishing the
  conceptual foundation for Isolation Levels and Concurrency Conflicts.
  Includes:
  - Explainer tab: four properties threaded through a single bank transfer
    scenario; "How the four properties connect" section explaining that A and D
    share the transaction log, C depends on schema design, and I is the only
    property with adjustable trade-offs
  - Interactive tab: four property buttons with a toggle to switch each
    guarantee on/off; account balance display showing the concrete failure mode
    for each property (disappeared funds, negative balance, ghost read,
    data loss after commit)
  - Reference tab: four-property summary table (guarantee, failure mode, SQL
    Server mechanism) and a notice box linking forward to Isolation Levels

### Changed
- Sidebar updated on all three existing HTML files to include ACID Properties
  as the first link in the Transactions & Concurrency category:
  `index.html` (root), `isolation-levels/index.html`,
  `concurrency-conflicts/index.html`

---

## 2026-06-07 — Session 02

### Added
- **Topic: Concurrency Conflicts**
  (`topics/intermediate/concurrency-conflicts/index.html`)
  Covers deadlocks and retry logic with Explainer / Interactive / Reference
  tabs. Interactive tab includes a seven-step animated deadlock timeline.
  Reference tab includes T-SQL retry pattern for errors 1205 and 3960,
  XACT_STATE() explanation, and dialect notes for MySQL and PostgreSQL.
- Site footer on root `index.html`: educational purpose disclaimer,
  CC BY-NC 4.0 licence reference, link to repository issues page.
- SEO metadata on all three HTML files: `<meta name="description">`,
  `<meta name="keywords">`, `<link rel="canonical">`, Open Graph tags.
- `CHANGELOG.md` documenting Session 01 and Session 02. Follows Keep a
  Changelog convention.

### Changed
- All shared styles extracted from inline `<style>` blocks into
  `assets/css/main.css`. Removes inline styles from root `index.html`,
  `isolation-levels/index.html`, and `concurrency-conflicts/index.html`.
- `.error-table` renamed to `.data-table` to reflect reusable component
  intent rather than specific content.
- `switchTab()` updated on all topic pages to receive `event` as an explicit
  parameter rather than relying on the implicit global `event` object.

### Fixed
- `<hmtl>` opening tag typo in root `index.html` corrected to `<html>`.
- `font-size: #555` corrected to `font-size: 13px` in `.notice` rule
  (value was a colour code, not a size).
- `padding: 16 px 0` corrected to `padding: 16px 0` in `nav` rule
  (space inside the unit broke the declaration).
- `Begginer` corrected to `Beginner` in root `index.html` sidebar button.
- HTML comment syntax corrected throughout root `index.html`: `<! -- -->`
  replaced with valid `<!-- -->` on all instances.

---

## 2026-05-06 — Session 01

### Added
- Initial project structure: `index.html` (site shell and welcome page),
  `README.md`, `LICENSE` (CC BY-NC 4.0).
- **Topic: Isolation Levels** (`topics/intermediate/isolation-levels/index.html`)
  First topic page covering the five SQL Server isolation levels. Includes:
  - Explainer tab: four-problem framework (dirty read, non-repeatable read,
    phantom read, lost update) with plain-English bank account example
  - Interactive tab: five level buttons with dynamic detail cards showing
    SQL syntax, risk pills, real-world scenario, and use-case tags
  - Reference tab: compact cards for all five levels
- Folder placeholders: `assets/css/main.css`, `assets/js/nav.js`,
  `assets/js/tabs.js`, `topics/intermediate/isolation-levels/explainer.js`,
  `topics/intermediate/isolation-levels/interactive.js`,
  `topics/intermediate/isolation-levels/reference.js`
  (all placeholder files — not yet active).
- Repository published to GitHub under `pokrhitman/sql-field-guide`.
- GitHub repository topics added: `sql`, `sql-server`, `t-sql`, `learning`,
  `education`, `field-guide`, `interactive`, `beginner`, `intermediate`,
  `open-source`.

---

## Planned

### Planned (updated)
- First entry (style conventions carry-forward) marked complete — all six
  Intermediate chapter pages now use the unified design token system

- **Beginner tier:** sequence to be drafted working sequentially
  from true beginnings. The "coming soon" placeholders added in Session 08 act as a
  rough roadmap; liberty to reorder, split, or add topics as makes sense.

- **Table accessibility pass:** add `scope="col"`/`scope="row"` to `<th>`
  elements across all `.data-table` instances — screen readers currently
  read table cells without column-header context.

- **ARIA refactor part 2 — live-region reading order:** `aria-live`
  regions in Interactive widgets are announced out of document order
  (e.g. a toggle's description before the heading above it). Addressing
  this is a design decision (restructuring vs. shifting focus with
  `tabindex="-1"`), better suited to its own session.

