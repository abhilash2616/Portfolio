"use client";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  { icon: FaPhone, title: "Phone", content: "+91 9734341856" },
  { icon: FaEnvelope, title: "Email", content: "abhilashbera2003@gmail.com" },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    content: "101/b Vivekananda Road, Kolkata 06, India",
  },
];

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.4, ease: "easeIn" }}
      viewport={{ once: true }}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="container px-4 mx-auto grid lg:grid-cols-3 gap-14">
        {/* Contact Info */}
        <div className="space-y-10 order-1 lg:order-2">
          {contactInfo.map(({ icon: Icon, title, content }, idx) => (
            <div key={idx} className="flex items-start gap-5 group">
              <div className="p-4 rounded-xl bg-white/10 group-hover:bg-[#ffc917]/20 transition-colors">
                <Icon className="text-xl text-[#ffc917] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/80">{content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="space-y-2 mb-5">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Let’s work together
            </h2>
            <p className="text-sm text-white/80">
              Fill in the form and I’ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}
