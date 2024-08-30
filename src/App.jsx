import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navigation/Navbar";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import HomeSection from "./components/Sections/HomeSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";

const App = () => {
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState("left");
  const sections = ["Home", "Projects", "About", "Contact"];

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      setDirection(index <= currentSection ? "left" : "right");

      if (window.innerWidth >= 768) {
        const sectionWidth = scrollRef.current.offsetWidth;

        scrollRef.current.scrollTo({
          left: index * sectionWidth,
          behavior: "smooth",
        });
      } else {
        const sectionHeight = scrollRef.current.offsetHeight;

        scrollRef.current.scrollTo({
          top: index * sectionHeight,
          behavior: "smooth",
        });
      }
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const sectionSize = window.innerWidth >= 768
          ? scrollRef.current.offsetWidth  // desktop
          : scrollRef.current.offsetHeight; // mobile
        const scrollPos = window.innerWidth >= 768
          ? scrollRef.current.scrollLeft   // desktop
          : scrollRef.current.scrollTop;   // mobile

        const index = Math.round(scrollPos / sectionSize);
        setCurrentSection(index);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      <div
        ref={scrollRef}
        className={`h-full w-full ${
          window.innerWidth >= 768
            ? "flex overflow-x-auto snap-x snap-mandatory"
            : "block overflow-y-auto snap-y snap-mandatory"
        }`}
      >
        <HomeSection scrollToSection={scrollToSection} direction={direction} />
        <ProjectsSection direction={direction} />
        <About direction={direction} />
        <Contact direction={direction} />
      </div>

      <Navbar  />
      <BottomNavigation
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
      />
    </div>
  );
};

export default App;