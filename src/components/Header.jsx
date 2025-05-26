import React, { useState } from "react";
import IMG from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import menuCloseIcon from "../assets/images/icon-menu-close.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative flex items-center justify-between bg-white shadow-md md:shadow-none">
      {/* Logo */}
      <div className="flex items-center z-20">
        <img src={IMG} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10 text-gray-700 text-sm font-medium">
        <a href="#" className="hover:text-red-400 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-red-400 transition-colors">
          New
        </a>
        <a href="#" className="hover:text-red-400 transition-colors">
          Popular
        </a>
        <a href="#" className="hover:text-red-400 transition-colors">
          Trending
        </a>
        <a href="#" className="hover:text-red-400 transition-colors">
          Categories
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-20"
        aria-label="Toggle menu"
      >
        <img src={menuOpen ? menuCloseIcon : menuIcon} alt="Menu" />
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-10`}
      >
        <div className=" flex flex-col space-y-6 text-gray-700 font-medium text-lg">
          <a href="#" onClick={toggleMenu} className="hover:text-red-400">
            Home
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-400">
            New
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-400">
            Popular
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-400">
            Trending
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-red-400">
            Categories
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
