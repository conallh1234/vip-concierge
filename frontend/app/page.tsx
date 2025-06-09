
import { motion } from "framer-motion";
import HomeNavbar from "@/components/HomeNavbar";
import HeroSection from "../components/scrollable/HeroSection";
import AboutSection from "../components/scrollable/AboutSection";
import ServicesSection from "../components/scrollable/ServicesSection";
import ContactSection from "../components/scrollable/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Concierge | Perth Airport Services",
  description: "Valet car collection, secure parking, and seamless airport drop-off/pickup.",
};

const LandingPage = () => {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <HomeNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
