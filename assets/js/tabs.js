/* ===================================================
SQL Field Guide - tabs.js
Shared tab switcher logic used by all topic pages.
====================================================== */

function switchTab(name, event) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
    });
    document.getElementById('panel-' + name).classList.add('active');
    event.target.classList.add('active');
    event.target.setAttribute('aria-selected', 'true');
}
