import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <Cocktails />
   </>
  )
}

export default App