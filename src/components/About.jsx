import { useEffect, useContext } from "react";
import Helmet from "react-helmet";
import Section from "./common/Section";
import profile from "../assets/profile.jpg";
import OutlinedButtonSecondary from "./common/OutlinedButtonSecondary";
import ABOUT_PARAGRAPH from "../data/about";
import ResumePDF from "../assets/Resume_Morgen_Diaz.pdf";
import { AnalyticsContext } from "../AnalyticsContext";

export default function About({ scrollReveal }) {
  const analytics = useContext(AnalyticsContext);

  useEffect(() => {
    scrollReveal(".about-title", {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    });

    scrollReveal(".about-image-wrapper", {
      delay: 600,
      origin: "bottom",
    });

    scrollReveal(".about-info-container", {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    });
  }, [scrollReveal]);

  const trackViewResumeEvent = () => {
    analytics.event({
      category: "Button",
      action: "Click",
      label: "View Resume",
    });
  };

  return (
    <Section
      id="about"
      className="flex justify-center h-full text-white bg-purple-800 border-t-0 tab-port-sm:pb-36 bg-gradient-to-br from-purple-800 to-purple-400 tab-land:clip-wedge-right"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Software Engineering Portfolio</title>
        <meta
          name="description"
          content="I am a technology evangelist with 8+ years of experience in the software development industry. Skilled and adaptable, looking to provide successful technology solutions for companies."
        />
      </Helmet>
      <div className="container flex-col">
        <h2 className="m-0 mb-12 text-3xl font-bold uppercase about-title tab-port-sm:text-5xl">
          About me
        </h2>
        <div className="flex flex-wrap gap-y-12 big-desktop:gap-y-0">
          <div className="flex justify-center about-image-wrapper grow basis-1 big-desktop:basis-1/2 drop-shadow-lg">
            <img
              src={profile}
              alt="profile morgen diaz"
              className="bg-purple-800 h-72"
            />
          </div>
          <div className="flex flex-wrap items-center content-center justify-center text-center about-info-container justify-items-center tab-port-sm:justify-start tab-port-sm:text-left tab-port-sm:basis-1/2">
            <p className="w-full text-lg whitespace-pre-line">
              {ABOUT_PARAGRAPH}
            </p>

            <span className="flex items-center mt-8">
              <OutlinedButtonSecondary
                text={"View Resume"}
                href={ResumePDF}
                target={"_blank"}
                onClick={trackViewResumeEvent}
                className={
                  "hover:text-purple-800 after:bg-gradient-to-br from-white to-white hover:after:w-full"
                }
              />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
