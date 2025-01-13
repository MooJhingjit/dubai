import React from "react";

const Discover = () => {
  return (
    <div className="w-full ">
      <div className="max-w-md sm:max-w-7xl flex  relative justify-end  mx-auto bg-[#004170]/80 ">
        <div
          className="absolute inset-0 z-10 bg-cover md:bg-contain"
          style={{
            backgroundImage: `url('/dubai/book.png')`,

            backgroundRepeat: "no-repeat"
          }}
        ></div>

        <div className=" z-20 absolute inset-0  md:bg-gradient-to-l  bg-gradient-to-t  from-[#004170] from-40% to-transparent "></div>

        {/* Text Content Section */}
        <div className="relative z-30 px-4 py-8 text-center md:w-1/2 md:text-right lg:py-16 sm:px-6 lg:px-8 xl:px-0">
          <h2
            className="mb-5 text-3xl font-light text-white font-romain sm:text-4xl"
            style={{
              lineHeight: "1.5"
            }}
          >
            Discover Dubai’s Best Luxury Investment Opportunities
          </h2>
          <p className="font-suisse text-lg sm:text-xl mb-8 text-center md:text-right text-[#FFB944]  md:max-w-[600px]  md:ml-auto ">
            {` With over a century of trust from real estate investors, Knight
          Frank’s expert analysts deliver exclusive insights into 
          Dubai’s next big investment opportunities.
          `}
          </p>

          <button className="font-suisse bg-[#009BDC] text-xl  text-[#F7F9FC] py-2.5 px-14 rounded-full shadow-md">
            Get Instant Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
