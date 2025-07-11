"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

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
    image: "/assets/work/thumb1.png",
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
    image: "/assets/work/thumb2.png",
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
    image: "/assets/work/thumb3.png",
    github: "https://github.com/yourusername/project3",
    live: "https://yourusername.github.io/project3",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeIn" }}
      viewport={{ once: true }}
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center lg:gap-10">
          {/* Project Details */}
          <div className="w-full lg:w-1/2 lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-4 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.id}
              </div>
              <h2 className="text-2xl font-bold">{project.category}</h2>
              <p className="text-white/80">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-white/80">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 border-b-2"></div>
              <div className="flex gap-2">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/10 group transition-all duration-300">
                        <BsArrowUpRight className="text-white/80 text-2xl group-hover:text-[#ffc917] transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white/10 group transition-all duration-300">
                        <BsGithub className="text-white/80 text-2xl group-hover:text-[#ffc917] transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="w-full lg:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500 }}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group flex items-center justify-center w-full h-[460px] rounded-xl overflow-hidden">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300 z-10" />

                    {/* Image Layer */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="absolute bottom-[calc(50%_-_22px)] lg:bottom-0 right-0 z-10 flex justify-between w-full lg:w-max lg:justify-none"
                btnStyles="w-10 h-10 bg-[#ffc917] rounded-full flex items-center justify-center hover:bg-[#ffc917]/80 transition-all duration-300 hover:cursor-pointer"
                iconStyles="text-black text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
