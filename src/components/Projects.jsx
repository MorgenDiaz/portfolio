import Section from "./common/Section";
import Project from "./Project";
import projectImage from "../assets/project.jpg";

export default function Projects() {
  return (
    <Section className="flex justify-center">
      <div className="container flex-col">
        <h2 className="m-0 mb-12 text-3xl font-bold text-gray-900 uppercase about-title tab-port-sm:text-5xl">
          Projects
        </h2>
        <Project title={"Project Title"} image={projectImage} />
      </div>
    </Section>
  );
}
