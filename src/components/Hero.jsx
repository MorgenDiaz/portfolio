import { useEffect } from "react";
import Section from "./common/Section";
import OutlinedButtonPrimary from "./common/OutlinedButtonPrimary";

export default function Hero({ scrollReveal }) {
  useEffect(() => {
    scrollReveal(".hero-title", {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    });

    scrollReveal(".know-more-button-container", {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    });
  }, [scrollReveal]);

  return (
    <Section
      className={`min-h-screen flex items-center justify-center border-b-0 bg-slate-50 font-normal text-gray-900 mb-12 phone:mb-0 py-0 tab-port:px-14 inset-0 z-0`}
    >
      <div className="flex justify-center px-10 grow ">
        <div className="hero-title">
          <h1 className="mb-12 text-4xl font-bold leading-normal text-center hero-title phone-xs:text-5xl phone:text-5xl tab-port:text-left tab-land:text-6xl">
            Hi, my name is{" "}
            <span className="inline-block leading-normal text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-purple-400">
              Morgen Diaz
            </span>
            <br />I turn concepts into realities.
          </h1>
          <p className="flex content-center justify-center know-more-button-container tab-port:justify-start ">
            <OutlinedButtonPrimary
              text={"Know more"}
              href={"#about"}
              className={
                "!text-2xl tab-port:!text-3xl hover:text-white after:bg-gradient-to-br from-purple-800 to-purple-400 hover:after:w-full"
              }
            />
          </p>
        </div>
      </div>
    </Section>
  );
}
