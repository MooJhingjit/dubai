"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const items = [
  `Knight Frank MENA has served as a beacon of integrated commercial and
        residential real estate services for the past 12 years.&nbsp;We are your
        trusted partner for all your property needs, providing a comprehensive
        portfolio of real estate services to clients all over the world. As the
        world&apos;s leading independent global consultancy,&nbsp;we leverage
        the unique advantage of a long-term approach, fostering enduring client
        relationships. Our services are globally aware, locally specialized, and
        always geared towards your property success.`,
  `Knight Frank MENA has served as a beacon of integrated commercial and
        residential real estate services for the past 12 years.&nbsp;We are your
        trusted partner for all your property needs, providing a comprehensive
        portfolio of real estate services to clients all over the world. As the
        world&apos;s leading independent global consultancy,&nbsp;we leverage
        the unique advantage of a long-term approach, fostering enduring client
        relationships. Our services are globally aware, locally specialized, and
        always geared towards your property success. Page 2`,
  `Knight Frank MENA has served as a beacon of integrated commercial and
        residential real estate services for the past 12 years.&nbsp;We are your
        trusted partner for all your property needs, providing a comprehensive
        portfolio of real estate services to clients all over the world. As the
        world&apos;s leading independent global consultancy,&nbsp;we leverage
        the unique advantage of a long-term approach, fostering enduring client
        relationships. Our services are globally aware, locally specialized, and
        always geared towards your property success. Page 3`
];

const AboutContent = () => {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // check if the slider is at the end of the array, if so, reset it to 0, else increment it by 1
      setSlider((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="text-base font-light text-white sm:text-2xl font-suisse !leading-6 xl:max-w-[423px]">
        {items[slider]}
      </p>

      <div className="flex space-x-4 justify-center mt-6 w-full">
        {items?.map((_, index) => (
          <button
            type="button"
            key={index?.toString()}
            className={cn(
              index === slider ? "bg-white" : "bg-white/50",
              "size-3 rounded-full"
            )}
            onClick={() => setSlider(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default AboutContent;
