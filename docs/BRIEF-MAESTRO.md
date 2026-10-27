# PRISMA EYEWEAR — Brief maestro de desarrollo web

> **Fuente original:** `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf`
> **Versión:** 1.0 — Octubre 2026
> **Transcripción verificada:** 27/10/2026
> **Uso:** documento de referencia del proyecto. Las notas marcadas como **[Observación]** son mías y no forman parte del brief original.

---

## Objetivo

Entregar una tienda Tiendanube completa, coherente con la identidad de PRISMA, lista para incorporar las fotos finales y publicar cuando se confirmen pagos, envíos, datos comerciales y políticas. **No es solamente una landing ni un catálogo visual.**

## Estado

La tienda Tiendanube **ya existe**; se trabajó sobre la plantilla **Ipanema**, portada provisional y ajustes visuales. Conservar lo útil, revisar lo hecho y no reconstruir sin necesidad.

## Presupuesto conversado

ARS 150.000 por desarrollo integral, según lo indicado por el dueño. Confirmar por escrito entregables, fotos posteriores, revisiones, plazos y gastos de terceros.

---

## 1. Decisiones de marca ya tomadas

| Elemento | Definición |
|---|---|
| **Marca** | PRISMA EYEWEAR |
| **Descripción breve** | Diseño, actitud y una nueva forma de mirar. |
| **Eslogan publicitario** | EL COLOR CAMBIA LA PERSPECTIVA. |
| **Posicionamiento** | Accesorio de moda urbana con una ejecución moderna, limpia y ligeramente elegante; no estética de óptica clínica. |
| **Público orientativo** | 18–35 años; moda urbana, accesorios, interés gamer/office como público secundario sin promesas sanitarias. |
| **Logo** | Se eligió una dirección de logo llamada «Angular Original 01»; el dueño debe entregar el archivo final. No inventar ni sustituir por otro sin aprobación. |

**[Observación]** En la tabla original, la fila «Descripción breve» incluye la palabra «Tiendanube». Por contexto se interpreta como un error de maquetado: la descripción de marca es «Diseño, actitud y una nueva forma de mirar.» y Tiendanube es la plataforma de venta. Conviene confirmarlo con el brief original.

---

## 2. Dirección de arte y experiencia visual

- **Paleta base:** blanco roto / crema suave, negro grafito y grises neutros. Rojo, amarillo y naranja aparecen como **acentos editoriales** relacionados con los cristales, no como bloques saturados.
- **Tipografía:** sans serif contemporánea, títulos contundentes, cuerpos legibles y jerarquía clara. Evitar fuentes decorativas excesivas.
- **Fotografía protagonista**, márgenes amplios, tarjetas limpias, botones visibles y poco ruido visual. Evitar pop-ups agresivos, carruseles automáticos rápidos y falsas urgencias.
- **Primero móvil:** portada, navegación, selector de variantes y checkout deben diseñarse y probarse desde el teléfono.
- **Tono verbal:** joven, seguro, breve y estético; español argentino natural. No usar clichés tipo «comprá ya antes de que se agote» ni afirmaciones médicas no verificadas.

### Referencias visuales esquemáticas

El brief aclara que las referencias visuales **no son fotografías reales ni capturas de la tienda**. El wireframe de la portada contiene:

- Header: `PRISMA · Buscar · Bolsa`
- Hero: `[FOTO EDITORIAL DE CAMPAÑA / PRODUCTO]` + `DESCUBRÍ PRISMA [VER COLECCIÓN]`
- Destacados: `[Modelo 01] [Modelo 02] [Modelo 03]`
- Exploración por color: `ELEGÍ TU PERSPECTIVA [AMARILLO] [NARANJA] [ROJO]`
- Identidad editorial: `EL COLOR CAMBIA LA PERSPECTIVA.`
- Combos: `1 x $49.000 · 2 x $79.000 · 3 x $99.000`
- Footer: `Información de compra | FAQ | Contacto | Legales`

> Se debe poder completar la portada con fotos definitivas sin rediseñar las secciones. Los espacios vacíos son marcadores de posición internos, **no imágenes genéricas que se publicarán como si fueran productos PRISMA**.

---

## 3. Arquitectura y menú de la tienda

- **Menú principal:** Inicio / Colección / Combos / Nosotros / Preguntas frecuentes / Contacto. Ajustar si Tiendanube requiere que Combos sea una colección o una sección anclada.
- **Header:** logo, menú compacto, búsqueda si aporta valor, acceso al carrito; navegación sticky solo si no roba pantalla móvil.
- **Footer:** Instagram, WhatsApp o email comercial, enlaces legales, políticas de cambios y devoluciones, información de envíos, datos comerciales exigibles.
- **Colección:** grilla de modelos, filtros por color de cristal y armazón cuando la plantilla lo permita; sin multiplicar innecesariamente páginas.
- **Página Nosotros:** texto corto de identidad y origen del proyecto, sin inventar historia de la marca o afirmar procesos no autorizados.

---

## 4. Home — instrucciones bloque por bloque

### Bloque 1 — Hero / portada

- Imagen editorial real futura con anteojos PRISMA.
- Título: **DESCUBRÍ PRISMA**.
- Subtexto opcional: «Diseño, actitud y una nueva forma de mirar.»
- CTA primario: **VER COLECCIÓN**.
- Garantizar que título y botón se lean sobre la imagen en móvil.
- No recortar los anteojos ni los rostros.

### Bloque 2 — Productos destacados

- Mostrar 3–6 productos representativos, con nombre, precio base y foto real.
- El enlace de cada tarjeta lleva a la ficha correcta.
- Sin reseñas o puntuaciones inventadas.

### Bloque 3 — Exploración por color

- Título: **ELEGÍ TU PERSPECTIVA**.
- Tres accesos: Amarillo, Naranja, Rojo.
- Cada uno abre un catálogo filtrado, una colección o una selección válida.
- El filtro debe tener correspondencia real con las variantes disponibles.

### Bloque 4 — Identidad editorial

- Título principal: **EL COLOR CAMBIA LA PERSPECTIVA.**
- Texto sugerido: «Un accesorio puede cambiar todo un look. En PRISMA, el color es parte de tu forma de expresarte.»
- Foto de estilo de vida futura.

### Bloque 5 — Promoción de combos

- Tres precios claros: **1 x $49.000 / 2 x $79.000 / 3 x $99.000**.
- CTA: **ARMÁ TU COMBO**.
- El mensaje debe explicar si se pueden mezclar modelos y colores.
- La promoción debe coincidir con el cálculo del carrito.

### Bloque 6 — Compra con confianza

- Pequeños módulos: «Hechos a pedido», «Elegí tu combinación», «Envíos y retiros» y «Consultanos».
- Publicar plazos y modalidades solo después de confirmarlos.

### Bloque 7 — Footer

- Contacto, redes, preguntas frecuentes, políticas, privacidad, términos y datos legales pertinentes.
- Evitar secciones vacías o enlaces que no funcionen.

---

## 5. Catálogo y ficha de producto

### Catálogo

- **Stock de base:** 5 modelos físicos de armazón, negro y azul; un modelo fue descartado inicialmente por tamaño/trabajo. Confirmar si se publican 4 modelos.
- **Cristales:** amarillo, naranja y rojo.
- Si son 4 modelos × 2 armazones × 3 cristales = **24 combinaciones de variante**, no 24 productos necesariamente.

### Ficha recomendada

- Nombre o código.
- Galería de 4–6 fotos.
- Precio unitario.
- Selección de armazón y cristal.
- Disponibilidad a pedido.
- Botón agregar al carrito.
- Información de combos.
- Medidas.
- Descripción estética.
- Características técnicas verificadas.
- Fabricación, despacho, envío y devoluciones.

### Comportamiento

- Validar que las opciones seleccionadas lleguen al pedido.
- Asociar la foto correcta a la variante cuando sea posible.
- Impedir combinaciones no disponibles.
- Mostrar confirmación de selección y errores claros.

### Nombres

- Usar códigos provisionales **Modelo 01–04** hasta que el dueño apruebe nombres comerciales.
- No bautizar modelos sin autorización.

### Microcopy sugerido para producto

> «Elegí el armazón y el color de cristal que mejor van con vos. Cada par se prepara a pedido.»

Complementar con medidas y composición cuando estén verificadas.

---

## 6. Precios, promociones y rentabilidad

| Cantidad | Precio total | Precio promedio por unidad |
|---|---|---|
| 1 | $49.000 | $49.000 |
| 2 | $79.000 | $39.500 |
| 3 | $99.000 | $33.000 |

- **Costo interno de referencia estimado por unidad:** $14.000 (armazón + cristales + mano de obra); estuche opcional estimado $700. **Estos costos son privados: no publicarlos en la web.** Precios y márgenes deben revisarse si cambian comisiones, envío o packaging.
- **Preferencia:** descuento automático por cantidad, admitiendo mezcla de modelos y colores. Si la configuración nativa no lo permite, proponer una alternativa concreta antes de instalar una app paga.
- Verificar 1, 2, 3 y 4 unidades; evitar descuentos acumulados no previstos, promociones duplicadas y errores de redondeo.
- Mostrar los precios correctamente en pesos argentinos con separador de miles; evitar visualizaciones ambiguas como «49.9».
- No activar cupones, descuentos por transferencia o cuotas con costo sin aprobación del dueño.

---

## 7. Pagos, envíos y postventa

### Pagos

- Configurar proveedor habilitado para Tiendanube y cuenta de cobro del titular.
- Probar compra de punta a punta, confirmación al cliente, notificación al vendedor y estado del pedido.
- El dueño vincula personalmente las credenciales sensibles.

### Envíos y retiros

- Definir origen de despacho, operadores, tarifas, zonas de cobertura, entrega local y retiro coordinado.
- Separar plazo de fabricación del plazo de transporte.
- Mostrar costo y modalidad antes de confirmar la compra.

### Gestión de pedidos

- El pedido debe informar modelo, color de armazón, color de cristal, cantidad, datos de entrega y estado del pago.
- Flujo simple: **recibido → confirmado → en fabricación → listo/despachado → entregado**.
- Configurar mails automáticos donde estén disponibles.

### Políticas y legales

- Redactar y publicar privacidad, términos, cambios/devoluciones, envíos y mecanismos exigibles para comercio electrónico argentino, incluyendo el derecho de arrepentimiento cuando corresponda.
- Validar datos fiscales y políticas antes de publicar; no copiar textos de terceros sin adaptar.

---

## 8. Fotos y activos: plan para no demorar el desarrollo

Se puede maquetar sin fotos finales; no conviene vender sin fotografías reales del artículo exacto. Reservar espacios, usar placeholders internos y reemplazarlos antes del lanzamiento.

| Activo | Mínimo recomendado / responsable |
|---|---|
| Foto principal de cada modelo | Frontal sobre fondo neutro; dueño produce, amigo carga. |
| Fotos de variantes | Color real de armazón y cristal; al menos las combinaciones ofrecidas deben poder reconocerse. |
| Ángulos adicionales | Tres cuartos, lateral, detalle de patillas y lentes. |
| Foto con persona | Una o dos por modelo prioritario; escala y estilo de uso. |
| Campaña para home | Una imagen horizontal y una composición vertical apta para celular. |
| Logo | PNG transparente + SVG o equivalente vectorial; versiones clara y oscura. |
| Redes | Imagen de perfil, portadas e imágenes compartidas si se incluyen en el alcance. |

**Dirección fotográfica:** fondos beige/blanco/gris, luz natural difusa, encuadres limpios, vestuario urbano y color de lente fiel a la realidad. No reemplazar producto real por imágenes generadas que puedan inducir a error.

---

## 9. Contenidos y textos base

### Nosotros — borrador editable

> «PRISMA nace de una idea simple: usar el color como parte del estilo. Creamos anteojos para quienes disfrutan expresarse a través de los detalles. Diseños versátiles, combinaciones personales y una nueva forma de mirar.»

### FAQ que debe existir

- ¿Cómo elijo el modelo, color de armazón y cristal?
- ¿Los anteojos se hacen a pedido? ¿Cuánto tarda la preparación?
- ¿Qué medidas tienen los armazones?
- ¿Qué características técnicas tienen los cristales? (solo datos verificados)
- ¿Cómo se paga? ¿Qué métodos están disponibles?
- ¿A qué lugares hacen envíos? ¿Cuánto cuestan? ¿Hay retiro?
- ¿Cómo funcionan los combos y puedo mezclar modelos?
- ¿Cómo solicito cambios, devoluciones o ayuda con mi pedido?

Las respuestas concretas sobre plazos, certificaciones, tarifas y políticas quedan **pendientes hasta su validación**. Evitar respuestas inventadas.

---

## 10. Requisitos técnicos y calidad de entrega

- Diseño responsive en móvil y desktop; verificar iPhone y Android con tamaños de pantalla distintos.
- Optimizar imágenes para buena velocidad y calidad; texto legible, contraste suficiente y botones tocables.
- SEO básico: título y descripción por página, URLs limpias, nombres de productos descriptivos, alt text real, favicon y vista previa al compartir enlaces.
- Analytics / Pixel: dejar previsto; instalar solo si el dueño define cuentas y consentimiento/aviso aplicable.
- Seguridad: roles de acceso, contraseñas no compartidas, cuentas a nombre del dueño y revocación del colaborador al finalizar.
- Revisar enlaces, navegación, formularios, botones, carrito, variantes, promociones, checkout, emails, medios de pago y tarifas.
- No usar testimonios, certificaciones, reviews ni contadores ficticios.
- Entregar una explicación breve de cómo editar productos, precios, imágenes, promociones y gestionar pedidos.

---

## 11. Pendientes del dueño — decisiones que NO debe inventar el desarrollador

| Prioridad | Pendiente | Qué entregar / decidir |
|---|---|---|
| Alta | Catálogo final | Confirmar 4 o 5 modelos; fotos de cada uno; nombres o códigos. |
| Alta | Fotografía | Fotos reales, banner desktop/móvil y fotos de uso. |
| Alta | Datos comerciales | Titular, CUIT, condición fiscal, contacto, dirección de origen y correo. |
| Alta | Cobros | Cuenta y proveedor; comisiones, cuotas y política de descuentos. |
| Alta | Envíos | Retiro, operadores, cobertura, tarifas y plazos confirmados. |
| Alta | Ficha técnica | Materiales, medidas y documentación de tratamientos blue-light, UV y antirreflejo. |
| Media | Logo final | Archivos de la versión aprobada y colores definitivos. |
| Media | Políticas | Definir proceso comercial y validar textos legales. |
| Media | Packaging | Estuche, presentación y si se incluye en el precio. |
| Media | Dominio / redes | Dominio a comprar, usuario de Instagram, WhatsApp y email. |

---

## 12. Tareas del desarrollador — entregables exigibles

- Auditar la Tiendanube existente y proponer ajustes sobre Ipanema antes de rehacerla.
- Definir guía visual (colores, fuentes, espaciado, botones, fotografía) y aprobar home en móvil.
- Construir home completa, catálogo, fichas, navegación, páginas institucionales, FAQ y footer.
- Cargar productos, variantes, precios y contenido aprobado.
- Configurar promoción por cantidad y verificar combinaciones mixtas.
- Configurar junto al dueño pagos, envíos, emails, políticas y contacto.
- Preparar los espacios de fotos y luego colocar las fotos finales según lo acordado.
- Optimizar SEO básico, imágenes y experiencia móvil.
- Hacer pruebas documentadas de compra y corregir errores.
- Entregar accesos bajo control del dueño y mini capacitación de administración.

---

## 13. Criterios de aceptación antes de publicar

- Todas las fotos de productos son reales y representan las variantes vendidas.
- Se puede comprar 1 por $49.000, 2 por $79.000 y 3 por $99.000 según las reglas aprobadas.
- El checkout cobra el importe correcto, identifica variantes y comunica pedido y pago.
- El costo de envío y los tiempos informados coinciden con la operación real.
- No hay textos de prueba, links rotos, botones vacíos ni políticas incompletas.
- La tienda funciona correctamente desde teléfono, sin desbordes ni imágenes cortadas.
- El dueño puede editar productos, fotos y precios sin depender del desarrollador.
- Queda acordado quién reemplaza fotos, cuántas rondas de cambios hay y qué costos externos se pagan aparte.

---

## 14. Secuencia de ejecución sugerida

- **Fase 1 — Inmediata:** acceso de colaborador, revisión de tienda actual, confirmación de alcance y entrega de referencias/logo.
- **Fase 2 — Diseño:** home y plantilla de producto con placeholders, revisión del dueño.
- **Fase 3 — Comercio:** variantes, combos, pagos, envíos, legales y SEO.
- **Fase 4 — Contenido:** incorporación de fotos y fichas técnicas finales.
- **Fase 5 — QA:** compra de prueba, correcciones, publicación y capacitación.

> **Regla de trabajo:** lo definido en este brief se implementa; los pendientes se consultan antes de publicar. No tomar decisiones comerciales, técnicas o legales por suposición.

---

*FIN DEL BRIEF — Versión 1.0 — Documento listo para compartir con el desarrollador.*
