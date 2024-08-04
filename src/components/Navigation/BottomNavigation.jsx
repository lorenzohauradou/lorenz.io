import React from 'react';

const BottomNavigation = ({ sections, currentSection, onSectionClick }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-4">
        {sections.map((section, index) => (
          <button
            key={section}
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