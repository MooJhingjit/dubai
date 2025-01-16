import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Partner = () => {
  const t = useTranslations("aboutUs.partner");
  return (
    <div className="w-full py-10">
      <div className="max-w-md px-4 mx-auto sm:max-w-7xl md:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mb-5 md:mb-0">
            <h2 className="mb-12 text-3xl font-romain sm:text-5xl !leading-[64px] text-[#FFB944]">
              {t("title")}
            </h2>
            <div className="">
              <p className="text-base font-light text-white sm:text-2xl font-suisse mb-7 break-words !leading-6">
                {t("description1")}
              </p>
              <p className="text-base font-light text-white sm:text-2xl font-suisse   break-words  !leading-6 max-w-[618px]">
                {t("description2")}
              </p>

              <div className="mt-12">
                <Link href={"/contact-us"} className="font-suisse flex justify-center items-center bg-[#009BDC] text-xl  text-[#F7F9FC] py-3 px-8 rounded-full shadow-md w-full sm:w-80 ">
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>
          <div className="md:pl-10">
            <Image
              width={588}
              height={516}
              className="w-full h-full xl:w-[588px] xl:h-[516px]"
              src={t("imageSrc")}
              alt={t("imageAlt")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
