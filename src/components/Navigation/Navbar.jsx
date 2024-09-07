import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const scrollElement = scrollRef.current;
      const text = scrollElement.firstChild;
      let position = scrollElement.offsetWidth;

      const animate = () => {
        position += 1;
        if (position >= text.offsetWidth) {
          position = -400;
        }
        text.style.transform = `translateX(${-position}px)`;
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationId);
    }
  }, [isMobile]);

  return (
    <nav className="fixed top-8 left-0 right-0 p-4 z-50 overflow-hidden">
      {isMobile ? (
        <div ref={scrollRef} className="relative whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap opacity-1 blur-[1px]">
            <span className="text-2xl font-bold text-slate-300 mr-8">LORENZO HAURADOU</span>
            <span className="text-2xl font-bold text-slate-300 mr-8">LORENZO HAURADOU</span>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">LORENZO</h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
