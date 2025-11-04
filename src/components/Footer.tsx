import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/36f31bed-1b6e-4080-b847-e41fe15aab77/files/0cf6bfed-ec76-4f0a-b4f5-453b640d37a3.jpg" 
                alt="VINSTART" 
                className="h-12 w-12 object-cover rounded-full"
              />
              <span className="font-serif text-2xl font-semibold">VINSTART</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Профессиональная свадебная фото и видеосъёмка.<br />
              Создаём истории любви с 2015 года.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+79991234567" className="flex items-center gap-3 hover:text-primary-foreground/80 transition-colors">
                <Icon name="Phone" size={18} />
                +7 (999) 123-45-67
              </a>
              <a href="mailto:info@vinstart.ru" className="flex items-center gap-3 hover:text-primary-foreground/80 transition-colors">
                <Icon name="Mail" size={18} />
                info@vinstart.ru
              </a>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} />
                Москва, Россия
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vinstart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="https://vk.com/vinstart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="https://youtube.com/@vinstart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} VINSTART. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
