import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlashCard from '../components/FlashCard';
import ProgressBar from '../components/ProgressBar';
import { cards as allCards, Language } from '../data/cards';
import { Button } from '../components/ui/button';
import { Shuffle, Globe } from 'lucide-react';
const Training = () => {
  const [cards, setCards] = useState([...allCards]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRandom, setIsRandom] = useState(false);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());
  const [language, setLanguage] = useState<Language>('ru');
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
  const cycleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'ru') return 'en';
      if (prev === 'en') return 'kk';
      return 'ru';
    });
  };
  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case 'ru':
        return 'Русский';
      case 'en':
        return 'English';
      case 'kk':
        return 'Қазақша';
    }
  };
  return <div className="min-h-screen flex flex-col p-4 md:p-8 text-white bg-gray-900">
      <div className="container mx-auto flex flex-col flex-grow">
        <header className="flex justify-between items-center mb-6">
          <Link to="/" className="text-algebra-light hover:opacity-80 transition-colors">
            ← {language === 'ru' ? 'На главную' : language === 'en' ? 'Main page' : 'Басты бетке'}
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" onClick={cycleLanguage} className="flex items-center gap-2 border-algebra-light text-algebra-light hover:bg-algebra-light/20">
              <Globe className="w-4 h-4" />
              {getLanguageName(language)}
            </Button>
            <Button variant="outline" onClick={handleShuffle} className={`flex items-center gap-2 ${isRandom ? 'bg-algebra-blue text-white' : 'border-algebra-light text-algebra-light hover:bg-algebra-light/20'}`}>
              <Shuffle className="w-4 h-4" />
              {language === 'ru' ? isRandom ? 'Случайный порядок' : 'Обычный порядок' : language === 'en' ? isRandom ? 'Random order' : 'Sequential order' : isRandom ? 'Кездейсоқ тәртіп' : 'Қалыпты тәртіп'}
            </Button>
          </div>
        </header>

        <ProgressBar current={completedCards.size} total={allCards.length} language={language} />
        
        <div className="flex-grow flex flex-col justify-center">
          {cards.length > 0 && <FlashCard card={cards[currentIndex]} language={language} />}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={handlePrevious} disabled={currentIndex === 0} variant="outline" className="px-8 border-algebra-light text-algebra-light hover:bg-algebra-light/20">
            {language === 'ru' ? 'Назад' : language === 'en' ? 'Back' : 'Артқа'}
          </Button>
          <Button onClick={handleNext} disabled={currentIndex === cards.length - 1} className="bg-algebra-blue hover:bg-algebra-lightBlue px-8 text-white">
            {language === 'ru' ? 'Вперёд' : language === 'en' ? 'Next' : 'Алға'}
          </Button>
        </div>
      </div>
    </div>;
};
export default Training;