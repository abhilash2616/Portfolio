import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Abhilash Bera | Web Developer Portfolio",
  description: "Welcome to Abhilash Bera's portfolio – showcasing web development projects, skills, and professional journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable}`}
      >
        <Header />
        <PageTransition>
        <StairTransition />
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
