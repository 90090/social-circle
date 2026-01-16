import { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`relative sticky z-50 w-full top-0 transition-all duration-300 bg-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo (Left) */}
        <h1 className="text-2xl font-bold cursor-pointer text-white">
            <Link to="home" smooth duration={500} className="cursor-pointer">
                <img src="/logo.png" alt="Social Circle Logo" className="h-20 w-auto" />
            </Link>
        </h1>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link to="our-work" smooth duration={500} offset={-80} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 text-black`}>
                Our Work
              </Link>
            </li>
            <li>
              <Link to="services" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 text-black`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 text-black`}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 text-black`}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 text-black`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://www.facebook.com/socialcirclellc" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-700 transition">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaFacebookF className="text-2xl text-gray-700 hover:text-white" />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/thesocialcirclect" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-700 transition">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaLinkedinIn className="text-2xl text-gray-700 hover:text-white" />
            </div>
          </a>
          <a href="mailto:socialcirclect@icloud.com" className="text-xl hover:text-purple-700 transition">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
            <FaEnvelope className="text-2xl text-gray-700 hover:text-white" />
          </div>
          </a>
        </div>

        {/* Mobile Menu Button (Right) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke={`black`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-purple-900 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">&times;</button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] space-y-6">
          <ul className="text-white space-y-6 text-center">
            <li>
              <Link to="our-work" smooth duration={500} offset={-80} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
                Our Work
              </Link>
            </li>
            <li>
              <Link to="services" smooth duration={500} offset={-80} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth duration={500} offset={-80} className="text-2xl font-bold cursor-pointer hover:text-gray-300"onClick={toggleMobileMenu}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={500} offset={-80} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={500} offset={-80} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu} >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://www.facebook.com/socialcirclellc" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300" >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
                <FaFacebookF className="text-2xl text-gray-700 hover:text-white" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/thesocialcirclect" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300" >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaLinkedinIn className="text-2xl text-gray-700 hover:text-white" />
            </div>
            </a>
            <a href="mailto:socialcirclect@icloud.com" className="text-white text-2xl hover:text-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaEnvelope className="text-2xl text-gray-700 hover:text-white" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
