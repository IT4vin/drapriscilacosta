
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/imagens/logo.svg"
                alt="Logo Priscila Costa"
                className="w-10 h-10 object-contain rounded-full"
              />
              <div>
                <h3 className="text-xl font-elegante font-bold">Consultório Priscila Costa</h3>
                <p className="text-gray-400 text-sm">Harmonização Facial & Estética</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialistas em harmonização facial e procedimentos estéticos de última geração. 
              Realçamos sua beleza natural com segurança e excelência.
            </p>
            
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              CRO 37657 - Especialista RQE
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Consultório licenciado pela ANVISA
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Sobre a Dra. Priscila
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('procedimentos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Procedimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Antes & Depois
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 text-sm">
                  Rua das Flores, 123 - Sala 45<br />
                  Jardins, São Paulo - SP
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+5521995772875" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  (21) 99577-2875
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@priscilacosta.com.br" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  contato@priscilacosta.com.br
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Redes Sociais</h5>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/drapriscilacostaoficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.987 11.988 11.987c6.62 0 11.987-5.366 11.987-11.987C24.014 5.367 18.637.001 12.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="https://tiktok.com/@drapriscilacostaoficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.339-2.018-1.339-3.201V.6h-3.066v14.879c0 1.501-1.218 2.719-2.719 2.719s-2.719-1.218-2.719-2.719c0-1.501 1.218-2.719 2.719-2.719.337 0 .66.062.958.175V9.856c-.298-.041-.603-.062-.916-.062-3.37 0-6.098 2.728-6.098 6.098s2.728 6.098 6.098 6.098 6.098-2.728 6.098-6.098V7.421a9.34 9.34 0 0 0 5.564 1.834V6.187c-.758 0-1.473-.18-2.104-.498L19.32 5.56z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@drapriscilacostaoficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>© {currentYear} Consultório Priscila Costa. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Código de Ética Médica
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              Os resultados dos procedimentos podem variar de paciente para paciente. 
              Este site tem caráter informativo e não substitute a consulta médica presencial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
