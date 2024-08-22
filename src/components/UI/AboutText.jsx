const AboutText = () => {
  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

        .custom-font {
          font-family: 'Open Sans', sans;
        }
      `}</style>
      <div className="custom-font px-6 py-4 rounded-2xl text-white via-gray-800 to-gray-900 shadow-lg shadow-gray-900 border border-gray-800/30 backdrop-blur-sm transform hover:scale-100 transition-all duration-300 font-semibold text-lg">
        <p>
          Hi, I'm a frontend developer with a passion for crafting stunning and
          performant web experiences.
        </p>
      </div>
      <div className="custom-font px-6 py-4 rounded-2xl text-white via-gray-800 to-gray-900 shadow-lg shadow-gray-900 border border-gray-800/30 backdrop-blur-sm transform hover:scale-100 transition-all duration-300 font-semibold text-lg mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam sit, reiciendis blanditiis ut consectetur quisquam exercitationem a iure voluptas, veniam nesciunt fuga, ad eum eveniet? Incidunt expedita voluptate quo!
        </p>
      </div>
      <div className="custom-font px-6 py-4 rounded-2xl text-white via-gray-800 to-gray-900 shadow-lg shadow-gray-900 border border-gray-900/20 backdrop-blur-sm transform hover:scale-100 transition-all duration-300 font-semibold text-lg mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam sit, reiciendis blanditiis ut consectetur quisquam exercitationem a iure voluptas!
        </p>
      </div>
    </div>
  );
};

export default AboutText;