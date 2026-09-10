const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-50px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 md:py-16 lg:px-8 lg:py-20">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl font-inter leading- font-bold  text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            
            {/* Explore Technologies Button */}
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg sm:text-base"
            >
              Explore Technologies
            </button>

            {/* Second Button */}
            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-gray-400 hover:bg-gray-50 sm:text-base"
            >
              Build Your Stack
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <img
            src={"/src/assets/banner-stack.png"}
            alt="Development stack illustration"
            className="h-auto w-full max-w-md object-contain lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;