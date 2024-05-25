import NavBar from "../components/nav-bar";
import About from "../components/about";
import Wardrobe from "../components/wardrobe";
import Welcome from "../components/welcome";
import Contact from "../components/contact"

export default function Page() {
  return (
    <>
    <NavBar/>
      <Welcome/>
      <About />
      <Wardrobe />
      <Contact />
    </>
  );
}
