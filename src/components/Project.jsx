import LinkPrimary from "./common/LinkPrimary";
import OutlinedButtonPrimary from "./common/OutlinedButtonPrimary";

export default function Project({ title, image }) {
  return (
    <div className="flex">
      <div className="flex-col text-left info basis-1/2">
        <h3>{title}</h3>
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
            href={"#!"}
            target={"_blank"}
            text={"See Live"}
            className={
              "hover:text-white after:bg-gradient-to-br from-purple-800 to-purple-400 hover:after:w-full"
            }
          />

          <LinkPrimary
            href={"#!"}
            target={"_blank"}
            text={"Source Code"}
            className={"hover:pl-2"}
          />
        </div>
      </div>
      <div className="basis-1/2">
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}
