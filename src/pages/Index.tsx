import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type Section = 'home' | 'characters' | 'setting';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const navItems = [
    { id: 'home' as Section, label: 'Главная', icon: 'Home' },
    { id: 'characters' as Section, label: 'Персонажи', icon: 'Users' },
    { id: 'setting' as Section, label: 'Сеттинг', icon: 'Globe' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20 relative">
      <Bubbles />
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg relative overflow-hidden">
        <WavePattern />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="p-2 bg-primary/10 rounded-2xl">
              <Icon name="Sun" size={28} className="text-primary" />
            </div>
            <div className="flex gap-1">
              {navItems.map((item) => (
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
              ))}
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
              <p className="text-lg leading-relaxed text-foreground">
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
              <p className="text-base leading-relaxed text-foreground">
                Некоторые персонажи содержат шокирующие тематики, мы осуждаем и не одобряем их поведение.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-display mb-6 text-center">Персонажи</h2>
        <Card className="rounded-2xl border-2 shadow-sm">
          <CardContent className="p-12">
            <div className="text-center text-muted-foreground">
              <Icon name="Users" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">Список персонажей появится здесь...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CharactersSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold font-display mb-8 text-center">Персонажи</h2>
      <Card className="rounded-2xl border-2 shadow-sm">
        <CardContent className="p-16">
          <div className="text-center text-muted-foreground space-y-4">
            <Icon name="BookOpen" size={56} className="mx-auto opacity-30" />
            <p className="text-xl">Раздел в разработке</p>
            <p className="text-base">Здесь будут отображаться карточки всех персонажей</p>
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