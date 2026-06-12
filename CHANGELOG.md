# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions.

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

- **New topic — DML Operations:** INSERT, UPDATE, DELETE — first candidate for
  the Beginner tier.
- **Accessibility refactor:** add aria-label attributes to interactive
  controls and navigation elements across all pages. Deferred to a
  dedicated session.
- **Contribution standard document:** folder structure, JavaScript data array
  format, tab content requirements, tone guide. Prerequisite before recruiting
  collaborators.

