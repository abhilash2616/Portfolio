"use client";
import Link from "next/link";
import { BsArrowDownRight, BsTypeH2 } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo delectus.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo delectus.",
    href: "/services/ui-development",
  },
  {
    num: "03",
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo delectus.",
    href: "/services/app-development",
  },
  {
    num: "04",
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo delectus.",
    href: "/services/backend-development",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
          className="flex flex-wrap gap-10 justify-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-300">
      {service.num}
    </div>
                <Link
                  href={service.href}
                  className="w-[56px] h-[56px] rounded-full bg-white text-yellow-400 flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white hover:cursor-pointer hover:-rotate-45 group-hover:rotate-0 group-hover:scale-105"
                >
                  <BsArrowDownRight size={22} className="text-2xl transition-all duration-300"/>
                </Link>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {service.description}
              </p>
              <div className="border-t border-white/10 mt-auto"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
