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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ubicación y Comodidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disfruta de todas las comodidades modernas en el corazón de Las Terrenas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Tu Paraíso Te Espera
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Experimenta la combinación perfecta de lujo y naturaleza. Nuestros apartamentos
              ofrecen la base ideal para explorar las maravillas de Las Terrenas mientras
              disfrutas del máximo confort y comodidad.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-blue-50">5 minutos a pie de la playa principal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-blue-50">Mejores restaurantes de la zona</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-blue-50">Ambiente tranquilo y seguro</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.2738272097846!2d-69.62427892346816!3d19.25537797096516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf5bfc49b7c28d%3A0x6f7e8e8e8e8e8e8e!2sLas%20Terrenas!5e0!3m2!1ses!2sdo!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación - Las Terrenas"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
