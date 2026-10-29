# Estado del proyecto y pendientes

> **Actualización documental:** 28/10/2026.
> **Estado actual:** prototipo local implementado; tienda final pendiente de acceso, contenido y configuración comercial.

## Estado vigente — 28/10/2026

Esta sección refleja el handoff del 28/10/2026 y la revisión del repositorio. Los apartados posteriores se conservan como registro histórico y no deben interpretarse como tareas actuales ni como autorización para ejecutar sus planes.

- Base revisada: rama `master`, commit `6f0c43c` — `feat: completar ficha de producto, carrito demo y paginas de ayuda`.
- Al inicio de la revisión, el árbol de trabajo estaba limpio y sin diferencias con la referencia local `origin/master`. No se consultó el remoto para comprobar cambios posteriores.
- Home, ficha, variantes, carrito demo y cuatro páginas de ayuda implementados en HTML, CSS y JavaScript vanilla.
- Los antiguos modales de vista rápida y carrito de la home fueron reemplazados por páginas. Solo el checkout es un aviso de demostración.
- Cuatro modelos demo, dos armazones y tres cristales: 24 variantes con placeholders SVG identificados.
- Carrito persistido en `localStorage` bajo `prisma-cart-v1`. No hay backend, base de datos ni pagos reales.
- Precios por cantidad total, mezclando modelos y colores: 1 por $49.000, 2 por $79.000 y 3 por $99.000. Para 4 o más: «A confirmar» y checkout demo bloqueado.

### Decisiones vigentes del prototipo

- Hero: «EL COLOR ES ACTITUD.»; CTA: «DESCUBRÍ LA COLECCIÓN».
- Colores: «TRES COLORES. INFINITAS ACTITUDES.».
- Paleta: crema `#F4EEE7`, negro `#1A1A1A`, rojo `#D6453A`, naranja `#F39C3A` y amarillo `#F7E06B`.
- Tipografía Archivo desde Google Fonts, con fallback al sistema; logo provisional como texto «PRISMA EYEWEAR».
- Navegación: Inicio, Colección, Combos, Nosotros, Preguntas frecuentes y Contacto. Nosotros y FAQ son secciones de la home.
- La referencia visual orienta el diseño; no es un logo final ni fotografías reales de los productos.
- Los textos y decisiones anteriores del brief se conservan como fuente, pero estas definiciones del handoff rigen el prototipo actual.

### Las cinco fases del brief

| Fase | Objetivo final | Situación al 28/10/2026 |
|---|---|---|
| 1. Inmediata | Acceso, comprobación del estado de Tiendanube, alcance y activos de referencia. | Brief y referencia disponibles. Acceso y logo final pendientes. La existencia de una tienda previa sobre Ipanema no está confirmada; comprobarla antes de decidir entre revisión o configuración desde cero. |
| 2. Diseño | Home y plantilla de producto con placeholders, revisión del dueño. | Prototipo local implementado; no implica aprobación visual definitiva. |
| 3. Comercio | Variantes, combos, pagos, envíos, legales y SEO. | Variantes, combos y carrito simulados. Configuración comercial y checkout real pendientes en Tiendanube. |
| 4. Contenido | Incorporar fotos y fichas técnicas finales. | Pendiente de activos reales y datos validados. |
| 5. QA | Compra real de prueba, correcciones, publicación y capacitación. | Hay pruebas previas del prototipo. Falta verificar el flujo real en Tiendanube y preparar la entrega. |

Las fases de la tienda final son distintas de los bloques pequeños de desarrollo local. El prototipo no se migra automáticamente a Tiendanube; la adaptación depende de la plataforma y de la plantilla disponible.

### Pendientes y bloqueos vigentes

- Confirmar si existe una tienda Tiendanube y obtener acceso. El brief menciona Ipanema, pero el usuario puso en duda esa información el 28/10/2026. Si existe, revisarla; si no, preparar la configuración desde cero sin crear cuentas ni contratar servicios sin autorización.
- Fotos reales de campaña, modelos, variantes y detalles; logo final.
- Catálogo final, nombres o códigos, materiales, medidas y documentación de tratamientos UV, blue-light y antirreflejo.
- Regla de precios para 4 o más unidades; packaging y si está incluido.
- Proveedor de pagos, cuotas y condiciones; envíos, cobertura, plazos, costos y retiros.
- Textos de envíos, cambios, devoluciones, privacidad y términos validados; respuestas definitivas de FAQ.
- Titular, razón social, CUIT, domicilio, correo, canales de contacto, dominio y redes.
- Confirmación escrita de entregables, revisiones, incorporación posterior de fotos, plazos y gastos de terceros del desarrollo final.

Los datos faltantes se mantienen como pendientes. Los costos internos del brief son privados y no se publican en el sitio.

### Verificación y continuidad

Los resultados de navegador y Lighthouse informados en las actualizaciones del 27/10/2026 son antecedentes. No se ejecutaron nuevamente durante esta actualización documental. El recorrido reproducible está en `README.md`, sección «Recorrido de prueba manual».

Cada bloque requiere explicación previa de alcance y archivos, y entrega posterior de resumen, prueba, pendientes y commit sugerido. Esperar confirmación antes del siguiente bloque. No hacer commit ni push sin autorización explícita ni borrar archivos sin consultar.

## Verificación del prototipo — 28/10/2026

Base probada: commit `fcffbd2`, con la aplicación sin modificaciones. Se utilizó el navegador integrado sobre `http://127.0.0.1:8001`, con servidor Python limitado a la interfaz local. Esta revisión no incluye nuevas mediciones de Lighthouse.

### Resultados comprobados

| Prueba | Resultado observado |
|---|---|
| Filtro rojo en home | El estado anuncia «Mostrando 1 modelo con cristal rojo». La inspección del código confirma el uso de la clase `is-hidden`; no usa el atributo HTML `hidden`. Falta completar la comprobación visual de los tres filtros. |
| Botón de combo de 2 | Muestra el toast de 2 anteojos por $79.000 y explica que se eligen los modelos. |
| Ficha y variantes | Se abrió Modelo 01 desde la home. Elegir Azul/Rojo actualizó la imagen a `modelo-01-azul-rojo.svg`; elegir la miniatura naranja actualizó el texto alternativo a Azul/Naranja. |
| Agregar al carrito | La línea conservó Modelo 01, armazón Azul y cristal Naranja. |
| Totales 1/2/3 | $49.000 / $79.000 / $99.000 al modificar cantidades de una línea. |
| Combo mixto de 2 | Modelo 01 Azul/Naranja y Modelo 02 Negro/Naranja: total $79.000. |
| Checkout demo con 3 | Abrió el aviso de demostración y se cerró con «ENTENDIDO». |
| Caso 4+ | Con 4 unidades: «A confirmar» y botón de checkout deshabilitado. |
| Persistencia | Tras recargar, se conservaron las 4 unidades y el precio pendiente. |
| Sincronización entre pestañas | El resumen de la segunda pestaña pasó a 3 unidades y $99.000; el contador del header quedó en 4. Es un fallo pendiente. |
| Quitar una de dos líneas | Se quitó Modelo 02 y el foco pasó al botón para quitar Modelo 01. |
| Cantidad mínima y foco | Al restar de 2 a 1, el foco terminó en `body`. Es un fallo pendiente. |
| Ficha sin parámetro | Se mostró Modelo 01. |
| Modelo inválido | El título cambió a «Modelo no encontrado» y apareció el aviso, pero la ficha original siguió visible. Es un fallo pendiente. |
| Responsive | En home, producto, carrito y las cuatro páginas de ayuda, `scrollWidth` coincidió con `clientWidth` a 390 y 1280 px: sin desborde horizontal medido. Inspección visual de home y producto en móvil. |
| Ayuda | Las cuatro páginas cargaron con su título correspondiente y el aviso «Estructura de demostración». |
| Referencias locales | Revisión estática de los 7 HTML: sin archivos locales faltantes en `href`, `src` y `srcset`. No equivale a verificar todos los destinos con fragmentos. |
| Consola | Los registros de error/advertencia capturados en la pestaña secundaria devolvieron una lista vacía. |

### Fallos reproducidos y siguiente bloque propuesto

1. **Ficha visible para modelo inválido:** abrir `producto.html?modelo=99`. `#product-page` recibe `hidden`, pero `.product-page { display: grid; }` lo mantiene visible (altura medida mayor que cero). Revisar el respeto de `hidden` en CSS y también los estados ocultos del carrito.
2. **Contador desactualizado en otra pestaña:** abrir dos carritos con 4 unidades y restar una en la primera. La segunda muestra resumen de 3 y header de 4. El manejador `storage` del carrito renderiza las líneas, pero no actualiza el contador compartido. Corregir la sincronización desde la lógica compartida.
3. **Pérdida de foco en el límite de cantidad:** bajar una línea de 2 a 1. El botón de restar se deshabilita y `restoreFocus()` no elige una alternativa. Corregir la selección de un control habilitado y verificar también el máximo de 9.

Archivos previstos para ese bloque: `css/styles.css`, `js/store.js`, `js/cart.js` y este documento. No se aplicaron correcciones durante la verificación; requieren confirmación del siguiente bloque.

### Pruebas incompletas y limitación de la sesión

Al pulsar «VACIAR CARRITO», el navegador de automatización agotó el tiempo de espera y la pestaña principal quedó inaccesible. La API de diálogos no permitió recuperar la confirmación. Los clics posteriores en la pestaña secundaria no produjeron los cambios esperados, por lo que no se consideran evidencia de fallos adicionales del sitio. Las navegaciones directas y lecturas de DOM permitieron continuar las comprobaciones de contenido y dimensiones.

Quedaron pendientes: confirmar/cancelar el vaciado, quitar la última línea y verificar el estado vacío, interacción del menú móvil, navegación activa al hacer scroll, filtros completos, recorrido de teclado y foco visible, límite máximo de cantidad, y repetición de Lighthouse. El bloqueo de automatización no demuestra por sí mismo un defecto de «Vaciar carrito».

## Correcciones posteriores a QA — 28/10/2026

Bloque autorizado por el usuario después de la verificación. Cambios aplicados:

- **`css/styles.css`:** regla global `[hidden] { display: none !important; }`. El atributo `hidden` ahora prevalece sobre `display: grid` y otros layouts; evita mostrar la ficha inválida o el resumen de un carrito vacío.
- **`js/store.js`:** función `notifyCartChange(cart)` compartida por el guardado local y el evento `storage`. Actualiza el contador y su `aria-label`, y emite `prisma:cartchange` para que cada página interesada actualice su contenido. El listener solo procesa el almacenamiento local y la clave del carrito (o un vaciado general); no vuelve a guardar, por lo que no genera ciclos entre pestañas. Reinicia la copia en memoria antes de releer para contemplar eliminación de la clave o limpieza del almacenamiento.
- **`js/cart.js`:** se eliminó el listener de `storage` específico de la página, ya cubierto por la notificación compartida. En `restoreFocus()`, si el botón de cantidad elegido queda deshabilitado, se enfoca un botón de cantidad habilitado de esa misma línea: sumar al llegar a 1, restar al llegar a 9.

Pruebas nuevas realizadas en navegador sobre `http://127.0.0.1:8002` para evitar la caché de los recursos de la sesión anterior:

- Modelo inválido: `#product-page` tiene `display: none`; se ve el aviso de modelo no encontrado.
- Carrito inicialmente vacío: estado vacío visible y layout de compra oculto.
- Al agregar desde la ficha, aparecen la línea y el resumen; precio de 1: $49.000 y de 2: $79.000.
- Contador de una home abierta en otra pestaña: cambia a 2 sin recargar.
- Dos carritos abiertos: al llegar a 9, el resumen y el contador secundario muestran 9.
- Teclado: restar de 2 a 1 con Enter deja el foco visible en sumar; subir a 9 deja el foco en restar y deshabilita sumar.
- Con 4 unidades: precio «A confirmar» y checkout bloqueado. Con 3: $99.000; tras recargar se conservan cantidad y total.
- Quitar la última línea: ambos carritos pasan al estado vacío, el contador secundario marca 0 y el foco local queda en «VER LA COLECCIÓN».
- Menú móvil: abre con `aria-expanded="true"` y cierra al elegir Colección. Filtros visibles: amarillo muestra 01/04, naranja 02 y rojo 03.
- Ficha a 390 px: sin desborde horizontal medido. Registros de error/advertencia de la pestaña principal: vacíos en el recorrido del carrito.

Pendiente de esta revisión: confirmar/cancelar «Vaciar carrito» mediante su diálogo nativo, recorrido completo de teclado y navegación activa al hacer scroll, nuevas mediciones Lighthouse y comprobación directa de eliminación externa de la clave del carrito. No se modificaron los precios ni las reglas de negocio. No se agregaron dependencias.

## Continuación de QA: teclado y navegación — 28/10/2026

Se continuó sobre los cambios sin commit del bloque anterior, sin modificar adicionalmente HTML, CSS ni JavaScript.

- El primer Tab enfoca «Saltar al contenido» con `:focus-visible` y contorno `solid`; el enlace se puede activar con Enter.
- Al navegar por el header a Combos y FAQ, se verificó `aria-current` en `#combos` y `#faq`, respectivamente. El header incorpora `is-scrolled` tras el desplazamiento.
- La primera pregunta de FAQ abre su elemento `details` con Enter.
- Los selectores Azul y Rojo responden a Enter/Espacio y quedan con `aria-pressed="true"`.
- Se agregó al carrito con Enter y se abrió el checkout demo con Enter. El foco inicial del diálogo quedó en «Cerrar aviso»; Escape lo cerró y devolvió el foco a `#checkout-button`.

Esto comprueba los recorridos indicados, no una auditoría exhaustiva de accesibilidad ni todos los controles de todas las páginas.

No se pudo completar Lighthouse: la herramienta de consola no está instalada, y el intento de abrir Chrome mediante control de aplicaciones agotó la espera de autorización de la aplicación. No se instalaron paquetes ni se modificaron dependencias. La confirmación/cancelación nativa de «Vaciar carrito» sigue pendiente por la limitación del navegador de automatización documentada anteriormente. No se sustituyen estos resultados por las mediciones históricas.

### Explicación del flujo corregido

En una modificación local, `saveCart()` normaliza los ítems, actualiza la copia en memoria e intenta persistir. Después llama a `notifyCartChange()`, que actualiza el contador y emite `prisma:cartchange`; `cart.js` escucha ese evento y renderiza líneas y resumen.

En otra pestaña, el navegador emite `storage`. El listener de `store.js` filtra el almacenamiento y la clave, limpia la copia anterior en memoria, relee el carrito y llama al mismo notificador. No llama a `saveCart()`: así evita escrituras innecesarias y ciclos de notificaciones. Todas las páginas cargan `store.js`, por eso el contador también se sincroniza en home, producto y ayuda.

Cada render del carrito reemplaza los controles anteriores. Para mantener la navegación por teclado, `focusAfterRender` recuerda línea y acción antes del cambio; `restoreFocus()` busca el nuevo botón equivalente. Si se deshabilitó por llegar a 1 o 9, busca otro botón de cantidad habilitado en esa misma línea y lo enfoca.

La regla CSS `[hidden]` hace respetar el estado que JavaScript ya establece. `!important` se limita a la propiedad `display` de los elementos con ese atributo, para que el ocultamiento no dependa de las reglas de layout de cada componente.

## Hero compacto con carrusel manual — 28/10/2026

Cambio solicitado por el usuario: reducir el hero y convertirlo en carrusel.

- `index.html`: tres diapositivas con placeholders locales existentes (campaña responsive, editorial de color y cierre editorial). Un único titular y CTA permanecen fijos. Controles anterior/siguiente, tres indicadores con `aria-pressed`, contador anunciado con `role="status"` y aviso visible «IMÁGENES DEMO».
- `css/styles.css`: altura mínima de escritorio `clamp(440px, 56vh, 520px)` en lugar de `clamp(600px, 84vh, 780px)`; móvil de 680 a 460 px. Se ajustaron padding y tipografía móvil para reservar espacio a los controles de 44 × 44 px. Se retiró `width: 100%` de `.hero-content` para respetar los márgenes de `.container`.
- `js/app.js`: `heroIndex` guarda la imagen activa. `showHeroSlide()` calcula el índice circular, aplica `hidden` a las otras imágenes y actualiza indicadores y contador. Un listener en el contenedor distingue indicadores y flechas mediante atributos `data-*`. Solo se habilita si existen controles y al menos dos imágenes; en las subpáginas no se inicializa. Sin temporizadores ni transiciones entre imágenes: el usuario controla el avance y no se agrega movimiento. Sin JavaScript queda visible la primera imagen y los controles permanecen ocultos.
- `README.md`: se documentó el carrusel entre las funcionalidades actuales.

Verificado en navegador: siguiente 1→2, selección directa de 3, ciclo 3→1 y anterior 1→3; una sola diapositiva visible; Enter y Espacio activan los controles; contador e indicadores sincronizados. Sin errores/advertencias en la consola capturada. Medidas: aproximadamente 488 px de alto a 1280 px de ancho y 460 px a 390 px. Sin desborde horizontal en ambos tamaños e inspección visual del hero en escritorio y móvil.

Para probar: abrir la home, recorrer flechas e indicadores con mouse o Tab + Enter/Espacio y comprobar el acceso a Colección. Las fotos finales siguen pendientes. No se ejecutó Lighthouse en este bloque. No se hicieron commits ni push.

### Revisión del usuario y aclaración de Tiendanube

El usuario informó que funciona y autorizó el commit de los cambios. Esa confirmación no sustituye las mediciones Lighthouse ni las pruebas específicas que siguen documentadas como pendientes. También indicó que cree que no hay una versión previa en Tiendanube: su existencia y el uso de Ipanema quedan sin confirmar, aunque figuren en el brief original. El siguiente paso en plataforma depende de comprobar ese estado.

## Incorporación de `prisma_elementos.zip` — 28/10/2026

Autorizado por el usuario: incorporar imágenes en sus ubicaciones y revisar el resultado. Los 28 PNG se copiaron sin modificar a `assets/images/referencias/`; no se borraron ni reemplazaron los SVG originales.

- Logos: monocromático transparente en los headers y principal a color transparente en los footers de las siete páginas. Son referencias para el prototipo, no una confirmación de archivos finales de marca.
- Home: campaña en la primera diapositiva; editoriales de tres colores y cierre en las otras dos y en sus secciones correspondientes. Detalles y composiciones de combos en sus bloques. CSS encuadra las imágenes para evitar repetir textos/botones incrustados. Se mantiene el texto y los controles HTML accesibles.
- Productos: los cuatro PNG reemplazan la imagen de portada de cada modelo. `variantImage()` usa PNG únicamente si armazón y cristal coinciden con los valores de portada del catálogo demo. El resto sigue usando el SVG específico de esa combinación. Ficha, miniaturas, relacionados y carrito comparten esta selección.
- No se insertaron la captura del header, la paleta ni el mockup del celular como interfaz. Se conservaron junto con los logos alternativos para referencia.
- Se actualizaron textos alternativos y avisos de referencia/demo, y la nota de la galería explica por qué se alternan PNG y SVG.

Revisión en navegador: hero y editoriales en escritorio, combos y ficha en móvil, carga de logos en las cuatro páginas de ayuda. En home móvil a 390 px no hubo imágenes rotas ni desborde horizontal; producto y ayuda tampoco desbordaron. La variante Negro/Amarillo de Modelo 01 cargó el PNG; Azul/Amarillo volvió a su SVG. Agregar la combinación PNG al carrito conservó imagen y total $49.000. La consola capturada no registró errores/advertencias. Se ajustaron los recortes de hero y combos tras la primera revisión para retirar restos de letras y botones de las composiciones.

Limitación visual: las imágenes están ampliadas y se ven suaves o pixeladas, especialmente en editoriales y ficha. Los detalles originales tienen alrededor de 65 × 95 px. Los encuadres del prototipo sirven para evaluar composición, pero deben revisarse con fotos originales de alta resolución. No se ejecutó Lighthouse en este bloque.

Para probar: abrir home, recorrer las tres diapositivas, Colección, Colores, Combos, Detalles y Nosotros; entrar a una ficha, cambiar armazón/cristal y agregar al carrito; abrir ayuda y verificar los logos. Commit sugerido: `feat: incorporar imagenes de referencia de PRISMA al prototipo`. No se hizo commit ni push.

## Nuevos recursos JPG y SVG — 28/10/2026

Incorporación autorizada de `prisma_recursos.zip`: 14 JPG y dos logos SVG guardados sin modificar en `assets/images/recursos/`. Los recursos anteriores permanecen conservados.

- Las siete páginas usan el SVG oscuro en header y claro en footer. Los JPG reemplazan los PNG de home y portada de producto; se actualizaron las dimensiones HTML según cada archivo.
- La primera diapositiva usa `<picture>` con `hero_mobile.jpg` hasta 700 px y `hero_desktop.jpg` en escritorio.
- Se eliminaron los estilos de zoom al 220%, desplazamiento y ventanas de recorte que ocultaban textos y botones de los viejos PNG. Los combos se muestran completos con proporción 16:9 y `object-fit: contain`.
- `variantImage()` devuelve el nuevo JPG para las combinaciones de portada y mantiene el SVG específico en las demás. Se actualizaron notas y documentación; las imágenes continúan siendo referencias, sin confirmar fotografía real del catálogo.

Verificación en navegador sobre `http://127.0.0.1:8004`: inspección visual de hero y combos en escritorio, recorrido de las tres diapositivas, hero móvil servido a 1080 × 1350 px según `currentSrc`, home sin imágenes rotas, sin desborde horizontal en home/ficha/carrito a 390 px y sin errores/advertencias capturados. Modelo 01 Negro/Amarillo carga JPG; Azul/Amarillo carga SVG. Agregado al carrito conserva JPG y total $49.000. No se repitió Lighthouse.

Limitaciones: productos y detalles conservan suavidad visual; el banner Tres colores tiene franjas negras en su propio archivo. No se alteraron los originales para eliminarlas. Fotos definitivas y validación del catálogo siguen pendientes.

Prueba manual: recargar sin caché, recorrer carrusel y combos, cambiar variantes en ficha y agregar al carrito. Commit sugerido: `feat: actualizar recursos visuales con JPG y logos SVG`. No se hizo commit ni push.

## Detalles mejorados con IA en la home — 29/10/2026

El usuario autorizó colocar las tres versiones mejoradas en la página. Se copiaron desde `output/imagegen/` a `assets/images/recursos/detalle_1_referencia_ia.png`, `detalle_2_referencia_ia.png` y `detalle_3_referencia_ia.png` (1254 × 1254 px). Los JPG originales permanecen conservados.

`index.html` utiliza estas copias en «Estilo en cada detalle», con dimensiones HTML reales, textos alternativos actualizados y un aviso visible de que son referencias mejoradas con IA que pueden diferir del producto real. La reconstrucción de bisagra, superficies y logo requiere validación antes de cualquier uso comercial como fotografía del producto.

Verificado en navegador: las tres imágenes cargan a 1254 px de ancho natural; inspección visual en escritorio y a 390 px, sin desborde horizontal móvil ni errores/advertencias capturados. No se modificaron CSS, JavaScript, precios ni carrito en este bloque. El servidor local se reinició en el puerto 8004. No se ejecutó Lighthouse.

Para probar: abrir `index.html?revision=detalles-ia#details-title` y recorrer las tres tarjetas. Commit sugerido: `feat: incorporar referencias de detalle mejoradas con IA`. No se hizo commit ni push.

## Modelos mejorados con IA incorporados — 29/10/2026

El usuario autorizó reemplazar las imágenes de portada de los cuatro modelos. Se copiaron las cuatro muestras de `output/imagegen/` a `assets/images/recursos/producto_modelo1_referencia_ia.png` a `producto_modelo4_referencia_ia.png`, de 1448 × 1086 px, conservando los JPG originales.

Se actualizaron imágenes y dimensiones de colección en `index.html`, y `variantImage()` en `js/store.js` para compartir las nuevas portadas en ficha, miniaturas, relacionados y carrito. Los SVG siguen representando las otras variantes. Se actualizaron avisos visibles y textos alternativos en home, ficha y carrito para identificar las referencias mejoradas con IA. Los combos conservan sus composiciones JPG anteriores.

Verificado sobre `http://127.0.0.1:8005`: cargan las cuatro portadas a 1448 px; ficha Modelo 01 y sus tres relacionados usan las nuevas imágenes; cambiar a Azul/Amarillo carga el SVG correspondiente; volver a Negro/Amarillo y agregar al carrito conserva la portada IA y total $49.000. Ficha y carrito sin desborde a 390 px, inspección visual de colección en escritorio y ficha móvil, consola capturada sin errores/advertencias. No se ejecutó Lighthouse. Las reconstrucciones requieren validación y no acreditan fotografía real del catálogo.

Para probar: home → colección → ficha → variantes → carrito. Commit sugerido: `feat: incorporar portadas de modelos mejoradas con IA`. No se hizo commit ni push.

## Registro histórico — 27/10/2026

Se conserva el contenido original a continuación. Las menciones a carpeta vacía, ausencia de Git o código, funciones por implementar y decisiones por confirmar describen etapas anteriores. El plan histórico de inicializar Git y crear un primer commit no es una instrucción vigente.

---

## 0. Actualización — Bloque 1 ejecutado (27/10/2026)

El home ya está maquetado en `index.html`, `css/styles.css` y `js/app.js`, con placeholders locales en `assets/images/`. Se inicializó el repositorio Git y se agregaron `README.md` y `.gitignore`.

Verificado en navegador:

- Sin errores de consola ni referencias locales faltantes.
- Filtro por color, vista rápida, carrito demo, combos, menú móvil y navegación activa funcionando.
- Layout revisado a 390 px, 800 px y 1280 px.
- Lighthouse: accesibilidad 100, buenas prácticas 100 y SEO 100.

Sigue pendiente reemplazar placeholders por fotos reales, definir logo y completar los datos comerciales. El resto de este documento conserva la verificación y el plan originales como registro.

---

## 0b. Actualización — Bloque 2 ejecutado (27/10/2026)

Se completó el flujo de tienda del prototipo:

- **Ficha de producto** (`producto.html?modelo=01..04`): datos del modelo, selector de armazón y cristal, miniaturas sincronizadas, cantidad, precio por cantidad, acordeones de información pendiente y otros modelos.
- **Carrito demo** (`carrito.html`): líneas con variante y cantidad, quitar, vaciar, resumen, precio de combo y modal de checkout simulado.
- **Persistencia** en `localStorage` con la clave `prisma-cart-v1`; el contador del header se actualiza en todas las páginas.
- **Precios del brief:** 1 anteojo $49.000, 2 $79.000 y 3 $99.000. Para 4 o más se muestra «A confirmar» y se bloquea el checkout demo.
- **Páginas de ayuda:** `envios.html`, `cambios-y-devoluciones.html`, `privacidad.html` y `terminos.html`, con estructura de demostración y avisos de contenido pendiente.
- **Catálogo de prueba:** 4 modelos × 2 armazones × 3 cristales = 24 imágenes SVG de placeholder en `assets/images/`.

Verificado en navegador:

- Agregar al carrito desde la ficha, cantidades 1/2/3 con sus precios y caso 4+ pendiente.
- Persistencia tras recargar, quitar líneas, vaciar carrito y estado vacío.
- Modelo inválido (`?modelo=99`) y ficha sin parámetro (usa Modelo 01).
- Sin errores de consola ni enlaces locales rotos.
- Sin desborde horizontal a 390 px y 1280 px en producto, carrito y páginas legales.
- Lighthouse en producto, carrito y envíos: accesibilidad 100, buenas prácticas 100 y SEO 100.

Pendiente de confirmación: regla de precios para 4 o más, fotos reales, logo, materiales, medidas, envíos, pagos, políticas y canales de contacto.

---

## 1. Verificación realizada

| Ítem | Resultado |
|---|---|
| Carpeta del proyecto | `C:\proyectos\PRISMA-EYEWEAR` — estaba vacía. |
| Brief PDF | Leído completo: 7 páginas, 87.278 bytes. |
| Copia del PDF | Guardada en `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf`. |
| Integridad de la copia | SHA-256 idéntico al original: `2341C351...28841D`. |
| Logo | No hay archivo de logo en el proyecto ni en Descargas. |
| Fotografías | No hay fotos de producto ni de campaña. |
| Imagen de referencia | Recibí la imagen compuesta y 6 recortes por el chat; no están como archivos en el proyecto ni en Descargas. |
| Git | La carpeta **no es un repositorio** todavía. |
| Código | No hay `index.html`, CSS ni JS. |

**Conclusión:** tenemos todo el brief escrito, pero no los activos gráficos. Se puede maquetar con placeholders y reemplazarlos después.

---

## 2. Qué entendí del proyecto

PRISMA EYEWEAR es una marca argentina de anteojos de moda urbana con cristales de colores. El destino final es Tiendanube, pero como todavía no hay acceso, vamos a construir un **prototipo local** con HTML, CSS y JavaScript puros para validar diseño, navegación y simulación de compra.

El prototipo debe verse como una marca de moda: crema y negro como base, rojo/naranja/amarillo como acentos de los cristales, fotos grandes, tipografía sans serif en mayúsculas, mucho espacio y animaciones sutiles. Tiene que funcionar primero en celular.

La home tendrá header, hero, colección de 4 modelos, sección de colores, combos, nosotros y footer. Más adelante sumaremos ficha de producto, selección de variantes, carrito y cálculo de combos. **No hay pagos reales.**

Reglas clave: no inventar datos, precios, políticas, medidas, beneficios médicos ni historia de marca; marcar como pendiente todo lo que no esté confirmado; trabajar por bloques y esperar confirmación después de cada uno.

---

## 3. Puntos que necesito confirmar antes de maquetar

Estas son diferencias reales entre el PDF, tus instrucciones y la imagen de referencia. Propongo una resolución para cada una; decime si aprobás todo o qué cambio.

| # | Tema | Brief PDF | Chat / referencia | Propuesta |
|---|---|---|---|---|
| 1 | Título del hero | «DESCUBRÍ PRISMA» | «EL COLOR ES ACTITUD.» | Usar **«EL COLOR ES ACTITUD.»** en el hero, como en el chat y la referencia. |
| 2 | CTA del hero | «VER COLECCIÓN» | «DESCUBRÍ LA COLECCIÓN» | Usar **«DESCUBRÍ LA COLECCIÓN»**. |
| 3 | Eslogan de marca | «EL COLOR CAMBIA LA PERSPECTIVA.» | «EL COLOR ES ACTITUD.» | Usar **«EL COLOR ES ACTITUD.»** como titular de campaña y reservar «EL COLOR CAMBIA LA PERSPECTIVA.» para Nosotros/footer. |
| 4 | Título de la sección de colores | «ELEGÍ TU PERSPECTIVA» | «TRES COLORES. INFINITAS ACTITUDES.» | Usar **«TRES COLORES. INFINITAS ACTITUDES.»** y, si querés, «ELEGÍ TU PERSPECTIVA» como bajada. |
| 5 | Cantidad de modelos | 5 físicos; confirmar si se publican 4 | 4 modelos de prueba | Usar **4 modelos** (Modelo 01 a Modelo 04) en el prototipo. |
| 6 | Combo de 4 unidades | Verificar 1, 2, 3 y 4 unidades | Solo define 1, 2 y 3 | Dejarlo pendiente para el Bloque 8. No inventar un precio de 4. |
| 7 | Tipografía | Sans serif contemporánea, sin nombrar familia | La referencia parece una geométrica tipo Archivo/Montserrat | Propongo **Archivo** o **Inter** con fallback a sans-serif del sistema. Si preferís cero recursos externos, usamos solo fuentes del sistema. |
| 8 | Buscador en el header | «Búsqueda si aporta valor» | La referencia muestra ícono de búsqueda; el chat no lo pide | Omitirlo en el Bloque 2. Agregarlo solo si lo pedís. |
| 9 | Navegación | Inicio / Colección / Combos / Nosotros / FAQ / Contacto | La referencia muestra solo 4 ítems | Usar los **6 ítems del chat**; en celular van dentro del menú hamburguesa. |
| 10 | Nosotros y FAQ | Páginas institucionales | Secciones de la home | En el prototipo: secciones con ancla en la home. Si después querés páginas separadas, se agregan. |
| 11 | Logo | «Angular Original 01», archivo pendiente | Se ve el logo, pero no hay archivo | Usar **PRISMA EYEWEAR** como texto hasta recibir el archivo final. |
| 12 | Imágenes | Fotos reales pendientes | La referencia usa fotos de banco de imágenes | Crear **placeholders locales** con nombres claros. No presentarlos como productos reales. |
| 13 | Fotos de la referencia | Deben ser fotos reales del producto | Son fotos de banco/render, no productos PRISMA | Usarlas solo como **guía visual**. Si las querés como demo temporal, marcarlas como «imagen de referencia». |

---

## 4. Pendientes del dueño (no los decide el desarrollador)

Estos datos salen del brief y siguen sin confirmar:

- **Catálogo final:** ¿4 o 5 modelos? Nombres o códigos definitivos.
- **Fotografía:** fotos reales de cada modelo, variantes, campaña desktop y móvil, fotos de uso.
- **Datos comerciales:** titular, CUIT, condición fiscal, contacto, dirección de origen y correo.
- **Cobros:** proveedor de pagos, cuenta, comisiones, cuotas y política de descuentos.
- **Envíos:** retiro, operadores, cobertura, tarifas y plazos.
- **Ficha técnica:** materiales, medidas y documentación de tratamientos blue-light, UV y antirreflejo.
- **Logo final:** archivos aprobados y colores definitivos.
- **Políticas:** privacidad, términos, cambios y devoluciones.
- **Packaging:** estuche, presentación y si está incluido en el precio.
- **Dominio y redes:** dominio, Instagram, WhatsApp y email.
- **Regla de combos para 4 unidades o más.**
- **Texto de FAQ y respuestas concretas.**

---

## 5. Activos que necesito conseguir

1. `logo-prisma-claro.svg` / `logo-prisma-oscuro.svg` (o PNG transparente).
2. `hero-desktop.jpg` — horizontal, persona con anteojos.
3. `hero-mobile.jpg` — vertical, misma campaña.
4. `modelo-01-frontal.jpg` a `modelo-04-frontal.jpg`.
5. Fotos de variantes: `modelo-01-negro-amarillo.jpg`, etc.
6. Fotos de detalle: bisagra, patilla, cristal, logo.
7. Foto de cierre editorial.
8. Favicon e imagen para compartir.

Mientras tanto, en `assets/images/` van a ir placeholders con esos mismos nombres para que después solo haya que reemplazar archivos.

---

## 6. Próximo paso propuesto (todavía NO ejecutado)

**Bloque 1 — Estructura del proyecto y página inicial funcional.**

Crearía:

```text
PRISMA-EYEWEAR/
├── index.html
├── css/styles.css
├── js/app.js
├── assets/images/        (placeholders)
├── docs/                 (ya creado)
├── .gitignore
└── README.md
```

Incluiría:

- HTML semántico básico con las secciones vacías de la home.
- Variables de color y tipografía en CSS.
- Estilos base y un layout responsive mínimo.
- Un `app.js` con la estructura inicial.
- `README.md` con instrucciones para abrir el prototipo.
- `git init` y primer commit.

No avanzaría con el header ni el hero hasta que confirmes.

---

## 7. Cómo probar lo que ya está guardado

1. Abrí la carpeta `C:\proyectos\PRISMA-EYEWEAR`.
2. Entrá a `docs/`.
3. Leé `BRIEF-MAESTRO.md` para el brief completo.
4. Leé `INSTRUCCIONES-DE-TRABAJO.md` para las reglas del prototipo.
5. Leé `REFERENCIA-VISUAL.md` para la lectura de la imagen.
6. El PDF original quedó copiado en `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf`.

Para ver el prototipo, desde la carpeta del proyecto ejecutá `python -m http.server 8000` y abrí <http://localhost:8000>. El recorrido sugerido es: home → ficha de producto → agregar al carrito → carrito → páginas de ayuda del footer.
