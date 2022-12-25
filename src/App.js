import ScrollReveal from "scrollreveal";
import { DEFAULT_PROPS } from "./data/scrollRevealConfig";

import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  let scrollReveal = ScrollReveal(DEFAULT_PROPS);

  return (
    <div className="text-center">
      <Hero scrollReveal={scrollReveal.reveal} />
      <About scrollReveal={scrollReveal.reveal} />
      <Projects scrollReveal={scrollReveal.reveal} />
      <Contact scrollReveal={scrollReveal.reveal} />
      <Footer />
    </div>
  );
}

export default App;
