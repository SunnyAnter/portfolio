'use client';
import { ChevronDown } from "lucide-react";
import { StickyScroll } from "./sticky-scroll-reveal";
import SunnySuit from '../../public/SunnySuit.png'
import SunnyWelcome from '../../public/SunnyWelcome.PNG'
import SunnyCargo from '../../public/SunnyCargo.png'
import SunnyHyve from '../../public/SunnyHyve.png'
import Image from "next/image";
import { spotContents } from '../contents/spotContents.js';
import {hyveContents} from '../contents/hyveContents.js'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"; 
import { useState, useEffect} from "react";

const sunnyVersion = [
  'Skills', 'Hyve', 'Spot', 'Stitchmate', 'Art'
]

export default function Wardrobe() {
  const [stickyContent, setStickyContent] = useState(spotContents);
  const [api, setApi] = useState(null);

  const sunnyPicture = (str) => {
    switch (str) {
      case 'Skills':
        return SunnySuit;
      case 'Hyve':
        return SunnyHyve;
      case 'Spot':
        return SunnyCargo;
      default:
        return SunnyWelcome;
    }
  }
   const scrollToTop = (ref) => {
     ref.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   };

  const contentSet = (str) => {
    if (str === 'Hyve') {
      setStickyContent(hyveContents)
    } else {
      setStickyContent(stickyContent)
    }
  }

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      contentSet(sunnyVersion[api.selectedScrollSnap()]);
    });
  }, [api]);

  return (
    <>
      <div
        id="wardrobe"
        className="min-h-[100vh] flex justify-evenly items-center bg-gray-700"
      >
        <Carousel className="w-[30%]" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {sunnyVersion.map((version, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <Image
                    src={sunnyPicture(version)}
                    width={500}
                    height={500}
                    alt="Sunny Wardrobe"
                  />
                  <h1 className="text-stone-200 bg-gray-500 text-3xl flex justify-center font-bold rounded-lg w-[50%]">
                    {version}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <StickyScroll
          content={stickyContent}
          className="w-24"
          scrollToTop={scrollToTop}
        />
        <a
          className="absolute bottom-[-200vh] bg-teal-500 w-full h-16 rounded-t-full flex flex-col items-center pt-2"
          href="#contact"
        >
          <ChevronDown color="white" size={50} className="opacity-10" />
        </a>
      </div>
    </>
  );
}
