
import React, { useState } from 'react';
import { Card, Language } from '../data/cards';
import { cn } from '@/lib/utils';

interface FlashCardProps {
  card: Card;
  language: Language;
}

const FlashCard: React.FC<FlashCardProps> = ({ card, language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "flashcard w-full md:w-3/4 lg:w-2/3 max-w-3xl aspect-[4/3] mx-auto cursor-pointer",
        isFlipped && "flipped"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner rounded-xl shadow-lg">
        <div className="flashcard-front rounded-xl bg-algebra-skyblue text-slate-800">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {language === 'ru' ? 'Вопрос' : language === 'en' ? 'Question' : 'Сұрақ'}
          </h2>
          <p className="text-lg md:text-xl">{card.question[language]}</p>
        </div>
        <div className="flashcard-back rounded-xl bg-algebra-cream text-slate-800">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {language === 'ru' ? 'Ответ' : language === 'en' ? 'Answer' : 'Жауап'}
          </h2>
          <p className="text-lg md:text-xl">{card.answer[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
