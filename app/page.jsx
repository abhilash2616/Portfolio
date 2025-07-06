"use client";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/Abhilash's CV.pdf";
    link.download = "Abhilash's CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-0 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="order-2 lg:order-none text-center lg:text-left">
            <span className="text-xl font-bold text-gray-500 pb-4">Frontend Developer</span>
            <h1 className="text-4xl font-bold mb-3">
              Hello I'm <br />
              <span className="text-[#ffc917] text-6xl">Abhilash Bera</span>
            </h1>
            <p className="max-w-[400px] mb-9 text-gray-500">
              I'm a web developer with a passion for creating beautiful and
              functional websites.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Button
                className="flex items-center gap-2 group hover:cursor-pointer"
                variant="outline"
                size="lg"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="ml-2 text-[#ffc917] group-hover:text-white" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex items-center gap-4"
                  iconStyles="w-10 h-10 text-gray-500 hover:text-[#ffc917] transition-colors duration-300 flex items-center justify-center border border-gray-500 rounded-full hover:border-[#ffc917] hover:bg-[#ffc917] hover:text-white"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
