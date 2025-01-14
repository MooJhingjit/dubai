import React from "react";
import Hero from "@/components/sections/areas/hero";
import Discover from "@/components/sections/areas/discover";
import TopAreas from "@/components/sections/areas/top-areas";
import { topAreas } from "./area-data";


const page = () => {
  return (
    <>
      <Hero />
      <Discover />
      <TopAreas topAreas={topAreas} />
    </>
  );
};

export default page;
