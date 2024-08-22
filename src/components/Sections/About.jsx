import Spline from '@splinetool/react-spline';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  const textRef = useRef(null);
  const lerp = (x, y, a) => x * (1 - a) + y * a;

  function handleMouseMove(event) {
    const dims = textRef.current.getBoundingClientRect();

    const xstart = dims.x;
    const xend = xstart + dims.width;
    const zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);

    const ystart = dims.y;
    const yend = ystart + dims.height;
    const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, event.clientY);

    gsap.to(textRef.current, {
      x: lerp(-20, 20, zeroOne),
      y: lerp(-30, 30, zerotwo),
    });
  }

  function handleMouseLeave() {
    gsap.to(textRef.current, {
      x: 0,
      y: 0,
    });
  }

  useEffect(() => {
    const div = textRef.current;
    if (div) {
      div.addEventListener('mousemove', handleMouseMove);
      div.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (div) {
        div.removeEventListener('mousemove', handleMouseMove);
        div.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); 

  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-[500px] h-[500px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
            <Spline scene="https://prod.spline.design/lPVd1X4CHil3zkUI/scene.splinecode" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div ref={textRef} className="px-4 py-2 rounded-2xl transition-colors duration-300 text-white bg-gray-800 font-extrabold font-mono">
            Hi, I'm a frontend developer with a passion for crafting stunning and performant web experiences. I thrive on tackling complex challenges and continuously learning to stay ahead of the curve.
          </div>
          <div className="flex justify-center md:justify-start md:mt-5">
            <div className="bg-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-600 transition duration-300 text-lg mr-4">
              View Resume
            </div>
            <div className="bg-transparent border border-gray-600 text-gray-600 px-8 py-4 rounded-full hover:bg-gray-600 hover:text-white transition duration-300 text-lg">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;