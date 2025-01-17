import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const agents = [
  {
    src: "/dubai/people/petri-mannila.png",
    name: "Petri Mannila",
    position: "Head of Prime Residential",
    spoken: ["English", "Finnish"],
    experience: "33 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/andrew-cleator.png",
    name: "Andrew Cleator",
    position: "Associate Partner",
    spoken: ["English"],
    experience: "17 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/paul-clark.png",
    name: "Paul Clark",
    position: "Senior Client Advisor",
    spoken: ["English"],
    experience: "13 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/younus-karim.png",
    name: "Younus Karim",
    position: "Private Client Advisor",
    spoken: ["English"],
    experience: "8 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/rachel-denver.png",
    name: "Rachel Denver",
    position: "Senior Client Advisor",
    spoken: ["English"],
    experience: "13 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/olga-manilla.png",
    name: "Olga Manilla",
    position: "Senior Client Advisor",
    spoken: ["English", "Russian", "Italian"],
    experience: "7 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/ikram-nagani.png",
    name: "Ikram Nagani",
    position: "Private Client Advisor",
    spoken: ["English", "Hindi"],
    experience: "3 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/evija-segleniece.png",
    name: "Evija Segleniece",
    position: "Senior Sales Consultant",
    spoken: ["English", "Russian", "Latvian"],
    experience: "10 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/mevand-wassel.png",
    name: "Mevand Wassel",
    position: "Senior Client Advisor",
    spoken: ["English"],
    experience: "8 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/aleksandra-draz.png",
    name: "Aleksandra Draz",
    position: "Principal Client Advisor",
    spoken: ["English", "Bulgarian"],
    experience: "13 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/ann-katile.png",
    name: "Ann Katile ",
    position: "Private Client Advisor",
    spoken: ["English", "Swahili"],
    experience: "11 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "/dubai/people/joanna-liu.png",
    name: "Joanna Liu",
    position: "Senior Client Advisor",
    spoken: ["English", "Mandarin"],
    experience: "7 years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "",
    name: "May Rahmani",
    position: "Senior Client Advisor",
    spoken: ["English"],
    experience: "? years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  },
  {
    src: "",
    name: "Michaella Muller",
    position: "Senior Client Advisor",
    spoken: ["English"],
    experience: "? years",
    code: "00000000001",
    phone: "(666) 999-8888",
    email: "user@knightfrank"
  }
];

const Team = () => {
  const t = useTranslations("people.team");

  return (
    <div className="w-full py-[63px] text-white ">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-6xl sm:px-6 lg:px-8 xl:px-0">
        <h2 className="mb-3 text-3xl text-white font-romain sm:text-5xl">
          {t("title")}
        </h2>
        <p className="font-suisse  text-lg sm:text-[28px] mb-9  text-[#FFB944]">
          {t("subTitle")}
        </p>
      </div>
      <div className="flex">
        <div className="flex justify-end pl-4 sm:container mx-auto lg:pl-28 basis-1/2 sm:basis-auto group">
          <div className="relative w-full h-[212px] sm:h-full lg:w-[558px] lg:h-[505px] rounded-xl overflow-hidden lg:shrink-0 ">
            <div className="bg-black/65 w-full h-full absolute z-10 top-full group-hover:top-0 duration-300 transition-all">
              <div className="flex justify-center items-center h-full">
                <ul className="space-y-5 font-light sm:font-bold text-center text-xs sm:text-base">
                  <li>LIC#: {agents[0].code}</li>
                  <li>{agents[0].phone}</li>
                  <li>{agents[0].email}</li>
                </ul>
              </div>
            </div>
            <Image
              src={agents[0].src}
              alt={agents[0].name}
              fill
              className="mb-4 object-cover"
            />
          </div>
        </div>
        <div className="text-start mt-6 lg:mt-14 box-border w-full basis-1/2 sm:basis-auto">
          <div className="bg-[#20506A] py-4 sm:py-[45px] w-full">
            <div className="bg-[#F7F9FC] pl-8 py-5 sm:pl-[74px] sm:pt-[78px] sm:pb-[70px] w-full">
              <h3 className=" text-base sm:text-3xl lg:text-[40px]  text-[#254D78] sm:mb-4">
                {agents[0].name}
              </h3>
              <p className="text-[#009BDC] text-[8px] sm:text-xl lg:text-2xl mb-2 sm:mb-4">
                {agents[0].position}
              </p>
              <div className="font-bold text-[8px] sm:text-xl lg:text-xl text-[#010203] space-y-2 sm:space-y-4">
                <p>
                  {t("languageSpoken")}:{" "}
                  <span className="block sm:inline sm:ml-1.5 font-light">
                    {agents[0]?.spoken.join(", ")}
                  </span>
                </p>
                <p>
                  {t("experience")}:{" "}
                  <span className="block sm:inline sm:ml-1.5 font-light">
                    {agents[0]?.experience} Years
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md px-4 mx-auto text-center sm:max-w-6xl sm:px-6 lg:px-8 xl:px-0">
        <div className="px-10 sm:px-12">
          <hr className="border-[#FFB944] w-full my-5 sm:mt-10 sm:mb-[53px] border" />
        </div>

        {/* <div className="grid grid-cols-2 gap-12 mx-auto md:grid-cols-3 md:gap-none"> */}
        <div className="flex flex-wrap justify-center w-full md:gap-12">
          {agents?.slice(1)?.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                index % 2 === 0 ? "pr-2" : "pl-2",
                "text-start font-suisse group basis-1/2 py-4 md:basis-0 md:p-0"
              )}
            >
              <div className="relative w-full h-[187px] sm:w-full md:w-80 sm:h-80 shadow-md rounded-xl overflow-hidden mb-2  sm:mb-4">
                <div className="bg-black/65 w-full h-full absolute z-10 top-full group-hover:top-0 duration-300 transition-all">
                  <div className="flex justify-center items-center h-full">
                    <ul className="space-y-5 font-light sm:font-bold text-center text-xs sm:text-base">
                      <li>LIC#: {item.code}</li>
                      <li>{item.phone}</li>
                      <li>{item.email}</li>
                    </ul>
                  </div>
                </div>
                {!item.src && (
                  <div className=" absolute top-0 w-full h-full z-10 flex justify-center items-center ">
                    <div className="text-center font-bold text-lg sm:text-4xl max-w-[90px] sm:max-w-[192px] font-suisse !leading-10 sm:!leading-[72px] text-white/50">
                      IMAGE PORTRAIT NEEDED
                    </div>
                  </div>
                )}
                <Image
                  src={item.src || "/dubai/people/no-image.png"}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 30vw, 40vw"
                  style={{
                    objectFit: "cover"
                  }}
                  className="w-full "
                />
              </div>
              <h3 className="text-base sm:text-2xl text-[#FFB944]">
                {item.name}
              </h3>
              <p className="text-[#B0B8C1] text-xs sm:text-sm mb-1">
                {item.position}
              </p>
              <div className="font-bold text-xs sm:text-sm space-y-1">
                <p>
                  {t("languageSpoken")}:{" "}
                  <span className="block sm:inline sm:ml-1.5 font-light">
                    {item?.spoken.join(", ")}
                  </span>
                </p>
                <p>
                  {t("experience")}:{" "}
                  <span className="block sm:inline sm:ml-1.5 font-light">
                    {item?.experience}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
