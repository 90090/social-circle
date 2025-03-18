import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [mobilenavBg, setmobilenavBg] = useState("white");
  const [textcolorlink, setTextColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("shadow-lg bg-white");
        setTextColor("text-black");
        setmobilenavBg("black");
      } else {
        setNavbarBg("bg-transparent");
        setTextColor("text-white");
        setmobilenavBg("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed z-50 w-full top-0 transition-all duration-300 ${navbarBg} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo (Left) */}
        <h1 className="text-2xl font-bold cursor-pointer text-white">
            <Link to="home" smooth duration={500} className="cursor-pointer">
                <img src="/logo.png" alt="Social Circle Logo" className="h-20 w-auto" />
            </Link>
        </h1>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 pr-30">
            <li>
              <Link to="services" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 ${textcolorlink}`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 ${textcolorlink}`}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="about" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 ${textcolorlink}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={500} offset={-60} className={`text-lg font-bold cursor-pointer hover:text-purple-900 transition duration-300 ${textcolorlink}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button (Right) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8`} fill="none" viewBox="0 0 24 24" stroke={`${mobilenavBg}`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-purple-900 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">&times;</button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-6 h-full text-white">
          <li>
            <Link to="services" smooth duration={500} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="reviews" smooth duration={500} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} className="text-2xl font-bold cursor-pointer hover:text-gray-300" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
