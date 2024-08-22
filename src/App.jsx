import React, { useRef, useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import BottomNavigation from './components/Navigation/BottomNavigation';
import HomeSection from './components/Sections/HomeSection';
import ProjectsSection from './components/Sections/ProjectsSection';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';

const App = () => {
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState('right');
  const sections = ['Home', 'Projects', 'About', 'Contact'];

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;
      
      setDirection(index <= currentSection ? 'right' : 'left');

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth',
      });
      setCurrentSection(index);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black scroll-container">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      <div ref={scrollRef} className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
        <HomeSection scrollToSection={scrollToSection} direction={direction} />
        <ProjectsSection direction={direction} />
        <About />
        <Contact />
      </div>

      <Navbar sections={sections} onSectionClick={scrollToSection} />
      <BottomNavigation 
        sections={sections} 
        currentSection={currentSection} 
        onSectionClick={scrollToSection} 
      />
    </div>
  );
};

export default App;