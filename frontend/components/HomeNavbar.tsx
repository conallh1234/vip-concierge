"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

// const HomeNavbar = () => {
//   return (
//     <nav className="absolute top-0 left-0 p-4 z-10">
//       <Link href="/login" className="text-white hover:underline">
//         Login
//       </Link>
//     </nav>
//   );
// };

// export default HomeNavbar;



const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm px-6 py-4 flex justify-between items-center text-white">
      <div className="text-xl font-bold">VIP Concierge</div>
      <div className="space-x-6 text-sm md:text-base">
        <ScrollLink to="hero" smooth duration={800} className="cursor-pointer hover:text-gray-300">
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth duration={800} className="cursor-pointer hover:text-gray-300">
          About
        </ScrollLink>
        <ScrollLink to="services" smooth duration={800} className="cursor-pointer hover:text-gray-300">
          Services
        </ScrollLink>
        <ScrollLink to="contact" smooth duration={800} className="cursor-pointer hover:text-gray-300">
          Contact
        </ScrollLink>
        <Link href="/login" className="...">Login</Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;

