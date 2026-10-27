/* =========================================================
   PRISMA EYEWEAR — Datos de demostración
   Catálogo provisional, variantes y precios del brief.
   Todos los nombres y combinaciones son de prueba.
   ========================================================= */

window.PRISMA = window.PRISMA || {};

window.PRISMA.data = {
  price: 49000,

  products: [
    {
      id: '01',
      name: 'MODELO 01',
      defaultFrame: 'negro',
      defaultLens: 'amarillo',
      description: 'Anteojos de moda urbana con cristal de color. Cada par se prepara a pedido.'
    },
    {
      id: '02',
      name: 'MODELO 02',
      defaultFrame: 'negro',
      defaultLens: 'naranja',
      description: 'Anteojos de moda urbana con cristal de color. Cada par se prepara a pedido.'
    },
    {
      id: '03',
      name: 'MODELO 03',
      defaultFrame: 'negro',
      defaultLens: 'rojo',
      description: 'Anteojos de moda urbana con cristal de color. Cada par se prepara a pedido.'
    },
    {
      id: '04',
      name: 'MODELO 04',
      defaultFrame: 'azul',
      defaultLens: 'amarillo',
      description: 'Anteojos de moda urbana con cristal de color. Cada par se prepara a pedido.'
    }
  ],

  frames: [
    { id: 'negro', label: 'Negro', color: '#1A1A1A' },
    { id: 'azul', label: 'Azul', color: '#2C3A52' }
  ],

  lenses: [
    { id: 'amarillo', label: 'Amarillo', color: '#F7E06B' },
    { id: 'naranja', label: 'Naranja', color: '#F39C3A' },
    { id: 'rojo', label: 'Rojo', color: '#D6453A' }
  ],

  combos: [
    { qty: 1, price: 49000 },
    { qty: 2, price: 79000 },
    { qty: 3, price: 99000 }
  ]
};
