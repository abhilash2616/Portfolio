"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // 🆕  shadcn dialog
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ContactForm from "./ContactForm";

const Header = () => {
  return (
    <header className="py-4 text-white bg-transparent z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="transition hover:opacity-80">
          <h1 className="text-2xl font-bold tracking-tight">
            Abhilash<span className="text-[#ffc917]">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Nav />

          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-white shadow-md shadow-indigo-500/30 px-6 py-2 rounded-full hover:brightness-110 transition-all duration-200">
                Hire me
              </Button>
            </DialogTrigger>

            <DialogContent className="bg-[#ffc9170f] border border-[#ffc917] text-white rounded-2xl w-[90%] max-w-[800px]">
              <DialogHeader className="border-b border-[#ffc917] px-4 sm:px-6">
                <DialogTitle className="text-xl font-bold mb-3">
                  Let’s work together!
                </DialogTitle>
              </DialogHeader>

              <div className="py-6 px-4 sm:px-6">
                <ContactForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
