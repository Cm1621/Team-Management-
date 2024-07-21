import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-500">SYNCHRO-P</h2>
          <p className="mt-2 text-gray-400">Simplify your workflow with our task management solution.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-2 text-green-500">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#features" className="text-gray-400 hover:text-green-500 transition duration-300">Features</a>
              </li>
              <li className="mb-2">
                <a href="#workflow" className="text-gray-400 hover:text-green-500 transition duration-300">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-gray-400 hover:text-green-500 transition duration-300">Pricing</a>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-green-500">Follow Us</h3>
            <ul className="flex flex-col p-1 space-y-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 transition duration-300"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  <CiLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; 2024 TaskManager. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer