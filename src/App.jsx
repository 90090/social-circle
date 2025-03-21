import { motion } from "framer-motion";
import { FaLinkedin,FaFacebook } from 'react-icons/fa';
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import Clients from "./Clients";
import Services from "./Services";
import Mystory from "./Mystory";


export default function App() {


  return (
    <div className="text-white bg-black">
      <Navbar/>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 text-center">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          Elevating your Business Through Digital Marketing
        </motion.h1>
      </section>

      <Clients/>

      {/* Video Highlights */}
      <section id="videos" className="py-20 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Work</h2>
        <div className="flex justify-center">
          <video className="w-3/4 shadow-lg" controls>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <Services/>

      {/* Google Reviews */}
      <Reviews />

      {/* About Section */}
      <Mystory/>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p>Email us directly at <a href="mailto:socialcirclect@icloud.com" className="underline">socialcirclect@icloud.com</a></p>
        <div className="max-w-xl mx-auto p-6 mb-8">
          <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/thesocialcirclellc/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaFacebook className="text-2xl text-gray-700 hover:text-white" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/courtneyligi/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
              <FaLinkedin className="text-2xl text-gray-700 hover:text-white" />
            </div>
          </a>
        </div>
    </div>
      </section>
    </div>
  );
}
