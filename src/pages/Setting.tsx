import Icon from '@/components/ui/icon';

export default function Setting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="p-2 bg-primary/10 rounded-2xl hover:scale-105 transition-transform">
              <Icon name="Home" size={28} className="text-primary" />
            </a>
            <h1 className="text-2xl font-bold font-display">Сеттинг</h1>
            <div className="w-[44px]"></div>
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
            <p className="text-2xl font-display text-center">А вот и Эстас де Луна! Чудный островок, где живут ребята :3</p>
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
    </div>
  );
}