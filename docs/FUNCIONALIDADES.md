# Funcionalidades relevadas del brief

> **Fuente:** `docs/PRISMA_EYEWEAR_Brief_Maestro_Web.pdf` (7 páginas).
> El PDF no tiene una sección llamada «Funcionalidades». Este listado reúne todas las capacidades, comportamientos y requisitos funcionales que aparecen repartidos en el documento.

**Etiquetas:**

- **Local:** se implementa en el prototipo HTML/CSS/JS.
- **Final:** se configura o implementa en Tiendanube.
- **Condicional:** depende de una decisión, de la plantilla o de un dato.
- **Pendiente:** falta confirmación del dueño.
- **Restricción:** no es una función, pero condiciona lo que se puede hacer.

---

## 1. Navegación y páginas

- **Home completa** con todas las secciones de la portada. `Local` `Final`
- **Menú principal:** Inicio / Colección / Combos / Nosotros / Preguntas frecuentes / Contacto. `Local` `Final`
- **Header:** logo, menú compacto, búsqueda si aporta valor y acceso al carrito. `Local` `Final`
- **Navegación sticky:** solo si no roba pantalla en móvil. `Condicional`
- **Menú adaptable a celulares.** `Local`
- **Footer:** contacto, Instagram/WhatsApp/email, FAQ, enlaces legales, información de envíos y datos comerciales. `Local` `Final`
- **Página Nosotros:** identidad y origen del proyecto, sin inventar historia. `Local` (sección) `Final` (página)
- **Página/sección Preguntas frecuentes.** `Local` `Final`
- **Página/sección Contacto.** `Local` `Final`
- **Colección:** grilla de modelos. `Local` `Final`
- **Ficha de producto:** página individual. `Local` `Final`
- **Combos:** sección, colección o página según lo permita Tiendanube. `Local` `Final` `Condicional`
- **Enlaces legales:** privacidad, términos, cambios y devoluciones, envíos. `Local` (estructura) `Final` (textos)

---

## 2. Home

- **Hero editorial:** imagen real, título, subtexto opcional y CTA. `Local`
- **Productos destacados:** 3 a 6 productos con nombre, precio base, foto real y enlace a la ficha. `Local`
- **Exploración por color:** Amarillo, Naranja y Rojo; cada acceso abre un catálogo filtrado, colección o selección válida. `Local` `Condicional`
- **Bloque de identidad editorial:** título, texto sugerido y foto de estilo de vida. `Local`
- **Promoción de combos:** tres precios, CTA y explicación de si se pueden mezclar modelos y colores. `Local`
- **Módulos de confianza:** «Hechos a pedido», «Elegí tu combinación», «Envíos y retiros» y «Consultanos». `Local` `Pendiente` (plazos y modalidades)
- **Footer completo.** `Local`
- **Diseño mobile-first:** portada, navegación, selector de variantes y checkout probados desde el teléfono. `Local` `Final`

---

## 3. Catálogo

- **Grilla de modelos** con tarjetas. `Local`
- **Tarjeta de producto:** imagen, nombre o código, precio base y enlace a la ficha. `Local`
- **Filtros por color de cristal y de armazón**, cuando la plantilla lo permita. `Condicional` `Final`
- **Nombres provisionales:** Modelo 01 a Modelo 04 hasta aprobación. `Local`
- **Catálogo de 4 o 5 modelos:** confirmar cuántos se publican. `Pendiente`
- **Variantes:** armazón negro o azul × cristal amarillo, naranja o rojo. Si son 4 modelos, son 24 combinaciones, no 24 productos. `Local` (demo) `Final`
- **Sin reseñas, puntuaciones ni contadores inventados.** `Restricción`

---

## 4. Ficha de producto

- **Galería de 4 a 6 fotos.** `Local`
- **Precio unitario:** $49.000. `Local`
- **Selector de armazón:** negro o azul. `Local`
- **Selector de cristal:** amarillo, naranja o rojo. `Local`
- **Disponibilidad a pedido.** `Local` `Pendiente` (plazos)
- **Botón agregar al carrito.** `Local` (demo)
- **Información de combos** dentro de la ficha. `Local`
- **Medidas**, cuando estén verificadas. `Pendiente`
- **Descripción estética.** `Local`
- **Características técnicas verificadas.** `Pendiente`
- **Información de fabricación, despacho, envío y devoluciones.** `Local` `Pendiente`
- **Validación de variantes:** las opciones seleccionadas deben llegar al pedido. `Local` `Final`
- **Foto correcta por variante**, cuando sea posible. `Local` `Final`
- **Bloqueo de combinaciones no disponibles.** `Local` `Final`
- **Confirmación de selección y errores claros.** `Local`
- **Microcopy:** «Elegí el armazón y el color de cristal que mejor van con vos. Cada par se prepara a pedido.» `Local`

---

## 5. Carrito y precios

- **Agregar al carrito** desde la ficha. `Local` (demo)
- **Control básico de cantidades:** sumar y restar. `Local` (demo)
- **Cálculo de combos:** 1 anteojo $49.000; 2 anteojos $79.000; 3 anteojos $99.000. `Local`
- **Descuento automático por cantidad**, admitiendo mezcla de modelos y colores. `Local` (demo) `Final`
- **Verificación de 1, 2, 3 y 4 unidades.** `Local` `Pendiente` (regla para 4 o más)
- **Prevención de descuentos acumulados no previstos.** `Local` `Final`
- **Prevención de promociones duplicadas.** `Local` `Final`
- **Prevención de errores de redondeo.** `Local`
- **Formato de pesos argentinos** con separador de miles; evitar «49.9». `Local`
- **Coherencia entre la promoción y el cálculo del carrito.** `Local` `Final`
- **Sin cupones, descuentos por transferencia ni cuotas con costo** sin aprobación del dueño. `Restricción`
- **Costos internos privados:** $14.000 por unidad y $700 de estuche no se publican. `Restricción`

---

## 6. Checkout y pagos (Tiendanube)

- **Checkout completo.** `Final`
- **Proveedor de pagos habilitado para Tiendanube.** `Final` `Pendiente`
- **Cuenta de cobro del titular.** `Final` `Pendiente`
- **Prueba de compra de punta a punta:** compra, confirmación al cliente, notificación al vendedor y estado del pedido. `Final`
- **Confirmación al cliente.** `Final`
- **Notificación al vendedor.** `Final`
- **Estado del pedido visible.** `Final`
- **Credenciales sensibles:** las vincula personalmente el dueño. `Final`
- **Sin pagos reales en el prototipo local:** solo simulación. `Restricción local`

---

## 7. Envíos y retiros

- **Origen de despacho.** `Pendiente`
- **Operadores de envío.** `Pendiente`
- **Tarifas.** `Pendiente`
- **Zonas de cobertura.** `Pendiente`
- **Entrega local.** `Pendiente`
- **Retiro coordinado.** `Pendiente`
- **Separar plazo de fabricación del plazo de transporte.** `Local` (mostrar) `Final`
- **Mostrar costo y modalidad antes de confirmar la compra.** `Final`

---

## 8. Pedidos y postventa

- **Datos del pedido:** modelo, color de armazón, color de cristal, cantidad, datos de entrega y estado del pago. `Final`
- **Flujo de estados:** recibido → confirmado → en fabricación → listo/despachado → entregado. `Final`
- **Mails automáticos** donde estén disponibles. `Final` `Condicional`
- **Políticas:** privacidad, términos, cambios y devoluciones, envíos. `Final` `Pendiente`
- **Derecho de arrepentimiento** y mecanismos exigibles para comercio electrónico argentino. `Final` `Pendiente`
- **Validación de datos fiscales y textos legales** antes de publicar. `Pendiente`
- **No copiar textos de terceros sin adaptar.** `Restricción`

---

## 9. Contenido, confianza y restricciones

- **Nosotros:** texto base de identidad. `Local`
- **FAQ con estas 8 preguntas:**
  1. ¿Cómo elijo el modelo, color de armazón y cristal?
  2. ¿Los anteojos se hacen a pedido? ¿Cuánto tarda la preparación?
  3. ¿Qué medidas tienen los armazones?
  4. ¿Qué características técnicas tienen los cristales?
  5. ¿Cómo se paga? ¿Qué métodos están disponibles?
  6. ¿A qué lugares hacen envíos? ¿Cuánto cuestan? ¿Hay retiro?
  7. ¿Cómo funcionan los combos y puedo mezclar modelos?
  8. ¿Cómo solicito cambios, devoluciones o ayuda con mi pedido?
  `Local` (estructura) `Pendiente` (respuestas)
- **Sin testimonios, certificaciones, reviews ni contadores ficticios.** `Restricción`
- **Sin promesas médicas o sanitarias.** `Restricción`
- **Datos no confirmados marcados como pendientes.** `Restricción`
- **Tono verbal:** joven, seguro, breve y estético; español argentino natural. `Local`
- **Sin clichés de urgencia** («comprá ya antes de que se agote»). `Restricción`

---

## 10. Técnico, SEO y accesibilidad

- **Diseño responsive** en móvil y desktop; verificar iPhone y Android. `Local` `Final`
- **Optimización de imágenes** para velocidad y calidad. `Local` `Final`
- **Texto legible, contraste suficiente y botones tocables.** `Local`
- **SEO básico:** título y descripción por página. `Local` `Final`
- **URLs limpias.** `Local` `Final`
- **Nombres de productos descriptivos.** `Final`
- **Alt text real.** `Local`
- **Favicon.** `Local`
- **Vista previa al compartir enlaces.** `Local`
- **Analytics / Pixel:** dejar previsto; instalar solo con cuentas definidas y consentimiento o aviso aplicable. `Condicional`
- **Seguridad:** roles de acceso, contraseñas no compartidas, cuentas a nombre del dueño y revocación del colaborador. `Final`
- **Revisión integral:** enlaces, navegación, formularios, botones, carrito, variantes, promociones, checkout, emails, medios de pago y tarifas. `Local` `Final`

---

## 11. Administración y entrega

- **Edición autónoma** de productos, fotos y precios por parte del dueño. `Final`
- **Explicación breve** de cómo editar productos, precios, imágenes, promociones y gestionar pedidos. `Final`
- **Accesos bajo control del dueño.** `Final`
- **Mini capacitación de administración.** `Final`
- **Pruebas documentadas de compra.** `Local` `Final`
- **Auditoría de la Tiendanube existente y ajustes sobre Ipanema** antes de rehacerla. `Final` `Pendiente` (acceso)

---

## 12. QA y criterios de aceptación

- Todas las fotos de productos son reales y representan las variantes vendidas.
- Se puede comprar 1 por $49.000, 2 por $79.000 y 3 por $99.000.
- El checkout cobra el importe correcto, identifica variantes y comunica pedido y pago.
- El costo de envío y los tiempos informados coinciden con la operación real.
- No hay textos de prueba, links rotos, botones vacíos ni políticas incompletas.
- La tienda funciona desde teléfono, sin desbordes ni imágenes cortadas.
- El dueño puede editar productos, fotos y precios sin depender del desarrollador.
- Queda acordado quién reemplaza fotos, cuántas rondas de cambios hay y qué costos externos se pagan aparte.

---

## 13. Qué entra en el prototipo local y qué queda para Tiendanube

| Funcionalidad | Prototipo local | Tiendanube final |
|---|---|---|
| Home, header, hero, navegación y footer | Sí (bloques 1–2) | Sí |
| Catálogo y tarjetas | Sí (bloque 3) | Sí |
| Sección de colores y combos | Sí (bloque 4) | Sí |
| Ficha de producto | Sí (bloque 5) | Sí |
| Selección de variantes | Sí, con datos demo (bloque 6) | Sí, con variantes reales |
| Carrito | Sí, demo (bloque 7) | Sí, real |
| Cálculo de combos | Sí (bloque 8) | Sí, configurado |
| Checkout y pagos | No | Sí |
| Envíos y tarifas | No | Sí |
| Gestión de pedidos y emails | No | Sí |
| Políticas y legales | Estructura y placeholders | Textos validados |
| SEO y analytics | Básico / previsto | Completo |
| Administración | No | Panel de Tiendanube |
| Responsive y accesibilidad | Sí (bloques 9–10) | Sí |
| Documentación y capacitación | Sí (bloque 11) | Sí |

---

## 14. Pendientes que condicionan funcionalidades

- Confirmar **4 o 5 modelos** y sus nombres o códigos.
- Definir la **regla de combos para 4 unidades o más**.
- Confirmar **proveedor de pagos**, comisiones, cuotas y política de descuentos.
- Confirmar **envíos**: retiro, operadores, cobertura, tarifas y plazos.
- Confirmar **características técnicas** de los cristales (blue-light, UV, antirreflejo) y medidas.
- Recibir el **logo final**.
- Validar **políticas, datos fiscales y textos legales**.
- Definir **packaging** y si el estuche está incluido.
- Definir **dominio, Instagram, WhatsApp y email**.
- Conseguir **fotografías reales**.
- Redactar las **respuestas de la FAQ**.

---

## 15. Trazabilidad

| Página del PDF | Contenido funcional |
|---|---|
| 1 | Marca, posicionamiento, tono, logo, dirección de arte. |
| 2 | Navegación, header, footer, home: hero, destacados, colores, identidad, combos, confianza. |
| 3 | Catálogo, ficha de producto, variantes, microcopy, precios. |
| 4 | Precios, costos internos, pagos, envíos, pedidos, políticas, fotos. |
| 5 | Fotos, Nosotros, FAQ, requisitos técnicos. |
| 6 | Requisitos técnicos, pendientes del dueño, tareas del desarrollador. |
| 7 | Criterios de aceptación y secuencia de ejecución. |
