import { Apartment } from '../types';

export const mockApartments: Apartment[] = [
  {
    id: '1',
    title: 'Apartamento Vista al Mar',
    description: 'Hermoso apartamento con vista panorámica al océano. Espacio luminoso y moderno con todas las comodidades para una estancia perfecta. Disfruta de impresionantes amaneceres desde tu balcón privado.',
    bedrooms: 2,
    bathrooms: 2,
    max_guests: 4,
    price_per_night: 120,
    amenities: [
      'WiFi de alta velocidad',
      'Aire acondicionado',
      'Cocina completa',
      'Balcón privado',
      'TV por cable',
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
    title: 'Suite Tropical Deluxe',
    description: 'Suite espaciosa rodeada de jardines tropicales. Perfecta para familias o grupos que buscan comodidad y privacidad. A pocos pasos de la playa principal de Las Terrenas.',
    bedrooms: 3,
    bathrooms: 2,
    max_guests: 6,
    price_per_night: 180,
    amenities: [
      'WiFi gratis',
      'Aire acondicionado',
      'Cocina equipada',
      'Piscina compartida',
      'Estacionamiento',
      'Lavadora'
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
    id: '3',
    title: 'Estudio Playa Coralina',
    description: 'Acogedor estudio ideal para parejas. Decoración moderna con toques caribeños. Ubicación privilegiada a solo 2 minutos caminando de la playa. Todo lo que necesitas para unas vacaciones románticas.',
    bedrooms: 1,
    bathrooms: 1,
    max_guests: 2,
    price_per_night: 85,
    amenities: [
      'WiFi incluido',
      'Aire acondicionado',
      'Kitchenette',
      'Terraza privada',
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
    id: '4',
    title: 'Penthouse Las Corales',
    description: 'Lujoso penthouse con vistas de 360 grados. Terraza amplia con jacuzzi privado y zona de barbacoa. El apartamento más exclusivo de nuestra colección, perfecto para una experiencia VIP en el paraíso.',
    bedrooms: 3,
    bathrooms: 3,
    max_guests: 8,
    price_per_night: 250,
    amenities: [
      'WiFi premium',
      'Aire acondicionado central',
      'Cocina gourmet',
      'Jacuzzi privado',
      'BBQ en terraza',
      'Smart TV',
      'Sistema de sonido',
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
