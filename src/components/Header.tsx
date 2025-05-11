import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

interface HeaderProps {
  onBook?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBook }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Anchor className="text-white w-8 h-8 mr-2" />
            <h1 className="text-white font-bold text-2xl">ЧерноморЯхт</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#welcome" className="text-white hover:text-blue-200 transition-colors">Главная</a>
            <a href="#yachts" className="text-white hover:text-blue-200 transition-colors">Яхты</a>
            <a href="#services" className="text-white hover:text-blue-200 transition-colors">Услуги</a>
            <a href="#reviews" className="text-white hover:text-blue-200 transition-colors">Отзывы</a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors">О нас</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Контакты</a>
          </nav>

          <button 
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-300"
            onClick={onBook}
          >
            Забронировать
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#welcome" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Главная</a>
            <a href="#yachts" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Яхты</a>
            <a href="#services" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#reviews" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>О нас</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-300 w-full"
              onClick={() => {
                setIsMenuOpen(false);
                onBook?.();
              }}
            >
              Забронировать
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;