import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToApartments = () => {
    document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/el-portillo-playa-las-terrenas.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Paraíso en Las Terrenas
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-light max-w-3xl mx-auto">
            Descubre tu refugio perfecto en las hermosas playas del Caribe
          </p>
          <div className="pt-4">
            <p className="text-lg sm:text-xl text-gray-200">
              Av. Los Corales 9, Las Terrenas
            </p>
          </div>
          <button
            onClick={scrollToApartments}
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explorar Apartamentos
          </button>
        </div>

        <button
          onClick={scrollToApartments}
          className="absolute bottom-8 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </button>
      </div>
    </div>
  );
}
