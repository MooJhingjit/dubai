import React from "react";
import Hero from "@/components/sections/about-us/hero";
import About from "@/components/sections/about-us/about";
import OurMission from "@/components/sections/about-us/our-mission";
import Partner from "@/components/sections/about-us/partner";
import { getTranslations } from "next-intl/server";
import { availableLanguages } from "@/lib/config";
import { generateHreflang } from "@/lib/utils";


export async function generateMetadata({ params }: {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("aboutUs.meta");
  const links = generateHreflang(availableLanguages, "/about-us");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: links[locale as typeof availableLanguages[number]],
      languages: links
    },
  };
}

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
