import React, { useState } from 'react';
import images from './../constants/images';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 md:px-10 px-6 flex justify-between items-center  dark:bg-gray-900 z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={images.gfgLogo} alt="Logo" className="h-10 mr-3" />
      </div>

      {/* Menu for larger screens */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <button className="text-[20px] font-semibold">Products</button>
        <button className="text-[20px] font-semibold">Resources</button>
        <button className="text-[20px] font-semibold">Developers</button>
        <button className="bg-[#121316] text-white text-[20px] rounded-full px-6 py-1 hover:bg-gray-800">
          Open App
        </button>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-transparent p-0"
        >
          {isDarkMode ? (
            <MoonIcon className="w-8 h-8 text-white" />
          ) : (
            <SunIcon className="w-9 h-9 text-yellow-500" />
          )}
        </button>
      </div>

      {/* Burger menu for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 mr-3 rounded-full flex items-center justify-center transition-all bg-transparent p-0"
        >
          {isDarkMode ? (
            <MoonIcon className="w-8 h-8 text-white" />
          ) : (
            <SunIcon className="w-9 h-9 text-yellow-500" />
          )}
        </button>

        <button
          onClick={toggleMenu}
          className="w-10 h-10 text-gray-800 dark:text-white"
        >
          {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-20">
          <div className="flex flex-col items-center justify-center gap-6 py-4">
            <button className="text-[20px] font-semibold">Products</button>
            <button className="text-[20px] font-semibold">Resources</button>
            <button className="text-[20px] font-semibold">Developers</button>
            <button className="bg-[#121316] text-white text-[20px] rounded-full px-6 py-1 hover:bg-gray-800">
              Open App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
