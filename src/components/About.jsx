import Section from "./common/Section";
import profile from "../assets/profile.jpg";
import OutlinedButtonSecondary from "./common/OutlinedButtonSecondary";
import ABOUT_PARAGRAPH from "../data/about";
import ResumePDF from "../assets/Resume_Morgen_Diaz.pdf";

export default function About() {
  return (
    <Section className="flex justify-center h-full text-white bg-purple-800 border-t-0 tab-port-sm:pb-36 bg-gradient-to-br from-purple-800 to-purple-400 big-desktop:clip-wedge-right">
      <div className="container flex-col">
        <h2 className="m-0 mb-12 text-3xl font-bold uppercase tab-port-sm:text-5xl">
          About me
        </h2>
        <div className="flex flex-wrap gap-y-12 big-desktop:gap-y-0">
          <div className="flex justify-center grow basis-1 big-desktop:basis-1/2">
            <img
              src={profile}
              alt="profile morgen diaz"
              className="rounded-lg h-72"
            />
          </div>
          <div className="flex flex-wrap items-center content-center justify-center text-center justify-items-center tab-port-sm:justify-start tab-port-sm:text-left tab-port-sm:basis-1/2">
            <p className="w-full text-lg whitespace-pre-line">
              {ABOUT_PARAGRAPH}
            </p>

            <span className="flex items-center mt-8">
              <OutlinedButtonSecondary
                text={"View Resume"}
                href={ResumePDF}
                target={"_blank"}
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
