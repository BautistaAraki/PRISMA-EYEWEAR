# PRISMA EYEWEAR — Prototipo local

Prototipo responsive de la tienda PRISMA EYEWEAR, construido con **HTML5, CSS3 y JavaScript vanilla**. No usa frameworks, dependencias ni procesos de build.

> **Estado al 28/10/2026:** home, ficha de producto, carrito demo y páginas de ayuda implementados con placeholders. Faltan fotos reales, logo final, datos comerciales y acceso a Tiendanube. La aprobación visual y comercial corresponde al dueño.

El prototipo permite validar diseño, navegación y simulación de compra. No tiene backend, base de datos, pagos ni checkout real. No es automáticamente compatible con Tiendanube: la adaptación se evaluará cuando haya acceso. El brief menciona una tienda previa sobre Ipanema, pero el usuario puso en duda su existencia el 28/10/2026. Primero se comprobará si existe una tienda; según el resultado, se revisará lo existente o se preparará la configuración desde cero.

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
- Hero compacto con carrusel manual de tres placeholders, flechas, indicadores y contador accesible. Sin avance automático.
- Colección de 4 modelos con filtro por color de cristal.
- Ficha de producto con selector de armazón y cristal, miniaturas, cantidad y otros modelos.
- Carrito persistido en `localStorage` (`prisma-cart-v1`), con cantidades, quitar, vaciar y precio por cantidad.
- Combos de 1, 2 y 3 anteojos; para 4 o más se muestra «A confirmar» y se bloquea el checkout demo.
- Sección de colores que filtra la colección, franja de detalles, Nosotros, FAQ y footer.
- Páginas de ayuda legales con estructura de demostración y datos marcados como pendientes.

## Decisiones confirmadas para el prototipo

Según el handoff del 28/10/2026, estas decisiones rigen el prototipo. El catálogo y los activos definitivos de la tienda siguen pendientes:

- Titular del hero: «EL COLOR ES ACTITUD.».
- CTA del hero: «DESCUBRÍ LA COLECCIÓN».
- Sección de colores: «TRES COLORES. INFINITAS ACTITUDES.».
- Paleta: crema `#F4EEE7`, negro `#1A1A1A`, rojo `#D6453A`, naranja `#F39C3A` y amarillo `#F7E06B`.
- Cuatro modelos de prueba (Modelo 01 a Modelo 04).
- Seis ítems de navegación: Inicio, Colección, Combos, Nosotros, FAQ y Contacto.
- Tipografía Archivo desde Google Fonts, con fallback al sistema.
- Logos SVG de referencia incorporados desde `prisma_recursos.zip`; el archivo final de marca sigue pendiente de confirmación.
- Imágenes JPG de referencia para home y combinaciones de portada; SVG demo para las variantes restantes. Las imágenes no acreditan el catálogo real.
- Precios de combos tomados del brief: $49.000, $79.000 y $99.000.
- El combo se calcula por cantidad total del carrito, mezclando modelos y colores. Para 4 o más unidades, precio pendiente y checkout demo bloqueado.

## Recorrido de prueba manual

1. Iniciar el servidor local y abrir la home. Probar navegación, menú móvil, filtros de cristal y botones de combos.
2. Entrar a «Ver detalles». Cambiar armazón y cristal; comprobar imagen, miniaturas y selección.
3. Agregar una unidad al carrito: total esperado $49.000.
4. Subir la cantidad a 2 y luego a 3: totales esperados $79.000 y $99.000. Probar también mezclando variantes.
5. Llegar a 4 unidades: debe aparecer «A confirmar» y quedar deshabilitado el checkout demo.
6. Recargar y verificar la persistencia. Abrir otra pestaña del carrito y comprobar la sincronización al cambiar cantidades.
7. Quitar líneas y vaciar con confirmación; comprobar el estado vacío y el acceso a la colección.
8. Abrir `producto.html` sin parámetro (Modelo 01) y con `?modelo=99` (modelo no encontrado).
9. Abrir las cuatro páginas de ayuda desde el footer y recorrer sus enlaces.
10. Revisar a 390 px y 1280 px, navegar con teclado y comprobar foco visible, ausencia de desborde y consola sin errores.

Las pruebas de navegador y los resultados de Lighthouse del 27/10/2026 son antecedentes documentados; no se repitieron durante la actualización documental del 28/10/2026.

## Forma de trabajo

- Antes de cada bloque: explicar el alcance y los archivos a modificar.
- Después: entregar resumen, pasos de prueba, pendientes y mensaje de commit sugerido; esperar confirmación antes del siguiente bloque.
- No hacer commit ni push sin autorización explícita. No borrar archivos sin consultar.
- Mantener HTML, CSS y JavaScript vanilla, accesibilidad y respeto por `prefers-reduced-motion`.
- No inventar contenido comercial o técnico ni agregar funcionalidades no acordadas.

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

## Imágenes de referencia incorporadas

Los recursos activos están en `assets/images/recursos/`: 14 JPG y dos logos SVG procedentes de `prisma_recursos.zip`. Incluyen hero de escritorio de 2400 × 1200 px, hero móvil de 1080 × 1350 px, productos/editoriales de 1600 × 1200 px, detalles de 1200 × 1200 px y combos de 1600 × 900 px. No incluyen botones ni textos incrustados; se retiraron los recortes CSS de la versión anterior.

Las cuatro portadas y los tres detalles usan copias PNG mejoradas con IA, identificadas como referencias. En ficha y carrito, la portada mejorada solo se usa para su combinación de armazón/cristal; las otras combinaciones conservan sus SVG. Los JPG originales y las composiciones de combos se conservan. Las imágenes siguen identificadas como referencias: su tamaño no acredita que sean fotos reales del catálogo ni garantiza detalle original. Los PNG anteriores permanecen en `assets/images/referencias/`, sin uso en la interfaz actual y sin eliminarse.

## Documentación

- `docs/BRIEF-MAESTRO.md` — brief transcrito.
- `docs/INSTRUCCIONES-DE-TRABAJO.md` — reglas y plan por bloques.
- `docs/REFERENCIA-VISUAL.md` — lectura de la referencia visual.
- `docs/FUNCIONALIDADES.md` — funcionalidades previstas.
- `docs/ESTADO-Y-PENDIENTES.md` — estado, diferencias y datos a confirmar.
- `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf` — PDF original.
