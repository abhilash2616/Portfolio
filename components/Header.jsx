import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-4 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Abhilash<span className="text-[#ffc917]">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex gap-4">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
