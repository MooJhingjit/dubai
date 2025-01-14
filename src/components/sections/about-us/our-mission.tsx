import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurMission = () => {
  const t = useTranslations("aboutUs.ourMission");
  return (
    <div className="w-full pb-[55px] pt-[43px]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <Image
              width={768}
              height={382}
              src={t("imageSrc")}
              alt={t("imageAlt")}
              className="w-full h-full xl:w-[768] xl:h-[382px] 2xl:w-full 2xl:h-[410px]"
            />
          </div>
          <div className="bg-[#20506A] py-[45px]">
            <div className="pb-12 pt-[52px] p-10 lg:pl-32 lg:pr-20 bg-white h-auto xl:h-[292px] 2xl:h-auto">
              <h2 className="mb-[22px] text-3xl font-romain sm:text-5xl !leading-[64px] text-[#004170]">
                {t("title")}
              </h2>
              <div className="">
                <p className="text-base font-light text-[#001F3F] sm:text-2xl font-suisse !leading-6 break-words max-w-[502px]">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
