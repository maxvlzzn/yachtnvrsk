import React from 'react';
import { Anchor, Shield, Award, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">О нашем яхт-клубе</h2>
            <p className="text-gray-600 mb-6">
              ЧерноморЯхт – это премиальный яхт-клуб в Новороссийске, предлагающий незабываемые морские путешествия 
              по Черному морю с 2010 года. Мы гордимся нашим флотом роскошных яхт и профессиональной командой, 
              которая обеспечивает высочайший уровень сервиса.
            </p>
            <p className="text-gray-600 mb-8">
              Наш клуб располагается в живописной гавани Новороссийска с прямым выходом к открытому морю. 
              Мы предлагаем различные варианты аренды – от коротких морских прогулок до многодневных круизов 
              вдоль побережья Черного моря.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <Shield className="text-blue-600 w-10 h-10 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">Безопасность</h3>
                  <p className="text-gray-600">Сертифицированные капитаны и современное оборудование</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-blue-600 w-10 h-10 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">Качество</h3>
                  <p className="text-gray-600">Внимание к деталям и исключительный сервис</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Compass className="text-blue-600 w-10 h-10 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">Опыт</h3>
                  <p className="text-gray-600">Более 13 лет на рынке морских услуг</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Anchor className="text-blue-600 w-10 h-10 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">Традиции</h3>
                  <p className="text-gray-600">Морские традиции и современный комфорт</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://i.travel.ru/images2/2013/05/object217995/023_0_ab85c_64e0652d_XL.jpg" 
              alt="Яхт-клуб в Новороссийске" 
              className="rounded-lg h-64 object-cover w-full"
            />
            <img 
              src="https://avatars.mds.yandex.net/i?id=c8450d87eced814b061c9c95694befc8_l-4254007-images-thumbs&n=13" 
              alt="Морское путешествие" 
              className="rounded-lg h-64 object-cover w-full"
            />
            <img 
              src="https://content-16.foto.my.mail.ru/community/novocity/12/h-34.jpg" 
              alt="Команда яхт-клуба" 
              className="rounded-lg h-64 object-cover w-full"
            />
            <img 
              src="https://d2idu5mmj5r5g3.cloudfront.net/photos_m/Evg9VwK8ix447833.jpg" 
              alt="Закат на яхте" 
              className="rounded-lg h-64 object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;