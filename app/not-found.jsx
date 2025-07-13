'use client'; 
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.4, ease: "easeIn" }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center"
    >
      <h1 className="text-6xl font-bold mb-4 text-[#ffc917]">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-white/70 max-w-md mb-6">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#ffc917] text-black px-5 py-2 rounded-xl font-medium hover:bg-[#e5b800] transition"
      >
        <FaArrowLeft className="w-4 h-4" />
        Go back home
      </Link>
    </motion.section>
  );
}
