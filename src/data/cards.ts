export interface Card {
  id: number;
  question: {
    ru: string;
    en: string;
    kk: string;
  };
  answer: {
    ru: string;
    en: string;
    kk: string;
  };
}

export type Language = 'ru' | 'en' | 'kk';

export const cards: Card[] = [
  {
    id: 1,
    question: {
      ru: "Что такое квадратный корень из числа?",
      en: "What is the square root of a number?",
      kk: "Саннан шаршы түбір дегеніміз не?"
    },
    answer: {
      ru: "Это такое число, квадрат которого равен данному числу. Например, √9 = 3, потому что 3² = 9.",
      en: "It's a number that, when squared, equals the given number. For example, √9 = 3, because 3² = 9.",
      kk: "Бұл квадраты берілген санға тең болатын сан. Мысалы, √9 = 3, себебі 3² = 9."
    }
  },
  {
    id: 2,
    question: {
      ru: "Найдите значение выражения: (x + 3)(x - 3)",
      en: "Find the value of the expression: (x + 3)(x - 3)",
      kk: "Өрнектің мәнін табыңыз: (x + 3)(x - 3)"
    },
    answer: {
      ru: "x² - 9 (формула разности квадратов)",
      en: "x² - 9 (difference of squares formula)",
      kk: "x² - 9 (квадраттар айырмашылығы формуласы)"
    }
  },
  {
    id: 3,
    question: {
      ru: "Решите уравнение: x² = 25",
      en: "Solve the equation: x² = 25",
      kk: "Теңдеуді шешіңіз: x² = 25"
    },
    answer: {
      ru: "x = 5 или x = -5",
      en: "x = 5 or x = -5",
      kk: "x = 5 немесе x = -5"
    }
  },
  {
    id: 4,
    question: {
      ru: "Что такое дискриминант квадратного уравнения?",
      en: "What is the discriminant of a quadratic equation?",
      kk: "Квадраттық теңдеудің дискриминанты дегеніміз не?"
    },
    answer: {
      ru: "D = b² - 4ac",
      en: "D = b² - 4ac",
      kk: "D = b² - 4ac"
    }
  },
  {
    id: 5,
    question: {
      ru: "Сколько корней может иметь квадратное уравнение?",
      en: "How many roots can a quadratic equation have?",
      kk: "Квадраттық теңдеудің қанша түбірі болуы мүмкін?"
    },
    answer: {
      ru: "2, 1 или 0 в зависимости от значения дискриминанта",
      en: "2, 1, or 0 depending on the value of the discriminant",
      kk: "Дискриминанттың мәніне байланысты 2, 1 немесе 0"
    }
  },
  {
    id: 6,
    question: {
      ru: "Преобразуйте выражение: (2x + 1)²",
      en: "Expand the expression: (2x + 1)²",
      kk: "Өрнекті түрлендіріңіз: (2x + 1)²"
    },
    answer: {
      ru: "4x² + 4x + 1",
      en: "4x² + 4x + 1",
      kk: "4x² + 4x + 1"
    }
  },
  {
    id: 7,
    question: {
      ru: "Решите: x² - 6x + 9 = 0",
      en: "Solve: x² - 6x + 9 = 0",
      kk: "Шешіңіз: x² - 6x + 9 = 0"
    },
    answer: {
      ru: "x = 3 (один корень, т.к. D = 0)",
      en: "x = 3 (one root, since D = 0)",
      kk: "x = 3 (бір түбір, себебі D = 0)"
    }
  },
  {
    id: 8,
    question: {
      ru: "Что значит \"привести подобные слагаемые\"?",
      en: "What does \"collect like terms\" mean?",
      kk: "\"Ұқсас мүшелерді келтіру\" дегеніміз не?"
    },
    answer: {
      ru: "Сложить или вычесть члены с одинаковой переменной и степенью.",
      en: "To add or subtract terms with the same variable and degree.",
      kk: "Бірдей айнымалы және дәрежесі бар мүшелерді қосу немесе азайту."
    }
  },
  {
    id: 9,
    question: {
      ru: "Найдите произведение: (x - 4)(x + 2)",
      en: "Find the product: (x - 4)(x + 2)",
      kk: "Көбейтіндіні табыңыз: (x - 4)(x + 2)"
    },
    answer: {
      ru: "x² - 2x - 8",
      en: "x² - 2x - 8",
      kk: "x² - 2x - 8"
    }
  },
  {
    id: 10,
    question: {
      ru: "Как называется формула (a - b)²?",
      en: "What is the name of the formula (a - b)²?",
      kk: "(a - b)² формуласы қалай аталады?"
    },
    answer: {
      ru: "Квадрат разности: a² - 2ab + b²",
      en: "Square of a difference: a² - 2ab + b²",
      kk: "Айырмашылық квадраты: a² - 2ab + b²"
    }
  },
  {
    id: 11,
    question: {
      ru: "Что такое квадрат суммы?",
      en: "What is the square of a sum?",
      kk: "Қосындының квадраты дегеніміз не?",
    },
    answer: {
      ru: "Это формула (a + b)² = a² + 2ab + b²",
      en: "It is the formula (a + b)² = a² + 2ab + b²",
      kk: "Бұл (a + b)² = a² + 2ab + b² формуласы",
    },
  },
  {
    id: 12,
    question: {
      ru: "Упростите выражение: 3x + 5x - 2x",
      en: "Simplify the expression: 3x + 5x - 2x",
      kk: "Өрнекті ықшамдаңыз: 3x + 5x - 2x",
    },
    answer: {
      ru: "6x",
      en: "6x",
      kk: "6x",
    },
  },
  {
    id: 13,
    question: {
      ru: "Найдите значение выражения: (x + 2)²",
      en: "Find the value of the expression: (x + 2)²",
      kk: "Өрнектің мәнін табыңыз: (x + 2)²",
    },
    answer: {
      ru: "x² + 4x + 4",
      en: "x² + 4x + 4",
      kk: "x² + 4x + 4",
    },
  },
  {
    id: 14,
    question: {
      ru: "Какое уравнение называется линейным?",
      en: "What equation is called linear?",
      kk: "Қандай теңдеу сызықтық деп аталады?",
    },
    answer: {
      ru: "Уравнение вида ax + b = 0, где a ≠ 0",
      en: "An equation of the form ax + b = 0, where a ≠ 0",
      kk: "ax + b = 0 түріндегі теңдеу, мұндағы a ≠ 0",
    },
  },
  {
    id: 15,
    question: {
      ru: "Найдите корни уравнения: x² - 4x = 0",
      en: "Find the roots of the equation: x² - 4x = 0",
      kk: "Теңдеудің түбірлерін табыңыз: x² - 4x = 0",
    },
    answer: {
      ru: "x = 0 или x = 4",
      en: "x = 0 or x = 4",
      kk: "x = 0 немесе x = 4",
    },
  },
  {
    id: 16,
    question: {
      ru: "Решите: x² + 2x - 8 = 0",
      en: "Solve: x² + 2x - 8 = 0",
      kk: "Шешіңіз: x² + 2x - 8 = 0",
    },
    answer: {
      ru: "x = -4 или x = 2",
      en: "x = -4 or x = 2",
      kk: "x = -4 немесе x = 2",
    },
  },
  {
    id: 17,
    question: {
      ru: "Что такое многочлен?",
      en: "What is a polynomial?",
      kk: "Көпмүше дегеніміз не?",
    },
    answer: {
      ru: "Алгебраическое выражение, состоящее из суммы одночленов",
      en: "An algebraic expression consisting of the sum of monomials",
      kk: "Бірмүшелердің қосындысынан тұратын алгебралық өрнек",
    },
  },
  {
    id: 18,
    question: {
      ru: "Как найти корни квадратного уравнения?",
      en: "How to find the roots of a quadratic equation?",
      kk: "Квадраттық теңдеудің түбірлерін қалай табуға болады?",
    },
    answer: {
      ru: "Использовать формулу x = (-b ± √D) / 2a",
      en: "Use the formula x = (-b ± √D) / 2a",
      kk: "x = (-b ± √D) / 2a формуласын қолданыңыз",
    },
  },
  {
    id: 19,
    question: {
      ru: "Упростите выражение: (x + 1)(x - 1)",
      en: "Simplify the expression: (x + 1)(x - 1)",
      kk: "Өрнекті ықшамдаңыз: (x + 1)(x - 1)",
    },
    answer: {
      ru: "x² - 1",
      en: "x² - 1",
      kk: "x² - 1",
    },
  },
  {
    id: 20,
    question: {
      ru: "Что называют коэффициентом при переменной?",
      en: "What is called the coefficient of a variable?",
      kk: "Айнымалының коэффициенті деп нені атайды?",
    },
    answer: {
      ru: "Число, стоящее перед переменной, например, в 3x — коэффициент 3",
      en: "The number preceding the variable, for example, in 3x — the coefficient is 3",
      kk: "Айнымалының алдында тұрған сан, мысалы, 3x — коэффициент 3",
    },
  },
  {
    id: 21,
    question: {
      ru: "Что такое одночлен?",
      en: "What is a monomial?",
      kk: "Бірмүше дегеніміз не?",
    },
    answer: {
      ru: "Это произведение чисел и переменных, например: 5x²",
      en: "It is the product of numbers and variables, for example: 5x²",
      kk: "Бұл сандар мен айнымалылардың көбейтіндісі, мысалы: 5x²",
    },
  },
  {
    id: 22,
    question: {
      ru: "Упростите выражение: (2x - 5)(x + 3)",
      en: "Simplify the expression: (2x - 5)(x + 3)",
      kk: "Өрнекті ықшамдаңыз: (2x - 5)(x + 3)",
    },
    answer: {
      ru: "2x² + x - 15",
      en: "2x² + x - 15",
      kk: "2x² + x - 15",
    },
  },
  {
    id: 23,
    question: {
      ru: "Решите: x² + 6x + 9 = 0",
      en: "Solve: x² + 6x + 9 = 0",
      kk: "Шешіңіз: x² + 6x + 9 = 0",
    },
    answer: {
      ru: "x = -3",
      en: "x = -3",
      kk: "x = -3",
    },
  },
  {
    id: 24,
    question: {
      ru: "Найдите значение выражения: (a - 2)²",
      en: "Find the value of the expression: (a - 2)²",
      kk: "Өрнектің мәнін табыңыз: (a - 2)²",
    },
    answer: {
      ru: "a² - 4a + 4",
      en: "a² - 4a + 4",
      kk: "a² - 4a + 4",
    },
  },
  {
    id: 25,
    question: {
      ru: "Упростите: (x + 4)² - x²",
      en: "Simplify: (x + 4)² - x²",
      kk: "Ықшамдаңыз: (x + 4)² - x²",
    },
    answer: {
      ru: "8x + 16",
      en: "8x + 16",
      kk: "8x + 16",
    },
  },
  {
    id: 26,
    question: {
      ru: "Решите: x² - 1 = 0",
      en: "Solve: x² - 1 = 0",
      kk: "Шешіңіз: x² - 1 = 0",
    },
    answer: {
      ru: "x = 1 или x = -1",
      en: "x = 1 or x = -1",
      kk: "x = 1 немесе x = -1",
    },
  },
  {
    id: 27,
    question: {
      ru: "Что значит \"вынести за скобки\"?",
      en: "What does \"factor out\" mean?",
      kk: "\"Жақша сыртына шығару\" дегеніміз не?",
    },
    answer: {
      ru: "Представить выражение в виде произведения, выделив общий множитель",
      en: "Represent the expression as a product by extracting a common factor",
      kk: "Өрнекті жалпы көбейткішті бөліп алып, көбейтінді түрінде көрсету",
    },
  },
  {
    id: 28,
    question: {
      ru: "В чём отличие квадратного уравнения от линейного?",
      en: "What is the difference between a quadratic equation and a linear equation?",
      kk: "Квадраттық теңдеу мен сызықтық теңдеудің айырмашылығы неде?",
    },
    answer: {
      ru: "В квадратном уравнении переменная во второй степени, в линейном — в первой",
      en: "In a quadratic equation, the variable is squared, in a linear equation — to the first power",
      kk: "Квадраттық теңдеуде айнымалы екінші дәрежеде, сызықтық теңдеуде — бірінші дәрежеде",
    },
  },
  {
    id: 29,
    question: {
      ru: "Упростите: x² + 3x - x² + 2x",
      en: "Simplify: x² + 3x - x² + 2x",
      kk: "Ықшамдаңыз: x² + 3x - x² + 2x",
    },
    answer: {
      ru: "5x",
      en: "5x",
      kk: "5x",
    },
  },
  {
    id: 30,
    question: {
      ru: "Как проверить правильность корней уравнения?",
      en: "How to check the correctness of the roots of an equation?",
      kk: "Теңдеу түбірлерінің дұрыстығын қалай тексеруге болады?",
    },
    answer: {
      ru: "Подставить корни в исходное уравнение и убедиться, что получается верное равенство",
      en: "Substitute the roots into the original equation and make sure that a correct equality is obtained",
      kk: "Түбірлерді бастапқы теңдеуге қойып, дұрыс теңдік алынғанына көз жеткізу",
    },
  }
];
