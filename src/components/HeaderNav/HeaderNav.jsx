import logo from "./../../assets/coindcx-logo.svg";

const HeaderNav = () => {
  return (
    <header className="bg-[#0e1525] text-white px-4 py-3 border-b border-gray-700">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6" />
          </div>
          <i className="fa-solid fa-signal text-orange-400 text-sm ml-1"></i>

          {/* Nav Links */}
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
        <div className="flex items-center space-x-6">
          {/* Support Icon */}
          <button className="relative text-white hover:text-orange-400 text-lg">
            <i className="fas fa-headset"></i>
          </button>

          {/* Notification Bell */}
          <button className="relative text-white hover:text-orange-400 text-lg">
            <i className="fas fa-bell"></i>
            {/* Optional red dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="text-white border px-3 py-1 rounded hover:bg-white hover:text-black">
            Login
          </button>
          <button className="bg-orange-500 px-3 py-1 rounded text-white hover:bg-orange-600">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
