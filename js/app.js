/* =========================================================
   PRISMA EYEWEAR — Interacciones compartidas
   Menú, navegación activa, filtros del home, combos,
   diálogos, animaciones y año.
   ========================================================= */

(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const header = document.getElementById('site-header');
  const nav = document.getElementById('site-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const toast = document.getElementById('toast');
  const filterStatus = document.getElementById('filter-status');
  const year = document.getElementById('year');

  /* ---------- Utilidades ---------- */

  function openDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  }

  function formatPrice(value) {
    if (window.PRISMA.store) return window.PRISMA.store.formatPrice(value);
    return '$' + Number(value).toLocaleString('es-AR');
  }

  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 4200);
  }

  /* ---------- Menú móvil ---------- */

  function setMenu(open) {
    if (!nav || !menuToggle) return;
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    const label = menuToggle.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  if (nav) {
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });
  }

  document.addEventListener('click', function (event) {
    if (!nav || !nav.classList.contains('is-open')) return;
    if (header && header.contains(event.target)) return;
    setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1180) setMenu(false);
  });

  /* ---------- Navegación activa ---------- */

  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const isHome = Boolean(document.getElementById('inicio'));
  const sectionTargets = isHome
    ? ['#inicio', '#coleccion', '#combos', '#nosotros', '#faq', '#contacto']
      .map(function (hash) { return document.querySelector(hash); })
      .filter(Boolean)
    : [];

  let activeHash = null;

  function setActive(hash) {
    if (hash === activeHash) return;
    activeHash = hash;
    navLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === hash;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function updateActiveNav() {
    if (!sectionTargets.length) return;
    const line = window.scrollY + (header ? header.offsetHeight : 0) + 90;
    let current = sectionTargets[0];
    sectionTargets.forEach(function (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      if (top <= line) current = section;
    });
    setActive('#' + current.id);
  }

  /* ---------- Scroll: header y navegación ---------- */

  let scrollQueued = false;

  function onScroll() {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(function () {
      scrollQueued = false;
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
      updateActiveNav();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Filtro por color de cristal ---------- */

  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));

  function applyFilter(filter, options) {
    const settings = options || {};
    let visibleCount = 0;

    productCards.forEach(function (card) {
      const matches = filter === 'todos' || card.dataset.lens === filter;
      card.classList.toggle('is-hidden', !matches);
      if (matches) {
        visibleCount += 1;
        card.classList.add('is-visible');
      }
    });

    filterButtons.forEach(function (button) {
      if (!button.classList.contains('color-choice')) return;
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    if (filterStatus) {
      if (filter === 'todos') {
        filterStatus.textContent = '';
      } else {
        filterStatus.textContent =
          'Mostrando ' + visibleCount +
          (visibleCount === 1 ? ' modelo' : ' modelos') +
          ' con cristal ' + filter + '.';
      }
    }

    if (settings.scroll) {
      const collection = document.getElementById('coleccion');
      if (collection) {
        collection.scrollIntoView({
          behavior: reduceMotion.matches ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.dataset.filter || 'todos';
      const shouldScroll = Boolean(button.closest('.colors'));
      applyFilter(filter, { scroll: shouldScroll });
    });
  });

  /* ---------- Combos ---------- */

  document.querySelectorAll('.combo-button[data-combo]').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.combo-card');
      const price = button.dataset.price;
      const label = button.dataset.label || '';

      document.querySelectorAll('.combo-card').forEach(function (item) {
        item.classList.toggle('is-selected', item === card);
      });

      showToast(
        'Combo de ' + label + ' por ' + formatPrice(price) +
        '. Elegí los modelos y el precio se calcula en el carrito.'
      );
    });
  });

  /* ---------- Cierre de diálogos ---------- */

  document.querySelectorAll('[data-close-dialog]').forEach(function (button) {
    button.addEventListener('click', function () {
      closeDialog(button.closest('dialog'));
    });
  });

  document.querySelectorAll('dialog').forEach(function (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left && event.clientX <= rect.right &&
        event.clientY >= rect.top && event.clientY <= rect.bottom;

      if (!inside) closeDialog(dialog);
    });
  });

  /* ---------- Animación al hacer scroll ---------- */

  const revealItems = Array.from(document.querySelectorAll('.reveal'));

  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  /* ---------- Año del pie ---------- */

  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- API compartida ---------- */

  window.PRISMA = window.PRISMA || {};
  window.PRISMA.ui = {
    openDialog: openDialog,
    closeDialog: closeDialog,
    showToast: showToast,
    formatPrice: formatPrice
  };
})();
