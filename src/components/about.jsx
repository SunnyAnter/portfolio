import { ChevronDown } from "lucide-react";

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
      </div>
    </>
  );
}
