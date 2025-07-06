"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Stairs from "./Stairs";

const StairTransition = ({ children }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // 🔐 Prevent SSR mismatch

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        <motion.div
          className="h-screen w-screen fixed bg-[#1c1c1c] top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;