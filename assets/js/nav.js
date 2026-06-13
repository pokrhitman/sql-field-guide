/* ===================================================
SQL Field Guide - nav.js
Shared sidebar navigation: data, rendering and the 
tier toggle behavior used by all pages.

Each page must declare, BEFOR this script is loaded:
    const SITE_ROOT = "...";    // "" root index.html,
                                // "../../../" for topic pages
    const CURRENT_PAGE = "..."; // matches a SIDEBAR_DATA entry's
                                // "id", or "home" for root index.html
====================================================== */

// ----------------------------------------------------------
// 1. Sidebar content (the only part that changes when
// a new topic is added)
// ----------------------------------------------------------
const SIDEBAR_DATA = [
    {
        tier: "beginner",
        label: "Beginner",
        topics: [] // empty -> "Coming soon" placeholder is shown
    },
    {
        tier: "intermediate",
        label: "Intermediate",
        category: "Transactions & Concurrency",
        topics: [
            {id: "acid-properties",         label: "ACID Properties",       path: "topics/intermediate/acid-properties/index.html" },
            {id: "transactions",            label: "Transactions",          path: "topics/intermediate/transactions/index.html" },
            {id: "locks",                   label: "Locks",                 path: "topics/intermediate/locks/index.html" },
            {id: "isolation-levels",        label: "Isolation Levels",      path: "topics/intermediate/isolation-levels/index.html" },
            {id: "concurrency-conflicts",   label: "Concurrency Conflicts", path: "topics/intermediate/concurrency-conflicts/index.html" },
        ]
    },
    {
        tier: "advanced",
        label: "Advanced",
        topics: []
    }
];

// --------------------------------------------
// 2. Build the sidebar HTML from SIDEBAR_DATA
// --------------------------------------------
function buildSidebarHTML() {
    let html = "";

    /* FUTURE: Keyword search
    Uncomment and implement when the site has enought topics
    to make search genuinely useful (suggested treshold: 10+ topics).

    Recommended library: Lunr.js (lunrjs.com) - lightweight,
    no server required, works with pre-built JSON index.

    Implementation outline:
    1. Build a search index JSON file (topics array with name,
       tier, keywords and href for each topic page).
    2. Load lunr.min.js before this script block.
    3. On input, query the index and show matching topic links
       in a dropdown below the input field.
    4. Place the index JSON at assets/data/search-index.json
       and generate it whenever a new topic is added.

    <div class="nav-search">
        <input type="search" id="nav-search-input"
            placeholder="Search topics..." aria-label="Search topics" />
    </div> */

    SIDEBAR_DATA.forEach(tier => {
        /* A tier is "active" if the current page belongs to it
           used to auto-expand the section on load. */
        const isActiveTier = tier.topics.some(t => t.id === CURRENT_PAGE);
        const arrow = isActiveTier ? "&#9660;" : "&#9654;";
        const openClass = isActiveTier ? " open" : "";

        html += `<button class="tier-btn" onclick="toggleTier('${tier.tier}')">${arrow} ${tier.label}</button>\n`;
        html += `<div class="tier-section${openClass}" id="tier-${tier.tier}">\n`;

        if (tier.topics.length === 0) {
            html += `   <div class="category-label">Coming soon</div>\n`;
        } else {
            if (tier.category) {
                html += `   <div class="category-label">${tier.category}</div>\n`;
            }
            tier.topics.forEach(topic => {
                const activeClass = topic.id === CURRENT_PAGE ? " active" : "";
                html += `   <a class="topic-link${activeClass}" href="${SITE_ROOT}${topic.path}">${topic.label}</a>\n`;
            });
        }

        html += `</div>\n`;
    });

    return html;
}

//---------------------------------------------------------
// 3. Inject into the page
// --------------------------------------------------------
function renderSidebar() {
    const container = document.getElementById("sidebar");
    if (!container) return; // page has not sidebar
    container.innerHTML = buildSidebarHTML();
}

// --------------------------------------------------------
// 4. Tier expand/collapse (unchanged behavior)
// --------------------------------------------------------
function toggleTier(id) {
    const section = document.getElementById('tier-' + id);
    section.classList.toggle('open');
}

// Run once the DOM is ready
document.addEventListener("DOMContentLoaded", renderSidebar);