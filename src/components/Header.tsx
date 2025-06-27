
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <div>
              <h1 className="text-xl font-elegante font-bold text-gray-800">
                Priscila Costa
              </h1>
              <p className="text-xs text-gray-600">Harmonização Facial</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('procedimentos')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Procedimentos
            </button>
            <button 
              onClick={() => scrollToSection('resultados')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
            >
              Contato
            </button>
            <a 
              href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma avaliação"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium"
            >
              Agendar Avaliação
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('procedimentos')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium text-left"
              >
                Procedimentos
              </button>
              <button 
                onClick={() => scrollToSection('resultados')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium text-left"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium text-left"
              >
                Contato
              </button>
              <a 
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium text-center"
              >
                Agendar Avaliação
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
