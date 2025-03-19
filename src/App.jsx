import { motion } from "framer-motion";
import { FaLinkedin,FaFacebook } from 'react-icons/fa';
import Reviews from "./Reviews";
import Navbar from "./Navbar";
import Clients from "./Clients";
import Services from "./Services";


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

      
      {/* My Story Section */}
      <section id="about" className="py-20 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Why Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-purple-200 shadow-lg rounded-lg">The Social Circle was created to help small businesses succeed by generating digital marketing content directly to consumers. Creator and founder, Courtney Ligi, will provide you one-on-one consultation to help build the perfect social media package for you and your business. </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-purple-300 shadow-lg rounded-lg">The Social Circle offers a variety of packages as well as à la carte options to provide your business marketing in the social media world. With over 3 billion active social media users, according to facebook.com, The Social Circle will add cost-effective value to your business marketing plan with the click of a button.</motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-purple-400 shadow-lg rounded-lg">Those could include marketing, handling customer contact and complaints, promoting the business’s website, or improving the social media pages of the business.</motion.div>
        </div>
      </section>

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
