import { useEffect } from "react";
import Section from "./common/Section";
import Project from "./Project";
import projects from "../data/projects";

export default function Projects({ scrollReveal }) {
  useEffect(() => {
    scrollReveal(".projects-title", {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    });
  }, [scrollReveal]);

  return (
    <Section className="flex justify-center">
      <div className="container flex-col -mt-10">
        <h2 className="m-0 mb-12 text-3xl font-bold text-gray-900 uppercase projects-title tab-port-sm:text-5xl">
          Projects
        </h2>

        {projects.map((project) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              gitHubLink={project.githubLink}
              scrollReveal={scrollReveal}
            />
          );
        })}
      </div>
    </Section>
  );
}
