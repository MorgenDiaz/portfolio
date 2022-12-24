import ScrollReveal from "scrollreveal";
import { DEFAULT_PROPS } from "./data/scrollRevealConfig";

import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  let scrollReveal = ScrollReveal(DEFAULT_PROPS);

  return (
    <div className="text-center">
      <Hero scrollReveal={scrollReveal.reveal} />
      <About />
    </div>
  );
}

export default App;
