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
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg'
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
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
      'https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg'
    ],
    available: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
