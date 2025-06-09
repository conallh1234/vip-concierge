"use client";
import HomeNavbar from "../components/HomeNavbar";

const Homepage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/background.mp4"
      />
      <div className="absolute inset-0 bg-black/50" />
      <HomeNavbar />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">VIP Concierge</h1>
        <p className="text-xl md:text-2xl mt-4">Seamless Airport Experiences</p>
      </div>
    </div>
  );
};

export default Homepage;
