import missionControlImage from "../assets/mission_control_project.png";

const missionControl = {
  title: "Mission Control",
  description: `Mission Control allows you to schedule an interstellar expedition to one of the Kepler Exoplanets and to view upcoming and previous launches from NASA and SpaceX. 

  I decided to build Mission Control as my first practice project, after graduating from the Cal Poly Full Stack Bootcamp because although it is a simple user experience, I had to touch on many core concepts of back-end development. Some of those concepts include designing a REST API, reading data from the file system, implementing an API versioning system, utilizing 3rd party APIs, building a NoSQL database, implementing load balancing, and containerization using Docker and an AWS EC2 instance.`,

  image: missionControlImage,
  demoLink: "http://52.87.242.33:8000/launch",
  githubLink: "https://github.com/MorgenDiaz/nasa-mission-control",
};

const projects = [missionControl];

export default projects;
