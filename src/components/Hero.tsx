import { ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToApartments = () => {
    document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/WhatsApp_Image_2026-02-09_at_6.08.04_PM.jpeg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2">
            Casa Maribel Las Terrenas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto px-4">
            Tu mejor alojamiento en Las Terrenas - Apartamentos y Casa Pluda
          </p>
          <div className="pt-2 sm:pt-4 flex flex-row items-center justify-center gap-2 sm:gap-3 px-4 flex-nowrap">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 flex-shrink-0">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <p className="text-xs sm:text-xl md:text-2xl font-semibold text-white text-center whitespace-nowrap">
              Las Terrenas, República Dominicana
            </p>
          </div>
          <button
            onClick={scrollToApartments}
            className="mt-6 sm:mt-8 inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explorar Apartamentos
          </button>
        </div>

        <button
          onClick={scrollToApartments}
          className="absolute bottom-6 sm:bottom-8 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </button>
      </div>
    </div>
  );
}
