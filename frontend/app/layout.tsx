import "@/styles/globals.css";
import type { Metadata } from "next";
import  StoreProvider from "@/app/redux"
import { Provider } from "react-redux";
import ClientWrapper from "./clientWrapper";


export const metadata: Metadata = {
  title: "VIPConcierge",
  description: "VIP Concierge Business Management WebApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
      <html lang="en">
        <body>
        <StoreProvider>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        </StoreProvider>
        </body>
      </html>

  );
}