"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      {/* gradient background */}
      <div className="absolute inset-0 -z-10" />

      <div className="container px-4 mx-auto grid lg:grid-cols-3 gap-14">
        {/* contact details */}
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

        {/* form */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <form className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-14 shadow-2xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Let’s work together
              </h2>
              <p className="text-sm text-white/80">
                Fill in the form and I’ll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input type="name" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone" />

              <Select>
                <SelectTrigger className="text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className=" border-white/10 text-white">
                  <SelectItem value="web-development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="mobile-development">
                    Mobile Development
                  </SelectItem>
                  <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  <SelectItem value="seo-marketing">SEO Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              placeholder="Message"
              className="text-white min-h-[140px]"
            />

            <Button
              type="submit"
              className="w-fit text-white font-medium px-8 py-5 rounded-full shadow-lg transition-all"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
