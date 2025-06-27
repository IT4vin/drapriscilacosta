
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'procedimentos', label: 'Procedimentos' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <>
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
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-gold-600 transition-colors font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma avaliação"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Agendar Avaliação
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PC</span>
              </div>
              <div>
                <h2 className="text-lg font-elegante font-bold text-gray-800">Menu</h2>
                <p className="text-xs text-gray-600">Navegação</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-6">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-4 text-gray-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200 font-medium text-lg border-l-4 border-transparent hover:border-gold-500"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <a 
              href="https://wa.me/5511999999999?text=Olá, gostaria de agendar uma avaliação"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium text-center block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar Avaliação
            </a>
            <p className="text-xs text-gray-500 text-center mt-3">
              Resposta rápida via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
