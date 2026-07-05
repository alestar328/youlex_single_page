// ─────────────────────────────────────────────────────────────────────────────
// Fuente única de verdad de los datos del negocio (NAP: Name, Address, Phone).
// La usan el <head> de Layout (SEO / datos estructurados de Google) y las
// secciones visibles. Cambia un dato aquí y se actualiza en toda la web.
// ─────────────────────────────────────────────────────────────────────────────

// TODO: cuando tengas el dominio final, ponlo aquí (ej: 'https://youlexbarbers.com').
// Con él se activan automáticamente canonical, Open Graph completo y sitemap.
export const SITE_URL = '';

export const BUSINESS = {
  name: "Youlex Barber's",
  alternateNames: ['Youlex Barbería', 'Youlex Salon'],
  description:
    'Barbería en Terrassa especializada en cortes de pelo masculinos, arreglo y ' +
    'perfilado de barba, diseño de cejas y cuidado facial. Tradición y precisión en cada trazo.',

  phone: '+34627174137', // formato máquina (schema y enlaces tel:)
  phoneDisplay: '627 17 41 37', // formato humano (visible)

  address: {
    street: 'Carrer del Moixeró, 6',
    postalCode: '08227',
    city: 'Terrassa',
    region: 'Barcelona',
    countryCode: 'ES',
  },

  // Coordenadas de Carrer del Moixeró, Terrassa (OpenStreetMap)
  geo: { lat: 41.5692549, lng: 2.0406831 },

  // Lun–Sáb 10:00–20:00
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
    display: 'Lun – Sáb: 10:00 – 20:00',
  },

  instagramUrl: 'https://www.instagram.com/youlex_salon/',
  instagramHandle: '@youlex_salon',
  booksyUrl: 'https://booksy.com/es-es/63343_youlex-barbers_barberia_49408_terrassa',
  // Enlace corto para "abrir en Google Maps" (compartido por el negocio)
  mapsUrl: 'https://maps.app.goo.gl/2BsqotvNESVrB6gH7',
  // Iframe incrustable (sin API key) con pin etiquetado del negocio
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Youlex%20Barber%27s%2C%20Carrer%20del%20Moixer%C3%B3%206%2C%20Terrassa&hl=es&z=16&output=embed',

  priceRange: '€€',

  // Servicios y precios (según perfil de Booksy) para el catálogo del schema.
  services: [
    { name: 'Corte de pelo', price: '15.90' },
    { name: 'Corte de pelo + arreglo de barba', price: '21.90' },
    { name: 'Corte de pelo + diseño de cejas', price: '18.90' },
    { name: 'Perfilado de barba', price: '13.00' },
    { name: 'Arreglo de barba con vapor', price: '24.90' },
    { name: 'Cejas con hilo', price: '12.00' },
    { name: 'Limpieza facial premium', price: '39.90' },
  ],
} as const;
