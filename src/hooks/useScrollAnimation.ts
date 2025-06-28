import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('animate-on-scroll-active');
            
            // Se o elemento tem um ID específico de procedimento, destaque-o
            if (element.id && element.id !== 'resultados') {
              setAnimatedElements(prev => new Set(prev).add(element.id));
              
              // Remove o destaque após 3 segundos
              setTimeout(() => {
                setAnimatedElements(prev => {
                  const newSet = new Set(prev);
                  newSet.delete(element.id);
                  return newSet;
                });
              }, 3000);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return { animatedElements };
};

// Função para destacar um elemento específico ao navegar
export const highlightProcedureCard = (procedureId: string) => {
  const element = document.getElementById(procedureId);
  if (element) {
    // Adiciona uma classe de destaque temporária
    element.classList.add('procedure-highlighted');
    
    // Remove a classe após a animação
    setTimeout(() => {
      element.classList.remove('procedure-highlighted');
    }, 2000);
  }
};

// Função de rolagem melhorada
export const scrollToProcedureSection = (sectionId: string) => {
  const target = document.getElementById(sectionId);
  if (target) {
    // Rola suavemente até o elemento
    target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center',
      inline: 'nearest'
    });
    
    // Destaca o card após um pequeno delay
    setTimeout(() => {
      highlightProcedureCard(sectionId);
    }, 800);
  }
};
