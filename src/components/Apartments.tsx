import { useState } from 'react';
import { Home, Users, Bath, Bed, Check, Images } from 'lucide-react';
import { Apartment } from '../types';
import PhotoModal from './PhotoModal';
import { mockApartments } from '../data/mockApartments';

interface ApartmentsProps {
  onBookClick: (apartmentId: string) => void;
}

export default function Apartments({ onBookClick }: ApartmentsProps) {
  const apartments = mockApartments;
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Apartamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Espacios cómodos y elegantes diseñados para tu máximo confort
          </p>
        </div>

        {apartments.length === 0 ? (
          <div className="text-center py-12">
            <Home className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">
              Pronto tendremos apartamentos disponibles para ti
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {apartment.images && apartment.images.length > 0 && (
                  <div className="h-64 bg-gradient-to-br from-blue-200 to-cyan-200 overflow-hidden">
                    <img
                      src={apartment.images[0]}
                      alt={apartment.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {apartment.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {apartment.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">
                        {apartment.bedrooms} {apartment.bedrooms === 1 ? 'Habitación' : 'Habitaciones'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bath className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">
                        {apartment.bathrooms} {apartment.bathrooms === 1 ? 'Baño' : 'Baños'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">
                        {apartment.max_guests} Huéspedes
                      </span>
                    </div>
                  </div>

                  {apartment.amenities && apartment.amenities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Comodidades</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {apartment.amenities.slice(0, 6).map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">
                          ${apartment.price_per_night}
                        </div>
                        <div className="text-sm text-gray-600">por noche</div>
                      </div>
                      <button
                        onClick={() => onBookClick(apartment.id)}
                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                      >
                        Reservar Ahora
                      </button>
                    </div>
                    {apartment.images && apartment.images.length > 1 && (
                      <button
                        onClick={() => setSelectedApartment(apartment)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                      >
                        <Images className="w-4 h-4" />
                        Ver todas las fotos ({apartment.images.length})
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <PhotoModal
          isOpen={!!selectedApartment}
          images={selectedApartment?.images || []}
          title={selectedApartment?.title || ''}
          onClose={() => setSelectedApartment(null)}
        />
      </div>
    </section>
  );
}
