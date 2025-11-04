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

  const features = [
    {
      title: "Кошельки",
      description: "Участвуйте в пулах валидаторов прямо из своего кошелька.",
      icon: "Wallet"
    },
    {
      title: "Tonstakers",
      description: "Минимальная сумма - 1 TON с мгновенным выводом.",
      icon: "Coins"
    },
    {
      title: "bemo",
      description: "Institutional grade liquid staking for TON holders of any size.",
      icon: "Building2"
    },
    {
      title: "Stakee",
      description: "Стейкинг от 1 TON с моментальным выводом прямо в Telegram.",
      icon: "Send"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Icon name="Gem" size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-primary">TON</h1>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <button 
                onClick={() => scrollToSection("how-to-use")}
                className="text-sm text-primary hover:text-blue-600 transition-colors"
              >
                Как пользоваться
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm text-primary hover:text-blue-600 transition-colors"
              >
                О сети
              </button>
              <button 
                onClick={() => scrollToSection("create")}
                className="text-sm text-primary hover:text-blue-600 transition-colors"
              >
                Создавайте
              </button>
              <button 
                onClick={() => scrollToSection("community")}
                className="text-sm text-primary hover:text-blue-600 transition-colors"
              >
                Сообщество
              </button>
              <button className="flex items-center gap-2 text-sm text-primary hover:text-blue-600 transition-colors">
                <Icon name="Globe" size={16} />
                Рус
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                Повышайте безопасность сети
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Используйте свои Toncoin, чтобы помочь Валидаторам поддерживать безопасность сети и получать вознаграждения.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full"
              >
                Как работают валидаторы
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute top-10 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 rotate-45">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80"></div>
                    </div>
                    <div className="absolute -top-5 right-20 w-24 h-24 rotate-12">
                      <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-70"></div>
                    </div>
                    <div className="relative w-64 h-64 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform rotate-6 opacity-90"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 to-blue-600 rounded-3xl transform -rotate-6 opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Gem" size={80} className="text-white z-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              TON — это сеть Proof-of-Stake
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Это означает, что ее безопасность и стабильность обеспечивают{" "}
              <span className="text-blue-600 font-medium">валидаторы</span>. 
              Валидаторам необходимо иметь большой объем Toncoin. Но даже с небольшим 
              количеством Toncoin вы можете помочь защитить сеть, став участником пулов 
              Номинаторов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Icon name={feature.icon as any} size={24} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Начните зарабатывать с TON
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Присоединяйтесь к тысячам пользователей, которые уже поддерживают безопасность сети
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-base rounded-full"
            >
              Начать сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-white border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Icon name="Gem" size={18} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-primary">TON</span>
            </div>
            <div className="flex gap-6">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Документация
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Telegram
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
