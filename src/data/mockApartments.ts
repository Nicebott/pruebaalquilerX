import { Apartment } from '../types';

export const mockApartments: Apartment[] = [
  {
    id: '1',
    title: 'Apartamento A',
    description: 'Cómodo apartamento con 2 habitaciones. Ideal para familias pequeñas o grupos de amigos que buscan pasar unos días de descanso en Las Terrenas.',
    bedrooms: 2,
    bathrooms: 1,
    max_guests: 4,
    price_per_night: 120,
    amenities: [
      'WiFi de alta velocidad',
      'Aire acondicionado',
      'Cocina completa',
      'Acceso a la playa',
      'Estacionamiento',
      'Ropa de cama'
    ],
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Apartamento B',
    description: 'Acogedor apartamento de una habitación, perfecto para parejas o viajeros individuales. Ubicación privilegiada cerca de playas y restaurantes de Las Terrenas.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 85,
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
    title: 'Apartamento D',
    description: 'Apartamento cómodo con 1 habitación. Una excelente opción para viajeros que desean disfrutar de la belleza de Las Terrenas sin gastar demasiado.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 80,
    amenities: [
      'WiFi rápido',
      'Aire acondicionado',
      'Cocina funcional',
      'Terraza',
      'Acceso a playa',
      'Ventiladores'
    ],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Casa Pluda',
    description: 'Espaciosa casa con 6 habitaciones y 6 baños. Perfecta para grandes grupos, familias o retiros corporativos. Comodidades completas y espacios amplios para disfrutar al máximo.',
    bedrooms: 6,
    bathrooms: 6,
    max_guests: 12,
    price_per_night: 380,
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
