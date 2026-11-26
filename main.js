import { MEDIA_CONFIG, HIGHLIGHTS_DATA, MENU_CATEGORIES } from './menu-data.js';

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Update footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // ------------------------------------------------------------------------
  // 1. SMOOTH SCROLL (LENIS) & ANCHOR NAVIGATION
  // ------------------------------------------------------------------------
  let lenis = null;
  if (!prefersReducedMotion && window.Lenis) {
    lenis = new window.Lenis({
      lerp: 0.14,
      smoothWheel: true
    });

    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function scrollToTarget(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -72 });
    } else {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.endsWith('-placeholder')) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToTarget(href);
      }
    });
  });

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  }

  // ------------------------------------------------------------------------
  // 2. NAVBAR SCROLL STATE & MOBILE DRAWER
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 36);
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  function setDrawerState(open) {
    if (!menuToggle || !mobileDrawer) return;
    menuToggle.classList.toggle('is-active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileDrawer.classList.toggle('is-open', open);
    mobileDrawer.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      setDrawerState(!isOpen);
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => setDrawerState(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        setDrawerState(false);
        menuToggle.focus();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. MENU HIGHLIGHTS RENDERING
  // ------------------------------------------------------------------------
  const highlightsGrid = document.getElementById('highlights-grid');
  if (highlightsGrid) {
    highlightsGrid.innerHTML = HIGHLIGHTS_DATA.map(
      (item) => `
      <article class="highlight-item gs-fade-up">
        <div class="highlight-item__img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="highlight-item__content">
          <div class="highlight-item__meta">
            <span class="highlight-item__cat">${item.categoryLabel}</span>
            <span class="highlight-item__price">${item.price}</span>
          </div>
          <h3 class="highlight-item__title">${item.name}</h3>
          <p class="highlight-item__desc">${item.description}</p>
          <button type="button" class="highlight-item__btn" data-menu-target="${item.category}">
            Find in Menu
          </button>
        </div>
      </article>
    `
    ).join('');
  }

  // ------------------------------------------------------------------------
  // 4. INTERACTIVE MENU (TABS + SEARCH)
  // ------------------------------------------------------------------------
  const menuTabsEl = document.getElementById('menu-tabs');
  const menuCanvasEl = document.getElementById('menu-canvas');
  const searchInput = document.getElementById('menu-search-input');
  const searchClear = document.getElementById('menu-search-clear');
  const searchStatus = document.getElementById('menu-search-status');

  let activeCategoryId = MENU_CATEGORIES[0].id;

  function renderTabs() {
    if (!menuTabsEl) return;
    menuTabsEl.innerHTML = MENU_CATEGORIES.map(
      (cat) => `
      <button
        type="button"
        role="tab"
        class="menu-tab ${cat.id === activeCategoryId ? 'is-active' : ''}"
        aria-selected="${cat.id === activeCategoryId}"
        data-category-id="${cat.id}"
      >
        ${cat.number}. ${cat.shortTitle}
      </button>
    `
    ).join('');

    menuTabsEl.querySelectorAll('.menu-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        activeCategoryId = tab.dataset.categoryId;
        if (searchInput && searchInput.value.trim()) {
          searchInput.value = '';
          if (searchClear) searchClear.hidden = true;
          if (searchStatus) searchStatus.hidden = true;
        }
        renderTabs();
        renderCategory(activeCategoryId);
      });
    });
  }

  function renderMenuItemRow(item) {
    const badge = item.featured ? `<span class="menu-row__badge">Signature</span>` : '';
    return `
      <div class="menu-row">
        <div class="menu-row__top">
          <h4 class="menu-row__name">${item.name}${badge}</h4>
          <span class="menu-row__price">${item.price}</span>
        </div>
        <p class="menu-row__desc">${item.description}</p>
      </div>
    `;
  }

  function renderCategory(categoryId) {
    if (!menuCanvasEl) return;
    const category = MENU_CATEGORIES.find((c) => c.id === categoryId) || MENU_CATEGORIES[0];

    if (category.isAddonGrid) {
      menuCanvasEl.innerHTML = `
        <div class="menu-category-head">
          <h3 class="menu-category-title">${category.title}</h3>
          <p class="menu-category-sub">${category.subtitle}</p>
        </div>
        <div class="addons-grid">
          ${category.addonGroups
            .map(
              (group) => `
            <div class="addon-box">
              <h4 class="addon-box__title">${group.title}</h4>
              <ul class="addon-box__list">
                ${group.items.map((entry) => `<li>${entry}</li>`).join('')}
              </ul>
            </div>
          `
            )
            .join('')}
        </div>
      `;
      return;
    }

    const mainItemsHtml = (category.items || []).map(renderMenuItemRow).join('');
    const subsectionsHtml = (category.subsections || [])
      .map(
        (sub) => `
      <div class="menu-subsection">
        <h4 class="menu-subsection__title">${sub.title}</h4>
        <div class="menu-items-grid">
          ${sub.items.map(renderMenuItemRow).join('')}
        </div>
      </div>
    `
      )
      .join('');

    menuCanvasEl.innerHTML = `
      <div class="menu-category-head">
        <h3 class="menu-category-title">${category.title}</h3>
        <p class="menu-category-sub">${category.subtitle}</p>
      </div>
      <div class="menu-items-grid">
        ${mainItemsHtml}
      </div>
      ${subsectionsHtml}
    `;
  }

  function renderSearchResults(query) {
    if (!menuCanvasEl || !searchStatus) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      searchStatus.hidden = true;
      renderCategory(activeCategoryId);
      return;
    }

    const matches = [];
    MENU_CATEGORIES.forEach((cat) => {
      if (cat.items) {
        cat.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
          ) {
            matches.push({ ...item, categoryTitle: cat.shortTitle });
          }
        });
      }
      if (cat.subsections) {
        cat.subsections.forEach((sub) => {
          sub.items.forEach((item) => {
            if (
              item.name.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q)
            ) {
              matches.push({ ...item, categoryTitle: `${cat.shortTitle} · ${sub.title}` });
            }
          });
        });
      }
      if (cat.addonGroups) {
        cat.addonGroups.forEach((group) => {
          group.items.forEach((entry) => {
            if (entry.toLowerCase().includes(q) || group.title.toLowerCase().includes(q)) {
              matches.push({
                name: entry,
                price: group.title.includes('₹90') ? '₹90' : 'Option',
                description: group.title,
                categoryTitle: cat.shortTitle
              });
            }
          });
        });
      }
    });

    searchStatus.hidden = false;
    searchStatus.textContent = `Showing ${matches.length} ${matches.length === 1 ? 'result' : 'results'} for "${query.trim()}"`;

    if (matches.length === 0) {
      menuCanvasEl.innerHTML = `
        <div class="menu-empty">
          <p>No beverages matched "${query.trim()}". Try searching for pistachio, biscoff, frappe, or espresso.</p>
        </div>
      `;
      return;
    }

    menuCanvasEl.innerHTML = `
      <div class="menu-items-grid">
        ${matches
          .map((item) =>
            renderMenuItemRow({
              ...item,
              description: `${item.description} (${item.categoryTitle})`
            })
          )
          .join('')}
      </div>
    `;
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const val = searchInput.value;
      if (searchClear) searchClear.hidden = val.trim().length === 0;
      renderSearchResults(val);
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.hidden = true;
      if (searchStatus) searchStatus.hidden = true;
      renderCategory(activeCategoryId);
      searchInput.focus();
    });
  }

  // Deep links from Experiences & Highlights to specific Menu category
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-menu-target]');
    if (!trigger) return;
    e.preventDefault();
    const targetId = trigger.dataset.menuTarget;
    if (MENU_CATEGORIES.some((c) => c.id === targetId)) {
      activeCategoryId = targetId;
      if (searchInput) searchInput.value = '';
      if (searchClear) searchClear.hidden = true;
      if (searchStatus) searchStatus.hidden = true;
      renderTabs();
      renderCategory(activeCategoryId);
    }
    scrollToTarget('#menu');
  });

  renderTabs();
  renderCategory(activeCategoryId);

  // ------------------------------------------------------------------------
  // 5. GALLERY & LIGHTBOX
  // ------------------------------------------------------------------------
  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption-text');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentLightboxIndex = 0;

  if (galleryGrid) {
    galleryGrid.innerHTML = MEDIA_CONFIG.gallery
      .map(
        (item, index) => `
      <figure class="gallery-card gs-fade-up" tabindex="0" role="button" aria-label="View ${item.caption}" data-gallery-index="${index}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy" />
        <figcaption class="gallery-card__overlay">
          <span class="gallery-card__caption">${item.caption}</span>
        </figcaption>
      </figure>
    `
      )
      .join('');

    galleryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-gallery-index]');
      if (!card) return;
      openLightbox(Number(card.dataset.galleryIndex));
    });

    galleryGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-gallery-index]');
        if (!card) return;
        e.preventDefault();
        openLightbox(Number(card.dataset.galleryIndex));
      }
    });
  }

  function updateLightboxView() {
    const item = MEDIA_CONFIG.gallery[currentLightboxIndex];
    if (!item || !lightboxImg) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${MEDIA_CONFIG.gallery.length}`;
    }
  }

  function openLightbox(index) {
    if (!lightbox) return;
    currentLightboxIndex = index;
    updateLightboxView();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  if (lightbox) {
    lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
      el.addEventListener('click', closeLightbox);
    });

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        currentLightboxIndex =
          (currentLightboxIndex - 1 + MEDIA_CONFIG.gallery.length) % MEDIA_CONFIG.gallery.length;
        updateLightboxView();
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % MEDIA_CONFIG.gallery.length;
        updateLightboxView();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    });
  }

  // ------------------------------------------------------------------------
  // 6. FRONTEND ENQUIRY FORM VALIDATION
  // ------------------------------------------------------------------------
  const enquiryForm = document.getElementById('enquiry-form');
  const formSuccess = document.getElementById('form-success');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.hidden = true;

      const fields = [
        {
          id: 'form-name',
          errId: 'error-name',
          validate: (v) => v.trim().length >= 2 || 'Please enter your name.'
        },
        {
          id: 'form-email',
          errId: 'error-email',
          validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.'
        },
        {
          id: 'form-subject',
          errId: 'error-subject',
          validate: (v) => v.trim().length >= 3 || 'Please enter a brief subject.'
        },
        {
          id: 'form-message',
          errId: 'error-message',
          validate: (v) => v.trim().length >= 10 || 'Please write a message of at least 10 characters.'
        }
      ];

      let isValid = true;
      fields.forEach(({ id, errId, validate }) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(errId);
        const wrap = input?.closest('.form-field');
        const result = validate(input?.value || '');
        if (result !== true) {
          isValid = false;
          if (wrap) wrap.classList.add('has-error');
          if (errEl) errEl.textContent = result;
        } else {
          if (wrap) wrap.classList.remove('has-error');
          if (errEl) errEl.textContent = '';
        }
      });

      if (isValid) {
        enquiryForm.reset();
        if (formSuccess) {
          formSuccess.hidden = false;
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }

  // ------------------------------------------------------------------------
  // 7. GSAP ANIMATIONS & DESKTOP CUSTOM CURSOR
  // ------------------------------------------------------------------------
  if (!prefersReducedMotion && window.gsap) {
    const { gsap } = window;
    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    // Hero Entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.gs-hero-line', {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.14
      })
      .from(
        '.gs-hero-fade',
        {
          opacity: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.1
        },
        '-=0.55'
      )
      .from(
        '.gs-hero-reveal',
        {
          clipPath: 'inset(12% 0% 0% 0%)',
          opacity: 0,
          duration: 1.05
        },
        '-=0.75'
      );

    // Subtle Hero Parallax
    if (window.ScrollTrigger) {
      gsap.to('.hero__img', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // General Scroll Reveals
      gsap.utils.toArray('.gs-fade-up').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            once: true
          }
        });
      });

      // Story Image Reveal
      gsap.utils.toArray('.gs-reveal-img').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0% 0% 18% 0%)',
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true
          }
        });
      });

      window.ScrollTrigger.refresh();
    }
  }
});
