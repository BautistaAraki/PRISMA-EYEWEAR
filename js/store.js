/* =========================================================
   PRISMA EYEWEAR — Carrito de demostración
   Persistencia local, validación de variantes y precio
   por cantidad según los combos confirmados en el brief.
   ========================================================= */

window.PRISMA = window.PRISMA || {};

(function () {
  'use strict';

  const data = window.PRISMA.data;
  const STORAGE_KEY = 'prisma-cart-v1';
  const MAX_QTY = 9;

  let memoryCart = [];

  function getProduct(id) {
    return data.products.find(function (product) {
      return product.id === id;
    }) || null;
  }

  function getFrame(id) {
    return data.frames.find(function (frame) {
      return frame.id === id;
    }) || null;
  }

  function getLens(id) {
    return data.lenses.find(function (lens) {
      return lens.id === id;
    }) || null;
  }

  function formatPrice(value) {
    return '$' + Number(value).toLocaleString('es-AR');
  }

  function variantImage(model, frame, lens) {
    return 'assets/images/modelo-' + model + '-' + frame + '-' + lens + '.svg';
  }

  function comboPrice(qty) {
    const combo = data.combos.find(function (item) {
      return item.qty === qty;
    });
    return combo ? combo.price : null;
  }

  function isValidItem(item) {
    if (!item || typeof item !== 'object') return false;
    if (!getProduct(item.model)) return false;
    if (!getFrame(item.frame)) return false;
    if (!getLens(item.lens)) return false;
    return Number.isInteger(item.qty) && item.qty > 0;
  }

  function normalizeCart(items) {
    const normalized = [];

    items.forEach(function (item) {
      if (!isValidItem(item)) return;

      const existing = normalized.find(function (entry) {
        return entry.model === item.model &&
          entry.frame === item.frame &&
          entry.lens === item.lens;
      });

      if (existing) {
        existing.qty = Math.min(MAX_QTY, existing.qty + item.qty);
      } else {
        normalized.push({
          model: item.model,
          frame: item.frame,
          lens: item.lens,
          qty: Math.min(MAX_QTY, item.qty)
        });
      }
    });

    return normalized;
  }

  function readCart() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return memoryCart.slice();
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return normalizeCart(parsed);
    } catch (error) {
      return memoryCart.slice();
    }
  }

  function updateCartCount() {
    const total = getTotal();
    document.querySelectorAll('.cart-button').forEach(function (button) {
      const count = button.querySelector('.cart-count');
      if (count) count.textContent = String(total.qty);
      button.setAttribute(
        'aria-label',
        'Ver carrito, ' + total.qty + (total.qty === 1 ? ' producto' : ' productos')
      );
    });
  }

  function notifyCartChange(cart) {
    updateCartCount();
    document.dispatchEvent(new CustomEvent('prisma:cartchange', {
      detail: { cart: cart, total: getTotal() }
    }));
  }

  function saveCart(items) {
    const normalized = normalizeCart(items);
    memoryCart = normalized;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } catch (error) {
      // Si el navegador bloquea localStorage, el carrito sigue en memoria.
    }

    notifyCartChange(normalized);

    return normalized;
  }

  function addItem(item) {
    const cart = readCart();
    const existing = cart.find(function (entry) {
      return entry.model === item.model &&
        entry.frame === item.frame &&
        entry.lens === item.lens;
    });

    if (existing) {
      existing.qty = Math.min(MAX_QTY, existing.qty + item.qty);
    } else {
      cart.push({
        model: item.model,
        frame: item.frame,
        lens: item.lens,
        qty: Math.min(MAX_QTY, item.qty)
      });
    }

    return saveCart(cart);
  }

  function setQty(index, qty) {
    const cart = readCart();
    if (!cart[index]) return cart;

    if (qty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = Math.min(MAX_QTY, qty);
    }

    return saveCart(cart);
  }

  function removeItem(index) {
    const cart = readCart();
    if (!cart[index]) return cart;
    cart.splice(index, 1);
    return saveCart(cart);
  }

  function clearCart() {
    return saveCart([]);
  }

  function getTotal() {
    const cart = readCart();
    const qty = cart.reduce(function (sum, item) {
      return sum + item.qty;
    }, 0);
    const price = qty > 0 ? comboPrice(qty) : 0;

    return {
      qty: qty,
      price: price,
      pending: qty > 0 && price === null
    };
  }

  function getCartWithProducts() {
    return readCart().map(function (item) {
      const product = getProduct(item.model);
      const frame = getFrame(item.frame);
      const lens = getLens(item.lens);

      return {
        model: item.model,
        qty: item.qty,
        frame: item.frame,
        lens: item.lens,
        product: product,
        frameLabel: frame ? frame.label : item.frame,
        lensLabel: lens ? lens.label : item.lens,
        image: variantImage(item.model, item.frame, item.lens)
      };
    });
  }

  window.PRISMA.store = {
    maxQty: MAX_QTY,
    getProduct: getProduct,
    getFrame: getFrame,
    getLens: getLens,
    formatPrice: formatPrice,
    variantImage: variantImage,
    comboPrice: comboPrice,
    readCart: readCart,
    addItem: addItem,
    setQty: setQty,
    removeItem: removeItem,
    clearCart: clearCart,
    getTotal: getTotal,
    getCartWithProducts: getCartWithProducts,
    updateCartCount: updateCartCount
  };

  // storage se dispara en las otras pestañas, no en la que guardó el cambio.
  window.addEventListener('storage', function (event) {
    if (event.storageArea !== window.localStorage) return;
    if (event.key !== STORAGE_KEY && event.key !== null) return;

    // Evitar recuperar datos viejos de memoria si se eliminó la clave o se vació storage.
    memoryCart = [];
    memoryCart = readCart();
    notifyCartChange(memoryCart);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCartCount);
  } else {
    updateCartCount();
  }
})();
