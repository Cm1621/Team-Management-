import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-900 py-4 shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-2xl font-bold">SYNCHRO-P</h1>

        <div className="hidden md:flex items-center justify-center flex-grow">
          <ul className="flex flex-col md:flex-row md:justify-center items-center">
            <li className="mb-2 md:mr-4">
              <a href="#features" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Features</a>
            </li>
            <li className="mb-2 md:mr-4">
              <a href="#About" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">About Us</a>
            </li>
            <li className="mb-2 md:mr-4">
              <a href="#pricing" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <Link to='/signUp'>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-gradient-to-l transition duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
          <Link to='/Login'>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-l transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={handleMenuToggle}>
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {showMenu && (
          <div className="mt-4 md:hidden bg-gray-800 rounded-lg shadow-lg w-full transition-all duration-500 ease-in-out">
            <ul className="flex flex-col md:flex-row md:justify-center items-center">
            <li className="mb-2 md:mr-4">
              <a href="#features" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Features</a>
            </li>
            <li className="mb-2 md:mr-4">
              <a href="#About" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">About Us</a>
            </li>
            <li className="mb-2 md:mr-4">
              <a href="#pricing" className="text-gray-200 block px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Pricing</a>
            </li>
          </ul>
            <div className="flex flex-col items-center p-4 space-y-2">
              <Link to="/signUp">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                  Sign Up
                </button>
              </Link>
              <Link to="/Login">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;