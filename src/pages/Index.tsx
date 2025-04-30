
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Language } from '../data/cards';
import { Globe } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ru');

  const cycleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'ru') return 'en';
      if (prev === 'en') return 'kk';
      return 'ru';
    });
  };

  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case 'ru': return 'Русский';
      case 'en': return 'English';
      case 'kk': return 'Қазақша';
    }
  };

  const getTitle = () => {
    switch (language) {
      case 'ru': return 'Алгебра 8 класс';
      case 'en': return 'Algebra 8th Grade';
      case 'kk': return 'Алгебра 8 сынып';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'ru': return 'Интерактивные карточки для изучения алгебры';
      case 'en': return 'Interactive flashcards for learning algebra';
      case 'kk': return 'Алгебраны үйренуге арналған интерактивті карталар';
    }
  };

  const getDescription = () => {
    switch (language) {
      case 'ru': return '30 карточек с ключевыми понятиями, формулами и примерами решений';
      case 'en': return '30 cards with key concepts, formulas and solution examples';
      case 'kk': return '30 карта негізгі ұғымдармен, формулалармен және шешім мысалдарымен';
    }
  };

  const getStartButtonText = () => {
    switch (language) {
      case 'ru': return 'Начать тренировку';
      case 'en': return 'Start Training';
      case 'kk': return 'Жаттығуды бастау';
    }
  };

  const getFooterText1 = () => {
    switch (language) {
      case 'ru': return 'Нажимайте на карточки, чтобы увидеть ответ';
      case 'en': return 'Click on the cards to see the answer';
      case 'kk': return 'Жауапты көру үшін карточкаларды басыңыз';
    }
  };

  const getFooterText2 = () => {
    switch (language) {
      case 'ru': return 'Используйте режим случайного порядка для закрепления материала';
      case 'en': return 'Use random order mode to reinforce the material';
      case 'kk': return 'Материалды бекіту үшін кездейсоқ тәртіп режимін пайдаланыңыз';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-algebra-skyblue to-algebra-blue flex flex-col items-center justify-center p-4 text-slate-800">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          onClick={cycleLanguage}
          className="flex items-center gap-2 bg-white/80 hover:bg-white"
        >
          <Globe className="w-4 h-4" />
          {getLanguageName(language)}
        </Button>
      </div>
      
      <div className="text-center max-w-3xl bg-white/30 backdrop-blur-sm p-8 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{getTitle()}</h1>
        <p className="text-xl md:text-2xl mb-8">{getSubtitle()}</p>
        <p className="text-lg md:text-xl mb-12">{getDescription()}</p>
        
        <Link to="/training" state={{ language }}>
          <Button className="bg-white text-algebra-blue hover:bg-algebra-cream hover:text-algebra-blue text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105">
            {getStartButtonText()}
          </Button>
        </Link>
        
        <div className="mt-16 text-sm md:text-base">
          <p>{getFooterText1()}</p>
          <p className="mt-2">{getFooterText2()}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
