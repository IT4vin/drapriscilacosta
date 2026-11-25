
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-on-scroll">
            <div className="relative w-full h-auto md:w-[400px] md:h-[600px] mx-auto">
              <img 
                src="/imagens/priscilacosta2.webp"
                srcSet="/imagens/priscilacosta2-640.webp 640w, /imagens/priscilacosta2.webp 1280w"
                sizes="(min-width: 768px) 400px, 100vw"
                width={1280}
                height={1994}
                loading="lazy"
                alt="Dra. Priscila Costa em seu consultório"
                className="w-full h-auto md:w-full md:h-full object-cover rounded-3xl shadow-xl"
                style={{ objectPosition: 'center top' }}
              />
              
              {/* Credential badges */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                <p className="text-sm font-semibold text-gray-800">CRO 37657</p>
                <p className="text-xs text-gray-600">Especialista RQE</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="text-gold-600 font-semibold text-sm uppercase tracking-wide">
                Sobre a Profissional
              </span>
              <h2 className="text-3xl md:text-4xl font-elegante font-bold text-gray-800 mt-2 mb-4">
                Dra. Priscila Costa
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Doutora especialista em cirurgia orofacial e procedimentos estéticos, com mais de 
              16 anos de experiência dedicados à arte de realçar a beleza natural dos pacientes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Formação Odontológica</h4>
                  <p className="text-gray-600">Graduada em Odontologia pela Universidade Federal Fluminense UFF. Especialista em Cabeça e Pescoço na área de Harmonização Facial.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Certificações Internacionais</h4>
                  <p className="text-gray-600">Cursos avançados em harmonização facial nos principais centros de excelência mundial.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Resultados Naturais</h4>
                  <p className="text-gray-600">Filosofia baseada em realçar a beleza única de cada paciente, respeitando suas características individuais.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 gradient-gray p-6 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gold-600">+1000</h3>
                <p className="text-sm text-gray-600">Procedimentos</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gold-600">16+</h3>
                <p className="text-sm text-gray-600">Anos Experiência</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gold-600">98%</h3>
                <p className="text-sm text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
