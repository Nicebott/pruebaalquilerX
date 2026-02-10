import { Wifi, Wind, Utensils, Car, MapPin, Droplets } from 'lucide-react';

export default function Location() {
  const amenities = [
    { icon: MapPin, title: 'Ubicación Central', description: 'Cerca de restaurantes' },
    { icon: Wind, title: 'Aire Acondicionado', description: 'Clima perfecto todo el día' },
    { icon: Utensils, title: 'Cerca de Restaurantes', description: 'Gastronomía de calidad cercana' },
    { icon: Car, title: 'Estacionamiento', description: 'Espacio seguro para tu vehículo' },
    { icon: Wifi, title: 'WiFi Gratis', description: 'Internet de alta velocidad' },
    { icon: Droplets, title: 'Cerca de la Playa', description: 'A minutos de aguas cristalinas' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ubicación y Comodidades
          </h2>
          <p className="text-lg text-gray-600">
            Disfruta de todas las comodidades modernas en el corazón de Las Terrenas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{amenity.title}</h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Tu Paraíso Te Espera</h3>
            <p className="text-blue-100 mb-6">
              La combinación perfecta de lujo, comodidad y ubicación privilegiada.
            </p>
            <ul className="space-y-3 text-blue-50">
              <li>• 5 minutos caminando a la playa</li>
              <li>• Restaurantes y comercios cerca</li>
              <li>• Zona tranquila y segura</li>
            </ul>
          </div>

          {/* 🔥 MAPA EXACTO 🔥 */}
          <div className="rounded-2xl overflow-hidden shadow-2xl min-h-[350px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1882.530897960479!2d-69.5503187!3d19.3231246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaefb6aee5d9733%3A0x155812d7428f27c4!2sApartamentos%20CASA%20MARIBEL%20las%20terrenas!5e0!3m2!1ses-419!2sdo!4v1770683965957!5m2!1ses-419!2sdo"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Apartamentos Casa Maribel"
  />
</div>

        </div>

      </div>
    </section>
  );
}
