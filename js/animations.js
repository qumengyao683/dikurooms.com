/* =============================================================================
   animations.js — Cadillac-class motion
     - IntersectionObserver reveals (.reveal, .reveal-stagger)
     - Hero parallax on scroll (transform-only)
     - Marquee duplication (safe even when items exist twice)
     - Magnetic CTA (pointer:fine only, max offset 6px)
     - Hero word-split kinetic typography
     - Particle rise (for supply-chain sections)
   Honors prefers-reduced-motion.
   ============================================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointerFine = window.matchMedia('(pointer: fine)').matches;

  /* ------------------------------------------------------------------ reveal */
  function initReveals() {
    const items = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!items.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    items.forEach((el) => io.observe(el));
  }

  /* --------------------------------------------------------------- parallax */
  function initParallax() {
    if (prefersReduced) return;
    const els = document.querySelectorAll('[data-parallax]');
    if (!els.length) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const offset = (center - vh / 2) / vh; // -0.5 .. +0.5
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
          const y = -offset * speed * 100;
          el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.15)`;
        });
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------------------- marquee */
  function initMarquee() {
    const tracks = document.querySelectorAll('.marquee__track');
    if (!tracks.length) return;
    tracks.forEach((track) => {
      if (track.dataset.duplicated === '1') return;
      // duplicate content once so the loop is seamless
      const clone = track.innerHTML;
      track.insertAdjacentHTML('beforeend', clone);
      track.dataset.duplicated = '1';
    });
  }

  /* ------------------------------------------------------ magnetic buttons */
  function initMagnetic() {
    if (!pointerFine || prefersReduced) return;
    const ctas = document.querySelectorAll('[data-magnetic]');
    ctas.forEach((wrap) => {
      const inner = wrap.querySelector('.btn, .app-store, .pill') || wrap.firstElementChild;
      if (!inner) return;
      const radius = parseInt(wrap.getAttribute('data-magnetic'), 10) || 30;

      function onMove(e) {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(x, y);
        const max = Math.max(rect.width, rect.height);
        if (dist > max + radius) return;
        const clamp = Math.min(1, dist / max);
        const power = 1 - clamp; // 0..1, strongest at center
        const tx = (x / max) * 6 * power;
        const ty = (y / max) * 6 * power;
        inner.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
      }
      function onLeave() {
        inner.style.transform = '';
      }
      wrap.addEventListener('mousemove', onMove);
      wrap.addEventListener('mouseleave', onLeave);
    });
  }

  /* --------------------------------------------- hero word split (kinetic) */
  function initHeroSplit() {
    if (prefersReduced) return;
    const titles = document.querySelectorAll('[data-split]');
    titles.forEach((el) => {
      const text = el.textContent.trim();
      el.textContent = '';
      const words = text.split(/\s+/);
      const frag = document.createDocumentFragment();
      words.forEach((w) => {
        const word = document.createElement('span');
        word.className = 'word';
        const inner = document.createElement('span');
        inner.className = 'inner';
        inner.textContent = w + ' ';
        word.appendChild(inner);
        frag.appendChild(word);
      });
      el.appendChild(frag);

      // trigger after a tiny delay so transitions run
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add('is-in'), 60);
      });
    });
  }

  /* --------------------------------------------------- particle-rise bg */
  function initParticles() {
    if (prefersReduced) return;
    const stages = document.querySelectorAll('[data-particles]');
    stages.forEach((stage) => {
      if (stage.querySelector('.particles')) return;
      const wrap = document.createElement('div');
      wrap.className = 'particles';
      wrap.setAttribute('aria-hidden', 'true');
      const count = parseInt(stage.getAttribute('data-particles'), 10) || 28;
      const palette = ['var(--gold)', 'var(--gold-soft)', 'rgba(244,244,241,0.5)', 'rgba(30,95,116,0.4)'];
      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.style.left = (Math.random() * 100) + '%';
        p.style.animationDelay = (Math.random() * 14) + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        p.style.background = palette[i % palette.length];
        p.style.width = (3 + Math.random() * 5) + 'px';
        p.style.height = p.style.width;
        wrap.appendChild(p);
      }
      stage.appendChild(wrap);
    });
  }

  /* ---------------------------------------------------- image-sequence hover */
  function initImageSequence() {
    // reserved for service card image-sequence per design tokens
    // (no static assets provided for sequence frames, so this stays a no-op.)
  }

  /* ----------------------------------------------------------------- boot */
  function boot() {
    initHeroSplit();
    initReveals();
    initParallax();
    initMarquee();
    initMagnetic();
    initParticles();
    initImageSequence();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Also re-run reveals on partials:ready in case content was injected.
  document.addEventListener('partials:ready', () => {
    initReveals();
    initParallax();
    initMagnetic();
  });
})();