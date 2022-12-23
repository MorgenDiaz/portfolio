import Section from "./Section";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <Section className="flex justify-center h-full text-white bg-purple-800 border-t-0 pb-36 bg-gradient-to-br from-purple-800 to-purple-400 clip-wedge-right">
      <div className="container flex-col">
        <h2 className="m-0 mb-12 text-3xl font-bold uppercase tab-port-sm:text-5xl">
          About me
        </h2>
        <div className="flex">
          <div className="flex justify-center basis-1/2 ">
            <img
              src={profile}
              alt="profile morgen diaz"
              className="rounded-lg h-72"
            />
          </div>
          <div className="flex items-center text-left basis-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              similique quidem veniam deleniti aut iure a provident nobis
              asperiores voluptatum odio quae, vel totam fugiat eligendi cumque
              neque? Vitae, quod?
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
