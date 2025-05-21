import { motion } from "framer-motion";
import { useMyStory } from "./hooks/useMyStory";

function MyStory() {
  const { myStory } = useMyStory();

  if (!myStory) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  return (
    <section id="about" className="py-20 bg-white text-black text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <div className="p-10 gap-4 flex justify-center">
        {myStory.cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`max-w-xl text-center p-6 shadow-lg rounded-lg ${card.bgColor}`}
          >
            {card.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default MyStory;

