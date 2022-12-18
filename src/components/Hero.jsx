export default function Hero() {
  return (
    <section className="hero">
      <div className="container min-h-screen flex items-center border-b-0 bg-slate-50 font-normal text-gray-900 py-0 px-6 sm:px-20 mb-0 inset-0 sticky">
        <h1 className="font-bold leading-normal sm:leading-none text-4xl sm:text-5xl lg:text-6xl mb-12 text-center md:text-left ">
          Hi, my name is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-purple-400">
            Morgen Diaz
          </span>
          <br />
          Let me solve your coding troubles!
        </h1>
        <p className="flex content-center">
          <a rel="noreferrer" href="#about" className="inline-block relative">
            Know more
          </a>
        </p>
      </div>
    </section>
  );
}
