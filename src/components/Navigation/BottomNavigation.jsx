import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Importiamo GSAP per gestire le animazioni

const BottomNavigation = ({ sections, currentSection, onSectionClick }) => {
  // Crea un array di riferimenti per i bottoni
  // useremo questo array per accedere ai bottoni DOM direttamente
  const buttonRefs = useRef([]);

  // Funzione helper per interpolare (lerp) tra due valori (x e y) basato su una percentuale 'a'
  // Questa funzione aiuta a calcolare la nuova posizione basata sulla percentuale del movimento del mouse
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  // Funzione che viene chiamata quando il mouse si muove sopra un bottone
  // 'event' contiene le informazioni del movimento del mouse
  function handleMouseMove(event) {
    const dims = this.getBoundingClientRect(); // Otteniamo le dimensioni e la posizione del bottone

    // Calcoliamo il range orizzontale (da sinistra a destra del bottone)
    const xstart = dims.x;
    const xend = xstart + dims.width;

    // Calcoliamo la percentuale del movimento del mouse da 0 a 1 sulla dimensione del bottone
    const zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);

    // Calcoliamo il range verticale (da sopra a sotto del bottone)
    const ystart = dims.y;
    const yend = ystart + dims.height;

    // Calcoliamo la percentuale del movimento del mouse da 0 a 1 sulla dimensione del bottone
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, event.clientY);

    // Animiamo la posizione del bottone usando GSAP, basata sulle percentuali calcolate
    gsap.to(this, {
      x: lerp(-20, 20, zeroOne), // Spostiamo il bottone sull'asse X tra -20 e 20 pixel
      y: lerp(-30, 30, zerotwo)  // Spostiamo il bottone sull'asse Y tra -30 e 30 pixel
    });
  }

  // Funzione che viene chiamata quando il mouse esce dall'area del bottone
  // Riporta il bottone alla posizione originale
  function handleMouseLeave() {
    gsap.to(this, {
      x: 0, // Ritorna il bottone alla posizione orizzontale originale
      y: 0  // Ritorna il bottone alla posizione verticale originale
    });
  }

  // useEffect che viene eseguito una volta che il componente è montato (e ogni volta che si monta)
  useEffect(() => {
    // Per ogni bottone memorizzato in `buttonRefs`, aggiungiamo gli event listener
    buttonRefs.current.forEach(button => {
      if (button) { // Verifichiamo che il bottone esista
        button.addEventListener('mousemove', handleMouseMove); // Aggiungiamo l'animazione al movimento del mouse
        button.addEventListener('mouseleave', handleMouseLeave); // Aggiungiamo il reset quando il mouse esce
      }
    });

    // Cleanup: quando il componente si smonta, rimuoviamo gli event listener
    return () => {
      buttonRefs.current.forEach(button => {
        if (button) { // Verifichiamo che il bottone esista
          button.removeEventListener('mousemove', handleMouseMove); // Rimuoviamo l'animazione al movimento del mouse
          button.removeEventListener('mouseleave', handleMouseLeave); // Rimuoviamo il reset quando il mouse esce
        }
      });
    };
  }, []); // L'array vuoto significa che questo useEffect viene eseguito solo una volta, al montaggio del componente

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-4">
        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => (buttonRefs.current[index] = el)} // Assegniamo il riferimento di ciascun bottone al corrispondente indice di `buttonRefs`
            onClick={() => onSectionClick(index)} // Al click, esegue la funzione per navigare alla sezione corrispondente
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