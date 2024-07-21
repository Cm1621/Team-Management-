import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-0 lg:mt-0 bg-gray-900 text-white p-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          SYNCHRO-P<br></br>
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            {" "}
            For Managing Your Projects
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-gray-400 max-w-4xl">
        the ultimate solution for task management and project tracking, revolutionizing the way teams work together. It provides a comprehensive suite of tools designed to streamline workflow, enhance productivity, and ensure timely project completion.
        </p>
        <div className="flex justify-center my-10">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 py-3 px-4 mx-3 rounded-md hover:bg-gradient-to-l transition duration-300 ease-in-out">
            <Link to='/signUp' className="text-white">Start From Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;