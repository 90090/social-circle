import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { contact, navLinks } from "../data/site";

const socialLinks = [
  { href: contact.facebook, label: "Facebook", Icon: FaFacebookF, external: true },
  { href: contact.linkedin, label: "LinkedIn", Icon: FaLinkedinIn, external: true },
  { href: `mailto:${contact.email}`, label: "Email", Icon: FaEnvelope, external: false },
];

function SocialIcons() {
  return (
    <>
      {socialLinks.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-purple-400 transition-colors">
            <Icon className="text-2xl text-gray-700 group-hover:text-white" />
          </div>
        </a>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#top" aria-label="Social Circle home">
          <img src="/logo.png" alt="Social Circle Logo" className="h-20 w-auto" />
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-lg font-bold text-black hover:text-purple-900 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <SocialIcons />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden focus:outline-none"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-purple-900 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%] space-y-6">
          <ul className="text-white space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="text-2xl font-bold hover:text-gray-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-6 pt-8">
            <SocialIcons />
          </div>
        </div>
      </div>
    </nav>
  );
}
