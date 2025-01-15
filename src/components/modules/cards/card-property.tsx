import React from "react";
import Image from "next/image";
import { LocationTranslation } from "../../../../types";
import { getLocationName } from "@/lib/utils";

type Props = {
  id: number;
  name: string;
  price: string;
  location1: LocationTranslation[];
  location2: LocationTranslation[];
  location3: LocationTranslation[];
  image: string;
  bedrooms: number;
  bathrooms: number;
  interiorSize: number;
};

const CardProperty = (props: Props) => {
  const {
    id,
    name,
    price,
    location1,
    location2,
    location3,
    image,
    bedrooms,
    bathrooms,
    interiorSize
  } = props;

  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  const location = getLocationName(location1, location2, location3);

  const imageProxy =
    "https://nestopa-sites-staging.sgp1.cdn.digitaloceanspaces.com";

  return (
    <div
      key={id?.toString()}
      className="bg-white rounded-[14px] shadow-md p-2.5"
    >
      {/* image container */}
      <div className="relative rounded-[14px] aspect-[4/3] lg:aspect-auto overflow-hidden">
        <div className=" absolute top-[21px] left-[21px] z-20 space-x-2">
          <span className=" font-medium text-xs text-[#001F3F] bg-[#FF9C00] w-[30px] h-20 px-3 py-1.5 rounded-full">
            FOR SALE
          </span>
          <span className=" font-medium text-xs text-[#F7F9FC] bg-[#004170] w-[30px] h-20 px-3 py-1.5 rounded-full">
            FEATURED
          </span>
        </div>
        <Image
          src={imageProxy + image}
          alt={name}
          width={384}
          height={268}
          className="w-full h-full lg:w-full lg:h-[268px]"
        />
      </div>

      {/* content */}
      <div className="p-2 lg:p-4">
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-suisse font-medium text-[#1A1A1A] text-lg truncate w-3/5">
            {name}
          </h4>
          <span className="font-suisse font-semibold text-xl sm:text-[22px] w-2/5 text-[#001F3F] text-end">
            {numberFormat.format(parseFloat(price))}
          </span>
        </div>
        <div className="font-suisse text-sm text-[#1A1A1A] flex items-center space-x-1.5">
          <Image
            width={18}
            height={18}
            src="/dubai/icons/pin.png"
            alt="location-icon"
          />
          <span
            className="leading-7 line-clamp-1"
            title={location}
          >
            {location}
          </span>
        </div>

        <ul className="flex mt-4  text-xs lg:text-sm font-suisse h-[18px]">
          <li className="flex flex-1 items-center">
            <Image
              width={18}
              height={18}
              src="/dubai/icons/bed.png"
              alt="bed-icon"
              className="mr-3"
            />

            <span className="">{bedrooms || "-"} Beds</span>
          </li>
          <li className="w-[1px] h-[18px] bg-[#939EAB] mr-4"></li>
          <li className="flex  flex-1  items-center justify-center">
            <Image
              width={18}
              height={18}
              src="/dubai/icons/bath.png"
              alt="bath-icon"
              className="mr-3"
            />
            <span className="">{bathrooms || "-"} Baths</span>
          </li>
          <li className="w-[1px] h-[18px] bg-[#939EAB] ml-2 mr-4"></li>
          <li className="flex   flex-1 items-center justify-center">
            <Image
              width={18}
              height={18}
              src="/dubai/icons/squre.png"
              alt="square-icon"
              className="mr-3"
            />
            <span className="">{interiorSize || "-"} Sqft</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardProperty;
