import React from "react";
import Image from "next/image";

const agents = [
  {
    src: "/dubai/agent-1.png",
    name: "Andrew Cleator",
    position: "Associate Partner"
  },
  {
    src: "/dubai/agent-2.png",
    name: "Aleksandra Draz ",
    position: "Principal Client Advisor "
  },
  {
    src: "/dubai/agent-3.png",
    name: "Paul Clark ",
    position: "Senior Client Advisor"
  },
  {
    src: "/dubai/agent-4.jpg",
    name: "Petri Mannila",
    position: "Head of Prime Residential"
  }
];

const Team = () => {
  return (
    <div className="w-full py-8 text-white ">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl sm:px-6 lg:px-8 xl:px-0">
        <h2 className="mb-3 text-3xl text-white font-romain sm:text-5xl">
          Dubai Real Estate Experts
        </h2>
        <p className="font-suisse  text-lg sm:text-[28px] mb-9  text-[#FFB944]">
          Speak to one of our area investment specialists today
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-none">
          {agents.map((_, index) => (
            <div
              key={index}
              className="w-full text-center md:text-left "
            >
              <div className="h-[250px] sm:h-[348px] md:h-[250px]  lg:h-[348px]  max-w-[294px]  relative">
                <Image
                  src={_.src}
                  alt={_.name}
                  // width={294}
                  // height={348}
                  fill
                  sizes="(max-width: 640px) 30vw, 40vw"
                  style={{
                    objectFit: "cover"
                  }}
                  className="w-full mb-4 shadow-md rounded-xl "
                />
              </div>
              <h3 className="mt-4 text-xl font-suisse ">{_.name}</h3>
              <p className="font-suisse text-xs text-[#63C6EB] mt-1 font-bold">
                {_.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
