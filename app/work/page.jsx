"use client";
import { motion } from "framer-motion";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { bsGithub, bsArrowRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    category: "Web Development",
    title: "Project 1",
    description: "Description 1",
    stack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
    ],
    image: "assets/images/project1.jpg",
    github: "https://github.com/yourusername/project1",
    live: "https://yourusername.github.io/project1",
  },
  {
    id: "02",
    category: "Web Development",
    title: "Project 2",
    description: "Description 2",
    stack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
    ],
    image: "assets/images/project2.jpg",
    github: "https://github.com/yourusername/project2",
    live: "https://yourusername.github.io/project2",
  },
  {
    id: "03",
    category: "Web Development",
    title: "Project 3",
    description: "Description 3",
    stack: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "TypeScript", icon: "typescript" },
    ],
    image: "assets/images/project3.jpg",
    github: "https://github.com/yourusername/project3",
    live: "https://yourusername.github.io/project3",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2 lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>
              <h2 className="text-2xl font-bold">{project.category}</h2>
              <p className="text-white/80">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text">
                    <Image src={`/images/stack/${item.icon}.svg`} alt={item.name} width={24} height={24} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
