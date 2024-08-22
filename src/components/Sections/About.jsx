import Spline from "@splinetool/react-spline";
import AboutText from "../UI/AboutText";

const About = () => {
  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full overflow-hidden md:right-24">
            <Spline scene="https://prod.spline.design/p6VsBHC51yQh0do1/scene.splinecode" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            About Me
          </h2>
          <AboutText />
        </div>
      </div>
    </section>
  );
};

export default About;