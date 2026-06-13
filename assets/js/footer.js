/* ==============================================================
SQL Field Guide - footer.js
Shared site footer. Used by all pages..

Each page must declare, BEFOR this script is loaded:
    const SITE_ROOT = "...";    // "" root index.html,
                                // "../../../" for topic pages
=============================================================== */

// ---------------------------------------------------------------
// Footer link list - add new links here as the site grows
// (e.g. About, Contributing, Roadmap)
// --------------------------------------------------------------
const FOOTER_LINKS = [
    { label: "Legal & Licence", path: "legal.html", external: false },
    { label: "Open an issue on GitHub", path: "https://github.com/pokrhitman/sql-field-guide/issues", external: true }
];

function buildFooterHTML() {
    const linksHTML = FOOTER_LINKS.map(link => {
        const href = link.external ? link.path : SITE_ROOT + link.path;
        const target = link.external ? ' target="_blank"' : "";
        return `<a href="${href}"${target}>${link.label}</a>`;
    }).join("\n     &nbsp;&middot;&nbsp;\n      ");

    return `
    <p>
        This guide is provided for <strong>educational purposes only</strong>.
        All content is offered on a best-effort basis. No warranty is made as 
        to the accuracy or completeness of any topic, code example or 
        explanation. Use at your own discretion.
    </p>
    <p style="margin-top: 8px";>
        Licensed under <strong>CC BY-NC 4.0</strong>. Free to share and adapt 
        for non-commercial purposes with attribution. Commercial use requires
        a separate written agreement.
        &nbsp;&middot;&nbsp;
        ${linksHTML}
    </p>`;  
}

function renderFooter() {
    const container = document.getElementById("site-footer");
    if (!container) return;
    container.innerHTML = buildFooterHTML();
}

document.addEventListener("DOMContentLoaded", renderFooter);