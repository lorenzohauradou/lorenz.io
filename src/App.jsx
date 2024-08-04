import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import BottomNavigation from './components/Navigation/BottomNavigation';
import HomeSection from './components/Sections/HomeSection';
import ProjectsSection from './components/Sections/ProjectsSection';

const App = () => {
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Home', 'Projects', 'About', 'Contact'];

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
        updateCurrentSection();
      }
    };

    const updateCurrentSection = () => {
      const scrollPosition = scrollRef.current.scrollLeft;
      const sectionWidth = scrollRef.current.offsetWidth;
      const newSection = Math.round(scrollPosition / sectionWidth);
      setCurrentSection(newSection);
    };

    const current = scrollRef.current;
    current.addEventListener('wheel', handleWheel, { passive: false });
    current.addEventListener('scroll', updateCurrentSection);

    return () => {
      current.removeEventListener('wheel', handleWheel);
      current.removeEventListener('scroll', updateCurrentSection);
    };
  }, []);

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjAyMDIwMDkiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzMwMzAzMDEzIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div ref={scrollRef} className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
        <HomeSection />
        <ProjectsSection />
        {/* Aggiungi qui le sezioni About e Contact */}
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