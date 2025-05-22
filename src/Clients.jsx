import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';
import { useClientsData } from "./hooks/useClientsData";

function Clients() {
    const { logos, metrics, loading, error } = useClientsData();

    // Fallback data (will be used until Sanity data is loaded)
    const fallbackLogos = [
      { src: "./logos/Arc.png" },
      { src: "./logos/Big-Dipper.png" },
      { src: "./logos/chamber.png" },
      { src: "./logos/dependable.png" },
      { src: "./logos/1.png" },
      { src: "./logos/IMTI.png" },
      { src: "./logos/logo512.png" },
      { src: "./logos/UnitedWayNaugatuck.png" },
    ];
    
    const fallbackMetrics = [
      { label: "Website Views", value: 150 },
      { label: "Content Interactions", value: 200 },
      { label: "Content Watch Time", value: 180 },
      { label: "Reach", value: 220 },
      { label: "Conversions", value: 130 },
    ];

    function AnimatedNumber({ target }) {
      const [count, setCount] = useState(0);
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });
    
      // Clean and convert the string to a number
      const numericTarget = typeof target === "string"
        ? Number(target.replace(/,/g, "")) // Remove commas
        : target;
    
      useEffect(() => {
        if (!isInView || isNaN(numericTarget)) return;
    
        let start = 0;
        const duration = 1000;
        const interval = 10;
        const step = numericTarget / (duration / interval);
    
        const timer = setInterval(() => {
          start += step;
          if (start >= numericTarget) {
            start = numericTarget;
            clearInterval(timer);
          }
          setCount(Math.round(start));
        }, interval);
    
        return () => clearInterval(timer);
      }, [isInView, numericTarget]);
    
      return (
        <span ref={ref}>
          {isNaN(numericTarget) ? "?" : `+${count.toLocaleString()}`}
        </span>
      );
    }
    
    AnimatedNumber.propTypes = {
      target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };
    

    // Determine which data to display
    const displayLogos = loading ? fallbackLogos : logos;
    const displayMetrics = loading ? fallbackMetrics : metrics;

    if (error) {
      console.error("Error loading clients data:", error);
    }
  
    return (
    <section id="clients" className="py-20 bg-gray-100 text-black text-center">
      <h2 className="text-4xl font-bold mb-4">Our Clients By the Numbers</h2>

      {/* Animated Metrics */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pr-5 pl-5">
        {displayMetrics.map((metric, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-bold text-purple-700">
            <AnimatedNumber target={metric.value} />
            </p>
            <p className="text-gray-600">{metric.label}</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </motion.div>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="overflow-hidden py-6 group mt-12">
  <div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused] gap-12 px-4">
    {[...Array(3)].flatMap(() => displayLogos).map((logo, i) => {
      const imgSrc = logo.logoUrl || logo.src;
      const imgAlt = logo.name || `Company ${i + 1}`;

      const imgElement = (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-16 w-auto max-w-none custom-grayscale transition-all duration-300 hover:scale-105 object-contain"
        />
      );

      return logo.facebookUrl ? (
        <a
          key={`${i}-${imgAlt}`}
          href={logo.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {imgElement}
        </a>
      ) : (
        <div key={`${i}-${imgAlt}`} className="inline-block">
          {imgElement}
        </div>
      );
    })}
  </div>
</div>



      
    </section>
  );
}

export default Clients;
