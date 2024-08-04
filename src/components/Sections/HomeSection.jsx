import React from 'react';
import Spline from '@splinetool/react-spline';

const HomeSection = () => {
  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Full Stack Developer</h1>
            <p className="text-xl mb-6 text-gray-300">Forging robust digital solutions with code and innovation</p>
            <button className="bg-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-600 transition duration-300 text-lg">
              Explore Works
            </button>
          </div>
          
          <div className="md:w-2/3 h-[500px] md:h-[600px] z-0">
            <Spline scene="https://prod.spline.design/ttgw-1SILMq6tuUl/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;