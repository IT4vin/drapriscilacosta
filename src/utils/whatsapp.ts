
export const formatWhatsAppMessage = (data: {
  nome?: string;
  whatsapp?: string;
  procedimento?: string;
  mensagem?: string;
}) => {
  let message = "Olá! Gostaria de agendar uma avaliação.";
  
  if (data.nome) {
    message += `\n\nNome: ${data.nome}`;
  }
  
  if (data.whatsapp) {
    message += `\nWhatsApp: ${data.whatsapp}`;
  }
  
  if (data.procedimento) {
    message += `\nProcedimento de interesse: ${data.procedimento}`;
  }
  
  if (data.mensagem) {
    message += `\nMensagem: ${data.mensagem}`;
  }
  
  return message;
};

export const openWhatsApp = (message: string, phoneNumber: string = '5511999999999') => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
