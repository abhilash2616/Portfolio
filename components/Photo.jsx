"use client"

import { animate, motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 2, ease: "easeIn" } }}
      >
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.5, ease: "easeInOut" } }}
        className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] rounded-full overflow-hidden mix-blend-lighten absolute top-0 left-0">
            <Image src="/assets/photo.png" alt="Photo" fill className="object-contain" priority quality={100} />
        </motion.div>

        <motion.svg className="w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="253" stroke="#ffc917" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }} animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],rotate: [120, 360], }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
