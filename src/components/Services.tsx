import React from 'react';
import { yachtServices } from '../data/yachts';
import { Users, Utensils, Wifi, SwissFranc as Swim } from 'lucide-react';

interface ServicesProps {
  onBook?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users size={48} className="text-blue-600 mb-4" />;
      case 'utensils':
        return <Utensils size={48} className="text-blue-600 mb-4" />;
      case 'wifi':
        return <Wifi size={48} className="text-blue-600 mb-4" />;
      case 'swim':
        return <Swim size={48} className="text-blue-600 mb-4" />;
      default:
        return <Users size={48} className="text-blue-600 mb-4" />;
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг для вашего комфортного отдыха на яхте.
            Доверьтесь нашим профессионалам, чтобы сделать ваше путешествие незабываемым.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {yachtServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              {getServiceIcon(service.icon)}
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 md:p-12 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Индивидуальные предложения</h3>
              <p className="mb-6">
                Мы можем создать индивидуальное предложение специально для вас. 
                Будь то романтический вечер, день рождения или корпоративное мероприятие,
                мы организуем всё на высшем уровне.
              </p>
              <button 
                className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold"
                onClick={onBook}
              >
                Обсудить детали
              </button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://avatars.mds.yandex.net/get-altay/10963046/2a0000018c1aa03a047f43119dbcd8a6fe4e/orig" 
                alt="Особые мероприятия на яхте" 
                className="rounded-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;