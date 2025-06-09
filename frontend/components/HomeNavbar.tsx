"use client";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 p-4 z-10">
      <Link href="/login" className="text-white hover:underline">
        Login
      </Link>
    </nav>
  );
};

export default HomeNavbar;
