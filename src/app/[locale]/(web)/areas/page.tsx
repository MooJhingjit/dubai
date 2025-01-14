import React from "react";
import Hero from "@/components/sections/areas/hero";
import Discover from "@/components/sections/areas/discover";
import TopAreas from "@/components/sections/areas/top-areas";
import { topAreas } from "./area-data";
import Contact from "@/components/sections/areas/contact";


const page = () => {
  return (
    <>
      <Hero />
      <Discover />
      <Contact />
      <TopAreas topAreas={topAreas} />
    </>
  );
};

export default page;
