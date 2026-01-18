import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: 'Лила Невес',
    color: 'orange',
    image: 'https://cdn.poehali.dev/files/IMG_20260118_121008_941%20(1).jpg',
    icon: 'https://cdn.poehali.dev/files/Без%20названия1909_20250730204030.png',
    pages: [
      {
        title: 'Информация',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display">Лила Невес</h3>
            <p className="text-lg opacity-90">23 года, рост: 175 см</p>
            <p className="text-lg opacity-90">День рождения: 01.06</p>
            <p className="text-lg leading-relaxed mt-4">
              Лила Невес – жизнерадостная и активная девушка! Работает спасателем на пляже, часто заводит новых друзей.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display">Биография</h3>
            <p className="text-lg leading-relaxed">
              Здесь будет биография! Дополним позже!
            </p>
          </div>
        ),
      },
      {
        title: 'Предпочтения',
        content: (
          <div className="space-y-4">
            <h3 className="text-3xl font-bold font-display">Предпочтения</h3>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-semibold mb-2">Любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  арбузы, фруктовый лёд, животных (особенно мартышек и собак), заводить новых друзей, проводить время с Ланой, Чайкой и братиком.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Не любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  Виктора… И ещё когда братика обижают.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    name: 'Лана Солис',
    color: 'purple',
    image: 'https://cdn.poehali.dev/files/Без%20названия2188%20(1).png',
    icon: 'https://cdn.poehali.dev/files/Без%20названия2265_20251217193536.png',
    pages: [
      {
        title: 'Информация',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display">Лана Солис</h3>
            <p className="text-lg opacity-90">25 лет, рост: 180 см</p>
            <p className="text-lg opacity-90">День рождения: 14.02</p>
            <p className="text-lg leading-relaxed mt-4">
              Лана Солис – спокойная, расслабленная и, хоть может показаться равнодушной, искренне добрая девушка. Работает в зале игровых автоматов, предпочитает тихий отдых.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display">Биография</h3>
            <p className="text-lg leading-relaxed">
              Здесь будет биография! Дополним позже!
            </p>
          </div>
        ),
      },
      {
        title: 'Предпочтения',
        content: (
          <div className="space-y-4">
            <h3 className="text-3xl font-bold font-display">Предпочтения</h3>
            <div className="space-y-3">
              <div>
                <p className="text-lg font-semibold mb-2">Любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  шоппинг, дорогую одежду, проводить время с Лилой, Чайкой и Кэпом, необычную еду, алкогольные коктейли, братика Кайла.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Не любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  Виктора, когда Кайл тратит её деньги, бедность.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

function CharacterCard({ character }: { character: typeof characters[0] }) {
  const [currentPage, setCurrentPage] = useState(0);

  const colorClasses = {
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      accent: 'bg-orange-500',
      hover: 'hover:bg-orange-100',
      text: 'text-orange-600',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      accent: 'bg-purple-500',
      hover: 'hover:bg-purple-100',
      text: 'text-purple-600',
    },
  };

  const colors = colorClasses[character.color as keyof typeof colorClasses];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % character.pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + character.pages.length) % character.pages.length);
  };

  return (
    <Card className={`rounded-3xl border-2 ${colors.border} ${colors.bg} shadow-lg hover:shadow-xl transition-all overflow-hidden`}>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/3 relative overflow-hidden">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
            />
          </div>
          
          <div className="md:w-2/3 p-8 flex flex-col justify-between">
            <div className="flex-1">
              {character.pages[currentPage].content}
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-current/10">
              <button
                onClick={prevPage}
                className={`p-2 rounded-full ${colors.hover} transition-colors`}
                aria-label="Предыдущая страница"
              >
                <Icon name="ChevronLeft" size={24} className={colors.text} />
              </button>
              
              <div className="flex gap-2">
                {character.pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPage ? `${colors.accent} w-8` : 'bg-gray-300'
                    }`}
                    aria-label={`Страница ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className={`p-2 rounded-full ${colors.hover} transition-colors`}
                aria-label="Следующая страница"
              >
                <Icon name="ChevronRight" size={24} className={colors.text} />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Characters() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform">
              <Icon name="Home" size={28} className="text-primary" />
            </a>
            <h1 className="text-2xl font-bold font-display">Персонажи</h1>
            <div className="w-[44px]"></div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="space-y-12 max-w-6xl mx-auto">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </main>
    </div>
  );
}