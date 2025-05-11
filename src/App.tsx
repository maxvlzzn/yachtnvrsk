import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedYachts from './components/FeaturedYachts';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Map from './components/Map';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  // Set the document title to be in Russian
  React.useEffect(() => {
    document.title = 'ЧерноморЯхт - Аренда яхт в Новороссийске';
  }, []);

  if (showBooking) {
    return <BookingPage onBack={() => setShowBooking(false)} />;
  }

  return (
    <div className="font-sans">
      <Header onBook={() => setShowBooking(true)} />
      <Hero onBook={() => setShowBooking(true)} />
      <FeaturedYachts />
      <Services onBook={() => setShowBooking(true)} />
      <Testimonials />
      <About />
      <Map />
      <Footer onSubscribe={() => setShowBooking(true)} />
    </div>
  );
}

export default App;