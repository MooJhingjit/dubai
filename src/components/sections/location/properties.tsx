import React from "react";
import CardProperty from "../../modules/cards/card-property";
import { LocationTranslation } from "../../../../types";

type Props = {
  locationName: string;
  properties: {
    id: number;
    name: string;
    price: string;
    location1: LocationTranslation[];
    location2: LocationTranslation[];
    location3: LocationTranslation[];
    beds: number;
    baths: number;
    image: string;
    sqft: number;
  }[];
};
const Properties = (props: Props) => {
  const { locationName, properties } = props;
  return (
    <div className="w-full pb-7 pt-[45px]">
      <div className="max-w-md px-4 mx-auto sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-5 text-3xl text-[#FFB944] font-romain sm:text-5xl !leading-[64px]">
          {locationName} investment properties for sale
        </h2>
        <p className="font-suisse text-lg sm:text-[32px] mb-5 text-[#F7F9FC] !leading-[45px]">
          Discover the most desirable areas in Dubai that are providing the
          highest returns to informed property investors
        </p>
        <div className="grid gap-5 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <CardProperty
              key={property.id}
              id={property.id}
              name={property.name}
              price={property.price}
              image={property.image}
              location1={property.location1}
              location2={property.location2}
              location3={property.location3}
            />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <a
            href="#"
            className="w-[352px] rounded-3xl h-[52px] font-suisse text-xl bg-[#F7F9FC] text-[#004170] flex justify-center items-center"
          >
            See more {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Properties;
