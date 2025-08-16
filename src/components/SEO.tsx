
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ 
  title = "Consultório Dra.Priscila Costa - Harmonização Facial e Estética",
  description = "Transforme sua autoestima com a estética avançada de Priscila Costa. Especialista em harmonização facial, preenchimentos e procedimentos estéticos no Rio de Janeiro.",
  keywords = "harmonização facial, preenchimento labial, toxina botulínica, estética facial, Priscila Costa, Rio de Janeiro, Campo Grande",
  image = "/imagens/logo2.svg"
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [title, description, keywords, image]);

  return null;
};

export default SEO;
