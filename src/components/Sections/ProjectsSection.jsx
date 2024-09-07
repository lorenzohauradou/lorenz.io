import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const ProjectsSection = ({ direction }) => {
  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-8 text-white xs:text-center md:text-left">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg"
                initial={{
                  opacity: 0,
                  x: direction === 'right' ? 100 : -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: project * 0.1 }}
                viewport={{ once: false }}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Project {project}
                </h3>
                <p className="text-gray-300">
                  Description of project {project}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectsSection.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default ProjectsSection;