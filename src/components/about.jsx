import { ChevronDown } from "lucide-react";
import Image from "next/image";
import SunnyCargo from '../../public/SunnyCargo.png'

export default function About() {
  return (
    <>
      <div
        id="about"
        className="min-h-[100vh] flex flex-col justify-end items-center bg-orange-600"
      >
        <a
          className="absolute bottom-[-100vh] bg-gray-700 w-full h-16 rounded-t-full flex flex-col items-center pt-2"
          href="#wardrobe"
        >
          <ChevronDown color="white" size={50} className="opacity-10" />
        </a>
        <Image
          src={SunnyCargo}
          alt="Sunny regular outfit"
          className="absolute bottom-[-90vh] right-10 hover:bg-white"
          width={600}
          height={600}
        />
      </div>
    </>
  );
}
