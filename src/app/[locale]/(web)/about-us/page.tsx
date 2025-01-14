import React from "react";
import Hero from "@/components/sections/about-us/hero";
import About from "@/components/sections/about-us/about";
import OurMission from "@/components/sections/about-us/our-mission";
import Partner from "@/components/sections/about-us/partner";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <OurMission />
      <Partner />
    </>
  );
};

export default page;
