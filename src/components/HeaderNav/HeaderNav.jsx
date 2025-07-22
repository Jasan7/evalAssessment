import logo from "./../../assets/coindcx-logo.svg";
import { useState } from "react";

const HeaderNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#0e1525] text-white px-4 py-3 border-b border-gray-700 z-50">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center space-x-4 md:space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6" />
          </div>
          <i className="fa-solid fa-signal text-orange-400 text-sm ml-1"></i>

          {/* Nav Links - hidden on mobile */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white">
              TRADE
            </a>
            <a href="#" className="hover:text-white">
              EARN
            </a>
            <a href="#" className="hover:text-white">
              QUICKBUY
            </a>
            <a href="#" className="hover:text-white">
              DCX Learn
            </a>
          </nav>
        </div>

        {/* Right Section: Controls */}
        <div className="flex items-center space-x-4">
          {/* Desktop Icons and Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="relative text-white hover:text-orange-400 text-lg">
              <i className="fas fa-headset"></i>
            </button>

            <button className="relative text-white hover:text-orange-400 text-lg">
              <i className="fas fa-bell"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="text-white border px-3 py-1 rounded hover:bg-white hover:text-black">
              Login
            </button>
            <button className="bg-orange-500 px-3 py-1 rounded text-white hover:bg-orange-600">
              Register
            </button>
          </div>

          {/* Hamburger Icon - mobile only */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#0e1525] text-sm font-medium text-gray-300 flex flex-col space-y-3 p-4 shadow-lg z-40 md:hidden">
          <a href="#" className="hover:text-white">
            TRADE
          </a>
          <a href="#" className="hover:text-white">
            EARN
          </a>
          <a href="#" className="hover:text-white">
            QUICKBUY
          </a>
          <a href="#" className="hover:text-white">
            DCX Learn
          </a>

          {/* Mobile Login/Register */}
          <div className="flex flex-col space-y-2 pt-4">
            <button className="text-white border px-3 py-1 rounded hover:bg-white hover:text-black">
              Login
            </button>
            <button className="bg-orange-500 px-3 py-1 rounded text-white hover:bg-orange-600">
              Register
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderNav;
