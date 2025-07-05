
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
              <img 
                src="/imagens/logo.svg"
                alt="Logo Priscila Costa"
                className="w-10 h-10 object-contain rounded-full"
              />
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
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/drapriscilacostahof" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src="/Redes Sociais/instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@drapriscilacosta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src="/Redes Sociais/tiktok.svg" alt="TikTok" className="w-6 h-6" />
                </a>
              </div>
              
              <a 
                href="https://wa.me/5521995772875?text=Olá, gostaria de agendar uma avaliação"
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

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200 font-medium rounded-lg"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-200 mt-4">
                  {/* Social Media Mobile */}
                  <div className="flex justify-center space-x-6 mb-4">
                    <a 
                      href="https://www.instagram.com/drapriscilacostahof" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 rounded-lg transition-all duration-300"
                    >
                      <img src="/Redes Sociais/instagram.svg" alt="Instagram" className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@drapriscilacosta" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg transition-all duration-300"
                    >
                      <img src="/Redes Sociais/tiktok.svg" alt="TikTok" className="w-6 h-6" />
                      <span className="text-sm font-medium text-gray-700">TikTok</span>
                    </a>
                  </div>
                  
                  <a 
                    href="https://wa.me/5521995772875?text=Olá, gostaria de agendar uma avaliação"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium text-center block shadow-md hover:shadow-lg"
                  >
                    Agendar Avaliação
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
