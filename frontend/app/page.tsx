
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
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        src="/background.mp4"
      />

      {/* Overlay for contrast (optional) */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-1]" />

      {/* Scrollable Sections */}
      <main
        id="landing-scroll-container"
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <HomeNavbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default LandingPage;
