import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  title?: string;
};
const CardAreaGrid = (props: Props) => {
  const { image, name, title } = props;
  return (
    <div className="relative overflow-hidden text-center shadow-md rounded-xl">
      {/* overlay  */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70"></div>
      <Image
        src={image}
        alt={name}
        width={400}
        height={314}
        className="object-cover w-full h-full aspect-[4/3]"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
        <div className="py-4 mx-auto">
          {!!title && <h3 className="text-xs font-suisse">{title}</h3>}
          <p className="text-xl font-semibold text-white font-suisse xl:text-3xl">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAreaGrid;
