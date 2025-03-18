import { motion } from "framer-motion";

const services = [
  {
    title: "Social Media Marketing",
    description: "We create engaging content and manage your social media presence to grow your audience and increase brand awareness."
  },
  {
    title: "Website Development",
    description: "Custom-built, responsive websites tailored to your brand and business needs, optimized for performance and SEO."
  },
  {
    title: "Marketing Photos",
    description: "Professional photography services to enhance your brand’s image and create compelling visual content."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </motion.div>
            ))}
        </div>
        </div>
      
      <div className="mt-16 text-center">
        <motion.h2 
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s create something bigger
        </motion.h2>
        <motion.a
          href="mailto:socialcirclect@icloud.com"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Start Now
        </motion.a>
      </div>
    </section>
  );
}

export default Services;
