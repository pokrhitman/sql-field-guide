# Changelog

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Dates are in YYYY-MM format. This project does not yet use version numbers —
entries are organised by session date.

---

## 2026-06-07

### Added
- **Topic: Concurrency Conflicts** (`topics/intermediate/concurrency-conflicts/index.html`)
  Covers deadlocks and retry logic for SQL Server. Includes:
  - Explainer tab: deadlock mental model, victim selection, how to reduce
    deadlocks, and Snapshot update conflicts
  - Interactive tab: seven-step animated timeline walking through a live
    deadlock from start to SQL Server resolution
  - Reference tab: error number table (1205 / 3960), three deadlock-reduction
    pattern cards, full T-SQL retry pattern with syntax highlighting, and a
    MySQL / PostgreSQL dialect note
- **Shared stylesheet** (`assets/css/main.css`)
  All presentation rules extracted from inline `<style>` blocks into a single
  shared file. Covers reset, layout shell, header, sidebar, navigation, main
  content area, tabs, concept blocks, interactive widgets, pills, scenario
  boxes, reference cards, deadlock diagram, step-through timeline, code block,
  data table, and site footer.
- **Site footer** on root `index.html`
  Educational purpose notice, best-effort accuracy disclaimer, CC BY-NC 4.0
  licence reference, and link to the repository issues page for questions and
  corrections.
- **SEO metadata** on root `index.html` and both topic pages
  `<meta name="description">`, `<meta name="keywords">`, Open Graph tags,
  and `<link rel="canonical">` added to all three HTML files.
- **Concurrency Conflicts** added to the sidebar on all pages.

### Changed
- Root `index.html` refactored: inline `<style>` block replaced with
  `<link rel="stylesheet" href="assets/css/main.css">`.
- `topics/intermediate/isolation-levels/index.html` refactored: inline
  `<style>` block replaced with shared CSS link.
- `topics/intermediate/concurrency-conflicts/index.html` refactored on
  creation: all styles moved to `main.css`, local `<style>` block removed.
- `switchTab()` updated on all topic pages to receive `event` as an explicit
  parameter rather than relying on the implicit global `event` object.
- `.error-table` renamed to `.data-table` in both `main.css` and the
  Concurrency Conflicts HTML for a more reusable, component-level name.

### Fixed
- `<hmtl>` typo corrected to `<html>` in root `index.html`.
- `font-size: #555` corrected to `font-size: 13px` in `.notice` rule
  (value was a colour code, not a size).
- `padding: 16 px 0` corrected to `padding: 16px 0` in `nav` rule
  (space inside the unit broke the declaration).
- `Begginer` corrected to `Beginner` in root `index.html` sidebar button.
- HTML comment syntax corrected throughout root `index.html`: `<! -- -->` 
  replaced with valid `<!-- -->` on all instances.

---

## 2026-06-06 — Session 01

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

- Enable GitHub Pages — site to go live at
  `https://pokrhitman.github.io/sql-field-guide/`
- Extract shared JavaScript (`toggleTier`, `switchTab`) from topic HTML files
  into `assets/js/nav.js` and `assets/js/tabs.js`
- Additional Intermediate topics from current Coursera module:
  - ACID Properties
  - DML Operations (INSERT / UPDATE / DELETE)
- Beginner tier: first topics to be scoped
