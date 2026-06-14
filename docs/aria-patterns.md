# ARIA Patterns — SQL Field Guide

A reference for the accessibility patterns used across the site. When adding
a new topic page, check this doc for the patterns that apply rather than
inventing new markup.

---

## 1. Tab switcher (Explainer / Interactive / Reference)

**Where:** the three-tab structure at the top of every topic page.

**Pattern:** ARIA "tabs" pattern.

- Container (`.tabs`) gets `role="tablist"` and a descriptive `aria-label`
  (e.g. `aria-label="Topic sections"`).
- Each `.tab-btn` gets `role="tab"`, a unique `id` (e.g. `tab-explainer`),
  `aria-controls` pointing at its panel's `id`, and `aria-selected`
  (`"true"` for the active tab, `"false"` for the rest).
- Each `.tab-panel` gets `role="tabpanel"` and `aria-labelledby` pointing
  back at its tab's `id`.
- `switchTab()` in `tabs.js` must update `aria-selected` on every tab
  button alongside the existing `.active` class toggling.

**Deferred:** the full ARIA tabs pattern also expects arrow-key navigation
between tabs (roving `tabindex`, only the active tab focusable via Tab key).
We are not implementing that yet — the buttons remain normal, individually
focusable buttons. This is a "nice to have, revisit later" item. Leaving it
out does not break anything; it just means the experience isn't the textbook
ideal for keyboard/screen-reader users yet.

---

## 2. Sidebar tier toggle (accordion / disclosure)

**Where:** the Beginner / Intermediate / Advanced tier buttons in the
sidebar (`.tier-btn` + `.tier-section`), built by `nav.js`.

**Pattern:** ARIA "disclosure" pattern.

- Each `.tier-btn` gets `aria-expanded` (`"true"` if the section starts
  open, `"false"` otherwise) and `aria-controls` pointing at its
  `.tier-section`'s `id`.
- `toggleTier()` must flip `aria-expanded` on the button to match the
  `open` class on the section.

---

## 3. Current-page sidebar link

**Where:** the active topic's link in the sidebar, built by `nav.js`.

**Pattern:** `aria-current="page"` added alongside the existing `.active`
class, on the link matching `CURRENT_PAGE`.

---

## 4. Per-topic selector / toggle button groups

**Where:** Interactive-tab widgets where the user picks one option from a
set (e.g. ACID's A / C / I / D property buttons), or flips a single on/off
state (e.g. the "Turn guarantee ON/OFF" pill).

**Pattern:**

- A group of buttons where exactly one is "selected" at a time gets
  `role="group"` on the container with a descriptive `aria-label`
  (e.g. `aria-label="Select an ACID property"`), and each button gets
  `aria-pressed` reflecting whether it's the currently selected one.
- A single on/off toggle button gets `aria-pressed` reflecting its
  current state — this is exactly what `aria-pressed` is for.

**Note:** this is bespoke per page — apply the pattern to whatever
selector/toggle elements that page's Interactive widget actually has.

---

## 5. Live regions for dynamically-updated content

**Where:** any container whose content is rewritten by JavaScript in
response to a user action (e.g. ACID's `#acid-card`, or equivalent detail
panels on other topic pages).

**Pattern:** add `aria-live="polite"` to the container once, in the static
HTML. No JS changes needed — the browser announces content changes to
screen readers automatically whenever `innerHTML` is replaced.

---

## Applying these patterns to a new topic page

1. Tab markup (pattern 1) — copy the tab/tabpanel structure from an
   existing topic page; it's identical across all pages.
2. Sidebar entries (patterns 2 & 3) — handled automatically by `nav.js`,
   nothing to do per-page.
3. Interactive widget (patterns 4 & 5) — assess what selector/toggle/
   live-update elements the new widget has and apply 4/5 accordingly.
