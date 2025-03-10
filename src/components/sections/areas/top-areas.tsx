import Link from "next/link";
import React from "react";
import CardAreaGrid from "../../modules/cards/card-area-grid";
import { useMessages, useTranslations } from "next-intl";

const TopAreas = () => {
  const tAreaPages = useTranslations("area.pages");
  const t = useTranslations("area.topAreas");

  const messages = useMessages();
  const keys =
    typeof messages.area === "object" ? Object.keys(messages.area.pages) : [];
  return (
    <div className="w-full py-10 text-white bg-white md:pt-12">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-8 text-3xl text-[#004170] font-romain sm:text-5xl">
          {t("title")}
        </h2>

        <div className="grid gap-x-5 gap-y-10 gird-cols-1 sm:grid-cols-3">
          {keys.map((area) => (
            <Link
              key={area}
              href={`/areas/${tAreaPages(`${area}.slug`)}`}
            >
              <CardAreaGrid
                image={tAreaPages(`${area}.image`)}
                name={tAreaPages(`${area}.name`)}
                title="Exclusive investment properties in"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAreas;
