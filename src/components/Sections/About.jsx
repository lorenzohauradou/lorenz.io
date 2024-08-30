import { delay, motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="scale xs:pt-28 w-screen min-h-screen flex-shrink-0 snap-start relative flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 flex flex-col items-center justify-center w-full"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:mb-36 gap-8 w-full max-w-4xl pb-10">
          <AboutCard
            icon={<FaRocket className="text-4xl text-blue-400" />}
            title="Passionate"
            content="I'm passionate about creating stunning and performant web experiences that push the boundaries of what's possible."
            delay={0.4}
          />
          <AboutCard
            icon={<FaLightbulb className="text-4xl text-yellow-400" />}
            title="Innovative"
            content="I constantly seek out new technologies and methodologies to solve complex problems and deliver cutting-edge solutions."
            delay={0.6}
          />
          <AboutCard
            icon={<FaCode className="text-4xl text-green-400" />}
            title="Skilled"
            content="With expertise in modern frontend frameworks and best practices, I craft clean, efficient, and maintainable code."
            delay={0.8}
          />
        </div>
      </motion.div>
    </section>
  );
};

const AboutCard = ({ icon, title, content, delay }) => {
  return (
    <motion.div
      initial={{ y: 35, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg border border-gray-700 backdrop-blur-sm hover:bg-opacity-70 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{content}</p>
    </motion.div>
  );
};

export default About;