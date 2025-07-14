"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ContactForm from "./ContactForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="py-4 text-white bg-transparent z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="transition hover:opacity-80">
          <h1 className="text-2xl font-bold tracking-tight">
            Abhilash<span className="text-[#ffc917]">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Nav />
          <Button
            onClick={onOpen}
            className="text-white shadow-md shadow-indigo-500/30 px-6 py-2 rounded-full hover:brightness-110 transition-all duration-200"
          >
            Hire me
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Modal Triggered by 'Hire me' Button */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        classNames={{
          backdrop: "bg-black/70 backdrop-blur",
          base: "bg-[#ffc9170f] border border-[#ffc917] text-white rounded-2xl w-[90%] max-w-[800px]",
          body: "py-6 px-4 sm:px-6",
          header: "border-b border-[#ffc917] px-4 sm:px-6 text-xl font-bold",
          footer: "border-t border-[#ffc917] px-4 sm:px-6",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                  
                <ContactForm />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;