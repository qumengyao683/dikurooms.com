/* =============================================================================
   contact.js — client-side validation + mailto fallback (no backend per PRD §10).
   On submit, opens user's mail client pre-filled with the inquiry details,
   addressed to support@dikurooms.com, then shows an inline success state.
   ============================================================================= */
(function () {
  'use strict';

  const SUPPORT = 'support@dikurooms.com';

  /** RFC 5322-lite email check */
  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim());
  }

  function setError(field, msg) {
    const wrap = field.closest('.form__field');
    if (!wrap) return;
    if (msg) {
      wrap.classList.add('is-invalid');
      const err = wrap.querySelector('.form__error');
      if (err) err.textContent = msg;
    } else {
      wrap.classList.remove('is-invalid');
    }
  }

  function validate(form) {
    let ok = true;
    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach((f) => {
      const val = f.value.trim();
      const label = (f.getAttribute('data-label') || f.name || 'Field');
      if (f.required && !val) {
        setError(f, `${label} is required`);
        ok = false;
        return;
      }
      if (f.type === 'email' && val && !isEmail(val)) {
        setError(f, `Please enter a valid email address`);
        ok = false;
        return;
      }
      if (f.tagName === 'TEXTAREA' && f.required && val.length < 10) {
        setError(f, `${label} should be at least 10 characters`);
        ok = false;
        return;
      }
      setError(f, '');
    });
    return ok;
  }

  function bindLiveClear(form) {
    form.addEventListener('input', (e) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      const wrap = t.closest('.form__field');
      if (wrap && wrap.classList.contains('is-invalid')) {
        wrap.classList.remove('is-invalid');
      }
    }, { passive: true });
  }

  function buildMailto(form) {
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const company = (data.get('company') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const topic = (data.get('topic') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = `[${topic || 'Inquiry'}] ${company || name || 'Website contact'}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      '',
      'Message:',
      message
    ].join('\n');

    return `mailto:${SUPPORT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function setStatus(form, type, msg) {
    const box = form.querySelector('.form__status');
    if (!box) return;
    box.classList.remove('is-success', 'is-error');
    box.classList.add('is-' + type);
    box.textContent = msg;
  }

  function init() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    bindLiveClear(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate(form)) {
        setStatus(form, 'error', 'Please fix the highlighted fields and try again.');
        return;
      }
      const mailto = buildMailto(form);
      // open mail client
      try {
        window.location.href = mailto;
      } catch (_) {
        // ignore — user can copy address manually
      }
      setStatus(
        form,
        'success',
        'Thanks — your mail client should be opening with your message ready to send to support@dikurooms.com. If it did not open, please email us directly.'
      );
      form.reset();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();