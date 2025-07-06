import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stairAnimation = {
  initial: { y: 0 },
  animate: { y: "100%" },
  exit: { y: 0 },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="relative top-0 left-0 w-full h-full bg-[#ffc400]"
          />
        );
      })}
    </>
  );
};

export default Stairs;
