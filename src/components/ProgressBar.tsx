
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex justify-between text-sm md:text-base mb-1">
        <span>Прогресс</span>
        <span>{current} из {total} карточек ({progress}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-algebra-purple h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
