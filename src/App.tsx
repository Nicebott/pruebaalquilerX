import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Apartments from './components/Apartments';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | undefined>();

  const handleBookClick = (apartmentId: string) => {
    setSelectedApartmentId(apartmentId);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Apartments onBookClick={handleBookClick} />
      <Location />
      <Contact selectedApartmentId={selectedApartmentId} />
      <Footer />
    </div>
  );
}

export default App;
