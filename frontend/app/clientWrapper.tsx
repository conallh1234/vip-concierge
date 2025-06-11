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
  const role = useAppSelector((state) => state.auth.user?.role);
  
  // Public pages that don't require authentication
  const isPublicPage = pathname === "/" || pathname === "/login" || pathname === "/register";

    useEffect(() => {
    if (!token && !isPublicPage) {
        router.push("/login");
        return;
    }

    // Optional: Redirect from login/register to appropriate dashboard if already logged in
    if (token && isPublicPage) {
        if (role === "CUSTOMER") {
        router.push("/client");
        } else {
        router.push("/dashboard");
        }
    }
    }, [token, role, isPublicPage, router]);

    
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
