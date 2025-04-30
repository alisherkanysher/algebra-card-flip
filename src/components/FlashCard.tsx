
import React, { useState } from 'react';
import { Card } from '../data/cards';
import { cn } from '@/lib/utils';

interface FlashCardProps {
  card: Card;
}

const FlashCard: React.FC<FlashCardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "flashcard w-full md:w-3/4 lg:w-2/3 max-w-3xl aspect-[4/3] mx-auto cursor-pointer",
        isFlipped && "flipped"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner rounded-xl">
        <div className="flashcard-front rounded-xl bg-algebra-blue text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Вопрос</h2>
          <p className="text-lg md:text-xl">{card.question}</p>
        </div>
        <div className="flashcard-back rounded-xl bg-algebra-purple text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Ответ</h2>
          <p className="text-lg md:text-xl">{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
