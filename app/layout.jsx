import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import { HeroUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/CustomCursor";
import { ToastContainer } from "react-toastify";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Abhilash Bera | Web Developer Portfolio",
  description:
    "Welcome to Abhilash Bera's portfolio – showcasing web development projects, skills, and professional journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        {/* ✅ Client-only things go inside ClientWrapper */}
        <ClientWrapper>
          <Header />
          <StairTransition />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </ClientWrapper>
      </body>
    </html>
  );
}
