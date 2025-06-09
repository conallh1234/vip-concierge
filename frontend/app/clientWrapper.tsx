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

  // Paths that should be accessible without authentication
  const isLoginPage = pathname === "/login";
  const isLandingPage = pathname === "/";

  useEffect(() => {
    // If the user is not authenticated and is not on the login page, redirect to login
    if (!token && !isLoginPage  && !isLandingPage) {
      router.push("/login");
    }
  }, [token, isLoginPage, isLandingPage, router]);

  return (
    <>
      {/* Only use DashboardWrapper for authenticated pages */}
            {isLoginPage || isLandingPage ? (children) : (<DashboardWrapper>{children}</DashboardWrapper>)}
    </>
  );
}
