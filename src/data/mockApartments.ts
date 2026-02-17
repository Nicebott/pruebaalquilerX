import { Apartment } from '../types';

export const mockApartments: Apartment[] = [
  {
    id: '1',
    title: 'Apartamento A - Casa Maribel',
    description: 'Cómodo apartamento Casa Maribel con 2 habitaciones en Las Terrenas. Ideal para familias pequeñas o grupos de amigos que buscan alojamiento de calidad y pasar unos días de descanso.',
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    price_per_night: 95,
    amenities: [
      'WiFi de alta velocidad',
      'Aire acondicionado',
      'Cocina completa',
      'A 3 minutos de la playa',
      'Estacionamiento',
      'Ropa de cama'
    ],
    images: [
      '/Apartamento A/1aa57a7a-6ddd-48a6-a49d-e29a325b7f38.avif',
      '/Apartamento A/70c1cdbf-3f94-4c96-94c0-29b597d6bfc5.avif',
      '/Apartamento A/740aef24-55f3-4637-9880-9d9ebc6322c6.avif',
      '/Apartamento A/780e0fad-a754-48be-bde6-52f544e7323f.avif',
      '/Apartamento A/bbfb88ca-3ae5-4571-8f51-4462adaa233e.jpg',
      '/Apartamento A/c2ef26d6-16ef-4ae1-8697-ee9c4b2ee67a.avif'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Apartamento B - Casa Maribel',
    description: 'Acogedor apartamento Casa Maribel de una habitación en Las Terrenas, perfecto para parejas o viajeros individuales. Alojamiento con ubicación privilegiada cerca de playas y restaurantes.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 90,
    amenities: [
      'WiFi incluido',
      'Aire acondicionado',
      'Cocina equipada',
      'Balcón privado',
      'Ducha moderna',
      'Ventiladores'
    ],
    images: [
      '/Apartamento B/cozy-bedroom-tropical-style.avif',
      '/Apartamento B/cozy-studio-apartment-tropical-beach-decor.jpeg',
      '/Apartamento B/modern-bathroom-compact.avif',
      '/Apartamento B/studio-apartment-kitchenette.avif'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Apartamento D - Casa Maribel',
    description: 'Apartamento Casa Maribel cómodo con 1 habitación en Las Terrenas. Una excelente opción de alojamiento para viajeros que desean disfrutar de la belleza de Las Terrenas sin gastar demasiado.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 85,
    amenities: [
      'WiFi rápido',
      'Aire acondicionado',
      'Cocina funcional',
      'Terraza',
      'A 3 minutos de la playa',
      'Ventiladores'
    ],
    images: [
      '/Apartamento D/23d1a17b-be30-4654-a771-d63bbc973a02.avif',
      '/Apartamento D/5a50bb5b-33e6-4cf9-82f5-2ffa65da6b40.avif',
      '/Apartamento D/a55d327f-449b-4def-b089-60ccf1ebc895.jpg',
      '/Apartamento D/ca922b07-7323-4506-acfb-377f9d80685a.jpg',
      '/Apartamento D/ea6e04d2-df1d-4404-b179-352ab8b9d324.avif'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Casa Pluda - Casa Maribel',
    description: 'Espaciosa Casa Pluda de Casa Maribel en Las Terrenas con 3 habitaciones y 3 baños. Alojamiento perfecto para grupos, familias o escapadas especiales. Comodidades completas y espacios amplios para disfrutar al máximo.',
    bedrooms: 3,
    bathrooms: 3,
    max_guests: 6,
    price_per_night: 180,
    amenities: [
      'WiFi premium',
      'Aire acondicionado central',
      'Cocina gourmet',
      'Sala de estar amplia',
      'Área de jardín',
      'Estacionamiento múltiple',
      'Piscina',
      'Servicio de limpieza'
    ],
    images: [
      '/casapluda/03b1f694-ab43-4733-a0f7-387d835bea77.jpg',
      '/casapluda/11d14fb8-f61e-40e8-8dda-54172c3c6fe9.jpg',
      '/casapluda/17974858-c5c3-4c5c-bdc6-f7b81f37de63.jpg',
      '/casapluda/3a47c8bc-eea4-4da0-a405-a0a42fbfe5e3.jpg',
      '/casapluda/440cf7b5-6447-4493-a968-8ee1f32420fe.jpg',
      '/casapluda/4ec74e39-e831-459c-9e09-0443c03f1b08.jpg',
      '/casapluda/71903675-48ac-4bd2-a9d2-d8142162a28b.jpg',
      '/casapluda/813edde7-d19a-49e5-b086-1ee2bcc686d6.jpg'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
