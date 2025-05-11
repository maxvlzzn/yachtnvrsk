import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBook?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <section
      id="welcome"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://yatsigortalari.com/wp-content/uploads/2021/06/5151466_m-1500x1000.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 animate-fade-in">
          Уникальные приключения <br /> на Черном море
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Аренда роскошных яхт для незабываемого отдыха и праздников 
          в живописном яхт-клубе Новороссийска
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            onClick={onBook}
          >
            Арендовать яхту
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
            Узнать больше
          </button>
        </div>
      </div>

      <a
        href="#yachts"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;