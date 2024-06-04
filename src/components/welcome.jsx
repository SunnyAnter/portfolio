'use client';
import { FlipWords } from "./flip-words";
import { ChevronDown } from "lucide-react";
import SunnyHover from '../../public/SunnyHover.png'
import SunnyWelcome from '../../public/SunnyWelcome.PNG'
import Image from "next/image";
import { useState } from "react";

export default function Welcome() {
    const words = [
      "Web Developer",
      "Software Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Web Designer",
    ];
  const [imageSrc, setImageSrc] = useState(SunnyWelcome);

  const handleMouseOver = () => {
    setImageSrc(SunnyHover);
  };

  const handleMouseOut = () => {
    setImageSrc(SunnyWelcome);
  };

  const hoverIn = (element) => {
     
    }
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
        <a href="#contact">
        <Image
          src={imageSrc}
          alt="Sunny regular outfit"
          className="absolute left-10 bottom-10"
          width={600}
          height={600}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
        </a>
      </div>
    </>
  );
}
