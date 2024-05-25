import { ChevronDown } from "lucide-react";
export default function Wardrobe() {
  return (
    <>
      <div
        id="wardrobe"
        className="min-h-[100vh] flex flex-col justify-center items-center bg-gray-700"
      >
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
