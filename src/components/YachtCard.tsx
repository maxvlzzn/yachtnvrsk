import React from 'react';
import { Yacht } from '../data/yachts';
import { Clock, Users, Home, Calendar } from 'lucide-react';

interface YachtCardProps {
  yacht: Yacht;
  featured?: boolean;
}

const YachtCard: React.FC<YachtCardProps> = ({ yacht, featured = false }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={yacht.images[0]} 
          alt={yacht.name}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            Популярная
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{yacht.name}</h3>
          <p className="text-white text-sm">{yacht.shortDescription}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2" />
            <span>{yacht.specifications.length}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2" />
            <span>{yacht.specifications.capacity}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Home size={16} className="mr-2" />
            <span>{yacht.specifications.cabins} каюты</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>{yacht.specifications.yearBuilt} г.</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {yacht.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
          {yacht.features.length > 3 && (
            <button className="text-gray-400 text-xs">+{yacht.features.length - 3}</button>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-900">
            <span className="text-lg font-semibold">{yacht.price}</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default YachtCard;