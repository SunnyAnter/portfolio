import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <div className="top-0 fixed h-[10%] w-full flex justify-between items-center shadow-md">
        <div className="flex gap-3 text-3xl text-stone-200 items-center w-[50%] justify-evenly">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#wardrobe" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex justify-end items-center gap-3 w-[50%] pr-[3%]">
          <Link
            className="w-12 h-12 rounded-xl border-white border-solid border-1 flex justify-center items-center hover:bg-gray-400"
            href="https://www.instagram.com/sunny.anter/"
            target="_blank"
          >
            <Instagram color="white" size={32} />
          </Link>
          <Link
            className="w-12 h-12 rounded-xl border-white border-solid border-1 flex justify-center items-center hover:bg-gray-400"
            href="https://github.com/SunnyAnter"
            target="_blank"
          >
            <Github color="white" size={32} />
          </Link>
          <Link
            className="w-12 h-12 rounded-xl border-white border-solid border-1 flex justify-center items-center hover:bg-gray-400"
            href="https://www.linkedin.com/in/sunnyelianter/"
            target="_blank"
          >
            <Linkedin color="white" size={32} />
          </Link>
        </div>
      </div>
    </>
  );
}
