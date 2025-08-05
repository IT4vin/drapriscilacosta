const BackgroundDecorations = () => (
  <>
    <div className="absolute top-20 right-10 w-32 h-32 bg-gold-200/30 rounded-full blur-xl"></div>
    <div className="absolute bottom-20 left-10 w-24 h-24 bg-neutral-200/30 rounded-full blur-xl"></div>
  </>
);

const TrustIndicators = () => (
  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
      <span>+1000 procedimentos realizados</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
      <span>Especialista certificada</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
      <span>Resultados naturais</span>
    </div>
  </div>
);

type FloatingCardProps = {
  position: "top-left" | "bottom-right";
  icon: string;
  title: string;
  subtitle: string;
};

const FloatingCard = ({ position, icon, title, subtitle }: FloatingCardProps) => {
  const posClass =
    position === "top-left"
      ? "absolute -top-4 -left-4"
      : "absolute -bottom-4 -right-4";
  return (
    <div className={`${posClass} bg-white p-4 rounded-2xl shadow-lg z-20 hidden md:block`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-gray relative overflow-hidden">
      {/* Background decorative elements */}
      <BackgroundDecorations />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegante font-bold text-gray-800 leading-tight mb-6">
              Transforme sua{' '}
              <span className="text-gradient">autoestima</span> com a estética avançada
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Dra. Priscila Costa, especialista em harmonização facial e procedimentos estéticos de última geração. 
              Realce sua beleza natural com segurança e excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://wa.me/5521995772875?text=Olá, gostaria de agendar minha avaliação gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📅 Agendar Avaliação
              </a>
              
              <button 
                onClick={() => document.getElementById('procedimentos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-full hover:bg-gold-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Ver Procedimentos
              </button>
            </div>

            {/* Trust indicators */}
            <TrustIndicators />
          </div>

          {/* Image */}
          <div className="animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-neutral-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="/imagens/priscilacosta.svg"
                alt="Dra. Priscila Costa"
                className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
              
              {/* Floating cards */}
              <FloatingCard
                position="top-left"
                icon="⭐"
                title="5.0"
                subtitle="Google Reviews"
              />
              <FloatingCard
                position="bottom-right"
                icon="💉"
                title="Harmonização"
                subtitle="Facial Premium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
