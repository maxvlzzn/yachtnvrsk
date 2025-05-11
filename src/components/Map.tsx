import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Наше расположение</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Посетите наш яхт-клуб в Новороссийске или свяжитесь с нами для получения дополнительной информации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-md h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.610037456771!2d37.77805791544535!3d44.72340957909871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1f9000000001%3A0x5000000000000000!2z0J3QvtCy0L7RgNC-0YHRgdC40LnRgdC6!5e0!3m2!1sru!2sru!4v1661432902401!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Карта расположения яхт-клуба"
            ></iframe>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-blue-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">Адрес</h4>
                  <p className="text-gray-600">
                    Набережная Адмирала Серебрякова, 
                    <br />Новороссийск, Краснодарский край
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-blue-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">Телефон</h4>
                  <p className="text-gray-600">+7 (918) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-blue-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">Email</h4>
                  <p className="text-gray-600">info@chernomoryacht.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-blue-600 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">Часы работы</h4>
                  <p className="text-gray-600">
                    Пн-Вс: 9:00 - 20:00
                    <br />
                    Работаем без выходных
                  </p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;