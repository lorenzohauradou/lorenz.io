import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const BottomNavigation = ({ sections, currentSection, onSectionClick }) => {
  const buttonRefs = useRef([]);
  
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dims = event.currentTarget.getBoundingClientRect();

      const zeroOne = gsap.utils.mapRange(dims.x, dims.x + dims.width, 0, 1, event.clientX);
      const zerotwo = gsap.utils.mapRange(dims.y, dims.y + dims.height, 0, 1, event.clientY);

      gsap.to(event.currentTarget, {
        x: lerp(-20, 20, zeroOne),
        y: lerp(-30, 30, zerotwo)  
      });
    };

    const handleMouseLeave = (event) => {
      gsap.to(event.currentTarget, {
        x: 0,
        y: 0  
      });
    };

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
  }, [buttonRefs.current]); // Aggiorna dipendenze per evitare avvisi

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

BottomNavigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.number.isRequired,
  onSectionClick: PropTypes.func.isRequired,
};

export default BottomNavigation;
