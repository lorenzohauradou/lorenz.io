import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const HomeSection = ({ triggerAnimation, scrollToSection }) => {
  const splineRef = useRef();

  /*useEffect(() => {
    if (triggerAnimation && splineRef.current) {
      console.log(splineRef.current);
      try {
        if (typeof splineRef.current.emitEvent === 'function') {
          splineRef.current.emitEvent('Start'); // Assicurati che 'Start' sia l'evento corretto
        } else {
          console.error('emitEvent non è disponibile su splineRef.current');
        }
      } catch (error) {
        console.error('Errore nell\'eseguire emitEvent:', error);
      }
    }
  }, [triggerAnimation]); */

  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Full Stack Developer</h1>
            <p className="text-xl mb-6 text-gray-300">Forging robust digital solutions with code and innovation.</p>
            <button
              className="bg-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-600 transition duration-300 text-lg"
              onClick={() => scrollToSection(1)}
              >
              Explore Works
            </button>
          </div>
          
          <div className="md:w-2/3 h-[500px] md:h-[600px] z-0">
            <Spline 
              ref={splineRef}
              scene="https://prod.spline.design/lPVd1X4CHil3zkUI/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;