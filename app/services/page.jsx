"use client";
import Link from "next/link";
import { BsArrowDownRight, BsTypeH2 } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "I build fast, responsive, and modern web interfaces using React.js, Next.js, Tailwind CSS, and JavaScript.",
    href: "/services/frontend-development",
  },
  {
    num: "02",
    title: "UI Development",
    description:
      "I create clean, user-friendly, and accessible interfaces with a focus on pixel-perfect design and smooth user experience.",
    href: "/services/ui-development",
  },
  {
    num: "03",
    title: "Shopify & WordPress Development",
    description:
      "I develop custom Shopify stores and WordPress websites tailored to your business needs with clean and scalable code.",
    href: "/services/shopify-wordpress-development",
  },
  {
    num: "04",
    title: "Website Optimization",
    description:
      "I optimize websites for speed, SEO, and performance using best practices and modern web tools.",
    href: "/services/website-optimization",
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-x-1 gap-y-10 md:justify-center justify-center lg:justify-between"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full lg:w-[48%] group border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="lg:w-[56px] w-[46px] lg:h-[56px] h-[46px] rounded-full bg-white text-[#212121] flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-white hover:cursor-pointer hover:-rotate-45 group-hover:rotate-0 group-hover:scale-105"
                >
                  <BsArrowDownRight
                    size={22}
                    className="text-2xl transition-all duration-300"
                  />
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
