import Tilt from "react-parallax-tilt";
import LinkPrimary from "./common/LinkPrimary";
import OutlinedButtonPrimary from "./common/OutlinedButtonPrimary";

export default function Project({ title, image, demoLink, gitHubLink }) {
  return (
    <div className="flex gap-x-8">
      <div className="flex-col text-left info basis-1/3">
        <h3 className="mb-4 text-3xl font-bold text-gray-900">{title}</h3>
        <div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            perspiciatis vitae beatae consequatur consequuntur? Pariatur aliquam
            ipsum quae quam cumque ipsa adipisci quo. Dolore possimus dolorum
            beatae voluptatem illo repellendus!
          </p>
        </div>
        <div className="flex gap-x-4">
          <OutlinedButtonPrimary
            href={demoLink}
            target={"_blank"}
            text={"See Live"}
            className={
              "hover:text-white after:bg-gradient-to-br from-purple-800 to-purple-400 hover:after:w-full"
            }
          />

          <LinkPrimary
            href={gitHubLink}
            target={"_blank"}
            text={"Source Code"}
            className={"hover:pl-2"}
          />
        </div>
      </div>
      <div className="basis-2/3">
        <Tilt
          tiltReverse={true}
          className="parallax-effect-img"
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="20px"
        >
          <img src={image} alt={title} />
        </Tilt>
      </div>
    </div>
  );
}
