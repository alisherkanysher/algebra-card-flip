
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlashCard from '../components/FlashCard';
import ProgressBar from '../components/ProgressBar';
import { cards as allCards } from '../data/cards';
import { Button } from '../components/ui/button';
import { Shuffle } from 'lucide-react';

const Training = () => {
  const [cards, setCards] = useState([...allCards]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRandom, setIsRandom] = useState(false);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isRandom) {
      setCards([...allCards].sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
    } else {
      setCards([...allCards]);
      setCurrentIndex(0);
    }
  }, [isRandom]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCompletedCards(prev => new Set(prev).add(cards[currentIndex].id));
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    setIsRandom(!isRandom);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 bg-algebra-light">
      <div className="container mx-auto flex flex-col flex-grow">
        <header className="flex justify-between items-center mb-6">
          <Link to="/" className="text-algebra-purple hover:text-algebra-blue transition-colors">
            ← На главную
          </Link>
          <Button 
            variant="outline" 
            onClick={handleShuffle}
            className={`flex items-center gap-2 ${isRandom ? 'bg-algebra-blue text-white' : ''}`}
          >
            <Shuffle className="w-4 h-4" />
            {isRandom ? 'Случайный порядок' : 'Обычный порядок'}
          </Button>
        </header>

        <ProgressBar current={completedCards.size} total={allCards.length} />
        
        <div className="flex-grow flex flex-col justify-center">
          {cards.length > 0 && <FlashCard card={cards[currentIndex]} />}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            onClick={handlePrevious} 
            disabled={currentIndex === 0}
            variant="outline"
            className="px-8"
          >
            Назад
          </Button>
          <Button 
            onClick={handleNext} 
            disabled={currentIndex === cards.length - 1}
            className="bg-algebra-blue hover:bg-algebra-purple px-8"
          >
            Вперёд
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Training;
