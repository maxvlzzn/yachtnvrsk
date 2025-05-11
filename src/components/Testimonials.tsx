import React, { useState } from 'react';
import { testimonials } from '../data/yachts';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят наши клиенты о своем опыте аренды яхт в Новороссийске
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonials[currentIndex].text}"</p>
                <h4 className="text-lg font-semibold text-blue-900">{testimonials[currentIndex].name}</h4>
              </div>
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Переключиться на отзыв ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;