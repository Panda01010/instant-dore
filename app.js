/* =====================================================
   MAISON ÉLITE — Shared Application JavaScript
   Nav scroll, mobile menu, scroll animations, form
   ===================================================== */

(function () {
  'use strict';

  /* ── NAV SCROLL EFFECT ──────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled'); // Always remove so it stays consistent
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load
  }

  /* ── MOBILE HAMBURGER ───────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      nav.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on any mobile nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        nav.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        nav.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        hamburger.focus();
      }
    });
  }

  /* ── INTERSECTION OBSERVER — fade-up ───────────── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => io.observe(el));
  } else {
    // Fallback — make all visible immediately
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── CONTACT FORM ───────────────────────────────── */
  const form       = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (form) {
    const fields = {
      name:    { el: form.querySelector('#name'),    err: form.querySelector('#name-error') },
      email:   { el: form.querySelector('#email'),   err: form.querySelector('#email-error') },
      message: { el: form.querySelector('#message'), err: form.querySelector('#message-error') },
    };

    const validate = () => {
      let valid = true;

      // Name
      if (!fields.name.el.value.trim()) {
        fields.name.el.classList.add('error');
        fields.name.err.textContent = 'Please enter your name.';
        valid = false;
      } else {
        fields.name.el.classList.remove('error');
        fields.name.err.textContent = '';
      }

      // Email
      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fields.email.el.value.trim()) {
        fields.email.el.classList.add('error');
        fields.email.err.textContent = 'Please enter your email address.';
        valid = false;
      } else if (!emailRx.test(fields.email.el.value.trim())) {
        fields.email.el.classList.add('error');
        fields.email.err.textContent = 'Please enter a valid email address.';
        valid = false;
      } else {
        fields.email.el.classList.remove('error');
        fields.email.err.textContent = '';
      }

      // Message
      if (!fields.message.el.value.trim()) {
        fields.message.el.classList.add('error');
        fields.message.err.textContent = 'Please describe your request.';
        valid = false;
      } else {
        fields.message.el.classList.remove('error');
        fields.message.err.textContent = '';
      }

      return valid;
    };

    // Real-time clearing of errors on input
    Object.values(fields).forEach(({ el, err }) => {
      if (!el) return;
      el.addEventListener('input', () => {
        if (el.value.trim()) {
          el.classList.remove('error');
          err.textContent = '';
        }
      });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate()) return;

      // Simulate async submission
      const submitBtn = form.querySelector('#submit-request-btn');
      const btnText   = submitBtn.querySelector('.btn-text');
      submitBtn.disabled = true;
      btnText.textContent = 'Sending…';

      setTimeout(() => {
        form.style.display = 'none';
        if (formSuccess) {
          formSuccess.hidden = false;
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1200);
    });
  }

  /* ── ACTIVE NAV LINK ────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  /* ── CUSTOM CURSOR & MAGNETIC BUTTONS ───────────── */
  /* ── MAGNETIC BUTTONS (Mouse stays normal, but buttons pull slightly) ───────────── */
  if (window.matchMedia("(pointer: fine)").matches) {
    const magnets = document.querySelectorAll('.btn, .nav__cta, .nav__logo-mark');
    magnets.forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const h = rect.width / 2;
        const v = rect.height / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - v;
        const pullX = x * 0.3;
        const pullY = y * 0.3;
        this.style.transform = `translate(${pullX}px, ${pullY}px)`;
      });
      btn.addEventListener('mouseleave', function() {
        this.style.transform = `translate(0px, 0px)`;
      });
    });
  }

  /* ── INTERACTIVE MAD-LIBS HERO ──────────────────── */
  const mlAction = document.getElementById('ml-action');
  const mlLocale = document.getElementById('ml-locale');
  const heroBgs = document.querySelectorAll('.hero-bg');
  const heroExp = document.getElementById('hero-explanation');
  
  if (mlAction && mlLocale && heroBgs.length >= 4) {
    // Actions stay the same — service moods
    const actions = ["exclusive access", "absolute secrecy", "effortless logistics", "Michelin dining"];
    const actionExps = [
      "From off-market collectibles to VIP fashion week — we open Paris’s most closed doors.",
      "Completely untraceable movements and encrypted lives in the most watched city in the world.",
      "Seamless door-to-door coordination across every arrondissement, every hour.",
      "Unattainable reservations at Paris’s most coveted gastronomic institutions."
    ];

    // Locales are now Paris locations only
    const locales = ["the Eiffel Tower", "Le Marais", "Faubourg Saint-Honor\u00e9", "Le Ritz"];
    const localeExps = [
      "Private Trocad\u00e9ro dinners and after-hours Champ de Mars access — Paris at its most iconic.",
      "Artist ateliers, private gallery previews, and contemporary art curated for your collection.",
      "VIP boutique access, trunk shows, and front-row seats at Paris Fashion Week.",
      "Palace-tier service: suite upgrades, private bars, and access when the hotel is fully booked."
    ];

    function updateHero(bgIndex, newText) {
      heroBgs.forEach(bg => bg.classList.remove('active'));
      const bg = heroBgs[bgIndex % heroBgs.length];
      if (bg) {
        bg.classList.add('active');
        bg.style.animation = 'none';
        bg.offsetHeight;
        bg.style.animation = 'heroZoom 18s ease-out forwards';
      }
      if (heroExp) {
        heroExp.animate([{opacity:1},{opacity:0},{opacity:1}], {duration:400, easing:'ease'});
        setTimeout(() => { heroExp.textContent = newText; }, 200);
      }
    }

    mlAction.addEventListener('click', function() {
      const nextIdx = (parseInt(this.getAttribute('data-idx') || 0) + 1) % actions.length;
      this.setAttribute('data-idx', nextIdx);
      this.animate([{opacity:1},{opacity:0},{opacity:1}], {duration:400, easing:'ease'});
      setTimeout(() => { this.textContent = actions[nextIdx]; }, 200);
      updateHero(nextIdx, actionExps[nextIdx]);
    });

    mlLocale.addEventListener('click', function() {
      const nextIdx = (parseInt(this.getAttribute('data-idx') || 0) + 1) % locales.length;
      this.setAttribute('data-idx', nextIdx);
      this.animate([{opacity:1},{opacity:0},{opacity:1}], {duration:400, easing:'ease'});
      setTimeout(() => { this.textContent = locales[nextIdx]; }, 200);
      updateHero(nextIdx, localeExps[nextIdx]);
    });
  }

  /* ── FAQ ACCORDION ────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all others
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.style.maxHeight = '0';
      });
      // Toggle this one
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const answer = btn.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── LANGUAGE DROPDOWN ──────────────────────────── */
  const langTrigger = document.querySelector('.nav__lang-trigger');
  const langDropdown = document.querySelector('.nav__lang-dropdown');
  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    // Close when clicking outside
    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
  }

})();
