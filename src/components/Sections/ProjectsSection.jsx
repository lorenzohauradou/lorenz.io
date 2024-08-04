import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-8 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2 text-white">Project {project}</h3>
                <p className="text-gray-300">Description of project {project}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;