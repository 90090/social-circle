import { motion } from "framer-motion";
import { useMyStory } from "./hooks/useMyStory";

// Dummy team data (replace with your actual images and titles)
const teamMembers = [
  {
    name: "Courtney Ligi",
    title: "Founder & CEO",
    photo: "./headshots/IMG_8964.png",
  },
  {
    name: "Katie Yoxall",
    title: "Content Director",
    photo: "./headshots/IMG_9021.png",
  },
  {
    name: "Kalle Legassey",
    title: "Content Manager",
    photo: "./headshots/IMG_8997.png",
  },
  {
    name: "Eryn Elinson",
    title: "Graphic Designer",
    photo: "./headshots/IMG_9036.png",
  },
];

function MyStory() {
  const { myStory } = useMyStory();

  if (!myStory) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section id="about" className="py-20 bg-white text-black text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>

      {/* About Cards */}
      <div className="p-10 gap-4 flex justify-center flex-wrap">
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

      {/* Our Team Section */}
      <div>
        <h3 className="text-3xl font-bold mb-10">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-20 px-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="max-w-xs text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-48 h-48 object-cover scale-125 rounded-full mx-auto shadow-md"
              />
              <h4 className="mt-10 text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyStory;
