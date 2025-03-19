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
    
      useEffect(() => {
        if (!isInView) return;
        
        let start = 0;
        const duration = 1000;
        const interval = 10;
        const step = target / (duration / interval);
    
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setCount(Math.round(start));
        }, interval);
    
        return () => clearInterval(timer);
      }, [isInView, target]);
    
      return <span ref={ref}>{count}%</span>;
    }
    
    AnimatedNumber.propTypes = {
      target: PropTypes.number.isRequired,
    };

    // Determine which data to display
    const displayLogos = loading ? fallbackLogos : logos;
    const displayMetrics = loading ? fallbackMetrics : metrics;

    if (error) {
      console.error("Error loading clients data:", error);
    }
  
    return (
    <section id="clients" className="py-20 bg-gray-100 text-black text-center">
      <h2 className="text-4xl font-bold mb-4">Our Clients Experience...</h2>

      <p className="text-gray-600 text-sm mb-6">
        Featured in{" "}
        <a
          href="https://example-news.com/article"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-700 hover:text-purple-900"
        >
          Republican American
        </a>
      </p>

      {/* Animated Metrics */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 pr-5 pl-5">
        {displayMetrics.map((metric, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-3xl font-bold text-purple-700">
              <AnimatedNumber target={metric.value} />
            </p>
            <p className="text-gray-600">{metric.label}</p>
            <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </motion.div>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {displayLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.logoUrl || logo.src} // Use logoUrl from Sanity, fallback to local images
              alt={logo.name || `Company ${i + 1}`}
              className={`mx-auto hover:scale-105 transition duration-300 ${
                logo.height || (i === 2 || i === 3 ? 'h-40' : 'h-23')
              }`}
            />
          ))}

          {/* Newspaper Feature */}
          {/* <a
            href="https://example-news.com/article"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logos/newspaper.png"
              alt="Newspaper Feature"
              className="h-16 mx-auto grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
            />
          </a> */}
        </div>
      </div>

      
    </section>
  );
}

export default Clients;
