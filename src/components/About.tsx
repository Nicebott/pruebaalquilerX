import { Waves, Palmtree, Sun, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Bienvenido a Las Terrenas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un paraíso escondido en la costa norte de la República Dominicana, donde las playas de arena blanca se encuentran con aguas cristalinas turquesas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Waves className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Playas Vírgenes</h3>
            <p className="text-gray-600">
              Disfruta de las playas más hermosas del Caribe con aguas tranquilas y cristalinas
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Palmtree className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Naturaleza Tropical</h3>
            <p className="text-gray-600">
              Rodeado de palmeras y vegetación tropical exuberante
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Sun className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Clima Perfecto</h3>
            <p className="text-gray-600">
              Sol todo el año con temperaturas cálidas ideales para vacaciones
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubicación Central</h3>
            <p className="text-gray-600">
              Cerca de los mejores restaurantes de la playa Las Ballenas 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
