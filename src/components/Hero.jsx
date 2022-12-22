const SECTION_DEFAULTS = "border-none px-4 py-20 phone-xs:px-0";
const BUTTON_DEFAULTS =
  "inline-block p-2 relative text-2xl tab-port:text-3xl font-semibold z-10 after:block after:absolute after:w-0 after:h-full after:left-0 after:bottom-0 after:-z-10 transition-all after:transition-all";

export default function Hero() {
  return (
    <section
      className={`${SECTION_DEFAULTS} hero min-h-screen flex items-center justify-center border-b-0 bg-slate-50 font-normal text-gray-900 mb-12 phone:mb-0 py-0 tab-port:px-14 inset-0 z-0`}
    >
      <div className="flex justify-center px-10 grow ">
        <div className="">
          <h1 className="mb-12 text-4xl font-bold leading-normal text-center phone-xs:text-5xl phone:text-6xl tab-port:text-left">
            Hi, my name is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-purple-400">
              Morgen Diaz
            </span>
            <br />
            Let me solve your coding troubles!
          </h1>
          <p className="flex justify-center tab-port:justify-start ">
            <a
              rel="noreferrer"
              href="#about"
              className={`${BUTTON_DEFAULTS} border-2 border-purple-800 border-solid hover:border-transparent hover:text-white w-full after:bg-gradient-to-br from-purple-800 to-purple-400 hover:after:w-full`}
            >
              Know more
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
