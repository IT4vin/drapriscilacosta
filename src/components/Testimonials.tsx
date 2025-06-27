
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mariana Silva",
      procedure: "Harmonização Facial",
      rating: 5,
      text: "Fiz minha harmonização facial com a Dra. Priscila e o resultado superou todas as minhas expectativas! Ela tem um olhar artístico incrível e me deixou muito natural. Recomendo de olhos fechados!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Carolina Mendes",
      procedure: "Preenchimento Labial",
      rating: 5,
      text: "Estava com medo de ficar artificial, mas a Dra. Priscila fez um trabalho perfeito. Meus lábios ficaram naturais e harmoniosos com meu rosto. Atendimento nota 10!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Juliana Santos",
      procedure: "Toxina Botulínica",
      rating: 5,
      text: "Excelente profissional! Muito cuidadosa, explicou todo o procedimento e o resultado foi exatamente o que eu esperava. Consultório impecável e atendimento humanizado.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "Amanda Costa",
      procedure: "Rinomodelação",
      rating: 5,
      text: "Sempre tive complexo com meu nariz, mas não queria fazer cirurgia. A rinomodelação com a Dra. Priscila mudou minha vida! Resultado incrível e recuperação super tranquila.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "Renata Oliveira",
      procedure: "Bichectomia",
      rating: 5,
      text: "Dra. Priscila é uma artista! Fez minha bichectomia com tanto cuidado e carinho. O resultado ficou perfeito, exatamente como eu sonhava. Super indico!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 6,
      name: "Fernanda Lima",
      procedure: "Bioestimulador",
      rating: 5,
      text: "O bioestimulador de colágeno foi a melhor escolha que fiz! Dra. Priscila é muito técnica e cuidadosa. Minha pele ficou mais firme e jovem. Voltarei sempre!",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Rating stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gold-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
      
      {/* Testimonial text */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      {/* Patient info */}
      <div className="flex items-center">
        <img 
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-rose-500">{testimonial.procedure}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 gradient-rose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wide">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-elegante font-bold text-gray-800 mt-2 mb-4">
            O que dizem nossas pacientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação das nossas pacientes é nossa maior recompensa. Veja alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Google Reviews section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-elegante font-bold text-gray-800">
                Avaliações Google
              </h3>
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold-400 fill-current mr-1" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800 ml-3">5.0</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Baseado em mais de 150 avaliações verificadas no Google
            </p>
            
            <a 
              href="https://g.page/r/SEU_LINK_GOOGLE_REVIEWS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 font-semibold inline-flex items-center"
            >
              Ver todas as avaliações
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Video testimonials section */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-elegante font-bold text-gray-800 text-center mb-8">
            Depoimentos em Vídeo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <button className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Marina - Harmonização Completa</h4>
                <p className="text-sm text-gray-600">Veja o relato completo da transformação</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <button className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Paula - Preenchimento Labial</h4>
                <p className="text-sm text-gray-600">Experiência completa do procedimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
