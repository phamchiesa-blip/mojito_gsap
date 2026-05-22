import {ScrollTrigger, SplitText} from "gsap/all";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <>
   <div className="text-2xl text-sky-500 flex-center h-[100vh]">Text</div>
   </>
  )
}

export default App