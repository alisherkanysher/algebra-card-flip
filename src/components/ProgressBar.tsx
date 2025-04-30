
import React from 'react';
import { Language } from '../data/cards';

interface ProgressBarProps {
  current: number;
  total: number;
  language: Language;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, language }) => {
  const progress = Math.round((current / total) * 100);

  const getProgressText = () => {
    switch (language) {
      case 'ru': return 'Прогресс';
      case 'en': return 'Progress';
      case 'kk': return 'Прогресс';
    }
  };

  const getCardsText = () => {
    switch (language) {
      case 'ru': return 'карточек';
      case 'en': return 'cards';
      case 'kk': return 'карточка';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex justify-between text-sm md:text-base mb-1">
        <span>{getProgressText()}</span>
        <span>{current} из {total} {getCardsText()} ({progress}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-algebra-blue h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
