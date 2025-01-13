import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="font-poppins bg-[#D1D5D7] text-[#004170] pb-4 pt-10 md:pt-28">
      <div className="grid max-w-md grid-cols-1 gap-4 px-4 mx-auto sm:max-w-7xl sm:px-6 lg:px-8 xl:px-0 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-10 gap-y-10 xl:gap-y-0 xl:gap-20">
        {/* About Section */}
        <div className="text-xl ">
          <h3 className="mb-5 font-bold">About</h3>
          <h3 className="mb-5 font-bold">Contact</h3>
          <h3 className="mb-5 font-bold">People</h3>
        </div>

        {/* Areas Section */}
        <div className="lg:col-span-6 xl:pl-10 xl:col-span-4">
          <h3 className="mb-4 text-xl font-bold">Areas</h3>
          <ul className="grid grid-cols-2 gap-4 text-xl">
            <li className="mb-2 cursor-pointer hover:underline">
              Palm Jumeirah
            </li>
            <li className="mb-2 cursor-pointer hover:underline">
              Dubai Island
            </li>

            <li className="mb-2 cursor-pointer hover:underline">
              Dubai Hills Estate
            </li>
            <li className="mb-2 cursor-pointer hover:underline">
              Jumeirah Bay Island
            </li>
            <li className="mb-2 cursor-pointer hover:underline">
              Emirates Hill{" "}
            </li>
            <li className="cursor-pointer hover:underline">Downtown Dubai </li>
          </ul>
        </div>

        {/* Properties Section */}
        <div className="lg:col-span-3 xl:col-span-4">
          <h3 className="mb-4 text-xl font-bold">Properties</h3>
          <ul className="grid gap-4 text-xl">
            <li className="mb-2 cursor-pointer hover:underline">
              Terms & conditions
            </li>
            <li className="cursor-pointer hover:underline">Privacy policy</li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex-col lg:col-span-3 xl:items-end xl:flex xl:col-span-1">
          <div className="mb-6 w-[233px] h-[87px]">
            <Image
              src="/dubai/logo-black.png"
              alt="Knight Frank"
              width={233}
              height={87}
            />
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex justify-center w-full pt-20 pb-2 mb-4 space-x-4 lg:pt-48">
        <div className="w-auto mx-auto ">
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="hover:text-blue-500"
            >
              <Image
                src="/dubai/facebook.png"
                alt="Facebook"
                width={23}
                height={23}
              />
            </a>
            <a
              href="#"
              className="hover:text-blue-500"
            >
              <Image
                src="/dubai/ig.png"
                alt="Instagram"
                width={23}
                height={23}
              />
            </a>
            <a
              href="#"
              className="hover:text-blue-500"
            >
              <Image
                src="/dubai/linkedin.png"
                alt="Linkedin"
                width={23}
                height={23}
              />
            </a>
            <a
              href="#"
              className="hover:text-blue-500"
            >
              <Image
                src="/dubai/youtube.png"
                alt="Youtube"
                width={23}
                height={23}
              />
            </a>
          </div>
          <p className="text-xs text-[#004170] mt-6">
            Copyright ©2024 Nestopa co.,ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
