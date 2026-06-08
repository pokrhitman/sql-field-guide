# SQL Field Guide

A community-built reference for SQL learners who want clearer mental models
for the concepts that coursework and video tutorials tend to move past too
quickly. This guide does not try to replace paid SQL courses — it fills the
gaps they leave behind.

**Live site:** https://pokrhitman.github.io/sql-field-guide/

---

## Who this is for

| Level | Audience |
|---|---|
| **Beginner** | Students in a first SQL course, no prior database experience assumed |
| **Intermediate** | Learners who write SQL confidently but want to understand what the engine is doing — suitable for coursework, college studies, and early professional work |
| **Advanced** | Practitioners using SQL professionally who want to go deeper into performance, concurrency, and optimisation |

These tiers are a rough guide, not a strict gate. Each topic page includes
a short "before this topic" note listing what you should already know.

---

## What each topic page contains

Every topic is organised into three sections:

- **Explainer** — the mental model and plain-English reasoning behind the concept
- **Interactive** — a hands-on widget to explore the concept yourself
- **Reference** — a compact cheat sheet to return to after you understand the topic

---

## Current content

### Intermediate — Transactions & Concurrency
- [ACID Properties](topics/intermediate/acid-properties/index.html) — the four guarantees every transaction must satisfy, and why Isolation is the one with trade-offs
- [Isolation Levels](topics/intermediate/isolation-levels/index.html) — the five SQL Server isolation levels, what each protects against, and when to use each one
- [Concurrency Conflicts](topics/intermediate/concurrency-conflicts/index.html) — deadlocks and Snapshot update conflicts, with a step-through animated timeline and a T-SQL retry pattern

More topics are in development. See the [open issues](https://github.com/pokrhitman/sql-field-guide/issues) for what is planned
and where contributions are most needed.

---

## Technical notes

- **Database dialect:** Microsoft SQL Server and T-SQL unless otherwise noted.
  Where behaviour differs significantly from MySQL or PostgreSQL, a note is
  included on the topic page.
- **No dependencies:** the site is plain HTML, CSS, and JavaScript. No
  framework, no build step, no package manager required.
- **Hosted on:** GitHub Pages at https://pokrhitman.github.io/sql-field-guide/

---

## How to run locally

1. Clone the repository:
   ```
   git clone https://github.com/pokrhitman/sql-field-guide.git
   ```
2. Open the project folder in VS Code.
3. Install the **Live Server** extension by Ritwick Dey.
4. Right-click `index.html` in the file explorer and choose
   **Open with Live Server**.

The site opens in your browser at `http://127.0.0.1:5500`. No server,
no installation, no terminal commands beyond the initial clone.

---

## How to contribute

Contributions are welcome. The most useful contributions are new topic pages
that follow the Explainer / Interactive / Reference structure.

**To suggest a topic:**
Open an issue with the label `topic request` and describe the concept and
which tier it belongs in.

**To contribute a topic page:**
1. Fork the repository
2. Create a folder under the appropriate tier:
   `topics/beginner/your-topic/` or `topics/intermediate/your-topic/`
3. Copy the structure of an existing topic page as your starting point
4. Open a pull request with a short description of what the page covers
   and what gap it fills

Please read the [licence](#licence) section before contributing. By
submitting a pull request you agree that your contribution is made under
the same CC BY-NC 4.0 terms as the rest of the project.

---

## Licence

This project is licensed under the
[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
licence.

You are free to share and adapt the material for non-commercial purposes,
provided you give appropriate credit to the SQL Field Guide project and
link back to this repository.

**Commercial use** (including use in paid courses or commercial training
materials) requires a separate written agreement. Open an issue to start
that conversation. Attribution is required in all cases.

---

## Attribution

If you use or adapt material from this guide, please credit it as:

> SQL Field Guide — https://github.com/pokrhitman/sql-field-guide
