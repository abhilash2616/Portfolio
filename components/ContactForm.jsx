"use client";

import { useState } from "react";
import { toast } from "react-toastify";
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending message...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "40e9924c-5696-40ef-b0af-1940c47ee6c1",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-14 shadow-2xl space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Let’s work together
        </h2>
        <p className="text-sm text-white/80">
          Fill in the form and I’ll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Select
          value={formData.service}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, service: value }))
          }
        >
          <SelectTrigger className="text-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="border-white/10 text-white">
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-development">Mobile Development</SelectItem>
            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
            <SelectItem value="seo-marketing">SEO Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        name="message"
        placeholder="Message"
        className="text-white min-h-[140px]"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        className="w-fit text-white font-medium px-8 py-5 rounded-full shadow-lg transition-all"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
