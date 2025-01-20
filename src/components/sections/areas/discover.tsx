import { useTranslations } from "next-intl";
import React from "react";

const Discover = () => {
  const t = useTranslations("area.discover");

  return (
    <div className="w-full bg-[#001F3F] ">
      <div className="max-w-md sm:max-w-7xl flex  relative justify-end  mx-auto bg-[#001F3F]/80 h-auto sm:h-[292px]">
        <div
          className="absolute inset-0 z-10 bg-cover md:bg-contain"
          style={{
            backgroundImage: `url('/dubai/book.png')`,

            backgroundRepeat: "no-repeat"
          }}
        ></div>

        <div className=" z-20 absolute inset-0  md:bg-gradient-to-l  bg-gradient-to-t  from-[#001F3F] from-40% to-transparent "></div>

        {/* Text Content Section */}
        <div className="relative mt-6 flex items-center z-30 px-4 py-8 text-center md:w-2/3 md:text-right lg:py-16 sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-3xl font-romain sm:text-[40px] text-[#FFB944] !leading-[60px]">
            {t("title")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Discover;
