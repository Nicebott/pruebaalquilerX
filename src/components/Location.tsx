import { Wifi, Wind, Utensils, Car, MapPin, Droplets } from 'lucide-react';

export default function Location() {
  const amenities = [
    { icon: Wifi, title: 'WiFi Gratis', description: 'Internet de alta velocidad' },
    { icon: Wind, title: 'Aire Acondicionado', description: 'Clima perfecto todo el día' },
    { icon: Utensils, title: 'Cerca de Restaurantes', description: 'Gastronomía de calidad' },
    { icon: Car, title: 'Estacionamiento', description: 'Espacio seguro' },
    { icon: Droplets, title: 'Cerca de la Playa', description: 'A minutos del mar' },
    { icon: MapPin, title: 'Ubicación Central', description: 'Zona privilegiada' },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[600px] sm:h-[700px] md:h-[800px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-light tracking-wide opacity-90">
              Las Terrenas, República Dominicana
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Casa Maribel
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed px-4">
              Tu destino perfecto en el paraíso caribeño. Alquiler de apartamentos, townhomes y servicios completos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-5xl mx-auto">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">
                          {amenity.title}
                        </h3>
                        <p className="text-xs text-white/80 hidden sm:block">{amenity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ubicación Privilegiada
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Nuestros apartamentos están ubicados en el corazón de Las Terrenas, a solo minutos de las playas más hermosas del Caribe y cerca de los mejores restaurantes de la zona.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700">5 minutos a pie de la playa principal</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700">Cerca de restaurantes de clase mundial</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700">Ambiente tranquilo y seguro</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700">Acceso fácil a todas las atracciones</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[500px]">
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
      </div>
    </section>
  );
}
