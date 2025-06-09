"use client";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="snap-start h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
        <ul className="space-y-4 text-lg md:text-xl">
          <li>🚗 Valet-style car collection & secure storage</li>
          <li>✈️ Real-time flight monitoring & flexible scheduling</li>
          <li>🧳 Luggage handling & personal assistance</li>
          <li>🔒 Secure, CCTV-monitored car facilities</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
