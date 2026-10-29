/* =========================================================
   PRISMA EYEWEAR — Ficha de producto
   Render del modelo según la URL, selección de variantes
   y agregado al carrito de demostración.
   ========================================================= */

(function () {
  'use strict';

  const data = window.PRISMA.data;
  const store = window.PRISMA.store;
  const ui = window.PRISMA.ui;

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('modelo');
  const normalized = requested && /^\d+$/.test(requested)
    ? requested.padStart(2, '0')
    : requested;
  const product = normalized ? store.getProduct(normalized) : data.products[0];

  const page = document.getElementById('product-page');
  const notFound = document.getElementById('product-not-found');

  if (!product) {
    if (page) page.hidden = true;
    if (notFound) notFound.hidden = false;
    const related = document.querySelector('.related');
    if (related) related.hidden = true;
    const missingBreadcrumb = document.getElementById('breadcrumb-model');
    if (missingBreadcrumb) missingBreadcrumb.textContent = 'Modelo no encontrado';
    document.title = 'Modelo no encontrado — PRISMA EYEWEAR';
    return;
  }

  const state = {
    frame: product.defaultFrame,
    lens: product.defaultLens,
    qty: 1
  };

  const name = document.getElementById('product-name');
  const price = document.getElementById('product-price');
  const description = document.getElementById('product-description');
  const breadcrumb = document.getElementById('breadcrumb-model');
  const image = document.getElementById('product-image');
  const frameValue = document.getElementById('frame-value');
  const lensValue = document.getElementById('lens-value');
  const frameOptions = document.getElementById('frame-options');
  const lensOptions = document.getElementById('lens-options');
  const thumbs = document.getElementById('product-thumbs');
  const qtyValue = document.getElementById('qty-value');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const addToCart = document.getElementById('add-to-cart');
  const relatedGrid = document.getElementById('related-grid');

  /* ---------- Variantes ---------- */

  function updatePressed(container, attribute, value) {
    container.querySelectorAll('button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset[attribute] === value));
    });
  }

  function updateImage() {
    const frame = store.getFrame(state.frame);
    const lens = store.getLens(state.lens);

    image.src = store.variantImage(product.id, state.frame, state.lens);
    image.alt =
      'Referencia mejorada con IA o SVG de demostración de ' + product.name + ' con armazón ' +
      frame.label.toLowerCase() + ' y cristal ' + lens.label.toLowerCase() +
      '. Foto real pendiente.';
  }

  function renderThumbs() {
    thumbs.innerHTML = '';

    data.lenses.forEach(function (lens) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'product-thumb';
      button.dataset.lens = lens.id;
      button.setAttribute('aria-pressed', String(state.lens === lens.id));
      button.setAttribute('aria-label', 'Ver cristal ' + lens.label.toLowerCase());

      const img = document.createElement('img');
      img.src = store.variantImage(product.id, state.frame, lens.id);
      img.alt = '';
      img.width = 800;
      img.height = 600;
      img.loading = 'lazy';

      button.appendChild(img);
      button.addEventListener('click', function () {
        setLens(lens.id);
      });
      thumbs.appendChild(button);
    });
  }

  function updateThumbsPressed() {
    thumbs.querySelectorAll('.product-thumb').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lens === state.lens));
    });
  }

  function setFrame(id) {
    if (!store.getFrame(id) || id === state.frame) return;
    state.frame = id;
    frameValue.textContent = store.getFrame(id).label;
    updatePressed(frameOptions, 'frame', id);
    updateImage();
    renderThumbs();
  }

  function setLens(id) {
    if (!store.getLens(id) || id === state.lens) return;
    state.lens = id;
    lensValue.textContent = store.getLens(id).label;
    updatePressed(lensOptions, 'lens', id);
    updateThumbsPressed();
    updateImage();
  }

  function renderFrameOptions() {
    frameOptions.innerHTML = '';

    data.frames.forEach(function (frame) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'variant-choice';
      button.dataset.frame = frame.id;
      button.setAttribute('aria-pressed', String(state.frame === frame.id));

      const swatch = document.createElement('span');
      swatch.className = 'variant-swatch';
      swatch.style.background = frame.color;
      swatch.setAttribute('aria-hidden', 'true');

      const label = document.createElement('span');
      label.textContent = frame.label;

      button.appendChild(swatch);
      button.appendChild(label);
      button.addEventListener('click', function () {
        setFrame(frame.id);
      });
      frameOptions.appendChild(button);
    });
  }

  function renderLensOptions() {
    lensOptions.innerHTML = '';

    data.lenses.forEach(function (lens) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'variant-choice';
      button.dataset.lens = lens.id;
      button.setAttribute('aria-pressed', String(state.lens === lens.id));

      const swatch = document.createElement('span');
      swatch.className = 'variant-swatch';
      swatch.style.background = lens.color;
      swatch.setAttribute('aria-hidden', 'true');

      const label = document.createElement('span');
      label.textContent = lens.label;

      button.appendChild(swatch);
      button.appendChild(label);
      button.addEventListener('click', function () {
        setLens(lens.id);
      });
      lensOptions.appendChild(button);
    });
  }

  /* ---------- Cantidad ---------- */

  function renderQty() {
    qtyValue.textContent = String(state.qty);
    qtyMinus.disabled = state.qty <= 1;
    qtyPlus.disabled = state.qty >= store.maxQty;
  }

  qtyMinus.addEventListener('click', function () {
    if (state.qty <= 1) return;
    state.qty -= 1;
    renderQty();
  });

  qtyPlus.addEventListener('click', function () {
    if (state.qty >= store.maxQty) return;
    state.qty += 1;
    renderQty();
  });

  /* ---------- Agregar al carrito ---------- */

  addToCart.addEventListener('click', function () {
    const frame = store.getFrame(state.frame);
    const lens = store.getLens(state.lens);

    store.addItem({
      model: product.id,
      frame: state.frame,
      lens: state.lens,
      qty: state.qty
    });

    const total = store.getTotal();
    ui.showToast(
      product.name + ' · ' + frame.label + ' / ' + lens.label +
      ' agregado. ' + total.qty +
      (total.qty === 1 ? ' anteojo' : ' anteojos') + ' en el carrito.'
    );

    state.qty = 1;
    renderQty();
  });

  /* ---------- Contenido del modelo ---------- */

  name.textContent = product.name;
  price.textContent = store.formatPrice(data.price);
  description.textContent = product.description;
  breadcrumb.textContent = product.name;
  frameValue.textContent = store.getFrame(state.frame).label;
  lensValue.textContent = store.getLens(state.lens).label;

  document.title = product.name + ' — PRISMA EYEWEAR';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      product.name + ' de PRISMA EYEWEAR: anteojos de moda urbana con cristal de color. ' +
      'Elegí armazón y cristal en el prototipo local.'
    );
  }

  renderFrameOptions();
  renderLensOptions();
  renderThumbs();
  updateImage();
  renderQty();

  /* ---------- Otros modelos ---------- */

  if (relatedGrid) {
    data.products
      .filter(function (item) { return item.id !== product.id; })
      .slice(0, 3)
      .forEach(function (item) {
        const article = document.createElement('article');
        article.className = 'product-card';

        const media = document.createElement('a');
        media.className = 'product-media';
        media.href = 'producto.html?modelo=' + item.id;
        media.setAttribute('aria-label', 'Ver ' + item.name);

        const img = document.createElement('img');
        img.src = store.variantImage(item.id, item.defaultFrame, item.defaultLens);
        img.alt = 'Referencia mejorada con IA de ' + item.name + ' con armazón ' +
          store.getFrame(item.defaultFrame).label.toLowerCase() + ' y cristal ' +
          store.getLens(item.defaultLens).label.toLowerCase() + '. Foto real pendiente.';
        img.width = 800;
        img.height = 600;
        img.loading = 'lazy';

        media.appendChild(img);

        const info = document.createElement('div');
        info.className = 'product-info';

        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = 'producto.html?modelo=' + item.id;
        titleLink.textContent = item.name;
        title.appendChild(titleLink);

        const itemPrice = document.createElement('p');
        itemPrice.className = 'product-price';
        itemPrice.textContent = store.formatPrice(data.price);

        const link = document.createElement('a');
        link.className = 'button button-outline';
        link.href = 'producto.html?modelo=' + item.id;
        link.textContent = 'VER DETALLES';

        info.appendChild(title);
        info.appendChild(itemPrice);
        info.appendChild(link);

        article.appendChild(media);
        article.appendChild(info);
        relatedGrid.appendChild(article);
      });
  }
})();
