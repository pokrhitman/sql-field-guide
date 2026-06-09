# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions.

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

- **JS refactor:** extract `toggleTier()` and `switchTab()` from all topic
  pages into `assets/js/nav.js` and `assets/js/tabs.js`. Deferred until the
  fourth topic page is added, at which point the refactor will be done first
  before any new content lands.
- **New topic — Transactions:** BEGIN, COMMIT, ROLLBACK, SAVEPOINT — the undo
  stack mental model. Next in the Transactions & Concurrency sequence after
  ACID Properties.
- **New topic — Locks:** shared vs exclusive locks, lock granularity. Provides
  the mechanical foundation that makes Isolation Levels fully readable.
- **New topic — DML Operations:** INSERT, UPDATE, DELETE — first candidate for
  the Beginner tier.
- **Contribution standard document:** folder structure, JavaScript data array
  format, tab content requirements, tone guide. Prerequisite before recruiting
  collaborators.
- **README update:** add live GitHub Pages URL and update current content
  listing to include ACID Properties.
