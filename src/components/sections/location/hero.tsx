import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  image: string;
  locationName: string;
};
const Hero = (props: Props) => {
  const { image, locationName } = props;
  const t = useTranslations("area.pageSection.hero");

  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('/dubai/locations/hero-overlay.png')`,
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
            className="font-romain  max-w-[900px] text-4xl sm:text-7xl   text-[#F7F9FC] mb-4"
            style={{
              lineHeight: "1.5"
            }}
          >
            {t("title")}
            <br /> <span className="text-[#FFB944]">{locationName}</span>
          </h1>
          {/* Subheading */}
          <p
            className="font-suisse text-lg sm:text-[32px] mb-20 sm:mb-9 text-[#F7F9FC] max-w-[900px]"
            style={{
              lineHeight: "1.4"
            }}
          >
            {t("subTitle", { locationName })}
          </p>
          {/* Call to Action Button */}
          <button className="font-suisse bg-[#FFB944] sm:text-xl text-[#0D1B2A]   pb-1.5 pt-2 rounded-full shadow-md px-8 md:px-20 w-full md:w-auto">
            {t("cta", { locationName })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
