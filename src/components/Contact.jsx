import { useEffect } from "react";
import Section from "./common/Section";
import OutlinedButtonSecondary from "./common/OutlinedButtonSecondary";

export default function Contact({ scrollReveal }) {
  useEffect(() => {
    scrollReveal(".contact-container", {
      delay: 800,
      origin: "bottom",
    });
  }, [scrollReveal]);

  return (
    <Section className="flex justify-center h-full text-white bg-purple-800 border-t-0 tab-land:pb-24 bg-gradient-to-br from-purple-800 to-purple-400 tab-land:clip-wedge-left">
      <div className="container flex-col justify-center contact-container tab-land:pt-14">
        <h2 className="m-0 mb-12 text-3xl font-bold text-gray-100 uppercase projects-title tab-port-sm:text-5xl">
          Contact
        </h2>

        <p className="mb-6 text-2xl">
          Please feel free to reach out if you have any questions about coding
          or think that I may be able to assist you in solving a technical
          problem!
        </p>
        <OutlinedButtonSecondary
          text={"Email Me"}
          href={"mailto:morgen@webslinger.works"}
          target={"_blank"}
          className={
            "!text-2xl tab-port:!text-3xl tab-land:!text-2xl hover:text-purple-800 after:bg-gradient-to-br from-white to-white hover:after:w-full"
          }
        />
      </div>
    </Section>
  );
}
