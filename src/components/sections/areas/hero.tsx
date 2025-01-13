import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('/dubai/areas/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('/dubai/areas/hero-overlay.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* <div className="z-20 absolute inset-0 bg-gradient-to-r to-transparent  from-[#2b333c] via-[#293038]  via-40% "></div> */}

      <div className="relative z-30 flex items-center max-w-md px-4 py-10 mx-auto sm:max-w-7xl sm:px-6 lg:px-8 xl:px-0 md:py-16">
        {/* Background image */}

        {/* Content Section */}
        <div className="text-center mt-28 sm:mt-14 sm:text-left">
          {/* Heading */}
          <h1
            className="font-romain  text-4xl sm:text-7xl  text-[#F7F9FC] mb-5"
            style={{
              lineHeight: "1.5"
            }}
          >
            Dubai&apos;s top areas
            <br />
            for real estate investment
          </h1>
          {/* Subheading */}
          <p className="font-suisse text-lg sm:text-2xl mb-20 sm:mb-9 text-[#F7F9FC] max-w-[900px]">
            Discover the most desirable areas in Dubai that are providing the
            highest returns to informed property investors
          </p>
          <p className="font-suisse text-lg sm:text-2xl mb-20 sm:mb-9 text-[#F7F9FC] max-w-[900px]">
            Demand for the Dubai luxury real estate segment is set to rise by
            25% by 2028. Selecting the right property in the right area is key.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
