import styles from './Procedimentos.module.css';

const Procedures = () => {
  const harmonizacaoFacial = [
    { name: "Preenchimento Labial", desc: "Lábios mais volumosos e definidos", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80" },
    { name: "Bigode Chinês", desc: "Suavização de linhas de expressão", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80" },
    { name: "Olheira", desc: "Tratamento para olheiras e bolsas", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&q=80" },
    { name: "Mandíbula", desc: "Definição e contorno mandibular", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80" },
    { name: "Queixo (Mento)", desc: "Projeção e harmonização do queixo", image: "https://images.unsplash.com/photo-1594824804732-5cfc6bbc6ccd?auto=format&fit=crop&w=400&q=80" },
    { name: "Rinomodelação", desc: "Correção nasal sem cirurgia", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80" }
  ];

  const outrosProcedimentos = [
    { name: "Top Model Look", desc: "Harmonização facial completa", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" },
    { name: "Bioestimulador", desc: "Estímulo natural do colágeno", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" },
    { name: "Toxina Botulínica", desc: "Prevenção e suavização de rugas", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80" },
    { name: "Fios de PDO", desc: "Lifting facial sem cirurgia", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80" }
  ];

  const cirurgias = [
    { name: "Lipo de Papada", desc: "Remoção de gordura localizada", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80" },
    { name: "Bichectomia", desc: "Afinamento do rosto", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=400&q=80" },
    { name: "Plastimoplastia", desc: "Rejuvenescimento com enxertia", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=400&q=80" }
  ];

  const ProcedureCard = ({ procedure }: { procedure: { name: string; desc: string; image: string } }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={procedure.image}
          alt={procedure.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-elegante font-semibold text-gray-800 mb-2">
          {procedure.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          {procedure.desc}
        </p>
        
        <a 
          href={`https://wa.me/5521995772875?text=Olá, gostaria de saber mais sobre ${procedure.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors"
        >
          Saiba mais
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="procedimentos" className="py-20 gradient-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-wide">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl font-elegante font-bold text-gray-800 mt-2 mb-4">
            Procedimentos Estéticos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de procedimentos estéticos e cirúrgicos, sempre com foco em resultados naturais e harmoniosos.
          </p>
        </div>

        {/* Harmonização Facial */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-elegante font-bold text-gray-800 mb-8 text-center">
            Harmonização Facial
          </h3>
          <div className={styles.container}>
            {harmonizacaoFacial.map((procedure, index) => (
              <ProcedureCard key={index} procedure={procedure} />
            ))}
          </div>
        </div>

        {/* Outros Procedimentos */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-elegante font-bold text-gray-800 mb-8 text-center">
            Outros Tratamentos
          </h3>
          <div className={styles.container}>
            {outrosProcedimentos.map((procedure, index) => (
              <ProcedureCard key={index} procedure={procedure} />
            ))}
          </div>
        </div>

        {/* Cirurgias */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-elegante font-bold text-gray-800 mb-8 text-center">
            Cirurgias Faciais
          </h3>
          <div className={styles.container}>
            {cirurgias.map((procedure, index) => (
              <ProcedureCard key={index} procedure={procedure} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-elegante font-bold mb-4">
              Não encontrou o procedimento que procura?
            </h3>
            <p className="text-gold-100 mb-6">
              Entre em contato conosco para uma consulta personalizada e descubra qual o melhor tratamento para você.
            </p>
            <a 
              href="https://wa.me/5521995772875?text=Olá, gostaria de uma consulta personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gold-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              💬 Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
