
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    procedimento: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar uma avaliação.
    
Nome: ${formData.nome}
WhatsApp: ${formData.whatsapp}
Procedimento de interesse: ${formData.procedimento}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5521995772875?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="mb-8">
              <span className="text-rose-500 font-semibold text-sm uppercase tracking-wide">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-elegante font-bold text-gray-800 mt-2 mb-4">
                Agende sua Consulta
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-gold-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Entre em contato conosco e dê o primeiro passo para transformar sua autoestima.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Campo Grande Office & Mall<br />
                    Estr. da Cachamorra, 350<br />
                    Campo Grande, Rio de Janeiro - RJ<br />
                    CEP: 23040-150 - Bloco 3B - Sala 462
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+5521995772875" className="hover:text-rose-500 transition-colors">
                      (21) 99577-2875
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:priscilacosta.hof@gmail.com" className="hover:text-rose-500 transition-colors">
                    priscilacosta.hof@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-600">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 8h às 14h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/drapriscilacostahof" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src="/Redes Sociais/instagram.svg" alt="Instagram" className="w-10 h-10" />
                </a>
                <a 
                  href="https://www.tiktok.com/@drapriscilacosta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src="/Redes Sociais/tiktok.svg" alt="TikTok" className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-elegante font-bold text-gray-800 mb-6">
                Formulário de Contato
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="(21) 99577-2875"
                  />
                </div>

                <div>
                  <label htmlFor="procedimento" className="block text-sm font-medium text-gray-700 mb-2">
                    Procedimento de Interesse
                  </label>
                  <select
                    id="procedimento"
                    name="procedimento"
                    value={formData.procedimento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um procedimento</option>
                    <option value="Harmonização Facial">Harmonização Facial</option>
                    <option value="Preenchimento Labial">Preenchimento Labial</option>
                    <option value="Toxina Botulínica">Toxina Botulínica</option>
                    <option value="Rinomodelação">Rinomodelação</option>
                    <option value="Bichectomia">Bichectomia</option>
                    <option value="Lipo de Papada">Lipo de Papada</option>
                    <option value="Bioestimulador">Bioestimulador</option>
                    <option value="Fios de PDO">Fios de PDO</option>
                    <option value="Outro">Outro procedimento</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos mais sobre suas expectativas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📱 Enviar via WhatsApp
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Ao enviar este formulário, você será redirecionado para o WhatsApp para finalizar o contato.
              </p>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-elegante font-bold text-gray-800 mb-6 text-center">
              Nossa Localização
            </h3>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=3CMX%2B2H+Campo+Grande,+Rio+de+Janeiro+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório Priscila Costa - Campo Grande Office & Mall, Estr. da Cachamorra, 350"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Endereço:</strong> Campo Grande Office & Mall<br />
                Estr. da Cachamorra, 350 - Campo Grande, Rio de Janeiro - RJ - Bloco 3B - Sala 462
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3CMX%2B2H+Campo+Grande,+Rio+de+Janeiro+-+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver no Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3CMX%2B2H+Campo+Grande,+Rio+de+Janeiro+-+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Como Chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
