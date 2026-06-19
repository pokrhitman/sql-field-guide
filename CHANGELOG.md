# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions.

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

- **Session 09 — Performance Basics:** closes out the Transactions &
  Concurrency chapter as a complete six-topic sequence (ACID Properties →
  Transactions → Locks → Isolation Levels → Concurrency Conflicts →
  Performance Basics).

- **Session 10 — Beginner tier:** sequence to be drafted working sequentially
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

