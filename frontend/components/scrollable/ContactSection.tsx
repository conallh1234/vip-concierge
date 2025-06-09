"use client";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="snap-start h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8">
          Let us take care of your next airport journey. Reach out now to reserve your VIP Concierge service.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
