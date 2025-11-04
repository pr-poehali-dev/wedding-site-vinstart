const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 text-primary">
            Наши работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Каждая свадьба уникальна, и мы создаём историю именно вашей любви
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group animate-scale-in">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Wedding Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group animate-scale-in">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Wedding Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@vinstart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all font-medium"
          >
            Смотреть все работы
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
