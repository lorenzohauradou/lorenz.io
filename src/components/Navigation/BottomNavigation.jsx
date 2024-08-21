import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Importiamo GSAP per gestire le animazioni

const BottomNavigation = ({ sections, currentSection, onSectionClick }) => {

  const buttonRefs = useRef([]);

  //helper per interpolare (lerp) tra due valori (x e y) basato su una percentuale 'a'
  //calcolare la nuova posizione basata sulla percentuale del movimento del mouse
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  function handleMouseMove(event) {
    const dims = this.getBoundingClientRect(); //dimensioni e la posizione del bottone

    //range orizzontale
    const xstart = dims.x;
    const xend = xstart + dims.width;
    //percentuale del movimento del mouse da 0 a 1 sulla dimensione del bottone
    const zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);
    //range verticale
    const ystart = dims.y;
    const yend = ystart + dims.height;
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, event.clientY);

    //animazione GSAP, basata sulle percentuali calcolate
    gsap.to(this, {
      x: lerp(-20, 20, zeroOne), //-20 e 20 pixel
      y: lerp(-30, 30, zerotwo)  //-30 e 30 pixel
    });
  }

  function handleMouseLeave() {
    gsap.to(this, {
      x: 0, // posizione orizzontale originale
      y: 0  
    });
  }

  // useEffect che viene eseguito una volta che il componente è montato (e ogni volta che si monta)
  useEffect(() => {
    //per ogni bottone memorizzato in `buttonRefs`, aggiungiamo gli event listener
    buttonRefs.current.forEach(button => {
      if (button) {
        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    //quando il componente si smonta, rimuoviamo gli event listener
    return () => {
      buttonRefs.current.forEach(button => {
        if (button) {
          button.removeEventListener('mousemove', handleMouseMove);
          button.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []); 

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-4">
        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => onSectionClick(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              currentSection === index 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;