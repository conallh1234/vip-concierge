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
  
  // Check if the current page is the login page
  const isLoginPage = pathname === "/login";

  useEffect(() => {
    // If the user is not authenticated and is not on the login page, redirect to login
    if (!token && !isLoginPage) {
      router.push("/login");
    }
  }, [token, isLoginPage, router]);

  return (
    <>
      {/* Only use DashboardWrapper for authenticated pages */}
      {isLoginPage ? children : <DashboardWrapper>{children}</DashboardWrapper>}
    </>
  );
}
