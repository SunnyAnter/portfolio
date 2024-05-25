import { FlipWords } from "./flip-words";
import { ChevronDown } from "lucide-react";
import Sunny from '../../public/SunnyWelcome.PNG'
import Image from "next/image";

export default function Welcome() {
    const words = [
      "Web Developer",
      "Software Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Web Designer",
    ];
  
  return (
    <>
      <div
        id="home"
        className="min-h-[100vh] flex flex-col justify-center items-center"
      >
        <h1 className="text-7xl font-bold text-stone-300">
          Hi! I&apos;m Sunny
        </h1>
        <FlipWords words={words} className={"text-4xl text-gray-400"} />
        <a
          className="absolute bottom-0 bg-orange-600 w-full h-16 rounded-t-full flex flex-col items-center pt-2"
          href="#about"
        >
          <ChevronDown color="white" size={50} className="opacity-10" />
        </a>
        <Image
          src={Sunny}
          alt="Sunny regular outfit"
          className="absolute left-10 bottom-10 hover:bg-white"
          width={600}
          height={600}
        />
      </div>
    </>
  );
}
