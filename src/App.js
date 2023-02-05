import ScrollReveal from "scrollreveal";
import { DEFAULT_PROPS } from "./data/scrollRevealConfig";
import ReactGA from "react-ga";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnalyticsContext } from "./AnalyticsContext";

ReactGA.initialize("G-J3GEGYGFRE");

function App() {
  let scrollReveal = ScrollReveal(DEFAULT_PROPS);

  return (
    <AnalyticsContext.Provider value={ReactGA}>
      <div className="text-center">
        <Hero scrollReveal={scrollReveal.reveal} />
        <About scrollReveal={scrollReveal.reveal} />
        <Projects scrollReveal={scrollReveal.reveal} />
        <Contact scrollReveal={scrollReveal.reveal} />
        <Footer />
      </div>
    </AnalyticsContext.Provider>
  );
}

export default App;
