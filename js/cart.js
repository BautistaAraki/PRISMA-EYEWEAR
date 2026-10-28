/* =========================================================
   PRISMA EYEWEAR — Página del carrito
   Render de líneas, cantidades y total según el combo
   confirmado. Sin pagos reales.
   ========================================================= */

(function () {
  'use strict';

  const store = window.PRISMA.store;
  const ui = window.PRISMA.ui;

  const layout = document.getElementById('cart-layout');
  const empty = document.getElementById('cart-empty');
  const items = document.getElementById('cart-items');
  const countLabel = document.getElementById('cart-count-label');
  const summaryQty = document.getElementById('summary-qty');
  const summaryTotal = document.getElementById('summary-total');
  const summaryNote = document.getElementById('summary-note');
  const summaryPending = document.getElementById('summary-pending');
  const checkoutButton = document.getElementById('checkout-button');
  const clearButton = document.getElementById('clear-cart');
  const checkoutDialog = document.getElementById('checkout-dialog');

  let focusAfterRender = null;

  function productLink(model) {
    return 'producto.html?modelo=' + model;
  }

  function buildLine(item, index) {
    const article = document.createElement('article');
    article.className = 'cart-line';
    article.dataset.index = String(index);

    const thumbLink = document.createElement('a');
    thumbLink.className = 'cart-thumb';
    thumbLink.href = productLink(item.model);
    thumbLink.setAttribute('aria-label', 'Ver ' + item.product.name);

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = 'Placeholder de ' + item.product.name + ' con armazón ' +
      item.frameLabel.toLowerCase() + ' y cristal ' + item.lensLabel.toLowerCase() + '.';
    image.width = 800;
    image.height = 600;
    image.loading = 'lazy';

    thumbLink.appendChild(image);

    const info = document.createElement('div');
    info.className = 'cart-line-info';

    const title = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.href = productLink(item.model);
    titleLink.textContent = item.product.name;
    title.appendChild(titleLink);

    const variant = document.createElement('p');
    variant.className = 'cart-variant';
    variant.textContent = 'Armazón ' + item.frameLabel + ' · Cristal ' + item.lensLabel;

    const unitPrice = document.createElement('p');
    unitPrice.className = 'cart-unit-price';
    unitPrice.textContent = 'Precio de lista ' + store.formatPrice(window.PRISMA.data.price);

    info.appendChild(title);
    info.appendChild(variant);
    info.appendChild(unitPrice);

    const qtyControl = document.createElement('div');
    qtyControl.className = 'qty-control';
    qtyControl.setAttribute('role', 'group');
    qtyControl.setAttribute(
      'aria-label',
      'Cantidad de ' + item.product.name + ', ' + item.frameLabel + ' y ' + item.lensLabel
    );

    const minus = document.createElement('button');
    minus.type = 'button';
    minus.dataset.action = 'minus';
    minus.setAttribute('aria-label', 'Restar un anteojo de ' + item.product.name);
    minus.textContent = '−';
    minus.disabled = item.qty <= 1;

    const value = document.createElement('span');
    value.className = 'qty-value';
    value.textContent = String(item.qty);

    const plus = document.createElement('button');
    plus.type = 'button';
    plus.dataset.action = 'plus';
    plus.setAttribute('aria-label', 'Sumar un anteojo de ' + item.product.name);
    plus.textContent = '+';
    plus.disabled = item.qty >= store.maxQty;

    qtyControl.appendChild(minus);
    qtyControl.appendChild(value);
    qtyControl.appendChild(plus);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'cart-remove';
    remove.dataset.action = 'remove';
    remove.setAttribute('aria-label', 'Quitar ' + item.product.name + ' del carrito');
    remove.textContent = 'QUITAR';

    minus.addEventListener('click', function () {
      if (item.qty <= 1) return;
      focusAfterRender = { type: 'line', index: index, action: 'minus' };
      store.setQty(index, item.qty - 1);
    });

    plus.addEventListener('click', function () {
      if (item.qty >= store.maxQty) return;
      focusAfterRender = { type: 'line', index: index, action: 'plus' };
      store.setQty(index, item.qty + 1);
    });

    remove.addEventListener('click', function () {
      focusAfterRender = { type: 'remove', index: index };
      store.removeItem(index);
    });

    article.appendChild(thumbLink);
    article.appendChild(info);
    article.appendChild(qtyControl);
    article.appendChild(remove);

    return article;
  }

  function restoreFocus() {
    if (!focusAfterRender) return;

    let target = null;

    if (focusAfterRender.type === 'line') {
      const line = items.querySelector(
        '.cart-line[data-index="' + focusAfterRender.index + '"]'
      );
      if (line) {
        target = line.querySelector('[data-action="' + focusAfterRender.action + '"]');
        // En los límites (1 y 9), pasar al otro control de cantidad habilitado.
        if (!target || target.disabled) {
          target = line.querySelector('.qty-control button:not(:disabled)');
        }
      }
    }

    if (focusAfterRender.type === 'remove') {
      const line = items.querySelector(
        '.cart-line[data-index="' + focusAfterRender.index + '"]'
      ) || items.querySelector('.cart-line:last-child');
      if (line) target = line.querySelector('[data-action="remove"]');
      if (!target) {
        target = empty.querySelector('a');
      }
    }

    if (focusAfterRender.type === 'clear') {
      target = empty.querySelector('a');
    }

    if (target && !target.disabled) target.focus();
    focusAfterRender = null;
  }

  function render() {
    const cart = store.getCartWithProducts();
    const total = store.getTotal();

    items.innerHTML = '';
    layout.hidden = total.qty === 0;
    empty.hidden = total.qty > 0;

    countLabel.textContent = total.qty === 0
      ? 'Carrito vacío'
      : total.qty + (total.qty === 1 ? ' producto' : ' productos');

    summaryQty.textContent = String(total.qty);

    if (total.pending) {
      summaryTotal.textContent = 'A confirmar';
      summaryTotal.classList.add('is-pending');
      summaryPending.hidden = false;
      summaryNote.textContent = '';
      checkoutButton.disabled = true;
      checkoutButton.textContent = 'PRECIO PENDIENTE';
    } else {
      summaryTotal.textContent = store.formatPrice(total.price);
      summaryTotal.classList.remove('is-pending');
      summaryPending.hidden = true;
      checkoutButton.disabled = total.qty === 0;
      checkoutButton.textContent = 'FINALIZAR COMPRA (DEMO)';

      if (total.qty === 1) {
        summaryNote.textContent = 'Sumá un anteojo más para el combo de 2 por $79.000.';
      } else if (total.qty === 2) {
        summaryNote.textContent = 'Combo de 2 aplicado. Sumá uno más para el combo de 3 por $99.000.';
      } else if (total.qty === 3) {
        summaryNote.textContent = 'Combo de 3 aplicado.';
      } else {
        summaryNote.textContent = '';
      }
    }

    cart.forEach(function (item, index) {
      items.appendChild(buildLine(item, index));
    });

    restoreFocus();
  }

  clearButton.addEventListener('click', function () {
    if (!window.confirm('¿Vaciar el carrito?')) return;
    focusAfterRender = { type: 'clear' };
    store.clearCart();
  });

  checkoutButton.addEventListener('click', function () {
    if (checkoutButton.disabled) return;
    ui.openDialog(checkoutDialog);
  });

  document.addEventListener('prisma:cartchange', render);

  render();
})();
