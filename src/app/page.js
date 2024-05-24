import NavBar from "@/components/nav-bar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Welcome from "@/components/welcome";

export default function Page() {
  return (
    <>
    <NavBar/>
      <Welcome/>
      <About />
      <Skills />
    </>
  );
}
