"use client";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="hero" className="relative snap-start h-screen w-full flex items-center justify-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/background.mp4"
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">VIP Concierge</h1>
        <p className="text-xl md:text-2xl mt-4">Seamless Airport Experiences</p>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollLink to="about" smooth duration={800}>
        <motion.div
          className="absolute bottom-10 z-10 text-white text-4xl cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiChevronDown />
        </motion.div>
      </ScrollLink>
    </section>
  );
};

export default HeroSection;
