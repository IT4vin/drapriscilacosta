import { useState } from 'react';

const BeforeAfter = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const results = [
    {
      id: 1,
      procedure: 'Preenchimento Labial',
      category: 'harmonizacao',
      sectionId: 'preenchimento-labial',
      before: '/antes-depois/preenchimento labial.svg',
      after: '/antes-depois/preenchimento labial.svg'
    },
    {
      id: 2,
      procedure: 'Harmonização Mandibular',
      category: 'harmonizacao',
      sectionId: 'mandibula',
      before: '/antes-depois/mandibula e rinomodelação.svg',
      after: '/antes-depois/mandibula e rinomodelação.svg'
    },
    {
      id: 3,
      procedure: 'Rinomodelação',
      category: 'harmonizacao',
      sectionId: 'rinomodelacao',
      before: '/antes-depois/Rinomodelação.svg',
      after: '/antes-depois/Rinomodelação.svg'
    },
    {
      id: 4,
      procedure: 'Toxina Botulínica (Botox)',
      category: 'botox',
      sectionId: 'toxina-botulinica',
      before: '/antes-depois/Toxina Botulínica.svg',
      after: '/antes-depois/Toxina Botulínica.svg'
    },
    {
      id: 5,
      procedure: 'Bichectomia',
      category: 'cirurgia',
      sectionId: 'bichectomia',
      before: '/antes-depois/Bichectomia.svg',
      after: '/antes-depois/Bichectomia.svg'
    },
    {
      id: 6,
      procedure: 'Lipo de Papada',
      category: 'cirurgia',
      sectionId: 'lipo-papada',
      before: '/antes-depois/lipo de papada.svg',
      after: '/antes-depois/lipo de papada.svg'
    },
    // Procedimentos adicionais para completar a lista
    {
      id: 7,
      procedure: 'Bigode Chinês',
      category: 'harmonizacao',
      sectionId: 'bigode-chines',
      before: '/antes-depois/Bigode Chines.svg',
      after: '/antes-depois/Bigode Chines.svg'
    },
    {
      id: 8,
      procedure: 'Olheira',
      category: 'harmonizacao',
      sectionId: 'olheira',
      before: '/antes-depois/olheira.svg',
      after: '/antes-depois/olheira.svg'
    },
    {
      id: 9,
      procedure: 'Queixo (Mento)',
      category: 'harmonizacao',
      sectionId: 'queixo-mento',
      before: '/antes-depois/Queixo Mento.svg',
      after: '/antes-depois/Queixo Mento.svg'
    },
    {
      id: 10,
      procedure: 'Top Model Look',
      category: 'outros',
      sectionId: 'top-model-look',
      before: '/antes-depois/Top Model Look.svg',
      after: '/antes-depois/Top Model Look.svg'
    },
    {
      id: 11,
      procedure: 'Bioestimulador',
      category: 'outros',
      sectionId: 'bioestimulador',
      before: '/antes-depois/Bioestimulador.svg',
      after: '/antes-depois/Bioestimulador.svg'
    },
    {
      id: 12,
      procedure: 'Fios de PDO',
      category: 'outros',
      sectionId: 'fios-pdo',
      before: '/antes-depois/Fios de PDO.svg',
      after: '/antes-depois/Fios de PDO.svg'
    },
    {
      id: 13,
      procedure: 'Plastimoplastia',
      category: 'cirurgia',
      sectionId: 'plastimoplastia',
      before: '/antes-depois/Plastimoplastia.svg',
      after: '/antes-depois/Plastimoplastia.svg'
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos os Resultados' },
    { id: 'harmonizacao', label: 'Harmonização Facial' },
    { id: 'botox', label: 'Botox & Toxinas' },
    { id: 'outros', label: 'Outros Tratamentos' },
    { id: 'cirurgia', label: 'Cirurgias' }
  ];

  const filteredResults = activeFilter === 'todos' 
    ? results 
    : results.filter(result => result.category === activeFilter);

  const BeforeAfterCard = ({ result }: { result: typeof results[0] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        id={result.sectionId}
        className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 scroll-mt-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={result.before}
            alt={`${result.procedure} - Antes`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img 
            src={result.after}
            alt={`${result.procedure} - Depois`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Overlay labels */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {isHovered ? 'Depois' : 'Antes'}
            </span>
          </div>

          {/* Indicador de destaque quando navegado */}
          <div className="absolute top-4 right-4 opacity-0 animate-pulse">
            <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">
              {result.procedure}
            </h3>
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3">
            Passe o mouse para ver o resultado
          </p>
          <a 
            href={`https://wa.me/5521995772875?text=Olá, vi os resultados de ${result.procedure} e gostaria de saber mais`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 hover:text-gold-700 font-semibold text-sm inline-flex items-center"
          >
            Quero este resultado
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-gold-600 font-semibold text-sm uppercase tracking-wide">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-elegante font-bold text-gray-800 mt-2 mb-4">
            Antes & Depois
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os resultados transformadores dos nossos procedimentos. Cada caso é único e personalizado.
            <br />
            <span className="text-sm text-gold-600 font-medium">
              💡 Clique em qualquer procedimento acima para ver os resultados específicos
            </span>
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {filteredResults.map((result) => (
            <BeforeAfterCard key={result.id} result={result} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-gray-50 p-6 rounded-2xl max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Importante:</strong> Os resultados podem variar de pessoa para pessoa. 
              As imagens são de pacientes reais que autorizaram o uso para fins educativos. 
              Consulte sempre um profissional qualificado para avaliar seu caso específico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
