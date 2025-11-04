import Icon from '@/components/ui/icon';

const Pricing = () => {
  const packages = [
    {
      name: 'Классика',
      price: '50 000 ₽',
      features: [
        'Фотосъёмка (8 часов)',
        '300+ обработанных фото',
        'Онлайн-галерея',
        'Печатный альбом 20x30',
        'Все исходники на флешке'
      ],
      icon: 'Camera',
      popular: false
    },
    {
      name: 'Видео',
      price: '80 000 ₽',
      features: [
        'Фото + видеосъёмка (10 часов)',
        '400+ обработанных фото',
        'Видеоклип 3-5 минут',
        'Полный фильм 20-30 минут',
        'Онлайн-галерея',
        'Печатный альбом 30x40'
      ],
      icon: 'Video',
      popular: true
    },
    {
      name: 'Премиум',
      price: '120 000 ₽',
      features: [
        'Фото + видео (полный день)',
        '600+ обработанных фото',
        '2 видеооператора',
        'Съёмка с дрона',
        'Видеоклип + фильм + тизер',
        'Премиум альбом 40x50',
        'Love Story съёмка в подарок'
      ],
      icon: 'Award',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-primary">
            Стоимость услуг
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите пакет, который идеально подойдёт для вашего торжества
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
                pkg.popular
                  ? 'border-primary bg-primary/5 shadow-xl'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={pkg.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">{pkg.name}</h3>
                <p className="text-4xl font-bold text-primary">{pkg.price}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Забронировать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
