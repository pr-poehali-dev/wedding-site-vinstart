import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  return (
    <div className="min-h-screen bg-background">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-semibold tracking-wide">
              VINSTART
            </h1>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-sm font-light hover:text-secondary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm font-light hover:text-secondary transition-colors"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm font-light hover:text-secondary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10"></div>
        <img 
          src="https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/efadf6cd-76b1-4515-bc38-72674d4a76a0.jpg"
          alt="Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-6 animate-fade-in">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide">
            Ваша история любви
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90">
            Запечатлеем самые важные моменты вашей свадьбы с душой и вниманием к деталям
          </p>
          <Button 
            onClick={() => scrollToSection("services")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-light px-8 py-6 text-base"
          >
            Узнать больше
          </Button>
        </div>
      </section>

      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Выберите пакет, который идеально подойдёт для вашего особенного дня
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-muted"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
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
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("contact")}
                >
                  Забронировать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl mb-8">О нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            VINSTART — это команда профессиональных фото и видеографов с многолетним опытом съёмки свадеб. 
            Мы создаём не просто красивые кадры, а настоящие истории любви, которые останутся с вами навсегда.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наша цель — запечатлеть искренние эмоции, нежность моментов и атмосферу вашего праздника 
            так, чтобы через годы вы могли заново пережить этот волшебный день.
          </p>
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
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-serif text-xl mb-4">Соцсети</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
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
