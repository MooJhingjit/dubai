import React from "react";
import { generateHreflang } from "@/lib/utils";
import { availableLanguages } from "@/lib/config";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/home/hero";
import Discover from "@/components/sections/home/discover";
import Investment from "@/components/sections/home/investment";
import Team from "@/components/sections/home/team";
import ContactForm from "@/components/modules/contact-form";

export async function generateMetadata({ params }: {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home.meta");
  const links = generateHreflang(availableLanguages, "/");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: links[locale as typeof availableLanguages[number]],
      languages: links
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Discover />
      <Investment />
      <Team />
      <ContactForm
        title="Access The Latest Dubai Market Updates"
        subTitle="Get exclusive real estate investment opportunities before they hit the
          market."
      />
    </>
  );
}





