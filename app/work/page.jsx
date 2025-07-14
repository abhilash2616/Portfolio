"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaShopify,
  FaPhp,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiElementor,
  SiWoocommerce,
} from "react-icons/si";

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

// Projects Array
const projects = [
  {
    id: "01",
    category: "Next.js Portfolio",
    title: "Personal Portfolio Website",
    description:
      "A sleek and responsive portfolio built with Next.js and Tailwind CSS to showcase my skills, experience, and projects.",
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourusername.vercel.app",
  },
  {
    id: "02",
    category: "Shopify Store",
    title: "Custom Shopify Storefront",
    description:
      "Developed and customized a Shopify theme for a fashion brand, including product filtering, cart features, and responsive layout.",
    stack: [
      { name: "Shopify", icon: <FaShopify /> },
      { name: "Liquid", icon: <FaCode /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    image: "/assets/work/thumb2.png",
    github: "",
    live: "https://clientshop.myshopify.com",
  },
  {
    id: "03",
    category: "WordPress Development",
    title: "Business Website in WordPress",
    description:
      "Created a fully functional business website using WordPress with custom Elementor sections, WooCommerce integration, and SEO-optimized pages.",
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "WooCommerce", icon: <SiWoocommerce /> },
    ],
    image: "/assets/work/thumb3.png",
    github: "",
    live: "https://clientbusinesssite.com",
  },
  {
    id: "04",
    category: "Responsive Web Design",
    title: "HTML & CSS Landing Page",
    description:
      "Designed a responsive landing page using pure HTML, CSS, and JavaScript with smooth animations and mobile-first design.",
    stack: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    image: "/assets/work/thumb4.png",
    github: "https://github.com/yourusername/html-landing-page",
    live: "https://yourusername.github.io/html-landing-page",
  },
  {
    id: "05",
    category: "Web Development",
    title: "E-Commerce Frontend",
    description:
      "Responsive e-commerce frontend with cart, product filtering, and checkout UI built with React and Tailwind CSS.",
    stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
    image: "/assets/work/thumb5.png",
    github: "https://github.com/yourusername/ecommerce-ui",
    live: "https://yourusername.github.io/ecommerce-ui",
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
      transition={{ duration: 0.6, delay: 2.4, ease: "easeIn" }}
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
              <h2 className="text-2xl font-bold text-[#ffc917]">
                {project.category}
              </h2>
              <p className="text-white/70">{project.description}</p>
              <ul className="flex flex-wrap gap-4 text-white/80 text-xl">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 hover:cursor-pointer text-[#ffc917]"
                  >
                    {item.icon}
                    <span className="text-sm text-white">{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 border-b-1"></div>
              <div className="flex gap-2">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white/10 group hover:cursor-pointer transition-all duration-300">
                          <BsArrowUpRight className="text-white/80 text-2xl group-hover:text-[#ffc917] transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white/10 group hover:cursor-pointer transition-all duration-300">
                          <BsGithub className="text-white/80 text-2xl group-hover:text-[#ffc917] transition-all duration-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
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
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300 z-10" />
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
                containerStyles="absolute bottom-[calc(50%_-_22px)] lg:bottom-0 right-0 z-10 flex justify-between w-full lg:w-max lg:justify-none gap-4"
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
