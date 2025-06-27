
const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-rose relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-200/30 rounded-full blur-xl"></div>
      
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
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar minha avaliação gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📅 Avaliação Gratuita
              </a>
              
              <button 
                onClick={() => document.getElementById('procedimentos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Ver Procedimentos
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span>+1000 procedimentos realizados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span>Especialista certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span>Resultados naturais</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-gold-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                alt="Dra. Priscila Costa"
                className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg z-20 hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-semibold text-gray-800">5.0</p>
                    <p className="text-xs text-gray-600">Google Reviews</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg z-20 hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💉</span>
                  <div>
                    <p className="font-semibold text-gray-800">Harmonização</p>
                    <p className="text-xs text-gray-600">Facial Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
