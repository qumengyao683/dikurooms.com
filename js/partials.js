/* =============================================================================
   partials.js — injects shared header & footer; active-link highlight;
   mobile nav toggle; smooth scroll on in-page anchors; scroll progress.
   ============================================================================= */
(function () {
  'use strict';

  // site identity
  const SITE = {
    name: 'DIKUROOMS',
    legal: 'DIKUROOMS Trading Co., Limited',
    url: 'https://dikurooms.com',
    support: 'support@dikurooms.com',
    accounts: 'qumengyao@dikurooms.com',
    office: 'Rm F(B22) 2/F FREDER CTR 3 MOK CHEONG ST, To Kwa Wan, HK',
    year: new Date().getFullYear(),
    logoMono: 'images/logo/dikurooms-logo-mono.svg',
    logoColor: 'images/logo/dikurooms-logo.svg'
  };

  const NAV_LINKS = [
    { href: '/',         label: 'Home',     match: ['/'] },
    { href: '/services.html', label: 'Services', match: ['/services.html'] },
    { href: '/culture.html',  label: 'Culture',  match: ['/culture.html'] },
    { href: '/news.html',     label: 'News',     match: ['/news.html'] },
    { href: '/contact.html',  label: 'Contact',  match: ['/contact.html'] }
  ];

  /** Identify current page key by path */
  function currentKey(pathname) {
    if (!pathname || pathname === '/' || pathname.endsWith('/index.html')) return '/';
    const clean = pathname.replace(/^.*\//, '/');
    return clean;
  }

  /** Render header markup */
  function renderHeader(isInk) {
    const path = currentKey(location.pathname);
    const logo = isInk ? SITE.logoMono : SITE.logoColor;
    const links = NAV_LINKS.map((l) => {
      const active = l.match.includes(path);
      return `<a class="nav__link${active ? ' is-active' : ''}" href="${l.href}">${l.label}</a>`;
    }).join('\n          ');

    return `
<header class="site-header${isInk ? ' site-header--ink' : ''}" data-injected="header">
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="container">
    <nav class="nav" aria-label="Primary">
      <a class="nav__brand" href="/" aria-label="${SITE.name} home">
        <img src="${logo}" alt="" width="32" height="32" />
        <span>${SITE.name}</span>
      </a>
      <div class="nav__links" id="nav-links" role="menu">
        ${links}
        <a class="btn btn--primary nav__cta" href="/contact.html">Get in touch</a>
      </div>
      <button class="nav__toggle" type="button" aria-controls="nav-links" aria-expanded="false" aria-label="Toggle navigation">
        <img src="images/icons/menu.svg" alt="" width="24" height="24" />
      </button>
    </nav>
  </div>
</header>`;
  }

  /** Render footer markup */
  function renderFooter() {
    return `
<footer class="site-footer" data-injected="footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <img src="images/logo/dikurooms-logo-mono.svg" alt="" width="56" height="56" />
        <h3>${SITE.legal}</h3>
        <p>${SITE.office}</p>
        <p><a href="mailto:${SITE.support}">${SITE.support}</a></p>
      </div>
      <div class="site-footer__col">
        <h4>Explore</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/culture.html">Culture</a></li>
          <li><a href="/news.html">News</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="site-footer__col">
        <h4>Mobile apps</h4>
        <ul>
          <li><a href="https://play.google.com/store/apps/dev?id=dikurooms" rel="noopener" target="_blank">Google Play</a></li>
          <li><a href="https://apps.apple.com/app/id-dikurooms" rel="noopener" target="_blank">Apple App Store</a></li>
          <li><a href="/services.html#mobile-apps">App overview</a></li>
        </ul>
      </div>
      <div class="site-footer__col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms of Service</a></li>
          <li><a href="/sitemap.xml">Sitemap</a></li>
          <li><a href="/robots.txt">Robots</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <span>© ${SITE.year} ${SITE.legal}. All rights reserved.</span>
      <div class="site-footer__social" aria-label="Social">
        <a href="https://github.com/qumengyao683/dikurooms.com.git" aria-label="GitHub" rel="noopener" target="_blank">
          <img src="images/icons/github.svg" alt="" width="16" height="16" />
        </a>
        <a href="https://www.linkedin.com/company/dikurooms" aria-label="LinkedIn" rel="noopener" target="_blank">
          <img src="images/icons/linkedin.svg" alt="" width="16" height="16" />
        </a>
        <a href="https://x.com/dikurooms" aria-label="Twitter / X" rel="noopener" target="_blank">
          <img src="images/icons/twitter-x.svg" alt="" width="16" height="16" />
        </a>
      </div>
    </div>
  </div>
</footer>`;
  }

  /** Inject header/footer into page slots */
  function injectPartials() {
    const headerSlot = document.querySelector('[data-partial="header"]');
    const footerSlot = document.querySelector('[data-partial="footer"]');

    // Decide ink header on dark hero pages by looking at body[data-header="ink"]
    const wantInk = document.body.getAttribute('data-header') === 'ink';

    if (headerSlot) {
      headerSlot.outerHTML = renderHeader(wantInk);
    }
    if (footerSlot) {
      footerSlot.outerHTML = renderFooter();
    }
  }

  /** Mobile nav toggle */
  function bindNavToggle() {
    const toggle = document.querySelector('.nav__toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      const icon = toggle.querySelector('img');
      if (icon) icon.src = open ? 'images/icons/close.svg' : 'images/icons/menu.svg';
    });

    // close on link click
    links.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        const icon = toggle.querySelector('img');
        if (icon) icon.src = 'images/icons/menu.svg';
      }
    });
  }

  /** Smooth scroll for in-page anchors */
  function bindSmoothScroll() {
    document.addEventListener('click', (e) => {
      const t = e.target;
      if (!(t instanceof HTMLAnchorElement)) return;
      const href = t.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /** Scroll progress bar (creates element if absent) */
  function bindScrollProgress() {
    if (document.querySelector('.scroll-progress')) return;
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const pct = (h.scrollTop / Math.max(1, (h.scrollHeight - h.clientHeight))) * 100;
        bar.style.width = pct + '%';
        raf = null;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /** Boot */
  function boot() {
    injectPartials();
    bindNavToggle();
    bindSmoothScroll();
    bindScrollProgress();
    document.documentElement.classList.add('is-booted');
    document.dispatchEvent(new CustomEvent('partials:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();