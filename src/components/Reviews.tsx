import { useState } from "react";
import { motion } from "framer-motion";
import type { Review } from "../data/site";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);

  if (reviews.length === 0) {
    return <p className="text-center text-gray-500">No reviews available.</p>;
  }

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <div className="relative flex items-center justify-center">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous review"
        className="absolute left-0 ml-4 text-purple-600 bg-white p-2 rounded-full shadow-lg hover:bg-purple-200 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <motion.div
        key={current}
        className="overflow-hidden px-16"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 40 }}
        aria-live="polite"
      >
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-xl text-center flex flex-col items-center">
          <div className="text-purple-400 mb-2" aria-label="5 out of 5 stars">
            {review.stars}
          </div>
          <p className="mb-4">{review.text}</p>
          <span className="font-bold">{review.name}</span>
          <div className="text-sm text-gray-500 mt-2">{review.date}</div>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={next}
        aria-label="Next review"
        className="absolute right-0 mr-4 text-purple-600 bg-white p-2 rounded-full shadow-lg hover:bg-purple-200 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
