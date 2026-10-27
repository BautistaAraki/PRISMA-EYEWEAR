# PRISMA EYEWEAR — Prototipo local

Prototipo responsive de la tienda PRISMA EYEWEAR, construido con **HTML5, CSS3 y JavaScript vanilla**. No usa frameworks, dependencias ni procesos de build.

> **Estado:** bloque 2 en revisión. Home, ficha de producto, carrito demo y páginas de ayuda maquetados con placeholders. Faltan fotos reales, logo final y datos comerciales.

## Cómo verlo

Desde la carpeta del proyecto:

```powershell
python -m http.server 8000
```

Luego abrir <http://localhost:8000>.

También se puede abrir `index.html` directamente, aunque el servidor local reproduce mejor el comportamiento final.

## Estructura

```text
PRISMA-EYEWEAR/
├── index.html                    Home completo
├── producto.html                 Ficha de producto (?modelo=01..04)
├── carrito.html                  Carrito demo y checkout simulado
├── envios.html                   Ayuda: envíos (contenido pendiente)
├── cambios-y-devoluciones.html   Ayuda: cambios (contenido pendiente)
├── privacidad.html               Ayuda: privacidad (contenido pendiente)
├── terminos.html                 Ayuda: términos (contenido pendiente)
├── css/styles.css                Estilos, responsive y animaciones
├── js/data.js                    Catálogo, variantes y precios demo
├── js/store.js                   Carrito, persistencia y totales
├── js/app.js                     Menú, filtros, combos y scroll
├── js/product.js                 Ficha, variantes y agregado al carrito
├── js/cart.js                    Líneas, cantidades y resumen del carrito
├── assets/images/                Placeholders SVG (reemplazables)
├── docs/                         Brief, instrucciones y pendientes
└── README.md
```

## Qué incluye el prototipo

- Header sticky con navegación, menú móvil y contador de carrito.
- Hero con el titular «EL COLOR ES ACTITUD.».
- Colección de 4 modelos con filtro por color de cristal.
- Ficha de producto con selector de armazón y cristal, miniaturas, cantidad y otros modelos.
- Carrito persistido en `localStorage` (`prisma-cart-v1`), con cantidades, quitar, vaciar y precio por cantidad.
- Combos de 1, 2 y 3 anteojos; para 4 o más se muestra «A confirmar» y se bloquea el checkout demo.
- Sección de colores que filtra la colección, franja de detalles, Nosotros, FAQ y footer.
- Páginas de ayuda legales con estructura de demostración y datos marcados como pendientes.

## Decisiones provisorias

Estas decisiones están tomadas para poder avanzar y **requieren confirmación**:

- Titular del hero: «EL COLOR ES ACTITUD.».
- Cuatro modelos de prueba (Modelo 01 a Modelo 04).
- Seis ítems de navegación: Inicio, Colección, Combos, Nosotros, FAQ y Contacto.
- Tipografía Archivo desde Google Fonts, con fallback al sistema.
- Logo provisorio como texto «PRISMA EYEWEAR».
- Imágenes SVG locales que indican «foto pendiente»; no son productos reales.
- Precios de combos tomados del brief: $49.000, $79.000 y $99.000.

## Pendientes

- Fotos reales de producto y campaña.
- Logo final en SVG o PNG transparente.
- Nombres o códigos definitivos de los modelos.
- Materiales, medidas y características técnicas.
- Regla de combos para 4 unidades o más.
- Envíos, pagos, cambios, devoluciones y privacidad.
- Canales de contacto y redes.
- Respuestas definitivas de la FAQ.
- Reemplazo del carrito demo por la integración real.
- Adaptación a Tiendanube.

El detalle completo está en `docs/ESTADO-Y-PENDIENTES.md`.

## Documentación

- `docs/BRIEF-MAESTRO.md` — brief transcrito.
- `docs/INSTRUCCIONES-DE-TRABAJO.md` — reglas y plan por bloques.
- `docs/REFERENCIA-VISUAL.md` — lectura de la referencia visual.
- `docs/FUNCIONALIDADES.md` — funcionalidades previstas.
- `docs/ESTADO-Y-PENDIENTES.md` — estado, diferencias y datos a confirmar.
- `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf` — PDF original.
