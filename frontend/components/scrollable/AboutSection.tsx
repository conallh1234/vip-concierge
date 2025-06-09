"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center bg-gray-900 text-white px-6">
        <motion.div
            className="max-w-2xl text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
        >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
        <p className="text-lg md:text-xl">
          VIP Concierge ensures your airport arrival and departure is nothing short of first-class. Our team handles your car, luggage, and timing with precision and care.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
