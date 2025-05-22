import { motion } from "framer-motion";
import { FaLinkedin,FaFacebook } from 'react-icons/fa';
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import Clients from "./Clients";
import Services from "./Services";
import Mystory from "./Mystory";
import OurWork from "./Ourwork";




export default function App() {

  return (
    <div className="text-white bg-black">
      <Navbar/>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4"
      >
        {/* Background Gradient with Shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 shadow-[0_0_60px_20px_rgba(128,90,213,0.5)] z-0"></div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="relative text-4xl md:text-6xl font-bold text-white z-10 drop-shadow-lg hover:scale-105 transition-transform duration-500"
        >
          Elevating your Business Through Digital Marketing
        </motion.h1>

        {/* Subheading (Optional) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
          className="relative text-lg md:text-xl mt-4 text-white/90 z-10 max-w-2xl"
        >
          Transforming Clicks Into Connections<br className="hidden md:block" />And Connections Into Clients
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="mailto:socialcirclect@icloud.com"
          className="relative inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-700 transition z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get Started
        </motion.a>
      </section>

      
      <OurWork/>

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
            <a href="https://www.facebook.com/socialcirclellc" target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors">
                <FaFacebook className="text-2xl text-gray-700 hover:text-white" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/thesocialcirclect" target="_blank" rel="noopener noreferrer">
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
