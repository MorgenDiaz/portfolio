import ScrollReveal from "scrollreveal";
import { DEFAULT_PROPS } from "./data/scrollRevealConfig";

import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  let scrollReveal = ScrollReveal(DEFAULT_PROPS);

  return (
    <div className="text-center">
      <Hero scrollReveal={scrollReveal.reveal} />
      <About scrollReveal={scrollReveal.reveal} />
      <Projects />
    </div>
  );
}

export default App;
