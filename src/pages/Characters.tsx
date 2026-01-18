import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/hooks/useTheme';

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
            <h3 className="text-3xl font-bold font-display text-slate-600">Лила Невес</h3>
            <p className="text-lg opacity-90 text-slate-600">23 года, рост: 175 см</p>
            <p className="text-lg opacity-90 text-slate-600">День рождения: 01.06</p>
            <p className="text-lg leading-relaxed mt-4 text-slate-600">
              Лила Невес – жизнерадостная и активная девушка! Работает спасателем на пляже, часто заводит новых друзей.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-gray-600">Краткая биография</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              К сожалению, на момент рождения Лилы её родители были на стадии развода, поэтому со своим старшим братиком она толком не сумела провести достаточно времени... Он уехал во Францию, она осталась в своём родном городе Эстас де Луна.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Живя с мамой, Лила росла в большой заботе и любви, поэтому она эмпатичная, добрая и весёлая. В основном заработке ей так же помогает мама, которую она так и не смогла оставить одну, поэтому Лила может себе позволить расслабиться и работать в своё удовольствие – спасателем на пляже. Ей нравится работать с людьми, наблюдать за тем, как семьи отдыхают на пляже, парочки купаются в тёплых волнах моря, а друзья в любой момент могут её навестить! Ну прелесть, согласитесь?
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              После возвращения брата всё стало ещё лучше: теперь ее окружают только самые хорошие люди, а тоска и грусть и вовсе исчезли из жизни.
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
            <h3 className="text-3xl font-bold font-display text-slate-600">Лана Солис</h3>
            <p className="text-lg opacity-90 text-slate-600">25 лет, рост: 180 см</p>
            <p className="text-lg opacity-90 text-slate-600">День рождения: 14.02</p>
            <p className="text-lg leading-relaxed mt-4 text-slate-600">
              Лана Солис – спокойная, расслабленная и, хоть может показаться равнодушной, искренне добрая девушка. Работает в зале игровых автоматов, предпочитает тихий отдых.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-gray-600">Краткая биография</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Родилась в Эстас де Луна, впрочем и прожила там большую часть своей жизни. С детства любила учится, поэтому в школе была больше «ботанкой», чем «красоткой». Родители были заботливые, не шибко обеспеченные, но и не бедные. К 16 у неё появился младший братик, Кайл.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Буквально чуть позже оба родителя погибли. К счастью Лана уже была совершеннолетняя и решила взять опеку над младшим братом. Но вот как брата, так и себя, учитывая её расходы на средства для ухода, косметику, одежду и т.п., оказалось… проблематично. Лана старается работать много, иногда пользоваться своей красотой, чтобы обеспечить себя и брата. Но Лана иногда не может себя сдержать и поэтому большая часть денег уходит на внешний вид её и Кайла.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Иногда возникают проблемы с опекой(тот же Виктор угрожает Лане), но Лана близко знакома с тётей своего друга, которая работает адвокатом. Так что проблем…. пока что нет.
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
  {
    id: 3,
    name: 'Уэйн Моретти (Чайка)',
    color: 'cyan',
    image: 'https://cdn.poehali.dev/files/IMG_20260118_121008_058.jpg',
    icon: 'https://cdn.poehali.dev/files/Без%20названия2265_20251217194141.png',
    pages: [
      {
        title: 'Информация',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-slate-600">Уэйн Моретти (прозвище Чайка)</h3>
            <p className="text-lg opacity-90 text-slate-600">24 года, рост: 193 см</p>
            <p className="text-lg opacity-90 text-slate-600">День рождения: 01.04</p>
            <p className="text-lg leading-relaxed mt-4 text-slate-600">
              Импульсивный, харизматичный и находчивый экстраверт без тормозов. Он найдет общий язык даже с мертвым, заболтает зубы королевской гвардии, переубедит полицию арестовывать его, успеет подружиться с бабкой в очереди и поможет туристу пройти, куда ему надо, не зная языка.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-gray-600">Краткая биография</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Родился Чайка в Эстас де Луна, да и всю жизнь прожил именно здесь, не собираясь никуда переезжать. С самого детства он был олицетворением слова бешенность – энергия у ребенка текла через край, поэтому дома он обычно не сидел...
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Хотя так же это было связано с тем, что в семье у него ситуация была, мягко говоря, не очень. Отец сразу отказался от участия в его жизни, мать сбежала в неизвестном направлении когда ему было семь. Ближайшим родственником Чайки являлась его тётя Натали, сестра матери – она подобрала малыша и оформила над ним опекунство, заботясь о нем по сей день.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              В учёбе дела у парня складывались не очень, он предпочитал налаживать связи с обществом, а не решать скучные задачки. Бросив это дело, Чайке открылся целый мир: лёгкие заработки, никаких обязательств, общение с туристами, вкусная еда и вечеринки с друзьями. Чайка наконец-то нашёл свое русло!
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
                  новые знакомства, лёгкие деньги, быть в центре внимания, когда его не заставляют что-то делать, арбузы, гавайские рубашки, вырисовывать узоры загаром, коктейли (как молочные так и алкогольные), дорогую еду.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Не любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  учиться и работать, пиццу с ананасами, думать о будущем, когда его заставляют что-то делать, правила, запах сигарет, высокие цены на еду.
                </p>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 4,
    name: 'Кэп Невес',
    color: 'red',
    image: 'https://cdn.poehali.dev/files/photo_5431456505300454928_w.jpg',
    icon: 'https://cdn.poehali.dev/files/Без%20названия2265_20251217194856.png',
    pages: [
      {
        title: 'Информация',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-slate-600">Кэп Невес</h3>
            <p className="text-lg opacity-90 text-slate-600">30 лет, рост: 210 см</p>
            <p className="text-lg opacity-90 text-slate-600">День рождения: 29.02</p>
            <p className="text-lg leading-relaxed mt-4 text-slate-600">
              С виду холодный, отстранённый и угрюмый мужчина, но на деле добрый и очень сильно застенчивый, из-за чего не любит показывать свои чувства другим. Работает муниципальным полицейским, благодаря сестре, иначе бы ничего не делал.
            </p>
          </div>
        ),
      },
      {
        title: 'Биография',
        content: (
          <div className="space-y-3">
            <h3 className="text-3xl font-bold font-display text-gray-600">Краткая биография</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Родился в религиозной семье в Эстас де Луна. Когда ему исполнилось 7, у него появилась младшая сестра, Лила, а так же примерно же в это время родители разошлись. Лила осталась жить с матерью, а Кэп уехал с отцом во Францию.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Отношения с отцом у Кэпа были не очень. Тот был строгим, хотел, чтобы Кэп вырос настоящим мужчиной, настаивал, чтобы тот, когда вырастет, пошёл на госслужбу или стал священником, как его отец.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              В раннем возрасте Кэп познакомился с вампиром-подростком по имени Виктор. Когда Кэп подрос, а его отец умер(где-то после 16), они встречались некоторое время. Учился в это же время на астрофизика. После Кэп решил исполнить желание отца, разорвал отношения с Виктором, уехал обратно в Эстас де Луну, чтобы пройти добровольную службу в армии.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Закончив службу, стал снова жить с семьёй, но некоторое время был подавлен и апатичен. Сестра уговорила его найти работу, из-за чего Кэп прошёл курсы и начал работать муниципальным полицейским.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Из-за Лилы познакомился с хорошими людьми. Апатичность исчезла, но Кэп очень сильно стесняется показывать свои эмоции.
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
                  сладкое (особенно пончики), мягкие вещи, прохладу, Чайку, семью (кроме отца), на удивление иногда проводить время с Виктором, проводить время хоть с кем-то, инициативных людей, астрофизику, звёзды.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Не любит:</p>
                <p className="text-lg leading-relaxed opacity-90">
                  когда Виктор себя плохо ведёт, когда Виктор обращается к нему как к девушке, имя, которое ему дал Виктор, бриться, показывать чувства другим, показаться слабым, отца, религию.
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
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      accent: 'bg-cyan-500',
      hover: 'hover:bg-cyan-100',
      text: 'text-cyan-600',
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      accent: 'bg-red-500',
      hover: 'hover:bg-red-100',
      text: 'text-red-600',
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
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform">
              <Icon name="Home" size={28} className="text-primary" />
            </a>
            <h1 className="text-2xl font-bold font-display">Персонажи</h1>
            <button 
              onClick={toggleTheme}
              className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform"
              aria-label="Переключить тему"
            >
              <Icon name={theme === 'light' ? 'Sun' : 'Moon'} size={28} className="text-primary" />
            </button>
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

      <a
        href="https://t.me/edlask"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 p-4 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Telegram канал @edlask"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      </a>
    </div>
  );
}