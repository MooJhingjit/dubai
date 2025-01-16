import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("contactUs.hero");

  return (
    <div
      className="relative w-full h-[217px] bg-cover bg-top bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url(/dubai/contact/hero.png)"
      }}
    >
      {/* bg overlay */}
      <div className=" w-full h-full absolute top-0 bg-[#004170]/80"></div>
      <div className="text-center mx-auto relative px-4 sm:px-6 lg:px-8 xl:px-0">
        <h1
          className="font-romain text-4xl sm:text-7xl text-[#FFB944] "
          style={{
            lineHeight: "1.5"
          }}
        >
          {t("title")}
        </h1>
        {/* Subheading */}
        <p
          className="font-poppins text-lg text-[#F7F9FC]"
          style={{
            lineHeight: "1.4"
          }}
        >
          {t("subTitle")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
