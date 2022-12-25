import Section from "./common/Section";
import Project from "./Project";
import projectImage from "../assets/mission_launch_project.png";

export default function Projects() {
  return (
    <Section className="flex justify-center">
      <div className="container flex-col -mt-10">
        <h2 className="m-0 mb-12 text-3xl font-bold text-gray-900 uppercase projects-title tab-port-sm:text-5xl">
          Projects
        </h2>
        <Project
          title={"Mission Control"}
          image={projectImage}
          demoLink={"http://52.87.242.33:8000/launch"}
          gitHubLink={"https://github.com/MorgenDiaz/nasa-mission-control"}
        />
      </div>
    </Section>
  );
}
