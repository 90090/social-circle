import { useState } from 'react';
import { motion } from 'framer-motion';

function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      text: "The best decision I ever made for my business was reaching out to Courtney.  I told her I had made the business decision to commit to 6 months. 18 months later? I  am customer for life!",
      name: "Tamath Rossi",
      date: "January 17, 2025",
      stars: "★★★★★"
    },
    {
      text: "We cannot say enough great things about Courtney Ligi and The Social Circle team! Courtney’s creativity and dedication have truly transformed our online presence. From captivating content and understanding our vision, she’s taken our brand to new heights.  Courtney's professionalism, prompt communication, and attention to detail make her a standout in the industry. If you’re looking to elevate your brand and make a lasting impact, look no further. Courtney Ligi and The Social Circle are the real deal! Thank you, Courtney, for your incredible work and dedication. You have exceeded our expectations and continue to inspire us every day!",
      name: "SPYNE Pilates Studio",
      date: "February 11, 2025",
      stars: "★★★★★"
    },
    {
      text: "Great company to work with!!!! Very knowledgeable with all aspects of social media.",
      name: "Rob Marucci",
      date: "January 20, 2024",
      stars: "★★★★★"
    }
  ];

  const handleNext = () => {
    if (currentReview < reviews.length - 1) {
      setCurrentReview(currentReview + 1);
    } else {
      setCurrentReview(0); // Loop back to first review
    }
  };

  const handlePrev = () => {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    } else {
      setCurrentReview(reviews.length - 1); // Loop back to last review
    }
  };

  return (
    <section id="reviews" className="py-20 bg-purple-100 text-black text-center">
      <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
      
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 ml-4 text-purple-600 bg-white p-2 rounded-full shadow-lg hover:bg-purple-200 focus:outline-none"
          onClick={handlePrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Review Cards */}
        <motion.div
          className="overflow-hidden px-10"
          key={currentReview} // Ensure the animation resets on review change
          initial={{ x: 300, opacity: 0 }} // Start from the right with opacity
          animate={{ x: 0, opacity: 1 }} // Move to its original position and fade in
          exit={{ x: -300, opacity: 0 }} // Exit by sliding to the left with fading out
          transition={{ type: 'spring', stiffness: 100, damping: 40, duration: 1 }} // Slower and smoother spring motion
        >
          <div className="bg-white p-6 shadow-lg rounded-lg w-auto max-w-xl text-center flex flex-col items-center">
            <div className="text-purple-400 mb-2">{reviews[currentReview].stars}</div>
            <p className="mb-4">{reviews[currentReview].text}</p>
            <span className="font-bold">{reviews[currentReview].name}</span>
            <div className="text-sm text-gray-500 mt-2">{reviews[currentReview].date}</div>
          </div>
        </motion.div>
        
        {/* Right Arrow */}
        <button
          className="absolute right-0 mr-4 text-purple-600 bg-white p-2 rounded-full shadow-lg hover:bg-purple-200 focus:outline-none"
          onClick={handleNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Reviews;