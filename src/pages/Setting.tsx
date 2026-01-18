import Icon from '@/components/ui/icon';
import { useTheme } from '@/hooks/useTheme';

export default function Setting() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform">
              <Icon name="Home" size={28} className="text-primary" />
            </a>
            <h1 className="text-2xl font-bold font-display">Сеттинг</h1>
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
        <div className="max-w-4xl mx-auto space-y-6">
          <a 
            href="https://telegra.ph/Setting-08-01-4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-card rounded-2xl border-2 border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all p-6"
          >
            <p className="text-2xl font-display text-center">А вот и Эстас де Луна! Чудный островок, где живут ребята :3
(   . . . кликабельно . . .   )</p>
          </a>
          
          <div className="bg-card rounded-3xl border-2 border-border shadow-lg overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/5368444589129273226.jpg" 
              alt="Все сеттинговые персонажи" 
              className="w-full h-auto"
            />
            <div className="p-6 text-center">
              <p className="text-xl font-display font-semibold">все сеттинговые персонажи !</p>
            </div>
          </div>
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