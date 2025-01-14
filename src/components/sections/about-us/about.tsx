import React from "react";
import { useTranslations } from "next-intl";
import AboutContent from "./about-content";

const About = () => {
  const t = useTranslations("aboutUs.about");
  return (
    <div className="w-full py-12">
      <div className="max-w-md px-4 mx-auto sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-9 text-3xl font-romain sm:text-5xl !leading-[64px] text-[#FFB944]">
          {t("title")}
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap">
          <div className="mb-5 xl:mb-0 basis-full lg:basis-1/2 xl:basis-auto">
            <AboutContent />
          </div>
          <div className="lg:pl-10 basis-full lg:basis-1/2 xl:basis-auto">
            <iframe
              width={771}
              height={434}
              className="w-full h-[434px] md:w-full xl:w-[771px] xl:h-[434px]"
              src={t("videoSrc")}
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
