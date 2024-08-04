import React from 'react';

const Navbar = ({ sections, onSectionClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">LOGO</h1>
        <ul className="hidden md:flex space-x-4">
          {sections.map((section, index) => (
            <li key={section}>
              <button 
                onClick={() => onSectionClick(index)} 
                className="text-white hover:text-gray-300"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;