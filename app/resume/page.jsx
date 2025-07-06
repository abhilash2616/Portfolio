"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaTerminal,
  FaDatabase,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// ----- Corrected Data -----
const about = {
  title: "About me",
  description:
    "I am a web developer with a passion for creating beautiful and functional websites.",
  info: [
    { fieldName: "Name", fieldValue: "Abhilash Bera" },
    { fieldName: "Phone", fieldValue: "(+91) 9734341856" },
    { fieldName: "Email", fieldValue: "abhilashbera2003@gmail.com" },
    { fieldName: "Location", fieldValue: "Kolkata, India" },
    { fieldName: "Experience", fieldValue: "1 year" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Bengali" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I am a web developer with a passion for creating beautiful and functional websites.",
  items: [
    {
      position: "Frontend Developer",
      company: "Digital Wolf",
      date: "March 2025 - Present",
      description:
        "I am a web developer with a passion for creating beautiful and functional websites.",
    },
    {
      position: "Frontend Developer (Internship)",
      company: "Digital Wolf",
      date: "Jan 2025 - March 2025",
      description:
        "I am a web developer with a passion for creating beautiful and functional websites.",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I am a web developer with a passion for creating beautiful and functional websites.",
  items: [
    { degree: "Bachelor of Science", institution: "Asutosh College" },
    { degree: "Higher Secondary", institution: "(WBCHSE)" },
    { degree: "Diploma on Web", institution: "Moople Technologies" },
    { degree: "Frontend Development Course", institution: "Online Course" },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I am a web developer with a passion for creating beautiful and functional websites.",
  skillList: [
    { icon: <FaReact /> },
    { icon: <SiNextdotjs /> },
    { icon: <FaNodeJs /> },
    { icon: <SiTailwindcss /> },
    { icon: <FaJs /> },
    { icon: <FaHtml5 /> },
    { icon: <FaCss3 /> },
    { icon: <FaWordpress /> },
    { icon: <FaShopify /> },
    { icon: <FaDatabase /> },
    { icon: <FaGithub /> },
    { icon: <FaFigma /> },
    { icon: <FaTerminal /> },
  ],
};

// ----- Resume Component -----
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="about"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          {/* Tab Triggers */}
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto lg:mx-0">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="min-h-[70vh] w-full">
            {/* About */}
            <TabsContent value="about" className="w-full">
              <Section title={about.title} description={about.description}>
                <ScrollArea className="h-[400px] pr-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {about.info.map((info, idx) => (
                      <li
                        key={idx}
                        className="bg-[#1f1f22] p-4 rounded-lg border border-white/10 flex flex-col shadow-sm hover:shadow-md transition-all"
                      >
                        <span className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                          {info.fieldName}
                        </span>
                        <span className="text-sm text-white font-medium">
                          {info.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <Section
                title={experience.title}
                description={experience.description}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272c] p-6 rounded-2xl shadow-md text-center lg:text-left border border-white/10 hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="text-2xl font-bold text-[#ffc917] mb-2 leading-snug">
                          {item.position}
                        </h3>
                        <p className="text-sm text-white/80 mb-2">
                          <span className="font-medium text-white">
                            {item.company}
                          </span>{" "}
                          — {item.date}
                        </p>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <Section
                title={education.title}
                description={education.description}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {education.items.map((edu, idx) => (
                      <li
                        key={idx}
                        className="bg-[#27272c] p-4 rounded-xl border border-white/10 text-white/90"
                      >
                        <h3 className="text-lg font-semibold text-[#ffc917]">
                          {edu.degree}
                        </h3>
                        <p className="text-sm">{edu.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </Section>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <Section title={skills.title} description={skills.description}>
                <ScrollArea className="h-[400px]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, idx) => (
                      <div
                        key={idx}
                        className="bg-[#27272c] py-8 px-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/10 text-white/90 hover:shadow-lg transition-all duration-300 group hover:cursor-pointer"
                      >
                        <div className="text-6xl text-gray-500 group-hover:text-[#ffc917] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          {skill.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// ----- Section Component -----
const Section = ({ title, description, children }) => (
  <div className="flex flex-col gap-6 text-center lg:text-left">
    <h2 className="text-4xl font-bold text-yellow-500">{title}</h2>
    <p className="text-sm text-gray-500 max-w-[600px] mx-auto lg:mx-0">
      {description}
    </p>
    {children}
  </div>
);

export default Resume;
