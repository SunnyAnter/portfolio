'use client';
import { ChevronDown } from "lucide-react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Sunny from '../../public/SunnyWelcome.PNG'
import CreateTask from '../../public/Spot.png';
import Image from "next/image";
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
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={CreateTask} className="h-full w-full"alt="create task gif"/>
    ),
  }
];
const content2 = [
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <Image src={CreateTask} className="h-full w-full" alt="create task gif" />
    ),
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
];
export default function Wardrobe() {
  const [stickyContent, setStickyContent] = useState(content);
  const [api, setApi] = useState(null);

   const scrollToTop = (ref) => {
     ref.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   };

  const contentSet = (str) => {
    if (str === 'Hyve') {
      setStickyContent(content2)
      console.log('should be set')
    } else {
      setStickyContent(content)
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
        <Carousel className="w-[30%]" setApi={setApi} opts={{loop:true}}>
          <CarouselContent>
            {sunnyVersion.map((version, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-3 justify-center">
                  <Image
                    src={Sunny}
                    width={500}
                    height={500}
                    alt="Sunny Wardrobe"
                  />
                  <h1 className="text-white text-3xl flex justify-center">{version}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <StickyScroll content={stickyContent} className="w-24" scrollToTop={scrollToTop} />
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
