/*import { useRef, useState, useEffect, useCallback } from 'react';

const useScrollFunctionality = (sections) => {
  const scrollRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState("left");

  const isDesktop = useCallback(() => window.innerWidth >= 768, []);

  const getSectionSize = useCallback(() => 
    isDesktop() ? scrollRef.current.offsetWidth : scrollRef.current.offsetHeight,
  [isDesktop]);

  const getScrollPosition = useCallback(() => 
    isDesktop() ? scrollRef.current.scrollLeft : scrollRef.current.scrollTop,
  [isDesktop]);

  const scrollToSection = useCallback((index) => {
    if (scrollRef.current) {
      setDirection(index <= currentSection ? "left" : "right");

      const sectionSize = getSectionSize();
      const scrollProperty = isDesktop() ? 'left' : 'top';

      scrollRef.current.scrollTo({
        [scrollProperty]: index * sectionSize,
        behavior: "smooth",
      });

      setCurrentSection(index);
    }
  }, [currentSection, getSectionSize, isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const sectionSize = getSectionSize();
        const scrollPos = getScrollPosition();
        const index = Math.round(scrollPos / sectionSize);
        setCurrentSection(index);
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [getSectionSize, getScrollPosition]);

  return { scrollRef, currentSection, direction, scrollToSection };
};

export default useScrollFunctionality; */