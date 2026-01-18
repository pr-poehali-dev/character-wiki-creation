import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/hooks/useTheme';

type Section = 'home' | 'characters' | 'setting';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home' as Section, label: 'Главная', icon: 'Home', link: null },
    { id: 'characters' as Section, label: 'Персонажи', icon: 'Users', link: '/characters' },
    { id: 'setting' as Section, label: 'Сеттинг', icon: 'Globe', link: '/setting' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20 relative">
      <Bubbles />
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg relative overflow-hidden">
        <WavePattern />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={toggleTheme}
              className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform"
              aria-label="Переключить тему"
            >
              <Icon name={theme === 'light' ? 'Sun' : 'Moon'} size={28} className="text-primary" />
            </button>
            <div className="flex gap-1">
              {navItems.map((item) => 
                item.link ? (
                  <a
                    key={item.id}
                    href={item.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-secondary text-foreground"
                  >
                    <Icon name={item.icon} size={18} />
                    <span className="font-medium">{item.label}</span>
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'hover:bg-secondary text-foreground'
                    }`}
                  >
                    <Icon name={item.icon} size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="animate-fade-in">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'characters' && <CharactersSection />}
          {activeSection === 'setting' && <SettingSection />}
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

function HomeSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Icon name="Paperclip" size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-foreground text-center">
                Этот сайт посвящён маскотам, а так же сеттинговым персонажам телеграмм-аска @edlask. 
                Здесь представлена краткая информация, некоторые детали изложены кратко. 
                Приятного ознакомления!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-2 shadow-sm hover:shadow-md transition-shadow bg-destructive/5 border-destructive/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-destructive/10 rounded-2xl">
              <Icon name="AlertTriangle" size={24} className="text-destructive" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-medium text-destructive mb-2">ДИСКЛЕЙМЕР</p>
              <p className="text-base leading-relaxed text-foreground">Некоторые персонажи содержат неприятные темы, мы осуждаем и не одобряем их поведение.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-display mb-6 text-center">Персонажи</h2>
        <Card className="rounded-2xl border-2 shadow-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <a 
                href="/characters" 
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-orange-50 transition-colors group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-orange-200 group-hover:ring-orange-400 transition-all">
                  <img 
                    src="https://cdn.poehali.dev/files/Без%20названия1909_20250730204030.png" 
                    alt="Лила Невес"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium">Лила</p>
              </a>
              
              <a 
                href="/characters" 
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-purple-50 transition-colors group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all">
                  <img 
                    src="https://cdn.poehali.dev/files/Без%20названия2265_20251217193536.png" 
                    alt="Лана Солис"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium">Лана</p>
              </a>
              
              <a 
                href="/characters" 
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-cyan-50 transition-colors group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-cyan-200 group-hover:ring-cyan-400 transition-all">
                  <img 
                    src="https://cdn.poehali.dev/files/Без%20названия2265_20251217194141.png" 
                    alt="Уэйн Моретти (Чайка)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium">Чайка</p>
              </a>
              
              <a 
                href="/characters" 
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-red-50 transition-colors group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-red-200 group-hover:ring-red-400 transition-all">
                  <img 
                    src="https://cdn.poehali.dev/files/Без%20названия2265_20251217194856.png" 
                    alt="Кэп Невес"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium">Кэп</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CharactersSection() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-display mb-4">Персонажи</h2>
        <p className="text-lg text-muted-foreground">
......................................................................</p>
      </div>
      
      <Card className="rounded-3xl border-2 border-orange-200 bg-orange-50 shadow-lg hover:shadow-xl transition-all overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/3 relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/IMG_20260118_121008_941%20(1).jpg"
                alt="Лила Невес"
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold font-display text-orange-900">Лила Невес</h3>
                <p className="text-lg opacity-90">23 года, рост: 175 см</p>
                <p className="text-lg opacity-90">День рождения: 01.06</p>
                <p className="text-lg leading-relaxed mt-4">
                  Лила Невес – жизнерадостная и активная девушка! Работает спасателем на пляже, часто заводит новых друзей.
                </p>
                <div className="pt-4">
                  <p className="text-lg font-semibold mb-2">Любит:</p>
                  <p className="text-base leading-relaxed opacity-90">
                    арбузы, фруктовый лёд, животных (особенно мартышек и собак), заводить новых друзей, проводить время с Ланой, Чайкой и братиком.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold mb-2">Не любит:</p>
                  <p className="text-base leading-relaxed opacity-90">
                    Виктора… И ещё когда братика обижают.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-2 border-purple-200 bg-purple-50 shadow-lg hover:shadow-xl transition-all overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/3 relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/Без%20названия2188%20(1).png"
                alt="Лана Солис"
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold font-display text-purple-900">Лана Солис</h3>
                <p className="text-lg opacity-90">25 лет, рост: 180 см</p>
                <p className="text-lg opacity-90">День рождения: 14.02</p>
                <p className="text-lg leading-relaxed mt-4">
                  Лана Солис – спокойная, расслабленная и, хоть может показаться равнодушной, искренне добрая девушка. Работает в зале игровых автоматов, предпочитает тихий отдых.
                </p>
                <div className="pt-4">
                  <p className="text-lg font-semibold mb-2">Любит:</p>
                  <p className="text-base leading-relaxed opacity-90">
                    шоппинг, дорогую одежду, проводить время с Лилой, Чайкой и Кэпом, необычную еду, алкогольные коктейли, братика Кайла.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-semibold mb-2">Не любит:</p>
                  <p className="text-base leading-relaxed opacity-90">
                    Виктора, когда Кайл тратит её деньги, бедность.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Bubbles() {
  const bubbles = [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    duration: Math.random() * 6 + 8,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/8 backdrop-blur-sm border border-primary/15"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '0',
            animation: `bubble-float ${bubble.duration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-8 opacity-20 overflow-hidden">
      <svg
        className="absolute bottom-0 w-[200%] h-full animate-wave"
        viewBox="0 0 1200 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q300,0 600,10 T1200,10 L1200,20 L0,20 Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
    </div>
  );
}

function SettingSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold font-display mb-8 text-center">Сеттинг</h2>
      <Card className="rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Icon name="Globe" size={24} className="text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-lg leading-relaxed">
                А вот и Эстас де Луна! Островок, где живут все эти ребята ;3 !
              </p>
              <a
                href="https://telegra.ph/Setting-08-01-4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:scale-105 transition-transform shadow-md hover:shadow-lg"
              >
                <Icon name="ExternalLink" size={18} />
                <span className="font-medium">Читать подробнее</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}