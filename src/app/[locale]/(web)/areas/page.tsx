import React from "react";
import Hero from "@/components/sections/areas/hero";
import Discover from "@/components/sections/areas/discover";
import TopAreas from "@/components/sections/areas/top-areas";
import Contact from "@/components/sections/areas/contact";
import { getTranslations } from "next-intl/server";
import { generateHreflang } from "@/lib/utils";
import { availableLanguages } from "@/lib/config";

export async function generateMetadata({ params }: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("area.meta");


  const links = generateHreflang(availableLanguages, "/areas");

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
      <Discover />
      <Contact />
      <TopAreas />
    </>
  );
};

export default page;
