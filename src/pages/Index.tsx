
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-algebra-blue to-algebra-purple flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Алгебра 8 класс</h1>
        <p className="text-xl md:text-2xl mb-8">Интерактивные карточки для изучения алгебры</p>
        <p className="text-lg md:text-xl mb-12">30 карточек с ключевыми понятиями, формулами и примерами решений</p>
        
        <Link to="/training">
          <Button className="bg-white text-algebra-purple hover:bg-algebra-light hover:text-algebra-blue text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105">
            Начать тренировку
          </Button>
        </Link>
        
        <div className="mt-16 text-sm md:text-base opacity-90">
          <p>Нажимайте на карточки, чтобы увидеть ответ</p>
          <p className="mt-2">Используйте режим случайного порядка для закрепления материала</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
