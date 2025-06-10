"use client"; // This is a client component

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/app/redux"; // Adjust the import path if needed
import DashboardWrapper from "./dashboardWrapper";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Check if the user is authenticated
  const token = useAppSelector((state) => state.auth.token);
  
  // Public pages that don't require authentication
  const isPublicPage = pathname === "/" || pathname === "/login" || pathname === "/register";

  useEffect(() => {
    // If the user is not authenticated and is not on a public page, redirect to login
    if (!token && !isPublicPage) {
      router.push("/login");
    }
  }, [token, isPublicPage, router]);

  return (
    <>
      {/* Only use DashboardWrapper for authenticated pages */}
      {isPublicPage ? (
        children
      ) : (
        <DashboardWrapper>{children}</DashboardWrapper>
      )}
    </>
  );
}
