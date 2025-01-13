import React from "react";
import Hero from "@/components/sections/areas/hero";
import Discover from "@/components/sections/areas/discover";
import TopAreas from "@/components/sections/areas/top-areas";

const items = [
  {
    image: "/dubai/areas/palm-jumeirah.jpg",
    name: "Palm Jumeirah",
    slug: "palm-jumeirah"
  },
  {
    image: "/dubai/areas/dubai-hills-estate.jpg",
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate"
  },
  {
    image: "/dubai/areas/emirates-hills.jpg",
    name: "Emirates Hills",
    slug: "emirates-hills"
  },
  {
    image: "/dubai/areas/jumeirah-bay-islands.jpg",
    name: "Jumeirah Bay Islands",
    slug: "jumeirah-bay-islands"
  },
  {
    image: "/dubai/areas/dubai-islands.jpg",
    name: "Dubai Islands",
    slug: "dubai-islands"
  },
  {
    image: "/dubai/areas/dubai-downtown.jpg",
    name: "Downtown Dubai",
    slug: "dubai-downtown"
  }
];

const page = () => {
  return (
    <>
      <Hero />

      <Discover />

      <TopAreas topAreas={items} />
    </>
  );
};

export default page;
