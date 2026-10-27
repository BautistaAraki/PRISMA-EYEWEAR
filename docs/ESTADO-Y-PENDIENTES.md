# Estado del proyecto y pendientes

> **Fecha de verificación:** 27/10/2026
> **Estado:** información guardada y verificada.

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
