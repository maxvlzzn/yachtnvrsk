import React, { useState } from 'react';
import YachtCard from './YachtCard';
import { yachts } from '../data/yachts';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturedYachts: React.FC = () => {
  const [showAllYachts, setShowAllYachts] = useState(false);
  const displayedYachts = showAllYachts ? yachts : yachts.slice(0, 6);

  return (
    <section id="yachts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Наши лучшие яхты</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с нашим премиальным флотом яхт для незабываемого отдыха на воде.
            Мы гарантируем безопасность, комфорт и исключительный сервис.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {displayedYachts.map(yacht => (
            <YachtCard key={yacht.id} yacht={yacht} featured={true} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllYachts(!showAllYachts)}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            {showAllYachts ? (
              <>
                Скрыть
                <ChevronUp size={20} className="ml-1" />
              </>
            ) : (
              <>
                Посмотреть все яхты
                <ChevronDown size={20} className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedYachts;