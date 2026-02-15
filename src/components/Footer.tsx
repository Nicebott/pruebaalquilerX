import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Casa Maribel Las Terrenas</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Alojamiento Casa Maribel - Tu hogar lejos de casa en el paraíso caribeño. Apartamentos en Las Terrenas con todo el confort que mereces.
            </p>
          </div>

          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contacto</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm break-words">Las Terrenas, República Dominicana</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm break-all">ferminmaribel@casamaribel.com.do</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (829) 697-4277</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+1 (809) 967-2175</span>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Síguenos</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {currentYear} Casa Maribel Las Terrenas - Apartamentos Casa Maribel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
