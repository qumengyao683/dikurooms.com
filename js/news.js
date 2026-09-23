/* =============================================================================
   news.js — JSON-driven news list rendering.
   Each card uses a known hero image from images/sections/ if available.
   ============================================================================= */
(function () {
  'use strict';

  /** @type {{id:string,title:string,excerpt:string,category:'Product'|'Trade'|'Compliance',date:string,image:string}[]} */
  const NEWS = [
    {
      id: 'mobile-app-q3',
      title: 'Q3 release: faster supplier consignment workflows',
      excerpt: 'Our mobile management app now supports consignment tracking, multi-currency invoicing, and a redesigned dashboard for inventory teams.',
      category: 'Product',
      date: '2026-09-12',
      image: 'images/sections/mobile-app.png'
    },
    {
      id: 'eu-packaging-update',
      title: 'New guidance on EU packaging compliance for 2026',
      excerpt: 'A practical walk-through of the updated EU Packaging and Packaging Waste Regulation, with notes on how our wholesale buyers can prepare.',
      category: 'Compliance',
      date: '2026-08-28',
      image: 'images/sections/electronics-showcase.png'
    },
    {
      id: 'logistics-latam',
      title: 'Expanding LATAM logistics corridors through Q4',
      excerpt: 'We have qualified new freight partners across Brazil, Mexico, and Colombia — improving lead times on hardware fittings and home goods.',
      category: 'Trade',
      date: '2026-08-14',
      image: 'images/sections/supply-chain.png'
    },
    {
      id: 'consulting-playbook',
      title: 'Inside our supply chain consulting playbook',
      excerpt: 'How our Hong Kong team helps European and American brands qualify factories, manage currency risk, and shorten time-to-shelf.',
      category: 'Trade',
      date: '2026-07-22',
      image: 'images/sections/consulting.png'
    },
    {
      id: 'app-store-policy',
      title: 'Updated privacy nutrition labels across both app stores',
      excerpt: 'Our Google Play Data safety form and Apple App Privacy questions have been refreshed to reflect the latest SDK inventory.',
      category: 'Compliance',
      date: '2026-07-04',
      image: 'images/sections/news-2.png'
    },
    {
      id: 'electronics-line-2026',
      title: '2026 electronics catalogue is live',
      excerpt: 'A new wave of consumer electronics and accessories is now available for wholesale and retail buyers across the EU, UK, US, and APAC.',
      category: 'Product',
      date: '2026-06-18',
      image: 'images/sections/news-1.png'
    }
  ];

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' });
    } catch (_) { return iso; }
  }

  function categoryClass(cat) {
    return 'pill pill--gold';
  }

  function renderCards(target, count) {
    const grid = typeof target === 'string' ? document.querySelector(target) : target;
    if (!grid) return;
    const list = (typeof count === 'number') ? NEWS.slice(0, count) : NEWS;

    if (!list.length) {
      grid.innerHTML = `
        <div class="news-empty" style="grid-column: 1 / -1;">
          <img src="images/animals/cat.svg" alt="" aria-hidden="true" />
          <h3>No posts here — check back soon.</h3>
          <p>We will share updates as they happen.</p>
        </div>`;
      return;
    }

    grid.innerHTML = list.map((n) => `
      <article class="news-card reveal">
        <div class="news-card__media">
          <img src="${n.image}" alt="${n.title}" loading="lazy" decoding="async" />
        </div>
        <div class="news-card__body">
          <div class="news-card__meta">
            <span class="${categoryClass(n.category)}">${n.category}</span>
            <span>${formatDate(n.date)}</span>
          </div>
          <h3 class="news-card__title">${n.title}</h3>
          <p class="news-card__excerpt">${n.excerpt}</p>
          <a class="btn btn--ghost news-card__link" href="/contact.html" aria-label="Discuss: ${n.title}">
            Discuss with us
          </a>
        </div>
      </article>`).join('');

    // re-arm reveals for newly-inserted nodes
    document.dispatchEvent(new CustomEvent('partials:ready'));
  }

  function boot() {
    // home page strip
    renderCards('#news-strip', 3);
    // full news page
    renderCards('#news-grid');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // expose for late re-render
  window.DIKUROOMS_NEWS = { NEWS, renderCards };
})();