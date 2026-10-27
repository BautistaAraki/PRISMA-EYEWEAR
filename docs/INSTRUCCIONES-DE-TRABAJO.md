# Instrucciones de trabajo — Prototipo local PRISMA EYEWEAR

> **Origen:** mensaje del 27/10/2026 con el brief del proyecto.
> **Alcance:** estas reglas rigen la primera versión local. El brief maestro completo está en `docs/BRIEF-MAESTRO.md`.

---

## 1. Contexto

- PRISMA EYEWEAR es una marca argentina de anteojos de moda urbana, con cristales de colores.
- El objetivo final es una tienda online en **Tiendanube**.
- Todavía no hay acceso a la plataforma.
- Por eso se desarrolla primero un **prototipo funcional local** para ver el diseño, probar la navegación y simular compras.
- El prototipo **no será automáticamente compatible con Tiendanube**. Más adelante se adaptará el diseño y las funcionalidades que permita la plataforma.

## 2. Tecnologías

**Permitido:**

- HTML5 para la estructura.
- CSS3 para estilos y diseño responsive.
- JavaScript para la interactividad.
- Git para controlar los cambios.

**Prohibido por ahora:**

- React, Next.js, TypeScript, Node.js.
- Frameworks CSS (Bootstrap, Tailwind, etc.).
- Bases de datos.
- Dependencias innecesarias.

## 3. Identidad visual

- Estilo moderno, minimalista y elegante.
- Inspirado en marcas de moda urbana.
- Fotografías grandes y protagonistas.
- Espacios amplios y diseño limpio.
- Tipografía moderna y legible.
- Animaciones sutiles.

**Paleta aproximada:**

| Color | Hex |
|---|---|
| Crema | `#F4EEE7` |
| Negro | `#1A1A1A` |
| Rojo | `#D6453A` |
| Naranja | `#F39C3A` |
| Amarillo | `#F7E06B` |

- La imagen de referencia es una **referencia visual**, no una autorización para inventar un logo oficial.
- Si no existe un archivo de logo, usar temporalmente el nombre **PRISMA EYEWEAR** como texto.
- La tienda debe funcionar correctamente en computadora y celular.

## 4. Estructura de la página principal

### Header

- Logo PRISMA EYEWEAR.
- Inicio.
- Colección.
- Combos.
- Nosotros.
- Preguntas frecuentes.
- Contacto.
- Ícono de carrito.
- Menú adaptable a celulares.

### Hero principal

- Imagen grande de una persona usando lentes.
- Título: **«EL COLOR ES ACTITUD»**.
- Subtítulo: **«Diseño, actitud y una nueva forma de mirar»**.
- Botón: **«DESCUBRÍ LA COLECCIÓN»**.

### Colección

- Mostrar cuatro modelos de prueba: Modelo 01, Modelo 02, Modelo 03 y Modelo 04.
- Cada producto debe mostrar: imagen, nombre, precio, colores disponibles y botón para ver detalles.

### Colores

- Sección titulada **«TRES COLORES. INFINITAS ACTITUDES.»**
- Mostrar: Amarillo, Naranja y Rojo.

### Combos

- 1 anteojo: **$49.000**.
- 2 anteojos: **$79.000**.
- 3 anteojos: **$99.000**.
- Son los precios del brief. **No inventar otros descuentos.**

### Nosotros

- Presentar brevemente la identidad de PRISMA como marca de accesorios de moda urbana.

### Footer

- Contacto.
- Redes sociales.
- Preguntas frecuentes.
- Envíos.
- Cambios y devoluciones.
- Privacidad y términos.
- Los enlaces y datos no confirmados deben quedar identificados como **pendientes**, no inventados.

## 5. Productos y variantes

- Cuatro modelos de prueba.
- Cada modelo podrá tener:
  - Armazón **negro o azul**.
  - Cristales **amarillos, naranjas o rojos**.
- Estas combinaciones son **datos de demostración** hasta confirmar el catálogo definitivo.
- Más adelante se implementará:
  - Selección de variantes.
  - Detalle de producto.
  - Carrito de compras.
  - Cálculo de combos.
  - Control básico de cantidades.
- **No implementar pagos reales todavía.**

## 6. Imágenes

- Usar imágenes de prueba únicamente para el prototipo.
- Priorizar imágenes locales dentro de `assets/images`.
- Si no hay imágenes adecuadas, crear espacios reservados con nombres claros e indicar cuáles hay que conseguir.
- **No presentar imágenes genéricas como si fueran productos reales de PRISMA.**
- **No inventar características técnicas ni beneficios médicos de los cristales.**

## 7. Organización del proyecto

```text
PRISMA-EYEWEAR/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── images/
└── README.md
```

- Usar nombres claros para archivos, clases, funciones y variables.
- Separar HTML, CSS y JavaScript.
- La estructura se puede ampliar cuando sea necesario, sin complicarla de más.

## 8. Forma de trabajo

**Muy importante:**

- Trabajar por **bloques pequeños**.
- Antes de modificar archivos:
  1. Explicar qué vamos a construir.
  2. Indicar qué archivos se van a crear o modificar.
  3. Explicar brevemente por qué.
- Después de cada bloque:
  1. Resumir los cambios realizados.
  2. Explicar cómo probarlos en la computadora.
  3. Indicar errores o tareas pendientes.
  4. Sugerir un mensaje de commit de Git.
- **Detenerse y esperar confirmación.**
- No avanzar automáticamente al siguiente bloque.
- No borrar archivos existentes sin consultar.
- No agregar funcionalidades no acordadas.
- Si algo del diseño o del brief no está claro, **preguntar antes de decidir**.

## 9. Etapas del desarrollo

| Bloque | Objetivo |
|---|---|
| 1 | Crear la estructura del proyecto y una página inicial funcional. |
| 2 | Diseñar el header y el hero principal. |
| 3 | Crear las tarjetas del catálogo. |
| 4 | Implementar la sección de colores y combos. |
| 5 | Crear la página de detalle de producto. |
| 6 | Implementar selección de variantes. |
| 7 | Crear un carrito de compras de demostración. |
| 8 | Implementar el cálculo correcto de los combos. |
| 9 | Adaptar y probar el diseño responsive. |
| 10 | Revisar accesibilidad, navegación y errores. |
| 11 | Documentar el prototipo y preparar una futura adaptación a Tiendanube. |

## 10. Reglas de contenido

- No inventar datos comerciales, plazos, políticas, medidas, materiales ni certificaciones.
- No inventar historia de la marca.
- No usar testimonios, reseñas, puntuaciones ni contadores ficticios.
- No prometer beneficios médicos o sanitarios.
- Todo dato no confirmado se marca como **pendiente**.
