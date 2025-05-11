import React from 'react';
import { Anchor, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  onSubscribe?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribe }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe?.();
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Anchor className="text-white w-8 h-8 mr-2" />
              <h2 className="text-white font-bold text-2xl">ЧерноморЯхт</h2>
            </div>
            <p className="text-blue-200 mb-6">
              Премиальный яхт-клуб в Новороссийске, предлагающий незабываемые морские приключения с 2010 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li><a href="#welcome" className="text-blue-200 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#yachts" className="text-blue-200 hover:text-white transition-colors">Яхты</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#reviews" className="text-blue-200 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Аренда яхт</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Морские прогулки</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Рыбалка в открытом море</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Романтические круизы</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Корпоративные мероприятия</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Детские праздники</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Подписка</h3>
            <p className="text-blue-200 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости и специальные предложения
            </p>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-300 text-sm">
          <p>© 2025 ЧерноморЯхт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;