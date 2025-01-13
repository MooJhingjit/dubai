import React from "react";
import InvestmentSlider from "./investment-slider";
import { useTranslations } from "next-intl";

const Investment = () => {
  const t = useTranslations("home");

  return (
    <div className="w-full py-10 text-white ">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-6 text-3xl text-white font-romain sm:text-5xl">
          {t("investment.title")}
        </h2>
        <p className="font-suisse text-lg sm:text-[28px] mb-10 text-[#FFB944] ">
          {t("investment.subtitle")}
        </p>
        <InvestmentSlider />
      </div>
    </div>
  );
};

export default Investment;
