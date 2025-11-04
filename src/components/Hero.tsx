import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Запечатлим ваш<br />особенный день
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Свадебная фото и видеосъёмка премиум-класса от студии VINSTART
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2"
          >
            Выбрать пакет
            <Icon name="ArrowRight" size={20} />
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Icon name="Play" size={20} />
            Смотреть работы
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
