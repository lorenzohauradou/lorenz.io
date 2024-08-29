import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BottomNavigation = ({ sections, currentSection, onSectionClick }) => {
  const buttonRefs = useRef([]);
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  function handleMouseMove(event) {
    const dims = this.getBoundingClientRect();

    const xstart = dims.x;
    const xend = xstart + dims.width;
    const zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);

    const ystart = dims.y;
    const yend = ystart + dims.height;
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, event.clientY);

    gsap.to(this, {
      x: lerp(-20, 20, zeroOne),
      y: lerp(-30, 30, zerotwo)  
    });
  }

  function handleMouseLeave() {
    gsap.to(this, {
      x: 0,
      y: 0  
    });
  }

  useEffect(() => {
    buttonRefs.current.forEach(button => {
      if (button) {
        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);
      }
    });

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