import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
};
const CardArea = (props: Props) => {
  const { image, name } = props;
  return (
    <div className="text-center relative h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[400px] rounded-xl overflow-hidden">
      {/* overlay  */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-30 "></div>
      <Image
        src={image}
        alt={name}
        width={400}
        height={437}
        className="object-cover shadow-md "
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
        <div className="py-4 mx-auto">
          <h3 className="text-xs font-suisse ">
            Exclusive investment properties in
          </h3>
          <p className="text-xl font-semibold text-white font-suisse xl:text-3xl">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardArea;
