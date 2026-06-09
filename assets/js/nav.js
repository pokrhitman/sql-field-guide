/* ===================================================
SQL Field Guide - nav.js
Shared sidebar navigation logic used by all pages.
====================================================== */

function toggleTier(id) {
    const section = document.getElementById('tier-' + id);
    section.classList.toggle('open');
}