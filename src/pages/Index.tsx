import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Классическая съёмка",
      price: "от 50 000 ₽",
      features: ["Полный день съёмки", "Обработка фото", "Онлайн-галерея", "USB с фотографиями"],
      icon: "Camera"
    },
    {
      title: "Видеосъёмка",
      price: "от 80 000 ₽",
      features: ["Полный день съёмки", "Монтаж клипа", "Съёмка дроном", "Цветокоррекция"],
      icon: "Video"
    },
    {
      title: "Премиум пакет",
      price: "от 150 000 ₽",
      features: ["Фото + Видео", "Два оператора", "Love Story съёмка", "Печатный альбом"],
      icon: "Sparkles"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/2bec7ff5-51dc-4080-ab86-43052b4db91a.jpg",
      title: "Романтическая церемония",
      description: "Анна и Дмитрий"
    },
    {
      image: "https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/74678df3-cdd6-42f4-a2d5-b832d2a9e734.jpg",
      title: "Детали дня",
      description: "Каждая мелочь важна"
    },
    {
      image: "https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/0578f50e-5695-47ce-9002-2bcd76bded0d.jpg",
      title: "Искренние эмоции",
      description: "Елена и Максим"
    }
  ];

  const testimonials = [
    {
      name: "Анна и Дмитрий",
      text: "VINSTART превзошли все наши ожидания! Каждый кадр — это произведение искусства. Спасибо за эти незабываемые воспоминания!",
      rating: 5
    },
    {
      name: "Елена и Максим",
      text: "Профессионализм на высшем уровне. Ребята работали незаметно, но при этом запечатлели все важные моменты. Рекомендуем!",
      rating: 5
    },
    {
      name: "Мария и Алексей",
      text: "Потрясающая работа! Фотографии получились волшебными, а видео мы пересматриваем до сих пор. Огромное спасибо команде!",
      rating: 5
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Знакомство",
      description: "Встречаемся, обсуждаем ваши пожелания и планируем день съёмки",
      icon: "Users"
    },
    {
      step: "02",
      title: "Подготовка",
      description: "Создаём таймлайн, выбираем локации и продумываем каждую деталь",
      icon: "Calendar"
    },
    {
      step: "03",
      title: "Съёмка",
      description: "В день свадьбы работаем максимально незаметно и профессионально",
      icon: "Camera"
    },
    {
      step: "04",
      title: "Обработка",
      description: "Тщательно отбираем и обрабатываем каждый кадр с любовью",
      icon: "Edit"
    },
    {
      step: "05",
      title: "Результат",
      description: "Передаём готовые материалы и создаём вашу семейную реликвию",
      icon: "Gift"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className={`text-3xl font-serif font-semibold tracking-wide transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              VINSTART
            </h1>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection("portfolio")}
                className={`text-sm font-light transition-colors ${
                  scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                }`}
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className={`text-sm font-light transition-colors ${
                  scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                }`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("workflow")}
                className={`text-sm font-light transition-colors ${
                  scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                }`}
              >
                Процесс
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-light transition-colors ${
                  scrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-bride-and-groom-walking-together-1759/1080p.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-wedding-couple-walking-in-garden-8247/1080p.mp4" type="video/mp4" />
        </video>
        <div 
          className="relative z-20 text-center text-white px-6 animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide">
            Ваша история любви
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
            Запечатлеем самые важные моменты вашей свадьбы с душой и вниманием к деталям
          </p>
          <Button 
            onClick={() => scrollToSection("portfolio")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all font-light px-8 py-6 text-base"
          >
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4">
            Портфолио
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Каждая свадьба уникальна. Посмотрите на наши работы
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Выберите пакет, который идеально подойдёт для вашего особенного дня
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-scale-in border-muted group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300 group-hover:scale-110">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-3xl font-serif text-center mb-6 text-primary">
                  {service.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  Забронировать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4">
            Как мы работаем
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Простой и понятный процесс от знакомства до получения результата
          </p>
          <div className="space-y-8">
            {workflow.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-serif text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-muted">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <Icon name={item.icon} size={24} className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Что говорят о нас пары, чьи свадьбы мы снимали
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-muted"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 text-center">
                  "{testimonial.text}"
                </p>
                <p className="font-serif text-lg text-center text-primary">
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">
            Готовы создать вашу историю?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, чтобы обсудить детали вашей свадьбы и забронировать дату
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all px-8 py-6 text-base"
              onClick={() => scrollToSection("contact")}
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать нам
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary hover:text-white hover:scale-105 transition-all px-8 py-6 text-base"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl mb-4">VINSTART</h3>
              <p className="text-sm opacity-80">
                Создаём истории любви с 2015 года
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-xl mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@vinstart.ru
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-serif text-xl mb-4">Соцсети</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="#" className="hover:opacity-70 hover:scale-110 transition-all">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 hover:scale-110 transition-all">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 hover:scale-110 transition-all">
                  <Icon name="Send" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-primary-foreground/20 text-sm opacity-60">
            © 2024 VINSTART. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;