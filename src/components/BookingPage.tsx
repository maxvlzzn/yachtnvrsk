import React, { useState } from 'react';
import { yachts, yachtServices } from '../data/yachts';
import { ArrowLeft, Clock } from 'lucide-react';
import Header from './Header';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [selectedYacht, setSelectedYacht] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [hours, setHours] = useState(2);

  const handleServiceToggle = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const calculateTotal = () => {
    // Base yacht price
    const yacht = yachts.find(y => y.id.toString() === selectedYacht);
    const basePrice = yacht ? parseInt(yacht.price.replace(/[^\d]/g, '')) : 0;
    
    // Services price (300₽ per hour per service)
    const servicesPrice = selectedServices.length * 300 * hours;
    
    // Total price
    return (basePrice * hours) + servicesPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Вернуться на главную
          </button>

          <h1 className="text-3xl font-bold text-blue-900 mb-8">Бронирование яхты</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Выберите яхту</h2>
                <div className="space-y-3">
                  {yachts.map(yacht => (
                    <label key={yacht.id} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="yacht"
                        value={yacht.id}
                        checked={selectedYacht === yacht.id.toString()}
                        onChange={(e) => setSelectedYacht(e.target.value)}
                        className="form-radio text-blue-600"
                      />
                      <span>{yacht.name} - {yacht.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Дополнительные услуги</h2>
                <p className="text-sm text-gray-600 mb-4">Каждая услуга - 300₽/час</p>
                <div className="space-y-3">
                  {yachtServices.map(service => (
                    <label key={service.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => handleServiceToggle(service.name)}
                        className="form-checkbox text-blue-600"
                      />
                      <div>
                        <span className="block">{service.name}</span>
                        <span className="text-sm text-gray-600">{service.description}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">
                  <Clock className="inline-block mr-2" />
                  Длительность прогулки
                </h2>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center mt-2">{hours} часа</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Итого</h2>
              <div className="space-y-4">
                {selectedYacht && (
                  <div>
                    <p className="text-gray-600">Выбранная яхта:</p>
                    <p className="font-semibold">
                      {yachts.find(y => y.id.toString() === selectedYacht)?.name}
                      <span className="text-sm text-gray-600 ml-2">
                        ({hours} ч × {yachts.find(y => y.id.toString() === selectedYacht)?.price})
                      </span>
                    </p>
                  </div>
                )}
                {selectedServices.length > 0 && (
                  <div>
                    <p className="text-gray-600">Дополнительные услуги:</p>
                    <ul className="list-disc list-inside">
                      {selectedServices.map(service => (
                        <li key={service} className="font-semibold">
                          {service}
                          <span className="text-sm text-gray-600 ml-2">
                            ({hours} ч × 300₽)
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className="text-gray-600">Длительность:</p>
                  <p className="font-semibold">{hours} часа</p>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-lg font-semibold">
                    Общая стоимость: {calculateTotal().toLocaleString()} ₽
                  </p>
                  {selectedServices.length > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      Включая услуги: {(selectedServices.length * 300 * hours).toLocaleString()} ₽
                    </p>
                  )}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-4">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;