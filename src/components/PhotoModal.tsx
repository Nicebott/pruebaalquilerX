import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  images: string[];
  title: string;
  onClose: () => void;
}

export default function PhotoModal({ isOpen, images, title, onClose }: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-black rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Foto ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg';
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center gap-2 flex-wrap">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="bg-black bg-opacity-50 px-4 py-2 text-center text-gray-300 text-sm">
          Foto {currentIndex + 1} de {images.length}
        </div>
      </div>
    </div>
  );
}
